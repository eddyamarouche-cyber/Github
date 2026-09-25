import { daylight } from './clock.ts'
import { COLS, ROWS, TILE, WORLD_W, ZOOM, viewWorld } from './places.ts'
import { mapMarkers } from './snapshot.ts'
import type { Biome, Dir, Entity, Sim } from './types.ts'

const BIOME: Record<Biome, string[]> = {
  water: ['#2d6f8f', '#2a6584', '#327896', '#26607e'],
  sand: ['#e4d0a4', '#dcc694', '#ecd8ae', '#d4bc88'],
  meadow: ['#7ea84a', '#719e42', '#88b252', '#68943c'],
  forest: ['#3f6b38', '#365e30', '#467240', '#31562c'],
  highland: ['#8d9168', '#80845e', '#969a72', '#747850'],
  rock: ['#6d675e', '#625e56', '#776f66', '#58544e'],
}

const FLOWER = ['#e7d36a', '#f2f0ea', '#e7a3b5', '#d5e4f4']

let nightCanvas: HTMLCanvasElement | null = null

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  const radius = Math.min(r, w / 2, h / 2)
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + w, y, x + w, y + h, radius)
  ctx.arcTo(x + w, y + h, x, y + h, radius)
  ctx.arcTo(x, y + h, x, y, radius)
  ctx.arcTo(x, y, x + w, y, radius)
  ctx.closePath()
}

function drawGround(ctx: CanvasRenderingContext2D, sim: Sim, anim: number, viewW: number, viewH: number): void {
  const x0 = Math.max(0, Math.floor(sim.camX / TILE) - 1)
  const y0 = Math.max(0, Math.floor(sim.camY / TILE) - 1)
  const x1 = Math.min(COLS - 1, Math.ceil((sim.camX + viewW) / TILE) + 1)
  const y1 = Math.min(ROWS - 1, Math.ceil((sim.camY + viewH) / TILE) + 1)
  const tiles = sim.world.tiles

  for (let ty = y0; ty <= y1; ty++) {
    for (let tx = x0; tx <= x1; tx++) {
      const tile = tiles[ty * COLS + tx]
      const px = tx * TILE
      const py = ty * TILE
      ctx.fillStyle = BIOME[tile.biome][tile.variant] ?? BIOME[tile.biome][0]
      ctx.fillRect(px, py, TILE + 0.5, TILE + 0.5)
      if (tile.biome === 'water' && !tile.bridge && !tile.dock) {
        ctx.strokeStyle = 'rgba(255,255,255,0.16)'
        ctx.lineWidth = 1
        const sway = Math.sin(anim * 1.6 + tx * 0.7 + ty) * 2
        ctx.beginPath()
        ctx.moveTo(px + 2, py + 12 + sway)
        ctx.lineTo(px + TILE - 2, py + 12 + sway)
        ctx.stroke()
        const north = ty > 0 ? tiles[(ty - 1) * COLS + tx] : undefined
        const west = tx > 0 ? tiles[ty * COLS + tx - 1] : undefined
        ctx.fillStyle = 'rgba(255,255,255,0.18)'
        if (north && north.biome !== 'water') ctx.fillRect(px, py, TILE, 3)
        if (west && west.biome !== 'water') ctx.fillRect(px, py, 3, TILE)
      } else if (tile.biome === 'meadow' || tile.biome === 'forest' || tile.biome === 'highland') {
        ctx.strokeStyle = tile.biome === 'forest' ? 'rgba(0,0,0,0.16)' : 'rgba(255,255,255,0.16)'
        ctx.lineWidth = 1
        const blades = 2 + (tile.variant % 2)
        for (let i = 0; i < blades; i++) {
          const bx = px + 6 + ((tx * 13 + ty * 7 + i * 11) % 20)
          const by = py + 8 + ((tx * 5 + ty * 17 + i * 3) % 16)
          ctx.beginPath()
          ctx.moveTo(bx, by + 6)
          ctx.lineTo(bx + 1, by)
          ctx.stroke()
        }
      }
      if (tile.path && !tile.dock && !tile.bridge) {
        ctx.fillStyle = 'rgba(176, 138, 86, 0.72)'
        ctx.beginPath()
        ctx.ellipse(px + 16, py + 16, 18, 13, ((tx + ty) % 5) * 0.2, 0, Math.PI * 2)
        ctx.fill()
      }
      if (tile.dock || tile.bridge) {
        ctx.fillStyle = tile.bridge ? '#9a7048' : '#b58962'
        ctx.fillRect(px, py, TILE, TILE)
        ctx.strokeStyle = 'rgba(72, 46, 28, 0.35)'
        ctx.lineWidth = 1
        for (let i = 0; i < 4; i++) {
          ctx.beginPath()
          ctx.moveTo(px, py + 4 + i * 8)
          ctx.lineTo(px + TILE, py + 4 + i * 8)
          ctx.stroke()
        }
        if (tile.bridge) {
          ctx.strokeStyle = '#6d4a30'
          ctx.lineWidth = 2
          ctx.strokeRect(px + 1, py + 1, TILE - 2, TILE - 2)
        }
      }
    }
  }
}

function drawShadow(ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, ry: number): void {
  ctx.fillStyle = 'rgba(30, 40, 28, 0.18)'
  ctx.beginPath()
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2)
  ctx.fill()
}

function drawTree(ctx: CanvasRenderingContext2D, entity: Entity, anim: number, pine: boolean): void {
  const sway = Math.sin(anim * 1.4 + entity.x * 0.01) * 1.6
  drawShadow(ctx, entity.x + 2, entity.y + 4, pine ? 10 : 16, 6)
  ctx.fillStyle = '#6b4632'
  ctx.fillRect(entity.x - 3, entity.y - (pine ? 16 : 10), 6, pine ? 18 : 14)
  const greens = ['#2f6a34', '#3e7c40', '#24562c']
  ctx.fillStyle = greens[entity.variant % greens.length] ?? greens[0]
  if (pine) {
    ctx.beginPath()
    ctx.moveTo(entity.x + sway, entity.y - 46)
    ctx.lineTo(entity.x - 16, entity.y - 8)
    ctx.lineTo(entity.x + 16, entity.y - 8)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(entity.x + sway, entity.y - 34)
    ctx.lineTo(entity.x - 12, entity.y - 16)
    ctx.lineTo(entity.x + 12, entity.y - 16)
    ctx.fill()
  } else {
    ctx.beginPath()
    ctx.arc(entity.x + sway, entity.y - 22, 16, 0, Math.PI * 2)
    ctx.arc(entity.x - 12 + sway, entity.y - 12, 12, 0, Math.PI * 2)
    ctx.arc(entity.x + 12 + sway, entity.y - 14, 11, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.12)'
    ctx.beginPath()
    ctx.arc(entity.x - 4 + sway, entity.y - 28, 6, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawHouse(ctx: CanvasRenderingContext2D, entity: Entity, night: boolean): void {
  const w = 64
  const h = 38
  const x = entity.x - w / 2
  const base = entity.y + 8
  drawShadow(ctx, entity.x + 4, base, 30, 8)
  const roofs = ['#a33c32', '#8d4b32', '#7a3e46']
  ctx.fillStyle = '#efe6d4'
  ctx.fillRect(x, base - h, w, h)
  ctx.fillStyle = roofs[entity.variant % roofs.length] ?? roofs[0]
  ctx.beginPath()
  ctx.moveTo(x - 6, base - h + 8)
  ctx.lineTo(entity.x, base - h - 22)
  ctx.lineTo(x + w + 6, base - h + 8)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = '#4a342c'
  ctx.fillRect(entity.x - 6, base - 18, 12, 18)
  ctx.fillStyle = night ? '#f2d48a' : '#c5d5dc'
  ctx.fillRect(x + 10, base - 26, 10, 8)
  ctx.fillRect(x + w - 20, base - 26, 10, 8)
  ctx.fillStyle = '#6d5a4e'
  ctx.fillRect(x + w - 16, base - h - 16, 8, 16)
}

function drawPerson(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dir: Dir,
  walk: number,
  coat: string,
  scarf?: string,
): void {
  const step = Math.sin(walk) * 3
  drawShadow(ctx, x, y + 2, 9, 4)
  ctx.strokeStyle = '#2a241f'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x - 4, y - 6)
  ctx.lineTo(x - 4 + step, y + 2)
  ctx.moveTo(x + 4, y - 6)
  ctx.lineTo(x + 4 - step, y + 2)
  ctx.stroke()
  ctx.fillStyle = coat
  roundRect(ctx, x - 7, y - 18, 14, 14, 4)
  ctx.fill()
  if (scarf) {
    ctx.fillStyle = scarf
    ctx.fillRect(x - 4, y - 16, 8, 3)
  }
  ctx.fillStyle = '#f0c7a4'
  ctx.beginPath()
  ctx.arc(x, y - 22, 5.5, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#2a241f'
  ctx.beginPath()
  ctx.arc(x, y - 24, 5.5, Math.PI, 0)
  ctx.fill()
  if (dir !== 'n') {
    ctx.fillStyle = '#2a241f'
    const ox = dir === 'e' ? 2 : dir === 'w' ? -2 : 0
    const oy = dir === 's' ? 1 : 0
    ctx.fillRect(x - 2 + ox, y - 23 + oy, 1.4, 1.4)
    ctx.fillRect(x + 1 + ox, y - 23 + oy, 1.4, 1.4)
  }
}

function drawDeer(ctx: CanvasRenderingContext2D, x: number, y: number, vx: number, vy: number): void {
  const face = Math.abs(vx) > Math.abs(vy) ? (vx >= 0 ? 1 : -1) : 0
  drawShadow(ctx, x, y + 2, 10, 4)
  ctx.fillStyle = '#8a5a32'
  ctx.beginPath()
  ctx.ellipse(x, y - 8, 9, 5, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(x + face * 8, y - 12, 3.5, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#6e4428'
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.moveTo(x - 4, y - 6)
  ctx.lineTo(x - 5, y)
  ctx.moveTo(x + 4, y - 6)
  ctx.lineTo(x + 5, y)
  ctx.stroke()
}

function drawEntity(ctx: CanvasRenderingContext2D, entity: Entity, anim: number, night: boolean): void {
  if (entity.kind === 'tree') drawTree(ctx, entity, anim, false)
  else if (entity.kind === 'pine') drawTree(ctx, entity, anim, true)
  else if (entity.kind === 'rock' || entity.kind === 'stone' || entity.kind === 'menhir') {
    drawShadow(ctx, entity.x, entity.y + 2, entity.kind === 'menhir' ? 10 : 12, 5)
    ctx.fillStyle = entity.kind === 'menhir' ? '#8d877c' : '#7b756c'
    ctx.beginPath()
    ctx.moveTo(entity.x, entity.y - (entity.kind === 'menhir' ? 28 : 16))
    ctx.lineTo(entity.x + 12, entity.y)
    ctx.lineTo(entity.x - 10, entity.y + 2)
    ctx.closePath()
    ctx.fill()
  } else if (entity.kind === 'house') drawHouse(ctx, entity, night)
  else if (entity.kind === 'well') {
    drawShadow(ctx, entity.x, entity.y + 4, 12, 5)
    ctx.fillStyle = '#8d877c'
    ctx.beginPath()
    ctx.ellipse(entity.x, entity.y, 12, 7, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#5e584f'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.strokeStyle = '#6b4632'
    ctx.beginPath()
    ctx.moveTo(entity.x - 8, entity.y)
    ctx.lineTo(entity.x - 8, entity.y - 14)
    ctx.lineTo(entity.x + 8, entity.y - 14)
    ctx.lineTo(entity.x + 8, entity.y)
    ctx.stroke()
  } else if (entity.kind === 'stall') {
    ctx.fillStyle = '#6b4632'
    ctx.fillRect(entity.x - 14, entity.y - 16, 3, 16)
    ctx.fillRect(entity.x + 11, entity.y - 16, 3, 16)
    ctx.fillStyle = '#c4554e'
    ctx.beginPath()
    ctx.moveTo(entity.x - 18, entity.y - 16)
    ctx.lineTo(entity.x, entity.y - 24)
    ctx.lineTo(entity.x + 18, entity.y - 16)
    ctx.fill()
  } else if (entity.kind === 'lighthouse') {
    drawShadow(ctx, entity.x, entity.y + 2, 12, 5)
    ctx.fillStyle = '#e7e1d4'
    ctx.fillRect(entity.x - 7, entity.y - 58, 14, 58)
    ctx.fillStyle = '#b23b3b'
    ctx.fillRect(entity.x - 7, entity.y - 58, 14, 7)
    ctx.fillRect(entity.x - 7, entity.y - 40, 14, 6)
    ctx.fillStyle = night ? '#ffe7a3' : '#f7f1e4'
    ctx.fillRect(entity.x - 9, entity.y - 70, 18, 12)
    ctx.fillStyle = '#8d4b32'
    ctx.beginPath()
    ctx.moveTo(entity.x - 12, entity.y - 70)
    ctx.lineTo(entity.x, entity.y - 80)
    ctx.lineTo(entity.x + 12, entity.y - 70)
    ctx.fill()
  } else if (entity.kind === 'tower') {
    drawShadow(ctx, entity.x, entity.y + 2, 14, 6)
    ctx.fillStyle = '#8a8478'
    ctx.fillRect(entity.x - 12, entity.y - 52, 24, 52)
    ctx.fillStyle = '#6d675e'
    ctx.fillRect(entity.x - 16, entity.y - 58, 32, 8)
    ctx.fillStyle = night ? '#f2d48a' : '#243038'
    ctx.fillRect(entity.x - 4, entity.y - 40, 8, 10)
  } else if (entity.kind === 'altar') {
    ctx.fillStyle = '#9a9488'
    ctx.fillRect(entity.x - 12, entity.y - 6, 24, 8)
    ctx.fillStyle = '#b7b1a4'
    ctx.fillRect(entity.x - 8, entity.y - 10, 16, 4)
  } else if (entity.kind === 'spore') {
    const pulse = 0.55 + Math.sin(anim * 3 + entity.x) * 0.35
    ctx.fillStyle = `rgba(196, 230, 150, ${0.25 * pulse})`
    ctx.beginPath()
    ctx.arc(entity.x, entity.y - 8, 12, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#d7efb0'
    ctx.beginPath()
    ctx.arc(entity.x, entity.y - 10, 4.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#6d8a58'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(entity.x, entity.y)
    ctx.lineTo(entity.x, entity.y - 8)
    ctx.stroke()
  } else if (entity.kind === 'bottle') {
    ctx.fillStyle = 'rgba(196, 224, 210, 0.9)'
    roundRect(ctx, entity.x - 3, entity.y - 10, 6, 10, 2)
    ctx.fill()
    ctx.fillStyle = '#6b4632'
    ctx.fillRect(entity.x - 1.5, entity.y - 13, 3, 3)
  } else if (entity.kind === 'sign') {
    ctx.fillStyle = '#6b4632'
    ctx.fillRect(entity.x - 2, entity.y - 18, 4, 18)
    ctx.fillStyle = '#e7d7b4'
    roundRect(ctx, entity.x - 12, entity.y - 28, 24, 12, 2)
    ctx.fill()
  } else if (entity.kind === 'reed') {
    ctx.strokeStyle = '#3e6b38'
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(entity.x, entity.y)
    ctx.quadraticCurveTo(entity.x + 4, entity.y - 10, entity.x + 1, entity.y - 16)
    ctx.moveTo(entity.x + 3, entity.y)
    ctx.quadraticCurveTo(entity.x - 2, entity.y - 8, entity.x + 4, entity.y - 14)
    ctx.stroke()
  }
}

function drawFlat(ctx: CanvasRenderingContext2D, entity: Entity): void {
  if (entity.kind === 'flower') {
    ctx.fillStyle = FLOWER[entity.variant % FLOWER.length] ?? FLOWER[0]
    ctx.beginPath()
    ctx.arc(entity.x, entity.y, 3, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#f7f1c8'
    ctx.beginPath()
    ctx.arc(entity.x, entity.y, 1.2, 0, Math.PI * 2)
    ctx.fill()
  } else if (entity.kind === 'mushroom') {
    ctx.fillStyle = '#efe6d4'
    ctx.fillRect(entity.x - 1, entity.y - 4, 2, 4)
    ctx.fillStyle = '#c4554e'
    ctx.beginPath()
    ctx.ellipse(entity.x, entity.y - 4, 4, 2.5, 0, Math.PI, 0)
    ctx.fill()
  }
}

function punchLight(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
  const gradient = ctx.createRadialGradient(x, y, radius * 0.15, x, y, radius)
  gradient.addColorStop(0, 'rgba(0,0,0,0.95)')
  gradient.addColorStop(0.55, 'rgba(0,0,0,0.55)')
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
}

function drawNight(ctx: CanvasRenderingContext2D, sim: Sim, anim: number, cssW: number, cssH: number, dpr: number): void {
  const { darkness } = daylight(sim.time)
  if (darkness < 0.04) return
  if (!nightCanvas) nightCanvas = document.createElement('canvas')
  const width = Math.max(1, Math.floor(cssW * dpr))
  const height = Math.max(1, Math.floor(cssH * dpr))
  if (nightCanvas.width !== width || nightCanvas.height !== height) {
    nightCanvas.width = width
    nightCanvas.height = height
  }
  const night = nightCanvas.getContext('2d')
  if (!night) return
  night.setTransform(dpr, 0, 0, dpr, 0, 0)
  night.clearRect(0, 0, cssW, cssH)
  night.fillStyle = `rgba(10, 18, 38, ${darkness})`
  night.fillRect(0, 0, cssW, cssH)
  night.globalCompositeOperation = 'destination-out'
  const player = worldToScreen(sim.player.x, sim.player.y - 10, sim)
  punchLight(night, player.x, player.y, 250)
  for (const entity of sim.world.entities) {
    if (entity.kind !== 'house' && entity.kind !== 'lighthouse' && entity.kind !== 'spore' && entity.kind !== 'tower') {
      continue
    }
    if (sim.collected.has(entity.id)) continue
    const at = worldToScreen(entity.x, entity.y - (entity.kind === 'lighthouse' ? 64 : 20), sim)
    if (at.x < -200 || at.y < -200 || at.x > cssW + 200 || at.y > cssH + 200) continue
    const radius = entity.kind === 'spore' ? 56 : entity.kind === 'lighthouse' ? 90 : 64
    punchLight(night, at.x, at.y, radius)
  }
  const lamp = sim.world.entities.find((entity) => entity.kind === 'lighthouse')
  if (lamp && darkness > 0.25) {
    const at = worldToScreen(lamp.x, lamp.y - 74, sim)
    night.save()
    night.translate(at.x, at.y)
    night.rotate(anim * 0.6)
    night.fillStyle = 'rgba(0,0,0,0.72)'
    night.beginPath()
    night.moveTo(0, 0)
    night.lineTo(560, -46)
    night.lineTo(560, 46)
    night.fill()
    night.restore()
  }
  night.globalCompositeOperation = 'source-over'
  ctx.drawImage(nightCanvas, 0, 0, cssW, cssH)
}

function worldToScreen(x: number, y: number, sim: Sim): { x: number; y: number } {
  return { x: (x - sim.camX) * ZOOM, y: (y - sim.camY) * ZOOM }
}

function drawLabels(ctx: CanvasRenderingContext2D, sim: Sim): void {
  ctx.font = '600 13px Outfit, sans-serif'
  ctx.textAlign = 'center'
  for (const npc of sim.npcs) {
    if (Math.hypot(npc.x - sim.player.x, npc.y - sim.player.y) > 150 && sim.mode === 'play') continue
    const at = worldToScreen(npc.x, npc.y - 36, sim)
    ctx.fillStyle = 'rgba(16, 14, 12, 0.72)'
    const width = ctx.measureText(npc.name).width + 12
    roundRect(ctx, at.x - width / 2, at.y - 11, width, 16, 8)
    ctx.fill()
    ctx.fillStyle = '#f6f1e6'
    ctx.fillText(npc.name, at.x, at.y + 1)
  }
}

export function drawWorld(
  canvas: HTMLCanvasElement,
  sim: Sim,
  anim: number,
): void {
  const cssW = canvas.clientWidth
  const cssH = canvas.clientHeight
  if (cssW < 2 || cssH < 2) return
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  const pixelW = Math.floor(cssW * dpr)
  const pixelH = Math.floor(cssH * dpr)
  if (canvas.width !== pixelW || canvas.height !== pixelH) {
    canvas.width = pixelW
    canvas.height = pixelH
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.fillStyle = '#1c333c'
  ctx.fillRect(0, 0, cssW, cssH)
  const view = viewWorld(cssW, cssH)
  const night = daylight(sim.time).darkness > 0.18

  ctx.save()
  ctx.translate(-sim.camX * ZOOM, -sim.camY * ZOOM)
  ctx.scale(ZOOM, ZOOM)
  drawGround(ctx, sim, anim, view.w, view.h)

  if (daylight(sim.time).darkness < 0.35) {
    ctx.fillStyle = 'rgba(40, 60, 80, 0.06)'
    for (let i = 0; i < 4; i++) {
      const x = ((i * 1100 + anim * (sim.reduceMotion ? 0 : 18)) % (WORLD_W + 500)) - 200
      const y = 400 + i * 900
      ctx.beginPath()
      ctx.ellipse(x, y, 180, 64, 0, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  for (const entity of sim.world.entities) {
    if (entity.kind !== 'flower' && entity.kind !== 'mushroom') continue
    if (entity.x < sim.camX - 40 || entity.x > sim.camX + view.w + 40) continue
    if (entity.y < sim.camY - 40 || entity.y > sim.camY + view.h + 40) continue
    drawFlat(ctx, entity)
  }

  type Sprite = { y: number; draw: () => void }
  const sprites: Sprite[] = []
  for (const entity of sim.world.entities) {
    if (entity.kind === 'flower' || entity.kind === 'mushroom') continue
    if (sim.collected.has(entity.id)) continue
    if (entity.x < sim.camX - 80 || entity.x > sim.camX + view.w + 80) continue
    if (entity.y < sim.camY - 120 || entity.y > sim.camY + view.h + 80) continue
    sprites.push({ y: entity.y, draw: () => drawEntity(ctx, entity, anim, night) })
  }
  for (const npc of sim.npcs) {
    if (npc.x < sim.camX - 40 || npc.x > sim.camX + view.w + 40) continue
    if (npc.y < sim.camY - 40 || npc.y > sim.camY + view.h + 40) continue
    sprites.push({
      y: npc.y,
      draw: () => drawPerson(ctx, npc.x, npc.y, 's', sim.reduceMotion ? 0 : anim * 2 + npc.phase, npc.color),
    })
  }
  for (const deer of sim.deer) {
    if (deer.x < sim.camX - 40 || deer.x > sim.camX + view.w + 40) continue
    if (deer.y < sim.camY - 40 || deer.y > sim.camY + view.h + 40) continue
    sprites.push({ y: deer.y, draw: () => drawDeer(ctx, deer.x, deer.y, deer.vx, deer.vy) })
  }
  if (sim.mode === 'play') {
    sprites.push({
      y: sim.player.y,
      draw: () => {
        drawPerson(ctx, sim.player.x, sim.player.y, sim.player.dir, sim.player.walk, '#1f3d36', '#e2b15a')
        if (night) {
          const ox = sim.player.dir === 'e' ? 8 : sim.player.dir === 'w' ? -8 : 0
          const oy = sim.player.dir === 'n' ? -16 : -8
          ctx.fillStyle = '#ffe1a3'
          ctx.beginPath()
          ctx.arc(sim.player.x + ox, sim.player.y + oy, 2.4, 0, Math.PI * 2)
          ctx.fill()
        }
      },
    })
  }
  sprites.sort((a, b) => a.y - b.y)
  for (const sprite of sprites) sprite.draw()

  if (night) {
    for (const fly of sim.world.fireflies) {
      if (fly.x < sim.camX - 20 || fly.x > sim.camX + view.w + 20) continue
      if (fly.y < sim.camY - 20 || fly.y > sim.camY + view.h + 20) continue
      const alpha = 0.35 + Math.sin(anim * 3 + fly.phase) * 0.35
      ctx.fillStyle = `rgba(214, 232, 150, ${alpha})`
      ctx.beginPath()
      ctx.arc(fly.x + Math.sin(anim + fly.phase) * 6, fly.y + Math.cos(anim * 1.3 + fly.phase) * 4, 2.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  ctx.globalAlpha = 0.35
  for (const chimney of sim.world.chimneys) {
    if (chimney.x < sim.camX - 30 || chimney.x > sim.camX + view.w + 30) continue
    const t = (anim * 0.35 + chimney.phase) % 1
    ctx.fillStyle = `rgba(90, 90, 90, ${1 - t})`
    ctx.beginPath()
    ctx.arc(chimney.x + Math.sin(t * 6) * 3, chimney.y - t * 26, 3 + t * 4, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  for (const bird of sim.world.birds) {
    const x = ((bird.phase * 800 + anim * (sim.reduceMotion ? 0 : bird.speed) * 20) % (WORLD_W + 160)) - 80
    if (x < sim.camX - 30 || x > sim.camX + view.w + 30) continue
    if (bird.y < sim.camY - 30 || bird.y > sim.camY + view.h + 30) continue
    ctx.strokeStyle = 'rgba(30, 40, 48, 0.55)'
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(x - 7, bird.y)
    ctx.lineTo(x, bird.y + 3)
    ctx.lineTo(x + 7, bird.y)
    ctx.stroke()
  }

  if (sim.dest && sim.mode === 'play') {
    ctx.strokeStyle = 'rgba(226, 177, 90, 0.9)'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(sim.dest.x, sim.dest.y, 6 + Math.sin(anim * 4) * 1.5, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.restore()

  drawLabels(ctx, sim)
  drawNight(ctx, sim, anim, cssW, cssH, dpr)
  const phase = daylight(sim.time).label
  if (phase === 'Dawn') {
    ctx.fillStyle = 'rgba(255, 196, 140, 0.1)'
    ctx.fillRect(0, 0, cssW, cssH)
  } else if (phase === 'Dusk') {
    ctx.fillStyle = 'rgba(255, 122, 78, 0.1)'
    ctx.fillRect(0, 0, cssW, cssH)
  }
  const vignette = ctx.createRadialGradient(cssW / 2, cssH / 2, cssW * 0.3, cssW / 2, cssH / 2, cssW * 0.72)
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, 'rgba(0,0,0,0.28)')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, cssW, cssH)
}

const MINI_COLOR: Record<Biome, string> = {
  water: '#2d6f8f',
  sand: '#e4d0a4',
  meadow: '#7ea84a',
  forest: '#3f6b38',
  highland: '#8d9168',
  rock: '#6d675e',
}

export function drawMinimap(canvas: HTMLCanvasElement, sim: Sim): void {
  const ctx = canvas.getContext('2d')
  if (!ctx || canvas.width < 8) return
  const scale = canvas.width / COLS
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillStyle = '#121614'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  const tiles = sim.world.tiles
  for (let ty = 0; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) {
      if (!sim.explored[ty * COLS + tx]) continue
      const tile = tiles[ty * COLS + tx]
      ctx.fillStyle = MINI_COLOR[tile.biome]
      ctx.fillRect(tx * scale, ty * scale, scale + 0.4, scale + 0.4)
    }
  }
  for (const marker of mapMarkers(sim)) {
    ctx.fillStyle = marker.reached ? '#f4efe6' : '#e2b15a'
    ctx.fillRect((marker.x / TILE) * scale - 1.5, (marker.y / TILE) * scale - 1.5, 3, 3)
  }
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.arc((sim.player.x / TILE) * scale, (sim.player.y / TILE) * scale, 2.4, 0, Math.PI * 2)
  ctx.fill()
}

export function paintAtlas(canvas: HTMLCanvasElement, sim: Sim): void {
  const cssW = canvas.clientWidth || 640
  const cssH = canvas.clientHeight || 640
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  canvas.width = Math.max(1, Math.floor(cssW * dpr))
  canvas.height = Math.max(1, Math.floor(cssH * dpr))
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.fillStyle = '#d9d2c3'
  ctx.fillRect(0, 0, cssW, cssH)
  const scale = Math.min(cssW / COLS, cssH / ROWS)
  const ox = (cssW - COLS * scale) / 2
  const oy = (cssH - ROWS * scale) / 2
  const tiles = sim.world.tiles
  for (let ty = 0; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) {
      if (!sim.explored[ty * COLS + tx]) continue
      ctx.fillStyle = MINI_COLOR[tiles[ty * COLS + tx].biome]
      ctx.fillRect(ox + tx * scale, oy + ty * scale, scale + 0.2, scale + 0.2)
    }
  }
  ctx.font = '600 12px Outfit, sans-serif'
  ctx.textAlign = 'left'
  for (const marker of mapMarkers(sim)) {
    const x = ox + (marker.x / TILE) * scale
    const y = oy + (marker.y / TILE) * scale
    ctx.fillStyle = marker.reached ? '#9c3b38' : '#8a623f'
    ctx.beginPath()
    ctx.moveTo(x, y - 5)
    ctx.lineTo(x + 4, y)
    ctx.lineTo(x, y + 5)
    ctx.lineTo(x - 4, y)
    ctx.fill()
    ctx.fillStyle = '#2a241f'
    ctx.fillText(marker.label, x + 7, y + 4)
  }
  const px = ox + (sim.player.x / TILE) * scale
  const py = oy + (sim.player.y / TILE) * scale
  ctx.fillStyle = '#1f3d36'
  ctx.beginPath()
  ctx.arc(px, py, 4, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#f4efe6'
  ctx.lineWidth = 1.5
  ctx.stroke()
}
