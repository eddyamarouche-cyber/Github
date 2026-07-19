import { slides } from '../data/slides'
import { presenterNotes } from '../data/presenterNotes'
import { slideHasPlaceholders } from '../utils/placeholders'
import { SlideRenderer } from './SlideRenderer'

export function PrintDeck() {
  return (
    <div className="print-deck">
      {slides.map((slide) => {
        const hasPlaceholders = slideHasPlaceholders(
          slide.content,
          presenterNotes[slide.id],
        )
        return (
          <div key={slide.id} className="print-slide">
            <div className="h-full w-full">
              <SlideRenderer slide={slide} hasPlaceholders={hasPlaceholders} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
