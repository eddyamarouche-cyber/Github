export type Category =
  | 'comportemental'
  | 'technique'
  | 'produit'
  | 'systeme'
  | 'culture'

export type Difficulty = 'junior' | 'mid' | 'senior'

export interface QuestionMeta {
  id: string
  category: Category
  difficulty: Difficulty
}

export interface QuestionContent {
  question: string
  hints: string[]
  keyPoints: string[]
  followUp?: string
}

export interface Question extends QuestionMeta, QuestionContent {}

export const questionMeta: QuestionMeta[] = [
  { id: 'beh-1', category: 'comportemental', difficulty: 'mid' },
  { id: 'beh-2', category: 'comportemental', difficulty: 'senior' },
  { id: 'beh-3', category: 'comportemental', difficulty: 'mid' },
  { id: 'tech-1', category: 'technique', difficulty: 'mid' },
  { id: 'tech-2', category: 'technique', difficulty: 'senior' },
  { id: 'tech-3', category: 'technique', difficulty: 'junior' },
  { id: 'prod-1', category: 'produit', difficulty: 'senior' },
  { id: 'prod-2', category: 'produit', difficulty: 'mid' },
  { id: 'prod-3', category: 'produit', difficulty: 'mid' },
  { id: 'sys-1', category: 'systeme', difficulty: 'senior' },
  { id: 'sys-2', category: 'systeme', difficulty: 'mid' },
  { id: 'cul-1', category: 'culture', difficulty: 'mid' },
  { id: 'cul-2', category: 'culture', difficulty: 'mid' },
  { id: 'cul-3', category: 'culture', difficulty: 'senior' },
]

export const allCategories: Category[] = [
  'comportemental',
  'technique',
  'produit',
  'systeme',
  'culture',
]
