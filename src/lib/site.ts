// Shared site constants (brand, WhatsApp concierge, navigation).

export const BRAND = 'NovaStream'
export const BRAND_UPPER = 'NOVASTREAM'

export type NavItem = { label: string; to: string }

// Header menu (routes mirror the original paths).
export const MAIN_NAV: NavItem[] = [
  { label: 'Accueil', to: '/' },
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

/** Official WhatsApp line (spec: every order, renewal, activation and support request goes through it). */
export const WHATSAPP_NUMBER = '33751299176'
export const WHATSAPP_DISPLAY = '+33 7 51 29 91 76'

/** wa.me link, optionally with a prefilled message (spec copy, used word for word). Open with target="_blank". */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Generic contact message used where the spec gives no specific one. */
export const WA_CONTACT_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur vos abonnements King 365 TV'

/** Kept for existing imports: the plain WhatsApp link. */
export const WHATSAPP_HREF = waLink()

/** href for a route rendered as a plain <a> (not a router Link): prefixed with the deploy base path. */
export function routeHref(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path
}

export function isCurrent(pathname: string, to: string) {
  return to === '/' ? pathname === '/' : pathname.startsWith(to)
}
