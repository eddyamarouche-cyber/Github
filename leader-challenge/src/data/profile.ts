export interface Profile {
  candidateName: string
  interviewDate: string
  role: string
  region: string
  company: string
}

/**
 * Edit these fields before the interview.
 * They appear on the cover slide and in the presentation chrome.
 */
export const profile: Profile = {
  candidateName: '[ADD CANDIDATE NAME]',
  interviewDate: '[ADD INTERVIEW DATE]',
  role: 'Regional Director, Southern Europe',
  region: 'Southern Europe',
  company: 'Cursor',
}
