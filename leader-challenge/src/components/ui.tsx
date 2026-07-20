import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0.04 },
  },
}

export function MotionPage({
  children,
  id,
}: {
  children: ReactNode
  id: string
}) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export function ScreenShell({
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
    <div className="flex h-full flex-col px-8 py-6 lg:px-12 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="mb-5"
      >
        <div className="flex flex-wrap items-center gap-2">
          {eyebrow ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-accent uppercase">
              {eyebrow}
            </span>
          ) : null}
        </div>
        <h1 className="font-display mt-3 text-2xl leading-tight font-semibold tracking-tight text-white lg:text-3xl">
          {title}
        </h1>
        {headline ? (
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/65 lg:text-base">
            {headline}
          </p>
        ) : null}
      </motion.div>

      <div className="scrollbar-thin min-h-0 flex-1 overflow-auto pr-1">{children}</div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="glass mt-4 rounded-2xl px-4 py-3"
      >
        <p className="text-sm text-white/70">
          <span className="font-semibold text-accent">Insight</span>
          <span className="mx-2 text-white/20">·</span>
          {takeaway}
        </p>
      </motion.div>
    </div>
  )
}

/** @deprecated alias kept for SoftCard call sites during migration */
export function SoftCard({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <GlassCard className={className} onClick={onClick}>
      {children}
    </GlassCard>
  )
}

export function GlassCard({
  children,
  className = '',
  onClick,
  active = false,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  active?: boolean
}) {
  const interactive = Boolean(onClick)
  const classes = `glass rounded-2xl text-left transition ${
    active ? 'ring-1 ring-accent/50 bg-accent-dim/40' : ''
  } ${interactive ? 'cursor-pointer hover:border-white/20' : ''} ${className}`

  if (interactive) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className={classes}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}

export function KpiWidget({
  label,
  value,
  note,
  status = 'neutral',
}: {
  label: string
  value: string
  note?: string
  status?: 'good' | 'watch' | 'risk' | 'neutral'
}) {
  const tone =
    status === 'good'
      ? 'text-success'
      : status === 'watch'
        ? 'text-warning'
        : status === 'risk'
          ? 'text-danger'
          : 'text-white'

  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-medium tracking-wide text-white/45 uppercase">
          {label}
        </p>
        <StatusDot status={status} />
      </div>
      <p className={`font-display mt-3 text-2xl font-semibold tracking-tight ${tone}`}>
        {value}
      </p>
      {note ? <p className="mt-1 text-xs text-white/40">{note}</p> : null}
    </GlassCard>
  )
}

export function Timeline({
  items,
}: {
  items: { title: string; detail?: string; meta?: string }[]
}) {
  return (
    <Stagger className="relative space-y-3 pl-2">
      <div className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent" />
      {items.map((item, index) => (
        <StaggerItem key={`${item.title}-${index}`}>
          <div className="relative flex gap-4">
            <div className="relative z-10 mt-1.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-elevated text-[11px] font-semibold text-accent">
              {index + 1}
            </div>
            <GlassCard className="min-w-0 flex-1 px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-white">{item.title}</p>
                {item.meta ? (
                  <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/50">
                    {item.meta}
                  </span>
                ) : null}
              </div>
              {item.detail ? (
                <p className="mt-1 text-sm text-white/55">{item.detail}</p>
              ) : null}
            </GlassCard>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

export function Expandable({
  title,
  subtitle,
  children,
  defaultOpen = false,
  badge,
  leading,
}: {
  title: string
  subtitle?: string
  children: ReactNode
  defaultOpen?: boolean
  badge?: string
  leading?: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <GlassCard className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start gap-3 px-4 py-3 text-left"
      >
        {leading ? <span className="mt-0.5 shrink-0">{leading}</span> : null}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-medium text-white">{title}</p>
            {badge ? (
              <span className="rounded-full bg-accent-dim px-2 py-0.5 text-[10px] font-semibold text-accent">
                {badge}
              </span>
            ) : null}
          </div>
          {subtitle ? <p className="mt-1 text-sm text-white/50">{subtitle}</p> : null}
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 text-white/40"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/8 px-4 py-3 text-sm text-white/65">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </GlassCard>
  )
}

export function PlaceholderBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-warning uppercase"
      title="This screen still contains unresolved placeholders"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
      Placeholders
    </span>
  )
}

export function StatusDot({
  status,
}: {
  status: 'good' | 'watch' | 'risk' | 'neutral'
}) {
  const color =
    status === 'good'
      ? 'bg-success shadow-[0_0_8px_rgba(62,207,142,0.55)]'
      : status === 'watch'
        ? 'bg-warning shadow-[0_0_8px_rgba(245,193,75,0.45)]'
        : status === 'risk'
          ? 'bg-danger shadow-[0_0_8px_rgba(240,113,120,0.45)]'
          : 'bg-white/30'
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
}

/** Backwards-compatible alias used by older imports */
export const SlideShell = ScreenShell
