export interface MeddicPillar {
  letter: string
  name: string
  description: string
  interviewTip: string
  exampleQuestions: string[]
  cursorExample: string
}

export const meddicIntro = {
  title: 'Méthode MEDDIC',
  subtitle: 'Framework de qualification commerciale B2B',
  description:
    'MEDDIC est une méthodologie de qualification des opportunités commerciales, particulièrement utilisée en vente enterprise SaaS. Maîtriser ce framework est essentiel pour les rôles Sales, Account Executive et Customer Success chez Cursor.',
  whenToUse:
    'Utilisez MEDDIC pour structurer vos réponses sur la vente enterprise, la découverte client, et pour poser des questions pertinentes lors de vos simulations de pitch.',
}

export const meddicPillars: MeddicPillar[] = [
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
]

export const meddicInterviewScenarios = [
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
]
