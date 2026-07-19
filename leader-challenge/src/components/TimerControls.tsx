import { Pause, Play, RotateCcw, Timer } from 'lucide-react'
import { formatClock } from '../hooks/useTimer'

interface TimerControlsProps {
  remainingSeconds: number
  elapsedSeconds: number
  isRunning: boolean
  isOvertime: boolean
  overtimeSeconds: number
  isRehearsal: boolean
  onToggle: () => void
  onReset: () => void
  onToggleRehearsal: () => void
  recommendedMinutes: number
  cumulativeMinutes: number
}

export function TimerControls({
  remainingSeconds,
  elapsedSeconds,
  isRunning,
  isOvertime,
  overtimeSeconds,
  isRehearsal,
  onToggle,
  onReset,
  onToggleRehearsal,
  recommendedMinutes,
  cumulativeMinutes,
}: TimerControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <div
        className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
          isOvertime
            ? 'border-danger/50 bg-danger/10 text-danger'
            : 'border-border bg-bg-panel text-text'
        }`}
      >
        <Timer size={14} className={isOvertime ? 'text-danger' : 'text-accent'} />
        <span className="font-semibold tracking-wide">
          {isOvertime
            ? `+${formatClock(overtimeSeconds)} overtime`
            : formatClock(remainingSeconds)}
        </span>
        <span className="text-text-dim">/ 90:00</span>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-text-muted transition hover:border-accent/50 hover:text-text"
        title={isRunning ? 'Pause timer' : 'Start timer'}
      >
        {isRunning ? <Pause size={14} /> : <Play size={14} />}
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-text-muted transition hover:border-accent/50 hover:text-text"
        title="Reset timer"
      >
        <RotateCcw size={14} />
        Reset
      </button>

      <button
        type="button"
        onClick={onToggleRehearsal}
        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 transition ${
          isRehearsal
            ? 'border-accent bg-accent-dim text-accent'
            : 'border-border bg-bg-panel text-text-muted hover:border-accent/50 hover:text-text'
        }`}
        title="Toggle rehearsal mode"
      >
        Rehearsal {isRehearsal ? 'On' : 'Off'}
      </button>

      {isRehearsal ? (
        <div className="rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-text-muted">
          Slide {recommendedMinutes} min · Cumulative {cumulativeMinutes.toFixed(1)} min ·
          Elapsed {formatClock(elapsedSeconds)}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-text-muted">
          Recommended {recommendedMinutes} min
        </div>
      )}
    </div>
  )
}
