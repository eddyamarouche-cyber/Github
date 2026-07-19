import type { CoachingCase } from './types'

/**
 * Replace placeholders with a real coaching example before the interview.
 */
export const coachingCases: CoachingCase[] = [
  {
    id: 'case-1',
    situation: '[ADD PERSONAL EXAMPLE] — seller, territory and performance context.',
    initialPerformance: '[ADD INITIAL METRIC] — e.g. pipeline creation, win rate or forecast accuracy.',
    diagnosis:
      '[ADD MY EXAMPLE] — skill, will, strategy, execution, territory or management support.',
    coachingPlan:
      '[ADD COACHING ACTION] — diagnose, prioritize, practice, apply, measure, reinforce.',
    actionsTaken:
      '[ADD COACHING ACTION] — specific 1:1s, deal reviews, call practice or ride-alongs.',
    businessResult: '[ADD MEASURED RESULT] — commercial outcome after the coaching cycle.',
    behaviouralImprovement:
      '[ADD MEASURED RESULT] — observable change in preparation, discovery or follow-through.',
    lessonsLearned:
      '[ADD MY EXAMPLE] — what this taught about coaching cadence and accountability.',
  },
]
