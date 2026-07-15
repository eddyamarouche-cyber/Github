import type { Translations } from '../types'

export const en: Translations = {
  meta: {
    title: 'Coach Entretien Cursor',
    tagline: 'Prepare to excel in your interview',
    footer:
      'Coach Entretien Cursor — Interview prep tool for technical and behavioral interviews',
  },
  nav: {
    practice: 'Practice',
    mock: 'Mock Interview',
    tips: 'Tips',
    progress: 'Progress',
  },
  categoriesAll: 'All',
  categories: {
    comportemental: {
      label: 'Behavioral',
      description:
        'STAR questions, leadership, collaboration, and conflict management',
    },
    technique: {
      label: 'Technical',
      description:
        'Algorithms, data structures, debugging, and code review',
    },
    produit: {
      label: 'Product & AI',
      description: 'LLMs, AI agents, developer UX, and product vision',
    },
    systeme: {
      label: 'System Design',
      description: 'Architecture, scalability, latency, and reliability',
    },
    culture: {
      label: 'Cursor Culture',
      description: 'Cursor mission, values, and cultural fit',
    },
  },
  practice: {
    emptyCategory: 'No questions in this category.',
  },
  questionCard: {
    followUp: 'Follow-up question:',
    hints: 'Hints',
    keyPoints: 'Key points',
    rating: 'Self-assess your answer:',
    notesPlaceholder: 'Personal notes on your answer...',
    prev: '← Previous',
    next: 'Next →',
  },
  ratings: {
    poor: 'Needs work',
    ok: 'Fair',
    good: 'Good',
    excellent: 'Excellent',
  },
  difficulty: {
    junior: 'junior',
    mid: 'mid',
    senior: 'senior',
  },
  mock: {
    title: 'Mock interview',
    description:
      'Practice under realistic conditions: 45 minutes, 6 random questions with a timer.',
    categoriesTitle: 'Categories to include:',
    start: 'Start mock interview',
    completeTitle: 'Mock interview complete!',
    completeText:
      'You answered {count} question(s) in {minutes} minutes.',
    backToMenu: 'Back to menu',
    question: 'Question {current} / {total}',
    end: 'End',
  },
  progress: {
    title: 'Your progress',
    empty:
      'No progress recorded yet. Start practicing questions to track your improvement!',
    scoreLabel: 'Overall score',
    practiced: '{count} question(s) practiced',
    clear: 'Reset progress',
  },
  tips: {
    title: 'Tips for success',
    items: [
      {
        title: 'STAR method',
        description:
          'Structure your behavioral answers: Situation → Task → Action → Result. Aim for 2–3 minutes per answer.',
      },
      {
        title: 'Think out loud',
        description:
          'For technical questions, verbalize your reasoning. The interviewer wants to see how you think, not just the final answer.',
      },
      {
        title: 'Ask questions',
        description:
          'Clarify constraints before answering. "What volume are we expecting?" shows rigor.',
      },
      {
        title: 'Know Cursor',
        description:
          'Use the product. Try agents, Tab completion, and rules. Show that you understand the product you are helping to build.',
      },
      {
        title: 'Be honest',
        description:
          'If you do not know something, say so and explain how you would find the answer. Honesty is valued.',
      },
      {
        title: 'Prepare your questions',
        description:
          'Prepare 3–5 questions about the team, culture, technical challenges, and product vision.',
      },
    ],
    meddic: {
      title: 'MEDDIC Method',
      subtitle: 'B2B enterprise sales qualification framework',
      description:
        'MEDDIC is a methodology for qualifying sales opportunities, widely used in enterprise SaaS sales. Mastering this framework is essential for Sales, Account Executive, and Customer Success roles at Cursor.',
      whenToUse:
        'Use MEDDIC to structure your answers on enterprise sales, customer discovery, and to ask relevant questions during pitch simulations.',
      interviewLabel: 'In the interview:',
      cursorExampleLabel: 'Cursor example:',
      discoveryQuestions: 'Discovery questions',
      scenariosTitle: 'MEDDIC interview scenarios',
      pillars: [
        {
          letter: 'M',
          name: 'Metrics',
          description:
            'Quantifiable metrics that demonstrate the value of the solution. Which KPIs does the customer want to improve?',
          interviewTip:
            'In your answers, always quantify impact: "30% reduction in development time" rather than "improved productivity".',
          exampleQuestions: [
            'Which KPIs do you track to measure your teams\' productivity?',
            'What ROI do you expect from an AI development tool?',
            'How much time do your developers spend on repetitive tasks?',
          ],
          cursorExample:
            'Cursor can reduce coding time by 40% — ask how the customer currently measures team velocity (PRs/week, time-to-merge, production bugs).',
        },
        {
          letter: 'E',
          name: 'Economic Buyer',
          description:
            'The person who holds budget authority and signs the contract. This is not always your direct contact.',
          interviewTip:
            'Show that you know how to identify and reach the economic buyer, even when you are negotiating with a technical user.',
          exampleQuestions: [
            'Who approves tool investments for engineering teams?',
            'What is the budget approval process for a new tool?',
            'Has the VP of Engineering approved similar purchases before?',
          ],
          cursorExample:
            'At a 500-developer company, the Economic Buyer is often the CTO or VP of Engineering, not the lead dev who uses Cursor daily.',
        },
        {
          letter: 'D',
          name: 'Decision Criteria',
          description:
            'The formal and informal criteria the customer uses to make a purchase decision (security, integration, price, support, etc.).',
          interviewTip:
            'List the criteria before pitching. Tailor your message to address each criterion explicitly.',
          exampleQuestions: [
            'What criteria do you use to evaluate a new development tool?',
            'Are code security and confidentiality prerequisites?',
            'What made you choose or reject similar tools in the past?',
          ],
          cursorExample:
            'Common criteria for Cursor: SOC 2, privacy mode, IDE integration (VS Code/JetBrains), measurable ROI, team adoption.',
        },
        {
          letter: 'D',
          name: 'Decision Process',
          description:
            'The steps, stakeholders, and timelines of the buying process. How long does it take to go from discovery to signature?',
          interviewTip:
            'Demonstrate your ability to map the process and avoid forcing a premature close.',
          exampleQuestions: [
            'What are the steps between evaluation and contract signature?',
            'Is there a selection committee or POC process?',
            'What is your target timeline for deploying a new tool?',
          ],
          cursorExample:
            'Typical process: 2-week POC → team feedback → security validation → budget approval → annual contract.',
        },
        {
          letter: 'I',
          name: 'Identify Pain',
          description:
            'The customer\'s concrete and urgent business problems. No identified pain, no deal.',
          interviewTip:
            'Dig into the pain with open questions. Quantify the cost of inaction ("How much does this problem cost you per month?").',
          exampleQuestions: [
            'What is your biggest challenge in terms of developer productivity?',
            'What is preventing you from shipping faster?',
            'How do you manage technical debt and time lost on boilerplate?',
          ],
          cursorExample:
            'Common pain points: developer turnover (burnout), long time-to-market, difficulty hiring, uneven code quality between juniors and seniors.',
        },
        {
          letter: 'C',
          name: 'Champion',
          description:
            'Your internal ally who sells Cursor when you are not in the room. They have influence and a personal stake in the project\'s success.',
          interviewTip:
            'Identify and nurture your champion from the first meeting. Give them the arguments to convince stakeholders internally.',
          exampleQuestions: [
            'Who on your team is most enthusiastic about adopting an AI tool?',
            'Who could champion this project internally with leadership?',
            'What would they need to defend this solution in committee?',
          ],
          cursorExample:
            'The ideal champion: a Staff Engineer or Engineering Manager frustrated by their team\'s slow pace, already convinced by AI, with the VP\'s ear.',
        },
      ],
      scenarios: [
        {
          title: 'Discovery pitch (5 min)',
          description:
            'Structure your discovery around I → M → D: identify the pain, quantify it, then understand the decision criteria.',
        },
        {
          title: 'Sales behavioral answer',
          description:
            'Use STAR + MEDDIC: "Situation (customer pain) → Task (qualify the deal) → Action (I identified the champion and mapped the process) → Result (deal signed in 6 weeks)".',
        },
        {
          title: '"It\'s too expensive" objection',
          description:
            'Return to Metrics: "If Cursor saves 2 hours/day for 50 devs at €80/hour, that\'s €16,000/week. Our license costs a fraction of that."',
        },
      ],
    },
  },
  questions: {
    'beh-1': {
      question:
        'Tell me about a situation where you had to ship a product under a very tight deadline. How did you prioritize?',
      hints: [
        'Use the STAR method (Situation, Task, Action, Result)',
        'Show your ability to cut scope intelligently',
        'Mention communication with stakeholders',
      ],
      keyPoints: [
        'Prioritization based on user impact',
        'Transparent communication about trade-offs',
        'Incremental delivery over perfection',
      ],
      followUp: 'What would you do differently today?',
    },
    'beh-2': {
      question:
        'Describe a major technical disagreement with a colleague or manager. How did you resolve it?',
      hints: [
        'Stay factual, not emotional',
        'Show that you seek the best solution, not to be right',
        'Explain how you tested your hypotheses',
      ],
      keyPoints: [
        'Active listening and empathy',
        'Decisions based on data and experience',
        'Ability to align once a decision is made',
      ],
    },
    'beh-3': {
      question:
        'Tell me about a significant failure in your career. What did you learn?',
      hints: [
        'Choose a real failure, not false modesty',
        'Focus on lessons learned',
        'Show how you changed your approach afterward',
      ],
      keyPoints: [
        'Honesty and introspection',
        'Concrete learning and corrective actions',
        'Resilience in the face of adversity',
      ],
    },
    'tech-1': {
      question:
        'How would you implement a real-time code completion system with latency under 200ms?',
      hints: [
        'Think about token streaming',
        'Consider caching and local prediction',
        'Discuss prompt and context optimization',
      ],
      keyPoints: [
        'SSE/WebSocket streaming for perceived responsiveness',
        'Reducing context sent to the model',
        'Caching frequent completions',
        'Debouncing and canceling stale requests',
      ],
      followUp:
        'How would you handle network errors without blocking the editor?',
    },
    'tech-2': {
      question:
        'Explain how you would debug a problem where AI suggestions are inconsistent for some files but not others.',
      hints: [
        'Start by reproducing the problem reliably',
        'Isolate variables: model, prompt, context, parsing',
        'Think about logs and observability',
      ],
      keyPoints: [
        'Systematic approach: reproduce → isolate → fix',
        'Analysis of context sent to the model',
        'Verification of response parsing',
        'Regression tests',
      ],
    },
    'tech-3': {
      question:
        'What is the difference between an AI agent and a simple chatbot? Give a concrete example.',
      hints: [
        'An agent can take actions, not just respond',
        'Think about tools (files, terminal, search)',
        'Mention the plan → act → observe loop',
      ],
      keyPoints: [
        'Autonomous action capability via tools',
        'Multi-step reasoning loop',
        'Context and memory management',
        'Example: agent that modifies code vs chatbot that suggests',
      ],
    },
    'prod-1': {
      question:
        'Cursor aims to make developers 10x more productive. What feature would you add and why?',
      hints: [
        'Base your answer on real developer problems',
        'Think about measuring impact (metrics)',
        'Consider UX vs power trade-offs',
      ],
      keyPoints: [
        'Clearly identified user problem',
        'Differentiated value proposition',
        'Defined success metrics',
        'Realistic technical feasibility',
      ],
      followUp: 'How would you validate this idea before building it?',
    },
    'prod-2': {
      question:
        'How would you balance AI suggestion quality with response speed for a demanding developer audience?',
      hints: [
        'Devs prefer speed but hate bad suggestions',
        'Think about modes (fast vs precise)',
        'Consider user feedback loops',
      ],
      keyPoints: [
        'Configurable modes depending on context',
        'Feedback loop to improve the model',
        'Confidence indicators on suggestions',
        'A/B testing to validate trade-offs',
      ],
    },
    'prod-3': {
      question:
        'A user complains that the AI agent deleted important code. How do you respond to the product team and the user?',
      hints: [
        'Empathy first with the user',
        'Analyze the root cause (undo, preview, confirmation)',
        'Propose concrete product improvements',
      ],
      keyPoints: [
        'Empathetic and immediate response to the user',
        'Root cause analysis',
        'Improvement proposals (diff preview, undo, guardrails)',
        'Transparent communication about AI limitations',
      ],
    },
    'sys-1': {
      question:
        'Design the architecture of a service that serves millions of code completion requests per day with p99 latency < 500ms.',
      hints: [
        'Start by estimating QPS and bandwidth',
        'Think about load balancing and caching',
        'Consider queue management and rate limiting',
      ],
      keyPoints: [
        'Load estimation and sizing',
        'Layered architecture (gateway, inference, cache)',
        'Horizontal scaling strategy',
        'Monitoring, alerting, and circuit breakers',
        'Handling traffic spikes',
      ],
      followUp:
        'How would you deploy a new model without downtime?',
    },
    'sys-2': {
      question:
        'How would you efficiently store and retrieve the context of an entire project (thousands of files) to feed an LLM?',
      hints: [
        'LLM context is limited (token window)',
        'Think about semantic indexing (embeddings)',
        'Consider hierarchy and relevance',
      ],
      keyPoints: [
        'Vector indexing (embeddings) for semantic search',
        'Intelligent code chunking',
        'Ranking by query relevance',
        'Caching frequently used context',
      ],
    },
    'cul-1': {
      question:
        'Why do you want to join Cursor specifically, and not another AI company?',
      hints: [
        'Show that you know Cursor\'s mission',
        'Connect your experience to their vision',
        'Be authentic, not generic',
      ],
      keyPoints: [
        'Knowledge of the mission (increasing developer productivity)',
        'Personal alignment with the AI + development vision',
        'Concrete examples of your passion for the topic',
      ],
    },
    'cul-2': {
      question:
        'Cursor is a fast-growing startup. How do you adapt to a rapidly changing environment?',
      hints: [
        'Give concrete examples of your adaptability',
        'Show that you are comfortable with ambiguity',
        'Talk about your appetite for learning',
      ],
      keyPoints: [
        'Demonstrated flexibility and adaptability',
        'Comfort with ambiguity and shifting priorities',
        'Proactivity and ownership',
        'Continuous learning',
      ],
    },
    'cul-3': {
      question:
        'How do you see the future of software development with AI? What role will the developer play in 5 years?',
      hints: [
        'Show a nuanced vision, neither utopian nor catastrophic',
        'Think about the evolving role (architect, reviewer, orchestrator)',
        'Mention skills that will remain important',
      ],
      keyPoints: [
        'Balanced and thoughtful vision',
        'The developer becomes an orchestrator and reviewer of AI',
        'Irreplaceable human skills (architecture, judgment, creativity)',
        'Opportunity rather than threat',
      ],
    },
  },
}
