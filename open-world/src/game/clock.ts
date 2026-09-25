export type Daylight = {
  darkness: number
  label: 'Night' | 'Dawn' | 'Day' | 'Dusk'
}

/** `t` is the time of day in [0, 1). Noon sits near 0.42. */
export function daylight(t: number): Daylight {
  const wrapped = ((t % 1) + 1) % 1
  const x = Math.cos((wrapped - 0.42) * Math.PI * 2)
  const darkness = Math.min(0.74, Math.max(0, (1 - x) * 0.42))
  let label: Daylight['label'] = 'Day'
  if (wrapped < 0.2 || wrapped >= 0.82) label = 'Night'
  else if (wrapped < 0.32) label = 'Dawn'
  else if (wrapped < 0.7) label = 'Day'
  else label = 'Dusk'
  return { darkness, label }
}
