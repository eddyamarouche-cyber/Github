export interface Interlocutor {
  name: string
  role?: string
}

export interface Profile {
  candidateName: string
  interviewDate: string
  role: string
  region: string
  company: string
  interlocutors: Interlocutor[]
}

/**
 * Edit these fields before the interview.
 * They appear on the cover slide and in the presentation chrome.
 */
export const profile: Profile = {
  candidateName: 'Eddy Amarouche',
  interviewDate: 'Monday 27th July 2026',
  role: 'Regional Director, Southern Europe',
  region: 'Southern Europe',
  company: 'Cursor',
  interlocutors: [
    { name: 'Ismail Elmas' },
    { name: 'Benjamin Caller' },
    { name: 'Ricky Patel' },
  ],
}
