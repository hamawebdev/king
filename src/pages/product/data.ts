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

// ---------------------------------------------------------------------------------------------------------
// Landing copy shared by every product page.

export type IconText = { icon: string; text: string }
export type Card = { icon: string; title: string; text: string }

export const RATING_TEXT = '4.8/5 — 40 000+ foyers équipés'

export const HERO_LEAD =
  'Toute la famille trouve son programme : sport le samedi, dessins animés le matin et grands films le soir, sur la télé comme sur mobile.'

export const BULLETS: string[] = [
  'Jusqu’à trois écrans connectés en même temps à la maison',
  'Guide des programmes et rappels avant vos émissions',
  'Profils séparés pour chaque membre de la famille, avec historique et favoris',
  'Résiliation libre, sans frais ni préavis à respecter',
]

export const BUY_FEATURES = ['3900+ Chaînes', '8500+ VOD', 'Qualité 4K', 'Replay 14j']
export const PAY_LABEL = 'Paiement sécurisé :'
export const PAY_METHODS = ['VISA', 'MASTERCARD', 'PAYPAL', 'CRYPTO']
export const SAVE_TAIL = 'Tarif de lancement'
export const GUARANTEES: IconText[] = [
  { icon: 'ti-bolt', text: 'Accès en 20 min' },
  { icon: 'ti-gift', text: 'Essai 2h' },
  { icon: 'ti-lifebuoy', text: 'Service 7j/7' },
]

export const STATS: { value?: string; label: string; star?: boolean }[] = [
  { label: 'Note 4.8/5', star: true },
  { value: '40K+', label: 'Foyers' },
  { value: '3900+', label: 'Chaînes' },
  { value: '60+', label: 'Pays' },
  { value: '24/7', label: 'Support' },
]

export const DESCRIPTION = {
  eyebrow: 'Description',
  title: ['Pensée pour toute la', 'maison'] as [string, string],
  paragraphs: [
    `Avec ${BRAND} Premium, chacun regarde ce qu'il aime sur l'écran de son choix : le match en direct au salon, les dessins animés sur la tablette et un bon documentaire le soir venu sur l'ordinateur portable.`,
    'Le catalogue s’enrichit chaque semaine et l’abonnement se gère en quelques clics depuis votre espace personnel, sans aucun frais caché ni démarche compliquée.',
  ],
}

export const INCLUDED = {
  eyebrow: 'Confort d’usage',
  title: ['Des outils pratiques pour votre', 'quotidien'] as [string, string],
  cards: [
    { icon: 'ti-calendar-event', title: 'Guide des programmes', text: 'Grille sur sept jours avec résumés, horaires et rappels avant le début.' },
    { icon: 'ti-users', title: 'Profils personnels', text: 'Jusqu’à cinq profils, chacun avec ses favoris et ses propres suggestions.' },
    { icon: 'ti-lock', title: 'Contrôle parental', text: 'Un code verrouille les contenus sensibles en un geste depuis les réglages.' },
    { icon: 'ti-language', title: 'Audio multilingue', text: 'Version originale ou doublée, avec sous-titres activables à tout moment.' },
    { icon: 'ti-cast', title: 'Envoi vers la télé', text: 'Lancez un programme sur le mobile puis basculez-le sur le grand écran.' },
    { icon: 'ti-player-play', title: 'Reprise de lecture', text: 'Arrêtez un film sur un appareil et terminez-le plus tard sur un autre.' },
  ] as Card[],
}

export const QUALITY = {
  title: ['Tout un', 'univers'] as [string, string],
  tiles: [
    { value: '4K', label: 'Ultra HD' },
    { value: 'FHD', label: '1080p' },
    { value: 'HD', label: '720p' },
    { value: 'SD', label: '480p' },
  ],
  categories: [
    { icon: 'ti-ball-football', text: 'Sports' },
    { icon: 'ti-movie', text: 'Films' },
    { icon: 'ti-device-tv', text: 'Séries' },
    { icon: 'ti-news', text: 'News' },
    { icon: 'ti-mood-kid', text: 'Jeunesse' },
    { icon: 'ti-music', text: 'Musique' },
  ] as IconText[],
}

export const REVIEWS = {
  eyebrow: 'Témoignages',
  title: ['La parole à nos', 'abonnés'] as [string, string],
  items: [
    {
      text: `« Avec ${BRAND}, les soirées foot en famille sont devenues un vrai rendez-vous. On ne rate plus un match ! »`,
      initials: 'JR',
      name: 'Julien R.',
      place: 'Lyon, France',
    },
    {
      text: '« Les enfants ont leurs dessins animés, moi mes séries : chacun y trouve son compte à la maison. Top ! »',
      initials: 'SM',
      name: 'Sofia M.',
      place: 'Genève, Suisse',
    },
    {
      text: '« Installation faite en dix minutes sur la télé du salon, sans aide. Le service client répond vite. »',
      initials: 'KT',
      name: 'Karim T.',
      place: 'Liège, Belgique',
    },
  ],
}

export const BAND: Card[] = [
  { icon: 'ti-calendar-off', title: 'Sans engagement', text: 'Aucun prélèvement automatique : vous renouvelez seulement si vous le souhaitez.' },
  { icon: 'ti-users', title: 'Profils séparés', text: 'Chaque membre du foyer garde ses favoris et son historique.' },
  { icon: 'ti-refresh', title: 'Mises à jour', text: 'De nouveaux films et séries rejoignent le catalogue chaque semaine.' },
]

export const FAQ = {
  eyebrow: 'Foire aux questions',
  title: ['Bon à', 'savoir'] as [string, string],
  items: [
    {
      q: 'Puis-je changer de formule en cours de route ?',
      a: 'Oui, il suffit de choisir une nouvelle durée depuis votre espace client ; le temps restant sur l’ancienne formule est automatiquement reporté.',
    },
    {
      q: 'Combien d’écrans en même temps ?',
      a: 'La formule Premium autorise trois appareils connectés simultanément dans le même foyer, que ce soit une télévision, un ordinateur ou un téléphone.',
    },
    {
      q: 'Faut-il installer une parabole ou une antenne ?',
      a: 'Non, une simple connexion internet suffit, en Wi-Fi ou en filaire (8 Mbps conseillés pour profiter de la 4K).',
    },
    {
      q: 'Et à la fin de l’abonnement ?',
      a: 'Vous recevez un rappel par e-mail quelques jours avant l’échéance. Sans action de votre part, l’accès s’arrête simplement, sans aucun frais.',
    },
    {
      q: 'Comment joindre l’assistance ?',
      a: 'Notre équipe répond par e-mail et par messagerie tous les jours de 9h à 23h, en général en moins d’une heure, pour vous aider à tout régler.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Vos soirées télé méritent mieux',
  text: 'Choisissez votre durée, recevez vos accès par e-mail et installez-vous dès ce soir.',
}

export const RELATED_TITLE = 'Produits similaires'
