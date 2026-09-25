import type { Sim } from './game/types.ts'

export type Bridge = {
  keys: Set<string>
  joyX: number
  joyY: number
  runLatch: boolean
  interact: boolean
  atlas: boolean
  advance: boolean
  close: boolean
  click: { x: number; y: number } | null
  command: 'new' | 'continue' | 'title' | null
  sim: Sim | null
  minimap: HTMLCanvasElement | null
}

export function createBridge(): Bridge {
  return {
    keys: new Set(),
    joyX: 0,
    joyY: 0,
    runLatch: false,
    interact: false,
    atlas: false,
    advance: false,
    close: false,
    click: null,
    command: null,
    sim: null,
    minimap: null,
  }
}
