export type Category =
  | 'comportemental'
  | 'technique'
  | 'produit'
  | 'systeme'
  | 'culture'

export type Difficulty = 'junior' | 'mid' | 'senior'

export interface Question {
  id: string
  category: Category
  difficulty: Difficulty
  question: string
  hints: string[]
  keyPoints: string[]
  followUp?: string
}

export const categoryLabels: Record<Category, string> = {
  comportemental: 'Comportemental',
  technique: 'Technique',
  produit: 'Produit & IA',
  systeme: 'System Design',
  culture: 'Culture Cursor',
}

export const categoryDescriptions: Record<Category, string> = {
  comportemental: 'Questions STAR, leadership, collaboration et gestion de conflits',
  technique: 'Algorithmes, structures de données, debugging et code review',
  produit: 'LLMs, agents IA, UX développeur et vision produit',
  systeme: 'Architecture, scalabilité, latence et fiabilité',
  culture: 'Mission Cursor, valeurs et fit culturel',
}

export const questions: Question[] = [
  {
    id: 'beh-1',
    category: 'comportemental',
    difficulty: 'mid',
    question:
      'Racontez-moi une situation où vous avez dû livrer un produit sous une contrainte de temps très serrée. Comment avez-vous priorisé ?',
    hints: [
      'Utilisez la méthode STAR (Situation, Tâche, Action, Résultat)',
      'Montrez votre capacité à couper le scope intelligemment',
      'Mentionnez la communication avec les stakeholders',
    ],
    keyPoints: [
      'Priorisation basée sur l\'impact utilisateur',
      'Communication transparente sur les trade-offs',
      'Livraison incrémentale plutôt que perfection',
    ],
    followUp: 'Que feriez-vous différemment aujourd\'hui ?',
  },
  {
    id: 'beh-2',
    category: 'comportemental',
    difficulty: 'senior',
    question:
      'Décrivez un désaccord technique majeur avec un collègue ou un manager. Comment l\'avez-vous résolu ?',
    hints: [
      'Restez factuel, pas émotionnel',
      'Montrez que vous cherchez la meilleure solution, pas d\'avoir raison',
      'Expliquez comment vous avez testé les hypothèses',
    ],
    keyPoints: [
      'Écoute active et empathie',
      'Décision basée sur les données et les expériences',
      'Capacité à s\'aligner une fois la décision prise',
    ],
  },
  {
    id: 'beh-3',
    category: 'comportemental',
    difficulty: 'mid',
    question:
      'Parlez-moi d\'un échec significatif dans votre carrière. Qu\'avez-vous appris ?',
    hints: [
      'Choisissez un vrai échec, pas une fausse modestie',
      'Concentrez-vous sur les leçons apprises',
      'Montrez comment vous avez changé votre approche ensuite',
    ],
    keyPoints: [
      'Honnêteté et introspection',
      'Apprentissage concret et actions correctives',
      'Résilience face à l\'adversité',
    ],
  },
  {
    id: 'tech-1',
    category: 'technique',
    difficulty: 'mid',
    question:
      'Comment implémenteriez-vous un système de complétion de code en temps réel avec une latence inférieure à 200ms ?',
    hints: [
      'Pensez au streaming des tokens',
      'Considérez le caching et la prédiction locale',
      'Parlez de l\'optimisation du prompt et du contexte',
    ],
    keyPoints: [
      'Streaming SSE/WebSocket pour la réactivité perçue',
      'Réduction du contexte envoyé au modèle',
      'Cache des complétions fréquentes',
      'Débouncing et annulation des requêtes obsolètes',
    ],
    followUp: 'Comment géreriez-vous les erreurs réseau sans bloquer l\'éditeur ?',
  },
  {
    id: 'tech-2',
    category: 'technique',
    difficulty: 'senior',
    question:
      'Expliquez comment vous débuggeriez un problème où les suggestions de l\'IA sont incohérentes pour certains fichiers mais pas d\'autres.',
    hints: [
      'Commencez par reproduire le problème de manière fiable',
      'Isolez les variables : modèle, prompt, contexte, parsing',
      'Pensez aux logs et à l\'observabilité',
    ],
    keyPoints: [
      'Approche systématique : reproduire → isoler → corriger',
      'Analyse du contexte envoyé au modèle',
      'Vérification du parsing de la réponse',
      'Tests de régression',
    ],
  },
  {
    id: 'tech-3',
    category: 'technique',
    difficulty: 'junior',
    question:
      'Quelle est la différence entre un agent IA et un simple chatbot ? Donnez un exemple concret.',
    hints: [
      'Un agent peut prendre des actions, pas seulement répondre',
      'Pensez aux outils (fichiers, terminal, recherche)',
      'Mentionnez la boucle planifier → agir → observer',
    ],
    keyPoints: [
      'Capacité d\'action autonome via des outils',
      'Boucle de raisonnement multi-étapes',
      'Gestion du contexte et de la mémoire',
      'Exemple : agent qui modifie du code vs chatbot qui suggère',
    ],
  },
  {
    id: 'prod-1',
    category: 'produit',
    difficulty: 'senior',
    question:
      'Cursor vise à rendre les développeurs 10x plus productifs. Quelle fonctionnalité ajouteriez-vous et pourquoi ?',
    hints: [
      'Basez-vous sur des problèmes réels de développeurs',
      'Pensez à la mesure de l\'impact (métriques)',
      'Considérez les trade-offs UX vs puissance',
    ],
    keyPoints: [
      'Problème utilisateur clairement identifié',
      'Proposition de valeur différenciante',
      'Métriques de succès définies',
      'Faisabilité technique réaliste',
    ],
    followUp: 'Comment valideriez-vous cette idée avant de la développer ?',
  },
  {
    id: 'prod-2',
    category: 'produit',
    difficulty: 'mid',
    question:
      'Comment équilibreriez-vous la qualité des suggestions IA avec la vitesse de réponse pour une audience de développeurs exigeants ?',
    hints: [
      'Les devs préfèrent la vitesse mais détestent les mauvaises suggestions',
      'Pensez aux modes (rapide vs précis)',
      'Considérez le feedback utilisateur en boucle',
    ],
    keyPoints: [
      'Modes configurables selon le contexte',
      'Feedback loop pour améliorer le modèle',
      'Indicateurs de confiance sur les suggestions',
      'A/B testing pour valider les trade-offs',
    ],
  },
  {
    id: 'prod-3',
    category: 'produit',
    difficulty: 'mid',
    question:
      'Un utilisateur se plaint que l\'agent IA a supprimé du code important. Comment répondez-vous au produit et à l\'utilisateur ?',
    hints: [
      'Empathie d\'abord avec l\'utilisateur',
      'Analysez la cause racine (undo, preview, confirmation)',
      'Proposez des améliorations produit concrètes',
    ],
    keyPoints: [
      'Réponse empathique et immédiate à l\'utilisateur',
      'Analyse de la cause racine',
      'Propositions d\'amélioration (diff preview, undo, garde-fous)',
      'Communication transparente sur les limites de l\'IA',
    ],
  },
  {
    id: 'sys-1',
    category: 'systeme',
    difficulty: 'senior',
    question:
      'Concevez l\'architecture d\'un service qui sert des millions de requêtes de complétion de code par jour avec une latence p99 < 500ms.',
    hints: [
      'Commencez par estimer le QPS et la bande passante',
      'Pensez au load balancing et au caching',
      'Considérez la gestion des files d\'attente et le rate limiting',
    ],
    keyPoints: [
      'Estimation de charge et dimensionnement',
      'Architecture en couches (gateway, inference, cache)',
      'Stratégie de scaling horizontal',
      'Monitoring, alerting et circuit breakers',
      'Gestion des pics de charge',
    ],
    followUp: 'Comment géreriez-vous un déploiement de nouveau modèle sans downtime ?',
  },
  {
    id: 'sys-2',
    category: 'systeme',
    difficulty: 'mid',
    question:
      'Comment stockeriez-vous et récupéreriez efficacement le contexte d\'un projet entier (des milliers de fichiers) pour alimenter un LLM ?',
    hints: [
      'Le contexte LLM est limité (fenêtre de tokens)',
      'Pensez à l\'indexation sémantique (embeddings)',
      'Considérez la hiérarchie et la pertinence',
    ],
    keyPoints: [
      'Indexation vectorielle (embeddings) pour la recherche sémantique',
      'Chunking intelligent du code',
      'Ranking par pertinence à la requête',
      'Cache du contexte fréquemment utilisé',
    ],
  },
  {
    id: 'cul-1',
    category: 'culture',
    difficulty: 'mid',
    question:
      'Pourquoi voulez-vous rejoindre Cursor spécifiquement, et pas une autre entreprise IA ?',
    hints: [
      'Montrez que vous connaissez la mission de Cursor',
      'Liez votre expérience à leur vision',
      'Soyez authentique, pas générique',
    ],
    keyPoints: [
      'Connaissance de la mission (augmenter la productivité des devs)',
      'Alignement personnel avec la vision IA + développement',
      'Exemples concrets de votre passion pour le sujet',
    ],
  },
  {
    id: 'cul-2',
    category: 'culture',
    difficulty: 'mid',
    question:
      'Cursor est une startup en forte croissance. Comment vous adaptez-vous à un environnement qui change rapidement ?',
    hints: [
      'Donnez des exemples concrets de votre adaptabilité',
      'Montrez que vous êtes à l\'aise avec l\'ambiguïté',
      'Parlez de votre appétit pour l\'apprentissage',
    ],
    keyPoints: [
      'Flexibilité et adaptabilité démontrées',
      'Confort avec l\'ambiguïté et les priorités changeantes',
      'Proactivité et ownership',
      'Apprentissage continu',
    ],
  },
  {
    id: 'cul-3',
    category: 'culture',
    difficulty: 'senior',
    question:
      'Comment voyez-vous l\'avenir du développement logiciel avec l\'IA ? Quel rôle jouera le développeur dans 5 ans ?',
    hints: [
      'Montrez une vision nuancée, ni utopique ni catastrophiste',
      'Pensez à l\'évolution du rôle (architecte, reviewer, orchestrateur)',
      'Mentionnez les compétences qui resteront importantes',
    ],
    keyPoints: [
      'Vision équilibrée et réfléchie',
      'Le dev devient orchestrateur et reviewer de l\'IA',
      'Compétences humaines irremplaçables (architecture, jugement, créativité)',
      'Opportunité plutôt que menace',
    ],
  },
]

export const interviewTips = [
  {
    title: 'Méthode STAR',
    description:
      'Structurez vos réponses comportementales : Situation → Tâche → Action → Résultat. Visez 2-3 minutes par réponse.',
  },
  {
    title: 'Pensez à voix haute',
    description:
      'Pour les questions techniques, verbalisez votre raisonnement. L\'interviewer veut voir comment vous pensez, pas juste la réponse.',
  },
  {
    title: 'Posez des questions',
    description:
      'Clarifiez les contraintes avant de répondre. "Quel est le volume attendu ?" montre votre rigueur.',
  },
  {
    title: 'Connaissez Cursor',
    description:
      'Utilisez le produit. Testez les agents, Tab completion, et les règles. Montrez que vous comprenez le produit que vous aidez à construire.',
  },
  {
    title: 'Soyez honnête',
    description:
      'Si vous ne savez pas, dites-le et expliquez comment vous chercheriez la réponse. L\'honnêteté est valorisée.',
  },
  {
    title: 'Préparez vos questions',
    description:
      'Préparez 3-5 questions sur l\'équipe, la culture, les défis techniques et la vision produit.',
  },
]
