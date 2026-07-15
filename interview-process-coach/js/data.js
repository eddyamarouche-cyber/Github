export const STEPS = [
  {
    id: 'recruiter-screen',
    number: 1,
    title: 'Recruiter Screen',
    shortTitle: 'Recruiter Screen',
    objective:
      "Premier contact avec le recruteur. L'objectif est de vérifier votre motivation, votre adéquation générale avec le poste et votre capacité à communiquer clairement. C'est souvent un entretien de 20 à 30 minutes.",
    probableQuestions: [
      'Parlez-moi de vous et de votre parcours.',
      'Pourquoi souhaitez-vous rejoindre notre entreprise ?',
      'Pourquoi ce poste en particulier ?',
      'Quelles sont vos attentes salariales ?',
      'Quand seriez-vous disponible pour commencer ?',
      'Où en êtes-vous dans vos autres processus de recrutement ?',
    ],
    tips: [
      'Préparez un pitch de 2 minutes : qui vous êtes, ce que vous faites, pourquoi vous postulez.',
      'Montrez que vous connaissez l\'entreprise : produits, actualités, culture.',
      'Soyez honnête sur vos motivations sans critiquer votre employeur actuel.',
      'Posez des questions sur les prochaines étapes du processus.',
      'Parlez avec enthousiasme mais restez naturel.',
    ],
    questionsToAsk: [
      'À quoi ressemble le processus de recrutement dans son ensemble ?',
      'Quelles sont les qualités des candidats qui réussissent le mieux chez vous ?',
      'Quelle est la taille de l\'équipe pour ce poste ?',
      'Quels sont les principaux défis de ce rôle ?',
    ],
  },
  {
    id: 'hiring-manager',
    number: 2,
    title: 'Hiring Manager Interview',
    shortTitle: 'Hiring Manager',
    objective:
      "Entretien avec votre futur manager. Il évalue si vous pouvez réussir dans le rôle au quotidien : vos compétences, votre expérience, votre façon de travailler et votre alignement avec l'équipe.",
    probableQuestions: [
      'Décrivez une réalisation dont vous êtes particulièrement fier(e).',
      'Comment gérez-vous les priorités quand tout semble urgent ?',
      'Racontez-moi une situation difficile avec un collègue ou un stakeholder.',
      'Comment définissez-vous le succès dans ce type de poste ?',
      'Quelles compétences cherchez-vous à développer ?',
      'Pourquoi devrions-nous vous embaucher plutôt qu\'un autre candidat ?',
    ],
    tips: [
      'Utilisez la méthode STAR : Situation, Tâche, Action, Résultat.',
      'Donnez des exemples concrets liés aux responsabilités du poste.',
      'Montrez que vous comprenez les enjeux du manager et de son équipe.',
      'Soyez transparent sur vos points forts et vos axes de progression.',
      'Écoutez activement et rebondissez sur ce que dit l\'interlocuteur.',
    ],
    questionsToAsk: [
      'Comment décririez-vous le style de management de l\'équipe ?',
      'Quels seraient mes objectifs pour les 3 à 6 premiers mois ?',
      'Quels sont les plus grands défis actuels de l\'équipe ?',
      'Comment mesurez-vous la réussite dans ce rôle ?',
    ],
  },
  {
    id: 'product-interview',
    number: 3,
    title: 'Product Interview',
    shortTitle: 'Product Interview',
    objective:
      "Évaluation de votre sens produit : compréhension des utilisateurs, capacité à prioriser, à structurer une réflexion et à prendre des décisions. On teste votre façon de penser, pas seulement vos connaissances.",
    probableQuestions: [
      'Comment amélioreriez-vous l\'un de nos produits ?',
      'Comment prioriseriez-vous ces fonctionnalités ?',
      'Décrivez un produit que vous admirez et pourquoi.',
      'Comment collectez-vous et utilisez-vous les retours utilisateurs ?',
      'Racontez une décision produit difficile que vous avez prise.',
      'Comment définiriez-vous la vision produit pour ce poste ?',
    ],
    tips: [
      'Structurez toujours votre réponse : contexte, problème, options, recommandation.',
      'Pensez utilisateur avant solution : qui est impacté et pourquoi ?',
      'N\'hésitez pas à poser des questions de clarification avant de répondre.',
      'Montrez comment vous utilisez des données et de l\'intuition.',
      'Soyez créatif mais restez réaliste sur les contraintes.',
    ],
    questionsToAsk: [
      'Quelle est la vision produit à 12 mois pour cette équipe ?',
      'Comment l\'équipe produit collabore-t-elle avec la tech et le business ?',
      'Quels indicateurs sont les plus suivis aujourd\'hui ?',
      'Quelle est la plus grande opportunité produit non exploitée ?',
    ],
  },
  {
    id: 'business-case',
    number: 4,
    title: 'Business Case',
    shortTitle: 'Business Case',
    objective:
      "Mise en situation sur un cas concret lié au métier. L'objectif est d'évaluer votre analyse, votre rigueur, votre capacité à formuler des recommandations et à défendre vos choix devant un jury.",
    probableQuestions: [
      'Voici un cas : comment analyseriez-vous cette situation ?',
      'Quels chiffres ou hypothèses utiliseriez-vous ?',
      'Quelle recommandation feriez-vous au comité de direction ?',
      'Quels risques voyez-vous dans votre proposition ?',
      'Comment mesureriez-vous le succès de votre plan ?',
      'Que feriez-vous si vos hypothèses s\'avéraient fausses ?',
    ],
    tips: [
      'Clarifiez l\'objectif du cas avant de vous lancer (croissance, rentabilité, lancement…).',
      'Structurez votre analyse : diagnostic, options, recommandation, plan d\'action.',
      'Chiffrez quand c\'est possible, même avec des estimations raisonnables.',
      'Anticipez les objections et montrez des plans B.',
      'Gardez une trace de votre raisonnement, pas seulement du résultat.',
    ],
    questionsToAsk: [
      'Ce type de cas reflète-t-il des problématiques réelles du poste ?',
      'À quoi ressemble une bonne performance sur ce type d\'exercice ?',
      'Quel niveau de détail est attendu dans les recommandations ?',
      'Comment ce rôle contribue-t-il aux décisions stratégiques ?',
    ],
  },
  {
    id: 'role-play',
    number: 5,
    title: 'Role Play',
    shortTitle: 'Role Play',
    objective:
      "Simulation d'une situation professionnelle réelle : réunion difficile, négociation, présentation à un client ou gestion de conflit. On observe votre communication, votre calme et votre capacité à influencer.",
    probableQuestions: [
      'Vous devez convaincre un stakeholder réticent : comment procédez-vous ?',
      'Un client est mécontent : jouons la scène ensemble.',
      'Vous devez dire non à une demande importante : comment réagissez-vous ?',
      'Présentez votre recommandation à un comité sceptique.',
      'Comment gérez-vous une réunion qui dérape ?',
      'Comment recadrez-vous une discussion sans braquer l\'autre partie ?',
    ],
    tips: [
      'Écoutez vraiment votre interlocuteur avant de répondre.',
      'Reformulez pour montrer que vous avez compris la préoccupation.',
      'Restez calme et professionnel, même si la situation est tendue.',
      'Cherchez des solutions gagnant-gagnant quand c\'est possible.',
      'Après le role play, demandez un feedback sur votre performance.',
    ],
    questionsToAsk: [
      'Ce type de situation arrive-t-il souvent dans ce rôle ?',
      'Quels comportements sont les plus valorisés dans ces échanges ?',
      'Comment l\'équipe gère-t-elle les désaccords en interne ?',
      'Y a-t-il des formations ou du coaching pour ce type de compétences ?',
    ],
  },
  {
    id: 'final-interview',
    number: 6,
    title: 'Final Interview',
    shortTitle: 'Final Interview',
    objective:
      "Dernière étape, souvent avec un dirigeant ou un comité. On valide votre adéquation culturelle, votre vision à long terme et votre capacité à représenter l'entreprise. C'est aussi l'occasion de confirmer votre motivation.",
    probableQuestions: [
      'Pourquoi vous, et pourquoi maintenant ?',
      'Où vous voyez-vous dans 3 à 5 ans ?',
      'Qu\'est-ce qui vous motive le plus dans cette opportunité ?',
      'Quelles valeurs guident votre façon de travailler ?',
      'Avez-vous des questions sur notre stratégie ou notre culture ?',
      'Y a-t-il quelque chose qui pourrait vous faire décliner l\'offre ?',
    ],
    tips: [
      'Montrez une vision claire de ce que vous apporterez à l\'entreprise.',
      'Soyez authentique : les dirigeants détectent facilement le manque de sincérité.',
      'Préparez 3 à 5 questions stratégiques et pertinentes.',
      'Rappelez vos points forts sans répéter tout votre parcours.',
      'Exprimez clairement votre enthousiasme si le poste vous convient.',
    ],
    questionsToAsk: [
      'Quelle est votre vision pour l\'entreprise dans les prochaines années ?',
      'Qu\'est-ce qui vous enthousiasme le plus dans l\'évolution de l\'équipe ?',
      'Comment décririez-vous la culture en trois mots ?',
      'Qu\'attendez-vous de la personne qui occupera ce poste ?',
    ],
  },
]

export function getStepById(id) {
  return STEPS.find((step) => step.id === id) ?? null
}
