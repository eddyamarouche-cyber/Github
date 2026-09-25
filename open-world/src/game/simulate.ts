import { entityBlocked, terrainCircleBlocked } from './collision.ts'
import { countSpores, npcScript, type Progress } from './dialogue.ts'
import { generateWorld } from './generate.ts'
import {
  COLS,
  DAY_SECONDS,
  INTERACT_R,
  PLAYER_R,
  RUN,
  SEED,
  TILE,
  WALK,
  ZOOM,
  center,
  places,
  questMarks,
  viewWorld,
} from './places.ts'
import { applySave, clearSave, readSave, writeSave } from './save.ts'
import type { Bridge } from '../bridge.ts'
import type { Dir, Entity, Npc, Sim, World } from './types.ts'

const MARK_R = 6.4 * TILE
const REVEAL_R = 7

function reducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function progressOf(sim: Sim): Progress {
  return {
    visited: sim.visited,
    discovered: sim.discovered,
    hints: sim.hints,
    talked: sim.talked,
    collected: sim.collected,
    questDone: sim.questDone,
  }
}

export function createSim(world: World = generateWorld(SEED)): Sim {
  const spawn = center(places.spawn.tx, places.spawn.ty)
  const sim: Sim = {
    world,
    mode: 'attract',
    player: { x: spawn.x, y: spawn.y, dir: 's', walk: 0, moving: false },
    npcs: world.npcs.map((npc) => ({ ...npc })),
    deer: world.deer.map((deer) => ({ ...deer })),
    collected: new Set(),
    visited: new Set(['hearthmere']),
    discovered: new Set(),
    hints: new Set(),
    talked: new Set(),
    questDone: false,
    explored: new Uint8Array(world.tiles.length),
    exploredCount: 0,
    time: 0.34,
    toast: null,
    dest: null,
    destStall: 0,
    destBest: Infinity,
    pendingId: null,
    camX: 0,
    camY: 0,
    snapCam: true,
    speech: null,
    atlas: false,
    region: places.village.name ?? 'Hearthmere',
    revealTx: -1,
    revealTy: -1,
    rev: 1,
    reduceMotion: reducedMotion(),
    saveTimer: 0,
    hoverPrompt: null,
  }
  placeCamera(sim, 1280, 720, true)
  return sim
}

function toast(sim: Sim, text: string): void {
  const now = typeof performance !== 'undefined' ? performance.now() : 0
  sim.toast = { text, until: now + 4200 }
  sim.rev++
}

function reveal(sim: Sim, tx: number, ty: number): void {
  for (let y = ty - REVEAL_R; y <= ty + REVEAL_R; y++) {
    for (let x = tx - REVEAL_R; x <= tx + REVEAL_R; x++) {
      if (x < 0 || y < 0 || x >= COLS || y >= sim.explored.length / COLS) continue
      if (Math.hypot(x - tx, y - ty) > REVEAL_R) continue
      const index = y * COLS + x
      if (sim.explored[index]) continue
      sim.explored[index] = 1
      sim.exploredCount++
    }
  }
}

function clampCamera(value: number, view: number, world: number): number {
  if (view >= world) return (world - view) / 2
  return Math.max(0, Math.min(world - view, value))
}

function placeCamera(sim: Sim, cssW: number, cssH: number, snap: boolean): void {
  const view = viewWorld(cssW, cssH)
  const focusX = sim.mode === 'attract' ? center(places.village.tx, places.village.ty).x : sim.player.x
  const focusY = sim.mode === 'attract' ? center(places.village.tx, places.village.ty).y : sim.player.y
  let lookX = 0
  let lookY = 0
  if (sim.mode === 'play') {
    if (sim.player.dir === 'e') lookX = 36
    if (sim.player.dir === 'w') lookX = -36
    if (sim.player.dir === 's') lookY = 28
    if (sim.player.dir === 'n') lookY = -28
  }
  const targetX = clampCamera(focusX + lookX - view.w / 2, view.w, sim.world.tiles.length ? COLS * TILE : 1)
  const targetY = clampCamera(focusY + lookY - view.h / 2, view.h, sim.world.tiles.length / COLS * TILE)
  if (snap) {
    sim.camX = targetX
    sim.camY = targetY
    return
  }
  sim.camX = targetX
  sim.camY = targetY
}

export type InteractHit = {
  id: string
  prompt: string
  x: number
  y: number
}

function npcPrompt(npc: Npc): string {
  return `Talk to ${npc.name}`
}

function entityPrompt(entity: Entity): string | null {
  if (entity.kind === 'spore') return 'Take the pale spore'
  if (entity.kind === 'bottle') return 'Read the note'
  if (entity.kind === 'menhir') return 'Inspect the stone'
  if (entity.kind === 'sign') return 'Read the sign'
  return null
}

function collectHits(sim: Sim): InteractHit[] {
  const hits: InteractHit[] = []
  for (const npc of sim.npcs) hits.push({ id: npc.id, prompt: npcPrompt(npc), x: npc.x, y: npc.y })
  for (const entity of sim.world.entities) {
    if (sim.collected.has(entity.id)) continue
    const prompt = entityPrompt(entity)
    if (!prompt) continue
    hits.push({ id: entity.id, prompt, x: entity.x, y: entity.y })
  }
  return hits
}

export function nearestHit(sim: Sim, maxDist: number): InteractHit | null {
  let best: InteractHit | null = null
  let bestDist = maxDist
  for (const hit of collectHits(sim)) {
    const dist = Math.hypot(hit.x - sim.player.x, hit.y - sim.player.y)
    if (dist < bestDist) {
      best = hit
      bestDist = dist
    }
  }
  return best
}

function hitAtPoint(sim: Sim, x: number, y: number): InteractHit | null {
  let best: InteractHit | null = null
  let bestDist = 28
  for (const hit of collectHits(sim)) {
    const dist = Math.hypot(hit.x - x, hit.y - y)
    if (dist < bestDist) {
      best = hit
      bestDist = dist
    }
  }
  return best
}

function openSpeech(sim: Sim, speaker: string, lines: string[]): void {
  sim.speech = { speaker, lines, index: 0 }
  sim.dest = null
  sim.pendingId = null
  sim.rev++
}

export function performHit(sim: Sim, hit: InteractHit): void {
  const npc = sim.npcs.find((entry) => entry.id === hit.id)
  if (npc) {
    sim.talked.add(npc.id)
    if (npc.id === 'tomas') sim.hints.add('island')
    if (npc.id === 'lin' && countSpores(sim.collected) >= 5) sim.hints.add('grove')
    const script = npcScript(npc.id, progressOf(sim))
    if (script.completeQuest) {
      sim.questDone = true
      toast(sim, 'The atlas is inked.')
    }
    openSpeech(sim, script.speaker, script.lines)
    return
  }
  if (hit.id.startsWith('spore')) {
    if (sim.collected.has(hit.id)) return
    sim.collected.add(hit.id)
    const count = countSpores(sim.collected)
    toast(sim, count >= 5 ? 'The fifth pale spore.' : `Pale spore, ${count} of 5.`)
    if (count >= 5) sim.hints.add('grove')
    sim.pendingId = null
    sim.rev++
    return
  }
  if (hit.id === 'bottle') {
    sim.discovered.add('bottle')
    sim.hints.add('grove')
    openSpeech(sim, 'Salt-stiff note', [
      'The ink has run, but the line is still there: west of the shrine, the trees lean in around a stone. Left off the map on purpose.',
    ])
    return
  }
  if (hit.id === 'menhir') {
    if (!sim.discovered.has('grove')) toast(sim, 'A grove the atlas left unnamed.')
    sim.discovered.add('grove')
    openSpeech(sim, 'Standing stone', [
      'The stone is warm on the sunward face. You have a mark the atlas did not order.',
    ])
    return
  }
  if (hit.id === 'sign') {
    openSpeech(sim, 'Signpost', ['Hearthmere. The roads are a suggestion. The sea is not.'])
  }
}

function regionName(sim: Sim): string {
  const tx = sim.player.x / TILE
  const ty = sim.player.y / TILE
  const dist = (px: number, py: number) => Math.hypot(tx - px, ty - py)
  if (dist(places.grove.tx, places.grove.ty) < 6 && sim.discovered.has('grove')) return 'Unmarked grove'
  if (dist(places.village.tx, places.village.ty) < 10) return places.village.name ?? 'Hearthmere'
  if (dist(places.lighthouse.tx, places.lighthouse.ty) < 9) return 'Saltlight'
  if (dist(places.shrine.tx, places.shrine.ty) < 8) return 'Greenveil shrine'
  if (dist(places.tower.tx, places.tower.ty) < 8) return 'Highwatch'
  if (dist(places.island.tx, places.island.ty) < 6) return 'Low-tide isle'
  const tile = sim.world.tiles[(ty | 0) * COLS + (tx | 0)]
  if (tile?.biome === 'forest') return 'Greenveil'
  if (tile?.biome === 'highland' || tile?.biome === 'rock') return 'Highwatch'
  if (tile?.dock || tile?.biome === 'sand' || tile?.bar) return 'The bay'
  if (tile?.bridge) return 'Siltrun'
  const river = 86 + Math.sin(ty * 0.09) * 6
  if (Math.abs(tx - river) < 4 && ty > 20 && ty < 116) return 'Siltrun'
  return 'Goldgrass'
}

function checkDiscoveries(sim: Sim): void {
  for (const mark of questMarks) {
    if (sim.visited.has(mark.id)) continue
    const at = center(mark.tx, mark.ty)
    if (Math.hypot(sim.player.x - at.x, sim.player.y - at.y) <= MARK_R) {
      sim.visited.add(mark.id)
      toast(sim, `${mark.name} marked on the atlas.`)
    }
  }
  const grove = center(places.grove.tx, places.grove.ty)
  if (!sim.discovered.has('grove') && Math.hypot(sim.player.x - grove.x, sim.player.y - grove.y) < 5 * TILE) {
    sim.discovered.add('grove')
    toast(sim, 'A grove the atlas left unnamed.')
  }
  const isle = center(places.island.tx, places.island.ty)
  if (!sim.discovered.has('island') && Math.hypot(sim.player.x - isle.x, sim.player.y - isle.y) < 5.2 * TILE) {
    sim.discovered.add('island')
    toast(sim, 'Low-tide isle. It was here the whole time.')
  }
  const next = regionName(sim)
  if (next !== sim.region) {
    sim.region = next
    sim.rev++
  }
}

function tryAxis(sim: Sim, dx: number, dy: number): void {
  const nx = sim.player.x + dx
  const ny = sim.player.y + dy
  if (terrainCircleBlocked(sim.world, nx, ny, PLAYER_R)) return
  if (entityBlocked(sim.world, nx, ny, PLAYER_R)) return
  for (const npc of sim.npcs) {
    const reach = PLAYER_R + 12
    const ddx = npc.x - nx
    const ddy = npc.y - ny
    if (ddx * ddx + ddy * ddy < reach * reach) return
  }
  sim.player.x = nx
  sim.player.y = ny
}

function face(sim: Sim, vx: number, vy: number): void {
  if (vx === 0 && vy === 0) return
  let dir: Dir = sim.player.dir
  if (Math.abs(vx) > Math.abs(vy)) dir = vx > 0 ? 'e' : 'w'
  else dir = vy > 0 ? 's' : 'n'
  sim.player.dir = dir
}

function movePlayer(sim: Sim, bridge: Bridge, dt: number): void {
  let ix = 0
  let iy = 0
  if (bridge.keys.has('KeyA') || bridge.keys.has('ArrowLeft')) ix -= 1
  if (bridge.keys.has('KeyD') || bridge.keys.has('ArrowRight')) ix += 1
  if (bridge.keys.has('KeyW') || bridge.keys.has('ArrowUp')) iy -= 1
  if (bridge.keys.has('KeyS') || bridge.keys.has('ArrowDown')) iy += 1
  const keyboard = ix !== 0 || iy !== 0
  const joy = Math.hypot(bridge.joyX, bridge.joyY)
  if (keyboard) {
    const magnitude = Math.hypot(ix, iy)
    ix /= magnitude
    iy /= magnitude
    sim.dest = null
    sim.pendingId = null
  } else if (joy > 0.18) {
    const magnitude = Math.min(1, joy)
    ix = (bridge.joyX / joy) * magnitude
    iy = (bridge.joyY / joy) * magnitude
    sim.dest = null
    sim.pendingId = null
  } else if (sim.dest) {
    const dx = sim.dest.x - sim.player.x
    const dy = sim.dest.y - sim.player.y
    const magnitude = Math.hypot(dx, dy)
    const pending = sim.pendingId ? collectHits(sim).find((hit) => hit.id === sim.pendingId) : null
    if (pending && Math.hypot(pending.x - sim.player.x, pending.y - sim.player.y) <= INTERACT_R) {
      performHit(sim, pending)
      return
    }
    if (magnitude < 10) {
      sim.dest = null
      sim.pendingId = null
    } else {
      ix = dx / magnitude
      iy = dy / magnitude
      if (magnitude < sim.destBest - 3) {
        sim.destBest = magnitude
        sim.destStall = 0
      } else {
        sim.destStall += dt
        if (sim.destStall > 0.85) {
          sim.dest = null
          sim.pendingId = null
          ix = 0
          iy = 0
        }
      }
    }
  }

  const running =
    bridge.keys.has('ShiftLeft') || bridge.keys.has('ShiftRight') || bridge.runLatch || joy > 0.82
  const speed = (running && (keyboard || joy > 0.18 || sim.dest) ? RUN : WALK) * dt
  if (ix !== 0) tryAxis(sim, ix * speed, 0)
  if (iy !== 0) tryAxis(sim, 0, iy * speed)
  sim.player.moving = ix !== 0 || iy !== 0
  if (sim.player.moving) {
    face(sim, ix, iy)
    sim.player.walk += dt * (running ? 13 : 9)
  }
}

function updateNpcs(sim: Sim, dt: number): void {
  for (const npc of sim.npcs) {
    if (!npc.patrol) continue
    const before = npc.phase
    npc.phase += dt * 0.22
    const tri = npc.phase % 2
    const t = tri <= 1 ? tri : 2 - tri
    const nx = npc.ax + (npc.bx - npc.ax) * t
    const ny = npc.ay + (npc.by - npc.ay) * t
    const blocked =
      terrainCircleBlocked(sim.world, nx, ny, 10) ||
      entityBlocked(sim.world, nx, ny, 10) ||
      Math.hypot(nx - sim.player.x, ny - sim.player.y) < PLAYER_R + 14
    if (blocked) npc.phase = before
    else {
      npc.x = nx
      npc.y = ny
    }
  }
}

function updateDeer(sim: Sim, dt: number): void {
  for (const deer of sim.deer) {
    const dx = deer.x - sim.player.x
    const dy = deer.y - sim.player.y
    const dist = Math.hypot(dx, dy)
    if (sim.mode === 'play' && dist < 110 && deer.flee <= 0) {
      deer.vx = (dx / (dist || 1)) * 150
      deer.vy = (dy / (dist || 1)) * 150
      deer.flee = 1.15
    }
    if (deer.flee > 0) {
      deer.flee -= dt
    } else {
      deer.graze -= dt
      if (deer.graze <= 0) {
        const homeDx = deer.homeX - deer.x
        const homeDy = deer.homeY - deer.y
        const home = Math.hypot(homeDx, homeDy)
        if (home > 160) {
          deer.vx = (homeDx / home) * 36
          deer.vy = (homeDy / home) * 36
        } else {
          const angle = hashAngle(deer.homeX, deer.homeY, sim.time + deer.graze)
          deer.vx = Math.cos(angle) * 28
          deer.vy = Math.sin(angle) * 22
        }
        deer.graze = 1.6 + (deer.homeX % 7) * 0.1
      }
    }
    const nx = deer.x + deer.vx * dt
    const ny = deer.y + deer.vy * dt
    if (!terrainCircleBlocked(sim.world, nx, ny, 8) && !entityBlocked(sim.world, nx, ny, 8)) {
      deer.x = nx
      deer.y = ny
    } else {
      deer.vx *= -1
      deer.vy *= -1
      deer.flee = 0
    }
  }
}

function hashAngle(x: number, y: number, salt: number): number {
  const n = Math.sin(x * 0.017 + y * 0.013 + salt * 3.1) * 43758.5453
  return (n - Math.floor(n)) * Math.PI * 2
}

function attractCamera(sim: Sim, cssW: number, cssH: number, anim: number, dt: number): void {
  const view = viewWorld(cssW, cssH)
  const home = center(places.village.tx, places.village.ty)
  const orbit = sim.reduceMotion ? 0 : anim
  const targetX = clampCamera(home.x + Math.cos(orbit * 0.15) * 90 - view.w / 2, view.w, COLS * TILE)
  const targetY = clampCamera(home.y + Math.sin(orbit * 0.12) * 50 - view.h / 2, view.h, (sim.world.tiles.length / COLS) * TILE)
  const k = sim.snapCam ? 1 : 1 - Math.exp(-dt * 2.4)
  sim.camX += (targetX - sim.camX) * k
  sim.camY += (targetY - sim.camY) * k
  sim.snapCam = false
}

function followCamera(sim: Sim, cssW: number, cssH: number, dt: number): void {
  const view = viewWorld(cssW, cssH)
  let lookX = 0
  let lookY = 0
  if (sim.player.dir === 'e') lookX = 40
  if (sim.player.dir === 'w') lookX = -40
  if (sim.player.dir === 's') lookY = 30
  if (sim.player.dir === 'n') lookY = -30
  const worldH = (sim.world.tiles.length / COLS) * TILE
  const targetX = clampCamera(sim.player.x + lookX - view.w / 2, view.w, COLS * TILE)
  const targetY = clampCamera(sim.player.y + lookY - view.h / 2, view.h, worldH)
  if (sim.snapCam) {
    sim.camX = targetX
    sim.camY = targetY
    sim.snapCam = false
    return
  }
  const k = 1 - Math.exp(-dt * (sim.reduceMotion ? 10 : 6))
  sim.camX += (targetX - sim.camX) * k
  sim.camY += (targetY - sim.camY) * k
}

function bootPlay(sim: Sim, fresh: boolean): void {
  sim.mode = 'play'
  sim.speech = null
  sim.atlas = false
  sim.dest = null
  sim.pendingId = null
  sim.snapCam = true
  sim.player.moving = false
  if (fresh) {
    const spawn = center(places.spawn.tx, places.spawn.ty)
    sim.player.x = spawn.x
    sim.player.y = spawn.y
    sim.player.dir = 's'
    sim.player.walk = 0
    sim.collected = new Set()
    sim.visited = new Set(['hearthmere'])
    sim.discovered = new Set()
    sim.hints = new Set()
    sim.talked = new Set()
    sim.questDone = false
    sim.explored = new Uint8Array(sim.world.tiles.length)
    sim.exploredCount = 0
    sim.time = 0.34
    sim.revealTx = -1
    sim.revealTy = -1
    sim.region = places.village.name ?? 'Hearthmere'
    toast(sim, 'Mara keeps the atlas under the red roof.')
  }
  const tx = Math.floor(sim.player.x / TILE)
  const ty = Math.floor(sim.player.y / TILE)
  reveal(sim, tx, ty)
  sim.revealTx = tx
  sim.revealTy = ty
  sim.rev++
  writeSave(sim)
}

function consume(bridge: Bridge): void {
  bridge.interact = false
  bridge.atlas = false
  bridge.advance = false
  bridge.close = false
  bridge.click = null
  bridge.command = null
}

export function step(sim: Sim, bridge: Bridge, dt: number, cssW: number, cssH: number, anim: number): void {
  const stepDt = Math.min(0.05, Math.max(0, dt))
  if (bridge.command === 'new') {
    clearSave()
    bootPlay(sim, true)
  } else if (bridge.command === 'continue') {
    const saved = readSave()
    if (saved) applySave(sim, saved)
    bootPlay(sim, !saved)
  } else if (bridge.command === 'title') {
    if (sim.mode === 'play') writeSave(sim)
    sim.mode = 'attract'
    sim.speech = null
    sim.atlas = false
    sim.dest = null
    sim.pendingId = null
    sim.snapCam = false
    sim.rev++
  }

  if (sim.mode === 'attract') {
    sim.time = (sim.time + stepDt / DAY_SECONDS) % 1
    updateDeer(sim, stepDt)
    attractCamera(sim, cssW, cssH, anim, stepDt)
    sim.hoverPrompt = null
    consume(bridge)
    return
  }

  if (sim.speech) {
    if (bridge.close) sim.speech = null
    else if (bridge.advance || bridge.interact) {
      if (sim.speech && sim.speech.index < sim.speech.lines.length - 1) sim.speech.index++
      else sim.speech = null
    }
    if (bridge.close || bridge.advance || bridge.interact) sim.rev++
    sim.player.moving = false
    followCamera(sim, cssW, cssH, stepDt)
    consume(bridge)
    return
  }

  if (bridge.close && sim.atlas) {
    sim.atlas = false
    sim.rev++
  } else if (bridge.atlas) {
    sim.atlas = !sim.atlas
    sim.rev++
  }

  if (sim.atlas) {
    sim.player.moving = false
    consume(bridge)
    return
  }

  if (bridge.click) {
    const worldX = sim.camX + bridge.click.x / ZOOM
    const worldY = sim.camY + bridge.click.y / ZOOM
    const picked = hitAtPoint(sim, worldX, worldY)
    if (picked && Math.hypot(picked.x - sim.player.x, picked.y - sim.player.y) <= INTERACT_R) {
      performHit(sim, picked)
    } else if (picked) {
      sim.pendingId = picked.id
      sim.dest = { x: picked.x, y: picked.y }
      sim.destBest = Math.hypot(picked.x - sim.player.x, picked.y - sim.player.y)
      sim.destStall = 0
    } else if (!terrainCircleBlocked(sim.world, worldX, worldY, 4)) {
      sim.pendingId = null
      sim.dest = { x: worldX, y: worldY }
      sim.destBest = Math.hypot(worldX - sim.player.x, worldY - sim.player.y)
      sim.destStall = 0
    }
  } else if (bridge.interact) {
    const hit = nearestHit(sim, INTERACT_R)
    if (hit) performHit(sim, hit)
  }

  if (!sim.speech) {
    movePlayer(sim, bridge, stepDt)
    sim.time = (sim.time + stepDt / DAY_SECONDS) % 1
    updateNpcs(sim, stepDt)
    updateDeer(sim, stepDt)
    const tx = Math.floor(sim.player.x / TILE)
    const ty = Math.floor(sim.player.y / TILE)
    if (tx !== sim.revealTx || ty !== sim.revealTy) {
      reveal(sim, tx, ty)
      sim.revealTx = tx
      sim.revealTy = ty
    }
    checkDiscoveries(sim)
    sim.saveTimer += stepDt
    if (sim.saveTimer > 3) {
      writeSave(sim)
      sim.saveTimer = 0
    }
  }

  const hover = nearestHit(sim, INTERACT_R)
  sim.hoverPrompt = hover?.prompt ?? null
  followCamera(sim, cssW, cssH, stepDt)
  consume(bridge)
}
