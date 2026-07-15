import { useI18n } from '../i18n/context'
import { localeLabels, locales } from '../i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="lang-switcher">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          className={`lang-btn ${locale === loc ? 'active' : ''}`}
          onClick={() => setLocale(loc)}
          aria-label={localeLabels[loc]}
          title={localeLabels[loc]}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
