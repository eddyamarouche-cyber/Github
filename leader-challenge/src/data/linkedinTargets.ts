export interface LinkedInTarget {
  id: string
  fullName: string
  currentRole: string
  currentCompany: string
  country: string
  linkedinUrl: string
  signal: string
  photo: string
}

/**
 * Public LinkedIn targets for the Italy talent map.
 * Roles/companies taken from public LinkedIn profile pages — validate before interview.
 */
export const linkedinTargets: LinkedInTarget[] = [
  {
    id: 'guido-zanetti',
    fullName: 'Guido Zanetti',
    currentRole: 'Enterprise Account Executive',
    currentCompany: 'Databricks',
    country: 'Italy',
    linkedinUrl: 'https://www.linkedin.com/in/guido-zanetti/',
    signal: 'Enterprise AE with Twilio → Databricks path; strong Italy / Iberia digital-native coverage.',
    photo: '/images/linkedin/guido-zanetti.jpg',
  },
  {
    id: 'andrea-lupi',
    fullName: 'Andrea Lupi',
    currentRole: 'Enterprise Account Executive',
    currentCompany: 'Databricks',
    country: 'Italy · Milan',
    linkedinUrl: 'https://www.linkedin.com/in/andrealupi19/',
    signal: 'Data & AI enterprise seller; ex-AWS / Oracle / HP with fashion & luxury adjacency.',
    photo: '/images/linkedin/andrea-lupi.jpg',
  },
  {
    id: 'sofia-poggi',
    fullName: 'Sofia Poggi',
    currentRole: 'Enterprise Account Executive — Public Sector',
    currentCompany: 'MongoDB',
    country: 'Italy · Rome',
    linkedinUrl: 'https://www.linkedin.com/in/sofia-poggi-0692a911a/',
    signal: 'Public-sector AE; ex-Adobe / Accenture; PhD in Economy and Finance.',
    photo: '/images/linkedin/sofia-poggi.jpg',
  },
  {
    id: 'mauro-cenerelli',
    fullName: 'Mauro Cenerelli',
    currentRole: 'Named Enterprise Account Executive — Strategic Market',
    currentCompany: 'Databricks',
    country: 'Italy · Rome',
    linkedinUrl: 'https://www.linkedin.com/in/mauro-cenerelli-3699433/',
    signal: 'Strategic enterprise AE; recent Google field-sales background into Databricks.',
    photo: '/images/linkedin/mauro-cenerelli.jpg',
  },
  {
    id: 'ilaria-panizzolo',
    fullName: 'Ilaria Panizzolo',
    currentRole: 'Senior Account Executive',
    currentCompany: 'The Information Lab',
    country: 'Italy · Milan',
    linkedinUrl: 'https://www.linkedin.com/in/ilariapanizzolo/',
    signal: 'Analytics & AI seller; ex-Alteryx — Tableau / Snowflake ecosystem fluency.',
    photo: '/images/linkedin/ilaria-panizzolo.jpg',
  },
  {
    id: 'lorenzo-tagliaferri',
    fullName: 'Lorenzo Tagliaferri',
    currentRole: 'Account Executive',
    currentCompany: 'Databricks',
    country: 'Italy · Piacenza',
    linkedinUrl: 'https://www.linkedin.com/in/lorenzo-tagliaferri-79197b1/',
    signal: 'Moved from deep Databricks pre-sales into AE — high technical IQ and clock speed.',
    photo: '/images/linkedin/lorenzo-tagliaferri.jpg',
  },
  {
    id: 'luca-parravicini',
    fullName: 'Luca Parravicini',
    currentRole: 'Enterprise Account Executive',
    currentCompany: 'MongoDB',
    country: 'Italy · Milan',
    linkedinUrl: 'https://www.linkedin.com/in/lucaparravicini/',
    signal: 'Enterprise AE; ex-Dynatrace / Vodafone — C-level value selling and MEDDIC discipline.',
    photo: '/images/linkedin/luca-parravicini.jpg',
  },
]
