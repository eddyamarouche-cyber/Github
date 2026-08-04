import type { KeyFiguresContent } from './types'

const dermoBrands = [
  { src: '/images/pierre-fabre/avene-produits.png', alt: 'Eau Thermale Avène' },
  { src: '/images/pierre-fabre/ducray-produits.png', alt: 'Ducray' },
  { src: '/images/pierre-fabre/klorane-produits.png', alt: 'Klorane' },
  { src: '/images/pierre-fabre/aderma-produits.png', alt: 'A-Derma' },
  { src: '/images/pierre-fabre/furterer-produits.png', alt: 'René Furterer' },
]

export const pierreFabreGlobalFigures: KeyFiguresContent = {
  image: '/images/pierre-fabre/marques-produits.jpg',
  logo: '/images/pierre-fabre/logo.svg',
  logoAlt: 'Pierre Fabre',
  eyebrow: 'Key figures · 2025',
  title: 'A global health & beauty leader',
  heroStat: {
    value: '€3.2B',
    label: 'Revenue',
    detail: '+4.6% like-for-like vs. 2024',
  },
  stats: [
    { value: '10,000', label: 'Employees worldwide' },
    { value: '130', label: 'Countries' },
    { value: '71%', label: 'Revenue outside France' },
    { value: '#2', label: 'Global dermo-cosmetics player' },
  ],
  footer:
    '100% of profits reinvested into the company or distributed through the Pierre Fabre Foundation',
  layout: 'hero-grid',
  productsImage: '/images/pierre-fabre/marques-produits.jpg',
  productsImageAlt:
    'Pierre Fabre brands — Avène, Ducray, Klorane, René Furterer, Même, A-Derma, Elgydium',
  productImages: dermoBrands,
  imageObjectPosition: 'center 70%',
  overlay: 'products',
}

export const pierreFabreBusinessMix: KeyFiguresContent = {
  image: '/images/pierre-fabre/marques-produits.jpg',
  logo: '/images/pierre-fabre/logo.svg',
  logoAlt: 'Pierre Fabre',
  eyebrow: 'Science & business mix · 2025',
  title: 'Investing for long-term growth',
  heroStat: {
    value: '€250M',
    label: 'Invested in R&D',
    detail: '2025',
  },
  segments: [
    {
      title: 'Pharmaceuticals',
      value: '€187M',
      detail: '13.5% of pharma sales reinvested in R&D',
      image: '/images/pierre-fabre/oncology-produits.png',
      imageAlt: 'Pierre Fabre Oncology',
    },
    {
      title: 'Dermo-cosmetics',
      value: '€63M',
      detail: '3.6% of sales reinvested in R&D',
      bullets: ['21.3% of dermo-cosmetics sales generated online'],
      image: '/images/pierre-fabre/avene-produits.png',
      imageAlt: 'Eau Thermale Avène',
    },
  ],
  layout: 'segments',
  productImages: [
    { src: '/images/pierre-fabre/ducray-produits.png', alt: 'Ducray' },
    { src: '/images/pierre-fabre/klorane-produits.png', alt: 'Klorane' },
    { src: '/images/pierre-fabre/aderma-produits.png', alt: 'A-Derma' },
    { src: '/images/pierre-fabre/furterer-produits.png', alt: 'René Furterer' },
  ],
  imageObjectPosition: 'center 55%',
  overlay: 'products',
}
