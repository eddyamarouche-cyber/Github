import type { Category } from '../data/types'
import { allCategories } from '../data/types'
import { useI18n } from '../i18n/context'

interface Props {
  selected: Category | 'all'
  onSelect: (category: Category | 'all') => void
  counts: Record<Category | 'all', number>
}

const categories: (Category | 'all')[] = ['all', ...allCategories]

export function CategoryFilter({ selected, onSelect, counts }: Props) {
  const { t } = useI18n()

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-btn ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat === 'all' ? t.categoriesAll : t.categories[cat].label}
          <span className="count">{counts[cat]}</span>
        </button>
      ))}
    </div>
  )
}
