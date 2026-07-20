const flagClass =
  'inline-block h-8 w-11 shrink-0 overflow-hidden rounded-md border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.35)]'

export type MarketFlagCode = 'IT' | 'ES' | 'PT' | 'FR'

export function MarketFlag({
  code,
  className = '',
  title,
}: {
  code: MarketFlagCode
  className?: string
  title?: string
}) {
  switch (code) {
    case 'IT':
      return (
        <svg
          viewBox="0 0 36 24"
          className={`${flagClass} ${className}`}
          role="img"
          aria-label={title ?? 'Italy'}
        >
          <title>{title ?? 'Italy'}</title>
          <rect width="12" height="24" fill="#009246" />
          <rect x="12" width="12" height="24" fill="#ffffff" />
          <rect x="24" width="12" height="24" fill="#ce2b37" />
        </svg>
      )
    case 'ES':
      return (
        <svg
          viewBox="0 0 36 24"
          className={`${flagClass} ${className}`}
          role="img"
          aria-label={title ?? 'Spain'}
        >
          <title>{title ?? 'Spain'}</title>
          <rect width="36" height="24" fill="#c60b1e" />
          <rect y="6" width="36" height="12" fill="#ffc400" />
        </svg>
      )
    case 'PT':
      return (
        <svg
          viewBox="0 0 36 24"
          className={`${flagClass} ${className}`}
          role="img"
          aria-label={title ?? 'Portugal'}
        >
          <title>{title ?? 'Portugal'}</title>
          <rect width="36" height="24" fill="#006600" />
          <rect width="14" height="24" fill="#ff0000" />
          <circle cx="14" cy="12" r="3.5" fill="#ffff00" />
          <circle cx="14" cy="12" r="2.2" fill="#003399" />
        </svg>
      )
    case 'FR':
      return (
        <svg
          viewBox="0 0 36 24"
          className={`${flagClass} ${className}`}
          role="img"
          aria-label={title ?? 'France'}
        >
          <title>{title ?? 'France'}</title>
          <rect width="12" height="24" fill="#002395" />
          <rect x="12" width="12" height="24" fill="#ffffff" />
          <rect x="24" width="12" height="24" fill="#ed2939" />
        </svg>
      )
  }
}

export const priorityMarkets: { code: MarketFlagCode; label: string }[] = [
  { code: 'IT', label: 'Italy' },
  { code: 'ES', label: 'Spain' },
  { code: 'PT', label: 'Portugal' },
]

export function flagCodeForCountry(country: string): MarketFlagCode | null {
  const normalized = country.toLowerCase()
  if (normalized.includes('ital')) return 'IT'
  if (normalized.includes('spain') || normalized.includes('españ')) return 'ES'
  if (normalized.includes('portugal')) return 'PT'
  if (normalized.includes('france')) return 'FR'
  return null
}

export function MarketFlagRow({
  markets = priorityMarkets,
  size = 'md',
}: {
  markets?: { code: MarketFlagCode; label: string }[]
  size?: 'sm' | 'md'
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {markets.map((market) => (
        <div
          key={market.code}
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 ${
            size === 'sm' ? 'px-2 py-1' : 'px-3 py-1.5'
          }`}
        >
          <MarketFlag
            code={market.code}
            title={market.label}
            className={size === 'sm' ? 'h-3.5 w-5' : 'h-5 w-7'}
          />
          <span className={`font-medium text-white ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {market.label}
          </span>
        </div>
      ))}
    </div>
  )
}
