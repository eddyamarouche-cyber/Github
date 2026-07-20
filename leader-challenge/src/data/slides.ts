import { candidates } from './candidates'
import { coachingCases } from './coachingCases'
import { markets } from './markets'
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
    id: 'who-i-am-as-a-leader',
    number: 2,
    section: 'intro',
    type: 'drivers',
    title: 'Who I Am as a Leader',
    headline:
      'I build high-talent teams, coach for ownership and run the business through clear operating rhythm.',
    takeaway:
      'Establish the management frame before diving into the four working topics.',
    recommendedMinutes: 1.5,
    content: {
      drivers: [
        {
          title: 'Talent builder',
          detail:
            'I raise the bar on who joins, who stays and who leads. [ADD MY EXAMPLE]',
          image: '/images/talent-builder.jpg',
        },
        {
          title: 'Performance coach',
          detail:
            'I diagnose skill, will and system gaps, then coach with evidence. [ADD MY EXAMPLE]',
        },
        {
          title: 'Operating leader',
          detail:
            'I install cadence for pipeline, forecast and decisions — not end-of-quarter heroics. [ADD MY RESULT]',
        },
        {
          title: 'Executive partner',
          detail:
            'I escalate early, stay transparent and convert company priorities into local execution. [VALIDATE WITH CURSOR]',
        },
      ],
    },
  },
  {
    id: 'operating-system',
    number: 3,
    section: 'intro',
    type: 'pillars',
    title: 'My Leadership Operating System',
    takeaway: 'Four pillars govern how I hire, coach, inspect and align with leadership.',
    recommendedMinutes: 1.5,
    content: {
      pillars: [
        {
          title: 'Talent Density',
          description: 'Raise the bar continuously so the region compounds through people quality.',
        },
        {
          title: 'Coaching Cadence',
          description: 'Create performance through structured diagnosis, practice and reinforcement.',
        },
        {
          title: 'Pipeline Discipline',
          description: 'Treat pipeline creation and opportunity quality as a weekly operating habit.',
        },
        {
          title: 'Executive Alignment',
          description: 'Convert global priorities into local execution with transparent escalation.',
        },
      ],
    },
  },
  {
    id: 'success-at-cursor',
    number: 4,
    section: 'intro',
    type: 'pillars',
    title: 'What Success Would Look Like at Cursor',
    headline:
      'Success is a high-talent Italy–Iberia engine with predictable growth and clear partnership with leadership.',
    takeaway:
      'Align on the outcomes that matter before we inspect how I hire, coach and run revenue.',
    recommendedMinutes: 1.5,
    content: {
      pillars: [
        {
          title: 'Talent density',
          description:
            'A-player coverage in priority markets, with an always-on talent map. [VALIDATE WITH CURSOR]',
        },
        {
          title: 'Coaching culture',
          description:
            'Managers run real 1:1s, deal coaching and development rhythm — not status updates. [ADD MY EXAMPLE]',
        },
        {
          title: 'Predictable revenue',
          description:
            'Weekly pipeline creation, opportunity quality and forecast integrity. [ADD MY RESULT]',
        },
        {
          title: 'One-team execution',
          description:
            'Local ownership with fast escalation, shared priorities and executive access used well. [VALIDATE WITH CURSOR]',
        },
      ],
    },
  },
  {
    id: 'a-player-profile',
    number: 5,
    section: 'recruitment',
    type: 'profile',
    title: 'The Profile of an A-Player',
    headline:
      'An A-player combines performance, learning velocity and category-building ability.',
    takeaway: 'Hire for ownership, learning speed and the ability to sell an emerging category.',
    recommendedMinutes: 3,
    content: {
      traits: [
        'High learning velocity',
        'Strong business curiosity',
        'Enterprise sales discipline',
        'Ability to sell an emerging category',
        'Credibility with technical and executive buyers',
        'Strong ownership',
        'Coachability',
        'Consistent performance',
        'Ability to operate in ambiguity',
        'Positive cultural contribution',
      ],
    },
  },
  {
    id: 'candidate-scorecard',
    number: 6,
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
    number: 7,
    section: 'recruitment',
    type: 'candidates',
    title: 'First Five Target Candidates',
    takeaway: 'Walk in with a named talent map, not a generic hiring request.',
    recommendedMinutes: 3,
    content: { candidates },
  },
  {
    id: 'talent-mapping',
    number: 8,
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
    number: 9,
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
    number: 10,
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
    number: 11,
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
    number: 12,
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
    number: 13,
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
    number: 14,
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
    number: 15,
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
    number: 16,
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
    number: 17,
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
    number: 18,
    section: 'retention',
    type: 'case-study',
    title: 'Coaching Case Study',
    takeaway: 'Show one concrete coaching arc from diagnosis to measured business result.',
    recommendedMinutes: 3,
    content: { caseStudy: coachingCases[0] },
  },
  {
    id: 'measuring-improvement',
    number: 19,
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
    number: 20,
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
    number: 21,
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
    number: 22,
    section: 'revenue',
    type: 'markets',
    title: 'Southern Europe Growth Thesis',
    takeaway: 'One regional strategy — market-by-market execution with validated assumptions.',
    recommendedMinutes: 3,
    content: { markets },
  },
  {
    id: 'pipeline-culture',
    number: 23,
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
    number: 24,
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
    number: 25,
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
    number: 26,
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
    number: 27,
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
    number: 28,
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
    number: 29,
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
    number: 30,
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
    number: 31,
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
        { label: 'Top strategic deals', value: '[ADD COMPANY]', status: 'neutral' },
        { label: 'Market risks', value: '[ADD MARKET ASSUMPTION]', status: 'watch' },
        { label: 'Leadership decisions required', value: '[VALIDATE WITH CURSOR]', status: 'risk' },
      ],
    },
  },
  {
    id: 'leadership-asks',
    number: 32,
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
    number: 33,
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
    number: 34,
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
    number: 35,
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
    number: 36,
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
    number: 37,
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
    number: 38,
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
    number: 39,
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
