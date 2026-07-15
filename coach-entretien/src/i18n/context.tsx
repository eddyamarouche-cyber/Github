import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react'
import { questionMeta } from '../data/types'
import type { Question } from '../data/types'
import { fr } from './locales/fr'
import { en } from './locales/en'
import { it } from './locales/it'
import type { Locale, Translations } from './types'

const translations: Record<Locale, Translations> = { fr, en, it }

function detectLocale(): Locale {
  const stored = localStorage.getItem('coach-entretien-locale')
  if (stored === 'fr' || stored === 'en' || stored === 'it') return stored

  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('it')) return 'it'
  if (lang.startsWith('en')) return 'en'
  return 'fr'
}

function replaceParams(
  template: string,
  params: Record<string, string | number>,
): string {
  return Object.entries(params).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  )
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  questions: Question[]
  format: (template: string, params: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('coach-entretien-locale', next)
  }

  const t = translations[locale]

  const questions = useMemo<Question[]>(
    () =>
      questionMeta.map((meta) => ({
        ...meta,
        ...t.questions[meta.id],
      })),
    [t],
  )

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
  }, [locale, t.meta.title])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      questions,
      format: replaceParams,
    }),
    [locale, t, questions],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
