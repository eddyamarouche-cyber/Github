import { useCallback, useEffect, useMemo, useState } from 'react'
import { getCumulativeMinutes, slides } from '../data/slides'
import { presenterNotes } from '../data/presenterNotes'
import { slideHasPlaceholders } from '../utils/placeholders'

export function usePresentation() {
  const [index, setIndex] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slide = slides[index]
  const notes = presenterNotes[slide.id]
  const hasPlaceholders = useMemo(
    () => slideHasPlaceholders(slide.content, notes),
    [slide, notes],
  )

  const goTo = useCallback((next: number) => {
    setIndex(Math.min(Math.max(next, 0), slides.length - 1))
    setShowMenu(false)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        next()
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        prev()
      } else if (event.key === 'n' || event.key === 'N') {
        setShowNotes((prevState) => !prevState)
      } else if (event.key === 'm' || event.key === 'M') {
        setShowMenu((prevState) => !prevState)
      } else if (event.key === 'f' || event.key === 'F') {
        void toggleFullscreen()
      } else if (event.key === 'Escape') {
        setShowMenu(false)
      } else if (event.key === 'Home') {
        goTo(0)
      } else if (event.key === 'End') {
        goTo(slides.length - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goTo, next, prev, toggleFullscreen])

  const progress = ((index + 1) / slides.length) * 100
  const cumulativeMinutes = getCumulativeMinutes(index)

  return {
    index,
    slide,
    notes,
    hasPlaceholders,
    showNotes,
    showMenu,
    isFullscreen,
    progress,
    cumulativeMinutes,
    totalSlides: slides.length,
    setShowNotes,
    setShowMenu,
    goTo,
    next,
    prev,
    toggleFullscreen,
  }
}
