export type SlideKind =
  | 'hero'
  | 'why'
  | 'proof'
  | 'vision'
  | 'phase'
  | 'close'

export interface Slide {
  id: string
  kind: SlideKind
  eyebrow?: string
  title: string
  lead?: string
  points?: string[]
  phaseLabel?: string
  phaseDays?: string
  cta?: { label: string; href: string }
}

export const presenter = {
  name: 'Ed AMA',
  email: 'eddyamarouche@gmail.com',
  company: 'Cursor',
  role: 'Candidat — contribution produit & IA',
}

/** Top-bar shortcuts to the 30 / 60 / 90 day phases. */
export const monthNav = [
  { id: 'd30', label: 'Mois 1', short: 'M1', days: '1–30' },
  { id: 'd60', label: 'Mois 2', short: 'M2', days: '31–60' },
  { id: 'd90', label: 'Mois 3', short: 'M3', days: '61–90' },
] as const

export const slides: Slide[] = [
  {
    id: 'hero',
    kind: 'hero',
    title: 'Cursor',
    lead: 'Un plan clair pour contribuer vite, apprendre en profondeur, et livrer de la valeur mesurable.',
  },
  {
    id: 'why',
    kind: 'why',
    eyebrow: 'Pourquoi Cursor',
    title: 'L’éditeur qui place l’agent au centre du craft développeur',
    lead: 'Je ne candidate pas pour “un job tech”. Je candidate pour construire l’outil que j’utilise déjà pour penser, coder et livrer.',
    points: [
      'Cursor redéfinit le couple humain–modèle : moins de friction, plus d’intention.',
      'Le produit gagne quand le feedback développeur devient une boucle courte.',
      'Je veux contribuer là où UX, agents et système se rencontrent.',
    ],
  },
  {
    id: 'proof',
    kind: 'proof',
    eyebrow: 'Preuve de sérieux',
    title: 'J’ai déjà construit mon terrain d’entraînement',
    lead: 'Coach Entretien Cursor — une app React pour pratiquer questions comportementales, techniques, produit, system design et culture.',
    points: [
      '14+ questions structurées avec indices et points clés',
      'Simulation chronométrée de 45 minutes',
      'Suivi de progression local et méthode STAR',
      'Stack : React 19, TypeScript, Vite — livrable, pas théorique',
    ],
  },
  {
    id: 'vision',
    kind: 'vision',
    eyebrow: 'Ce que j’apporte',
    title: 'Exécution produit, clarté utilisateur, obsession du détail',
    points: [
      'Transformer une intention vague en expérience concrète et testable',
      'Écrire du code lisible, instrumenté, prêt à itérer en équipe',
      'Communiquer simplement : problèmes, trade-offs, décisions',
      'Apprendre vite le domaine agents / LLM côté développeur',
    ],
  },
  {
    id: 'd30',
    kind: 'phase',
    eyebrow: 'Plan d’intégration',
    phaseLabel: 'Mois 1 · Jours 1–30',
    phaseDays: '30',
    title: 'Ancrage : comprendre, écouter, livrer petit',
    points: [
      'Cartographier le produit, les surfaces critiques et le flux agent',
      'Shadowing, docs internes, rituels d’équipe — absorber le contexte',
      'Premier shipping : fix UX ou polish à fort impact / faible risque',
      'Mettre en place ma boucle feedback (notes, métriques, demos)',
    ],
  },
  {
    id: 'd60',
    kind: 'phase',
    eyebrow: 'Plan d’intégration',
    phaseLabel: 'Mois 2 · Jours 31–60',
    phaseDays: '60',
    title: 'Ownership : porter une initiative de bout en bout',
    points: [
      'Posséder une feature ou un chantier UX agent de taille moyenne',
      'Améliorer une friction mesurable (temps, clarté, taux de succès)',
      'Écrire ou renforcer les garde-fous qualité (tests, observabilité)',
      'Collaborer étroitement design / eng / research selon le besoin',
    ],
  },
  {
    id: 'd90',
    kind: 'phase',
    eyebrow: 'Plan d’intégration',
    phaseLabel: 'Mois 3 · Jours 61–90',
    phaseDays: '90',
    title: 'Impact : multiplier la valeur de l’équipe',
    points: [
      'Livrer un résultat visible pour les utilisateurs Cursor',
      'Proposer une amélioration structurelle (parcours, agent, tooling)',
      'Documenter décisions et patterns pour accélérer les suivants',
      'Être un collègue fiable : autonomie, clarté, rythme soutenable',
    ],
  },
  {
    id: 'close',
    kind: 'close',
    eyebrow: 'Prochaine étape',
    title: 'Prêt à en parler',
    lead: 'Voici mon plan. Je suis disponible pour le défendre, l’ajuster à vos priorités, et commencer.',
    cta: {
      label: 'Écrire à Ed',
      href: 'mailto:eddyamarouche@gmail.com?subject=Cursor%20—%20suite%20de%20conversation',
    },
  },
]
