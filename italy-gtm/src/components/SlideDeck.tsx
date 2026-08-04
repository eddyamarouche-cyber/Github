import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { slides, presenter } from '../data/slides'
import type { Slide, VerticalRow } from '../data/slides'
import { StageBackdrop } from './StageBackdrop'

function MediaPlane({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`media-plane ${className}`} aria-hidden={alt ? undefined : true}>
      <img className="media-img" src={src} alt={alt} loading="eager" decoding="async" />
      <div className="media-scrim" />
    </div>
  )
}

function FinancialDeepDive({
  vertical,
  open,
  onClose,
}: {
  vertical: VerticalRow
  open: boolean
  onClose: () => void
}) {
  const dive = vertical.deepDive
  if (!dive) return null

  return (
    <div
      className={`deep-dive ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-labelledby="deep-dive-title"
    >
      <MediaPlane
        src={vertical.image}
        alt={vertical.imageAlt}
        className="deep-dive-media"
      />
      <div className="deep-dive-body">
        <button type="button" className="deep-dive-back" onClick={onClose}>
          <span aria-hidden="true">←</span> Back to verticals
        </button>

        <p className="eyebrow">{vertical.name}</p>
        <h2 id="deep-dive-title" className="deep-dive-title">
          {dive.headline}
        </h2>

        <p className="deep-dive-why">{dive.whyLabel}</p>

        <div
          className={`deep-dive-grid deep-dive-grid-${dive.blocks.length}`}
        >
          {dive.blocks.map((block, i) => (
            <section
              key={block.title}
              className="deep-dive-block"
              style={{ ['--i' as string]: i }}
            >
              <div className="deep-dive-block-head">
                <span className="deep-dive-block-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{block.title}</h3>
              </div>

              {block.stats && block.stats.length > 0 && (
                <div className="deep-dive-stats">
                  {block.stats.map((stat) => (
                    <div key={stat.value} className="deep-stat">
                      <span className="deep-stat-value">{stat.value}</span>
                      <span className="deep-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="point-list">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="deep-dive-closer">
          <span className="deep-dive-closer-mark" aria-hidden="true">
            →
          </span>
          {dive.closer}
        </p>

        {dive.sources && dive.sources.length > 0 && (
          <div className="deep-dive-sources">
            <p className="aside-label">Sources</p>
            <ul>
              {dive.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function SlideContent({
  slide,
  active,
  openVerticalId,
  onOpenVertical,
  onCloseVertical,
}: {
  slide: Slide
  active: boolean
  openVerticalId: string | null
  onOpenVertical: (id: string) => void
  onCloseVertical: () => void
}) {
  const enter = active ? 'is-active' : ''

  if (slide.kind === 'cover') {
    return (
      <div className={`slide-inner cover visual-slide ${enter}`}>
        {slide.image && (
          <MediaPlane src={slide.image} alt={slide.imageAlt ?? ''} className="cover-media" />
        )}
        <div className="cover-copy">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h1 className="cover-title">
            <span className="cover-brand">Anthropic</span>
            <span className="cover-line">interviews</span>
          </h1>
          <p className="cover-dates">{slide.lead}</p>
          {slide.quote && <p className="cover-tag">{slide.quote}</p>}
          <p className="cover-hint">
            <span className="hint-key">→</span>
            <span>Italy GTM strategy</span>
          </p>
        </div>
      </div>
    )
  }

  if (slide.kind === 'focus') {
    return (
      <div className={`slide-inner focus visual-slide ${enter}`}>
        {slide.image && (
          <MediaPlane src={slide.image} alt={slide.imageAlt ?? ''} className="focus-media" />
        )}
        <div className="focus-copy">
          <p className="brand-lockup">
            <span className="brand-name">{presenter.company}</span>
            <span className="brand-role">Italy</span>
          </p>
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-lead">{slide.lead}</p>
          {slide.quote && (
            <p className="positioning">
              <span className="positioning-mark" aria-hidden="true" />
              {slide.quote}
            </p>
          )}
          <div className="vertical-strip" aria-label="Priority verticals">
            {slide.focusItems?.map((item, i) => (
              <span key={item} className="vertical-chip" style={{ ['--i' as string]: i }}>
                <span className="vertical-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="vertical-name">{item}</span>
              </span>
            ))}
          </div>
        </div>
        <aside className="focus-aside">
          <div className="why-block">
            <p className="aside-label">Why Italy</p>
            <ul className="aside-list">
              {slide.points?.map((point, i) => (
                <li key={point} style={{ ['--i' as string]: i }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    )
  }

  if (slide.kind === 'verticals') {
    const openVertical = slide.verticals?.find((v) => v.id === openVerticalId) ?? null

    return (
      <div
        className={`slide-inner verticals visual-slide ${enter} ${openVertical ? 'has-deep-dive' : ''}`}
      >
        <header className="slide-head overlay-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <div className="vertical-panels" aria-label="Priority verticals">
          {slide.verticals?.map((row, i) => {
            const clickable = Boolean(row.deepDive)
            const copy = (
              <>
                <MediaPlane src={row.image} alt={row.imageAlt} />
                <div className="vertical-panel-copy">
                  <span className="row-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{row.name}</h3>
                  <p className="panel-why">{row.whyNow}</p>
                  <p className="panel-opps">{row.opportunities}</p>
                  {clickable && (
                    <span className="panel-cta">
                      Open deep dive <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </>
            )

            if (clickable) {
              return (
                <button
                  key={row.id}
                  type="button"
                  className="vertical-panel is-clickable"
                  style={{ ['--i' as string]: i }}
                  onClick={() => onOpenVertical(row.id)}
                  aria-haspopup="dialog"
                >
                  {copy}
                </button>
              )
            }

            return (
              <article
                key={row.id}
                className="vertical-panel"
                style={{ ['--i' as string]: i }}
              >
                {copy}
              </article>
            )
          })}
        </div>
        <div className="pain-row overlay-pain">
          <p className="aside-label">Common pain points</p>
          <ul className="pain-list">
            {slide.painPoints?.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
        </div>

        {openVertical && (
          <FinancialDeepDive
            vertical={openVertical}
            open={Boolean(openVertical)}
            onClose={onCloseVertical}
          />
        )}
      </div>
    )
  }

  if (slide.kind === 'gtm') {
    return (
      <div className={`slide-inner gtm visual-slide ${enter}`}>
        {slide.image && (
          <MediaPlane src={slide.image} alt={slide.imageAlt ?? ''} className="gtm-media" />
        )}
        <div className="gtm-content">
          <header className="slide-head">
            {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
            <h2 className="slide-title">{slide.title}</h2>
            {slide.lead && <p className="slide-lead">{slide.lead}</p>}
          </header>
          <div className="gtm-grid">
            <section className="gtm-panel">
              <p className="aside-label">Focus on</p>
              <ul className="point-list numbered">
                {slide.focusItems?.map((item, i) => (
                  <li key={item} style={{ ['--i' as string]: i }}>
                    <span className="list-num">{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="gtm-panel pipeline-panel">
              <p className="aside-label">Pipeline generation</p>
              <ul className="pipeline-list">
                {slide.pipeline?.map((slice, i) => (
                  <li key={slice.label} style={{ ['--i' as string]: i }}>
                    <span className="pipeline-share">{slice.share}</span>
                    <div className="pipeline-meta">
                      <span className="pipeline-label">{slice.label}</span>
                      <span
                        className="pipeline-bar"
                        style={{ ['--share' as string]: slice.share }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="gtm-panel">
              <p className="aside-label">Key multipliers</p>
              <ul className="point-list numbered">
                {slide.multipliers?.map((item, i) => (
                  <li key={item} style={{ ['--i' as string]: i }}>
                    <span className="list-num">{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
  }

  if (slide.kind === 'expand') {
    return (
      <div className={`slide-inner expand visual-slide ${enter}`}>
        <header className="slide-head overlay-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <ol className="phase-track phase-panels">
          {slide.phases?.map((phase, i) => (
            <li key={phase.phase} style={{ ['--i' as string]: i }}>
              <MediaPlane src={phase.image} alt={phase.imageAlt} />
              <div className="phase-panel-copy">
                <span className="phase-watermark" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="phase-step">{phase.phase}</span>
                <strong className="phase-product">{phase.product}</strong>
                <p className="phase-outcome">{phase.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="expand-goal">
          <span className="expand-goal-label">Goal</span>
          Expand from one successful use case into enterprise-wide adoption.
        </p>
      </div>
    )
  }

  if (slide.kind === 'account') {
    return (
      <div className={`slide-inner account visual-slide ${enter}`}>
        {slide.image && (
          <MediaPlane src={slide.image} alt={slide.imageAlt ?? ''} className="account-media" />
        )}
        <div className="account-content">
          <header className="slide-head account-head">
            {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
            <h2 className="slide-title account-title">{slide.title}</h2>
            {slide.lead && <p className="slide-lead">{slide.lead}</p>}
          </header>
          <div className="account-grid">
            <section style={{ ['--i' as string]: 0 }}>
              <p className="aside-label">Strategic fit</p>
              <ul className="point-list">
                {slide.fitItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section style={{ ['--i' as string]: 1 }}>
              <p className="aside-label">Initial opportunities</p>
              <ul className="point-list">
                {slide.opportunities?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section style={{ ['--i' as string]: 2 }}>
              <p className="aside-label">Target buyers</p>
              <ul className="point-list">
                {slide.buyers?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section style={{ ['--i' as string]: 3 }}>
              <p className="aside-label">Expected value</p>
              <ul className="point-list">
                {slide.valueItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`slide-inner why visual-slide ${enter}`}>
      {slide.image && (
        <MediaPlane src={slide.image} alt={slide.imageAlt ?? ''} className="why-media" />
      )}
      <div className="why-content">
        <header className="slide-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <div className="why-grid">
          <section style={{ ['--i' as string]: 0 }}>
            <p className="aside-label">Relevant experience</p>
            <ul className="point-list">
              {slide.experience?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section style={{ ['--i' as string]: 1 }}>
            <p className="aside-label">What I bring</p>
            <ul className="point-list">
              {slide.bring?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        {slide.vision && (
          <blockquote className="vision-quote">
            <span className="vision-mark" aria-hidden="true">
              “
            </span>
            {slide.vision}
          </blockquote>
        )}
        <p className="close-meta">
          {presenter.name} · {presenter.email}
        </p>
      </div>
    </div>
  )
}

export function SlideDeck() {
  const [index, setIndex] = useState(0)
  const [openVerticalId, setOpenVerticalId] = useState<string | null>(null)
  const shellRef = useRef<HTMLDivElement>(null)

  const go = (next: number) => {
    setOpenVerticalId(null)
    setIndex(Math.max(0, Math.min(slides.length - 1, next)))
  }

  useEffect(() => {
    shellRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (openVerticalId) {
        if (event.key === 'Escape') {
          event.preventDefault()
          setOpenVerticalId(null)
        }
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        go(index + 1)
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        go(index - 1)
      } else if (event.key === 'Home') {
        event.preventDefault()
        go(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        go(slides.length - 1)
      } else if (/^[1-7]$/.test(event.key)) {
        event.preventDefault()
        go(Number(event.key) - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, openVerticalId])

  const onShellKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (openVerticalId) return
    if (event.key === 'ArrowRight') go(index + 1)
    if (event.key === 'ArrowLeft') go(index - 1)
  }

  const progress = ((index + 1) / slides.length) * 100
  const slide = slides[index]
  const visualKinds = new Set(['cover', 'focus', 'verticals', 'gtm', 'expand', 'account', 'why'])

  return (
    <div
      className="deck"
      ref={shellRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Italy GTM Strategy presentation"
      onKeyDown={onShellKey}
      data-slide={slide.kind}
      data-visual={visualKinds.has(slide.kind) ? 'true' : 'false'}
      data-deep-dive={openVerticalId ? 'true' : 'false'}
    >
      <StageBackdrop />

      <header className="deck-top">
        <div className="deck-identity">
          <span className="deck-mark" aria-hidden="true" />
          <span className="deck-name">{presenter.name}</span>
          <span className="deck-sep" aria-hidden="true">
            /
          </span>
          <span className="deck-company">{presenter.company}</span>
        </div>

        <nav className="slide-jump" aria-label="Jump to slide">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`slide-jump-item ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-current={i === index ? 'true' : undefined}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </nav>

        <p className="deck-counter">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="deck-counter-sep">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </p>

        <div className="deck-progress" aria-hidden="true">
          <div className="deck-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <main className="deck-stage" key={slide.id}>
        <SlideContent
          slide={slide}
          active
          openVerticalId={openVerticalId}
          onOpenVertical={setOpenVerticalId}
          onCloseVertical={() => setOpenVerticalId(null)}
        />
      </main>

      <footer className="deck-nav">
        <button
          type="button"
          className="nav-btn"
          onClick={() => go(index - 1)}
          disabled={index === 0 || Boolean(openVerticalId)}
          aria-label="Previous slide"
        >
          Previous
        </button>
        <div className="dots" role="tablist" aria-label="Slides">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="nav-btn primary"
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1 || Boolean(openVerticalId)}
          aria-label="Next slide"
        >
          Next
        </button>
      </footer>
    </div>
  )
}
