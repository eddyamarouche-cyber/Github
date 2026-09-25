import { createBridge } from '../src/bridge.ts'
import { entityBlocked, terrainCircleBlocked, terrainWalkable } from '../src/game/collision.ts'
import { generateWorld } from '../src/game/generate.ts'
import { COLS, PLAYER_R, ROWS, ZOOM, center, places, sporeTiles } from '../src/game/places.ts'
import { createSim, step } from '../src/game/simulate.ts'
import type { World } from '../src/game/types.ts'

const goals = [
  ['spawn', places.spawn.tx, places.spawn.ty],
  ['lighthouse', places.lighthouse.tx, places.lighthouse.ty],
  ['shrine', places.shrine.tx, places.shrine.ty],
  ['tower', places.tower.tx, places.tower.ty],
  ['lin', places.lin.tx, places.lin.ty],
  ['tomas', places.tomas.tx, places.tomas.ty],
  ['island', places.island.tx, places.island.ty],
  ['grove', places.grove.tx, places.grove.ty],
] as const

function reachable(world: World, tx: number, ty: number): boolean {
  const start = places.spawn.ty * COLS + places.spawn.tx
  const goal = ty * COLS + tx
  const seen = new Uint8Array(COLS * ROWS)
  const queue = [start]
  seen[start] = 1
  let cursor = 0
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const
  while (cursor < queue.length) {
    const current = queue[cursor++]
    if (current === goal) return true
    const x = current % COLS
    const y = (current / COLS) | 0
    for (const [dx, dy] of dirs) {
      const nx = x + dx
      const ny = y + dy
      if (!terrainWalkable(world, nx, ny)) continue
      const next = ny * COLS + nx
      if (seen[next]) continue
      seen[next] = 1
      queue.push(next)
    }
  }
  return false
}

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message)
}

const world = generateWorld(7)
const counts = { water: 0, sand: 0, meadow: 0, forest: 0, highland: 0, rock: 0, path: 0, bridge: 0 }
for (const tile of world.tiles) {
  counts[tile.biome]++
  if (tile.path) counts.path++
  if (tile.bridge) counts.bridge++
}

for (const [name, count] of Object.entries(counts)) {
  const minimum = name === 'bridge' ? 20 : 80
  assert(count > minimum, `${name} is too scarce (${count})`)
}

const spawn = center(places.spawn.tx, places.spawn.ty)
assert(terrainWalkable(world, places.spawn.tx, places.spawn.ty), 'spawn tile is blocked')
assert(!terrainCircleBlocked(world, spawn.x, spawn.y, PLAYER_R), 'spawn circle hits terrain')
assert(!entityBlocked(world, spawn.x, spawn.y, PLAYER_R), 'spawn circle hits an entity')

for (const [name, tx, ty] of goals) {
  assert(reachable(world, tx, ty), `${name} is cut off from Hearthmere`)
}

const spores = world.entities.filter((entity) => entity.kind === 'spore')
assert(spores.length === sporeTiles.length, `expected ${sporeTiles.length} spores, found ${spores.length}`)
for (const spore of sporeTiles) {
  assert(terrainWalkable(world, spore.tx, spore.ty), `spore ${spore.tx},${spore.ty} is not walkable`)
}

for (const deer of world.deer) {
  assert(!terrainCircleBlocked(world, deer.x, deer.y, 8), 'a deer spawned in the water')
}

const again = generateWorld(7)
assert(again.entities.length === world.entities.length, 'generation is not stable for one seed')
generateWorld(99)

const bridge = createBridge()
const sim = createSim(world)
bridge.command = 'new'
step(sim, bridge, 1 / 60, 1280, 720, 0)
assert(sim.mode === 'play', 'entering the wilds did not start play')
const startY = sim.player.y
const screenX = (sim.player.x - sim.camX) * ZOOM
const screenY = (sim.player.y - sim.camY) * ZOOM + 220
bridge.click = { x: screenX, y: screenY }
for (let frame = 0; frame < 120; frame++) step(sim, bridge, 1 / 60, 1280, 720, frame)
assert(sim.player.y > startY + 70, `click-to-walk did not move south (${sim.player.y - startY})`)

const mara = sim.npcs.find((npc) => npc.id === 'mara')
assert(mara != null, 'Mara is missing')
sim.player.x = mara.x
sim.player.y = mara.y + 36
sim.dest = null
sim.pendingId = null
bridge.interact = true
step(sim, bridge, 1 / 60, 1280, 720, 3)
assert(sim.speech?.speaker === 'Mara', 'talking to Mara did not open dialogue')

console.log('Hearthmere checks passed', counts)
