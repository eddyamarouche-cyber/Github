import { useEffect, useRef, useState } from 'react'

const TOTAL_SECONDS = 90 * 60

export function useTimer(totalSeconds = TOTAL_SECONDS) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isRehearsal, setIsRehearsal] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning])

  const remainingSeconds = Math.max(totalSeconds - elapsedSeconds, 0)
  const isOvertime = elapsedSeconds > totalSeconds
  const overtimeSeconds = Math.max(elapsedSeconds - totalSeconds, 0)

  return {
    elapsedSeconds,
    remainingSeconds,
    isRunning,
    isRehearsal,
    isOvertime,
    overtimeSeconds,
    totalSeconds,
    start: () => setIsRunning(true),
    pause: () => setIsRunning(false),
    toggle: () => setIsRunning((prev) => !prev),
    reset: () => {
      setIsRunning(false)
      setElapsedSeconds(0)
    },
    toggleRehearsal: () => setIsRehearsal((prev) => !prev),
    setRehearsal: setIsRehearsal,
  }
}

export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
