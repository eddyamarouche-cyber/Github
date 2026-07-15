import type { Translations } from '../types'

export const fr: Translations = {
  meta: {
    title: 'Coach Entretien Cursor',
    tagline: 'Préparez-vous à exceller lors de votre entretien',
    footer:
      'Coach Entretien Cursor — Outil de préparation aux entretiens techniques et comportementaux',
  },
  nav: {
    practice: 'Pratique',
    mock: 'Simulation',
    tips: 'Conseils',
    progress: 'Progression',
  },
  categoriesAll: 'Toutes',
  categories: {
    comportemental: {
      label: 'Comportemental',
      description:
        'Questions STAR, leadership, collaboration et gestion de conflits',
    },
    technique: {
      label: 'Technique',
      description:
        'Algorithmes, structures de données, debugging et code review',
    },
    produit: {
      label: 'Produit & IA',
      description: 'LLMs, agents IA, UX développeur et vision produit',
    },
    systeme: {
      label: 'System Design',
      description: 'Architecture, scalabilité, latence et fiabilité',
    },
    culture: {
      label: 'Culture Cursor',
      description: 'Mission Cursor, valeurs et fit culturel',
    },
  },
  practice: {
    emptyCategory: 'Aucune question dans cette catégorie.',
  },
  questionCard: {
    followUp: 'Question de suivi :',
    hints: 'Indices',
    keyPoints: 'Points clés',
    rating: 'Auto-évaluation de votre réponse :',
    notesPlaceholder: 'Notes personnelles sur votre réponse...',
    prev: '← Précédent',
    next: 'Suivant →',
  },
  ratings: {
    poor: 'À retravailler',
    ok: 'Correct',
    good: 'Bien',
    excellent: 'Excellent',
  },
  difficulty: {
    junior: 'junior',
    mid: 'mid',
    senior: 'senior',
  },
  mock: {
    title: 'Simulation d\'entretien',
    description:
      'Entraînez-vous dans des conditions réalistes : 45 minutes, 6 questions aléatoires avec chronomètre.',
    categoriesTitle: 'Catégories à inclure :',
    start: 'Démarrer la simulation',
    completeTitle: 'Simulation terminée !',
    completeText:
      'Vous avez répondu à {count} question(s) en {minutes} minutes.',
    backToMenu: 'Retour au menu',
    question: 'Question {current} / {total}',
    end: 'Terminer',
  },
  progress: {
    title: 'Votre progression',
    empty:
      'Aucune progression enregistrée. Commencez à pratiquer des questions pour suivre vos progrès !',
    scoreLabel: 'Score global',
    practiced: '{count} question(s) pratiquée(s)',
    clear: 'Réinitialiser la progression',
  },
  tips: {
    title: 'Conseils pour réussir',
    items: [
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
    ],
    meddic: {
      title: 'Méthode MEDDIC',
      subtitle: 'Framework de qualification commerciale B2B',
      description:
        'MEDDIC est une méthodologie de qualification des opportunités commerciales, particulièrement utilisée en vente enterprise SaaS. Maîtriser ce framework est essentiel pour les rôles Sales, Account Executive et Customer Success chez Cursor.',
      whenToUse:
        'Utilisez MEDDIC pour structurer vos réponses sur la vente enterprise, la découverte client, et pour poser des questions pertinentes lors de vos simulations de pitch.',
      interviewLabel: 'En entretien :',
      cursorExampleLabel: 'Exemple Cursor :',
      discoveryQuestions: 'Questions de découverte',
      scenariosTitle: 'Scénarios d\'entretien avec MEDDIC',
      pillars: [
        {
          letter: 'M',
          name: 'Metrics',
          description:
            'Les métriques quantifiables qui démontrent la valeur de la solution. Quels KPIs le client veut-il améliorer ?',
          interviewTip:
            'Dans vos réponses, chiffrez toujours l\'impact : "Réduction de 30% du temps de développement" plutôt que "amélioration de la productivité".',
          exampleQuestions: [
            'Quels KPIs suivez-vous pour mesurer la productivité de vos équipes ?',
            'Quel ROI attendez-vous d\'un outil de développement IA ?',
            'Combien de temps vos développeurs passent-ils sur des tâches répétitives ?',
          ],
          cursorExample:
            'Cursor peut réduire le temps de coding de 40% — demandez comment le client mesure aujourd\'hui la vélocité de ses équipes (PRs/semaine, time-to-merge, bugs en prod).',
        },
        {
          letter: 'E',
          name: 'Economic Buyer',
          description:
            'La personne qui détient le pouvoir budgétaire et qui signe le contrat. Ce n\'est pas toujours votre interlocuteur direct.',
          interviewTip:
            'Montrez que vous savez identifier et accéder au décideur économique, même quand vous négociez avec un utilisateur technique.',
          exampleQuestions: [
            'Qui valide les investissements outils pour les équipes engineering ?',
            'Quel est le processus d\'approbation budgétaire pour un nouvel outil ?',
            'Le VP Engineering a-t-il déjà approuvé des achats similaires ?',
          ],
          cursorExample:
            'Chez une entreprise de 500 devs, l\'Economic Buyer est souvent le CTO ou VP Engineering, pas le lead dev qui utilise Cursor au quotidien.',
        },
        {
          letter: 'D',
          name: 'Decision Criteria',
          description:
            'Les critères formels et informels sur lesquels le client base sa décision d\'achat (sécurité, intégration, prix, support…).',
          interviewTip:
            'Listez les critères avant de pitcher. Adaptez votre discours pour adresser chaque critère explicitement.',
          exampleQuestions: [
            'Quels critères utilisez-vous pour évaluer un nouvel outil de développement ?',
            'La sécurité du code et la confidentialité sont-elles des prérequis ?',
            'Qu\'est-ce qui vous a fait choisir ou rejeter des outils similaires par le passé ?',
          ],
          cursorExample:
            'Critères fréquents pour Cursor : SOC 2, mode privacy, intégration IDE (VS Code/JetBrains), ROI mesurable, adoption par les équipes.',
        },
        {
          letter: 'D',
          name: 'Decision Process',
          description:
            'Les étapes, acteurs et délais du processus d\'achat. Combien de temps faut-il pour passer de la découverte à la signature ?',
          interviewTip:
            'Démontrez votre capacité à cartographier le processus et à ne pas forcer une closing prématurée.',
          exampleQuestions: [
            'Quelles sont les étapes entre l\'évaluation et la signature du contrat ?',
            'Y a-t-il un comité de sélection ou un processus de POC ?',
            'Quel est votre calendrier cible pour déployer un nouvel outil ?',
          ],
          cursorExample:
            'Processus typique : POC 2 semaines → feedback équipe → validation sécurité → approbation budget → contrat annuel.',
        },
        {
          letter: 'I',
          name: 'Identify Pain',
          description:
            'Les problèmes business concrets et urgents du client. Sans douleur identifiée, pas de deal.',
          interviewTip:
            'Creuser la douleur avec des questions ouvertes. Quantifiez le coût de l\'inaction ("Combien vous coûte ce problème par mois ?").',
          exampleQuestions: [
            'Quel est votre plus grand défi en termes de productivité développeur ?',
            'Qu\'est-ce qui vous empêche de livrer plus vite ?',
            'Comment gérez-vous la dette technique et le temps perdu en boilerplate ?',
          ],
          cursorExample:
            'Douleurs courantes : turnover dev (burnout), time-to-market trop long, difficulté à recruter, qualité de code inégale entre juniors et seniors.',
        },
        {
          letter: 'C',
          name: 'Champion',
          description:
            'Votre allié interne qui vend Cursor en votre absence. Il a de l\'influence et un intérêt personnel au succès du projet.',
          interviewTip:
            'Identifiez et cultivez votre champion dès la première réunion. Donnez-lui les arguments pour convaincre en interne.',
          exampleQuestions: [
            'Qui dans votre équipe est le plus enthousiaste à l\'idée d\'adopter un outil IA ?',
            'Qui pourrait porter ce projet en interne auprès de la direction ?',
            'De quoi aurait-il besoin pour défendre cette solution en comité ?',
          ],
          cursorExample:
            'Le champion idéal : un Staff Engineer ou Engineering Manager frustré par la lenteur de son équipe, déjà convaincu par l\'IA, avec l\'oreille du VP.',
        },
      ],
      scenarios: [
        {
          title: 'Pitch discovery (5 min)',
          description:
            'Structurez votre découverte autour de I → M → D : identifiez la douleur, quantifiez-la, puis comprenez les critères de décision.',
        },
        {
          title: 'Réponse comportementale Sales',
          description:
            'Utilisez STAR + MEDDIC : "Situation (douleur client) → Tâche (qualifier le deal) → Action (j\'ai identifié le champion et cartographié le processus) → Résultat (deal signé en 6 semaines)".',
        },
        {
          title: 'Objection "c\'est trop cher"',
          description:
            'Revenez aux Metrics : "Si Cursor fait gagner 2h/jour à 50 devs à 80€/h, c\'est 16 000€/semaine. Notre licence coûte une fraction de ça."',
        },
      ],
    },
  },
  questions: {
    'beh-1': {
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
    'beh-2': {
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
    'beh-3': {
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
    'tech-1': {
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
      followUp:
        'Comment géreriez-vous les erreurs réseau sans bloquer l\'éditeur ?',
    },
    'tech-2': {
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
    'tech-3': {
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
    'prod-1': {
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
    'prod-2': {
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
    'prod-3': {
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
    'sys-1': {
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
      followUp:
        'Comment géreriez-vous un déploiement de nouveau modèle sans downtime ?',
    },
    'sys-2': {
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
    'cul-1': {
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
    'cul-2': {
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
    'cul-3': {
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
  },
}
