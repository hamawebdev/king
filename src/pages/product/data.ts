import { BRAND, BRAND_UPPER } from '@/lib/site'

// Product pages. All five routes share one template (a landing block inside the WooCommerce single-product
// layout); only the fields below change per product. Copy is placeholder text, prices are placeholders with
// the same digit counts as the original.

export type Product = {
  /** Cart id. */
  id: string
  slug: string
  /** WooCommerce product name (cart line, related-product cards). */
  name: string
  /** Last breadcrumb item and buy-box plan label. */
  plan: string
  /** H1: plain lead, highlighted part, tail. */
  title: [string, string, string]
  ribbon: string
  oldPrice: number
  price: number
  /** Price per month, already formatted (French decimal comma). */
  perMonth: string
  /** Mobile sticky bar: hidden label and the buy button text. */
  barLabel: string
  barCta: string
  /** Related products, in the order the original lists them. */
  related: string[]
  /** Product has customer reviews (stars on its related-product card). */
  rated?: boolean
  /** The renewal page's builder container keeps the default 10px top/bottom padding. */
  padded?: boolean
}

const premiumTitle = (months: number): [string, string, string] => [
  'Abonnement',
  `${BRAND_UPPER} Premium`,
  `— ${months} Mois`,
]

const PRODUCT_LIST: Product[] = [
  {
    id: 'abonnement-3-mois',
    slug: 'abonnement-3-mois',
    name: 'Abonnement 3 mois',
    plan: 'Premium 3 Mois',
    title: premiumTitle(3),
    ribbon: 'ESSENTIEL',
    oldPrice: 40,
    price: 20,
    perMonth: '6,67',
    barLabel: 'Premium 3 mois',
    barCta: 'Abonner ici',
    related: ['abonnement-24-mois', 'abonnement-12-mois-seul-acces', 'renouvellement-12-mois'],
  },
  {
    id: 'abonnement-6-mois',
    slug: 'abonnement-6-mois',
    name: 'Abonnement 6 mois',
    plan: 'Premium 6 Mois',
    title: premiumTitle(6),
    ribbon: 'CONSEILLÉ',
    oldPrice: 60,
    price: 30,
    perMonth: '5,00',
    barLabel: 'Premium 6 mois',
    barCta: 'Abonner ici',
    related: ['abonnement-24-mois', 'abonnement-12-mois-seul-acces', 'renouvellement-12-mois'],
    rated: true,
  },
  {
    id: 'abonnement-12-mois',
    slug: 'abonnement-12-mois',
    name: 'Abonnement 12 mois',
    plan: 'Premium 12 Mois',
    title: premiumTitle(12),
    ribbon: 'TOP VENTES',
    oldPrice: 100,
    price: 50,
    perMonth: '4,17',
    barLabel: 'Premium 12 mois',
    barCta: 'Abonner',
    related: ['abonnement-12-mois-seul-acces', 'abonnement-24-mois', 'abonnement-6-mois'],
  },
  {
    // Second 12-month product the related grids link to; it uses the 12-month page content.
    id: 'abonnement-12-mois-seul-acces',
    slug: 'abonnement-12-mois-seul-acces',
    name: 'Abonnement 12 mois',
    plan: 'Premium 12 Mois',
    title: premiumTitle(12),
    ribbon: 'TOP VENTES',
    oldPrice: 100,
    price: 50,
    perMonth: '4,17',
    barLabel: 'Premium 12 mois',
    barCta: 'Abonner',
    related: ['abonnement-24-mois', 'abonnement-6-mois', 'renouvellement-12-mois'],
  },
  {
    id: 'abonnement-24-mois',
    slug: 'abonnement-24-mois',
    name: 'Abonnement 24 mois – Écran Unique',
    plan: 'Premium 24 Mois',
    title: premiumTitle(24),
    ribbon: 'PRIX MALIN',
    oldPrice: 220,
    price: 110,
    perMonth: '4,58',
    barLabel: 'Premium 24 mois',
    barCta: 'Abonner ici',
    related: ['abonnement-12-mois-seul-acces', 'abonnement-6-mois', 'renouvellement-12-mois'],
  },
  {
    id: 'renouvellement-12-mois',
    slug: 'renouvellement-12-mois',
    name: `Renouvellement ${BRAND.toLowerCase()} 12 mois`,
    plan: 'Renouvellement 12 Mois',
    // Mixed-case brand and an en dash keep the 2-line wrap of the original title on phones.
    title: ['Renouvellement', BRAND, '– 12 Mois'],
    ribbon: 'RENOUVELLEMENT',
    oldPrice: 100,
    price: 50,
    perMonth: '4,17',
    barLabel: 'Renouvellement 12 mois',
    barCta: 'Renouveler ici',
    related: ['abonnement-3-mois', 'abonnement-24-mois', 'abonnement-12-mois'],
    padded: true,
  },
]

export const PRODUCTS: Record<string, Product> = Object.fromEntries(PRODUCT_LIST.map((p) => [p.slug, p]))

// Shapes of the landing copy used by several sections.

export type IconText = { icon: string; text: string }
export type Card = { icon: string; title: string; text: string }
