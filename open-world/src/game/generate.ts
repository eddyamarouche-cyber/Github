import {
  insertBucket,
  solidsOverlap,
  tileWalkable,
} from './collision.ts'
import { hash } from './noise.ts'
import { findPath, type GridPoint } from './path.ts'
import { COLS, ROWS, TILE, center, places, sporeTiles } from './places.ts'
import type { Bird, Deer, Entity, EntityKind, Npc, Spark, Tile, World } from './types.ts'

function riverX(ty: number): number {
  return 86 + Math.sin(ty * 0.09) * 6 + Math.sin(ty * 0.04 + 1.2) * 4
}

function coastY(tx: number): number {
  return 116 + Math.sin(tx * 0.065) * 3.2
}

function capeDist(tx: number, ty: number): number {
  return Math.hypot((tx - 124) / 13, (ty - 112) / 16)
}

function nearSegment(
  tx: number,
  ty: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  width: number,
): boolean {
  const abx = bx - ax
  const aby = by - ay
  const len = abx * abx + aby * aby
  const t = len === 0 ? 0 : Math.max(0, Math.min(1, ((tx - ax) * abx + (ty - ay) * aby) / len))
  const dx = tx - (ax + abx * t)
  const dy = ty - (ay + aby * t)
  return dx * dx + dy * dy <= width * width
}

function classify(tx: number, ty: number, seed: number): Tile {
  const variant = Math.floor(hash(tx, ty, seed + 3) * 4)
  const tile: Tile = {
    biome: 'meadow',
    path: false,
    dock: false,
    bridge: false,
    bar: false,
    variant,
  }
  const dock = tx >= 69 && tx <= 72 && ty >= 110 && ty <= 126
  const island = Math.hypot(tx - places.island.tx, ty - places.island.ty)
  const bar = nearSegment(tx + 0.5, ty + 0.5, 71.5, 126.5, 38, 131, 1.35)
  const bridge =
    (Math.abs(ty - 96) <= 1 && Math.abs(tx - riverX(96)) <= 3) ||
    (Math.abs(ty - 62) <= 1 && Math.abs(tx - riverX(62)) <= 3)
  const river = ty > 16 && ty < 118 && Math.abs(tx + 0.5 - riverX(ty)) <= 1.2
  const cape = capeDist(tx, ty)
  const east = 131 + Math.sin(ty * 0.07) * 2
  const high = Math.hypot(tx - 108, (ty - 16) * 1.15)
  const forestEdge = 43 + Math.sin(ty * 0.08) * 3

  if (dock) {
    tile.dock = true
    tile.biome = 'sand'
    return tile
  }
  if (island <= 5.2) {
    tile.biome = island <= 3.3 ? 'meadow' : 'sand'
    return tile
  }
  if (bar && ty >= 120) {
    tile.bar = true
    tile.biome = 'sand'
    return tile
  }
  if (bridge) {
    tile.bridge = true
    tile.biome = 'water'
    return tile
  }
  if (cape < 1 && ty > coastY(tx) - 8) {
    tile.biome = cape > 0.78 ? 'sand' : 'meadow'
    return tile
  }
  if (river || ty > coastY(tx) + 1.4 || tx > east) {
    tile.biome = 'water'
    return tile
  }
  if (ty > coastY(tx) - 1) {
    tile.biome = 'sand'
    return tile
  }
  if (ty <= 8 || (high < 7 && ty < 28)) {
    tile.biome = 'rock'
    return tile
  }
  if (high < 30 && ty < 52 && tx > 86) {
    tile.biome = 'highland'
    return tile
  }
  if (ty > 18 && ty < 104 && tx < forestEdge) {
    tile.biome = 'forest'
  }
  const village = Math.hypot(tx - places.village.tx, ty - places.village.ty)
  if (village < 8 && tile.biome !== 'water' && tile.biome !== 'rock') tile.biome = 'meadow'
  const garden = Math.hypot(tx - places.lin.tx, ty - places.lin.ty)
  if (garden < 3.4 && tile.biome === 'forest') tile.biome = 'meadow'
  return tile
}

function addEntity(
  entities: Entity[],
  buckets: Map<number, Entity[]>,
  entity: Entity,
): void {
  entities.push(entity)
  if (entity.solid) insertBucket(buckets, entity)
}

export function generateWorld(seed: number): World {
  const tiles: Tile[] = new Array(COLS * ROWS)
  for (let ty = 0; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) tiles[ty * COLS + tx] = classify(tx, ty, seed)
  }

  const roadBlocked = new Uint8Array(COLS * ROWS)
  const entities: Entity[] = []
  const buckets = new Map<number, Entity[]>()
  const chimneys: Spark[] = []

  const block = (tx: number, ty: number, w: number, h: number) => {
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue
        roadBlocked[y * COLS + x] = 1
      }
    }
  }

  const place = (
    kind: EntityKind,
    tx: number,
    ty: number,
    radius: number,
    solid: boolean,
    variant = 0,
    id = `${kind}-${tx}-${ty}`,
  ) => {
    const at = center(tx, ty)
    addEntity(entities, buckets, { id, kind, x: at.x, y: at.y, radius, solid, variant })
    return at
  }

  const houses: { tx: number; ty: number; variant: number }[] = [
    { tx: 63, ty: 105, variant: 0 },
    { tx: 78, ty: 104, variant: 1 },
    { tx: 62, ty: 110, variant: 2 },
    { tx: 78, ty: 109, variant: 1 },
  ]
  for (const house of houses) {
    block(house.tx, house.ty, 2, 2)
    const footprint = {
      x: (house.tx + 1) * TILE,
      y: (house.ty + 1) * TILE,
    }
    addEntity(entities, buckets, {
      id: `house-${house.tx}-${house.ty}`,
      kind: 'house',
      x: footprint.x,
      y: footprint.y,
      radius: 18,
      solid: true,
      variant: house.variant,
    })
    chimneys.push({ x: footprint.x + 18, y: footprint.y - 30, phase: house.variant })
  }
  block(places.well.tx, places.well.ty, 1, 1)
  place('well', places.well.tx, places.well.ty, 12, true)
  block(places.lighthouse.tx, places.lighthouse.ty, 1, 1)
  place('lighthouse', places.lighthouse.tx, places.lighthouse.ty, 16, true)
  block(places.tower.tx, places.tower.ty, 1, 1)
  place('tower', places.tower.tx, places.tower.ty, 16, true)
  place('stall', 76, 102, 0, false, 0)

  const cost = (tx: number, ty: number): number | null => {
    if (tx < 0 || ty < 0 || tx >= COLS || ty >= ROWS) return null
    const index = ty * COLS + tx
    if (roadBlocked[index]) return null
    const tile = tiles[index]
    if (!tileWalkable(tile)) return null
    if (tile.bridge || tile.dock || tile.bar) return 1
    if (tile.biome === 'forest') return 1.55
    if (tile.biome === 'highland') return 1.35
    if (tile.biome === 'sand') return 1.2
    return 1
  }

  const nearestOpen = (tx: number, ty: number, name: string): GridPoint => {
    const ok = (x: number, y: number) => cost(x, y) != null
    if (ok(tx, ty)) return { tx, ty }
    for (let radius = 1; radius <= 10; radius++) {
      for (let y = ty - radius; y <= ty + radius; y++) {
        for (let x = tx - radius; x <= tx + radius; x++) {
          if (Math.max(Math.abs(x - tx), Math.abs(y - ty)) !== radius) continue
          if (ok(x, y)) return { tx: x, ty: y }
        }
      }
    }
    throw new Error(`No ground near ${name}`)
  }

  const stamp = (tx: number, ty: number) => {
    if (tx < 0 || ty < 0 || tx >= COLS || ty >= ROWS) return
    const index = ty * COLS + tx
    if (roadBlocked[index]) return
    const tile = tiles[index]
    if (!tile || tile.bridge || tile.dock || !tileWalkable(tile)) return
    tile.path = true
  }

  const stampPath = (path: GridPoint[]) => {
    for (const step of path) {
      stamp(step.tx, step.ty)
      stamp(step.tx + 1, step.ty)
      stamp(step.tx - 1, step.ty)
      stamp(step.tx, step.ty + 1)
      stamp(step.tx, step.ty - 1)
    }
  }

  const pave = (from: GridPoint, to: { tx: number; ty: number; name?: string }, name: string) => {
    const goal = nearestOpen(to.tx, to.ty, name)
    const path = findPath(from.tx, from.ty, goal.tx, goal.ty, cost)
    if (!path) throw new Error(`No road from ${from.tx},${from.ty} to ${name}`)
    stampPath(path)
    return goal
  }

  let cursor = nearestOpen(places.spawn.tx, places.spawn.ty, 'Hearthmere')
  cursor = pave(cursor, places.lin, "Lin's garden")
  pave(cursor, places.shrine, 'Greenveil shrine')
  pave(nearestOpen(places.spawn.tx, places.spawn.ty, 'Hearthmere'), places.lighthouse, 'Saltlight')
  pave(nearestOpen(places.spawn.tx, places.spawn.ty, 'Hearthmere'), places.tower, 'Highwatch')

  const stampDisc = (tx: number, ty: number, radius: number) => {
    for (let y = ty - radius; y <= ty + radius; y++) {
      for (let x = tx - radius; x <= tx + radius; x++) {
        if (Math.hypot(x - tx, y - ty) <= radius) stamp(x, y)
      }
    }
  }
  stampDisc(places.village.tx, places.village.ty, 5)
  stampDisc(places.lin.tx, places.lin.ty, 2)
  stampDisc(places.shrine.tx, places.shrine.ty, 2)
  stampDisc(places.lighthouse.tx, places.lighthouse.ty, 2)
  stampDisc(places.tower.tx, places.tower.ty, 2)

  const reserved = (tx: number, ty: number) => {
    if (Math.hypot(tx - places.village.tx, ty - places.village.ty) < 8) return true
    if (Math.hypot(tx - places.lin.tx, ty - places.lin.ty) < 3.2) return true
    if (Math.hypot(tx - places.island.tx, ty - places.island.ty) < 6) return true
    if (Math.hypot(tx - places.grove.tx, ty - places.grove.ty) < 3) return true
    for (const spore of sporeTiles) {
      if (Math.hypot(tx - spore.tx, ty - spore.ty) < 2.2) return true
    }
    return false
  }

  const touchesPath = (tx: number, ty: number) => {
    for (let y = ty - 1; y <= ty + 1; y++) {
      for (let x = tx - 1; x <= tx + 1; x++) {
        if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue
        if (tiles[y * COLS + x].path) return true
      }
    }
    return false
  }

  for (let ty = 0; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) {
      const tile = tiles[ty * COLS + tx]
      if (tile.path || tile.dock || tile.bridge || tile.bar || roadBlocked[ty * COLS + tx]) continue
      if (!tileWalkable(tile) || reserved(tx, ty)) continue
      const roll = hash(tx, ty, seed + 11)
      const at = center(tx, ty)
      if (tile.biome === 'forest' && roll < 0.16) {
        if (touchesPath(tx, ty)) continue
        const radius = 7
        if (solidsOverlap(buckets, at.x, at.y, radius, 8)) continue
        addEntity(entities, buckets, {
          id: `tree-${tx}-${ty}`,
          kind: roll < 0.05 ? 'pine' : 'tree',
          x: at.x,
          y: at.y,
          radius,
          solid: true,
          variant: Math.floor(hash(tx, ty, seed + 19) * 3),
        })
      } else if (tile.biome === 'meadow' && roll < 0.018) {
        if (touchesPath(tx, ty) || solidsOverlap(buckets, at.x, at.y, 7, 10)) continue
        addEntity(entities, buckets, {
          id: `tree-${tx}-${ty}`,
          kind: 'tree',
          x: at.x,
          y: at.y,
          radius: 7,
          solid: true,
          variant: 1,
        })
      } else if (tile.biome === 'highland' && roll < 0.1) {
        if (touchesPath(tx, ty) || solidsOverlap(buckets, at.x, at.y, 10, 6)) continue
        addEntity(entities, buckets, {
          id: `rock-${tx}-${ty}`,
          kind: 'rock',
          x: at.x,
          y: at.y,
          radius: 10,
          solid: true,
          variant: 0,
        })
      } else if (tile.biome === 'highland' && roll > 0.94) {
        if (touchesPath(tx, ty) || solidsOverlap(buckets, at.x, at.y, 6, 8)) continue
        addEntity(entities, buckets, {
          id: `pine-${tx}-${ty}`,
          kind: 'pine',
          x: at.x,
          y: at.y,
          radius: 6,
          solid: true,
          variant: 0,
        })
      } else if ((tile.biome === 'meadow' || tile.biome === 'forest') && roll > 0.93) {
        addEntity(entities, buckets, {
          id: `flower-${tx}-${ty}`,
          kind: tile.biome === 'forest' ? 'mushroom' : 'flower',
          x: at.x,
          y: at.y,
          radius: 0,
          solid: false,
          variant: Math.floor(hash(tx, ty, seed + 4) * 4),
        })
      } else if (tile.biome === 'sand' && roll < 0.08) {
        addEntity(entities, buckets, {
          id: `reed-${tx}-${ty}`,
          kind: 'reed',
          x: at.x,
          y: at.y,
          radius: 0,
          solid: false,
          variant: 0,
        })
      }
    }
  }

  sporeTiles.forEach((spore, index) => {
    place('spore', spore.tx, spore.ty, 0, false, index, `spore-${index + 1}`)
  })
  place('bottle', places.island.tx, places.island.ty, 0, false, 0, 'bottle')
  place('pine', places.island.tx - 1, places.island.ty - 1, 6, true, 2, 'isle-pine')
  place('menhir', places.grove.tx, places.grove.ty, 14, true, 0, 'menhir')
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2
    const gx = places.grove.tx + Math.cos(angle) * 1.7
    const gy = places.grove.ty + Math.sin(angle) * 1.7
    addEntity(entities, buckets, {
      id: `grove-flower-${i}`,
      kind: 'flower',
      x: gx * TILE + TILE / 2,
      y: gy * TILE + TILE / 2,
      radius: 0,
      solid: false,
      variant: i % 4,
    })
  }
  place('altar', places.shrine.tx, places.shrine.ty, 0, false, 0, 'altar')
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + 0.3
    const sx = places.shrine.tx + Math.cos(angle) * 2.35
    const sy = places.shrine.ty + Math.sin(angle) * 2.35
    addEntity(entities, buckets, {
      id: `stone-${i}`,
      kind: 'stone',
      x: sx * TILE,
      y: sy * TILE,
      radius: 12,
      solid: true,
      variant: i,
    })
  }
  place('sign', places.sign.tx, places.sign.ty, 0, false, 0, 'sign')

  const npcAt = (
    id: Npc['id'],
    name: string,
    tx: number,
    ty: number,
    color: string,
    patrol = false,
    bx = tx,
    by = ty,
  ): Npc => {
    const at = center(tx, ty)
    const end = center(bx, by)
    return {
      id,
      name,
      x: at.x,
      y: at.y,
      ax: at.x,
      ay: at.y,
      bx: end.x,
      by: end.y,
      patrol,
      phase: 0,
      color,
    }
  }

  const npcs: Npc[] = [
    npcAt('mara', 'Mara', places.mara.tx, places.mara.ty, '#9c3b38'),
    npcAt('tomas', 'Tomas', places.tomas.tx, places.tomas.ty, '#2f6280'),
    npcAt('lin', 'Lin', places.lin.tx, places.lin.ty, '#3f6b3a'),
    npcAt('ren', 'Ren', places.ren.tx, places.ren.ty, '#6e6258'),
    npcAt('ivo', 'Ivo', places.ivo.tx, places.ivo.ty, '#3e4d6e'),
    npcAt('sam', 'Sam', places.samA.tx, places.samA.ty, '#b56a32', true, places.samB.tx, places.samB.ty),
  ]

  const findMeadow = (tx: number, ty: number): GridPoint => {
    for (let radius = 0; radius <= 12; radius++) {
      for (let y = ty - radius; y <= ty + radius; y++) {
        for (let x = tx - radius; x <= tx + radius; x++) {
          if (Math.max(Math.abs(x - tx), Math.abs(y - ty)) !== radius) continue
          if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue
          const tile = tiles[y * COLS + x]
          if (tile.biome === 'meadow' && tileWalkable(tile) && !roadBlocked[y * COLS + x]) {
            return { tx: x, ty: y }
          }
        }
      }
    }
    return nearestOpen(tx, ty, 'meadow')
  }

  const deer: Deer[] = [
    [100, 90],
    [112, 78],
    [96, 98],
  ].map(([tx, ty], index) => {
    const spot = findMeadow(tx, ty)
    const at = center(spot.tx, spot.ty)
    return {
      x: at.x,
      y: at.y,
      vx: 0,
      vy: 0,
      flee: 0,
      graze: 0.4 + index * 0.3,
      homeX: at.x,
      homeY: at.y,
    }
  })

  const fireflies: Spark[] = []
  for (let ty = 0; ty < ROWS && fireflies.length < 22; ty++) {
    for (let tx = 0; tx < COLS && fireflies.length < 22; tx++) {
      const tile = tiles[ty * COLS + tx]
      if (tile.biome !== 'forest' || tile.path) continue
      if (hash(tx, ty, seed + 41) > 0.025) continue
      const at = center(tx, ty)
      fireflies.push({ x: at.x, y: at.y, phase: hash(tx, ty, seed + 42) * 6 })
    }
  }

  const birds: Bird[] = [
    { y: 700, speed: 36, phase: 0.1 },
    { y: 1500, speed: 28, phase: 2.2 },
    { y: 2400, speed: 42, phase: 4.1 },
    { y: 3100, speed: 24, phase: 1.3 },
  ]

  let landCount = 0
  for (const tile of tiles) if (tileWalkable(tile)) landCount++

  return {
    seed,
    tiles,
    entities,
    buckets,
    npcs,
    deer,
    fireflies,
    chimneys,
    birds,
    landCount,
  }
}
