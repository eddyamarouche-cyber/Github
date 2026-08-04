import type { PresenterNote } from './types'

/**
 * Presenter notes keyed by slide id.
 * Speak naturally — do not read the slide verbatim.
 */
export const presenterNotes: Record<string, PresenterNote> = {
  cover: {
    opening:
      'Thank you for the time. I prepared this as a working session, not a pitch deck.',
    coreMessage:
      'I want to set my leadership frame first, then go deep on how I would hire, coach, run revenue and partner with you.',
    supportingExample:
      '[ADD MY EXAMPLE] — a moment where building the team and the operating system unlocked growth.',
    executiveImplication:
      'The first five minutes establish how I manage before we enter the four working topics.',
    likelyQuestion: 'How would you prioritize if you joined with limited headcount?',
    transition: 'Here is the official Leader Challenge brief.',
  },
  'challenge-brief': {
    opening: 'This is the brief I am answering in this room.',
    coreMessage:
      'Ninety minutes. Recruitment, Retention, Revenue, three leadership asks — then feedback and close.',
    supportingExample:
      'Cursor Prep for Challenge is linked for the role-play knowledge. Everything that follows maps to these topics.',
    executiveImplication:
      'I will not wander. Every slide should land one of these asks.',
    likelyQuestion: 'Where do you want the deepest inspection first?',
    transition: 'Here is how I structure that into three engines.',
  },
  'session-summary': {
    opening: 'I will run the rest of the session through three engines.',
    coreMessage:
      'Recruitment raises the bar — A Player, First 5, How?, Role play. Retention grows the team — The approach, Call to action, Monitoring. Revenue — Consistent PG, Operating Rythm, Oversight.',
    supportingExample:
      'If any one of these is weak, the region becomes noisy. If all three are strong, growth compounds.',
    executiveImplication:
      'Every method that follows should map back to one of these three outcomes.',
    likelyQuestion: 'Where do you want the deepest inspection first?',
    transition: 'First — a personal frame before the professional one.',
  },
  'personal-side': {
    opening: 'Before the operating story — who I am outside the job.',
    coreMessage:
      'Married, two kids, multicultural. Kickboxing, football and cooking keep me grounded and competitive.',
    supportingExample:
      'That mix of family, discipline and curiosity is the same energy I bring into a team.',
    executiveImplication:
      'You are hiring a whole person — not a slide of metrics.',
    likelyQuestion: 'What does multicultural mean in your day-to-day leadership?',
    transition: 'Part one — embrace the suck.',
  },
  'why-am-i-here-1': {
    opening: 'Before the résumé — the mindset.',
    coreMessage: 'Embrace the suck.',
    supportingExample:
      'Click to reveal each line over the Consumption Plan — this is the operating reality I run every week.',
    executiveImplication:
      'Leaders who avoid hard dashboards avoid hard truths. I run toward them.',
    likelyQuestion: 'What does embrace the suck mean in practice for your team?',
    transition: 'Part two — Build. Lead. Sell. Scale.',
  },
  'who-i-am-as-a-leader': {
    opening: 'Why am I here? Four words: Build. Lead. Sell. Scale.',
    coreMessage:
      'BUILD — early European Databricks path to Sales Director Italy. LEAD — demand and pipeline from zero, five-time President Club. SELL — strategic logos from 50K$ to 11M$ ARR. SCALE — repeat, leverage, expand, 20+ hires in Italy.',
    supportingExample:
      'Stellantis, Michelin, Danone, Sanofi, CNH, Iveco, Prada, Fastweb, Barilla, Kiko — complex enterprise wins that compound into a repeatable GTM engine.',
    executiveImplication:
      'Southern Europe at Cursor needs a builder who has already done the zero-to-scale journey — not a caretaker.',
    likelyQuestion: 'Which of Build / Lead / Sell / Scale transfers fastest to Cursor?',
    transition: 'Then my leadership principles — starting with leading by example.',
  },
  'leadership-principles': {
    opening: 'My leadership principles start here.',
    coreMessage:
      'Lead by example. Go first. Set the standard in public before asking the team to follow.',
    supportingExample:
      'People do not copy slides. They copy what the leader does under pressure.',
    executiveImplication:
      'If the Regional Director does not model the standard, the operating system becomes optional.',
    likelyQuestion: 'What does leading by example look like week to week?',
    transition: 'Next — the objective I will own with clients.',
  },
  'win-the-stage': {
    opening: 'This is the objective I want to own with you.',
    coreMessage:
      'Make Cursor THE Number 1 SDLC Platform in Italy and Iberia — and land the must-win accounts in the next 12 months.',
    supportingExample:
      'BBVA, Santander, Telefonica, Inditex, Amadeus, Adevinta across Iberia. Unicredit, Fastweb, Telecom Italia, Nexi, Reply, Bending Spoons, Engineering in Italy — plus Vodafone, Indra, Odigeo.',
    executiveImplication:
      'Everything that follows — hiring, coaching, pipeline and partnership — exists to win these stages and keep them.',
    likelyQuestion: 'Which must-win accounts do you prioritize in the first two quarters?',
    transition: 'Next — the one-team culture that makes that objective sustainable.',
  },
  'spanish-team-trophies': {
    opening: 'This is the feeling I want in Iberia.',
    coreMessage:
      'One team — no top guns, no rock stars or diva. Shared pressure, shared joy, one standard.',
    supportingExample:
      'Spain’s best runs have always looked like this — together under pressure, celebrating as one.',
    executiveImplication:
      'If we hire and coach for one team across Italy and Iberia, the operating system has something worth protecting.',
    likelyQuestion: 'How do you build one team across Spain, Portugal and Italy?',
    transition: 'That is the trophy room. On the pitch, it looks like this.',
  },
  'football-team-passes': {
    opening: 'Watch the movement — not the individual. The ball loops through the team on its own.',
    coreMessage:
      'Dynamic players, one ball, constant passes — the team advances because everyone plays for the next pass.',
    supportingExample:
      'No one runs alone. The ball moves faster than any single player.',
    executiveImplication:
      'One team on a slide is aspiration. One team on the pitch is behaviour — pass, move, support.',
    likelyQuestion: 'How do you translate this sports metaphor into sales management?',
    transition: 'Now the personal standard behind that culture.',
  },
  'leadership-standard': {
    opening: 'I use a simple image for a serious point.',
    coreMessage:
      'Elite performance is not improvisation. It is clarity, discipline and ownership under pressure.',
    supportingExample:
      'This is the standard I hold for myself and for the teams I build — before any process discussion.',
    executiveImplication:
      'If we agree on the standard, the operating system becomes much easier to inspect.',
    likelyQuestion: 'How do you translate an elite standard into day-to-day sales management?',
    transition: 'One more image — how elite teams actually move together.',
  },
  'wild-geese': {
    opening: 'This image is intentional.',
    coreMessage:
      'One direction, just doers — fellow miners who move together, share the load and get the work done.',
    supportingExample:
      'No top guns. No divas. A team that points the same way and executes.',
    executiveImplication:
      'Talent density matters — but so does shared direction and mutual enablement.',
    likelyQuestion: 'How do you keep a regional team aligned across markets?',
    transition: 'Before we hire — a principle that shapes how I lead.',
  },
  'learning-in-the-struggle': {
    opening: 'This is not a motivational poster. It is an operating belief.',
    coreMessage: 'Learning is in the struggle — growth happens under pressure, not in comfort.',
    supportingExample:
      'The hardest quarters taught me more than any easy win. Embrace the suck, extract the lesson, move forward.',
    executiveImplication:
      'I coach through difficulty because that is where behaviour changes and leaders are forged.',
    likelyQuestion: 'How do you balance high standards with burnout risk?',
    transition: 'Before we hire — let me anchor us in the company we are building for.',
  },
  'pierre-fabre-global-figures': {
    opening: 'Start with scale — Pierre Fabre is not a regional niche player.',
    coreMessage:
      '€3.2B revenue, +4.6% like-for-like, 10,000 people, 130 countries — and #2 worldwide in dermo-cosmetics.',
    supportingExample:
      '71% of revenue is generated outside France. This is a global health and beauty platform with real international depth.',
    executiveImplication:
      'The Italy–Iberia role sits inside a company with global ambition, not a local subsidiary mindset.',
    likelyQuestion: 'How does Southern Europe fit in the global growth story?',
    transition: 'Scale is one chapter. Science and business mix is the next.',
  },
  'pierre-fabre-business-mix': {
    opening: 'Ambition is funded — here is where the investment goes.',
    coreMessage:
      '€250M in R&D in 2025: €187M in pharma, €63M in dermo-cosmetics — science-led growth with digital acceleration.',
    supportingExample:
      '21.3% of dermo-cosmetics sales are already online — the mix is evolving, not static.',
    executiveImplication:
      'We are selling into a company that reinvests for the long term — and a shareholder model that puts 100% of profits back into mission.',
    likelyQuestion: 'Where do you see the biggest growth lever — pharma or dermo?',
    transition: 'Now the tool that lets pharmacy sellers integrate orders directly in the field.',
  },
  'pharmacy-order': {
    opening: 'This is the field tool — not a slide, a workflow.',
    coreMessage:
      'Pharmacy sellers integrate orders directly: pick the account, add multiple products, set quantities, capture notes — one submission.',
    supportingExample:
      'Dropdowns for pharmacy, region, delegate and delivery. Free-text for contact and PO reference. Multi-line product picker with live summary.',
    executiveImplication:
      'Less re-keying, fewer errors, faster order-to-cash — the rep sells instead of admining.',
    likelyQuestion: 'Does this connect to our ERP or wholesaler today?',
    transition: 'That is the company and the channel. Now how I hire for it.',
  },
  'recruitment-opener': {
    opening: 'This is how I think about hiring.',
    coreMessage:
      'In a sea of average options, the job is to find the one exceptional profile — and decide with discipline.',
    supportingExample:
      'One wrong hire costs quarters. One right hire compounds the whole region.',
    executiveImplication:
      'Talent density starts with selection quality, not hiring volume.',
    likelyQuestion: 'How do you keep the bar high when the market is thin?',
    transition: 'That standard becomes an A-player profile.',
  },
  'a-player-profile': {
    opening: 'Before process or scorecards, this is the filter.',
    coreMessage:
      'Character and cognition that compound — builders, patriots, ownership, resilient, learning in the struggle, high clock speed.',
    supportingExample:
      'A polished big-brand résumé without ownership scars or struggle-tested learning is a warning, not a win.',
    executiveImplication:
      'This profile protects culture and raises talent density before any interview loop starts.',
    likelyQuestion: 'How do you test clock speed and learning in the struggle in an interview?',
    transition: 'Here is the first live LinkedIn talent map for Italy.',
  },
  'linkedin-talent-map': {
    opening: 'These are named Italy profiles, not placeholders.',
    coreMessage:
      'Italy LinkedIn targets mapped against the A-player filter — open each profile and inspect for patriots, slope and ownership.',
    supportingExample:
      'Databricks, MongoDB, Adobe, Zscaler and analytics backgrounds give us a dense Italy shortlist to pressure-test.',
    executiveImplication:
      'A Regional Director should walk in with a live talent map, not a blank hiring request.',
    likelyQuestion: 'Who would you activate first and why?',
    transition: 'Same discipline for Spain — here is the Iberia map.',
  },
  'linkedin-talent-map-spain': {
    opening: 'Spain needs the same named map — not a second-hand Italy list.',
    coreMessage:
      'Four Iberia profiles: CloudBees country lead, Databricks named AE, and two MongoDB strategic AEs in Barcelona.',
    supportingExample:
      'Raphaël Sublet, Jorge Muñoz, Anna Acuña and Francesca Cartia — open each live and pressure-test against the A-player filter.',
    executiveImplication:
      'Italy and Spain are one region in strategy, two markets in talent density — both need an always-on map.',
    likelyQuestion: 'Who is the first Spain conversation you would open?',
    transition: 'The map only works if we work it before the seat opens.',
  },
  'how-proactivity': {
    opening: 'How? We hunt.',
    coreMessage:
      'Do not wait for the requisition. Scout the market, open conversations and warm talent while the seat is still closed.',
    supportingExample:
      'When a role opens, the region should already be in dialogue with two or three qualified names — not starting from LinkedIn cold.',
    executiveImplication:
      'Time-to-hire collapses when sourcing is continuous. Reactive hiring is already late.',
    likelyQuestion: 'How early do you start conversations relative to headcount approval?',
    transition: 'Here is how the hunt breaks into five moves.',
  },
  'how-subdivisions': {
    opening: 'This is the operating system behind How — open each move.',
    coreMessage:
      'ICP is rarity. Talent Map is an active pipeline. Sourcing runs multiple channels. Potential versus experience looks beyond pedigree. Structured process is Swiss-watch precision.',
    supportingExample:
      'Click through live: rarity, pipeline, channels, look beyond, precision — five images, one hiring system.',
    executiveImplication:
      'Recruitment quality is a system design problem, not a calendar of interviews.',
    likelyQuestion: 'Which of the five do you start with in a new market?',
    transition: 'Now — Role Play.',
  },
  'roleplay-title': {
    opening: 'Hiring is not passive. Role play is where the hunt goes live.',
    coreMessage: 'Role Play — pick up the phone, sell the opportunity, earn the next step.',
    supportingExample:
      'Hold the image. This is the energy required — persistent outreach until the right A-player says yes.',
    executiveImplication:
      'If leaders will not role-play the call, they are not ready to run the talent map.',
    likelyQuestion: 'Who do you call first when the seat opens?',
    transition: 'Now we role-play the conversation — a huge opportunity on the table.',
  },
  'roleplay-opener': {
    opening: 'This is where hiring becomes live — sell a huge opportunity.',
    coreMessage:
      'Software demand is growing much faster than our ability to produce, understand and maintain software. Every company is racing to turn AI into engineering output faster than their competitors. Then land market opportunity 2 trillion $.',
    supportingExample:
      'Click to reveal each line — software demand, the AI race, then the 2 trillion $ market opportunity.',
    executiveImplication:
      'If we cannot make the opportunity feel huge in the room, we will not win the talent in market.',
    likelyQuestion: 'What is the one sentence that makes this opportunity feel huge?',
    transition: 'Then the proof — why Cursor is winning that race.',
  },
  'roleplay-proof': {
    opening: 'Market size is not enough — they need proof Cursor can win.',
    coreMessage:
      'Model agnosticity, frontier SpaceX / xAI compute, harness better models as compounding advantage, and 64% of Fortune 500 companies.',
    supportingExample:
      'These proof points turn a huge TAM into a credible place to bet a career — momentum plus structural advantage.',
    executiveImplication:
      'A-players join momentum they can verify — not slides alone.',
    likelyQuestion: 'Which proof point lands hardest with senior sellers?',
    transition: 'Then the ambition — what the best GTM team can build in four years.',
  },
  'gtm-ambition': {
    opening: 'Hold the room with the question, then the team behind it.',
    coreMessage:
      '4Bn$ revenue mostly in PLG. What can we do with the best world-class GTM team in the world in the next four years? Experienced executives with the best track record.',
    supportingExample:
      'Click to reveal each line. The executives line is not a footnote — it is the proof the rocket ship has pilots.',
    executiveImplication:
      'Ambition without operators is fantasy. Name the team that can execute.',
    likelyQuestion: 'Who specifically is on that GTM bench?',
    transition: 'Now land the number.',
  },
  'gtm-100bn': {
    opening: 'Pause. Then reveal the outcome.',
    coreMessage:
      '100Bn$. Becoming the operating system for AI-native software engineering — Models × Harness × Context × Agents × Evals × Distribution.',
    supportingExample:
      'The opportunity story must end in a number big enough to make an A-player lean forward — with a category definition underneath.',
    executiveImplication:
      'Ambition attracts ambition. Small targets do not recruit category winners.',
    likelyQuestion: 'How do you keep 100Bn$ credible without sounding like hype?',
    transition: 'Ambition is useless if people do not grow and stay — Retention.',
  },
  'retention-opener': {
    opening: 'Hiring is the seed. Retention is the harvest — in three moves.',
    coreMessage:
      'Retention in summary: The approach, Call to action, and Monitoring.',
    supportingExample:
      'Frame the section before you open each slide — operating system, daily practice, then control tower.',
    executiveImplication:
      'If talent leaves, the recruitment engine was wasted spend.',
    likelyQuestion: 'What actually keeps top sellers at Cursor-scale ambition?',
    transition: 'Start with the approach — four levers that keep A-players compounding.',
  },
  'retention-system': {
    opening: 'Keep your best performers engaged and committed for long-term success.',
    coreMessage:
      'Growth Opportunities through advancement paths and stretch assignments. Coaching Excellence as an operating rhythm with Enablement. Culture of Belonging through team identity rituals. Work-Life Integration that respects boundaries.',
    supportingExample:
      'Click each topic open — advancement paths, 1:1 cadence, dinners and events, flexible arrangements.',
    executiveImplication:
      'Retention is designed, not hoped for. Each lever has an owner and a rhythm.',
    likelyQuestion: 'Which lever is weakest in Southern Europe today?',
    transition: 'Now the call to action — how we practice it.',
  },
  'retention-cta': {
    opening: 'Framework is not enough. Now make it real.',
    coreMessage:
      'Call to action: Role play, Shadowing, and Direct feedback — three ways leaders turn retention from slides into daily practice.',
    supportingExample:
      'Click each topic open — role play prep doc, shadowing in the field, direct feedback in 1:1s.',
    executiveImplication:
      'Retention improves when managers rehearse, observe, and measure — not when they only agree on principles.',
    likelyQuestion: 'What does good shadowing look like in week one?',
    transition: 'Then monitoring — the control tower view.',
  },
  'retention-monitoring': {
    opening: 'Practice without visibility is hope. Monitoring is the control tower.',
    coreMessage:
      'Increase in qualified opportunities - 3 per week. PG quarter attainment % incr. Time in stage. Coaching-to-behavior-change. Self-sourced pipeline vs SDR sourced — five control tower signals.',
    supportingExample:
      'Click to reveal each control tower signal, then Pipe Gen QTD — Francesco Vitti at 267% pro-rata attainment.',
    executiveImplication:
      'Leaders who monitor retain. Leaders who only react lose A-players quietly.',
    likelyQuestion: 'Which of these four signals is weakest in your team today?',
    transition: 'First close the gap — variance compression and forecast accuracy.',
  },
  'gap-reduction': {
    opening: 'Predictability starts by closing the gap — not hoping it closes itself.',
    coreMessage:
      'Gap reduction in two parts: Variance compression — Team quota attainment FY24 75 to 180%, Team quota attainment FY25 95 to 135% — and Forecast accuracy.',
    supportingExample:
      'Click each component open — show how the range tightened year over year, then how forecast discipline compounds trust.',
    executiveImplication:
      'Leaders who compress variance and improve forecast accuracy run the business; everyone else runs quarter-end fire drills.',
    likelyQuestion: 'What changed between FY24 and FY25 to compress the range?',
    transition: 'Now Revenue — a world of opportunities.',
  },
  'revenue-opener': {
    opening: 'Shift from growing people to running the business.',
    coreMessage: 'Revenue — a world of opportunities.',
    supportingExample:
      'Hold the image for a beat. This is the scale of the prize before we talk discipline.',
    executiveImplication:
      'Ambition without operating discipline is noise. Opportunity without execution is wasted.',
    likelyQuestion: 'What makes Southern Europe winnable at Cursor scale?',
    transition: 'Pipeline is not a quarterly rescue — it is daily hard work.',
  },
  'consistent-pipeline-generation': {
    opening: 'Opportunity without pipeline discipline is a story, not a business.',
    coreMessage:
      'Pipeline Generation an Identity, Not a Task. KPIs: activity volume — NBM, activity to grow developers base. Source mix: self sourced vs inbound vs SDR sourced.',
    supportingExample:
      'Hold the image. This is what weekly prospecting, outreach, and follow-through actually look like — relentless, unglamorous, effective.',
    executiveImplication:
      'Regions that win treat pipeline creation like training: non-negotiable, measured, and repeated.',
    likelyQuestion: 'How do you keep pipeline discipline when sellers are buried in late-stage deals?',
    transition: 'Operating rhythm turns pipeline discipline into a calendar.',
  },
  'operating-rhythm': {
    opening: 'Pipeline without a rhythm becomes random effort.',
    coreMessage:
      'Operating rhythm — Daily Discipline, Weekly planning (8 customer meetings & preparation), Monthly Reviews, Quarterly Strategy.',
    supportingExample:
      'Click Daily Discipline to reveal the 4/2/2, 2/4/2, 2/2/4 month rotation — how time shifts across prospecting, qualifying, and territory building.',
    executiveImplication:
      'Leaders who protect the calendar protect the forecast. Rhythm beats heroics.',
    likelyQuestion: 'How do you keep this discipline when quarter-end pressure hits?',
    transition: 'Rhythm without inspection is hope. Inspect what you expect.',
  },
  'inspection': {
    opening: 'Pipeline health is not a feeling — no feelings just facts + MEDDPIC.',
    coreMessage:
      'Eight inspection questions: Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition.',
    supportingExample:
      'Paper process kills most this-quarter deals. Champion enthusiasm without power is not multi-threading.',
    executiveImplication:
      'Leaders inspect early. Weak signals surfaced weekly beat surprises at quarter-end.',
    likelyQuestion: 'What would make you intervene in week two, not week ten?',
    transition: 'The weekly mechanism for forecast discipline is the 1:1.',
  },
  'one-on-one-opener': {
    opening: 'The weekly mechanism for forecast discipline is the 1:1.',
    coreMessage:
      'Efficient, purposeful conversations — coaching, decisions, and accountability in forty-five minutes.',
    supportingExample:
      'Not a status readout. Every minute should move the person or the pipeline forward.',
    executiveImplication:
      'This is where leadership shows up consistently, not just in quarterly reviews.',
    likelyQuestion: 'How often do you run 1:1s and how long are they?',
    transition: 'That discipline sets the bar. Here is what I need from leadership.',
  },
  'asks-opener': {
    opening: 'I am clear on what I need from Cursor leadership to execute in Southern Europe.',
    coreMessage:
      'Strategic clarity, executive access, and speed of decision-making — the multipliers of regional execution.',
    supportingExample:
      'Without those three, even strong local leadership becomes slow and fragmented.',
    executiveImplication:
      'I am not asking for comfort. I am asking for the conditions to win.',
    likelyQuestion: 'What decision latency is acceptable for hiring and pricing?',
    transition: 'To execute at scale, we need to invest — in people, market, and leadership.',
  },
  'invest-opener': {
    opening: 'Ambition without investment is just a slide deck.',
    coreMessage:
      'Southern Europe needs capital behind people, market presence, and leadership development.',
    supportingExample:
      'The best regional plans fail when they are under-resourced on talent density and executive visibility.',
    executiveImplication:
      'I am asking for investment that compounds — not one-off spend.',
    likelyQuestion: 'How do you prioritize where capital goes first?',
    transition: 'It starts with the team structure.',
  },
  'invest-people': {
    opening: 'Here is the team I would build.',
    coreMessage:
      'Eddy Amarouche as Regional Director with three account executives in Italy and three across Spain and Portugal.',
    supportingExample:
      'Balanced coverage across the two largest Southern Europe markets — not a hub-and-spoke from one country.',
    executiveImplication:
      'Six AEs plus a director is the minimum viable regional engine for enterprise motion.',
    likelyQuestion: 'Why three per country and not two?',
    transition: 'People is one line. Market presence is another.',
  },
  'marketing-c-level': {
    opening: 'Executive visibility opens doors that outbound alone cannot.',
    coreMessage: 'Five hundred thousand dollars in marketing and C-level events across Southern Europe.',
    supportingExample:
      'C-level dinners, executive roundtables, and flagship events that position Cursor with decision-makers.',
    executiveImplication:
      'This is brand and pipeline creation at the top of the market — not field marketing theatre.',
    likelyQuestion: 'How would you measure ROI on event spend?',
    transition: 'And the final investment is in leadership performance under pressure.',
  },
  'invest-in-me': {
    opening: 'Invest in me.',
    coreMessage:
      'Training for Pressure with Greg Poss — mental resilience and improved performance under pressure, twenty thousand dollars over twenty-one days.',
    supportingExample:
      'Pressure does not create a response. It exposes the response that has already been trained.',
    executiveImplication:
      'A Regional Director who performs under pressure protects the forecast and the team.',
    likelyQuestion: 'Why Greg Poss specifically?',
    transition: 'Thank you — I am ready for your questions and feedback.',
  },
}
