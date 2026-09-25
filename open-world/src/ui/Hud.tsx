import { useState, type PointerEvent } from 'react'
import type { Bridge } from '../bridge.ts'
import type { HudModel } from '../game/snapshot.ts'

type Props = {
  model: HudModel
  bridge: Bridge
}

export function Hud({ model, bridge }: Props) {
  const [run, setRun] = useState(bridge.runLatch)
  const [knob, setKnob] = useState({ x: 0, y: 0 })

  const aim = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)
    const max = rect.width * 0.38
    const dist = Math.hypot(dx, dy) || 1
    const scale = Math.min(1, dist / max)
    const x = (dx / dist) * scale
    const y = (dy / dist) * scale
    bridge.joyX = x
    bridge.joyY = y
    setKnob({ x, y })
  }

  const release = () => {
    bridge.joyX = 0
    bridge.joyY = 0
    setKnob({ x: 0, y: 0 })
  }

  return (
    <div className="hud">
      <div className="region" key={model.region}>
        <p className="region-name">{model.region}</p>
        <p className="region-meta">
          {model.clock}
          <span> · </span>
          {model.charted}% charted
        </p>
      </div>

      <section className="panel quest" aria-label="Quest">
        <p className="eyebrow">{model.questTitle}</p>
        <ul>
          {model.quests.map((line) => (
            <li key={line.label} className={line.done ? 'done' : undefined}>
              <span className={line.done ? 'tick done' : 'tick'} />
              {line.label}
            </li>
          ))}
        </ul>
        {model.spores.show && (
          <p className="spores">Pale spores {model.spores.count}/5</p>
        )}
      </section>

      {model.toast && <p className="toast">{model.toast}</p>}
      {model.prompt && <p className="prompt">{model.prompt}</p>}

      <button
        className="minimap-btn"
        type="button"
        aria-label="Open the atlas"
        onClick={() => {
          bridge.atlas = true
        }}
      >
        <span className="north">N</span>
        <canvas
          width={180}
          height={180}
          ref={(node) => {
            bridge.minimap = node
            if (!node || node.dataset.ready === '1') return
            const dpr = Math.min(2, window.devicePixelRatio || 1)
            node.width = Math.floor(150 * dpr)
            node.height = Math.floor(150 * dpr)
            node.dataset.ready = '1'
          }}
        />
      </button>

      <p className="key-hint">WASD move · Shift run · E talk · M atlas</p>

      <div
        className="joy touch"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          aim(event)
        }}
        onPointerMove={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
          aim(event)
        }}
        onPointerUp={(event) => {
          release()
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
          }
        }}
        onPointerCancel={release}
      >
        <span
          className="joy-knob"
          style={{ transform: `translate(${knob.x * 28}px, ${knob.y * 28}px)` }}
        />
      </div>

      <div className="touch-actions touch">
        <button
          className={run ? 'btn small pressed' : 'btn small ghost'}
          type="button"
          aria-pressed={run}
          onClick={() => {
            bridge.runLatch = !bridge.runLatch
            setRun(bridge.runLatch)
          }}
        >
          Run
        </button>
        <button
          className="btn small"
          type="button"
          onClick={() => {
            bridge.interact = true
          }}
        >
          Talk
        </button>
      </div>
    </div>
  )
}
