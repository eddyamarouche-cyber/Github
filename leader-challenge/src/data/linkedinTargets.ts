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
  {
    id: 'marialice-pasquini',
    fullName: 'Marialice Pasquini',
    currentRole: 'Enterprise Account Executive',
    currentCompany: 'Databricks',
    country: 'Italy',
    linkedinUrl: 'https://www.linkedin.com/in/marialicepasquini/?skipRedirect=true',
    signal: 'Enterprise AE; ex-Nutanix / VMware Southern Europe cloud GTM — data, AI and transformation.',
    photo: '/images/linkedin/marialice-pasquini.jpg',
  },
]

/**
 * Public LinkedIn targets for the Spain / Iberia talent map.
 * Roles/companies taken from public LinkedIn profile pages — validate before interview.
 */
export const linkedinTargetsSpain: LinkedInTarget[] = [
  {
    id: 'raphael-sublet',
    fullName: 'Raphaël Sublet',
    currentRole: 'GTM & Country Lead Iberia',
    currentCompany: 'CloudBees',
    country: 'Spain · Madrid',
    linkedinUrl: 'https://www.linkedin.com/in/raphaelsublet/?skipRedirect=true',
    signal:
      'Country lead for Iberia; ex-Grafana / Kong / Sprinklr enterprise AE with Spain–Italy coverage.',
    photo: '/images/linkedin/raphael-sublet.jpg',
  },
  {
    id: 'jorge-munoz',
    fullName: 'Jorge Muñoz',
    currentRole: 'Named Account Executive',
    currentCompany: 'Databricks',
    country: 'Spain · Madrid',
    linkedinUrl: 'https://www.linkedin.com/in/jorge-munoz-akamai/?skipRedirect=true',
    signal:
      'Named AE at Databricks; ex-Akamai SDR of the year → ServiceNow enterprise path into data & AI.',
    photo: '/images/linkedin/jorge-munoz.jpg',
  },
  {
    id: 'anna-acuna',
    fullName: 'Anna Acuña',
    currentRole: 'Account Executive — Strategic Accounts Telefónica',
    currentCompany: 'MongoDB',
    country: 'Spain · Barcelona',
    linkedinUrl: 'https://www.linkedin.com/in/anna-acuna/',
    signal:
      'Strategic AE on Telefónica; ex-HPE Ericsson account path — enterprise tech selling in Spain.',
    photo: '/images/linkedin/anna-acuna.jpg',
  },
  {
    id: 'francesca-cartia',
    fullName: 'Francesca Cartia',
    currentRole: 'Account Executive — Strategic Accounts',
    currentCompany: 'MongoDB',
    country: 'Spain · Barcelona',
    linkedinUrl: 'https://www.linkedin.com/in/francescacartia/',
    signal:
      'Strategic AE (FSI); MongoDB EAD → AE path; ex-dentsu account manager with builder background.',
    photo: '/images/linkedin/francesca-cartia.jpg',
  },
]
