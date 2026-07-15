import type { Category } from '../data/questions'
import { categoryLabels } from '../data/questions'

interface Props {
  selected: Category | 'all'
  onSelect: (category: Category | 'all') => void
  counts: Record<Category | 'all', number>
}

const categories: (Category | 'all')[] = [
  'all',
  'comportemental',
  'technique',
  'produit',
  'systeme',
  'culture',
]

export function CategoryFilter({ selected, onSelect, counts }: Props) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-btn ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat === 'all' ? 'Toutes' : categoryLabels[cat]}
          <span className="count">{counts[cat]}</span>
        </button>
      ))}
    </div>
  )
}
