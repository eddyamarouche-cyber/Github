import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getCumulativeMinutes, slides } from '../data/slides'
import { presenterNotes } from '../data/presenterNotes'
import { slideHasPlaceholders } from '../utils/placeholders'

export function usePresentation() {
  const [index, setIndex] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPresenting, setIsPresenting] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next')
  const presentingRef = useRef(false)
  const indexRef = useRef(index)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  const slide = slides[index]
  const notes = presenterNotes[slide.id]
  const hasPlaceholders = useMemo(
    () => slideHasPlaceholders(slide.content, notes),
    [slide, notes],
  )

  const goTo = useCallback((nextIndex: number, direction?: 'next' | 'prev') => {
    const current = indexRef.current
    const clamped = Math.min(Math.max(nextIndex, 0), slides.length - 1)
    if (clamped === current) return
    setTransitionDirection(direction ?? (clamped > current ? 'next' : 'prev'))
    setIndex(clamped)
    setShowMenu(false)
  }, [])

  const next = useCallback(() => goTo(indexRef.current + 1, 'next'), [goTo])
  const prev = useCallback(() => goTo(indexRef.current - 1, 'prev'), [goTo])

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }, [])

  const enterPresent = useCallback(async () => {
    presentingRef.current = true
    setIsPresenting(true)
    setShowNotes(false)
    setShowMenu(false)
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen()
      } catch {
        // Presentation mode still works without the Fullscreen API.
      }
    }
  }, [])

  const exitPresent = useCallback(async () => {
    presentingRef.current = false
    setIsPresenting(false)
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen()
      } catch {
        // Ignore — chrome is already restored.
      }
    }
  }, [])

  const togglePresent = useCallback(async () => {
    if (presentingRef.current) {
      await exitPresent()
    } else {
      await enterPresent()
    }
  }, [enterPresent, exitPresent])

  useEffect(() => {
    presentingRef.current = isPresenting
  }, [isPresenting])

  useEffect(() => {
    const onFullscreenChange = () => {
      const fullscreen = Boolean(document.fullscreenElement)
      setIsFullscreen(fullscreen)
      // Exiting browser fullscreen (e.g. Escape) also leaves presentation mode.
      if (!fullscreen && presentingRef.current) {
        presentingRef.current = false
        setIsPresenting(false)
      }
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

      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        void togglePresent()
        return
      }

      if (event.key === 'Escape') {
        if (presentingRef.current) {
          event.preventDefault()
          void exitPresent()
          return
        }
        setShowMenu(false)
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        next()
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        prev()
      } else if (!presentingRef.current && (event.key === 'n' || event.key === 'N')) {
        setShowNotes((prevState) => !prevState)
      } else if (!presentingRef.current && (event.key === 'm' || event.key === 'M')) {
        setShowMenu((prevState) => !prevState)
      } else if (event.key === 'f' || event.key === 'F') {
        void toggleFullscreen()
      } else if (event.key === 'Home') {
        goTo(0, 'prev')
      } else if (event.key === 'End') {
        goTo(slides.length - 1, 'next')
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [exitPresent, goTo, next, prev, toggleFullscreen, togglePresent])

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
    isPresenting,
    transitionDirection,
    progress,
    cumulativeMinutes,
    totalSlides: slides.length,
    setShowNotes,
    setShowMenu,
    goTo,
    next,
    prev,
    toggleFullscreen,
    enterPresent,
    exitPresent,
    togglePresent,
  }
}
