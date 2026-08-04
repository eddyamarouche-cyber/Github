import type { PharmacyOrderContent } from './types'

export interface PharmacyCatalogProduct {
  id: string
  brand: string
  name: string
  category: string
  packSize: string
}

export const pharmacyRegions = [
  { value: 'it-north', label: 'Italy — North' },
  { value: 'it-center', label: 'Italy — Center' },
  { value: 'it-south', label: 'Italy — South' },
  { value: 'es', label: 'Spain' },
  { value: 'pt', label: 'Portugal' },
]

export const pharmacyDelegates = [
  { value: 'delegate-01', label: 'Marco Bianchi — Lombardy' },
  { value: 'delegate-02', label: 'Laura Rossi — Lazio & Campania' },
  { value: 'delegate-03', label: 'Carlos García — Madrid & Central' },
  { value: 'delegate-04', label: 'Ana Ferreira — Lisbon & Porto' },
]

export const pharmacyAccounts = [
  { value: 'new', label: 'New pharmacy — create account' },
  { value: 'ph-1042', label: 'Farmacia Centrale Milano — CIP 1042' },
  { value: 'ph-2187', label: 'Farmacia San Marco Roma — CIP 2187' },
  { value: 'ph-3301', label: 'Farmacia Puerta del Sol — CIP 3301' },
  { value: 'ph-4410', label: 'Farmácia Chiado Lisboa — CIP 4410' },
]

export const deliveryOptions = [
  { value: 'standard', label: 'Standard — 3 to 5 business days' },
  { value: 'express', label: 'Express — 24/48h' },
  { value: 'urgent', label: 'Urgent — same week priority' },
]

export const pharmacyCatalog: PharmacyCatalogProduct[] = [
  {
    id: 'avene-spray-300',
    brand: 'Avène',
    name: 'Eau Thermale Spray',
    category: 'Dermo-cosmetics',
    packSize: '300 ml',
  },
  {
    id: 'avene-cicalfate-40',
    brand: 'Avène',
    name: 'Cicalfate+ Crème réparatrice',
    category: 'Dermo-cosmetics',
    packSize: '40 ml',
  },
  {
    id: 'avene-cleanance-30',
    brand: 'Avène',
    name: 'Cleanance Comedomed Peeling',
    category: 'Dermo-cosmetics',
    packSize: '30 ml',
  },
  {
    id: 'avene-spf50',
    brand: 'Avène',
    name: 'Ultra Fluid SPF 50+',
    category: 'Dermo-cosmetics',
    packSize: '50 ml',
  },
  {
    id: 'ducray-kelual',
    brand: 'Ducray',
    name: 'Kelual DS Intensive Shampoo',
    category: 'Dermo-cosmetics',
    packSize: '100 ml',
  },
  {
    id: 'ducray-keracnyl',
    brand: 'Ducray',
    name: 'Keracnyl PP Cream',
    category: 'Dermo-cosmetics',
    packSize: '30 ml',
  },
  {
    id: 'klorane-quinine',
    brand: 'Klorane',
    name: 'Quinine & Edelweiss Serum',
    category: 'Dermo-cosmetics',
    packSize: '100 ml',
  },
  {
    id: 'klorane-cornflower',
    brand: 'Klorane',
    name: 'Cornflower Micellar Water',
    category: 'Dermo-cosmetics',
    packSize: '400 ml',
  },
  {
    id: 'aderma-exomega',
    brand: 'A-Derma',
    name: 'Exomega Control Night Cream',
    category: 'Dermo-cosmetics',
    packSize: '200 ml',
  },
  {
    id: 'furterer-triphasic',
    brand: 'René Furterer',
    name: 'Triphasic Active Growth Serum',
    category: 'Dermo-cosmetics',
    packSize: '100 ml',
  },
  {
    id: 'elgydium-sensi',
    brand: 'Elgydium',
    name: 'Sensiprotect Toothpaste',
    category: 'Oral care',
    packSize: '75 ml',
  },
  {
    id: 'dexeryl-500',
    brand: 'Dexeryl',
    name: 'Emollient Cream',
    category: 'Dermo-cosmetics',
    packSize: '500 g',
  },
]

export const pharmacyOrderSlideContent: PharmacyOrderContent = {
  eyebrow: 'Pharmacy channel',
  title: 'Integrate pharmacy orders',
  subtitle: 'Capture orders on the spot — pharmacy, products, quantities and delivery in one flow.',
}
