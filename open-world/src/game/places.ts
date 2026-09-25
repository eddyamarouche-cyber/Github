export const TILE = 32
export const COLS = 140
export const ROWS = 140
export const WORLD_W = COLS * TILE
export const WORLD_H = ROWS * TILE
export const ZOOM = 2
export const WALK = 148
export const RUN = 236
export const PLAYER_R = 11
export const DAY_SECONDS = 170
export const INTERACT_R = 86

export const SEED = 7

export type Place = {
  tx: number
  ty: number
  name?: string
}

export const places = {
  spawn: { tx: 71, ty: 102 },
  village: { tx: 71, ty: 104, name: 'Hearthmere' },
  mara: { tx: 66, ty: 105 },
  tomas: { tx: 71, ty: 115 },
  samA: { tx: 68, ty: 109 },
  samB: { tx: 76, ty: 109 },
  lin: { tx: 46, ty: 86, name: "Lin's garden" },
  shrine: { tx: 28, ty: 50, name: 'Greenveil shrine' },
  ren: { tx: 28, ty: 52 },
  grove: { tx: 16, ty: 66, name: 'Unmarked grove' },
  lighthouse: { tx: 124, ty: 110, name: 'Saltlight' },
  tower: { tx: 108, ty: 30, name: 'Highwatch' },
  ivo: { tx: 108, ty: 34 },
  island: { tx: 34, ty: 131, name: 'Low-tide isle' },
  well: { tx: 71, ty: 107 },
  sign: { tx: 73, ty: 100 },
} as const

export const questMarks = [
  { id: 'lighthouse', tx: places.lighthouse.tx, ty: places.lighthouse.ty, name: 'Saltlight' },
  { id: 'shrine', tx: places.shrine.tx, ty: places.shrine.ty, name: 'Greenveil shrine' },
  { id: 'tower', tx: places.tower.tx, ty: places.tower.ty, name: 'Highwatch' },
] as const

export const sporeTiles = [
  { tx: 18, ty: 44 },
  { tx: 32, ty: 38 },
  { tx: 12, ty: 58 },
  { tx: 36, ty: 64 },
  { tx: 22, ty: 76 },
] as const

export function center(tx: number, ty: number): { x: number; y: number } {
  return { x: (tx + 0.5) * TILE, y: (ty + 0.5) * TILE }
}

export function viewWorld(cssW: number, cssH: number): { w: number; h: number } {
  return { w: cssW / ZOOM, h: cssH / ZOOM }
}
