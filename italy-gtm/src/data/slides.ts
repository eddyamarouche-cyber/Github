export type SlideKind =
  | 'focus'
  | 'verticals'
  | 'gtm'
  | 'expand'
  | 'account'
  | 'why'

export interface VerticalRow {
  name: string
  whyNow: string
  opportunities: string
}

export interface PipelineSlice {
  label: string
  share: string
}

export interface ExpandPhase {
  phase: string
  product: string
  outcome: string
}

export interface Slide {
  id: string
  kind: SlideKind
  eyebrow?: string
  title: string
  lead?: string
  quote?: string
  points?: string[]
  verticals?: VerticalRow[]
  painPoints?: string[]
  focusItems?: string[]
  pipeline?: PipelineSlice[]
  multipliers?: string[]
  phases?: ExpandPhase[]
  fitItems?: string[]
  opportunities?: string[]
  buyers?: string[]
  valueItems?: string[]
  experience?: string[]
  bring?: string[]
  vision?: string
}

export const presenter = {
  name: 'Ed AMA',
  email: 'eddyamarouche@gmail.com',
  company: 'Anthropic',
  role: 'Italy GTM — Enterprise',
}

export const slides: Slide[] = [
  {
    id: 'focus',
    kind: 'focus',
    eyebrow: 'Italy GTM Strategy',
    title: 'Where I Would Focus',
    lead: 'Position Anthropic as the trusted Enterprise AI platform for Italy’s largest enterprises.',
    quote: 'Trusted AI + Enterprise Security + Governance + Business Value',
    points: [
      'Large enterprises concentrated in a few strategic industries',
      'AI adoption accelerating under productivity pressure',
      'EU AI Act increases demand for trusted AI',
      'Executive sponsorship becoming critical',
    ],
    focusItems: ['Financial Services', 'Manufacturing', 'Energy & Utilities'],
  },
  {
    id: 'verticals',
    kind: 'verticals',
    eyebrow: 'Priority Verticals',
    title: 'Business Opportunities',
    lead: 'Three industries where trusted AI and enterprise readiness meet urgent demand.',
    verticals: [
      {
        name: 'Financial Services',
        whyNow: 'Cloud modernization, AI investments, regulation',
        opportunities: 'Engineering productivity, Compliance, Knowledge Management',
      },
      {
        name: 'Manufacturing',
        whyNow: 'Largest industrial economy after Germany, fragmented knowledge',
        opportunities: 'Engineering Copilot, Documentation, Procurement',
      },
      {
        name: 'Energy & Utilities',
        whyNow: 'Massive infrastructure investments, aging workforce',
        opportunities: 'Knowledge Assistant, Field Operations, Compliance',
      },
    ],
    painPoints: [
      'Productivity',
      'Legacy systems',
      'Knowledge management',
      'Regulatory compliance',
      'Software engineering efficiency',
    ],
  },
  {
    id: 'gtm',
    kind: 'gtm',
    eyebrow: 'Go-To-Market',
    title: 'Target the right accounts—not the most accounts',
    lead: 'Win with Tier 1 enterprises through CEO / CIO / CTO engagement and business-value conversations.',
    focusItems: [
      'Tier 1 enterprises',
      'CEO / CIO / CTO engagement',
      'Business value conversations',
    ],
    pipeline: [
      { label: 'Existing network', share: '30%' },
      { label: 'Strategic partners', share: '30%' },
      { label: 'Executive outbound', share: '20%' },
      { label: 'Events & thought leadership', share: '20%' },
    ],
    multipliers: [
      'Consulting partners',
      'Hyperscalers',
      'Customer references',
      'Executive workshops',
    ],
  },
  {
    id: 'expand',
    kind: 'expand',
    eyebrow: 'Land & Expand',
    title: 'From one use case to enterprise-wide adoption',
    lead: 'Start where ROI is measurable, then expand into the trusted AI platform.',
    phases: [
      {
        phase: 'Phase 1',
        product: 'Claude Code',
        outcome: 'Deliver measurable Engineering Productivity ROI',
      },
      {
        phase: 'Phase 2',
        product: 'Claude Enterprise',
        outcome: 'Enterprise Knowledge Assistant',
      },
      {
        phase: 'Phase 3',
        product: 'Trusted AI Platform',
        outcome: 'Compliance, Risk and Enterprise AI Agents',
      },
    ],
  },
  {
    id: 'account',
    kind: 'account',
    eyebrow: 'Example Account',
    title: 'UniCredit',
    lead: 'A flagship financial-services account investing heavily in AI, cloud modernization, and engineering productivity.',
    fitItems: [
      'AI investment agenda',
      'Cloud modernization',
      'Digital transformation',
      'Engineering productivity',
    ],
    opportunities: ['Claude Code', 'Enterprise Knowledge', 'Compliance Copilot'],
    buyers: ['CIO', 'CTO', 'Chief Risk Officer', 'Chief Compliance Officer'],
    valueItems: [
      'Faster software delivery',
      'Reduced compliance effort',
      'Better knowledge access',
      'Higher employee productivity',
    ],
  },
  {
    id: 'why',
    kind: 'why',
    eyebrow: 'Why Me',
    title: 'Ready to open Italy for Anthropic',
    lead: 'Enterprise sales execution, executive relationships, and a partner-led motion that scales.',
    experience: [
      'Built Databricks in France and Italy',
      'Opened strategic enterprise accounts',
      'Closed multiple multi-million euro deals',
      'Experience launching new GTM motions',
    ],
    bring: [
      'Enterprise sales execution',
      'Executive relationships',
      'Partner ecosystem',
      'AI business transformation expertise',
    ],
    vision:
      'Win a few flagship customers, create measurable business value, then scale trusted AI across Italy’s largest enterprises.',
  },
]
