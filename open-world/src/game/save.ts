import { COLS, ROWS } from './places.ts'
import type { Dir, Sim } from './types.ts'

const KEY = 'hearthmere-wilds-v1'
const TILES = COLS * ROWS

export type SaveData = {
  v: 1
  x: number
  y: number
  dir: Dir
  time: number
  collected: string[]
  visited: string[]
  discovered: string[]
  hints: string[]
  talked: string[]
  questDone: boolean
  explored: string
  exploredCount: number
}

function storage(): Storage | null {
  try {
    if (typeof localStorage === 'undefined') return null
    return localStorage
  } catch {
    return null
  }
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = ''
  const chunk = 0x2000
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk))
  }
  return btoa(binary)
}

function base64ToBytes(value: string): Uint8Array | null {
  try {
    const binary = atob(value)
    const out = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i)
    return out
  } catch {
    return null
  }
}

export function saveExists(): boolean {
  return readSave() != null
}

export function readSave(): SaveData | null {
  const store = storage()
  if (!store) return null
  try {
    const raw = store.getItem(KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as SaveData
    if (!data || data.v !== 1 || !Number.isFinite(data.x) || !Number.isFinite(data.y)) return null
    return data
  } catch {
    return null
  }
}

export function clearSave(): void {
  storage()?.removeItem(KEY)
}

export function writeSave(sim: Sim): void {
  const store = storage()
  if (!store || sim.mode !== 'play') return
  const data: SaveData = {
    v: 1,
    x: sim.player.x,
    y: sim.player.y,
    dir: sim.player.dir,
    time: sim.time,
    collected: [...sim.collected],
    visited: [...sim.visited],
    discovered: [...sim.discovered],
    hints: [...sim.hints],
    talked: [...sim.talked],
    questDone: sim.questDone,
    explored: bytesToBase64(sim.explored),
    exploredCount: sim.exploredCount,
  }
  try {
    store.setItem(KEY, JSON.stringify(data))
  } catch {
    // Private mode and full disks just keep the session in memory.
  }
}

export function applySave(sim: Sim, data: SaveData): void {
  sim.player.x = data.x
  sim.player.y = data.y
  sim.player.dir = data.dir
  sim.time = data.time
  sim.collected = new Set(data.collected)
  sim.visited = new Set(data.visited)
  sim.discovered = new Set(data.discovered)
  sim.hints = new Set(data.hints)
  sim.talked = new Set(data.talked)
  sim.questDone = data.questDone
  const fog = base64ToBytes(data.explored)
  if (fog && fog.length === TILES) {
    sim.explored = fog
    sim.exploredCount = data.exploredCount
  }
}
