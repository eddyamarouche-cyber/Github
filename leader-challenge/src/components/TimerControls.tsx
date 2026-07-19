import type { ReactNode } from 'react'
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

function Chip({
  children,
  danger = false,
  active = false,
  onClick,
  title,
}: {
  children: ReactNode
  danger?: boolean
  active?: boolean
  onClick?: () => void
  title?: string
}) {
  const className = `inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs transition ${
    danger
      ? 'border-danger/40 bg-danger/10 text-danger'
      : active
        ? 'border-accent/40 bg-accent-dim text-accent'
        : 'border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white'
  }`

  if (onClick) {
    return (
      <button type="button" onClick={onClick} title={title} className={className}>
        {children}
      </button>
    )
  }

  return <div className={className}>{children}</div>
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
      <Chip danger={isOvertime}>
        <Timer size={14} className={isOvertime ? 'text-danger' : 'text-accent'} />
        <span className="font-semibold tracking-wide">
          {isOvertime
            ? `+${formatClock(overtimeSeconds)} overtime`
            : formatClock(remainingSeconds)}
        </span>
        <span className="text-white/30">/ 90:00</span>
      </Chip>

      <Chip onClick={onToggle} title={isRunning ? 'Pause timer' : 'Start timer'}>
        {isRunning ? <Pause size={14} /> : <Play size={14} />}
        {isRunning ? 'Pause' : 'Start'}
      </Chip>

      <Chip onClick={onReset} title="Reset timer">
        <RotateCcw size={14} />
        Reset
      </Chip>

      <Chip
        onClick={onToggleRehearsal}
        active={isRehearsal}
        title="Toggle rehearsal mode"
      >
        Rehearsal {isRehearsal ? 'On' : 'Off'}
      </Chip>

      <Chip>
        {isRehearsal
          ? `Slide ${recommendedMinutes} min · Cumulative ${cumulativeMinutes.toFixed(1)} min · Elapsed ${formatClock(elapsedSeconds)}`
          : `Recommended ${recommendedMinutes} min`}
      </Chip>
    </div>
  )
}
