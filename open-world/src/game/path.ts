import { COLS, ROWS } from './places.ts'

class Heap {
  private f: number[] = []
  private n: number[] = []

  get size(): number {
    return this.n.length
  }

  push(score: number, index: number): void {
    this.f.push(score)
    this.n.push(index)
    let k = this.n.length - 1
    while (k > 0) {
      const parent = (k - 1) >> 1
      if (this.f[parent] <= this.f[k]) break
      this.swap(parent, k)
      k = parent
    }
  }

  pop(): number {
    const top = this.n[0]
    const lastF = this.f.pop()
    const lastN = this.n.pop()
    if (this.n.length === 0 || lastF === undefined || lastN === undefined) return top
    this.f[0] = lastF
    this.n[0] = lastN
    let k = 0
    for (;;) {
      const left = k * 2 + 1
      const right = left + 1
      let smallest = k
      if (left < this.n.length && this.f[left] < this.f[smallest]) smallest = left
      if (right < this.n.length && this.f[right] < this.f[smallest]) smallest = right
      if (smallest === k) break
      this.swap(smallest, k)
      k = smallest
    }
    return top
  }

  private swap(a: number, b: number): void {
    const tf = this.f[a]
    this.f[a] = this.f[b]
    this.f[b] = tf
    const tn = this.n[a]
    this.n[a] = this.n[b]
    this.n[b] = tn
  }
}

export type GridPoint = { tx: number; ty: number }

/**
 * 4-directional A*. `cost` returns null for blocked tiles and a step cost
 * of at least 1 otherwise. The heuristic is Manhattan, so costs must stay ≥ 1.
 */
export function findPath(
  sx: number,
  sy: number,
  gx: number,
  gy: number,
  cost: (tx: number, ty: number) => number | null,
): GridPoint[] | null {
  if (sx === gx && sy === gy) return [{ tx: sx, ty: sy }]
  const total = COLS * ROWS
  const start = sy * COLS + sx
  const goal = gy * COLS + gx
  const gScore = new Float64Array(total)
  gScore.fill(Number.POSITIVE_INFINITY)
  gScore[start] = 0
  const prev = new Int32Array(total)
  prev.fill(-1)
  const closed = new Uint8Array(total)
  const heap = new Heap()
  heap.push(Math.abs(gx - sx) + Math.abs(gy - sy), start)
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const
  let guard = total * 8
  while (heap.size > 0 && guard-- > 0) {
    const current = heap.pop()
    if (closed[current]) continue
    closed[current] = 1
    if (current === goal) {
      const path: GridPoint[] = []
      let cursor = current
      while (cursor !== -1) {
        path.push({ tx: cursor % COLS, ty: (cursor / COLS) | 0 })
        cursor = prev[cursor]
      }
      path.reverse()
      return path
    }
    const cx = current % COLS
    const cy = (current / COLS) | 0
    for (const [dx, dy] of dirs) {
      const nx = cx + dx
      const ny = cy + dy
      if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue
      const next = ny * COLS + nx
      if (closed[next]) continue
      const step = cost(nx, ny)
      if (step == null) continue
      const nextG = gScore[current] + step
      if (nextG < gScore[next]) {
        gScore[next] = nextG
        prev[next] = current
        heap.push(nextG + Math.abs(gx - nx) + Math.abs(gy - ny), next)
      }
    }
  }
  return null
}
