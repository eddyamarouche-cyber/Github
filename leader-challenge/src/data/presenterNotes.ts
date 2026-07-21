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
    transition: 'Before the standard — one image of what winning looks like.',
  },
  'spanish-team-trophies': {
    opening: 'This is the feeling I want in Iberia.',
    coreMessage:
      'Winning is not individual heroics. It is a team that wants the trophy together and celebrates as one.',
    supportingExample:
      'Spain’s best runs have always looked like this — shared pressure, shared joy, shared standard.',
    executiveImplication:
      'If we hire and coach for that culture, the operating system has something worth protecting.',
    likelyQuestion: 'How do you build a winning culture across Spain, Portugal and Italy?',
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
      'A strong team moves in one direction, creates lift for each other and stays aligned under pressure.',
    supportingExample:
      'Wild geese fly farther together because every bird helps the flock and the V keeps reforming.',
    executiveImplication:
      'Talent density matters — but so does shared direction and mutual enablement.',
    likelyQuestion: 'How do you keep a regional team flying in formation across markets?',
    transition: 'Here is how that standard and that team mindset show up in four leadership roles.',
  },
  'who-i-am-as-a-leader': {
    opening: 'Before the workstreams, I want you to know how I show up as a manager.',
    coreMessage:
      'I lead as a talent builder, performance coach, operating leader and executive partner.',
    supportingExample:
      '[ADD MY EXAMPLE] — a concrete moment that shows how those four roles show up in practice.',
    executiveImplication:
      'If this frame feels right, the rest of the session is simply how I apply it at Cursor.',
    likelyQuestion: 'Which of these four roles do you lean on first in a new region?',
    transition: 'That frame becomes a simple operating system.',
  },
  'operating-system': {
    opening: 'Everything I do as a leader sits on four pillars.',
    coreMessage:
      'Talent density, coaching cadence, pipeline discipline and executive alignment.',
    supportingExample:
      '[ADD MY EXAMPLE] — how these pillars showed up in a weekly operating rhythm.',
    executiveImplication:
      'If one pillar is weak, growth becomes noisy. If all four are strong, the region compounds.',
    likelyQuestion: 'Which pillar would you install first for Italy and Iberia?',
    transition: 'Let me make success concrete in the Cursor context.',
  },
  'success-at-cursor': {
    opening: 'I want alignment on what good looks like before we inspect the methods.',
    coreMessage:
      'Success is talent density, a real coaching culture, predictable revenue and one-team execution across Italy and Iberia.',
    supportingExample:
      '[VALIDATE WITH CURSOR] — I will adjust these outcomes to your current regional priorities.',
    executiveImplication:
      'Every section that follows should ladder back to these outcomes.',
    likelyQuestion: 'Which of these outcomes matters most in the first two quarters?',
    transition: 'Here is how the working session is structured.',
  },
  'session-summary': {
    opening: 'I will run the rest of the session through three engines.',
    coreMessage:
      'Recruitment raises the bar. Retention grows the team. Revenue runs the business.',
    supportingExample:
      'If any one of these is weak, the region becomes noisy. If all three are strong, growth compounds.',
    executiveImplication:
      'Every method that follows should map back to one of these three outcomes.',
    likelyQuestion: 'Where do you want the deepest inspection first?',
    transition: 'Let’s start with recruitment and the A-player standard.',
  },
  'a-player-profile': {
    opening: 'I do not hire for a résumé match. I hire for an A-player profile.',
    coreMessage:
      'The bar is performance plus learning velocity plus the ability to help build a category.',
    supportingExample:
      '[ADD MY EXAMPLE] — a hire who succeeded because of ownership and learning speed, not just pedigree.',
    executiveImplication:
      'In an emerging category, coachability and ambiguity tolerance matter as much as past attainment.',
    likelyQuestion: 'How do you detect learning velocity in an interview?',
    transition: 'That profile becomes a scorecard.',
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
      '[VALIDATE WITH CURSOR] — ICP, references and hiring sequence need your current view.',
    executiveImplication:
      'One regional strategy, local execution plans, explicit risks and next actions.',
    likelyQuestion: 'Which market would you prioritize in the first two quarters?',
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
      'Every red or amber item should map to an owner and a date.',
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
