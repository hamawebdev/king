// Shared site constants (brand, WhatsApp concierge, navigation).
import { useCopy, type Localized } from '@/lib/i18n'

export const BRAND = 'NovaStream'
export const BRAND_UPPER = 'NOVASTREAM'

export type NavItem = { label: string; to: string }

/** Navigation labels per language (French = spec copy). Routes are shared by every language. */
const navFr = {
  main: { home: 'Accueil', shop: 'Boutique', reseller: 'Revendeur', download: 'Télécharger', contact: 'Contact' },
  legal: {
    cgu: 'Conditions d’utilisation',
    cgv: 'Conditions générales de vente',
    privacy: 'Politique de confidentialité',
    refund: 'Politique de remboursement',
    contactUs: 'Contactez-nous',
  },
}
export type NavLabels = typeof navFr

const NAV_COPY: Localized<NavLabels> = {
  fr: navFr,
  en: {
    main: { home: 'Home', shop: 'Shop', reseller: 'Reseller', download: 'Download', contact: 'Contact' },
    legal: {
      cgu: 'Terms of Use',
      cgv: 'Terms and Conditions of Sale',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      contactUs: 'Contact us',
    },
  },
  de: {
    main: { home: 'Startseite', shop: 'Shop', reseller: 'Wiederverkäufer', download: 'Herunterladen', contact: 'Kontakt' },
    legal: {
      cgu: 'Nutzungsbedingungen',
      cgv: 'Allgemeine Geschäftsbedingungen',
      privacy: 'Datenschutzerklärung',
      refund: 'Rückerstattungsrichtlinie',
      contactUs: 'Kontaktieren Sie uns',
    },
  },
  es: {
    main: { home: 'Inicio', shop: 'Tienda', reseller: 'Revendedor', download: 'Descargar', contact: 'Contacto' },
    legal: {
      cgu: 'Condiciones de uso',
      cgv: 'Condiciones generales de venta',
      privacy: 'Política de privacidad',
      refund: 'Política de reembolso',
      contactUs: 'Contáctanos',
    },
  },
  pt: {
    main: { home: 'Início', shop: 'Loja', reseller: 'Revendedor', download: 'Transferir', contact: 'Contacto' },
    legal: {
      cgu: 'Termos de utilização',
      cgv: 'Condições gerais de venda',
      privacy: 'Política de privacidade',
      refund: 'Política de reembolso',
      contactUs: 'Contacte-nos',
    },
  },
  fi: {
    main: { home: 'Etusivu', shop: 'Kauppa', reseller: 'Jälleenmyyjä', download: 'Lataa', contact: 'Yhteystiedot' },
    legal: {
      cgu: 'Käyttöehdot',
      cgv: 'Yleiset myyntiehdot',
      privacy: 'Tietosuojaseloste',
      refund: 'Palautuskäytäntö',
      contactUs: 'Ota yhteyttä',
    },
  },
}

// Header menu (routes mirror the original paths).
function mainNav({ main }: NavLabels): NavItem[] {
  return [
    { label: main.home, to: '/' },
    { label: main.shop, to: '/pricing/' },
    { label: main.reseller, to: '/services/' },
    { label: main.download, to: '/muffin-builder-83/' },
    { label: main.contact, to: '/contact/' },
  ]
}

function legalNav({ legal }: NavLabels): NavItem[] {
  return [
    { label: legal.cgu, to: '/conditions-dutilisation/' },
    { label: legal.cgv, to: '/conditions-generales-de-vente/' },
    { label: legal.privacy, to: '/politique-de-confidentialite/' },
    { label: legal.refund, to: '/politique-de-remboursement/' },
    { label: legal.contactUs, to: '/contact/' },
  ]
}

const byLocale = <T,>(build: (l: NavLabels) => T) =>
  Object.fromEntries(Object.entries(NAV_COPY).map(([code, l]) => [code, build(l)])) as Localized<T>

const MAIN_NAV_COPY = byLocale(mainNav)
const LEGAL_NAV_COPY = byLocale(legalNav)

/** French menus, kept for existing imports. Components should use useMainNav() / useLegalNav(). */
export const MAIN_NAV: NavItem[] = MAIN_NAV_COPY.fr
export const LEGAL_NAV: NavItem[] = LEGAL_NAV_COPY.fr

/** Header menu in the current language (same routes as MAIN_NAV). */
export function useMainNav(): NavItem[] {
  return useCopy(MAIN_NAV_COPY)
}

/** Legal pages + contact in the current language (same routes as LEGAL_NAV). */
export function useLegalNav(): NavItem[] {
  return useCopy(LEGAL_NAV_COPY)
}

/** The bare nav labels in the current language (e.g. for breadcrumbs: `{ label: nav.main.home, to: '/' }`). */
export function useNavLabels(): NavLabels {
  return useCopy(NAV_COPY)
}

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
