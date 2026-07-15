import type { Translations } from '../types'

export const it: Translations = {
  meta: {
    title: 'Coach Entretien Cursor',
    tagline: 'Preparati a eccellere nel tuo colloquio',
    footer:
      'Coach Entretien Cursor — Strumento di preparazione per colloqui tecnici e comportamentali',
  },
  nav: {
    practice: 'Pratica',
    mock: 'Simulazione',
    tips: 'Consigli',
    progress: 'Progressi',
  },
  categoriesAll: 'Tutte',
  categories: {
    comportemental: {
      label: 'Comportamentale',
      description:
        'Domande STAR, leadership, collaborazione e gestione dei conflitti',
    },
    technique: {
      label: 'Tecnico',
      description:
        'Algoritmi, strutture dati, debugging e code review',
    },
    produit: {
      label: 'Prodotto & IA',
      description: 'LLM, agenti IA, UX per sviluppatori e visione di prodotto',
    },
    systeme: {
      label: 'System Design',
      description: 'Architettura, scalabilità, latenza e affidabilità',
    },
    culture: {
      label: 'Cultura Cursor',
      description: 'Missione Cursor, valori e fit culturale',
    },
  },
  practice: {
    emptyCategory: 'Nessuna domanda in questa categoria.',
  },
  questionCard: {
    followUp: 'Domanda di approfondimento:',
    hints: 'Suggerimenti',
    keyPoints: 'Punti chiave',
    rating: 'Autovalutazione della tua risposta:',
    notesPlaceholder: 'Note personali sulla tua risposta...',
    prev: '← Precedente',
    next: 'Successivo →',
  },
  ratings: {
    poor: 'Da migliorare',
    ok: 'Discreto',
    good: 'Buono',
    excellent: 'Eccellente',
  },
  difficulty: {
    junior: 'junior',
    mid: 'mid',
    senior: 'senior',
  },
  mock: {
    title: 'Simulazione di colloquio',
    description:
      'Allenati in condizioni realistiche: 45 minuti, 6 domande casuali con cronometro.',
    categoriesTitle: 'Categorie da includere:',
    start: 'Avvia la simulazione',
    completeTitle: 'Simulazione terminata!',
    completeText:
      'Hai risposto a {count} domande in {minutes} minuti.',
    backToMenu: 'Torna al menu',
    question: 'Domanda {current} / {total}',
    end: 'Termina',
  },
  progress: {
    title: 'I tuoi progressi',
    empty:
      'Nessun progresso registrato. Inizia a esercitarti con le domande per monitorare i tuoi miglioramenti!',
    scoreLabel: 'Punteggio complessivo',
    practiced: '{count} domande esercitate',
    clear: 'Reimposta i progressi',
  },
  tips: {
    title: 'Consigli per il successo',
    items: [
      {
        title: 'Metodo STAR',
        description:
          'Struttura le tue risposte comportamentali: Situazione → Compito → Azione → Risultato. Punta a 2-3 minuti per risposta.',
      },
      {
        title: 'Pensa ad alta voce',
        description:
          'Per le domande tecniche, verbalizza il tuo ragionamento. L\'intervistatore vuole vedere come pensi, non solo la risposta.',
      },
      {
        title: 'Fai domande',
        description:
          'Chiarisci i vincoli prima di rispondere. "Qual è il volume previsto?" dimostra il tuo rigore.',
      },
      {
        title: 'Conosci Cursor',
        description:
          'Usa il prodotto. Prova gli agenti, Tab completion e le regole. Dimostra di capire il prodotto che contribuisci a costruire.',
      },
      {
        title: 'Sii onesto',
        description:
          'Se non lo sai, dillo e spiega come cercheresti la risposta. L\'onestà è apprezzata.',
      },
      {
        title: 'Prepara le tue domande',
        description:
          'Prepara 3-5 domande sul team, la cultura, le sfide tecniche e la visione di prodotto.',
      },
    ],
    meddic: {
      title: 'Metodo MEDDIC',
      subtitle: 'Framework di qualificazione commerciale B2B',
      description:
        'MEDDIC è una metodologia di qualificazione delle opportunità commerciali, particolarmente utilizzata nella vendita enterprise SaaS. Padroneggiare questo framework è essenziale per i ruoli Sales, Account Executive e Customer Success in Cursor.',
      whenToUse:
        'Usa MEDDIC per strutturare le tue risposte sulla vendita enterprise, la discovery del cliente e per porre domande pertinenti durante le simulazioni di pitch.',
      interviewLabel: 'In colloquio:',
      cursorExampleLabel: 'Esempio Cursor:',
      discoveryQuestions: 'Domande di discovery',
      scenariosTitle: 'Scenari di colloquio con MEDDIC',
      pillars: [
        {
          letter: 'M',
          name: 'Metrics',
          description:
            'Le metriche quantificabili che dimostrano il valore della soluzione. Quali KPI il cliente vuole migliorare?',
          interviewTip:
            'Nelle tue risposte, quantifica sempre l\'impatto: "Riduzione del 30% del tempo di sviluppo" piuttosto che "miglioramento della produttività".',
          exampleQuestions: [
            'Quali KPI monitorate per misurare la produttività dei vostri team?',
            'Quale ROI vi aspettate da uno strumento di sviluppo IA?',
            'Quanto tempo i vostri sviluppatori dedicano a compiti ripetitivi?',
          ],
          cursorExample:
            'Cursor può ridurre il tempo di coding del 40% — chiedi come il cliente misura oggi la velocità dei propri team (PR/settimana, time-to-merge, bug in produzione).',
        },
        {
          letter: 'E',
          name: 'Economic Buyer',
          description:
            'La persona che detiene il potere di budget e firma il contratto. Non è sempre il tuo interlocutore diretto.',
          interviewTip:
            'Dimostra di saper identificare e raggiungere il decisore economico, anche quando negozi con un utente tecnico.',
          exampleQuestions: [
            'Chi approva gli investimenti in strumenti per i team engineering?',
            'Qual è il processo di approvazione del budget per un nuovo strumento?',
            'Il VP Engineering ha già approvato acquisti simili?',
          ],
          cursorExample:
            'In un\'azienda con 500 sviluppatori, l\'Economic Buyer è spesso il CTO o il VP Engineering, non il lead dev che usa Cursor ogni giorno.',
        },
        {
          letter: 'D',
          name: 'Decision Criteria',
          description:
            'I criteri formali e informali su cui il cliente basa la decisione d\'acquisto (sicurezza, integrazione, prezzo, supporto…).',
          interviewTip:
            'Elenca i criteri prima del pitch. Adatta il discorso per affrontare esplicitamente ciascun criterio.',
          exampleQuestions: [
            'Quali criteri usate per valutare un nuovo strumento di sviluppo?',
            'La sicurezza del codice e la riservatezza sono prerequisiti?',
            'Cosa vi ha fatto scegliere o rifiutare strumenti simili in passato?',
          ],
          cursorExample:
            'Criteri frequenti per Cursor: SOC 2, modalità privacy, integrazione IDE (VS Code/JetBrains), ROI misurabile, adozione da parte dei team.',
        },
        {
          letter: 'D',
          name: 'Decision Process',
          description:
            'Le fasi, gli attori e le tempistiche del processo di acquisto. Quanto tempo serve per passare dalla discovery alla firma?',
          interviewTip:
            'Dimostra la capacità di mappare il processo e di non forzare una chiusura prematura.',
          exampleQuestions: [
            'Quali sono le fasi tra la valutazione e la firma del contratto?',
            'C\'è un comitato di selezione o un processo di POC?',
            'Qual è la tempistica prevista per il deploy di un nuovo strumento?',
          ],
          cursorExample:
            'Processo tipico: POC 2 settimane → feedback del team → validazione sicurezza → approvazione budget → contratto annuale.',
        },
        {
          letter: 'I',
          name: 'Identify Pain',
          description:
            'I problemi di business concreti e urgenti del cliente. Senza un pain identificato, nessun deal.',
          interviewTip:
            'Approfondisci il pain con domande aperte. Quantifica il costo dell\'inazione ("Quanto vi costa questo problema al mese?").',
          exampleQuestions: [
            'Qual è la vostra sfida più grande in termini di produttività degli sviluppatori?',
            'Cosa vi impedisce di consegnare più velocemente?',
            'Come gestite il debito tecnico e il tempo perso in boilerplate?',
          ],
          cursorExample:
            'Pain frequenti: turnover degli sviluppatori (burnout), time-to-market troppo lungo, difficoltà nel recruiting, qualità del codice disomogenea tra junior e senior.',
        },
        {
          letter: 'C',
          name: 'Champion',
          description:
            'Il tuo alleato interno che vende Cursor in tua assenza. Ha influenza e un interesse personale nel successo del progetto.',
          interviewTip:
            'Identifica e coltiva il tuo champion fin dalla prima riunione. Forniscigli gli argomenti per convincere internamente.',
          exampleQuestions: [
            'Chi nel vostro team è più entusiasta all\'idea di adottare uno strumento IA?',
            'Chi potrebbe portare avanti questo progetto internamente verso la direzione?',
            'Di cosa avrebbe bisogno per difendere questa soluzione in comitato?',
          ],
          cursorExample:
            'Il champion ideale: uno Staff Engineer o Engineering Manager frustrato dalla lentezza del proprio team, già convinto dall\'IA, con l\'orecchio del VP.',
        },
      ],
      scenarios: [
        {
          title: 'Pitch discovery (5 min)',
          description:
            'Struttura la discovery attorno a I → M → D: identifica il pain, quantificalo, poi comprendi i criteri di decisione.',
        },
        {
          title: 'Risposta comportamentale Sales',
          description:
            'Usa STAR + MEDDIC: "Situazione (pain del cliente) → Compito (qualificare il deal) → Azione (ho identificato il champion e mappato il processo) → Risultato (deal firmato in 6 settimane)".',
        },
        {
          title: 'Obiezione "è troppo caro"',
          description:
            'Torna alle Metrics: "Se Cursor fa risparmiare 2 ore/giorno a 50 dev a 80€/ora, sono 16.000€/settimana. La nostra licenza costa una frazione di quello."',
        },
      ],
    },
  },
  questions: {
    'beh-1': {
      question:
        'Raccontami una situazione in cui hai dovuto consegnare un prodotto con una scadenza molto stretta. Come hai stabilito le priorità?',
      hints: [
        'Usa il metodo STAR (Situazione, Compito, Azione, Risultato)',
        'Mostra la tua capacità di ridurre lo scope in modo intelligente',
        'Menziona la comunicazione con gli stakeholder',
      ],
      keyPoints: [
        'Prioritizzazione basata sull\'impatto per l\'utente',
        'Comunicazione trasparente sui compromessi',
        'Consegna incrementale piuttosto che perfezione',
      ],
      followUp: 'Cosa faresti diversamente oggi?',
    },
    'beh-2': {
      question:
        'Descrivi un disaccordo tecnico importante con un collega o un manager. Come l\'hai risolto?',
      hints: [
        'Resta sui fatti, non emotivo',
        'Mostra che cerchi la soluzione migliore, non di avere ragione',
        'Spiega come hai testato le ipotesi',
      ],
      keyPoints: [
        'Ascolto attivo ed empatia',
        'Decisione basata su dati ed esperimenti',
        'Capacità di allinearsi una volta presa la decisione',
      ],
    },
    'beh-3': {
      question:
        'Parlami di un fallimento significativo nella tua carriera. Cosa hai imparato?',
      hints: [
        'Scegli un vero fallimento, non falsa modestia',
        'Concentrati sulle lezioni apprese',
        'Mostra come hai cambiato approccio in seguito',
      ],
      keyPoints: [
        'Onestà e introspezione',
        'Apprendimento concreto e azioni correttive',
        'Resilienza di fronte alle avversità',
      ],
    },
    'tech-1': {
      question:
        'Come implementeresti un sistema di completamento del codice in tempo reale con una latenza inferiore a 200 ms?',
      hints: [
        'Pensa allo streaming dei token',
        'Considera caching e predizione locale',
        'Parla di ottimizzazione del prompt e del contesto',
      ],
      keyPoints: [
        'Streaming SSE/WebSocket per reattività percepita',
        'Riduzione del contesto inviato al modello',
        'Cache delle completazioni frequenti',
        'Debouncing e annullamento delle richieste obsolete',
      ],
      followUp:
        'Come gestiresti gli errori di rete senza bloccare l\'editor?',
    },
    'tech-2': {
      question:
        'Spiega come debuggheresti un problema in cui i suggerimenti dell\'IA sono incoerenti per alcuni file ma non per altri.',
      hints: [
        'Inizia riproducendo il problema in modo affidabile',
        'Isola le variabili: modello, prompt, contesto, parsing',
        'Pensa a log e osservabilità',
      ],
      keyPoints: [
        'Approccio sistematico: riprodurre → isolare → correggere',
        'Analisi del contesto inviato al modello',
        'Verifica del parsing della risposta',
        'Test di regressione',
      ],
    },
    'tech-3': {
      question:
        'Qual è la differenza tra un agente IA e un semplice chatbot? Fornisci un esempio concreto.',
      hints: [
        'Un agente può compiere azioni, non solo rispondere',
        'Pensa agli strumenti (file, terminale, ricerca)',
        'Menziona il ciclo pianificare → agire → osservare',
      ],
      keyPoints: [
        'Capacità di azione autonoma tramite strumenti',
        'Ciclo di ragionamento multi-step',
        'Gestione del contesto e della memoria',
        'Esempio: agente che modifica codice vs chatbot che suggerisce',
      ],
    },
    'prod-1': {
      question:
        'Cursor mira a rendere gli sviluppatori 10 volte più produttivi. Quale funzionalità aggiungeresti e perché?',
      hints: [
        'Basati su problemi reali degli sviluppatori',
        'Pensa alla misurazione dell\'impatto (metriche)',
        'Considera i compromessi tra UX e potenza',
      ],
      keyPoints: [
        'Problema utente chiaramente identificato',
        'Proposta di valore differenziante',
        'Metriche di successo definite',
        'Fattibilità tecnica realistica',
      ],
      followUp: 'Come convalideresti questa idea prima di svilupparla?',
    },
    'prod-2': {
      question:
        'Come bilanceresti la qualità dei suggerimenti IA con la velocità di risposta per un pubblico di sviluppatori esigenti?',
      hints: [
        'Gli sviluppatori preferiscono la velocità ma odiano i suggerimenti sbagliati',
        'Pensa alle modalità (veloce vs preciso)',
        'Considera il feedback utente in loop',
      ],
      keyPoints: [
        'Modalità configurabili in base al contesto',
        'Feedback loop per migliorare il modello',
        'Indicatori di confidenza sui suggerimenti',
        'A/B testing per validare i compromessi',
      ],
    },
    'prod-3': {
      question:
        'Un utente si lamenta che l\'agente IA ha eliminato codice importante. Come rispondi al prodotto e all\'utente?',
      hints: [
        'Empatia prima con l\'utente',
        'Analizza la causa radice (undo, preview, conferma)',
        'Proponi miglioramenti concreti al prodotto',
      ],
      keyPoints: [
        'Risposta empatica e immediata all\'utente',
        'Analisi della causa radice',
        'Proposte di miglioramento (diff preview, undo, guardrail)',
        'Comunicazione trasparente sui limiti dell\'IA',
      ],
    },
    'sys-1': {
      question:
        'Progetta l\'architettura di un servizio che gestisce milioni di richieste di completamento codice al giorno con latenza p99 < 500 ms.',
      hints: [
        'Inizia stimando QPS e banda',
        'Pensa a load balancing e caching',
        'Considera gestione code e rate limiting',
      ],
      keyPoints: [
        'Stima del carico e dimensionamento',
        'Architettura a livelli (gateway, inference, cache)',
        'Strategia di scaling orizzontale',
        'Monitoring, alerting e circuit breaker',
        'Gestione dei picchi di carico',
      ],
      followUp:
        'Come gestiresti il deploy di un nuovo modello senza downtime?',
    },
    'sys-2': {
      question:
        'Come memorizzeresti e recupereresti efficacemente il contesto di un intero progetto (migliaia di file) per alimentare un LLM?',
      hints: [
        'Il contesto LLM è limitato (finestra di token)',
        'Pensa all\'indicizzazione semantica (embeddings)',
        'Considera gerarchia e pertinenza',
      ],
      keyPoints: [
        'Indicizzazione vettoriale (embeddings) per ricerca semantica',
        'Chunking intelligente del codice',
        'Ranking per pertinenza alla query',
        'Cache del contesto usato frequentemente',
      ],
    },
    'cul-1': {
      question:
        'Perché vuoi unirti a Cursor in particolare, e non un\'altra azienda IA?',
      hints: [
        'Mostra che conosci la missione di Cursor',
        'Collega la tua esperienza alla loro visione',
        'Sii autentico, non generico',
      ],
      keyPoints: [
        'Conoscenza della missione (aumentare la produttività degli sviluppatori)',
        'Allineamento personale con la visione IA + sviluppo',
        'Esempi concreti della tua passione per l\'argomento',
      ],
    },
    'cul-2': {
      question:
        'Cursor è una startup in forte crescita. Come ti adatti a un ambiente che cambia rapidamente?',
      hints: [
        'Fornisci esempi concreti della tua adattabilità',
        'Mostra che ti senti a tuo agio con l\'ambiguità',
        'Parla del tuo appetito per l\'apprendimento',
      ],
      keyPoints: [
        'Flessibilità e adattabilità dimostrate',
        'Comfort con ambiguità e priorità mutevoli',
        'Proattività e ownership',
        'Apprendimento continuo',
      ],
    },
    'cul-3': {
      question:
        'Come vedi il futuro dello sviluppo software con l\'IA? Quale ruolo avrà lo sviluppatore tra 5 anni?',
      hints: [
        'Mostra una visione equilibrata, né utopica né catastrofica',
        'Pensa all\'evoluzione del ruolo (architetto, reviewer, orchestratore)',
        'Menziona le competenze che resteranno importanti',
      ],
      keyPoints: [
        'Visione equilibrata e riflessiva',
        'Lo sviluppatore diventa orchestratore e reviewer dell\'IA',
        'Competenze umane insostituibili (architettura, giudizio, creatività)',
        'Opportunità piuttosto che minaccia',
      ],
    },
  },
}
