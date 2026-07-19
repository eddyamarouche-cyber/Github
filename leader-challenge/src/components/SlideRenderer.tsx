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
import { PlaceholderBadge, SlideShell, SoftCard, StatusDot } from './ui'

// Local aliases for content shapes stored as nested objects
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
    <div className="relative h-full w-full overflow-hidden bg-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="relative h-full">
        {hasPlaceholders ? (
          <div className="absolute top-4 right-5 z-10 no-print">
            <PlaceholderBadge />
          </div>
        ) : null}
        {renderSlide(slide)}
      </div>
    </div>
  )
}

function renderSlide(slide: Slide) {
  const eyebrow = sectionLabel(slide.section)

  switch (slide.type) {
    case 'cover':
      return <CoverSlide content={slide.content as CoverContent} />
    case 'thesis':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ThesisSlide content={slide.content as ThesisContent} />
        </SlideShell>
      )
    case 'agenda':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <AgendaSlide content={slide.content as AgendaContent} />
        </SlideShell>
      )
    case 'pillars':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PillarsSlide content={slide.content as PillarsContent} />
        </SlideShell>
      )
    case 'profile':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ProfileSlide content={slide.content as ProfileContent} />
        </SlideShell>
      )
    case 'scorecard':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <ScorecardSlide content={slide.content as ScorecardContent} />
        </SlideShell>
      )
    case 'candidates':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CandidatesSlide content={slide.content as CandidatesContent} />
        </SlideShell>
      )
    case 'process':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ProcessSlide content={slide.content as ProcessContent} />
        </SlideShell>
      )
    case 'funnel':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <FunnelSlide content={slide.content as FunnelContent} />
        </SlideShell>
      )
    case 'outreach':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <OutreachSlide content={slide.content as OutreachContent} />
        </SlideShell>
      )
    case 'roleplay-prep':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RoleplaySlide content={slide.content as RoleplayPrepContent} />
        </SlideShell>
      )
    case 'stages':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <StagesSlide content={slide.content as StagesContent} />
        </SlideShell>
      )
    case 'pitch':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <PitchSlide content={slide.content as PitchContent} />
        </SlideShell>
      )
    case 'objections':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <ObjectionsSlide content={slide.content as ObjectionsContent} />
        </SlideShell>
      )
    case 'drivers':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <DriversSlide content={slide.content as DriversContent} />
        </SlideShell>
      )
    case 'framework':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <FrameworkSlide content={slide.content as FrameworkContent} />
        </SlideShell>
      )
    case 'diagnosis':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DiagnosisSlide content={slide.content as DiagnosisContent} />
        </SlideShell>
      )
    case 'case-study':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CaseStudySlide content={slide.content as CaseStudyContent} />
        </SlideShell>
      )
    case 'metrics':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MetricsSlide content={slide.content as MetricsContent} />
        </SlideShell>
      )
    case 'rhythm':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RhythmSlide content={slide.content as RhythmContent} />
        </SlideShell>
      )
    case 'markets':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MarketsSlide content={slide.content as MarketsSlideContent} />
        </SlideShell>
      )
    case 'culture':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <CultureSlide content={slide.content as CultureContent} />
        </SlideShell>
      )
    case 'weekday':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <WeekdaySlide content={slide.content as WeekdayContent} />
        </SlideShell>
      )
    case 'dashboard':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DashboardSlide content={slide.content as DashboardContent} />
        </SlideShell>
      )
    case 'meddpicc':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <MeddpiccSlide content={slide.content as MeddpiccContent} />
        </SlideShell>
      )
    case 'questions':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <QuestionsSlide content={slide.content as QuestionsContent} />
        </SlideShell>
      )
    case 'definitions':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <DefinitionsSlide content={slide.content as DefinitionsContent} />
        </SlideShell>
      )
    case 'philosophy':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PhilosophySlide content={slide.content as PhilosophyContent} />
        </SlideShell>
      )
    case 'one-on-one':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <OneOnOneSlide content={slide.content as OneOnOneContent} />
        </SlideShell>
      )
    case 'asks':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <AsksSlide content={slide.content as AsksContent} />
        </SlideShell>
      )
    case 'two-column':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <TwoColumnSlide content={slide.content as TwoColumnContent} />
        </SlideShell>
      )
    case 'plan':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <PlanSlide content={slide.content as PlanContent} />
        </SlideShell>
      )
    case 'risks':
      return (
        <SlideShell eyebrow={eyebrow} title={slide.title} takeaway={slide.takeaway}>
          <RisksSlide content={slide.content as RisksContent} />
        </SlideShell>
      )
    case 'closing':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <ClosingSlide content={slide.content as ClosingContent} />
        </SlideShell>
      )
    case 'feedback':
      return (
        <SlideShell
          eyebrow={eyebrow}
          title={slide.title}
          headline={slide.headline}
          takeaway={slide.takeaway}
        >
          <FeedbackSlide content={slide.content as FeedbackContent} />
        </SlideShell>
      )
    default:
      return null
  }
}

function CoverSlide({ content }: { content: CoverContent }) {
  return (
    <div className="flex h-full flex-col justify-between px-12 py-12 lg:px-16 lg:py-14">
      <div>
        <p className="mb-6 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
          Cursor · Leader Challenge
        </p>
        <h1 className="font-display max-w-5xl text-5xl leading-[1.05] font-bold tracking-tight lg:text-6xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-text-muted lg:text-2xl">{content.subtitle}</p>
      </div>
      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        <SoftCard className="px-5 py-4">
          <p className="text-[11px] font-semibold tracking-wide text-text-dim uppercase">
            Candidate
          </p>
          <p className="mt-1 text-lg font-medium">{profile.candidateName}</p>
        </SoftCard>
        <SoftCard className="px-5 py-4">
          <p className="text-[11px] font-semibold tracking-wide text-text-dim uppercase">
            Interview date
          </p>
          <p className="mt-1 text-lg font-medium">{profile.interviewDate}</p>
        </SoftCard>
      </div>
    </div>
  )
}

function ThesisSlide({ content }: { content: ThesisContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-3">
      {content.convictions.map((item, index) => (
        <SoftCard key={item} className="flex flex-col justify-between p-5">
          <span className="font-display text-3xl font-bold text-accent/80">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="mt-8 text-lg leading-snug font-medium">{item}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function AgendaSlide({ content }: { content: AgendaContent }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {content.items.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-border/80 py-3"
        >
          <div className="flex items-center gap-4">
            <span className="font-display w-8 text-xl font-semibold text-accent">
              {index + 1}
            </span>
            <span className="text-xl font-medium">{item.label}</span>
          </div>
          <span className="text-sm text-text-dim">{item.minutes} min</span>
        </div>
      ))}
    </div>
  )
}

function PillarsSlide({ content }: { content: PillarsContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      {content.pillars.map((pillar, index) => (
        <SoftCard key={pillar.title} className="p-5">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            Pillar {index + 1}
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{pillar.description}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function ProfileSlide({ content }: { content: ProfileContent }) {
  return (
    <div className="grid h-full grid-cols-2 gap-3 md:grid-cols-5">
      {content.traits.map((trait) => (
        <SoftCard key={trait} className="flex items-center p-4 text-sm font-medium leading-snug">
          {trait}
        </SoftCard>
      ))}
    </div>
  )
}

function ScorecardSlide({ content }: { content: ScorecardContent }) {
  const totalWeight = content.criteria.reduce((sum, item) => sum + item.weight, 0)
  const scored = content.criteria.every((item) => item.score != null)
  const weighted =
    scored
      ? content.criteria.reduce(
          (sum, item) => sum + ((item.score ?? 0) / 100) * item.weight,
          0,
        )
      : null

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center justify-between text-sm text-text-muted">
        <span>{content.totalLabel}</span>
        <span className="font-display text-2xl font-semibold text-accent">
          {weighted != null ? weighted.toFixed(1) : '—'} / {totalWeight}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="text-[11px] tracking-wide text-text-dim uppercase">
            <tr className="border-b border-border">
              <th className="py-2 pr-3 font-semibold">Criterion</th>
              <th className="py-2 pr-3 font-semibold">Weight</th>
              <th className="py-2 pr-3 font-semibold">Score</th>
              <th className="py-2 pr-3 font-semibold">Evidence</th>
              <th className="py-2 font-semibold">Risk</th>
            </tr>
          </thead>
          <tbody>
            {content.criteria.map((row) => (
              <tr key={row.criterion} className="border-b border-border/60 align-top">
                <td className="py-2 pr-3 font-medium">{row.criterion}</td>
                <td className="py-2 pr-3 text-text-muted">{row.weight}</td>
                <td className="py-2 pr-3 text-text-muted">
                  {row.score != null ? row.score : '—'}
                </td>
                <td className="py-2 pr-3 text-text-muted">{row.evidence}</td>
                <td className="py-2 text-text-muted">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CandidatesSlide({ content }: { content: CandidatesContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-5">
      {content.candidates.map((candidate, index) => (
        <SoftCard key={candidate.id} className="flex flex-col p-3 text-xs">
          <p className="text-[10px] font-semibold tracking-wide text-accent uppercase">
            Target {index + 1}
          </p>
          <h3 className="font-display mt-1 text-sm leading-snug font-semibold">
            {candidate.fullName}
          </h3>
          <p className="mt-1 text-text-muted">
            {candidate.currentRole}
            <br />
            {candidate.currentCompany} · {candidate.country}
          </p>
          <div className="mt-2 space-y-1.5 text-[11px] leading-snug text-text-muted">
            <p>
              <span className="text-text">Why: </span>
              {candidate.whyThisPerson}
            </p>
            <p>
              <span className="text-text">Track record: </span>
              {candidate.relevantTrackRecord}
            </p>
            <p>
              <span className="text-text">Risk: </span>
              {candidate.potentialRisk}
            </p>
            <p>
              <span className="text-text">Status: </span>
              {candidate.relationshipStatus}
            </p>
          </div>
          <p className="mt-auto pt-2 font-semibold text-accent">
            Fit: {candidate.overallFitScore != null ? candidate.overallFitScore : '—'} / 100
          </p>
        </SoftCard>
      ))}
    </div>
  )
}

function ProcessSlide({ content }: { content: ProcessContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-3">
      {content.steps.map((step, index) => (
        <SoftCard key={step} className="flex items-start gap-3 p-5">
          <span className="font-display text-2xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="pt-1 text-base font-medium leading-snug">{step}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function FunnelSlide({ content }: { content: FunnelContent }) {
  const max = content.stages[0]?.count ?? 1
  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-sm text-warning">{content.disclaimer}</p>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {content.stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-4">
            <div className="w-40 text-sm text-text-muted">{stage.label}</div>
            <div className="flex-1">
              <div
                className="flex h-9 items-center rounded-md bg-accent-dim px-3 font-semibold text-accent"
                style={{ width: `${Math.max((stage.count / max) * 100, 12)}%` }}
              >
                {stage.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutreachSlide({ content }: { content: OutreachContent }) {
  return (
    <SoftCard className="mx-auto flex h-full max-w-4xl flex-col justify-center p-8">
      <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
        Outreach example
      </p>
      <pre className="font-body whitespace-pre-wrap text-base leading-relaxed text-text-muted">
        {content.message}
      </pre>
    </SoftCard>
  )
}

function RoleplaySlide({ content }: { content: RoleplayPrepContent }) {
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
    <div className="grid h-full gap-3 lg:grid-cols-[1.4fr_1fr]">
      <div className="grid gap-2 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <SoftCard key={label} className="p-3">
            <p className="text-[10px] font-semibold tracking-wide text-text-dim uppercase">
              {label}
            </p>
            <p className="mt-1 text-sm text-text-muted">{value}</p>
          </SoftCard>
        ))}
      </div>
      <SoftCard className="p-4">
        <p className="text-[10px] font-semibold tracking-wide text-accent uppercase">
          Questions to explore
        </p>
        <ul className="mt-3 space-y-2 text-sm text-text-muted">
          {content.questionsToExplore.map((question) => (
            <li key={question} className="border-b border-border/60 pb-2">
              {question}
            </li>
          ))}
        </ul>
      </SoftCard>
    </div>
  )
}

function StagesSlide({ content }: { content: StagesContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-3">
      {content.stages.map((stage) => (
        <SoftCard key={stage.step} className="p-4">
          <p className="font-display text-2xl font-bold text-accent">{stage.step}</p>
          <h3 className="mt-2 text-lg font-semibold">{stage.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{stage.detail}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function PitchSlide({ content }: { content: PitchContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2 xl:grid-cols-4">
      {content.points.map((point, index) => (
        <SoftCard key={point.label} className="p-4">
          <p className="text-[11px] font-semibold text-accent">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-base font-semibold">{point.label}</h3>
          <p className="mt-2 text-sm text-text-muted">{point.detail}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function ObjectionsSlide({ content }: { content: ObjectionsContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      {content.items.map((item) => (
        <SoftCard key={item.objection} className="p-4">
          <p className="text-[11px] font-semibold tracking-wide text-accent uppercase">
            Objection
          </p>
          <p className="mt-1 text-base font-semibold">“{item.objection}”</p>
          <p className="mt-3 text-[11px] font-semibold tracking-wide text-text-dim uppercase">
            Response
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.response}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function DriversSlide({ content }: { content: DriversContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-4">
      {content.drivers.map((driver) => (
        <SoftCard key={driver.title} className="p-5">
          <h3 className="font-display text-xl font-semibold">{driver.title}</h3>
          <p className="mt-3 text-sm text-text-muted">{driver.detail}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function FrameworkSlide({ content }: { content: FrameworkContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-3 xl:grid-cols-6">
      {content.steps.map((step, index) => (
        <SoftCard key={step.title} className="p-4">
          <p className="font-display text-2xl font-bold text-accent">{index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{step.detail}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function DiagnosisSlide({ content }: { content: DiagnosisContent }) {
  return (
    <div className="min-h-0 overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="text-[11px] tracking-wide text-text-dim uppercase">
          <tr className="border-b border-border">
            <th className="py-2 pr-3 font-semibold">Dimension</th>
            <th className="py-2 pr-3 font-semibold">Diagnostic question</th>
            <th className="py-2 pr-3 font-semibold">Evidence</th>
            <th className="py-2 font-semibold">Management action</th>
          </tr>
        </thead>
        <tbody>
          {content.dimensions.map((row) => (
            <tr key={row.dimension} className="border-b border-border/60 align-top">
              <td className="py-2.5 pr-3 font-medium">{row.dimension}</td>
              <td className="py-2.5 pr-3 text-text-muted">{row.question}</td>
              <td className="py-2.5 pr-3 text-text-muted">{row.evidence}</td>
              <td className="py-2.5 text-text-muted">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CaseStudySlide({ content }: { content: CaseStudyContent }) {
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
    <div className="grid h-full gap-3 md:grid-cols-2 xl:grid-cols-4">
      {fields.map(([label, value]) => (
        <SoftCard key={label} className="p-4">
          <p className="text-[10px] font-semibold tracking-wide text-accent uppercase">{label}</p>
          <p className="mt-2 text-sm text-text-muted">{value}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function MetricsSlide({ content }: { content: MetricsContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      <SoftCard className="p-5">
        <h3 className="font-display text-xl font-semibold text-accent">Leading indicators</h3>
        <ul className="mt-4 space-y-3">
          {content.leading.map((item) => (
            <li key={item} className="border-b border-border/70 pb-2 text-base">
              {item}
            </li>
          ))}
        </ul>
      </SoftCard>
      <SoftCard className="p-5">
        <h3 className="font-display text-xl font-semibold">Lagging indicators</h3>
        <ul className="mt-4 space-y-3">
          {content.lagging.map((item) => (
            <li key={item} className="border-b border-border/70 pb-2 text-base text-text-muted">
              {item}
            </li>
          ))}
        </ul>
      </SoftCard>
    </div>
  )
}

function RhythmSlide({ content }: { content: RhythmContent }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {content.cadence.map((item, index) => (
        <div
          key={item.title}
          className="grid grid-cols-[auto_1fr_2fr] items-center gap-4 border-b border-border/70 py-3"
        >
          <span className="font-display text-xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-lg font-semibold">{item.title}</span>
          <span className="text-sm text-text-muted">{item.detail}</span>
        </div>
      ))}
    </div>
  )
}

function MarketsSlide({ content }: { content: MarketsSlideContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-5">
      {content.markets.map((market) => (
        <SoftCard key={market.id} className="flex flex-col p-3 text-[11px] leading-snug">
          <h3 className="font-display text-base font-semibold">{market.country}</h3>
          <div className="mt-2 space-y-1.5 text-text-muted">
            <p>
              <span className="text-text">Maturity: </span>
              {market.marketMaturity}
            </p>
            <p>
              <span className="text-text">Segments: </span>
              {market.prioritySegments}
            </p>
            <p>
              <span className="text-text">Accounts: </span>
              {market.strategicAccounts}
            </p>
            <p>
              <span className="text-text">Hiring: </span>
              {market.hiringPriority}
            </p>
            <p>
              <span className="text-text">Partners: </span>
              {market.partnerOpportunity}
            </p>
            <p>
              <span className="text-text">Risk: </span>
              {market.keyRisk}
            </p>
            <p>
              <span className="text-text">Next: </span>
              {market.nextAction}
            </p>
          </div>
        </SoftCard>
      ))}
    </div>
  )
}

function CultureSlide({ content }: { content: CultureContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      {content.principles.map((principle, index) => (
        <SoftCard key={principle} className="flex items-start gap-3 p-4">
          <span className="font-display text-xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-base font-medium leading-snug">{principle}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function WeekdaySlide({ content }: { content: WeekdayContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-5">
      {content.days.map((day) => (
        <SoftCard key={day.day} className="flex flex-col p-5">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            {day.day}
          </p>
          <p className="mt-4 text-base font-medium leading-snug">{day.focus}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function DashboardSlide({ content }: { content: DashboardContent }) {
  return (
    <div className="flex h-full flex-col">
      {content.disclaimer ? (
        <p className="mb-3 text-sm text-warning">{content.disclaimer}</p>
      ) : null}
      <div className="grid min-h-0 flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {content.metrics.map((metric) => (
          <SoftCard key={metric.label} className="p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs text-text-dim">{metric.label}</p>
              <StatusDot status={metric.status} />
            </div>
            <p className="font-display mt-3 text-2xl font-semibold">{metric.value}</p>
            {metric.note ? <p className="mt-1 text-xs text-text-dim">{metric.note}</p> : null}
          </SoftCard>
        ))}
      </div>
    </div>
  )
}

function MeddpiccSlide({ content }: { content: MeddpiccContent }) {
  return (
    <div className="min-h-0 overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="text-[11px] tracking-wide text-text-dim uppercase">
          <tr className="border-b border-border">
            <th className="py-2 pr-3 font-semibold">Category</th>
            <th className="py-2 pr-3 font-semibold">Status</th>
            <th className="py-2 pr-3 font-semibold">Evidence</th>
            <th className="py-2 pr-3 font-semibold">Risk</th>
            <th className="py-2 font-semibold">Next action</th>
          </tr>
        </thead>
        <tbody>
          {content.items.map((item) => (
            <tr key={item.category} className="border-b border-border/60 align-top">
              <td className="py-2 pr-3 font-medium">{item.category}</td>
              <td className="py-2 pr-3 text-text-muted">{item.status}</td>
              <td className="py-2 pr-3 text-text-muted">{item.evidence}</td>
              <td className="py-2 pr-3 text-text-muted">{item.risk}</td>
              <td className="py-2 text-text-muted">{item.nextAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function QuestionsSlide({ content }: { content: QuestionsContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      {content.questions.map((question, index) => (
        <div key={question} className="flex items-start gap-3 border-b border-border/70 py-2">
          <span className="font-display text-lg font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-base font-medium">{question}</p>
        </div>
      ))}
    </div>
  )
}

function DefinitionsSlide({ content }: { content: DefinitionsContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      {content.items.map((item) => (
        <SoftCard key={item.term} className="p-5">
          <h3 className="font-display text-2xl font-semibold text-accent">{item.term}</h3>
          <p className="mt-3 text-base text-text-muted">{item.definition}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function PhilosophySlide({ content }: { content: PhilosophyContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-3">
      {content.principles.map((principle) => (
        <SoftCard key={principle} className="flex items-center p-5 text-lg font-medium">
          {principle}
        </SoftCard>
      ))}
    </div>
  )
}

function OneOnOneSlide({ content }: { content: OneOnOneContent }) {
  return (
    <div className="flex h-full flex-col">
      <div className="grid flex-1 gap-3 md:grid-cols-5">
        {content.agenda.map((item) => (
          <SoftCard key={item.topic} className="p-4">
            <p className="font-display text-3xl font-bold text-accent">{item.minutes}</p>
            <p className="mt-1 text-xs tracking-wide text-text-dim uppercase">minutes</p>
            <p className="mt-4 text-base font-medium">{item.topic}</p>
          </SoftCard>
        ))}
      </div>
      <SoftCard className="mt-4 p-4 text-sm text-text-muted">{content.note}</SoftCard>
    </div>
  )
}

function AsksSlide({ content }: { content: AsksContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-3">
      {content.asks.map((ask, index) => (
        <SoftCard key={ask.title} className="p-5">
          <p className="font-display text-2xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{ask.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{ask.detail}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-text-muted">
            {ask.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </SoftCard>
      ))}
    </div>
  )
}

function TwoColumnSlide({ content }: { content: TwoColumnContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      <SoftCard className="p-5">
        <h3 className="font-display text-xl font-semibold text-accent">{content.leftTitle}</h3>
        <ul className="mt-4 space-y-3">
          {content.leftItems.map((item) => (
            <li key={item} className="border-b border-border/70 pb-2 text-base">
              {item}
            </li>
          ))}
        </ul>
      </SoftCard>
      <SoftCard className="p-5">
        <h3 className="font-display text-xl font-semibold">{content.rightTitle}</h3>
        <ul className="mt-4 space-y-3">
          {content.rightItems.map((item) => (
            <li key={item} className="border-b border-border/70 pb-2 text-base text-text-muted">
              {item}
            </li>
          ))}
        </ul>
      </SoftCard>
    </div>
  )
}

function PlanSlide({ content }: { content: PlanContent }) {
  return (
    <div className="grid h-full gap-3 md:grid-cols-2">
      {content.items.map((item, index) => (
        <div key={item} className="flex items-start gap-3 border-b border-border/70 py-2">
          <span className="font-display text-lg font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-lg font-medium">{item}</p>
        </div>
      ))}
    </div>
  )
}

function RisksSlide({ content }: { content: RisksContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      {content.risks.map((item) => (
        <SoftCard key={item.risk} className="p-5">
          <p className="text-[11px] font-semibold tracking-wide text-danger uppercase">Risk</p>
          <h3 className="mt-1 text-xl font-semibold">{item.risk}</h3>
          <p className="mt-3 text-[11px] font-semibold tracking-wide text-accent uppercase">
            Mitigation
          </p>
          <p className="mt-1 text-sm text-text-muted">{item.mitigation}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function ClosingSlide({ content }: { content: ClosingContent }) {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      {content.messages.map((message, index) => (
        <SoftCard key={message} className="flex items-center gap-4 p-6">
          <span className="font-display text-3xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-xl font-medium leading-snug">{message}</p>
        </SoftCard>
      ))}
    </div>
  )
}

function FeedbackSlide({ content }: { content: FeedbackContent }) {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      {content.prompts.map((prompt, index) => (
        <SoftCard key={prompt} className="flex items-center gap-5 p-6">
          <span className="font-display text-3xl font-bold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-2xl font-medium">{prompt}</p>
        </SoftCard>
      ))}
    </div>
  )
}
