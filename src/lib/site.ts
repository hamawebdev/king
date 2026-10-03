// Shared site constants. All copy is placeholder text for the layout clone.

export const BRAND = 'NovaStream'
export const BRAND_UPPER = 'NOVASTREAM'
export const SITE_DOMAIN = 'novastream.example'

export type NavItem = { label: string; to: string }

// Header menu (labels are generic navigation words; routes mirror the original paths).
export const MAIN_NAV: NavItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Boutique', to: '/pricing/' },
  { label: 'Revendeur', to: '/services/' },
  { label: 'Télécharger', to: '/muffin-builder-83/' },
  { label: 'Contact', to: '/contact/' },
]

// Footer column 2 (the original spells the first entry differently from the header).
export const FOOTER_NAV: NavItem[] = [
  { label: 'Acceuil', to: '/' },
  { label: 'Boutique', to: '/pricing/' },
  { label: 'Revendeur', to: '/services/' },
  { label: 'Télécharger', to: '/muffin-builder-83/' },
  { label: 'Contact', to: '/contact/' },
]

export const LEGAL_NAV: NavItem[] = [
  { label: 'Conditions d’utilisation', to: '/conditions-dutilisation/' },
  { label: 'Conditions générales de vente', to: '/conditions-generales-de-vente/' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite/' },
  { label: 'Politique de remboursement', to: '/politique-de-remboursement/' },
  { label: 'Contactez-nous', to: '/contact/' },
]

// Placeholder contact targets: links look real but go nowhere.
export const WHATSAPP_HREF = '#whatsapp'
export const SUPPORT_EMAIL_HREF = '#email'

export function isCurrent(pathname: string, to: string) {
  return to === '/' ? pathname === '/' : pathname.startsWith(to)
}
