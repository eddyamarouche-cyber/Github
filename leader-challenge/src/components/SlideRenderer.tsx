import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, HeartHandshake, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  registerSlideInnerNav,
  requestDeckNext,
  requestDeckPrev,
} from '../hooks/slideInnerNav'
import { profile } from '../data/profile'
import { sections } from '../data/slides'
import type {
  AgendaContent,
  AsksContent,
  ChallengeBriefContent,
  ClosingContent,
  CoverContent,
  CultureContent,
  DashboardContent,
  DefinitionsContent,
  DiagnosisContent,
  DriversContent,
  FeedbackContent,
  FrameworkContent,
  FunnelContent,
  MeddpiccContent,
  MetricsContent,
  ObjectionsContent,
  OneOnOneContent,
  OutreachContent,
  PhilosophyContent,
  PitchContent,
  PillarsContent,
  PlanContent,
  ProcessContent,
  ProfileContent,
  QuestionsContent,
  RevealContent,
  RisksContent,
  RoleplayPrepContent,
  RhythmContent,
  ScorecardContent,
  Slide,
  StagesContent,
  SubdivisionsContent,
  ThesisContent,
  TopicsSummaryContent,
  TwoColumnContent,
  VisualHeroContent,
  WeekdayContent,
  BrandPortfolioContent,
  Candidate,
  CoachingCase,
  MarketCard,
} from '../data/types'
import { MarketFlag, MarketFlagRow, flagCodeForCountry } from './Flags'
import {
  Expandable,
  GlassCard,
  KpiWidget,
  MotionPage,
  ScreenShell,
  Stagger,
  StaggerItem,
  StatusDot,
  Timeline,
} from './ui'

type CandidatesContent = { candidates: Candidate[] }
type LinkedInTargetsContent = {
  profiles: {
    id: string
    fullName: string
    currentRole: string
    currentCompany: string
    country: string
    linkedinUrl: string
    signal: string
    photo?: string
    filters?: string[]
  }[]
  regionLabel?: string
  regionFlag?: string
}
type CaseStudyContent = { caseStudy: CoachingCase }
type MarketsSlideContent = { markets: MarketCard[] }

function sectionLabel(sectionId: string): string {
  return sections.find((section) => section.id === sectionId)?.label ?? sectionId
}

export function SlideRenderer({
  slide,
}: {
  slide: Slide
}) {
  return (
    <div className="app-surface relative h-full w-full overflow-hidden text-text">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:48px_48px] opacity-40" />
      <div className="relative h-full">
        <MotionPage id={slide.id}>{renderSlide(slide)}</MotionPage>
      </div>
    </div>
  )
}

function renderSlide(slide: Slide) {
  const eyebrow = sectionLabel(slide.section)

  switch (slide.type) {
    case 'cover':
      return <CoverScreen content={slide.content as CoverContent} />
    case 'visual-hero':
      return <VisualHeroScreen content={slide.content as VisualHeroContent} />
    case 'reveal':
      return <RevealScreen content={slide.content as RevealContent} />
    case 'thesis':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ThesisScreen content={slide.content as ThesisContent} />
        </ScreenShell>
      )
    case 'agenda':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <AgendaScreen content={slide.content as AgendaContent} />
        </ScreenShell>
      )
    case 'topics-summary':
      return (
        <TopicsSummaryScreen
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
          content={slide.content as TopicsSummaryContent}
        />
      )
    case 'challenge-brief':
      return <ChallengeBriefScreen content={slide.content as ChallengeBriefContent} />
    case 'pillars':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PillarsScreen content={slide.content as PillarsContent} />
        </ScreenShell>
      )
    case 'profile': {
      const profileContent = slide.content as ProfileContent
      const immersive = profileContent.criteria.some((item) => Boolean(item.image))
      if (immersive) {
        return (
          <ProfileScreen
            title={slide.title}
            headline={slide.headline}
            takeaway={slide.takeaway}
            content={profileContent}
          />
        )
      }
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ProfileScreen content={profileContent} />
        </ScreenShell>
      )
    }
    case 'scorecard':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <ScorecardScreen content={slide.content as ScorecardContent} />
        </ScreenShell>
      )
    case 'candidates':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CandidatesScreen content={slide.content as CandidatesContent} />
        </ScreenShell>
      )
    case 'linkedin-targets':
      return (
        <LinkedInTargetsScreen
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
          content={slide.content as LinkedInTargetsContent}
        />
      )
    case 'process':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ProcessScreen content={slide.content as ProcessContent} />
        </ScreenShell>
      )
    case 'subdivisions':
      return (
        <SubdivisionsScreen
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
          content={slide.content as SubdivisionsContent}
        />
      )
    case 'funnel':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <FunnelScreen content={slide.content as FunnelContent} />
        </ScreenShell>
      )
    case 'outreach':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <OutreachScreen content={slide.content as OutreachContent} />
        </ScreenShell>
      )
    case 'roleplay-prep':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RoleplayScreen content={slide.content as RoleplayPrepContent} />
        </ScreenShell>
      )
    case 'stages':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <StagesScreen content={slide.content as StagesContent} />
        </ScreenShell>
      )
    case 'pitch':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <PitchScreen content={slide.content as PitchContent} />
        </ScreenShell>
      )
    case 'objections':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <ObjectionsScreen content={slide.content as ObjectionsContent} />
        </ScreenShell>
      )
    case 'drivers': {
      const driversContent = slide.content as DriversContent
      if (driversContent.layout === 'columns') {
        return (
          <DriversColumnsScreen
            title={slide.title}
            headline={slide.headline}
            takeaway={slide.takeaway}
            content={driversContent}
          />
        )
      }
      const immersive = driversContent.drivers.some((driver) => Boolean(driver.image))
      if (immersive) {
        return (
          <LeadershipRolesScreen
            title={slide.title}
            headline={slide.headline}
            takeaway={slide.takeaway}
            content={driversContent}
          />
        )
      }
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <DriversScreen content={driversContent} />
        </ScreenShell>
      )
    }
    case 'framework':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <FrameworkScreen content={slide.content as FrameworkContent} />
        </ScreenShell>
      )
    case 'diagnosis':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DiagnosisScreen content={slide.content as DiagnosisContent} />
        </ScreenShell>
      )
    case 'case-study':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CaseStudyScreen content={slide.content as CaseStudyContent} />
        </ScreenShell>
      )
    case 'metrics':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MetricsScreen content={slide.content as MetricsContent} />
        </ScreenShell>
      )
    case 'rhythm':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RhythmScreen content={slide.content as RhythmContent} />
        </ScreenShell>
      )
    case 'markets':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MarketsScreen content={slide.content as MarketsSlideContent} />
        </ScreenShell>
      )
    case 'brand-portfolio':
      return (
        <BrandPortfolioScreen
          content={slide.content as BrandPortfolioContent}
          takeaway={slide.takeaway}
        />
      )
    case 'culture':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CultureScreen content={slide.content as CultureContent} />
        </ScreenShell>
      )
    case 'weekday':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <WeekdayScreen content={slide.content as WeekdayContent} />
        </ScreenShell>
      )
    case 'dashboard':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DashboardScreen content={slide.content as DashboardContent} />
        </ScreenShell>
      )
    case 'meddpicc':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MeddpiccScreen content={slide.content as MeddpiccContent} />
        </ScreenShell>
      )
    case 'questions':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <QuestionsScreen content={slide.content as QuestionsContent} />
        </ScreenShell>
      )
    case 'definitions':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DefinitionsScreen content={slide.content as DefinitionsContent} />
        </ScreenShell>
      )
    case 'philosophy':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PhilosophyScreen content={slide.content as PhilosophyContent} />
        </ScreenShell>
      )
    case 'one-on-one':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <OneOnOneScreen content={slide.content as OneOnOneContent} />
        </ScreenShell>
      )
    case 'asks':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <AsksScreen content={slide.content as AsksContent} />
        </ScreenShell>
      )
    case 'two-column':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <TwoColumnScreen content={slide.content as TwoColumnContent} />
        </ScreenShell>
      )
    case 'plan':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PlanScreen content={slide.content as PlanContent} />
        </ScreenShell>
      )
    case 'risks':
      return (
        <ScreenShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RisksScreen content={slide.content as RisksContent} />
        </ScreenShell>
      )
    case 'closing':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ClosingScreen content={slide.content as ClosingContent} />
        </ScreenShell>
      )
    case 'feedback':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <FeedbackScreen content={slide.content as FeedbackContent} />
        </ScreenShell>
      )
    default:
      return null
  }
}

function CoverScreen({ content }: { content: CoverContent }) {
  return (
    <div className="flex h-full flex-col justify-between px-12 py-10 lg:px-16 lg:py-14">
      <Stagger>
        <StaggerItem>
          <img
            src="/images/cursor-logo.svg"
            alt="Cursor"
            className="h-8 w-auto lg:h-10"
          />
        </StaggerItem>
      </Stagger>

      <div className="max-w-4xl">
        <Stagger>
          <StaggerItem>
            <div className="mb-6 h-px w-14 bg-accent" />
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white lg:text-5xl">
              {content.title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-5">
              <MarketFlagRow />
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 text-xl font-medium text-white lg:text-2xl">
              {profile.candidateName}
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-2xl text-base text-white/65 lg:text-lg">
              {content.subtitle}
            </p>
          </StaggerItem>
          <StaggerItem>
            <GlassCard className="mt-8 max-w-3xl p-5">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                With
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {profile.interlocutors.map((person) => (
                  <span
                    key={person.name}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-lg font-bold tracking-tight text-white lg:text-xl"
                  >
                    {person.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-5">
        <p className="text-sm text-white/55">{profile.role}</p>
        <p className="text-sm text-white/55">{profile.interviewDate}</p>
      </div>
    </div>
  )
}

function ThesisScreen({ content }: { content: ThesisContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid h-full gap-3 md:grid-cols-3">
      {content.convictions.map((item, index) => (
        <StaggerItem key={item} className="h-full">
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex h-full flex-col p-5"
          >
            <span className="font-display text-3xl font-bold text-accent/80">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-8 text-base leading-snug font-medium text-white">{item}</p>
            <p className="mt-auto pt-4 text-[11px] text-white/35">Select to focus</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function AgendaScreen({ content }: { content: AgendaContent }) {
  return (
    <Timeline
      items={content.items.map((item) => ({
        title: item.label,
        meta: `${item.minutes} min`,
        detail: 'Working session block',
      }))}
    />
  )
}

function ChallengeBriefScreen({ content }: { content: ChallengeBriefContent }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-6 py-5 lg:px-10 lg:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(255,107,44,0.14),transparent_42%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative z-10 mb-4 flex shrink-0 items-center gap-3">
        <img
          src="/images/cursor-logo.svg"
          alt=""
          className="h-8 w-8 brightness-0 invert lg:h-9 lg:w-9"
        />
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          {content.brandTitle}
        </h1>
      </div>

      <div className="relative z-10 grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.85fr_1.35fr] lg:gap-8">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between rounded-[24px] border border-white/18 bg-white/[0.03] p-5 lg:p-6"
        >
          <ul className="space-y-4">
            {content.planPoints.map((point) => (
              <li
                key={point}
                className="font-display text-base leading-snug text-white/85 italic lg:text-lg"
              >
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="font-display text-sm leading-snug text-white/70 italic lg:text-base">
              Cursor knowledge needed to prepare for role play can be found here
            </p>
            <a
              href={content.prepUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-display text-base font-semibold text-accent underline decoration-accent/60 underline-offset-4 transition hover:text-accent-soft lg:text-lg"
            >
              {content.prepLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.aside>

        <div className="scrollbar-thin min-h-0 space-y-4 overflow-auto pr-1 lg:space-y-5">
          {content.topics.map((topic, index) => (
            <motion.section
              key={topic.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08 + index * 0.06,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="font-display text-lg font-semibold tracking-tight text-accent lg:text-xl">
                {topic.label}
              </h2>
              <ul className="mt-1.5 space-y-1">
                {topic.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-snug text-white/75 italic lg:text-[15px]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="font-display pt-1 text-lg font-semibold tracking-[0.08em] text-accent uppercase lg:text-xl"
          >
            {content.closeLabel}
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 mt-3 flex shrink-0 justify-end">
        <img
          src="/images/cursor-logo.svg"
          alt=""
          className="h-5 w-5 opacity-50 brightness-0 invert"
        />
      </div>
    </div>
  )
}

const topicIcons = [Users, HeartHandshake, TrendingUp] as const

function TopicsSummaryScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title: string
  headline?: string
  takeaway: string
  content: TopicsSummaryContent
}) {
  const [active, setActive] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % content.topics.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [autoPlay, content.topics.length])

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden px-6 py-5 lg:px-10 lg:py-7"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,107,44,0.18),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex shrink-0 flex-wrap items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
              Working session
            </span>
          </div>
          <h1 className="font-display mt-2 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
            {title}
          </h1>
          {headline ? (
            <p className="mt-1 max-w-2xl text-sm text-white/55 lg:text-base">{headline}</p>
          ) : null}
        </div>
        <div className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] text-white/55 backdrop-blur-md">
          {autoPlay ? 'Auto-rotating' : 'Paused'} · {active + 1}/{content.topics.length}
        </div>
      </div>

      <div className="relative z-10 mt-4 grid min-h-0 flex-1 gap-3 md:grid-cols-3 md:gap-4">
        {content.topics.map((topic, index) => {
          const selected = active === index
          const Icon = topicIcons[index % topicIcons.length]
          return (
            <motion.button
              key={topic.title}
              type="button"
              onClick={() => {
                setActive(index)
                setAutoPlay(false)
              }}
              layout
              className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border text-left transition ${
                selected
                  ? 'border-accent/50 bg-gradient-to-b from-accent/25 via-white/8 to-white/[0.03] shadow-[0_20px_60px_rgba(255,107,44,0.22)]'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
              }`}
              animate={{
                y: selected ? 0 : 6,
                scale: selected ? 1 : 0.985,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              {selected ? (
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4.2, ease: 'linear' }}
                  key={`progress-${active}-${autoPlay}`}
                />
              ) : null}

              <div className="flex h-full min-h-0 flex-col p-4 lg:p-5">
                <div className="flex shrink-0 items-start justify-between gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border lg:h-11 lg:w-11 ${
                      selected
                        ? 'border-accent/40 bg-accent text-bg'
                        : 'border-white/10 bg-white/5 text-white/70'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl leading-none font-bold text-white/15 lg:text-4xl">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                      {topic.minutes} min
                    </p>
                  </div>
                </div>

                <p className="mt-4 shrink-0 text-[10px] font-semibold tracking-[0.16em] text-accent uppercase lg:mt-5 lg:text-[11px]">
                  {topic.subtitle}
                </p>
                <h2 className="font-display mt-1 shrink-0 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                  {topic.title}
                </h2>

                <AnimatePresence mode="wait">
                  {selected ? (
                    <motion.div
                      key={`${topic.title}-detail`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="mt-3 flex min-h-0 flex-1 flex-col"
                    >
                      {topic.description ? (
                        <p className="mb-3 shrink-0 text-sm leading-relaxed text-white/55 lg:text-[15px]">
                          {topic.description}
                        </p>
                      ) : null}
                      <div
                        className={`grid h-full min-h-0 flex-1 gap-2 ${
                          topic.focuses.length === 4
                            ? 'grid-cols-2 grid-rows-2'
                            : topic.focuses.length === 3
                              ? 'grid-cols-1 grid-rows-3'
                              : 'grid-cols-1'
                        }`}
                      >
                        {topic.focuses.map((focus, focusIndex) => (
                          <motion.div
                            key={focus}
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              delay: 0.06 + focusIndex * 0.05,
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/12 bg-gradient-to-b from-white/[0.1] to-black/35 px-2.5 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                          >
                            <span className="absolute top-1.5 left-2 font-display text-[9px] font-bold tracking-[0.14em] text-accent/90">
                              {String(focusIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="font-display max-w-full px-1 text-base leading-tight font-bold tracking-tight text-balance text-white sm:text-lg lg:text-xl xl:text-[1.35rem]">
                              {focus}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${topic.title}-teaser`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex min-h-0 flex-1 flex-col"
                    >
                      <div
                        className={`grid h-full min-h-0 flex-1 gap-2 ${
                          topic.focuses.length === 4
                            ? 'grid-cols-2 grid-rows-2'
                            : topic.focuses.length === 3
                              ? 'grid-cols-1 grid-rows-3'
                              : 'grid-cols-1'
                        }`}
                      >
                        {topic.focuses.map((focus, focusIndex) => (
                          <div
                            key={focus}
                            className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center"
                          >
                            <span className="absolute top-1.5 left-2 font-display text-[9px] font-bold tracking-[0.14em] text-white/30">
                              {String(focusIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="font-display max-w-full px-1 text-sm leading-tight font-semibold tracking-tight text-balance text-white/50 sm:text-base lg:text-lg">
                              {focus}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          )
        })}
      </div>

      <p className="relative z-10 mt-3 max-w-3xl shrink-0 text-xs text-white/40 lg:text-sm">
        {takeaway}
      </p>
    </div>
  )
}

function PillarsScreen({ content }: { content: PillarsContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid h-full gap-3 md:grid-cols-2">
      {content.pillars.map((pillar, index) => (
        <StaggerItem key={pillar.title} className="h-full">
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="h-full p-5"
          >
            <p className="text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
              Pillar {index + 1}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{pillar.description}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function ProfileScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title?: string
  headline?: string
  takeaway?: string
  content: ProfileContent
}) {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const current = content.criteria[active]
  const immersive = content.criteria.some((item) => Boolean(item.image))
  const lastIndex = content.criteria.length - 1

  useEffect(() => {
    if (!autoPlay || expanded) return
    const timer = window.setInterval(() => {
      setActive((value) => {
        // Stop on the last topic — next navigation advances the deck.
        if (value >= lastIndex) return value
        return value + 1
      })
    }, 4200)
    return () => window.clearInterval(timer)
  }, [autoPlay, expanded, lastIndex])

  useEffect(() => {
    // Only intercept deck navigation while a topic is enlarged.
    // On the grid overview, Next still advances to the next slide.
    if (!immersive || !expanded) return
    return registerSlideInnerNav({
      next: () => {
        if (active >= lastIndex) {
          setExpanded(false)
          return false
        }
        setAutoPlay(false)
        setActive((value) => value + 1)
        return true
      },
      prev: () => {
        if (active <= 0) {
          setExpanded(false)
          return false
        }
        setAutoPlay(false)
        setActive((value) => value - 1)
        return true
      },
    })
  }, [immersive, expanded, active, lastIndex])

  useEffect(() => {
    if (!expanded) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopImmediatePropagation()
        setExpanded(false)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [expanded])

  if (!immersive) {
    return (
      <Stagger className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
        {content.criteria.map((criterion) => (
          <StaggerItem key={criterion.title}>
            <GlassCard className="min-h-[100px] p-4">
              <h3 className="font-display text-base font-semibold text-white">{criterion.title}</h3>
              <p className="mt-2 text-sm text-white/55">{criterion.detail}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    )
  }

  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden px-5 py-5 lg:px-7 lg:py-6"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => {
        if (!expanded) setAutoPlay(true)
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,44,0.12),transparent_50%)]" />

      <div className="relative z-10 mb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
              Hiring filter
            </span>
          </div>
          {title ? (
            <h1 className="font-display mt-2 text-2xl font-semibold text-white lg:text-3xl">
              {title}
            </h1>
          ) : null}
          {headline ? (
            <p className="mt-1 max-w-2xl text-sm text-white/60">{headline}</p>
          ) : null}
        </div>
      </div>

      <div
        className={`relative z-10 grid min-h-0 flex-1 gap-3 ${
          content.criteria.length === 5
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-5'
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
        }`}
      >
        {content.criteria.map((criterion, index) => {
          const selected = active === index
          const fiveUp = content.criteria.length === 5
          return (
            <button
              key={criterion.title}
              type="button"
              onClick={() => {
                setActive(index)
                setAutoPlay(false)
                setExpanded(true)
              }}
              className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[22px] border text-left transition ${
                fiveUp ? 'md:col-span-2 xl:col-span-1' : ''
              } ${fiveUp && index === 3 ? 'md:col-start-2 xl:col-start-auto' : ''} ${
                fiveUp && index === 4 && !expanded ? 'sm:col-span-2 sm:max-w-md sm:justify-self-center xl:col-span-1 xl:max-w-none xl:justify-self-stretch' : ''
              } ${
                selected
                  ? 'border-accent/60 shadow-[0_20px_50px_rgba(255,107,44,0.28)]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {criterion.image ? (
                <img
                  src={criterion.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                    selected ? 'opacity-100' : 'opacity-75'
                  }`}
                />
              ) : (
                <div className="absolute inset-0 bg-white/5" />
              )}
              <div
                className={`absolute inset-0 transition ${
                  selected
                    ? 'bg-gradient-to-t from-black/92 via-black/55 to-black/20'
                    : 'bg-gradient-to-t from-black/90 via-black/60 to-black/30'
                }`}
              />

              <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-4 lg:p-5">
                <div className="flex items-start justify-between gap-2">
                  <p
                    className={`font-display text-2xl font-bold lg:text-3xl ${
                      selected ? 'text-accent' : 'text-white/25'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-white/70 uppercase backdrop-blur-md opacity-0 transition group-hover:opacity-100">
                    Enlarge
                  </span>
                </div>

                <div className="flex min-h-[6.5rem] flex-col justify-end">
                  <h3 className="font-display text-lg leading-tight font-semibold text-white lg:text-xl">
                    {criterion.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55">
                    {criterion.detail}
                  </p>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {takeaway ? (
        <p className="relative z-10 mt-3 max-w-3xl text-xs text-white/45 lg:text-sm">{takeaway}</p>
      ) : null}

      <AnimatePresence>
        {expanded && current.image ? (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center p-4 lg:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close enlarged image"
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setExpanded(false)}
            />
            <motion.div
              key={current.title}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex h-full max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
            >
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40" />

              <div className="relative z-10 flex items-start justify-between gap-3 p-5 lg:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                    {String(active + 1).padStart(2, '0')} / {String(content.criteria.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (active <= 0) {
                        setExpanded(false)
                        requestDeckPrev()
                        return
                      }
                      setActive((value) => value - 1)
                    }}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md hover:bg-white/10"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (active >= lastIndex) {
                        setExpanded(false)
                        requestDeckNext()
                        return
                      }
                      setActive((value) => value + 1)
                    }}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md hover:bg-white/10"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="relative z-10 mt-auto max-w-3xl p-5 lg:p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                  A Player filter
                </p>
                <h2 className="font-display mt-2 text-3xl font-semibold text-white lg:text-5xl">
                  {current.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80 lg:text-lg">
                  {current.detail}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function ScorecardScreen({ content }: { content: ScorecardContent }) {
  const totalWeight = content.criteria.reduce((sum, item) => sum + item.weight, 0)
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiWidget label="Criteria" value={String(content.criteria.length)} />
        <KpiWidget label="Total weight" value={String(totalWeight)} note={content.totalLabel} />
        <KpiWidget label="Scored" value="—" note="Replace with candidate scores" status="watch" />
      </div>
      <Stagger className="scrollbar-thin min-h-0 flex-1 space-y-2 overflow-auto">
        {content.criteria.map((row) => (
          <StaggerItem key={row.criterion}>
            <Expandable
              title={row.criterion}
              badge={`Weight ${row.weight}`}
              subtitle={`Score ${row.score != null ? row.score : '—'} · Risk ${row.risk}`}
            >
              <p>
                <span className="text-white/40">Evidence · </span>
                {row.evidence}
              </p>
            </Expandable>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}

function CandidatesScreen({ content }: { content: CandidatesContent }) {
  return (
    <Stagger className="grid h-full gap-2.5 md:grid-cols-5">
      {content.candidates.map((candidate, index) => (
        <StaggerItem key={candidate.id} className="min-h-0">
          <Expandable
            title={`Target ${index + 1}`}
            subtitle={candidate.fullName}
            badge={
              candidate.overallFitScore != null
                ? `${candidate.overallFitScore}`
                : 'Fit —'
            }
          >
            <div className="space-y-2 text-xs leading-relaxed">
              <p>
                {candidate.currentRole} · {candidate.currentCompany} · {candidate.country}
              </p>
              <p>
                <span className="text-white/40">Why · </span>
                {candidate.whyThisPerson}
              </p>
              <p>
                <span className="text-white/40">Track record · </span>
                {candidate.relevantTrackRecord}
              </p>
              <p>
                <span className="text-white/40">Risk · </span>
                {candidate.potentialRisk}
              </p>
              <p>
                <span className="text-white/40">Status · </span>
                {candidate.relationshipStatus}
              </p>
            </div>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function LinkedInTargetsScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title?: string
  headline?: string
  takeaway?: string
  content: LinkedInTargetsContent
}) {
  const [active, setActive] = useState(0)
  const current = content.profiles[active]

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-5 py-5 lg:px-7 lg:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(10,102,194,0.18),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(255,107,44,0.12),transparent_40%)]" />

      <div className="relative z-10 mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
            {content.regionFlag ? (
              <img
                src={content.regionFlag}
                alt=""
                aria-hidden
                className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm ring-1 ring-white/20"
              />
            ) : (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0A66C2]" />
            )}
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
              {content.regionLabel ?? 'LinkedIn talent map'}
            </span>
          </div>
          {title ? (
            <h1 className="font-display mt-2 flex items-center gap-2.5 text-2xl font-semibold text-white lg:text-3xl">
              {content.regionFlag ? (
                <img
                  src={content.regionFlag}
                  alt=""
                  aria-hidden
                  className="h-5 w-7 rounded-[3px] object-cover shadow-md ring-1 ring-white/25 lg:h-6 lg:w-9"
                />
              ) : null}
              <span>{title}</span>
            </h1>
          ) : null}
          {headline ? (
            <p className="mt-1 max-w-2xl text-sm text-white/60">{headline}</p>
          ) : null}
        </div>
        <p className="text-[11px] text-white/45">
          {content.profiles.length} named profiles · click to focus · open LinkedIn
        </p>
      </div>

      <div className="relative z-10 grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative flex min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/12"
        >
          <div className="absolute inset-0">
            {current.photo ? (
              <img
                src={current.photo}
                alt={current.fullName}
                className="h-full w-full object-cover opacity-45 blur-2xl scale-110"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/80" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#0A66C2] via-accent/60 to-transparent opacity-80 blur-sm" />
                {current.photo ? (
                  <img
                    src={current.photo}
                    alt={current.fullName}
                    className="relative h-36 w-36 rounded-full object-cover ring-2 ring-white/25 lg:h-44 lg:w-44"
                  />
                ) : (
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white lg:h-44 lg:w-44">
                    {current.fullName
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="font-display text-4xl font-bold text-white/15 lg:text-5xl">
                  {String(active + 1).padStart(2, '0')}
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                  Target profile
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
                {current.fullName}
              </h2>
              <p className="mt-2 text-base font-medium text-accent lg:text-lg">
                {current.currentRole}
              </p>
              <p className="mt-1 text-sm text-white/55">
                {current.currentCompany} · {current.country}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 lg:text-base">
                {current.signal}
              </p>
              {current.filters?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {current.filters.map((filter) => (
                    <span
                      key={filter}
                      className="inline-flex items-center rounded-full border border-accent/35 bg-accent/15 px-3 py-1.5 font-display text-xs font-bold tracking-wide text-white shadow-[0_0_18px_rgba(255,107,44,0.18)] lg:text-sm"
                    >
                      {filter}
                    </span>
                  ))}
                </div>
              ) : null}
              <a
                href={current.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-[#0A66C2]/50 bg-[#0A66C2]/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0A66C2]/35"
              >
                <ExternalLink className="h-4 w-4" />
                Open LinkedIn profile
              </a>
            </div>
          </div>
        </motion.div>

        <div className="scrollbar-thin grid min-h-0 grid-cols-2 gap-2.5 overflow-auto sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {content.profiles.map((profile, index) => {
            const selected = active === index
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative flex flex-col overflow-hidden rounded-[22px] border text-left transition ${
                  selected
                    ? 'border-accent/50 shadow-[0_16px_40px_rgba(255,107,44,0.22)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={profile.fullName}
                      className={`h-full w-full object-cover transition duration-500 ${
                        selected ? 'opacity-100' : 'opacity-80 group-hover:opacity-95'
                      }`}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-white/5 text-xl font-bold text-white/40">
                      {profile.fullName
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="font-display text-sm font-semibold text-white">
                      {profile.fullName}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-white/60">
                      {profile.currentCompany}
                    </p>
                  </div>
                  {selected ? (
                    <span className="absolute top-2 right-2 rounded-full border border-accent/40 bg-accent/20 px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-accent uppercase backdrop-blur-md">
                      Active
                    </span>
                  ) : null}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {takeaway ? (
        <p className="relative z-10 mt-3 max-w-3xl text-xs text-white/45 lg:text-sm">{takeaway}</p>
      ) : null}
    </div>
  )
}

function ProcessScreen({ content }: { content: ProcessContent }) {
  return (
    <Timeline items={content.steps.map((step) => ({ title: step }))} />
  )
}

function SubdivisionsScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title: string
  headline?: string
  takeaway?: string
  content: SubdivisionsContent
}) {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const current = content.items[active]
  const lastIndex = content.items.length - 1

  useEffect(() => {
    if (!expanded) return
    return registerSlideInnerNav({
      next: () => {
        if (active >= lastIndex) {
          setExpanded(false)
          return false
        }
        setActive((value) => value + 1)
        return true
      },
      prev: () => {
        if (active <= 0) {
          setExpanded(false)
          return false
        }
        setActive((value) => value - 1)
        return true
      },
    })
  }, [expanded, active, lastIndex])

  useEffect(() => {
    if (!expanded) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopImmediatePropagation()
        setExpanded(false)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [expanded])

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-6 py-5 lg:px-10 lg:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,107,44,0.16),transparent_42%),radial-gradient(ellipse_at_90%_85%,rgba(255,255,255,0.04),transparent_40%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 right-8 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex shrink-0 flex-wrap items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
              {content.eyebrow ?? 'How?'}
            </span>
          </div>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white lg:text-4xl">
            {title}
          </h1>
          {headline && !content.statements?.length ? (
            <p className="mt-2 max-w-2xl text-sm text-white/55 lg:text-base">{headline}</p>
          ) : null}
        </div>
        <div className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[11px] text-white/55 backdrop-blur-md">
          Click a topic to open · {content.items.length} pages
        </div>
      </div>

      {content.statements?.length ? (
        <div className="relative z-10 my-auto grid shrink-0 grid-cols-1 items-center gap-4 py-4 text-center sm:grid-cols-2 sm:gap-8 lg:gap-12 lg:py-6">
          {content.statements.map((line) => (
            <p
              key={line}
              className="font-display text-2xl leading-tight font-bold tracking-tight text-balance text-white sm:text-3xl lg:text-5xl"
            >
              {line}
            </p>
          ))}
        </div>
      ) : null}

      <div className="relative z-10 mt-5 grid min-h-0 flex-1 content-center gap-2 sm:gap-2.5">
        {content.items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.08 + index * 0.07,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => {
              setActive(index)
              setExpanded(true)
            }}
            className="group flex w-full items-baseline gap-4 border-b border-white/10 pb-2.5 text-left transition last:border-b-0 hover:border-accent/40 lg:gap-6 lg:pb-3"
          >
            <span className="font-display w-10 shrink-0 text-2xl font-bold tracking-tight text-accent transition group-hover:text-accent-soft lg:w-14 lg:text-4xl">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white transition group-hover:text-white sm:text-3xl lg:text-5xl">
                  {item.title}
                </h2>
                {item.theme ? (
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/35 uppercase">
                    {item.theme}
                  </span>
                ) : null}
              </div>
            </div>
            <span className="shrink-0 text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase opacity-0 transition group-hover:opacity-100">
              Open
            </span>
          </motion.button>
        ))}
      </div>

      {takeaway ? (
        <p className="relative z-10 mt-4 max-w-3xl shrink-0 text-xs text-white/40 lg:text-sm">
          {takeaway}
        </p>
      ) : null}

      <AnimatePresence>
        {expanded && current?.image ? (
          <motion.div
            className="absolute inset-0 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.06, opacity: 0.75 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />

            <div className="relative z-10 flex h-full flex-col justify-between px-6 py-5 lg:px-10 lg:py-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                    {String(active + 1).padStart(2, '0')} /{' '}
                    {String(content.items.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (active <= 0) {
                        setExpanded(false)
                        requestDeckPrev()
                        return
                      }
                      setActive((value) => value - 1)
                    }}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md hover:bg-white/10"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (active >= lastIndex) {
                        setExpanded(false)
                        requestDeckNext()
                        return
                      }
                      setActive((value) => value + 1)
                    }}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md hover:bg-white/10"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl"
              >
                {current.theme ? (
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                    {current.theme}
                  </p>
                ) : null}
                <h2 className="font-display mt-2 text-5xl font-bold tracking-tight text-white lg:text-7xl">
                  {current.title}
                </h2>
                {current.detail ? (
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
                    {current.detail}
                  </p>
                ) : null}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function FunnelScreen({ content }: { content: FunnelContent }) {
  const max = content.stages[0]?.count ?? 1
  return (
    <div className="flex h-full flex-col gap-3">
      <GlassCard className="px-4 py-3 text-sm text-warning">{content.disclaimer}</GlassCard>
      <Stagger className="grid flex-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {content.stages.map((stage, index) => (
          <StaggerItem key={stage.label}>
            <KpiWidget
              label={`Stage ${index + 1} · ${stage.label}`}
              value={String(stage.count)}
              note={`${Math.round((stage.count / max) * 100)}% of top of funnel`}
              status={index >= content.stages.length - 2 ? 'good' : 'neutral'}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}

function OutreachScreen({ content }: { content: OutreachContent }) {
  return (
    <GlassCard className="glass-strong mx-auto flex h-full max-w-3xl flex-col justify-center p-6 lg:p-8">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
        Outreach draft
      </p>
      <pre className="font-body mt-4 whitespace-pre-wrap text-sm leading-relaxed text-white/70 lg:text-base">
        {content.message}
      </pre>
    </GlassCard>
  )
}

function RoleplayScreen({ content }: { content: RoleplayPrepContent }) {
  const fields = [
    ['Candidate background', content.background],
    ['Current situation', content.currentSituation],
    ['Likely motivations', content.likelyMotivations],
    ['Likely concerns', content.likelyConcerns],
    ['Career ambitions', content.careerAmbitions],
    ['My objective for the call', content.callObjective],
    ['Desired next step', content.desiredNextStep],
  ] as const

  return (
    <div className="grid h-full gap-3 lg:grid-cols-[1.35fr_1fr]">
      <Stagger className="space-y-2 overflow-auto">
        {fields.map(([label, value], index) => (
          <StaggerItem key={label}>
            <Expandable title={label} defaultOpen={index === 0}>
              {value}
            </Expandable>
          </StaggerItem>
        ))}
      </Stagger>
      <GlassCard className="p-4">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
          Questions to explore
        </p>
        <Stagger className="mt-3 space-y-2">
          {content.questionsToExplore.map((question) => (
            <StaggerItem key={question}>
              <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5 text-sm text-white/70">
                {question}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </GlassCard>
    </div>
  )
}

function StagesScreen({ content }: { content: StagesContent }) {
  return (
    <Timeline
      items={content.stages.map((stage) => ({
        title: stage.title,
        detail: stage.detail,
        meta: `Step ${stage.step}`,
      }))}
    />
  )
}

function PitchScreen({ content }: { content: PitchContent }) {
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
      {content.points.map((point, index) => (
        <StaggerItem key={point.label}>
          <Expandable
            title={point.label}
            badge={String(index + 1).padStart(2, '0')}
            defaultOpen={index === 0}
          >
            {point.detail}
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function ObjectionsScreen({ content }: { content: ObjectionsContent }) {
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {content.items.map((item) => (
        <StaggerItem key={item.objection}>
          <Expandable title={item.objection} badge="Objection" defaultOpen>
            <p className="text-[11px] font-semibold tracking-wide text-accent uppercase">
              Response
            </p>
            <p className="mt-1">{item.response}</p>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function RevealScreen({ content }: { content: RevealContent }) {
  const [showAnswer, setShowAnswer] = useState(false)
  const delay = content.answerDelayMs ?? 2200

  useEffect(() => {
    setShowAnswer(false)
    const timer = window.setTimeout(() => setShowAnswer(true), delay)
    return () => window.clearTimeout(timer)
  }, [delay, content.question, content.answer, content.answerSubtitle])

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.img
        src={content.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12, opacity: 0.55 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 4.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_55%)]"
        animate={{ opacity: showAnswer ? [0.35, 0.7, 0.45] : 0.25 }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-10 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{
            opacity: 1,
            y: showAnswer ? -36 : 0,
            scale: showAnswer ? 0.92 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-5xl text-2xl leading-snug font-semibold text-balance text-white/90 sm:text-3xl lg:text-4xl"
        >
          {content.question}
        </motion.p>

        <AnimatePresence>
          {showAnswer ? (
            <motion.div
              key={content.answer}
              initial={{ opacity: 0, scale: 0.72, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex flex-col items-center"
            >
              <h2 className="font-display text-7xl leading-none font-bold tracking-tight text-white sm:text-8xl lg:text-[10rem]">
                {content.answer}
              </h2>
              {content.answerSubtitle ? (
                <p className="mt-5 max-w-3xl text-lg font-medium tracking-wide text-white/80 sm:text-xl lg:mt-6 lg:text-2xl">
                  {content.answerSubtitle}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

function VisualHeroScreen({
  content,
}: {
  content: VisualHeroContent
  takeaway?: string
}) {
  const hasPoints = Boolean(content.points?.length)
  const revealOnClick = Boolean(content.revealPointsOnClick && hasPoints)
  const points = content.points ?? []
  const chips = content.chips ?? []
  const logos = content.logos ?? []
  const hasChips = chips.length > 0
  const hasLogos = logos.length > 0
  const centeredPoints = content.pointsLayout === 'center' && hasPoints
  const [visibleCount, setVisibleCount] = useState(revealOnClick ? 0 : points.length)
  const hasHeader = Boolean(content.eyebrow || (content.title && hasPoints))
  const hasTitleBlock = Boolean(content.title && !hasPoints)
  const hasSubtitle = Boolean(content.subtitle)
  const hasCopy =
    hasHeader || hasPoints || hasTitleBlock || hasSubtitle || hasChips || hasLogos

  useEffect(() => {
    setVisibleCount(revealOnClick ? 0 : points.length)
  }, [revealOnClick, points.length, content.image, content.title])

  useEffect(() => {
    if (!revealOnClick) return
    return registerSlideInnerNav({
      next: () => {
        if (visibleCount >= points.length) return false
        setVisibleCount((value) => value + 1)
        return true
      },
      prev: () => {
        if (visibleCount <= 0) return false
        setVisibleCount((value) => value - 1)
        return true
      },
    })
  }, [revealOnClick, visibleCount, points.length])

  const revealNext = () => {
    if (!revealOnClick) return
    if (visibleCount < points.length) {
      setVisibleCount((value) => value + 1)
    }
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onClick={revealOnClick ? revealNext : undefined}
      role={revealOnClick ? 'button' : undefined}
      tabIndex={revealOnClick ? 0 : undefined}
      onKeyDown={
        revealOnClick
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                revealNext()
              }
            }
          : undefined
      }
    >
      <motion.img
        src={content.image}
        alt={content.title || 'Visual'}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      {hasCopy ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
        </>
      ) : null}

      {hasCopy ? (
        <div className="relative flex h-full flex-col justify-between px-8 py-7 lg:px-12 lg:py-9">
          {hasHeader ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center justify-between gap-3"
            >
              {content.eyebrow ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase">
                    {content.eyebrow}
                  </span>
                </div>
              ) : (
                <div />
              )}
              <div className="flex flex-wrap items-center gap-3">
                {content.title && hasPoints ? (
                  <p className="font-display text-lg font-semibold text-white/80 lg:text-xl">
                    {content.title}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ) : (
            <div />
          )}

          {hasPoints ? (
            <div
              className={`flex min-h-0 flex-1 flex-col py-3 ${
                centeredPoints ? 'items-center justify-center' : 'justify-center'
              }`}
            >
              <div
                className={
                  centeredPoints
                    ? 'flex w-full max-w-5xl flex-col items-center justify-center gap-5 lg:gap-8'
                    : `grid w-full gap-3 md:gap-4 ${
                        points.length >= 5
                          ? 'md:grid-cols-6'
                          : points.length === 4
                            ? 'md:grid-cols-2 lg:grid-cols-4'
                            : 'md:grid-cols-3'
                      }`
                }
              >
                {points.map((point, index) => {
                  const long = point.length > 48
                  const medium = point.length > 24
                  const fiveUp = points.length >= 5
                  const visible = index < visibleCount
                  return (
                    <motion.div
                      key={point}
                      initial={false}
                      animate={
                        visible
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: 24, scale: 0.96 }
                      }
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`glass flex items-center justify-center rounded-[28px] text-center backdrop-blur-xl ${
                        centeredPoints
                          ? 'w-full max-w-4xl px-6 py-8 lg:px-10 lg:py-12'
                          : `px-4 py-6 lg:px-5 ${
                              fiveUp
                                ? 'min-h-[120px] md:col-span-2 lg:min-h-[150px]'
                                : 'min-h-[180px] lg:min-h-[240px] lg:py-8'
                            } ${fiveUp && points.length === 5 && index === 3 ? 'md:col-start-2' : ''}`
                      } ${visible ? '' : 'pointer-events-none'}`}
                      aria-hidden={!visible}
                    >
                      <p
                        className={`font-display font-bold tracking-tight text-balance text-white ${
                          centeredPoints
                            ? index === 0
                              ? 'text-3xl leading-tight sm:text-4xl lg:text-6xl xl:text-7xl'
                              : 'text-xl leading-snug sm:text-2xl lg:text-4xl xl:text-5xl'
                            : long
                              ? 'text-lg leading-snug sm:text-xl lg:text-2xl'
                              : medium
                                ? 'text-xl leading-tight sm:text-2xl lg:text-3xl'
                                : fiveUp
                                  ? 'text-2xl leading-none sm:text-3xl lg:text-4xl'
                                  : 'text-4xl leading-none sm:text-5xl lg:text-6xl xl:text-7xl'
                        }`}
                      >
                        {point}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ) : hasTitleBlock ? (
            <div className="flex flex-1 items-center">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-display max-w-5xl font-bold tracking-tight text-white ${
                  content.titleSize === 'display'
                    ? 'text-7xl leading-[0.9] sm:text-8xl lg:text-[9.5rem]'
                    : 'text-5xl leading-tight lg:text-7xl'
                }`}
              >
                {content.title}
              </motion.h2>
            </div>
          ) : (
            <div className="flex-1" />
          )}

          {hasSubtitle || hasChips || hasLogos ? (
            <div className="max-w-6xl space-y-4">
              {hasSubtitle ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={
                    hasChips || hasLogos
                      ? 'font-display text-xl leading-snug font-semibold text-balance text-white lg:text-2xl'
                      : hasTitleBlock
                        ? 'font-display text-xl leading-snug font-bold text-balance text-white lg:text-2xl'
                        : 'text-base text-white/65 lg:text-lg'
                  }
                >
                  {content.subtitle}
                </motion.p>
              ) : null}
              {hasLogos ? (
                <div>
                  {content.chipsLabel ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      className="font-display text-xl leading-snug font-bold text-balance text-white lg:text-2xl"
                    >
                      {content.chipsLabel}
                    </motion.p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap items-center gap-2.5 lg:gap-3">
                    {logos.map((logo, index) => (
                      <motion.div
                        key={logo.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.6 + index * 0.03,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        title={logo.name}
                        className="flex h-14 w-[148px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white px-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] lg:h-16 lg:w-[168px]"
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : hasChips ? (
                <div>
                  {content.chipsLabel ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      className="text-sm font-medium text-white/70 lg:text-base"
                    >
                      {content.chipsLabel}:
                    </motion.p>
                  ) : null}
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {chips.map((name, index) => (
                      <motion.span
                        key={name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.6 + index * 0.03,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-flex items-center rounded-full border border-accent/35 bg-accent/15 px-3 py-1.5 font-display text-xs font-bold tracking-wide text-white shadow-[0_0_18px_rgba(255,107,44,0.18)] lg:text-sm"
                      >
                        {name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div />
          )}
        </div>
      ) : null}
    </div>
  )
}

function LeadershipRolesScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title: string
  headline?: string
  takeaway: string
  content: DriversContent
}) {
  const [active, setActive] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const current = content.drivers[active]

  useEffect(() => {
    if (!autoPlay) return
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % content.drivers.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [autoPlay, content.drivers.length])

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current.image ?? current.title}
          src={current.image}
          alt={current.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />

      <div className="relative z-10 flex h-full flex-col gap-4 p-5 lg:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
                {content.eyebrow ?? 'Leadership system'}
              </span>
            </div>
            <h1 className="font-display mt-3 text-2xl font-semibold text-white lg:text-3xl">
              {title}
            </h1>
            {headline ? (
              <p className="mt-1 max-w-2xl text-sm text-white/65 lg:text-base">{headline}</p>
            ) : null}
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-md">
            {autoPlay ? 'Auto-rotating' : 'Paused'} · {active + 1}/{content.drivers.length}
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[220px_1fr]">
          <div className="glass flex flex-col gap-1.5 overflow-hidden rounded-2xl p-2 backdrop-blur-xl">
            {content.drivers.map((driver, index) => {
              const selected = active === index
              return (
                <button
                  key={driver.title}
                  type="button"
                  onClick={() => {
                    setActive(index)
                    setAutoPlay(false)
                  }}
                  className={`flex items-center gap-3 rounded-xl px-2 py-2 text-left transition ${
                    selected
                      ? 'bg-accent text-bg shadow-[0_0_24px_rgba(255,107,44,0.35)]'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {driver.image ? (
                    <img
                      src={driver.image}
                      alt=""
                      className="h-10 w-10 shrink-0 rounded-lg object-cover"
                    />
                  ) : null}
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{driver.title}</span>
                    <span
                      className={`mt-0.5 block text-[10px] ${
                        selected ? 'text-bg/70' : 'text-white/40'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass flex min-h-0 flex-col justify-between rounded-3xl p-5 backdrop-blur-xl lg:p-6"
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
                  Active role
                </p>
                <h2 className="font-display mt-2 text-3xl font-semibold text-white">
                  {current.title}
                </h2>
                {current.detail ? (
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
                    {current.detail}
                  </p>
                ) : null}
                {current.bullets?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {current.bullets.map((bullet, index) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.06 }}
                        className="rounded-2xl border border-white/12 bg-black/30 px-4 py-5"
                      >
                        <p className="font-display text-sm font-bold tracking-[0.14em] text-accent uppercase">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <p className="font-display mt-3 text-2xl leading-tight font-bold tracking-tight text-white lg:text-3xl">
                          {bullet}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <p className="max-w-xl text-xs text-white/55">
                  <span className="font-semibold text-accent">Insight</span>
                  <span className="mx-1.5 text-white/20">·</span>
                  {takeaway}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAutoPlay(false)
                      setActive((value) =>
                        value === 0 ? content.drivers.length - 1 : value - 1,
                      )
                    }}
                    className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 hover:bg-white/15"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAutoPlay(false)
                      setActive((value) => (value + 1) % content.drivers.length)
                    }}
                    className="rounded-xl bg-accent px-3 py-1.5 text-xs font-medium text-bg hover:bg-accent-soft"
                  >
                    Next role
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function emphasizeMetrics(text: string) {
  const parts = text.split(/(\d[\d.,]*\+?\s*(?:K\$|M\$|\$)?|\d+\+|\$\d[\d.,]*[KM]?)/gi)
  return parts.map((part, index) => {
    if (!part) return null
    const isMetric = /^\d/.test(part) || part.startsWith('$')
    if (isMetric) {
      return (
        <span
          key={`${part}-${index}`}
          className="font-display inline-block text-[1.35em] font-bold leading-none tracking-tight text-accent drop-shadow-[0_0_18px_rgba(255,107,44,0.35)] lg:text-[1.45em]"
        >
          {part}
        </span>
      )
    }
    return <span key={`${part}-${index}`}>{part}</span>
  })
}

function DriversColumnsScreen({
  title,
  headline,
  takeaway,
  content,
}: {
  title: string
  headline?: string
  takeaway?: string
  content: DriversContent
}) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-5 py-5 lg:px-9 lg:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,107,44,0.18),transparent_42%),radial-gradient(ellipse_at_85%_100%,rgba(255,255,255,0.05),transparent_40%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-16 right-[18%] h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 shrink-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase">
            {content.eyebrow ?? 'Why I am here'}
          </span>
        </div>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          {title}
        </h1>
        {headline ? (
          <p className="mt-2 max-w-3xl text-sm text-white/55 lg:text-base">{headline}</p>
        ) : null}
      </div>

      <div className="relative z-10 mt-5 grid min-h-0 flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        {content.drivers.map((driver, index) => (
          <motion.article
            key={driver.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08 + index * 0.08,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-b from-white/[0.1] via-white/[0.04] to-transparent p-4 lg:p-5"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute -top-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-accent/20 opacity-0 blur-2xl transition group-hover:opacity-100" />

            <div className="relative flex items-baseline justify-between gap-2">
              <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
            </div>

            <h2 className="font-display relative mt-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
              {driver.title}
            </h2>
            {driver.detail ? (
              <p className="relative mt-2 text-sm leading-snug text-white/50">{driver.detail}</p>
            ) : null}

            {driver.bullets?.length ? (
              <ul className="relative mt-6 flex min-h-0 flex-1 flex-col gap-3.5 lg:gap-4">
                {driver.bullets.map((bullet, bulletIndex) => (
                  <li key={bullet}>
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-3.5 py-3 backdrop-blur-sm transition group-hover:border-white/15 lg:px-4 lg:py-3.5">
                      <p className="font-display text-[10px] font-semibold tracking-[0.16em] text-white/35 uppercase">
                        {String(bulletIndex + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed font-medium text-white/90 lg:text-lg lg:leading-relaxed">
                        {emphasizeMetrics(bullet)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}

            {driver.highlights?.length ? (
              <div className="relative mt-4">
                <p className="font-display text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
                  Named logos
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {driver.highlights.map((name, nameIndex) => (
                    <motion.span
                      key={name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + nameIndex * 0.04,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-flex items-center rounded-full border border-accent/35 bg-accent/15 px-2.5 py-1 font-display text-[11px] font-bold tracking-wide text-white shadow-[0_0_18px_rgba(255,107,44,0.18)] lg:text-xs"
                    >
                      {name}
                    </motion.span>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>

      {takeaway ? (
        <p className="relative z-10 mt-4 max-w-4xl shrink-0 text-xs text-white/40 lg:text-sm">
          {takeaway}
        </p>
      ) : null}
    </div>
  )
}

function DriversScreen({ content }: { content: DriversContent }) {
  const [active, setActive] = useState(0)

  return (
    <Stagger className="grid h-full gap-3 md:grid-cols-2 xl:grid-cols-4">
      {content.drivers.map((driver, index) => (
        <StaggerItem key={driver.title} className="h-full">
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="h-full p-5"
          >
            <h3 className="font-display text-lg font-semibold text-white">{driver.title}</h3>
            <p className="mt-3 text-sm text-white/55">{driver.detail}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function FrameworkScreen({ content }: { content: FrameworkContent }) {
  return (
    <Timeline
      items={content.steps.map((step) => ({
        title: step.title,
        detail: step.detail,
      }))}
    />
  )
}

function DiagnosisScreen({ content }: { content: DiagnosisContent }) {
  return (
    <Stagger className="space-y-2">
      {content.dimensions.map((row) => (
        <StaggerItem key={row.dimension}>
          <Expandable title={row.dimension} subtitle={row.question}>
            <p>
              <span className="text-white/40">Evidence · </span>
              {row.evidence}
            </p>
            <p className="mt-2">
              <span className="text-white/40">Management action · </span>
              {row.action}
            </p>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function CaseStudyScreen({ content }: { content: CaseStudyContent }) {
  const caseStudy = content.caseStudy
  const fields = [
    ['Situation', caseStudy.situation],
    ['Initial performance', caseStudy.initialPerformance],
    ['Diagnosis', caseStudy.diagnosis],
    ['Coaching plan', caseStudy.coachingPlan],
    ['Actions taken', caseStudy.actionsTaken],
    ['Business result', caseStudy.businessResult],
    ['Behavioural improvement', caseStudy.behaviouralImprovement],
    ['Lessons learned', caseStudy.lessonsLearned],
  ] as const

  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {fields.map(([label, value], index) => (
        <StaggerItem key={label}>
          <Expandable title={label} defaultOpen={index < 2}>
            {value}
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function MetricsScreen({ content }: { content: MetricsContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      <GlassCard className="p-4">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
          Leading indicators
        </p>
        <Stagger className="mt-3 grid gap-2 sm:grid-cols-2">
          {content.leading.map((item) => (
            <StaggerItem key={item}>
              <KpiWidget label="Leading" value={item} status="good" />
            </StaggerItem>
          ))}
        </Stagger>
      </GlassCard>
      <GlassCard className="p-4">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-white/45 uppercase">
          Lagging indicators
        </p>
        <Stagger className="mt-3 grid gap-2 sm:grid-cols-2">
          {content.lagging.map((item) => (
            <StaggerItem key={item}>
              <KpiWidget label="Lagging" value={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </GlassCard>
    </div>
  )
}

function RhythmScreen({ content }: { content: RhythmContent }) {
  return (
    <Timeline
      items={content.cadence.map((item) => ({
        title: item.title,
        detail: item.detail,
      }))}
    />
  )
}

function MarketsScreen({ content }: { content: MarketsSlideContent }) {
  return (
    <Stagger className="grid h-full gap-2.5 md:grid-cols-5">
      {content.markets.map((market) => {
        const flag = flagCodeForCountry(market.country)
        return (
          <StaggerItem key={market.id}>
            <Expandable
              title={market.country}
              subtitle={market.marketMaturity}
              leading={
                flag ? <MarketFlag code={flag} title={market.country} className="h-6 w-9" /> : null
              }
            >
              <div className="space-y-1.5 text-xs">
                <p>
                  <span className="text-white/40">Segments · </span>
                  {market.prioritySegments}
                </p>
                <p>
                  <span className="text-white/40">Accounts · </span>
                  {market.strategicAccounts}
                </p>
                <p>
                  <span className="text-white/40">Hiring · </span>
                  {market.hiringPriority}
                </p>
                <p>
                  <span className="text-white/40">Partners · </span>
                  {market.partnerOpportunity}
                </p>
                <p>
                  <span className="text-white/40">Risk · </span>
                  {market.keyRisk}
                </p>
                <p>
                  <span className="text-white/40">Next · </span>
                  {market.nextAction}
                </p>
              </div>
            </Expandable>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}

function BrandPortfolioScreen({
  content,
  takeaway,
}: {
  content: BrandPortfolioContent
  takeaway: string
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 520px at 50% -5%, rgba(46, 110, 184, 0.35), transparent 55%), radial-gradient(700px 420px at 90% 100%, rgba(0, 61, 124, 0.45), transparent 50%), linear-gradient(180deg, #07101c 0%, #0a1524 45%, #061018 100%)',
        }}
      />
      <motion.img
        src={content.productsImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] blur-[2px]"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/70 via-transparent to-[#061018]/90" />

      <div className="relative flex h-full flex-col px-8 py-6 lg:px-12 lg:py-7">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={content.logo}
            alt={content.logoAlt}
            className="h-[4.25rem] w-auto max-w-[min(92vw,420px)] drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)] lg:h-24"
          />
          <p className="mt-3 max-w-3xl text-sm text-white/60 lg:text-base">{content.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex min-h-0 flex-1 items-center justify-center"
        >
          <img
            src={content.productsImage}
            alt={content.productsImageAlt}
            className="max-h-full w-full max-w-5xl object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          className="mt-3"
        >
          <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-3">
            {content.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 + index * 0.04 }}
                className="text-center"
              >
                <p className="font-display text-sm font-semibold tracking-tight text-white lg:text-[15px]">
                  {product.name}
                </p>
                <p className="text-[10px] tracking-wide text-white/40 uppercase">{product.category}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-white/45 lg:text-sm">{takeaway}</p>
        </motion.div>
      </div>
    </div>
  )
}

function CultureScreen({ content }: { content: CultureContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {content.principles.map((principle, index) => (
        <StaggerItem key={principle}>
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex items-start gap-3 p-4"
          >
            <span className="font-display text-lg font-bold text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-sm font-medium leading-snug text-white">{principle}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function WeekdayScreen({ content }: { content: WeekdayContent }) {
  return (
    <Timeline
      items={content.days.map((day) => ({
        title: day.day,
        detail: day.focus,
      }))}
    />
  )
}

function DashboardScreen({ content }: { content: DashboardContent }) {
  return (
    <div className="flex h-full flex-col gap-3">
      {content.disclaimer ? (
        <GlassCard className="px-4 py-2.5 text-sm text-warning">{content.disclaimer}</GlassCard>
      ) : null}
      <Stagger className="grid min-h-0 flex-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {content.metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <KpiWidget
              label={metric.label}
              value={metric.value}
              note={metric.note}
              status={metric.status}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}

function MeddpiccScreen({ content }: { content: MeddpiccContent }) {
  return (
    <Stagger className="grid gap-2 md:grid-cols-2">
      {content.items.map((item) => (
        <StaggerItem key={item.category}>
          <Expandable title={item.category} badge={item.status} subtitle={`Risk · ${item.risk}`}>
            <p>
              <span className="text-white/40">Evidence · </span>
              {item.evidence}
            </p>
            <p className="mt-2">
              <span className="text-white/40">Next action · </span>
              {item.nextAction}
            </p>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function QuestionsScreen({ content }: { content: QuestionsContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {content.questions.map((question, index) => (
        <StaggerItem key={question}>
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex items-start gap-3 p-4"
          >
            <span className="font-display text-base font-bold text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-sm font-medium text-white">{question}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function DefinitionsScreen({ content }: { content: DefinitionsContent }) {
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {content.items.map((item, index) => (
        <StaggerItem key={item.term}>
          <Expandable title={item.term} defaultOpen={index === 0}>
            {item.definition}
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function PhilosophyScreen({ content }: { content: PhilosophyContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-3">
      {content.principles.map((principle, index) => (
        <StaggerItem key={principle}>
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex min-h-[110px] items-center p-5 text-base font-medium text-white"
          >
            {principle}
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function OneOnOneScreen({ content }: { content: OneOnOneContent }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <Timeline
        items={content.agenda.map((item) => ({
          title: item.topic,
          meta: `${item.minutes} min`,
        }))}
      />
      <GlassCard className="px-4 py-3 text-sm text-white/60">{content.note}</GlassCard>
    </div>
  )
}

function AsksScreen({ content }: { content: AsksContent }) {
  return (
    <Stagger className="grid h-full gap-3 md:grid-cols-3">
      {content.asks.map((ask, index) => (
        <StaggerItem key={ask.title} className="h-full">
          <Expandable
            title={ask.title}
            badge={String(index + 1).padStart(2, '0')}
            subtitle={ask.detail}
            defaultOpen={index === 0}
          >
            <div className="space-y-2">
              {ask.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-xl border border-white/8 bg-white/4 px-3 py-2"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function TwoColumnScreen({ content }: { content: TwoColumnContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      <GlassCard className="p-4">
        <p className="font-display text-lg font-semibold text-accent">{content.leftTitle}</p>
        <Stagger className="mt-3 space-y-2">
          {content.leftItems.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5 text-sm text-white">
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </GlassCard>
      <GlassCard className="p-4">
        <p className="font-display text-lg font-semibold text-white">{content.rightTitle}</p>
        <Stagger className="mt-3 space-y-2">
          {content.rightItems.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5 text-sm text-white/70">
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </GlassCard>
    </div>
  )
}

function PlanScreen({ content }: { content: PlanContent }) {
  return (
    <Timeline
      items={content.items.map((item) => ({
        title: item,
      }))}
    />
  )
}

function RisksScreen({ content }: { content: RisksContent }) {
  return (
    <Stagger className="grid gap-2.5 md:grid-cols-2">
      {content.risks.map((item) => (
        <StaggerItem key={item.risk}>
          <Expandable title={item.risk} badge="Risk" defaultOpen>
            <div className="flex items-start gap-2">
              <StatusDot status="risk" />
              <div>
                <p className="text-[11px] font-semibold tracking-wide text-accent uppercase">
                  Mitigation
                </p>
                <p className="mt-1">{item.mitigation}</p>
              </div>
            </div>
          </Expandable>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function ClosingScreen({ content }: { content: ClosingContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid gap-3 md:grid-cols-2">
      {content.messages.map((message, index) => (
        <StaggerItem key={message}>
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex items-center gap-4 p-5"
          >
            <span className="font-display text-2xl font-bold text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-lg font-medium leading-snug text-white">{message}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function FeedbackScreen({ content }: { content: FeedbackContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="flex h-full flex-col justify-center gap-3">
      {content.prompts.map((prompt, index) => (
        <StaggerItem key={prompt}>
          <GlassCard
            active={active === index}
            onClick={() => setActive(index)}
            className="flex items-center gap-5 p-5"
          >
            <span className="font-display text-2xl font-bold text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-xl font-medium text-white">{prompt}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
