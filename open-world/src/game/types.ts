export type Biome = 'water' | 'sand' | 'meadow' | 'forest' | 'highland' | 'rock'

export type Dir = 'n' | 'e' | 's' | 'w'

export type Tile = {
  biome: Biome
  path: boolean
  dock: boolean
  bridge: boolean
  bar: boolean
  variant: number
}

export type EntityKind =
  | 'tree'
  | 'pine'
  | 'rock'
  | 'flower'
  | 'reed'
  | 'mushroom'
  | 'house'
  | 'well'
  | 'stall'
  | 'lighthouse'
  | 'tower'
  | 'altar'
  | 'spore'
  | 'bottle'
  | 'menhir'
  | 'sign'
  | 'stone'

export type Entity = {
  id: string
  kind: EntityKind
  x: number
  y: number
  radius: number
  solid: boolean
  variant: number
}

export type NpcId = 'mara' | 'tomas' | 'lin' | 'ren' | 'ivo' | 'sam'

export type Npc = {
  id: NpcId
  name: string
  x: number
  y: number
  ax: number
  ay: number
  bx: number
  by: number
  patrol: boolean
  phase: number
  color: string
}

export type Deer = {
  x: number
  y: number
  vx: number
  vy: number
  flee: number
  graze: number
  homeX: number
  homeY: number
}

export type Spark = { x: number; y: number; phase: number }

export type Bird = { y: number; speed: number; phase: number }

export type World = {
  seed: number
  tiles: Tile[]
  entities: Entity[]
  buckets: Map<number, Entity[]>
  npcs: Npc[]
  deer: Deer[]
  fireflies: Spark[]
  chimneys: Spark[]
  birds: Bird[]
  landCount: number
}

export type Speech = {
  speaker: string
  lines: string[]
  index: number
}

export type Toast = { text: string; until: number }

export type SimMode = 'attract' | 'play'

export type Player = {
  x: number
  y: number
  dir: Dir
  walk: number
  moving: boolean
}

export type Sim = {
  world: World
  mode: SimMode
  player: Player
  npcs: Npc[]
  deer: Deer[]
  collected: Set<string>
  visited: Set<string>
  discovered: Set<string>
  hints: Set<string>
  talked: Set<string>
  questDone: boolean
  explored: Uint8Array
  exploredCount: number
  time: number
  toast: Toast | null
  dest: { x: number; y: number } | null
  destStall: number
  destBest: number
  pendingId: string | null
  camX: number
  camY: number
  snapCam: boolean
  speech: Speech | null
  atlas: boolean
  region: string
  revealTx: number
  revealTy: number
  rev: number
  reduceMotion: boolean
  saveTimer: number
  hoverPrompt: string | null
}
