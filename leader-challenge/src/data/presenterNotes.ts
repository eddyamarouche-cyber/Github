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
      'Recruitment raises the bar — A Player, First 5, How?, Role play. Retention grows the team. Revenue runs the business.',
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
    transition: 'Now — why I am here.',
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
    transition: 'Recruitment starts with a simple image.',
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
    transition: 'Now we role-play the conversation — a huge opportunity on the table.',
  },
  'roleplay-opener': {
    opening: 'This is where hiring becomes live — sell a huge opportunity.',
    coreMessage:
      'Market opportunity : 2 trillion $. Every company is racing to turn AI into engineering output. Engineers plus compute. Cursor is the fastest SaaS climb from $1M to $1B ARR — now ~$6Bn ARR, mostly PLG.',
    supportingExample:
      'The best A-players do not respond to job descriptions. They respond to ownership of that race and a credible next chapter.',
    executiveImplication:
      'If we cannot make the opportunity feel huge in the room, we will not win the talent in market.',
    likelyQuestion: 'What is the one sentence that makes this opportunity feel huge?',
    transition: 'Then the ambition — what the best GTM team can build in four years.',
  },
  'gtm-100bn': {
    opening: 'Hold the question. Then land the answer.',
    coreMessage:
      'What can we do with the best GTM team in the world in the next four years? 100Bn$.',
    supportingExample:
      'The opportunity story must end in a number big enough to make an A-player lean forward.',
    executiveImplication:
      'Ambition attracts ambition. Small targets do not recruit category winners.',
    likelyQuestion: 'How do you keep 100Bn$ credible without sounding like hype?',
    transition: 'Ambition is useless if people do not grow and stay — Retention.',
  },
  'retention-opener': {
    opening: 'Hiring is the seed. Retention is the harvest.',
    coreMessage:
      'We do not just find A-players — we grow them until the region compounds.',
    supportingExample:
      'A plant does not survive on soil alone. It needs light, rhythm and space to grow.',
    executiveImplication:
      'If talent leaves, the recruitment engine was wasted spend.',
    likelyQuestion: 'What actually keeps top sellers at Cursor-scale ambition?',
    transition: 'Here is the operating system — four clickable levers.',
  },
  'retention-system': {
    opening: 'Keep your best performers engaged and committed for long-term success.',
    coreMessage:
      'Growth Opportunities with an AI Sales tool. Coaching Excellence as an operating rhythm with Enablement. Culture of Belonging through team identity rituals. Work-Life Integration that respects boundaries.',
    supportingExample:
      'Click each topic open — advancement paths, 1:1 cadence, dinners and events, flexible arrangements.',
    executiveImplication:
      'Retention is designed, not hoped for. Each lever has an owner and a rhythm.',
    likelyQuestion: 'Which lever is weakest in Southern Europe today?',
    transition: 'That still needs a scorecard before we hire the next one.',
  },
  'candidate-scorecard': {
    opening: 'This is the scoring model I would use before advancing any candidate.',
    coreMessage:
      'Weight the criteria, score with evidence, and surface risk explicitly out of one hundred.',
    supportingExample:
      '[ADD MY EXAMPLE] — a close call where the scorecard prevented a false-positive hire.',
    executiveImplication:
      'This protects the culture and the forecast. Weak evidence never gets disguised as conviction.',
    likelyQuestion: 'What is your minimum bar to advance a candidate?',
    transition: 'Here are the first five profiles I would activate.',
  },
  'first-five-candidates': {
    opening: 'I would walk into the role with a live talent map, not a blank hiring plan.',
    coreMessage:
      'These five placeholders are where I would put named targets once validated with Cursor.',
    supportingExample:
      '[ADD CANDIDATE NAME] placeholders remain intentional — I will not invent people in this room.',
    executiveImplication:
      'A Regional Director should always know who the next three hires could be.',
    likelyQuestion: 'Which markets would you staff first?',
    transition: 'That only works if hiring starts before the role is open.',
  },
  'talent-mapping': {
    opening: 'Hiring is a continuous system, not a reactive search.',
    coreMessage:
      'Scorecard, company map, top-fifty list, network activation, structured outreach, always-on pipeline.',
    supportingExample:
      '[ADD MY EXAMPLE] — a time an always-on map compressed time-to-hire for a critical role.',
    executiveImplication:
      'When a seat opens, the region should already be in conversation with qualified talent.',
    likelyQuestion: 'How large should the active pipeline be?',
    transition: 'Here is an illustrative conversion model.',
  },
  'sourcing-funnel': {
    opening: 'I manage hiring like a funnel with stage quality.',
    coreMessage:
      'Fifty mapped profiles to one hire is an illustrative model — the point is conversion discipline.',
    supportingExample:
      'If warm introductions collapse too early, the issue is usually messaging or targeting, not volume.',
    executiveImplication:
      'We should inspect hiring funnel health with the same seriousness as revenue pipeline.',
    likelyQuestion: 'Where do most hiring funnels break in Southern Europe?',
    transition: 'Outreach quality determines whether the funnel even starts.',
  },
  'candidate-outreach': {
    opening: 'Strong candidates ignore generic recruiter language.',
    coreMessage:
      'The message must be personal, credible and about ownership — not a job description dump.',
    supportingExample:
      'This note asks for twenty minutes to understand what they optimize for. That changes the dynamic.',
    executiveImplication:
      'We are selling a chance to define a category and a region, not filling a vacancy.',
    likelyQuestion: 'How do you adapt this for a passive senior candidate?',
    transition: 'Let us move into the role-play preparation.',
  },
  'roleplay-profile': {
    opening: 'Before any live conversation, I prepare the person, not just the pitch.',
    coreMessage:
      'Background, motivations, concerns, ambitions, objective, questions and desired next step.',
    supportingExample:
      '[ADD MY EXAMPLE] — fill this card with the actual role-play profile for today.',
    executiveImplication:
      'Preparation is respect. It also keeps the conversation candidate-centric.',
    likelyQuestion: 'What would make you walk away from a candidate quickly?',
    transition: 'Here is the call structure I would run.',
  },
  'initial-call': {
    opening: 'The first call has one job: earn trust and create a clear next step.',
    coreMessage:
      'Trust, motivations, priorities, market frame, Cursor and role, then agreement on next step.',
    supportingExample:
      'I deliberately avoid overselling early. Curiosity beats pressure with A-players.',
    executiveImplication:
      'If we leave without a next step, we ran a conversation — not a process.',
    likelyQuestion: 'How long should the first call be?',
    transition: 'When it is time to sell, this is the narrative order.',
  },
  'selling-opportunity': {
    opening: 'I sell the opportunity in a specific sequence.',
    coreMessage:
      'Market, Cursor, AI coding, Southern Europe, timing, role, then why this candidate.',
    supportingExample:
      '[VALIDATE WITH CURSOR] — I will align the market and product points with your latest narrative.',
    executiveImplication:
      'Candidates should feel chosen for leverage, not processed through a requisition.',
    likelyQuestion: 'How do you talk about early-stage risk without overselling certainty?',
    transition: 'And when objections land, I treat them as diagnostics.',
  },
  'candidate-objections': {
    opening: 'These four objections are the ones I expect most often.',
    coreMessage:
      'Early stage, strong current role, immature territory, and perceived risk — each needs a precise response.',
    supportingExample:
      'On risk, I do not argue. I isolate whether the concern is company, product, scope, pay or career path.',
    executiveImplication:
      'Objection handling is qualification. Some noes are healthy.',
    likelyQuestion: 'Which objection do you find hardest to overcome?',
    transition: 'Once people join, retention becomes the next leadership test.',
  },
  'retention-philosophy': {
    opening: 'Retention is not a perk strategy. It is an operating outcome.',
    coreMessage:
      'People stay when expectations are clear, coaching is real, growth is visible and accountability is fair.',
    supportingExample:
      '[ADD MY EXAMPLE] — a retention save driven by clarity and coaching rather than compensation alone.',
    executiveImplication:
      'If top performers leave, I look first at leadership systems, not the market.',
    likelyQuestion: 'How do you balance high standards with psychological safety?',
    transition: 'That philosophy becomes a coaching framework.',
  },
  'coaching-framework': {
    opening: 'I coach through a six-step loop.',
    coreMessage: 'Diagnose, prioritize, practice, apply, measure, reinforce.',
    supportingExample:
      'The key is one priority at a time. Multi-topic coaching creates activity without change.',
    executiveImplication:
      'This gives managers a shared language and makes improvement inspectable.',
    likelyQuestion: 'How do you know when coaching is not working?',
    transition: 'Diagnosis has to be sharper than “they need to prospect more.”',
  },
  'performance-diagnosis': {
    opening: 'Before I coach, I diagnose the constraint.',
    coreMessage:
      'Skill, will, strategy, execution, territory conditions and management support.',
    supportingExample:
      '[ADD MY EXAMPLE] — a case where the issue looked like will but was territory design.',
    executiveImplication:
      'Wrong diagnosis wastes quarters. Right diagnosis creates fair accountability.',
    likelyQuestion: 'How do you handle a will issue versus a skill issue?',
    transition: 'Let me show the coaching arc with a case study shell.',
  },
  'coaching-case-study': {
    opening: 'This case study is intentionally left as placeholders for my real example.',
    coreMessage:
      'I will walk situation, diagnosis, plan, actions, business result and behavioural change.',
    supportingExample:
      '[ADD PERSONAL EXAMPLE] / [ADD MEASURED RESULT] — replace before the live session.',
    executiveImplication:
      'You should hear evidence of coaching that moved both behaviour and revenue.',
    likelyQuestion: 'How long did the turnaround take?',
    transition: 'Improvement only matters if we measure the right indicators.',
  },
  'measuring-improvement': {
    opening: 'I separate leading indicators from lagging outcomes.',
    coreMessage:
      'Coach pipeline creation, engagement quality and consistency. Judge conversion, cycle, win rate and deal size.',
    supportingExample:
      'If leading indicators move and lagging do not, the strategy or territory hypothesis is wrong.',
    executiveImplication:
      'This prevents false comfort from activity metrics.',
    likelyQuestion: 'Which leading indicator do you trust most?',
    transition: 'Measurement sits inside a development rhythm.',
  },
  'development-rhythm': {
    opening: 'Development needs a calendar, not good intentions.',
    coreMessage:
      'Weekly 1:1s, deal coaching, call review, monthly development reviews and quarterly career conversations.',
    supportingExample:
      '[ADD MY EXAMPLE] — how this rhythm changed consistency across a team.',
    executiveImplication:
      'Career conversations quarterly prevent surprise attrition.',
    likelyQuestion: 'How do you keep 1:1s from becoming status updates?',
    transition: 'Now to revenue leadership and predictability.',
  },
  'revenue-operating-system': {
    opening: 'Predictable revenue is an operating system outcome.',
    coreMessage:
      'Territory strategy, pipeline generation, opportunity quality and forecast discipline.',
    supportingExample:
      'End-of-quarter pressure is a symptom that the weekly system was weak.',
    executiveImplication:
      'I would rather be early and evidence-based than late and optimistic.',
    likelyQuestion: 'Where do most regional teams break first?',
    transition: 'Here is the Southern Europe market thesis shell.',
  },
  'growth-thesis': {
    opening: 'I will not invent market data in this room.',
    coreMessage:
      'France, Spain, Italy, Portugal and additional markets each get a card with assumptions to validate.',
    supportingExample:
      'France starts with Pierre Fabre as a named strategic account — Southern Europe footprint, digital & AI acceleration, engineering density worth winning as a reference.',
    executiveImplication:
      'One regional strategy, local execution plans, explicit risks and next actions.',
    likelyQuestion: 'Which market would you prioritize in the first two quarters?',
    transition: 'Here is who Pierre Fabre is — and what they sell.',
  },
  'pierre-fabre': {
    opening: 'Pierre Fabre is the France strategic account I would open with.',
    coreMessage:
      'A French healthcare group — second worldwide in dermo-cosmetics, with oncology and medical dermatology alongside pharmacy brands.',
    supportingExample:
      'Avène, Ducray, Klorane, René Furterer, A-Derma, Même, Elgydium, Dexeryl — plus medical care in oncology and dermatology.',
    executiveImplication:
      'Large engineering and digital footprint across Southern Europe — a reference logo that opens doors in healthcare and consumer health.',
    likelyQuestion: 'Why start with Pierre Fabre rather than a pure digital native?',
    transition: 'Strategy only works if the culture creates pipeline every week.',
  },
  'pipeline-culture': {
    opening: 'Pipeline culture is the difference between a region that grows and one that surges.',
    coreMessage:
      'Weekly habit, account ownership, quality coaching, early executive engagement, one GTM system.',
    supportingExample:
      '[ADD MY EXAMPLE] — a team that stopped quarterly rescue mode by installing weekly creation.',
    executiveImplication:
      'Managers must inspect quality, not celebrate raw volume.',
    likelyQuestion: 'How do you involve partners and marketing without diluting ownership?',
    transition: 'This is the weekly cadence I would run.',
  },
  'weekly-pipeline-cadence': {
    opening: 'A simple week beats a complicated playbook that no one follows.',
    coreMessage:
      'Monday focus, Tuesday prospecting, Wednesday partners and marketing, Thursday executives, Friday review.',
    supportingExample:
      'Friday is for learning and commitments, not theatre. Next week starts already pointed.',
    executiveImplication:
      'Cadence makes pipeline generation coachable and visible.',
    likelyQuestion: 'How rigid is this when sellers travel or run large deals?',
    transition: 'Then we inspect health on a dashboard.',
  },
  'pipeline-dashboard': {
    opening: 'These numbers are illustrative on purpose.',
    coreMessage:
      'Coverage, creation, stage mix, age, next steps, multi-threading, conversion, slippage, accuracy, concentration.',
    supportingExample:
      'I would replace every figure with Southern Europe assumptions once I have the data.',
    executiveImplication:
      'The dashboard exists to force decisions, not to decorate a review.',
    likelyQuestion: 'What threshold would make you intervene immediately?',
    transition: 'Opportunity quality sits underneath those metrics.',
  },
  'opportunity-qualification': {
    opening: 'I use a simplified MEDDPICC as a live evidence checklist.',
    coreMessage:
      'For each element: status, evidence, risk and next action.',
    supportingExample:
      'If champion and economic buyer are unclear, the deal is not a forecast debate — it is a qualification gap.',
    executiveImplication:
      'This language should be shared across the region so reviews stay crisp.',
    likelyQuestion: 'How complete must MEDDPICC be before Best Case?',
    transition: 'Deal inspection questions keep managers honest.',
  },
  'deal-inspection': {
    opening: 'These are the questions I want every manager able to answer.',
    coreMessage:
      'Why act, why now, outcome owner, blockers, evidence, next commitment, slip risks, multi-threading, unknowns.',
    supportingExample:
      'If the next step is internal, I push for a customer commitment.',
    executiveImplication:
      'Inspection quality is a leading indicator of forecast quality.',
    likelyQuestion: 'How do you run this without turning reviews into interrogations?',
    transition: 'Forecast categories need the same clarity.',
  },
  'forecast-categories': {
    opening: 'I define forecast categories as evidence grades.',
    coreMessage: 'Commit, Best Case, Upside, Pipeline — each with a clear standard.',
    supportingExample:
      'Commit requires customer evidence, validated process and a credible close plan.',
    executiveImplication:
      'Shared definitions stop optimistic translation between managers.',
    likelyQuestion: 'Who owns the final call on Commit?',
    transition: 'That sits inside a broader forecast philosophy.',
  },
  'forecast-philosophy': {
    opening: 'My forecast standard is simple: no surprises.',
    coreMessage:
      'Evidence over optimism, customer commitments over activity, early risk, clear rules, shared accountability.',
    supportingExample:
      '[ADD MY RESULT] — a period where forecast accuracy improved because risk was surfaced weekly.',
    executiveImplication:
      'I would rather bring bad news early than protect a narrative.',
    likelyQuestion: 'How do you handle sandbagging versus over-forecasting?',
    transition: 'The weekly mechanism for this is the 1:1.',
  },
  'effective-one-on-ones': {
    opening: 'A forty-five-minute 1:1 should change the week.',
    coreMessage:
      'Person, commitments, deal coaching, development, decisions — not a status readout.',
    supportingExample:
      'If a 1:1 produces no decision and no coaching, it failed.',
    executiveImplication:
      'This is where accountability and care coexist.',
    likelyQuestion: 'How do you handle a seller who comes unprepared?',
    transition: 'Zooming out, this is the Regional Director dashboard I would run.',
  },
  'regional-dashboard': {
    opening: 'I manage the region from one decision-oriented view.',
    coreMessage:
      'Attainment, coverage, forecast, hiring, retention risk, strategic deals, market risks and decisions needed.',
    supportingExample:
      'Top strategic deals starts with Pierre Fabre — every red or amber item should map to an owner and a date.',
    executiveImplication:
      'This is also how I would communicate upward with Cursor leadership.',
    likelyQuestion: 'Which metric would you put at the top in the first quarter?',
    transition: 'Which brings us to the partnership I need with leadership.',
  },
  'leadership-asks': {
    opening: 'I am clear on the three things that make a Regional Director effective.',
    coreMessage: 'Strategic clarity, executive access and speed of decision-making.',
    supportingExample:
      'Without those, even strong local leadership becomes slow and fragmented.',
    executiveImplication:
      'I am not asking for comfort. I am asking for the conditions to execute.',
    likelyQuestion: 'What decision latency is acceptable for hiring and pricing?',
    transition: 'And here is the mutual commitment I offer in return.',
  },
  'mutual-commitment': {
    opening: 'Partnership has to be two-sided.',
    coreMessage:
      'I need clarity, sponsorship, speed, feedback and cross-functional support. You should expect transparency, standards and ownership.',
    supportingExample:
      'Early escalation is a feature. Silence is the risk.',
    executiveImplication:
      'This is how we stay one team while I own the region.',
    likelyQuestion: 'How do you escalate without creating noise?',
    transition: 'Now the first ninety days.',
  },
  'first-30-days': {
    opening: 'Days one to thirty are for listening and validation.',
    coreMessage:
      'Leaders, assumptions, talent, pipeline, customers, priorities and an initial talent map.',
    supportingExample:
      'I establish credibility by being precise about what I know and what I still need to prove.',
    executiveImplication:
      'I will not scale a plan on untested assumptions.',
    likelyQuestion: 'What would you need from us in week one?',
    transition: 'Days thirty-one to sixty convert insight into an operating plan.',
  },
  'days-31-60': {
    opening: 'The second month is about installing the system.',
    coreMessage:
      'Territory strategy, hiring launch, cadence, account plans, inspection and forecast quality.',
    supportingExample:
      'This is where cross-functional dependencies get named and owned.',
    executiveImplication:
      'By day sixty, the region should feel operationally clearer even if results are still early.',
    likelyQuestion: 'Which hiring roles come first?',
    transition: 'Days sixty-one to ninety are about momentum.',
  },
  'days-61-90': {
    opening: 'By day ninety I want a repeatable regional system, not a set of initiatives.',
    coreMessage:
      'Pipeline acceleration, talent gaps closing, executive relationships, playbook, forecast and a two-quarter plan.',
    supportingExample:
      '[ADD MY EXAMPLE] — what “momentum” would look like in measurable terms once assumptions are validated.',
    executiveImplication:
      'The output is a growth engine design, not a slide update.',
    likelyQuestion: 'What would you present back to leadership at day ninety?',
    transition: 'Here are the risks I would manage explicitly.',
  },
  'key-risks': {
    opening: 'I prefer named risks with operating mitigations.',
    coreMessage:
      'Hiring, market maturity, pipeline concentration and execution inconsistency.',
    supportingExample:
      'Each mitigation is a system already covered earlier — talent map, ICP focus, coverage diversity, weekly cadence.',
    executiveImplication:
      'Risk management is part of the operating rhythm, not a separate document.',
    likelyQuestion: 'Which risk worries you most for Southern Europe?',
    transition: 'Let me close on the leadership message.',
  },
  closing: {
    opening: 'If I leave you with one line, it is this.',
    coreMessage: 'Build the team. Create the system. Scale the region.',
    supportingExample:
      'Talent density, coaching, operating discipline and local leadership are the compounding loop.',
    executiveImplication:
      'That is how I would show up as Regional Director for Southern Europe.',
    likelyQuestion: 'What would you do differently from a standard regional hire?',
    transition: 'I would like your challenge and feedback.',
  },
  'discussion-feedback': {
    opening: 'I want your hardest questions.',
    coreMessage:
      'What would you challenge, where should impact come first, and what does year-one success look like?',
    supportingExample:
      'I am listening for constraints I cannot see from the outside.',
    executiveImplication:
      'Your answers help me refine the plan before day one.',
    likelyQuestion: 'Open discussion.',
    transition: 'Thank you — I am ready for the challenge.',
  },
}
