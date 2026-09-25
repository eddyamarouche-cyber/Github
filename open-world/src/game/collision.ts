import { COLS, ROWS, TILE } from './places.ts'
import type { Entity, Tile, World } from './types.ts'

export const BUCKET = 96

export function tileWalkable(tile: Tile | undefined): boolean {
  if (!tile) return false
  if (tile.dock || tile.bridge || tile.bar) return true
  return tile.biome !== 'water' && tile.biome !== 'rock'
}

export function terrainWalkable(world: World, tx: number, ty: number): boolean {
  if (tx < 0 || ty < 0 || tx >= COLS || ty >= ROWS) return false
  return tileWalkable(world.tiles[ty * COLS + tx])
}

export function bucketKey(x: number, y: number): number {
  return Math.floor(x / BUCKET) + Math.floor(y / BUCKET) * 256
}

export function insertBucket(buckets: Map<number, Entity[]>, entity: Entity): void {
  const key = bucketKey(entity.x, entity.y)
  const list = buckets.get(key)
  if (list) list.push(entity)
  else buckets.set(key, [entity])
}

function eachNear(
  buckets: Map<number, Entity[]>,
  x: number,
  y: number,
  range: number,
  fn: (entity: Entity) => void,
): void {
  const minX = Math.floor((x - range) / BUCKET)
  const maxX = Math.floor((x + range) / BUCKET)
  const minY = Math.floor((y - range) / BUCKET)
  const maxY = Math.floor((y + range) / BUCKET)
  for (let by = minY; by <= maxY; by++) {
    for (let bx = minX; bx <= maxX; bx++) {
      const list = buckets.get(bx + by * 256)
      if (!list) continue
      for (const entity of list) fn(entity)
    }
  }
}

export function solidsOverlap(
  buckets: Map<number, Entity[]>,
  x: number,
  y: number,
  radius: number,
  pad = 0,
): boolean {
  let hit = false
  eachNear(buckets, x, y, radius + pad + 48, (entity) => {
    if (hit || !entity.solid) return
    const dx = entity.x - x
    const dy = entity.y - y
    const reach = radius + entity.radius + pad
    if (dx * dx + dy * dy < reach * reach) hit = true
  })
  return hit
}

function circleHitsRect(
  cx: number,
  cy: number,
  radius: number,
  rx: number,
  ry: number,
  rw: number,
  rh: number,
): boolean {
  const nx = Math.max(rx, Math.min(cx, rx + rw))
  const ny = Math.max(ry, Math.min(cy, ry + rh))
  const dx = cx - nx
  const dy = cy - ny
  return dx * dx + dy * dy < radius * radius
}

export function terrainCircleBlocked(world: World, x: number, y: number, radius: number): boolean {
  const minX = Math.floor((x - radius) / TILE)
  const maxX = Math.floor((x + radius) / TILE)
  const minY = Math.floor((y - radius) / TILE)
  const maxY = Math.floor((y + radius) / TILE)
  for (let ty = minY; ty <= maxY; ty++) {
    for (let tx = minX; tx <= maxX; tx++) {
      if (terrainWalkable(world, tx, ty)) continue
      if (circleHitsRect(x, y, radius, tx * TILE, ty * TILE, TILE, TILE)) return true
    }
  }
  return false
}

export function entityBlocked(world: World, x: number, y: number, radius: number): boolean {
  return solidsOverlap(world.buckets, x, y, radius, 0)
}
