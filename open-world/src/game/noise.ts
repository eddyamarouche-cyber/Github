/** Stable unit hash in [0, 1). */
export function hash(x: number, y: number, seed: number): number {
  let n = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(seed | 0, 1440662683)
  n = Math.imul(n ^ (n >>> 13), 1274126177)
  n = n ^ (n >>> 16)
  return (n >>> 0) / 4294967296
}
