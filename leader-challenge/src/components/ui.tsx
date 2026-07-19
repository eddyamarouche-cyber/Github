import type { ReactNode } from 'react'

export function SlideShell({
  eyebrow,
  title,
  headline,
  children,
  takeaway,
}: {
  eyebrow?: string
  title: string
  headline?: string
  children: ReactNode
  takeaway: string
}) {
  return (
    <div className="flex h-full flex-col px-10 py-8 lg:px-14 lg:py-10">
      <div className="mb-5 flex items-start justify-between gap-6">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-text lg:text-4xl">
            {title}
          </h1>
          {headline ? (
            <p className="mt-3 max-w-4xl text-lg leading-snug text-text-muted lg:text-xl">
              {headline}
            </p>
          ) : null}
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm text-text-muted">
          <span className="font-semibold text-accent">Takeaway — </span>
          {takeaway}
        </p>
      </div>
    </div>
  )
}

export function PlaceholderBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded border border-warning/40 bg-warning/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-warning uppercase"
      title="This slide still contains unresolved placeholders"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
      Placeholders
    </span>
  )
}

export function SoftCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-border bg-bg-panel/80 ${className}`}>
      {children}
    </div>
  )
}

export function StatusDot({
  status,
}: {
  status: 'good' | 'watch' | 'risk' | 'neutral'
}) {
  const color =
    status === 'good'
      ? 'bg-success'
      : status === 'watch'
        ? 'bg-warning'
        : status === 'risk'
          ? 'bg-danger'
          : 'bg-text-dim'
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
}
