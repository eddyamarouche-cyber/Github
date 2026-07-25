import { candidates } from './candidates'
import { linkedinTargets, linkedinTargetsSpain } from './linkedinTargets'
import { coachingCases } from './coachingCases'
import { markets } from './markets'
import { pierreFabrePortfolio } from './pierreFabre'
import type { SectionMeta, Slide } from './types'

export const TOTAL_SESSION_MINUTES = 90

export const sections: SectionMeta[] = [
  { id: 'intro', label: 'Introduction & Leadership Principles', allocatedMinutes: 5 },
  { id: 'recruitment', label: 'Recruitment', allocatedMinutes: 25 },
  { id: 'roleplay', label: 'Candidate Role Play', allocatedMinutes: 15 },
  { id: 'retention', label: 'Retention & Coaching', allocatedMinutes: 15 },
  { id: 'revenue', label: 'Revenue Leadership', allocatedMinutes: 20 },
  { id: 'partnership', label: 'Leadership Asks & 90-Day Plan', allocatedMinutes: 5 },
  { id: 'close', label: 'Feedback & Close', allocatedMinutes: 2 },
]

export const slides: Slide[] = [
  {
    id: 'cover',
    number: 1,
    section: 'intro',
    type: 'cover',
    title: 'Cover',
    takeaway:
      'Set the leadership frame before entering recruitment, retention, revenue and partnership.',
    recommendedMinutes: 0.5,
    content: {
      title: 'Regional Leader Italy - Iberia',
      subtitle: 'Leader Challenge — Regional Director, Southern Europe',
    },
  },
  {
    id: 'challenge-brief',
    number: 2,
    section: 'intro',
    type: 'challenge-brief',
    title: 'Leader Challenge',
    takeaway:
      'Ninety minutes across Recruitment, Retention, Revenue, leadership asks — then feedback and close.',
    recommendedMinutes: 1,
    content: {
      brandTitle: 'Leader Challenge',
      planPoints: [
        'Plan to lead a 90 minute meeting',
        'Goal is to present on each topic',
        'Add whatever slides you need to address each topic',
      ],
      prepLabel: 'Cursor Prep for Challenge',
      prepUrl:
        'https://www.notion.so/cursorai/Updated-2026-Cursor-GTM-Discovery-Deal-Review-Interview-Prep-322da74ef045808ea580c7f90c99d946',
      topics: [
        {
          label: 'TOPIC 1: Recruitment',
          items: [
            'Describe what makes someone a top potential candidate (Profile of an "A" player)',
            'Identity first 5 Candidates you would bring to Cursor.',
            'What is your approach for finding top candidates?',
            'Select one of your target candidates (from the 5 you identified) and role play an initial call with the candidate, including the way you would position and "sell" the opportunity to join Cursor (market opportunity, why Cursor, career opportunity)',
          ],
        },
        {
          label: 'TOPIC 2: Retention',
          items: [
            'Describe your approach to coaching & development',
            'Walk through examples: Showcase how you diagnose and how you have worked with someone to make them better?',
            'How did you measure improvement?',
          ],
        },
        {
          label: 'TOPIC 3: Revenue',
          items: [
            'Describe your approach for building a culture of consistent pipeline generation',
            'How do you inspect/qualify opportunities and evaluate Pipeline Health to ensure forecast accuracy?',
            'How do you run and use effective 1:1’s?',
          ],
        },
        {
          label: 'TOPIC 4:',
          items: [
            'What are THREE things you need from Cursor leadership to be successful.',
          ],
        },
      ],
      closeLabel: 'Feedback & Close',
    },
  },
  {
    id: 'session-summary',
    number: 3,
    section: 'intro',
    type: 'topics-summary',
    title: 'Session Summary',
    headline: 'Three engines that make Italy–Iberia compound.',
    takeaway:
      'Everything that follows lands in three working topics: Recruitment, Retention and Revenue.',
    recommendedMinutes: 1,
    content: {
      topics: [
        {
          title: 'Recruitment',
          subtitle: 'Raise the bar',
          description: '',
          focuses: ['A Player', 'First 5', 'How?', 'Role play'],
          minutes: 25,
        },
        {
          title: 'Retention',
          subtitle: 'Grow the team',
          description: '',
          focuses: ['The approach', 'Call to action', 'Monitoring'],
          minutes: 15,
        },
        {
          title: 'Revenue',
          subtitle: 'Run the business',
          description: '',
          focuses: ['Pipeline discipline', 'Deal inspection', 'Forecast accuracy'],
          minutes: 20,
        },
      ],
    },
  },
  {
    id: 'personal-side',
    number: 4,
    section: 'intro',
    type: 'visual-hero',
    title: 'Beyond the job',
    takeaway:
      'Husband, father of two, multicultural — grounded by kickboxing, football and cooking.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/personal-life.jpg',
      eyebrow: 'Personal',
      title: 'Beyond the job',
      points: [
        'Married',
        '2 kids',
        'Multicultural',
        'Kickboxing',
        'Football',
        'Cooking',
      ],
    },
  },
  {
    id: 'who-i-am-as-a-leader',
    number: 5,
    section: 'intro',
    type: 'drivers',
    title: 'Why am I here?',
    headline: 'Build. Lead. Sell. Scale — the operating path from early Europe to Sales Director Italy.',
    takeaway:
      'A builder who created demand from zero, won strategic enterprise deals, and scaled a repeatable Italian GTM engine.',
    recommendedMinutes: 2,
    content: {
      eyebrow: 'Why I am here',
      layout: 'columns',
      drivers: [
        {
          title: 'BUILD',
          bullets: [
            'Joined Databricks at an early stage of the European journey',
            'Account Executive → Strategic Accounts → Sales Director Italy',
            '7 years building French and Italian business from the ground up',
          ],
        },
        {
          title: 'LEAD',
          bullets: [
            'Create demand & pipeline from zero',
            'Land strategic enterprise accounts',
            '5 times President Club',
          ],
        },
        {
          title: 'SELL',
          bullets: [
            'Win complex, strategic enterprise deals',
            '50K$ → 11M$ ARR — business value outcome',
          ],
          highlights: [
            'Stellantis',
            'Michelin',
            'Danone',
            'Sanofi',
            'CNH',
            'Iveco',
            'Prada',
            'Fastweb',
            'Barilla',
            'Kiko',
          ],
        },
        {
          title: 'SCALE',
          bullets: [
            'Initial land to long-term strategic growth',
            'Repeatable GTM engine',
            '20+ recruitments in Italy',
          ],
        },
      ],
    },
  },
  {
    id: 'leadership-principles',
    number: 6,
    section: 'intro',
    type: 'visual-hero',
    title: 'My leadership principles',
    takeaway:
      'Leadership starts by going first — set the standard in public, then ask the team to follow.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/leadership-by-example.jpg',
      title: 'My leadership principles',
      subtitle: 'Lead by example.',
    },
  },
  {
    id: 'win-the-stage',
    number: 7,
    section: 'intro',
    type: 'visual-hero',
    title: 'Win the Stage',
    takeaway:
      'Make Cursor THE Number 1 SDLC Platform in Italy and Iberia — land the must-win accounts in the next 12 months.',
    recommendedMinutes: 1,
    content: {
      image: '/images/win-the-stage.jpg',
      eyebrow: 'The objective',
      title: 'Win the stage',
      subtitle:
        'Make Cursor THE Number 1 SDLC Platform in Italy and Iberia',
      chipsLabel: 'Must-win accounts in the next 12 months',
      logos: [
        { name: 'BBVA', src: '/images/must-win/bbva.png' },
        { name: 'Bending Spoons', src: '/images/must-win/bending-spoons.png' },
        { name: 'Unicredit', src: '/images/must-win/unicredit.png' },
        { name: 'Santander', src: '/images/must-win/santander.png' },
        { name: 'Amadeus', src: '/images/must-win/amadeus.png' },
        { name: 'Telefonica', src: '/images/must-win/telefonica.png' },
        { name: 'Fastweb', src: '/images/must-win/fastweb.png' },
        { name: 'Vodafone', src: '/images/must-win/vodafone.png' },
        { name: 'Indra', src: '/images/must-win/indra.png' },
        { name: 'Engineering', src: '/images/must-win/engineering.png' },
        { name: 'Nexi', src: '/images/must-win/nexi.png' },
        { name: 'Telecom Italia', src: '/images/must-win/telecom-italia.png' },
        { name: 'Reply', src: '/images/must-win/reply.png' },
        { name: 'Inditex', src: '/images/must-win/inditex.png' },
        { name: 'Odigeo', src: '/images/must-win/odigeo.png' },
        { name: 'Adevinta', src: '/images/must-win/adevinta.png' },
      ],
    },
  },
  {
    id: 'spanish-team-trophies',
    number: 8,
    section: 'intro',
    type: 'visual-hero',
    title: 'One Team',
    takeaway:
      'One team — no top guns, no rock stars, no divas. Shared pressure, shared joy, one standard.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/spanish-team-trophies.jpg',
      title: 'One team',
      subtitle: 'No top guns, no rock stars or diva',
    },
  },
  {
    id: 'leadership-standard',
    number: 9,
    section: 'intro',
    type: 'visual-hero',
    title: 'The Standard',
    takeaway:
      'High performance starts with an elite standard before any operating system.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/leadership-standard.jpg',
      eyebrow: 'Leadership mindset',
      title: 'Operate to an elite standard',
      subtitle:
        'Persistency. Heart. Desire. The same principles that win under pressure apply to building a region.',
      points: ['Persistency', 'Heart', 'Desire'],
    },
  },
  {
    id: 'wild-geese',
    number: 10,
    section: 'intro',
    type: 'visual-hero',
    title: 'One Direction',
    takeaway: 'One direction, just doers — shared purpose and collective lift, not individual heroics.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/fellow-miners.jpg',
      title: 'One direction',
      subtitle: 'Just doers',
    },
  },

  {
    id: 'recruitment-opener',
    number: 11,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'Recruitment',
    takeaway:
      'Recruitment is the discipline of finding the one exceptional profile in a sea of average options.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/recruitment-right-choice.jpg',
      title: 'Recruitment',
      subtitle: 'Make the right decision.',
    },
  },
  {
    id: 'a-player-profile',
    number: 12,
    section: 'recruitment',
    type: 'profile',
    title: 'A Player Profile',
    headline: 'Character filters and cognitive filters — both are non-negotiable.',
    takeaway:
      'Hire builders with clock speed and resilience — patriots who learn in the struggle and own outcomes.',
    recommendedMinutes: 3,
    content: {
      criteria: [
        {
          title: 'Clock speed',
          detail:
            'Think and decide fast. High processing speed under ambiguity turns into better prioritization, sharper discovery and cleaner execution.',
          image: '/images/ap-clock-speed.jpg',
        },
        {
          title: 'Learning happens in the struggle.',
          detail:
            'Trajectory matters more than pedigree. Look for people who grow through friction — steep learners who compound when it gets hard.',
          image: '/images/ap-slope.jpg',
        },
        {
          title: 'Resilient',
          detail:
            'Ask how they responded when they got hit hard — lost a deal, missed a quarter, got rejected. Resilience is the filter.',
          image: '/images/ap-punched.jpg',
        },
        {
          title: 'Patriots versus Mercenaries',
          detail:
            'Look for people who join the mission, not the highest bidder. Ownership beats short-term extraction.',
          image: '/images/ap-patriots.jpg',
        },
        {
          title: 'Ownership',
          detail:
            'Prefer candidates who have built without big-brand crutches — scarce resources, real ownership, real consequence.',
          image: '/images/ap-small-org.jpg',
        },
        {
          title: 'Builder',
          detail:
            'Hire people who lay foundations — create structure, process and pipeline before they need the spotlight.',
          image: '/images/ap-foundations.jpg',
        },
      ],
    },
  },
  {
    id: 'linkedin-talent-map',
    number: 13,
    section: 'recruitment',
    type: 'linkedin-targets',
    title: 'LinkedIn Talent Map · Italy',
    headline: 'First named Italy profiles against the A-player filter.',
    takeaway:
      'Open each LinkedIn profile live — validate fit against patriots, slope, ownership and clock speed.',
    recommendedMinutes: 3,
    content: {
      regionLabel: 'Italy talent map',
      regionFlag: '/images/flags/italy.svg',
      profiles: linkedinTargets,
    },
  },
  {
    id: 'linkedin-talent-map-spain',
    number: 14,
    section: 'recruitment',
    type: 'linkedin-targets',
    title: 'LinkedIn Talent Map · Spain',
    headline: 'First named Spain / Iberia profiles against the A-player filter.',
    takeaway:
      'Open each LinkedIn profile live — validate fit against patriots, slope, ownership and clock speed.',
    recommendedMinutes: 2,
    content: {
      regionLabel: 'Spain talent map',
      regionFlag: '/images/flags/spain.svg',
      profiles: linkedinTargetsSpain,
    },
  },
  {
    id: 'how-proactivity',
    number: 15,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'How?',
    takeaway:
      'Hiring is a hunt — proactive, targeted and already in motion before the seat opens.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/how-hunting.jpg',
      title: 'How?',
      titleSize: 'display',
      subtitle:
        'Hunt before you need. Map the market, open conversations and arrive ready when the seat opens.',
    },
  },
  {
    id: 'how-subdivisions',
    number: 16,
    section: 'recruitment',
    type: 'subdivisions',
    title: 'How we hire?',
    takeaway:
      'ICP, talent map, sourcing, potential versus experience, and a structured process — in that order.',
    recommendedMinutes: 2,
    content: {
      statements: ['Being pro active', 'Best candidates are rarely applying'],
      items: [
        {
          title: 'ICP',
          theme: 'Rarity',
          detail: 'Define the rare profile worth hunting — not a broad market average.',
          image: '/images/how-icp-rarity.jpg',
        },
        {
          title: 'Talent Map',
          theme: 'Active pipeline',
          detail: 'Keep a living map of named talent already in motion.',
          image: '/images/how-talent-map-pipeline.jpg',
        },
        {
          title: 'Sourcing',
          theme: 'Multiple channels',
          detail: 'Open conversations across network, inbound, partners and direct outreach.',
          image: '/images/how-sourcing-channels.jpg',
        },
        {
          title: 'Potential vs experience',
          theme: 'Look beyond',
          detail: 'Hire slope and capacity to grow — not pedigree alone.',
          image: '/images/how-potential-look-beyond.jpg',
        },
        {
          title: 'Structured process',
          theme: 'Swiss watch precision',
          detail: 'Repeatable evaluation with the same precision every time.',
          image: '/images/how-structured-precision.jpg',
        },
      ],
    },
  },
  {
    id: 'roleplay-opener',
    number: 17,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'Role play',
    takeaway:
      'Role play the conversation where a huge opportunity meets a rare A-player — earn trust and close the next step.',
    recommendedMinutes: 1,
    content: {
      image: '/images/roleplay-opportunity.jpg',
      points: [
        'Every company is trying to turn AI into engineering output faster than their competitors',
        'Market opportunity 2 trillion $',
      ],
      pointsLayout: 'center',
      revealPointsOnClick: true,
      linkUrl:
        'https://docs.google.com/document/d/1eXZXcwJ6RkJk-LZM-_S7DXudu3VY-SihYmWD-sjiYAg/edit?tab=t.0#heading=h.6qinwgp4ub0z',
      linkLabel: 'Role play prep',
    },
  },
  {
    id: 'roleplay-proof',
    number: 18,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'Why Cursor?',
    takeaway:
      'Unique acceleration plus model agnosticity, frontier compute, compounding model advantage, and Fortune 500 adoption — proof the opportunity is real.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/unique-acceleration.jpg',
      eyebrow: 'Role play',
      title: 'Why Cursor?',
      titleSize: 'display',
      subtitle: 'Unique acceleration',
      points: [
        'Model agnosticity',
        "Frontier SpaceX / xAI's massive compute",
        'Harness better models — the compounding advantage',
        '64% of Fortune 500 companies',
      ],
      pointsLayout: 'center',
      revealPointsOnClick: true,
    },
  },
  {
    id: 'gtm-ambition',
    number: 19,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'GTM ambition',
    takeaway:
      'The best world-class GTM team in the world — experienced executives with the best track record.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/gtm-galaxy.jpg',
      eyebrow: 'Role play',
      points: [
        'What can we do with best world class GTM team in the world in the next 4 years ?',
        'Experienced executives with the best track record',
      ],
      pointsLayout: 'center',
      revealPointsOnClick: true,
    },
  },
  {
    id: 'gtm-100bn',
    number: 20,
    section: 'recruitment',
    type: 'reveal',
    title: '100Bn$',
    takeaway:
      'A $100Bn ambition — becoming the operating system for AI-native software engineering.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/gtm-galaxy.jpg',
      answerOnly: true,
      answer: '100Bn$',
      answerSubtitle:
        'Becoming the operating system for AI-native software engineering.',
      answerDelayMs: 1200,
    },
  },
  {
    id: 'retention-opener',
    number: 21,
    section: 'retention',
    type: 'visual-hero',
    title: 'Retention in summary',
    takeaway:
      'Retention in three moves — the approach, call to action, and monitoring.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/retention-growth.jpg',
      eyebrow: 'Retention',
      title: 'Retention in summary',
      titleLayout: 'header',
      points: ['The approach', 'Call to action', 'Monitoring'],
    },
  },
  {
    id: 'retention-system',
    number: 22,
    section: 'retention',
    type: 'subdivisions',
    title: 'The approach',
    headline:
      'Keep your best performers engaged and committed for long-term success.',
    takeaway:
      'Growth paths, coaching rhythm, belonging rituals and work-life boundaries — four levers that keep A-players compounding.',
    recommendedMinutes: 2,
    content: {
      eyebrow: 'Retention',
      items: [
        {
          title: 'Growth Opportunities',
          detail:
            'Provide clear advancement paths and stretch assignments that challenge top performers.',
          image: '/images/retention-growth-paths.jpg',
        },
        {
          title: 'Coaching Excellence',
          theme: 'Operating rhythm',
          detail:
            'Implement regular 1:1s with meaningful feedback and personalized development plans — built with the Enablement Team.',
          image: '/images/retention-coaching-rhythm.jpg',
        },
        {
          title: 'Culture of Belonging',
          theme: 'Team identity',
          detail:
            'Create team rituals — dinners, team events and shared moments — that turn a roster into an identity people want to stay in.',
          image: '/images/retention-team-belonging.jpg',
        },
        {
          title: 'Work-Life Integration',
          theme: 'Boundaries that last',
          detail:
            'Support flexible arrangements that respect personal boundaries — so high performance is sustainable, not extractive.',
          image: '/images/retention-work-life.jpg',
        },
      ],
    },
  },
  {
    id: 'retention-cta',
    number: 23,
    section: 'retention',
    type: 'subdivisions',
    title: 'Call to action',
    headline:
      'Move from framework to practice — role play, shadowing, and direct feedback.',
    takeaway:
      'Role play, shadowing, and direct feedback turn retention from slides into daily leadership.',
    recommendedMinutes: 1,
    content: {
      eyebrow: 'Retention',
      items: [
        {
          title: 'Role play',
          detail:
            'Rehearse the hard conversations before they happen in market.',
          image: '/images/roleplay-opportunity.jpg',
          linkUrl:
            'https://docs.google.com/document/d/1eXZXcwJ6RkJk-LZM-_S7DXudu3VY-SihYmWD-sjiYAg/edit?tab=t.0#heading=h.6qinwgp4ub0z',
          linkLabel: 'Role play prep',
        },
        {
          title: 'Shadowing',
          detail:
            'Observe top performers in real conversations and debrief what worked.',
          image: '/images/performance-coach.jpg',
        },
        {
          title: 'Direct feedback',
          detail:
            'Give clear, timely feedback so coaching is intentional — not accidental.',
          image: '/images/retention-coaching-rhythm.jpg',
        },
      ],
    },
  },
  {
    id: 'retention-monitoring',
    number: 24,
    section: 'retention',
    type: 'visual-hero',
    title: 'Monitoring',
    takeaway:
      'Monitor qualified opportunities (3 per week), PG quarter attainment % incr., time in stage, coaching-to-behavior-change, and self-sourced pipeline vs SDR sourced — the control tower signals.',
    recommendedMinutes: 1,
    content: {
      image: '/images/monitoring-control-tower.jpg',
      eyebrow: 'Retention',
      title: 'Monitoring',
      titleLayout: 'header',
      points: [
        'Increase in qualified opportunities - 3 per week',
        'PG quarter attainment % incr.',
        'Time in stage',
        'Coaching-to-behavior-change',
        'Self-sourced pipeline vs SDR sourced',
      ],
      revealPointsOnClick: true,
      table: {
        title: 'Pipe Gen QTD',
        columns: [
          'Name',
          '# U1 QTD',
          '# U2 QTD',
          '$ Pipe Gen QTD',
          '# Pipe Gen QTD',
          'Pipe Gen Target',
          'Pro-Rata Pipe Gen Attain',
          'QTD Pipe Gen ASP',
        ],
        rows: [
          {
            cells: [
              'Francesco Vitti',
              '42',
              '33',
              '$532.5k',
              '28',
              '$216.0k',
              '267%',
              '$19.0k',
            ],
            highlight: { 6: 'good' },
          },
        ],
      },
    },
  },
  {
    id: 'gap-reduction',
    number: 25,
    section: 'revenue',
    type: 'subdivisions',
    title: 'Gap reduction',
    headline: 'Compress variance and sharpen forecast accuracy.',
    takeaway:
      'Variance compression from FY24 to FY25 plus forecast accuracy — two levers that close the gap.',
    recommendedMinutes: 1,
    content: {
      eyebrow: 'Revenue',
      items: [
        {
          title: 'Variance compression',
          detail: 'Team quota attainment FY24 75 to 180% — FY25 95 to 135%',
          detailSize: 'large',
          image: '/images/gap-reduction-variance.jpg',
        },
        {
          title: 'Forecast accuracy',
          detail: 'Predictability the team can inspect, trust, and act on every week.',
          image: '/images/gap-reduction-forecast.jpg',
        },
      ],
    },
  },
  {
    id: 'revenue-opener',
    number: 26,
    section: 'revenue',
    type: 'visual-hero',
    title: 'Revenue',
    takeaway:
      'A world of opportunities — run the business with discipline, ambition, and predictability.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/revenue-opportunities.jpg',
      title: 'Revenue',
      titleSize: 'display',
      subtitle: 'A world of opportunities',
    },
  },
  {
    id: 'consistent-pipeline-generation',
    number: 27,
    section: 'revenue',
    type: 'visual-hero',
    title: 'Consistent Pipeline Generation',
    takeaway:
      'Pipeline is an identity — measured by activity volume KPIs and source mix across self-sourced, inbound, and SDR.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/consistent-pipeline-generation.jpg',
      eyebrow: 'Revenue',
      title: 'Consistent Pipeline Generation',
      titleLayout: 'header',
      points: [
        'Pipeline Generation an Identity, Not a Task',
        "KPI's : Activity volume (NBM, Activity to grow developers base..)",
        'Source mix : Self sourced vs Inbound vs SDR sourced',
      ],
      revealPointsOnClick: true,
    },
  },
  {
    id: 'operating-rhythm',
    number: 28,
    section: 'revenue',
    type: 'visual-hero',
    title: 'Operating rhythm',
    takeaway:
      'Daily discipline, weekly planning, monthly reviews, and quarterly strategy — time allocated with intent.',
    recommendedMinutes: 1,
    content: {
      image: '/images/operating-rhythm-clock.jpg',
      eyebrow: 'Revenue',
      title: 'Operating rhythm',
      titleLayout: 'header',
      points: [
        'Daily Discipline',
        'Weekly planning',
        'Monthly Reviews',
        'Quarterly Strategy',
      ],
      pointImages: ['/images/operating-rhythm-daily-discipline.jpg'],
      pointDetails: [undefined, '8 Customer meetings & preparation'],
      revealPointsOnClick: true,
    },
  },
  {
    id: 'inspection',
    number: 29,
    section: 'revenue',
    type: 'visual-hero',
    title: 'Inspection',
    takeaway:
      'Inspect what you expect — a healthy business is visible in the numbers, the pipeline, and the behaviors.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/inspection-healthy-business.jpg',
      eyebrow: 'Revenue',
      title: 'Inspection',
      titleLayout: 'header',
    },
  },
  {
    id: 'candidate-scorecard',
    number: 30,
    section: 'recruitment',
    type: 'scorecard',
    title: 'Candidate Scorecard',
    takeaway: 'Score out of 100 with weighted evidence — never hire on intuition alone.',
    recommendedMinutes: 3,
    content: {
      totalLabel: 'Weighted score / 100',
      criteria: [
        {
          criterion: 'Track record',
          weight: 15,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD MARKET ASSUMPTION]',
        },
        {
          criterion: 'Learning velocity',
          weight: 15,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[VALIDATE WITH CURSOR]',
        },
        {
          criterion: 'Enterprise selling capability',
          weight: 15,
          score: null,
          evidence: '[ADD MY RESULT]',
          risk: '[ADD MARKET ASSUMPTION]',
        },
        {
          criterion: 'Technical credibility',
          weight: 10,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[VALIDATE WITH CURSOR]',
        },
        {
          criterion: 'Executive presence',
          weight: 10,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD MARKET ASSUMPTION]',
        },
        {
          criterion: 'Territory-building ability',
          weight: 15,
          score: null,
          evidence: '[ADD MY RESULT]',
          risk: '[ADD MARKET ASSUMPTION]',
        },
        {
          criterion: 'Coachability',
          weight: 10,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[VALIDATE WITH CURSOR]',
        },
        {
          criterion: 'Cultural contribution',
          weight: 10,
          score: null,
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD MARKET ASSUMPTION]',
        },
      ],
    },
  },
  {
    id: 'first-five-candidates',
    number: 31,
    section: 'recruitment',
    type: 'candidates',
    title: 'First Five Target Candidates',
    takeaway: 'Walk in with a named talent map, not a generic hiring request.',
    recommendedMinutes: 3,
    content: { candidates },
  },
  {
    id: 'talent-mapping',
    number: 32,
    section: 'recruitment',
    type: 'process',
    title: 'Talent Mapping Strategy',
    headline: 'Hiring starts before a role is open.',
    takeaway: 'Maintain an always-on top-50 talent map for Southern Europe.',
    recommendedMinutes: 2,
    content: {
      steps: [
        'Define the scorecard',
        'Map target companies',
        'Build a top-50 talent map',
        'Activate trusted networks',
        'Run structured outreach',
        'Maintain an always-on talent pipeline',
      ],
    },
  },
  {
    id: 'sourcing-funnel',
    number: 33,
    section: 'recruitment',
    type: 'funnel',
    title: 'Candidate Sourcing Funnel',
    takeaway: 'Treat hiring conversion as a managed funnel with clear stage quality.',
    recommendedMinutes: 2,
    content: {
      disclaimer: 'Illustrative model — replace with actual assumptions.',
      stages: [
        { label: 'Mapped profiles', count: 50 },
        { label: 'Warm introductions', count: 20 },
        { label: 'Initial conversations', count: 12 },
        { label: 'Structured interviews', count: 6 },
        { label: 'Finalists', count: 3 },
        { label: 'Hire', count: 1 },
      ],
    },
  },
  {
    id: 'candidate-outreach',
    number: 34,
    section: 'recruitment',
    type: 'outreach',
    title: 'Candidate Outreach',
    takeaway: 'Personal, credible outreach sells ownership and category impact — not a job description.',
    recommendedMinutes: 2,
    content: {
      message: `Hi [Candidate Name],

I am building the early Southern Europe team at Cursor and your experience in [relevant area] stood out.

I am not reaching out because you match a job description. I am reaching out because this role could offer the opportunity to help define a category, shape a region and build something with significant long-term impact.

I would value 20 minutes to understand what you are optimizing for in your next chapter.`,
    },
  },
  {
    id: 'roleplay-profile',
    number: 35,
    section: 'roleplay',
    type: 'roleplay-prep',
    title: 'Role-Play Candidate Profile',
    takeaway: 'Enter every candidate conversation with a clear objective and next-step ask.',
    recommendedMinutes: 4,
    content: {
      background: '[ADD CANDIDATE NAME] — [ADD COMPANY], [ADD COUNTRY], relevant background.',
      currentSituation: '[ADD MY EXAMPLE] — current role, tenure and performance context.',
      likelyMotivations: '[ADD MY EXAMPLE] — ownership, category impact, career upside.',
      likelyConcerns: '[ADD MARKET ASSUMPTION] — stage risk, territory maturity, compensation.',
      careerAmbitions: '[ADD MY EXAMPLE] — what they may optimize for next.',
      callObjective: 'Qualify fit, create curiosity and secure a structured next conversation.',
      questionsToExplore: [
        'What are you optimizing for in your next chapter?',
        'Where do you create the most commercial leverage?',
        'What would make an early-stage category role compelling?',
        'Which risks matter most to you right now?',
      ],
      desiredNextStep: 'Agree a follow-up deep-dive with scorecard-based evaluation.',
    },
  },
  {
    id: 'initial-call',
    number: 36,
    section: 'roleplay',
    type: 'stages',
    title: 'Initial Candidate Call Structure',
    takeaway: 'Listen first, frame the opportunity second, and always close on a next step.',
    recommendedMinutes: 4,
    content: {
      stages: [
        { step: 1, title: 'Establish trust', detail: 'Open with intent and respect for their time.' },
        {
          step: 2,
          title: 'Understand motivations',
          detail: 'Explore what they are optimizing for now.',
        },
        {
          step: 3,
          title: 'Explore career priorities',
          detail: 'Surface ownership, impact and growth criteria.',
        },
        {
          step: 4,
          title: 'Frame the market opportunity',
          detail: 'Position AI coding as a category-defining moment.',
        },
        {
          step: 5,
          title: 'Position Cursor and the role',
          detail: 'Connect the regional mandate to their strengths.',
        },
        {
          step: 6,
          title: 'Agree on a next step',
          detail: 'Leave with a concrete follow-up and decision path.',
        },
      ],
    },
  },
  {
    id: 'selling-opportunity',
    number: 37,
    section: 'roleplay',
    type: 'pitch',
    title: 'Selling the Opportunity',
    takeaway: 'Sell the market, the company, the timing and the personal ownership — in that order.',
    recommendedMinutes: 4,
    content: {
      points: [
        {
          label: 'The market opportunity',
          detail: '[VALIDATE WITH CURSOR] — category timing and buyer urgency.',
        },
        {
          label: 'Why Cursor',
          detail: '[VALIDATE WITH CURSOR] — product strength and market momentum.',
        },
        {
          label: 'Why AI coding',
          detail: 'Developers and enterprises are rewriting how software is built.',
        },
        {
          label: 'Why Southern Europe',
          detail: 'One regional strategy with strong local execution creates durable advantage.',
        },
        {
          label: 'Why now',
          detail: 'Early movers define references, talent density and market narrative.',
        },
        {
          label: 'Why this role',
          detail: 'Ownership to build the team, system and regional growth engine.',
        },
        {
          label: 'Why this candidate',
          detail: '[ADD MY EXAMPLE] — personal fit narrative based on evidence.',
        },
      ],
    },
  },
  {
    id: 'candidate-objections',
    number: 38,
    section: 'roleplay',
    type: 'objections',
    title: 'Candidate Objections',
    takeaway: 'Treat objections as diagnostic signals — clarify the real risk before responding.',
    recommendedMinutes: 3,
    content: {
      items: [
        {
          objection: 'Cursor is still early.',
          response:
            'That is precisely where the leverage is. The role offers the opportunity to shape the market, the regional model and the team rather than inherit a mature structure.',
        },
        {
          objection: 'I already have a strong position.',
          response:
            'The question is not whether your current role is good. The question is whether it offers the same level of ownership, category impact and long-term career upside.',
        },
        {
          objection: 'The territory is not mature.',
          response:
            'That creates both risk and opportunity. The objective is not to wait for maturity, but to help create it through strong talent, customer relevance and disciplined execution.',
        },
        {
          objection: 'The risk is too high.',
          response:
            'I would want to understand which risk matters most to you: company, product, role scope, compensation or career trajectory. Each requires a different discussion.',
        },
      ],
    },
  },
  {
    id: 'retention-philosophy',
    number: 39,
    section: 'retention',
    type: 'drivers',
    title: 'Retention Philosophy',
    headline: 'Retention is the outcome of clarity, growth, trust and accountability.',
    takeaway: 'People stay where expectations, coaching, growth and fairness are visible.',
    recommendedMinutes: 2,
    content: {
      drivers: [
        {
          title: 'Clear expectations',
          detail: 'Every seller knows the standard for pipeline, quality and behaviour.',
        },
        {
          title: 'High-quality coaching',
          detail: 'Managers invest in skill development, not only inspection.',
        },
        {
          title: 'Visible career development',
          detail: 'Growth paths are discussed early and revisited consistently.',
        },
        {
          title: 'Fair accountability',
          detail: 'Performance standards are applied transparently and consistently.',
        },
      ],
    },
  },
  {
    id: 'coaching-framework',
    number: 40,
    section: 'retention',
    type: 'framework',
    title: 'Coaching Framework',
    takeaway: 'Coaching is a repeatable loop — diagnose once, reinforce until behaviour sticks.',
    recommendedMinutes: 2,
    content: {
      steps: [
        { title: 'Diagnose', detail: 'Identify the real constraint behind the gap.' },
        { title: 'Prioritize', detail: 'Choose one high-leverage behaviour to change.' },
        { title: 'Practice', detail: 'Rehearse the skill with concrete scenarios.' },
        { title: 'Apply', detail: 'Transfer the skill into live deals and calls.' },
        { title: 'Measure', detail: 'Track leading indicators of improvement.' },
        { title: 'Reinforce', detail: 'Recognize progress and lock the new standard.' },
      ],
    },
  },
  {
    id: 'performance-diagnosis',
    number: 41,
    section: 'retention',
    type: 'diagnosis',
    title: 'Performance Diagnosis',
    takeaway: 'Separate skill, will, strategy, execution, territory and management support before acting.',
    recommendedMinutes: 3,
    content: {
      dimensions: [
        {
          dimension: 'Skill',
          question: 'Can they execute the required motion if coached?',
          evidence: '[ADD MY EXAMPLE]',
          action: 'Targeted skill practice and call review.',
        },
        {
          dimension: 'Will',
          question: 'Are they motivated and accountable under clear standards?',
          evidence: '[ADD MY EXAMPLE]',
          action: 'Reset expectations and ownership agreements.',
        },
        {
          dimension: 'Strategy',
          question: 'Is the account and territory plan coherent?',
          evidence: '[ADD MARKET ASSUMPTION]',
          action: 'Rebuild account strategy and ICP focus.',
        },
        {
          dimension: 'Execution',
          question: 'Are weekly behaviours converting into pipeline and progress?',
          evidence: '[ADD MY RESULT]',
          action: 'Install a tighter operating cadence.',
        },
        {
          dimension: 'Territory conditions',
          question: 'Is the territory structurally viable?',
          evidence: '[VALIDATE WITH CURSOR]',
          action: 'Adjust coverage, segments or support.',
        },
        {
          dimension: 'Management support',
          question: 'Have we given enough coaching, access and clarity?',
          evidence: '[ADD MY EXAMPLE]',
          action: 'Increase deal support and executive access.',
        },
      ],
    },
  },
  {
    id: 'coaching-case-study',
    number: 42,
    section: 'retention',
    type: 'case-study',
    title: 'Coaching Case Study',
    takeaway: 'Show one concrete coaching arc from diagnosis to measured business result.',
    recommendedMinutes: 3,
    content: { caseStudy: coachingCases[0] },
  },
  {
    id: 'measuring-improvement',
    number: 43,
    section: 'retention',
    type: 'metrics',
    title: 'Measuring Improvement',
    takeaway: 'Coach to leading indicators; judge success on lagging commercial outcomes.',
    recommendedMinutes: 2,
    content: {
      leading: [
        'Pipeline creation',
        'Next-step quality',
        'Customer engagement quality',
        'Behavioural consistency',
      ],
      lagging: [
        'Opportunity conversion',
        'Sales-cycle duration',
        'Forecast accuracy',
        'Win rate',
        'Average deal size',
      ],
    },
  },
  {
    id: 'development-rhythm',
    number: 44,
    section: 'retention',
    type: 'rhythm',
    title: 'Development Rhythm',
    takeaway: 'Development is a system of recurring conversations, not an annual event.',
    recommendedMinutes: 3,
    content: {
      cadence: [
        { title: 'Weekly 1:1', detail: 'Person, priorities, coaching and decisions.' },
        { title: 'Deal coaching', detail: 'Inspect quality, multi-threading and next steps.' },
        { title: 'Call review', detail: 'Practice discovery, narrative and executive conversations.' },
        { title: 'Monthly development review', detail: 'Skill progress against agreed priorities.' },
        { title: 'Quarterly career conversation', detail: 'Ambition, readiness and growth path.' },
      ],
    },
  },
  {
    id: 'revenue-operating-system',
    number: 45,
    section: 'revenue',
    type: 'pillars',
    title: 'Revenue Operating System',
    headline: 'Predictability comes from operating discipline, not end-of-quarter pressure.',
    takeaway: 'Territory, pipeline, opportunity quality and forecast must operate as one system.',
    recommendedMinutes: 2,
    content: {
      pillars: [
        {
          title: 'Territory Strategy',
          description: 'Clear ICP, account focus and local execution priorities.',
        },
        {
          title: 'Pipeline Generation',
          description: 'Weekly creation habits across sellers, partners and marketing.',
        },
        {
          title: 'Opportunity Quality',
          description: 'MEDDPICC discipline and evidence-based deal inspection.',
        },
        {
          title: 'Forecast Discipline',
          description: 'Shared rules, early risk surfacing and no optimism without proof.',
        },
      ],
    },
  },
  {
    id: 'growth-thesis',
    number: 46,
    section: 'revenue',
    type: 'markets',
    title: 'Southern Europe Growth Thesis',
    takeaway: 'One regional strategy — market-by-market execution with validated assumptions.',
    recommendedMinutes: 3,
    content: { markets },
  },
  {
    id: 'pierre-fabre',
    number: 47,
    section: 'revenue',
    type: 'brand-portfolio',
    title: 'Pierre Fabre',
    takeaway:
      'A Southern Europe reference account — dermo-cosmetics brands and medical care under one French group.',
    recommendedMinutes: 1.5,
    content: pierreFabrePortfolio,
  },
  {
    id: 'pipeline-culture',
    number: 48,
    section: 'revenue',
    type: 'culture',
    title: 'Pipeline Culture',
    takeaway: 'Pipeline is a weekly habit owned by the whole go-to-market system.',
    recommendedMinutes: 2,
    content: {
      principles: [
        'Pipeline creation is a weekly habit, not a quarterly rescue exercise',
        'Every seller owns a clear account strategy',
        'Managers coach pipeline quality, not only volume',
        'Executive engagement is planned early',
        'Sales, SDR, marketing and partners operate as one system',
        'Pipeline generation is inspected consistently',
      ],
    },
  },
  {
    id: 'weekly-pipeline-cadence',
    number: 49,
    section: 'revenue',
    type: 'weekday',
    title: 'Weekly Pipeline Generation Cadence',
    takeaway: 'A simple weekly rhythm makes pipeline creation inspectable and repeatable.',
    recommendedMinutes: 2,
    content: {
      days: [
        { day: 'Monday', focus: 'Territory priorities and account focus' },
        { day: 'Tuesday', focus: 'Structured prospecting block' },
        { day: 'Wednesday', focus: 'Partner and marketing activation' },
        { day: 'Thursday', focus: 'Executive outreach and strategic account engagement' },
        { day: 'Friday', focus: 'Pipeline review, lessons learned and next commitments' },
      ],
    },
  },
  {
    id: 'pipeline-dashboard',
    number: 50,
    section: 'revenue',
    type: 'dashboard',
    title: 'Pipeline Health Dashboard',
    takeaway: 'Inspect coverage, quality, age, concentration and forecast accuracy every week.',
    recommendedMinutes: 2,
    content: {
      disclaimer: 'Example data — replace with actual assumptions.',
      metrics: [
        { label: 'Pipeline coverage', value: '3.2x', status: 'watch', note: 'Illustrative' },
        { label: 'New pipeline created', value: '[ADD]', status: 'neutral', note: 'Weekly' },
        { label: 'Stage distribution', value: 'Mixed', status: 'watch', note: 'Illustrative' },
        { label: 'Average opportunity age', value: '41 days', status: 'risk', note: 'Illustrative' },
        { label: 'Next-step quality', value: '62%', status: 'watch', note: 'Illustrative' },
        { label: 'Multi-threading', value: '1.8 contacts', status: 'risk', note: 'Illustrative' },
        { label: 'Conversion rates', value: '[ADD]', status: 'neutral' },
        { label: 'Slippage', value: '18%', status: 'risk', note: 'Illustrative' },
        { label: 'Forecast accuracy', value: '[ADD]', status: 'neutral' },
        { label: 'Pipeline concentration', value: 'Top 3 = 54%', status: 'risk', note: 'Illustrative' },
      ],
    },
  },
  {
    id: 'opportunity-qualification',
    number: 51,
    section: 'revenue',
    type: 'meddpicc',
    title: 'Opportunity Qualification',
    takeaway: 'MEDDPICC is a live evidence checklist — status, risk and next action on every deal.',
    recommendedMinutes: 2,
    content: {
      items: [
        {
          category: 'Metrics',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Economic Buyer',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Decision Criteria',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Decision Process',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Pain',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Champion',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Competition',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
        {
          category: 'Paper Process',
          status: '[VALIDATE]',
          evidence: '[ADD MY EXAMPLE]',
          risk: '[ADD]',
          nextAction: '[ADD]',
        },
      ],
    },
  },
  {
    id: 'deal-inspection',
    number: 52,
    section: 'revenue',
    type: 'questions',
    title: 'Deal Inspection',
    takeaway: 'Great deal reviews expose missing evidence and force a customer commitment.',
    recommendedMinutes: 2,
    content: {
      questions: [
        'Why does the customer need to act?',
        'Why now?',
        'What business outcome matters?',
        'Who owns that outcome?',
        'Who can stop the deal?',
        'What customer evidence do we have?',
        'What is the next customer commitment?',
        'What would cause the deal to slip?',
        'Are we multi-threaded?',
        'What have we not yet validated?',
      ],
    },
  },
  {
    id: 'forecast-categories',
    number: 53,
    section: 'revenue',
    type: 'definitions',
    title: 'Forecast Categories',
    takeaway: 'Forecast categories are evidence grades — not hope labels.',
    recommendedMinutes: 1,
    content: {
      items: [
        {
          term: 'Commit',
          definition: 'Clear customer evidence, validated process and a credible close plan.',
        },
        {
          term: 'Best Case',
          definition: 'Strong opportunity with unresolved risks.',
        },
        {
          term: 'Upside',
          definition: 'Potential deal without sufficient evidence for the current forecast.',
        },
        {
          term: 'Pipeline',
          definition: 'Early-stage opportunity requiring further qualification.',
        },
      ],
    },
  },
  {
    id: 'forecast-philosophy',
    number: 54,
    section: 'revenue',
    type: 'philosophy',
    title: 'Forecast Philosophy',
    headline: 'No surprises, no hidden risk and no optimism without evidence.',
    takeaway: 'Forecast integrity is a leadership behaviour, not a CRM hygiene task.',
    recommendedMinutes: 1,
    content: {
      principles: [
        'Evidence over optimism',
        'Customer commitments over internal activity',
        'Risks surfaced early',
        'Clear forecast rules',
        'Consistent inspection',
        'Shared accountability',
      ],
    },
  },
  {
    id: 'effective-one-on-ones',
    number: 55,
    section: 'revenue',
    type: 'one-on-one',
    title: 'Effective 1:1s',
    takeaway: 'A 1:1 is a coaching, decision-making and accountability session — not status theatre.',
    recommendedMinutes: 2,
    content: {
      agenda: [
        { minutes: 5, topic: 'Person and energy' },
        { minutes: 10, topic: 'Priorities and previous commitments' },
        { minutes: 15, topic: 'Pipeline and deal coaching' },
        { minutes: 10, topic: 'Skills and development' },
        { minutes: 5, topic: 'Decisions and next actions' },
      ],
      note: 'A 1:1 is not a status meeting. It is a coaching, decision-making and accountability session.',
    },
  },
  {
    id: 'regional-dashboard',
    number: 56,
    section: 'revenue',
    type: 'dashboard',
    title: 'Regional Director Dashboard',
    takeaway: 'One view for attainment, talent, forecast, risks and decisions required.',
    recommendedMinutes: 1,
    content: {
      disclaimer: 'Example data — replace with actual assumptions.',
      metrics: [
        { label: 'Team attainment', value: '[ADD]', status: 'neutral' },
        { label: 'Pipeline coverage', value: '[ADD]', status: 'neutral' },
        { label: 'Forecast status', value: '[ADD]', status: 'watch' },
        { label: 'Hiring progress', value: '[ADD]', status: 'watch' },
        { label: 'Retention risk', value: '[ADD]', status: 'risk' },
        { label: 'Top strategic deals', value: 'Pierre Fabre', status: 'neutral' },
        { label: 'Market risks', value: '[ADD MARKET ASSUMPTION]', status: 'watch' },
        { label: 'Leadership decisions required', value: '[VALIDATE WITH CURSOR]', status: 'risk' },
      ],
    },
  },
  {
    id: 'leadership-asks',
    number: 57,
    section: 'partnership',
    type: 'asks',
    title: 'Three Things I Need from Cursor Leadership',
    takeaway: 'Ask for clarity, access and speed — the multipliers of regional execution.',
    recommendedMinutes: 1.5,
    content: {
      asks: [
        {
          title: 'Strategic Clarity',
          detail: 'Clear priorities regarding:',
          bullets: ['ICP', 'Product direction', 'Market focus', 'Regional expectations', 'Resource allocation'],
        },
        {
          title: 'Executive Access',
          detail: 'Support for:',
          bullets: [
            'Strategic accounts',
            'Key hires',
            'Market credibility',
            'Complex customer situations',
          ],
        },
        {
          title: 'Speed of Decision-Making',
          detail: 'Fast decisions regarding:',
          bullets: ['Hiring', 'Pricing', 'Resources', 'Customer exceptions', 'Regional investments'],
        },
      ],
    },
  },
  {
    id: 'mutual-commitment',
    number: 58,
    section: 'partnership',
    type: 'two-column',
    title: 'Mutual Commitment',
    takeaway: 'Partnership is a two-way operating contract, not a one-way ask.',
    recommendedMinutes: 1,
    content: {
      leftTitle: 'What I Need from Cursor',
      leftItems: [
        'Strategic clarity',
        'Executive sponsorship',
        'Fast decisions',
        'Honest feedback',
        'Cross-functional support',
      ],
      rightTitle: 'What Cursor Can Expect from Me',
      rightItems: [
        'Transparency',
        'Accountability',
        'High talent standards',
        'Predictable execution',
        'Early escalation',
        'Strong regional ownership',
        'One-team mindset',
      ],
    },
  },
  {
    id: 'first-30-days',
    number: 59,
    section: 'partnership',
    type: 'plan',
    title: 'First 30 Days',
    headline: 'Listen, validate and establish credibility.',
    takeaway: 'Days 1–30 are for truth-seeking before scaling the system.',
    recommendedMinutes: 0.75,
    content: {
      items: [
        'Meet key leaders',
        'Validate regional assumptions',
        'Assess current talent',
        'Review pipeline and forecast',
        'Understand customer signals',
        'Align on priorities',
        'Build an initial talent map',
      ],
    },
  },
  {
    id: 'days-31-60',
    number: 60,
    section: 'partnership',
    type: 'plan',
    title: 'Days 31–60',
    headline: 'Turn insight into an operating plan.',
    takeaway: 'Install cadence, hiring motion and inspection quality by day 60.',
    recommendedMinutes: 0.75,
    content: {
      items: [
        'Finalize territory strategy',
        'Launch priority hiring',
        'Establish management cadence',
        'Build target-account plans',
        'Improve opportunity inspection',
        'Strengthen forecast quality',
        'Define cross-functional dependencies',
      ],
    },
  },
  {
    id: 'days-61-90',
    number: 61,
    section: 'partnership',
    type: 'plan',
    title: 'Days 61–90',
    headline: 'Create momentum and a repeatable regional system.',
    takeaway: 'By day 90, the region should have talent momentum and a two-quarter plan.',
    recommendedMinutes: 0.75,
    content: {
      items: [
        'Accelerate pipeline generation',
        'Close priority talent gaps',
        'Activate executive relationships',
        'Establish a regional playbook',
        'Improve forecast predictability',
        'Present the next two-quarter growth plan',
      ],
    },
  },
  {
    id: 'key-risks',
    number: 62,
    section: 'partnership',
    type: 'risks',
    title: 'Key Risks and Mitigations',
    takeaway: 'Name the risks early and pair each with an operating mitigation.',
    recommendedMinutes: 0.25,
    content: {
      risks: [
        {
          risk: 'Hiring risk',
          mitigation: 'Maintain an always-on talent map and use a structured scorecard.',
        },
        {
          risk: 'Market maturity risk',
          mitigation: 'Prioritize high-signal segments and strategic reference accounts.',
        },
        {
          risk: 'Pipeline concentration risk',
          mitigation: 'Build account diversity and inspect coverage by market and segment.',
        },
        {
          risk: 'Execution inconsistency',
          mitigation: 'Use a clear weekly operating cadence and transparent scorecards.',
        },
      ],
    },
  },
  {
    id: 'closing',
    number: 63,
    section: 'close',
    type: 'closing',
    title: 'Closing',
    headline: 'Build the team. Create the system. Scale the region.',
    takeaway: 'Talent, coaching, discipline and local leadership convert global momentum into growth.',
    recommendedMinutes: 1,
    content: {
      messages: [
        'Talent density creates leverage',
        'Coaching creates sustained performance',
        'Operating discipline creates predictability',
        'Local leadership converts global momentum into regional growth',
      ],
    },
  },
  {
    id: 'discussion-feedback',
    number: 64,
    section: 'close',
    type: 'feedback',
    title: 'Discussion and Feedback',
    headline: 'Questions, Challenges and Feedback',
    takeaway: 'Invite challenge — the best leadership conversations surface the real constraints.',
    recommendedMinutes: 1,
    content: {
      prompts: [
        'What part of this approach would you challenge?',
        'Where would you expect the fastest impact?',
        'What would success look like after the first year?',
      ],
    },
  },
]

export function getCumulativeMinutes(upToIndex: number): number {
  return slides.slice(0, upToIndex + 1).reduce((sum, slide) => sum + slide.recommendedMinutes, 0)
}

export function getSectionStartIndex(sectionId: string): number {
  return slides.findIndex((slide) => slide.section === sectionId)
}
