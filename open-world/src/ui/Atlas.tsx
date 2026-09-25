import { useEffect, useRef } from 'react'
import type { Bridge } from '../bridge.ts'
import { paintAtlas } from '../game/draw.ts'
import type { HudModel } from '../game/snapshot.ts'

type Props = {
  model: HudModel
  bridge: Bridge
}

export function Atlas({ model, bridge }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const paint = () => {
      const canvas = canvasRef.current
      if (!canvas || !bridge.sim) return
      paintAtlas(canvas, bridge.sim)
    }
    paint()
    window.addEventListener('resize', paint)
    return () => window.removeEventListener('resize', paint)
  }, [bridge, model.rev])

  return (
    <div className="atlas" role="dialog" aria-modal="true" aria-label="Atlas">
      <canvas ref={canvasRef} className="atlas-map" />
      <aside className="atlas-side">
        <p className="eyebrow">Field book</p>
        <h2>Atlas</h2>
        <p className="atlas-charted">{model.charted}% of the wilds charted</p>
        <ul className="journal">
          {model.journal.map((entry) => (
            <li key={entry.title}>
              <strong>{entry.title}</strong>
              <span>{entry.body}</span>
            </li>
          ))}
        </ul>
        <div className="title-actions">
          <button className="btn" type="button" onClick={() => { bridge.close = true }}>
            Close
          </button>
          <button className="btn ghost" type="button" onClick={() => { bridge.command = 'title' }}>
            Return to title
          </button>
        </div>
      </aside>
    </div>
  )
}
