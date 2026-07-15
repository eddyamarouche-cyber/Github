import { fr } from './locales/fr'
import { en } from './locales/en'
import { it } from './locales/it'
import type { Locale, Translations } from './types'

export type { Locale, Translations }
export { localeLabels, locales } from './types'

export const translations: Record<Locale, Translations> = { fr, en, it }

export function detectLocale(): Locale {
  const stored = localStorage.getItem('coach-entretien-locale')
  if (stored === 'fr' || stored === 'en' || stored === 'it') return stored

  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('it')) return 'it'
  if (lang.startsWith('en')) return 'en'
  return 'fr'
}

export function replaceParams(
  template: string,
  params: Record<string, string | number>,
): string {
  return Object.entries(params).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  )
}
