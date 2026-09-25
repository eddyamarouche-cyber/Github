import { useState } from 'react'
import type { Bridge } from '../bridge.ts'

type Props = {
  hasSave: boolean
  bridge: Bridge
}

export function TitleScreen({ hasSave, bridge }: Props) {
  const [armed, setArmed] = useState(false)

  return (
    <div className="title">
      <div className="title-scrim" />
      <div className="title-card">
        <p className="eyebrow">A small open world</p>
        <h1>Open World</h1>
        <p className="subtitle">Hearthmere Wilds</p>
        <p className="lead">
          A bay, a forest, and a ridge. Walk anywhere. The atlas only fills in where you have been.
        </p>
        <div className="title-actions">
          {hasSave ? (
            <>
              <button className="btn" type="button" onClick={() => { bridge.command = 'continue' }}>
                Continue
              </button>
              <button
                className="btn ghost"
                type="button"
                onClick={() => {
                  if (armed) bridge.command = 'new'
                  else setArmed(true)
                }}
              >
                {armed ? 'Wipe the atlas' : 'Start again'}
              </button>
            </>
          ) : (
            <button className="btn" type="button" onClick={() => { bridge.command = 'new' }}>
              Enter the wilds
            </button>
          )}
        </div>
        <p className="hints">WASD or click to walk · Shift to run · E to talk · M for the atlas</p>
      </div>
    </div>
  )
}
