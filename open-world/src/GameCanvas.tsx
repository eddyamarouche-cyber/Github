import { useEffect, useRef, useState } from 'react'
import type { Bridge } from './bridge.ts'
import { drawMinimap, drawWorld } from './game/draw.ts'
import { saveExists, writeSave } from './game/save.ts'
import { snapshot, type HudModel } from './game/snapshot.ts'
import { createSim, step } from './game/simulate.ts'
import type { Sim } from './game/types.ts'

type Props = {
  bridge: Bridge
  onHud: (model: HudModel) => void
}

export function GameCanvas({ bridge, onHud }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onHudRef = useRef(onHud)
  onHudRef.current = onHud
  const [error, setError] = useState<string | null>(null)
  const pointer = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let sim: Sim
    try {
      sim = createSim()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'The wilds failed to generate.')
      return
    }
    bridge.sim = sim
    let frame = 0
    let last = performance.now()
    let acc = 0
    let miniAcc = 0
    let shown = -1
    let dead = false

    const publish = () => onHudRef.current(snapshot(sim, bridge, saveExists()))

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return
      const target = event.target
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return
      if (target instanceof HTMLButtonElement && (event.key === 'Enter' || event.key === ' ')) return
      if (event.code.startsWith('Arrow') || event.code === 'Space') event.preventDefault()
      bridge.keys.add(event.code)
      if (event.code === 'KeyE' || event.code === 'Space' || event.code === 'Enter') {
        bridge.interact = true
        bridge.advance = true
      }
      if (event.code === 'KeyM') bridge.atlas = true
      if (event.code === 'Escape') bridge.close = true
    }
    const onKeyUp = (event: KeyboardEvent) => {
      bridge.keys.delete(event.code)
    }
    const onBlur = () => bridge.keys.clear()
    const onUnload = () => {
      if (sim.mode === 'play') writeSave(sim)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', onBlur)
    window.addEventListener('beforeunload', onUnload)
    publish()

    const loop = (now: number) => {
      if (dead) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      step(sim, bridge, dt, canvas.clientWidth, canvas.clientHeight, now / 1000)
      drawWorld(canvas, sim, now / 1000)
      canvas.style.cursor = sim.hoverPrompt ? 'pointer' : 'default'
      acc += dt
      miniAcc += dt
      if (sim.rev !== shown || acc > 0.1) {
        acc = 0
        shown = sim.rev
        publish()
      }
      if (bridge.minimap && sim.mode === 'play' && miniAcc > 0.16) {
        miniAcc = 0
        drawMinimap(bridge.minimap, sim)
      }
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      dead = true
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('beforeunload', onUnload)
      if (sim.mode === 'play') writeSave(sim)
      bridge.sim = null
      bridge.keys.clear()
      bridge.joyX = 0
      bridge.joyY = 0
    }
  }, [bridge])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="world"
        aria-label="Hearthmere Wilds"
        onPointerDown={(event) => {
          pointer.current = { x: event.clientX, y: event.clientY }
        }}
        onPointerUp={(event) => {
          const start = pointer.current
          pointer.current = null
          if (!start) return
          const dx = event.clientX - start.x
          const dy = event.clientY - start.y
          if (dx * dx + dy * dy > 36) return
          const rect = event.currentTarget.getBoundingClientRect()
          bridge.click = { x: event.clientX - rect.left, y: event.clientY - rect.top }
        }}
        onPointerCancel={() => {
          pointer.current = null
        }}
      />
      {error && <p className="boot-error">{error}</p>}
    </>
  )
}
