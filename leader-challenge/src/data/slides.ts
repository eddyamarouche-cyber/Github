import { linkedinTargets, linkedinTargetsSpain } from './linkedinTargets'
import type { SectionMeta, Slide } from './types'

export const TOTAL_SESSION_MINUTES = 90

export const sections: SectionMeta[] = [
  { id: 'intro', label: 'Introduction & Leadership Principles', allocatedMinutes: 5 },
  { id: 'recruitment', label: 'Recruitment', allocatedMinutes: 25 },
  { id: 'roleplay', label: 'Candidate Role Play', allocatedMinutes: 15 },
  { id: 'retention', label: 'Retention & Coaching', allocatedMinutes: 15 },
  { id: 'revenue', label: 'Revenue Leadership', allocatedMinutes: 20 },
  { id: 'partnership', label: 'Leadership Asks & 90-Day Plan', allocatedMinutes: 5 },
  { id: 'invest', label: 'Invest', allocatedMinutes: 3 },
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
            'How do you inspect/qualify opportunities and evaluate Pipeline Health to ensure forecast accuracy? No feelings just facts + MEDDPIC',
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
          subtitle: 'Consistent PG / Operating Rythm / Oversight',
          description: '',
          focuses: ['Consistent PG', 'Operating Rythm', 'Oversight'],
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
    id: 'why-am-i-here-1',
    number: 5,
    section: 'intro',
    type: 'visual-hero',
    title: 'Why am I here? 1/2',
    takeaway:
      'Embrace the suck — learning is in the struggle. The forecast dashboard is where discipline meets reality.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/why-am-i-here-consumption-plan.jpg',
      points: ['Embrace the suck', 'Learning is in the struggle'],
      pointsLayout: 'center',
      revealPointsOnClick: true,
    },
  },
  {
    id: 'who-i-am-as-a-leader',
    number: 6,
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
    number: 7,
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
    number: 8,
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
    number: 9,
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
    number: 10,
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
        'Persistence. Heart. Desire. The same principles that win under pressure apply to building a region.',
      points: ['Persistence', 'Heart', 'Desire'],
    },
  },
  {
    id: 'wild-geese',
    number: 11,
    section: 'intro',
    type: 'visual-hero',
    title: 'One Direction',
    takeaway: 'One direction, just doers — shared purpose and collective lift, not individual heroics.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/one-direction-300.jpg',
      title: 'One direction',
      subtitle: 'Just doers',
    },
  },

  {
    id: 'learning-in-the-struggle',
    number: 12,
    section: 'intro',
    type: 'visual-hero',
    title: 'Learning is in the struggle',
    takeaway:
      'Growth happens under pressure — embrace the hard reps, not just the wins.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/learning-struggle.jpg',
      eyebrow: 'Leadership mindset',
      points: ['Learning is in the struggle'],
      pointsLayout: 'center',
    },
  },
  {
    id: 'recruitment-opener',
    number: 13,
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
    number: 14,
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
    number: 15,
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
    number: 16,
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
    number: 17,
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
    number: 18,
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
          linkUrl:
            'https://docs.google.com/document/d/1qfnV1MUoKObdJChe7Bzqwt-uOxZUkMKeSAD7kJotVzk/edit?tab=t.0#heading=h.au51mny0sx6',
          linkLabel: 'Structured process guide',
        },
      ],
    },
  },
  {
    id: 'roleplay-title',
    number: 19,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'Role Play',
    takeaway:
      'Role play is where hiring theory meets live execution — pick up the phone and sell the opportunity.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/role-play-calling.jpg',
      title: 'Role Play',
      titleSize: 'display',
    },
  },
  {
    id: 'roleplay-opener',
    number: 20,
    section: 'recruitment',
    type: 'visual-hero',
    title: 'Role play',
    takeaway:
      'Role play the conversation where a huge opportunity meets a rare A-player — earn trust and close the next step.',
    recommendedMinutes: 1,
    content: {
      image: '/images/roleplay-opportunity.jpg',
      points: [
        'Software demand is growing much faster than our ability to produce, understand and maintain software',
        'Every company is trying to turn AI into engineering output faster than their competitors',
        'Market opportunity 2 trillion $',
      ],
      pointsLayout: 'center',
      revealPointsOnClick: true,
    },
  },
  {
    id: 'roleplay-proof',
    number: 21,
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
      pointLinkUrls: ['https://cursor.com/fr/evals'],
      pointLinkLabels: ['cursor.com/fr/evals'],
    },
  },
  {
    id: 'gtm-ambition',
    number: 22,
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
        '4Bn$ revenue mostly in PLG',
        'What can we do with best world class GTM team in the world in the next 4 years ?',
        'Experienced executives with the best track record',
      ],
      pointsLayout: 'center',
      revealPointsOnClick: true,
    },
  },
  {
    id: 'gtm-100bn',
    number: 23,
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
      answerFooter:
        'Models × Harness × Context × Agents × Evals × Distribution',
      answerDelayMs: 1200,
    },
  },
  {
    id: 'retention-opener',
    number: 24,
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
    number: 25,
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
    number: 26,
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
    number: 27,
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
    number: 28,
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
          detail: 'Team quota attainment FY24 75 to 180%\nTeam quota attainment FY25 95 to 135%',
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
    number: 29,
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
    number: 30,
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
    number: 31,
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
    number: 32,
    section: 'revenue',
    type: 'meddpicc',
    title: 'Inspection',
    headline: 'No feelings just facts + MEDDPIC',
    takeaway:
      'Eight MEDDPICC questions — control tower discipline with evidence, not optimism, on every deal.',
    recommendedMinutes: 2,
    content: {
      items: [
        {
          category: 'Metrics',
          prompt:
            'Quantified business outcome (e.g. 30% productivity uplift) — or vague enthusiasm?',
        },
        {
          category: 'Economic Buyer',
          prompt:
            'Talked to who signs — or only a champion hoping for budget?',
        },
        {
          category: 'Decision Criteria',
          prompt:
            'How they evaluate vendors — and is Cursor winning or losing on each?',
        },
        {
          category: 'Decision Process',
          prompt:
            'Real dated process mapped — or is "Q3 close" a guess?',
        },
        {
          category: 'Paper Process',
          prompt:
            'Legal/procurement timeline understood? (Kills most "this quarter" deals)',
        },
        {
          category: 'Identify Pain',
          prompt:
            'Pain real and urgent — or is "no decision" a live competitor?',
        },
        {
          category: 'Champion',
          prompt:
            'Real influence — or enthusiastic but powerless?',
        },
        {
          category: 'Competition',
          prompt:
            'Named competitor and real reason you\'re winning — not "no competition mentioned"?',
        },
      ],
    },
  },
  {
    id: 'one-on-one-opener',
    number: 33,
    section: 'revenue',
    type: 'visual-hero',
    title: '1:1',
    takeaway:
      'The weekly mechanism for forecast discipline — efficient, purposeful conversations that drive coaching and decisions.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/one-on-one-efficiency.jpg',
      eyebrow: 'Revenue',
      title: '1:1',
      titleSize: 'display',
      linkUrl:
        'https://docs.google.com/document/d/1Wk2VoPhcHx9zg99ItjI_RxKGWGRYsazK/edit',
      linkLabel: '1:1 guide',
    },
  },
  {
    id: 'asks-opener',
    number: 34,
    section: 'partnership',
    type: 'visual-hero',
    title: 'Asks',
    takeaway:
      'Clear asks unlock speed — strategic clarity, executive access, and fast decisions from leadership.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/executive-partner.jpg',
      eyebrow: 'Partnership',
      title: 'Asks',
      titleSize: 'display',
    },
  },
  {
    id: 'invest-opener',
    number: 35,
    section: 'invest',
    type: 'visual-hero',
    title: 'Invest',
    takeaway:
      'Ambition requires capital — people, market presence, and leadership development that compound regional growth.',
    recommendedMinutes: 0.5,
    content: {
      image: '/images/invest-ambition.jpg',
      eyebrow: 'Invest',
      title: 'Invest',
      titleSize: 'display',
    },
  },
  {
    id: 'invest-people',
    number: 36,
    section: 'invest',
    type: 'org-chart',
    title: 'People',
    takeaway:
      'Six account executives across Italy and Spain & Portugal — one regional director building a balanced Southern Europe team.',
    recommendedMinutes: 1,
    content: {
      director: {
        name: 'Eddy Amarouche',
        title: 'Regional Director',
      },
      regions: [
        {
          label: 'Italy',
          flags: ['IT'],
          roleTitle: 'Account Executive',
          headcount: 3,
        },
        {
          label: 'Spain and Portugal',
          flags: ['ES', 'PT'],
          roleTitle: 'Account Executive',
          headcount: 3,
        },
      ],
      amount: '$10M',
    },
  },
  {
    id: 'marketing-c-level',
    number: 37,
    section: 'invest',
    type: 'invest-figure',
    title: 'Marketing / C-Level event',
    takeaway:
      'Executive visibility and market credibility — a $500K investment in C-level events that open doors across Southern Europe.',
    recommendedMinutes: 0.5,
    content: {
      amount: '$500K',
    },
  },
  {
    id: 'invest-in-me',
    number: 38,
    section: 'invest',
    type: 'invest-figure',
    title: 'Invest in me!',
    takeaway:
      'Training for Pressure with Greg Poss — $20K to sharpen executive performance under the highest-stakes moments.',
    recommendedMinutes: 0.5,
    content: {
      amount: '$20K',
      subtitle: 'Training for Pressure with Greg Poss',
      tagline: 'Mental resilience and improve performance under pressure',
      quote:
        'Pressure does not create a response. It exposes the response that has already been trained',
      footer: '21 days training',
    },
  },

]

export function getCumulativeMinutes(upToIndex: number): number {
  return slides.slice(0, upToIndex + 1).reduce((sum, slide) => sum + slide.recommendedMinutes, 0)
}

export function getSectionStartIndex(sectionId: string): number {
  return slides.findIndex((slide) => slide.section === sectionId)
}
