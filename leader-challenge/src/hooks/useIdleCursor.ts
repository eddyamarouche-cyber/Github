import { useEffect, useState } from 'react'

/** Hide the cursor after `idleMs` of no pointer activity while enabled. */
export function useIdleCursor(enabled: boolean, idleMs = 3000) {
  const [cursorHidden, setCursorHidden] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setCursorHidden(false)
      return
    }

    let timer: number | undefined

    const bump = () => {
      setCursorHidden(false)
      if (timer != null) window.clearTimeout(timer)
      timer = window.setTimeout(() => setCursorHidden(true), idleMs)
    }

    bump()
    window.addEventListener('mousemove', bump)
    window.addEventListener('mousedown', bump)
    window.addEventListener('touchstart', bump)

    return () => {
      if (timer != null) window.clearTimeout(timer)
      window.removeEventListener('mousemove', bump)
      window.removeEventListener('mousedown', bump)
      window.removeEventListener('touchstart', bump)
      setCursorHidden(false)
    }
  }, [enabled, idleMs])

  return cursorHidden
}
