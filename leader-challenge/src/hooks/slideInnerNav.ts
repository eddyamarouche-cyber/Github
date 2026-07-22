export type SlideInnerNavHandler = {
  /** Return true if the slide consumed the next action. */
  next: () => boolean
  /** Return true if the slide consumed the previous action. */
  prev: () => boolean
}

type DeckAdvance = {
  next: () => void
  prev: () => void
}

let handler: SlideInnerNavHandler | null = null
let deckAdvance: DeckAdvance | null = null

export function registerSlideInnerNav(nextHandler: SlideInnerNavHandler | null) {
  handler = nextHandler
  return () => {
    if (handler === nextHandler) {
      handler = null
    }
  }
}

export function bindDeckAdvance(advance: DeckAdvance | null) {
  deckAdvance = advance
  return () => {
    if (deckAdvance === advance) {
      deckAdvance = null
    }
  }
}

export function consumeSlideInnerNext(): boolean {
  return handler?.next() ?? false
}

export function consumeSlideInnerPrev(): boolean {
  return handler?.prev() ?? false
}

/** Advance the deck without re-entering inner-slide navigation. */
export function requestDeckNext() {
  deckAdvance?.next()
}

export function requestDeckPrev() {
  deckAdvance?.prev()
}
