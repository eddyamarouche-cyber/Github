import { useRef, useState } from 'react'
import { createBridge, type Bridge } from './bridge.ts'
import { GameCanvas } from './GameCanvas.tsx'
import type { HudModel } from './game/snapshot.ts'
import { Atlas } from './ui/Atlas.tsx'
import { Hud } from './ui/Hud.tsx'
import { SpeechCard } from './ui/SpeechCard.tsx'
import { TitleScreen } from './ui/TitleScreen.tsx'

export default function App() {
  const bridge = useRef<Bridge | null>(null)
  if (!bridge.current) bridge.current = createBridge()
  const link = bridge.current
  const [hud, setHud] = useState<HudModel | null>(null)

  return (
    <div className="app">
      <GameCanvas bridge={link} onHud={setHud} />
      {hud?.mode === 'play' && <Hud model={hud} bridge={link} />}
      {hud?.mode === 'attract' && <TitleScreen hasSave={hud.hasSave} bridge={link} />}
      {hud?.speech && <SpeechCard speech={hud.speech} bridge={link} />}
      {hud?.atlas && hud.mode === 'play' && <Atlas model={hud} bridge={link} />}
    </div>
  )
}
