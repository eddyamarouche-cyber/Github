export type SlideKind =
  | 'cover'
  | 'focus'
  | 'planning'
  | 'verticals'
  | 'gtm'
  | 'expand'
  | 'account'
  | 'why'
  | 'roadmap'

export interface DeepDiveBlock {
  title: string
  stats?: { value: string; label: string }[]
  points: string[]
}

export interface DeepDiveSource {
  label: string
  href: string
}

export interface VerticalDeepDive {
  headline: string
  whyLabel: string
  blocks: DeepDiveBlock[]
  closer: string
  sources?: DeepDiveSource[]
}

export interface VerticalRow {
  id: string
  name: string
  whyNow: string
  opportunities: string
  image: string
  imageAlt: string
  deepDive?: VerticalDeepDive
}

export interface PlanningElement {
  id: string
  title: string
  lead?: string
  points?: string[]
}

export interface FocusPhase {
  id: string
  period: string
  verb: string
  summary: string
  image: string
  imageAlt: string
  points: string[]
}

export interface PipelineSlice {
  label: string
  share: string
}

export interface ExpandPhase {
  phase: string
  product: string
  outcome: string
  image: string
  imageAlt: string
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
  planningElements?: PlanningElement[]
  focusPhases?: FocusPhase[]
  fitItems?: string[]
  opportunities?: string[]
  buyers?: string[]
  valueItems?: string[]
  experience?: string[]
  bring?: string[]
  vision?: string
  image?: string
  imageAlt?: string
}

export const presenter = {
  name: 'Ed AMA',
  email: 'eddyamarouche@gmail.com',
  company: 'Anthropic',
  role: 'Italy GTM — Enterprise',
}

export const slides: Slide[] = [
  {
    id: 'cover',
    kind: 'cover',
    eyebrow: 'Interview preparation',
    title: 'Anthropic interviews',
    lead: '5th and 6th August 2026',
    quote: 'Trusted AI · Safety · Enterprise',
    image: '/images/cover-safety.jpg',
    imageAlt: 'Padlock and digital security — AI safety and trust',
  },
  {
    id: 'focus',
    kind: 'focus',
    eyebrow: 'Italy GTM Strategy',
    title: 'Where I Would Focus',
    lead: 'Position Anthropic as the trusted Enterprise AI platform for Italy’s largest enterprises.',
    quote: 'Trusted AI + Enterprise Security + Governance + Business Value',
    image: '/images/hero-milan.jpg',
    imageAlt: 'Rome Colosseum at dusk — Italy market backdrop',
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
        id: 'financial-services',
        name: 'Financial Services',
        whyNow: 'Cloud modernization, AI investments, regulation',
        opportunities: 'Engineering productivity, Compliance, Knowledge Management',
        image: '/images/vertical-finance.jpg',
        imageAlt: 'Modern financial district skyline',
        deepDive: {
          headline: "Why Banking is Anthropic's #1 Opportunity in Italy",
          whyLabel: 'Why now?',
          blocks: [
            {
              title: "One of Europe's largest banking markets",
              stats: [
                { value: 'Top 3', label: 'in Europe' },
                { value: '€4T+', label: 'assets' },
              ],
              points: [
                'Major institutions: UniCredit, Intesa Sanpaolo, Banco BPM, MPS',
              ],
            },
            {
              title: 'Investment cycle has started',
              points: [
                'Record profitability',
                'Multi-billion € cloud & AI investments',
                'Cloud modernization accelerating',
                'Still early: most initiatives remain at POC / pilot stage',
              ],
            },
          ],
          closer:
            'Perfect timing to establish Anthropic as the trusted Enterprise AI platform',
          sources: [
            {
              label:
                'Reuters — Italian banks must invest more in technology, central bank says',
              href: 'https://www.reuters.com/world/europe/italian-banks-must-invest-more-technology-central-bank-says-2024-05-31/',
            },
            {
              label:
                'UniCredit — Partnership with Google Cloud to accelerate digital transformation',
              href: 'https://www.unicreditgroup.eu/it/press-media/press-releases/2025/may/unicredit-partners-with-google-cloud-to-accelerate-digital-trans.html',
            },
            {
              label:
                'Intesa Sanpaolo — Cloud core banking on Google Cloud regions in Italy',
              href: 'https://group.intesasanpaolo.com/it/newsroom/comunicati-stampa/2026/07/intesa-sanpaolo-cloud-core-banking',
            },
          ],
        },
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing',
        whyNow: 'Largest industrial economy after Germany, fragmented knowledge',
        opportunities: 'Engineering Copilot, Documentation, Procurement',
        image: '/images/vertical-manufacturing.jpg',
        imageAlt: 'Industrial manufacturing floor',
        deepDive: {
          headline: "Why It's Anthropic's #2 Opportunity in Italy",
          whyLabel: 'Why now?',
          blocks: [
            {
              title: "Europe's second-largest manufacturing economy",
              stats: [
                { value: '16%', label: "of Italy's GDP" },
                { value: '4M', label: 'employees' },
              ],
              points: [
                'Global leaders: CNH, Iveco, Stellantis, Leonardo, Ferrari, Brembo, Prysmian',
              ],
            },
            {
              title: 'AI adoption is accelerating',
              stats: [
                { value: '50%', label: "of Italy's R&D investment" },
                { value: '$1.8B', label: 'AI market (+50% YoY)' },
              ],
              points: [
                '71% of large manufacturers already have active AI initiatives',
              ],
            },
            {
              title: 'Regulation favors trusted AI',
              points: [
                'Italy was the first EU country to align national legislation with the EU AI Act',
                'Strong focus on governance, cybersecurity and compliance',
              ],
            },
          ],
          closer:
            'Manufacturers are moving from digital transformation to enterprise AI adoption.',
          sources: [
            {
              label:
                'Rome Business School — Italy AI market 2030: industrial districts & leadership',
              href: 'https://romebusinessschool.com/blog/italy-ai-market-2030-industrial-districts-leadership/',
            },
          ],
        },
      },
      {
        id: 'energy',
        name: 'Energy & Utilities',
        whyNow: 'Massive infrastructure investments, aging workforce',
        opportunities: 'Knowledge Assistant, Field Operations, Compliance',
        image: '/images/vertical-energy.jpg',
        imageAlt: 'Energy infrastructure and power lines',
        deepDive: {
          headline: "Why It's Anthropic's #3 Opportunity in Italy",
          whyLabel: 'Why now?',
          blocks: [
            {
              title: 'A strategic sector undergoing massive transformation',
              points: [
                "Italy is one of Europe's largest energy markets",
                'Significant investments in renewables, grid modernization and energy transition',
                'National Energy & Climate Plan driving investment over the next five years',
              ],
            },
            {
              title: 'Strong AI and technology investment',
              stats: [
                { value: '$400M', label: 'AI market 2024' },
                { value: '$1.7B', label: 'projected by 2030' },
              ],
              points: [
                'Enel – ~$1B annual technology & AI investment',
                'Eni – ~$500M annual technology & AI investment',
                'Tier 1 targets: Enel, Eni',
                'Tier 2: Snam, Terna, A2A, Hera',
              ],
            },
          ],
          closer: 'AI is becoming the strategic enabler of the energy transition.',
          sources: [
            {
              label: 'IEA — Italy country profile',
              href: 'https://www.iea.org/countries/italy',
            },
            {
              label: 'MASE — Ministero dell’Ambiente e della Sicurezza Energetica',
              href: 'https://www.mase.gov.it/portale/home',
            },
          ],
        },
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
    id: 'account-planning',
    kind: 'planning',
    eyebrow: 'Enterprise motion',
    title: 'Account Planning',
    lead: 'A structured path from account strategy to measurable Anthropic value.',
    image: '/images/planning-strategy.jpg',
    imageAlt: 'Strategy workshop and business planning session',
    planningElements: [
      {
        id: 'business-strategy',
        title: 'Business strategy',
      },
      {
        id: 'executive-priorities',
        title: 'Executive priorities',
      },
      {
        id: 'business-initiatives',
        title: 'Business initiatives',
      },
      {
        id: 'multi-champions',
        title: 'Multi Champions',
      },
    ],
  },
  {
    id: 'gtm',
    kind: 'gtm',
    eyebrow: 'Go-To-Market',
    title: 'Target the right accounts—not the most accounts',
    lead: 'Win with Tier 1 enterprises through CEO / CIO / CTO engagement and business-value conversations.',
    image: '/images/gtm-network.jpg',
    imageAlt: 'Executive boardroom ready for high-stakes meetings',
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
        image: '/images/expand-code.jpg',
        imageAlt: 'Software engineering workstation',
      },
      {
        phase: 'Phase 2',
        product: 'Claude Enterprise',
        outcome: 'Enterprise Knowledge Assistant',
        image: '/images/expand-knowledge.jpg',
        imageAlt: 'Teams collaborating over enterprise knowledge',
      },
      {
        phase: 'Phase 3',
        product: 'Trusted AI Platform',
        outcome: 'Compliance, Risk and Enterprise AI Agents',
        image: '/images/expand-platform.jpg',
        imageAlt: 'Secure enterprise data infrastructure',
      },
    ],
  },
  {
    id: 'account',
    kind: 'account',
    eyebrow: 'Example Account',
    title: 'UniCredit',
    lead: 'A flagship financial-services account investing heavily in AI, cloud modernization, and engineering productivity.',
    image: '/images/account-milan.jpg',
    imageAlt: 'Modern European financial towers',
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
    image: '/images/close-italy.jpg',
    imageAlt: 'Italian coastal towns along the cliffs',
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
  {
    id: 'where-to-focus',
    kind: 'roadmap',
    eyebrow: '90-day plan',
    title: 'Where to Focus',
    lead: 'Learn fast, validate the vertical thesis, then execute for flagship wins.',
    image: '/images/where-focus.jpg',
    imageAlt: 'Executive focus and decisive leadership',
    focusPhases: [
      {
        id: 'learn-30',
        period: 'First 30 days',
        verb: 'LEARN',
        summary: 'Why customers choose Anthropic — and where deals stall.',
        image: '/images/expand-knowledge.jpg',
        imageAlt: 'Teams learning and collaborating',
        points: [
          'Why customers choose Anthropic',
          'Why opportunities are lost or not moving quickly enough',
          'Where Claude consistently creates differentiated value',
        ],
      },
      {
        id: 'validate-60',
        period: '30–60 days',
        verb: 'VALIDATE',
        summary: 'Pressure-test vertical assumptions against Anthropic’s top accounts.',
        image: '/images/vertical-finance.jpg',
        imageAlt: 'Enterprise skyline representing target accounts',
        points: [
          'Validate assumptions on top verticals',
          'Anthropic top accounts: large enterprise spend',
          'Complex knowledge work',
          'Engineering-heavy organizations',
          'Regulatory pressure',
        ],
      },
      {
        id: 'execute-90',
        period: 'Days 60–90',
        verb: 'EXECUTE',
        summary: 'Turn learning into flagship customers and repeatable plays.',
        image: '/images/account-milan.jpg',
        imageAlt: 'Modern enterprise towers for flagship execution',
        points: [
          'Building flagship customers',
          'Creating executive relationships',
          'Generating repeatable sales plays',
          'Partnering closely with hyperscalers and consulting firms',
        ],
      },
    ],
  },
  {
    id: 'deal',
    kind: 'planning',
    eyebrow: 'Opportunity',
    title: 'Deal',
    lead: 'From qualified opportunity to closed enterprise value.',
    image: '/images/deal.jpg',
    imageAlt: 'Deal analysis and business performance dashboard',
    planningElements: [],
  },
  {
    id: 'deal-review',
    kind: 'planning',
    eyebrow: 'Pipeline discipline',
    title: 'Deal Review',
    lead: 'Inspect opportunities with facts — qualify, advance, or exit with clarity.',
    image: '/images/deal-review.jpg',
    imageAlt: 'Leadership team reviewing deals and pipeline in a meeting',
    planningElements: [],
  },
]
