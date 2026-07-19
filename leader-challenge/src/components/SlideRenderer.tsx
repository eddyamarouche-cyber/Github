import { useState } from 'react'
import { profile } from '../data/profile'
import { sections } from '../data/slides'
import type {
  AgendaContent,
  AsksContent,
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
  RisksContent,
  RoleplayPrepContent,
  RhythmContent,
  ScorecardContent,
  Slide,
  StagesContent,
  ThesisContent,
  TwoColumnContent,
  WeekdayContent,
  Candidate,
  CoachingCase,
  MarketCard,
} from '../data/types'
import {
  Expandable,
  GlassCard,
  KpiWidget,
  MotionPage,
  PlaceholderBadge,
  ScreenShell,
  Stagger,
  StaggerItem,
  StatusDot,
  Timeline,
} from './ui'

type CandidatesContent = { candidates: Candidate[] }
type CaseStudyContent = { caseStudy: CoachingCase }
type MarketsSlideContent = { markets: MarketCard[] }

function sectionLabel(sectionId: string): string {
  return sections.find((section) => section.id === sectionId)?.label ?? sectionId
}

export function SlideRenderer({
  slide,
  hasPlaceholders,
}: {
  slide: Slide
  hasPlaceholders: boolean
}) {
  return (
    <div className="app-surface relative h-full w-full overflow-hidden text-text">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:48px_48px] opacity-40" />
      <div className="relative h-full">
        {hasPlaceholders ? (
          <div className="absolute top-4 right-5 z-10 no-print">
            <PlaceholderBadge />
          </div>
        ) : null}
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
    case 'profile':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ProfileScreen content={slide.content as ProfileContent} />
        </ScreenShell>
      )
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
    case 'drivers':
      return (
        <ScreenShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <DriversScreen content={slide.content as DriversContent} />
        </ScreenShell>
      )
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
              Cursor
            </span>
          </div>
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
            <GlassCard className="mt-8 max-w-xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                With
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.interlocutors.map((person) => (
                  <span
                    key={person.name}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white"
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

function ProfileScreen({ content }: { content: ProfileContent }) {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <Stagger className="grid grid-cols-2 gap-2.5 md:grid-cols-5">
      {content.traits.map((trait) => (
        <StaggerItem key={trait}>
          <GlassCard
            active={selected === trait}
            onClick={() => setSelected(trait)}
            className="flex min-h-[88px] items-center p-3.5 text-sm font-medium leading-snug text-white"
          >
            {trait}
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
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

function ProcessScreen({ content }: { content: ProcessContent }) {
  return (
    <Timeline items={content.steps.map((step) => ({ title: step }))} />
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

function DriversScreen({ content }: { content: DriversContent }) {
  const [active, setActive] = useState(0)
  return (
    <Stagger className="grid h-full gap-3 md:grid-cols-4">
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
      {content.markets.map((market) => (
        <StaggerItem key={market.id}>
          <Expandable title={market.country} subtitle={market.marketMaturity}>
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
      ))}
    </Stagger>
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
