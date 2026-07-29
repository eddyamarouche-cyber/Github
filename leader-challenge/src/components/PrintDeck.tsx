import { slides } from '../data/slides'
import { SlideRenderer } from './SlideRenderer'

export function PrintDeck() {
  return (
    <div className="print-deck">
      {slides.map((slide) => (
        <div key={slide.id} className="print-slide">
          <div className="h-full w-full">
            <SlideRenderer slide={slide} />
          </div>
        </div>
      ))}
    </div>
  )
}
