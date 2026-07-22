export type SectionId =
  | 'intro'
  | 'recruitment'
  | 'roleplay'
  | 'retention'
  | 'revenue'
  | 'partnership'
  | 'close'

export interface SectionMeta {
  id: SectionId
  label: string
  allocatedMinutes: number
}

export type SlideType =
  | 'cover'
  | 'visual-hero'
  | 'thesis'
  | 'agenda'
  | 'topics-summary'
  | 'pillars'
  | 'profile'
  | 'scorecard'
  | 'candidates'
  | 'linkedin-targets'
  | 'process'
  | 'funnel'
  | 'outreach'
  | 'roleplay-prep'
  | 'stages'
  | 'pitch'
  | 'objections'
  | 'drivers'
  | 'framework'
  | 'diagnosis'
  | 'case-study'
  | 'metrics'
  | 'rhythm'
  | 'markets'
  | 'culture'
  | 'weekday'
  | 'dashboard'
  | 'meddpicc'
  | 'questions'
  | 'definitions'
  | 'philosophy'
  | 'one-on-one'
  | 'asks'
  | 'two-column'
  | 'plan'
  | 'risks'
  | 'closing'
  | 'feedback'

export interface PresenterNote {
  opening: string
  coreMessage: string
  supportingExample: string
  executiveImplication: string
  likelyQuestion: string
  transition: string
}

export interface SlideBase {
  id: string
  number: number
  section: SectionId
  type: SlideType
  title: string
  headline?: string
  takeaway: string
  recommendedMinutes: number
}

export interface CoverContent {
  title: string
  subtitle: string
}

export interface VisualHeroContent {
  image: string
  eyebrow?: string
  title?: string
  subtitle?: string
  points?: string[]
  /** Oversized display title for short hero words like "How?" */
  titleSize?: 'default' | 'display'
}

export interface ThesisContent {
  convictions: string[]
}

export interface AgendaContent {
  items: { label: string; minutes: number }[]
}

export interface TopicsSummaryItem {
  title: string
  subtitle: string
  description: string
  focuses: string[]
  minutes: number
}

export interface TopicsSummaryContent {
  topics: TopicsSummaryItem[]
}

export interface PillarsContent {
  pillars: { title: string; description: string }[]
}

export interface ProfileCriterion {
  title: string
  detail: string
  image?: string
}

export interface ProfileContent {
  criteria: ProfileCriterion[]
}

export interface ScorecardCriterion {
  criterion: string
  weight: number
  score: number | null
  evidence: string
  risk: string
}

export interface ScorecardContent {
  criteria: ScorecardCriterion[]
  totalLabel: string
}

export interface Candidate {
  id: string
  fullName: string
  currentCompany: string
  currentRole: string
  country: string
  whyThisPerson: string
  relevantTrackRecord: string
  potentialRisk: string
  relationshipStatus: string
  overallFitScore: number | null
}

export interface ProcessContent {
  steps: string[]
}

export interface FunnelContent {
  disclaimer: string
  stages: { label: string; count: number }[]
}

export interface OutreachContent {
  message: string
}

export interface RoleplayPrepContent {
  background: string
  currentSituation: string
  likelyMotivations: string
  likelyConcerns: string
  careerAmbitions: string
  callObjective: string
  questionsToExplore: string[]
  desiredNextStep: string
}

export interface StagesContent {
  stages: { step: number; title: string; detail: string }[]
}

export interface PitchContent {
  points: { label: string; detail: string }[]
}

export interface ObjectionItem {
  objection: string
  response: string
}

export interface ObjectionsContent {
  items: ObjectionItem[]
}

export interface DriversContent {
  drivers: { title: string; detail?: string; image?: string; bullets?: string[] }[]
}

export interface FrameworkContent {
  steps: { title: string; detail: string }[]
}

export interface DiagnosisDimension {
  dimension: string
  question: string
  evidence: string
  action: string
}

export interface DiagnosisContent {
  dimensions: DiagnosisDimension[]
}

export interface CoachingCase {
  id: string
  situation: string
  initialPerformance: string
  diagnosis: string
  coachingPlan: string
  actionsTaken: string
  businessResult: string
  behaviouralImprovement: string
  lessonsLearned: string
}

export interface MetricsContent {
  leading: string[]
  lagging: string[]
}

export interface RhythmContent {
  cadence: { title: string; detail: string }[]
}

export interface MarketCard {
  id: string
  country: string
  marketMaturity: string
  prioritySegments: string
  strategicAccounts: string
  hiringPriority: string
  partnerOpportunity: string
  keyRisk: string
  nextAction: string
}

export interface CultureContent {
  principles: string[]
}

export interface WeekdayContent {
  days: { day: string; focus: string }[]
}

export interface DashboardMetric {
  label: string
  value: string
  status: 'good' | 'watch' | 'risk' | 'neutral'
  note?: string
}

export interface DashboardContent {
  disclaimer?: string
  metrics: DashboardMetric[]
}

export interface MeddpiccItem {
  category: string
  status: string
  evidence: string
  risk: string
  nextAction: string
}

export interface MeddpiccContent {
  items: MeddpiccItem[]
}

export interface QuestionsContent {
  questions: string[]
}

export interface DefinitionsContent {
  items: { term: string; definition: string }[]
}

export interface PhilosophyContent {
  principles: string[]
}

export interface OneOnOneContent {
  agenda: { minutes: number; topic: string }[]
  note: string
}

export interface AsksContent {
  asks: { title: string; detail: string; bullets: string[] }[]
}

export interface TwoColumnContent {
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
}

export interface PlanContent {
  items: string[]
}

export interface RisksContent {
  risks: { risk: string; mitigation: string }[]
}

export interface ClosingContent {
  messages: string[]
}

export interface FeedbackContent {
  prompts: string[]
}

export interface LinkedInTargetsContent {
  profiles: {
    id: string
    fullName: string
    currentRole: string
    currentCompany: string
    country: string
    linkedinUrl: string
    signal: string
    photo?: string
  }[]
}

export type SlideContent =
  | CoverContent
  | VisualHeroContent
  | ThesisContent
  | AgendaContent
  | TopicsSummaryContent
  | PillarsContent
  | ProfileContent
  | ScorecardContent
  | { candidates: Candidate[] }
  | LinkedInTargetsContent
  | ProcessContent
  | FunnelContent
  | OutreachContent
  | RoleplayPrepContent
  | StagesContent
  | PitchContent
  | ObjectionsContent
  | DriversContent
  | FrameworkContent
  | DiagnosisContent
  | { caseStudy: CoachingCase }
  | MetricsContent
  | RhythmContent
  | { markets: MarketCard[] }
  | CultureContent
  | WeekdayContent
  | DashboardContent
  | MeddpiccContent
  | QuestionsContent
  | DefinitionsContent
  | PhilosophyContent
  | OneOnOneContent
  | AsksContent
  | TwoColumnContent
  | PlanContent
  | RisksContent
  | ClosingContent
  | FeedbackContent

export interface Slide extends SlideBase {
  content: SlideContent
}
