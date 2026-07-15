import type { Category, Difficulty, QuestionContent } from '../data/types'

export type Locale = 'fr' | 'en' | 'it'

export interface MeddicPillarTranslation {
  letter: string
  name: string
  description: string
  interviewTip: string
  exampleQuestions: string[]
  cursorExample: string
}

export interface Translations {
  meta: {
    title: string
    tagline: string
    footer: string
  }
  nav: {
    practice: string
    mock: string
    tips: string
    progress: string
  }
  categories: Record<Category, { label: string; description: string }>
  categoriesAll: string
  practice: {
    emptyCategory: string
  }
  questionCard: {
    followUp: string
    hints: string
    keyPoints: string
    rating: string
    notesPlaceholder: string
    prev: string
    next: string
  }
  ratings: {
    poor: string
    ok: string
    good: string
    excellent: string
  }
  difficulty: Record<Difficulty, string>
  mock: {
    title: string
    description: string
    categoriesTitle: string
    start: string
    completeTitle: string
    completeText: string
    backToMenu: string
    question: string
    end: string
  }
  progress: {
    title: string
    empty: string
    scoreLabel: string
    practiced: string
    clear: string
  }
  tips: {
    title: string
    items: { title: string; description: string }[]
    meddic: {
      title: string
      subtitle: string
      description: string
      whenToUse: string
      interviewLabel: string
      cursorExampleLabel: string
      discoveryQuestions: string
      scenariosTitle: string
      pillars: MeddicPillarTranslation[]
      scenarios: { title: string; description: string }[]
    }
  }
  questions: Record<string, QuestionContent>
}

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
}

export const locales: Locale[] = ['fr', 'en', 'it']
