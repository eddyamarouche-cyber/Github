import type { Slide } from '../data/types'
import { SlideRenderer } from './SlideRenderer'

interface PresentModeProps {
  slide: Slide
  transitionDirection: 'next' | 'prev'
  cursorHidden: boolean
  onExit: () => void
}

export function PresentMode({
  slide,
  transitionDirection,
  cursorHidden,
  onExit,
}: PresentModeProps) {
  return (
    <div
      className={`present-mode fixed inset-0 z-50 flex items-center justify-center bg-bg ${
        cursorHidden ? 'cursor-none' : 'cursor-default'
      }`}
      role="dialog"
      aria-label="Presentation mode"
      aria-modal="true"
    >
      <div className="present-stage relative overflow-hidden bg-bg">
        <div
          key={`${slide.id}-${transitionDirection}`}
          className={
            transitionDirection === 'next'
              ? 'present-slide-enter-next h-full w-full'
              : 'present-slide-enter-prev h-full w-full'
          }
        >
          <SlideRenderer slide={slide} />
        </div>
      </div>

      {!cursorHidden ? (
        <button
          type="button"
          onClick={onExit}
          className="absolute top-4 right-4 rounded-lg border border-border/80 bg-bg-elevated/80 px-3 py-1.5 text-xs text-text-muted backdrop-blur transition hover:border-accent/50 hover:text-text"
          title="Exit presentation mode (Esc)"
        >
          Exit · Esc
        </button>
      ) : null}
    </div>
  )
}
