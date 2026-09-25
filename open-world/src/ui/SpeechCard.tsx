import type { Bridge } from '../bridge.ts'
import type { HudModel } from '../game/snapshot.ts'

type Props = {
  speech: NonNullable<HudModel['speech']>
  bridge: Bridge
}

export function SpeechCard({ speech, bridge }: Props) {
  return (
    <div className="speech" role="dialog" aria-label={speech.speaker}>
      <p className="speech-name">{speech.speaker}</p>
      <p className="speech-text">{speech.text}</p>
      <button className="btn small" type="button" onClick={() => { bridge.advance = true }}>
        {speech.last ? 'Close' : 'Continue'}
      </button>
    </div>
  )
}
