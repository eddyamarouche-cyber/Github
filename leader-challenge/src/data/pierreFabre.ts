import type { BrandPortfolioContent } from './types'

/**
 * Pierre Fabre strategic-account portfolio.
 * Brands and categories from pierre-fabre.com (Our brands) — validate before interview.
 */
export const pierreFabrePortfolio: BrandPortfolioContent = {
  logo: '/images/pierre-fabre/logo.svg',
  logoAlt: 'Pierre Fabre',
  productsImage: '/images/pierre-fabre/marques-produits.jpg',
  productsImageAlt:
    'Pierre Fabre products — René Furterer, Avène, Ducray, Klorane, Même, A-Derma, Elgydium',
  tagline: '2nd worldwide in dermo-cosmetics · oncology, dermatology & primary care',
  products: [
    {
      name: 'Eau Thermale Avène',
      category: 'Dermo-cosmetics',
      focus: 'Sensitive skin, photoprotection, repair',
    },
    {
      name: 'Ducray',
      category: 'Dermo-cosmetics',
      focus: 'Scalp & dermatological haircare',
    },
    {
      name: 'Klorane',
      category: 'Dermo-cosmetics',
      focus: 'Plant-based hair & skin care',
    },
    {
      name: 'René Furterer',
      category: 'Dermo-cosmetics',
      focus: 'Scalp ritual & anti-hair loss',
    },
    {
      name: 'A-Derma',
      category: 'Dermo-cosmetics',
      focus: 'Fragile & atopic-prone skin',
    },
    {
      name: 'Même Cosmetics',
      category: 'Dermo-cosmetics',
      focus: 'Care for skin weakened by cancer treatments',
    },
    {
      name: 'Elgydium',
      category: 'Oral care',
      focus: 'Pharmacy oral hygiene',
    },
    {
      name: 'Dexeryl',
      category: 'Dermo-cosmetics',
      focus: 'Emollient care for dry skin',
    },
    {
      name: 'Oncology',
      category: 'Medical care',
      focus: 'Precision therapies — melanoma, solid tumours',
    },
    {
      name: 'Medical Dermatology',
      category: 'Medical care',
      focus: 'Pediatric, onco-dermatology, rare skin diseases',
    },
  ],
}
