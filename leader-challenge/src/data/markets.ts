import type { MarketCard } from './types'

/**
 * Southern Europe market cards.
 * Do not invent market data — replace placeholders with validated assumptions.
 */
export const markets: MarketCard[] = [
  {
    id: 'france',
    country: 'France',
    marketMaturity: '[ADD MARKET ASSUMPTION]',
    prioritySegments: '[VALIDATE WITH CURSOR] — priority ICP segments',
    strategicAccounts: 'Pierre Fabre / [ADD COMPANY]',
    hiringPriority: '[VALIDATE WITH CURSOR] — hiring sequence and role mix',
    partnerOpportunity: '[ADD MARKET ASSUMPTION] — partner motion to explore',
    keyRisk: '[ADD MARKET ASSUMPTION]',
    nextAction: '[ADD MY EXAMPLE] — first 30-day validation action',
  },
  {
    id: 'spain',
    country: 'Spain',
    marketMaturity: '[ADD MARKET ASSUMPTION]',
    prioritySegments: '[VALIDATE WITH CURSOR] — priority ICP segments',
    strategicAccounts: '[ADD COMPANY] / [ADD COMPANY]',
    hiringPriority: '[VALIDATE WITH CURSOR] — hiring sequence and role mix',
    partnerOpportunity: '[ADD MARKET ASSUMPTION] — partner motion to explore',
    keyRisk: '[ADD MARKET ASSUMPTION]',
    nextAction: '[ADD MY EXAMPLE] — first 30-day validation action',
  },
  {
    id: 'italy',
    country: 'Italy',
    marketMaturity: '[ADD MARKET ASSUMPTION]',
    prioritySegments: '[VALIDATE WITH CURSOR] — priority ICP segments',
    strategicAccounts: '[ADD COMPANY] / [ADD COMPANY]',
    hiringPriority: '[VALIDATE WITH CURSOR] — hiring sequence and role mix',
    partnerOpportunity: '[ADD MARKET ASSUMPTION] — partner motion to explore',
    keyRisk: '[ADD MARKET ASSUMPTION]',
    nextAction: '[ADD MY EXAMPLE] — first 30-day validation action',
  },
  {
    id: 'portugal',
    country: 'Portugal',
    marketMaturity: '[ADD MARKET ASSUMPTION]',
    prioritySegments: '[VALIDATE WITH CURSOR] — priority ICP segments',
    strategicAccounts: '[ADD COMPANY] / [ADD COMPANY]',
    hiringPriority: '[VALIDATE WITH CURSOR] — hiring sequence and role mix',
    partnerOpportunity: '[ADD MARKET ASSUMPTION] — partner motion to explore',
    keyRisk: '[ADD MARKET ASSUMPTION]',
    nextAction: '[ADD MY EXAMPLE] — first 30-day validation action',
  },
  {
    id: 'additional',
    country: 'Additional priority markets',
    marketMaturity: '[ADD MARKET ASSUMPTION]',
    prioritySegments: '[VALIDATE WITH CURSOR] — where to expand next',
    strategicAccounts: '[ADD COMPANY] / [ADD COMPANY]',
    hiringPriority: '[VALIDATE WITH CURSOR] — sequence relative to core markets',
    partnerOpportunity: '[ADD MARKET ASSUMPTION]',
    keyRisk: '[ADD MARKET ASSUMPTION]',
    nextAction: '[VALIDATE WITH CURSOR] — confirm market prioritization',
  },
]
