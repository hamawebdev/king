import { useLocale, type LocaleCode, type Localized } from '@/lib/i18n'

// The four official packs (spec S10 « Grille Tarifaire Officielle des 4 Formules », p.12–13).
// Single source for the homepage pricing table, the shop, product pages and legal documents. No 3-month plan.

export type PackId = 'flex' | 'essentiel' | 'signature' | 'serenite'

export type Pack = {
  id: PackId
  /** 'Pack Flex' */
  name: string
  /** '35 €' */
  price: string
  /** '6 mois' */
  duration: string
  months: 6 | 12 | 24
  /** '5,83 €/mois' */
  perMonth: string
  /** Spec « Inclusions Clefs », word for word. */
  inclusions: string
  /** The recommended pack (Signature ⭐). */
  highlighted: boolean
  /** WhatsApp prefilled message, word for word (pass to waLink / <WaButton message>). */
  waMessage: string
  /** Product page slug: /produit/<slug>/ (see productPath). */
  slug: string
}

export const PACKS: Pack[] = [
  {
    id: 'flex',
    name: 'Pack Flex',
    price: '35 €',
    duration: '6 mois',
    months: 6,
    perMonth: '5,83 €/mois',
    inclusions: 'Accès +5700 chaînes, VOD +16k, Replay, compatible toutes apps.',
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Flex 6 Mois (35€)',
    slug: 'pack-flex-6-mois',
  },
  {
    id: 'essentiel',
    name: 'Pack Essentiel',
    price: '55 €',
    duration: '12 mois',
    months: 12,
    perMonth: '4,58 €/mois',
    inclusions: 'Validité 12 mois serveur officiel, +5700 chaînes, EPG, VOD weekly.',
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Essentiel 12 Mois (55€)',
    slug: 'pack-essentiel-12-mois',
  },
  {
    id: 'signature',
    name: 'Pack Signature',
    price: '59,99 €',
    duration: '12 mois',
    months: 12,
    perMonth: '4,99 €/mois',
    inclusions: 'DNS Dédié anti-blocage FAI, 4K HDR, Support VIP 1-to-1 24/7.',
    highlighted: true,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Signature King 365 TV (59,99€)',
    slug: 'pack-signature-12-mois',
  },
  {
    id: 'serenite',
    name: 'Pack Sérénité',
    price: '105 €',
    duration: '24 mois',
    months: 24,
    perMonth: '4,38 €/mois',
    inclusions: "2 ans de tranquillité, DNS Dédié inclus, transfert d'écran gratuit.",
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Sérénité 24 Mois (105€)',
    slug: 'pack-serenite-24-mois',
  },
]

/** Visible pack text per language (French = the spec table). waMessage stays French: the advisors work in French. */
type PackText = Pick<Pack, 'price' | 'duration' | 'perMonth' | 'inclusions'>

const PACK_TEXT: Localized<Record<PackId, PackText>> = {
  // French comes straight from PACKS so the spec values live in one place.
  fr: Object.fromEntries(
    PACKS.map((p) => [p.id, { price: p.price, duration: p.duration, perMonth: p.perMonth, inclusions: p.inclusions }]),
  ) as Record<PackId, PackText>,
  en: {
    flex: { price: '€35', duration: '6 months', perMonth: '€5.83/month', inclusions: 'Access to +5700 channels, +16k VOD, Replay, compatible with all apps.' },
    essentiel: { price: '€55', duration: '12 months', perMonth: '€4.58/month', inclusions: '12-month validity on the official server, +5700 channels, EPG, weekly VOD.' },
    signature: { price: '€59.99', duration: '12 months', perMonth: '€4.99/month', inclusions: 'Dedicated anti-ISP-blocking DNS, 4K HDR, 1-to-1 VIP support 24/7.' },
    serenite: { price: '€105', duration: '24 months', perMonth: '€4.38/month', inclusions: '2 years of peace of mind, dedicated DNS included, free screen transfer.' },
  },
  de: {
    flex: { price: '35 €', duration: '6 Monate', perMonth: '5,83 €/Monat', inclusions: 'Zugang zu +5700 Sendern, +16k VOD, Replay, mit allen Apps kompatibel.' },
    essentiel: { price: '55 €', duration: '12 Monate', perMonth: '4,58 €/Monat', inclusions: '12 Monate Laufzeit auf dem offiziellen Server, +5700 Sender, EPG, wöchentliche VOD-Updates.' },
    signature: { price: '59,99 €', duration: '12 Monate', perMonth: '4,99 €/Monat', inclusions: 'Dedizierter Anti-Blocking-DNS gegen Provider-Sperren, 4K HDR, VIP-Support 1-zu-1 rund um die Uhr.' },
    serenite: { price: '105 €', duration: '24 Monate', perMonth: '4,38 €/Monat', inclusions: '2 Jahre Ruhe, dedizierter DNS inklusive, kostenloser Bildschirmwechsel.' },
  },
  es: {
    flex: { price: '35 €', duration: '6 meses', perMonth: '5,83 €/mes', inclusions: 'Acceso a +5700 canales, VOD +16k, Replay, compatible con todas las apps.' },
    essentiel: { price: '55 €', duration: '12 meses', perMonth: '4,58 €/mes', inclusions: 'Validez de 12 meses en el servidor oficial, +5700 canales, EPG, VOD semanal.' },
    signature: { price: '59,99 €', duration: '12 meses', perMonth: '4,99 €/mes', inclusions: 'DNS dedicado antibloqueo de operador, 4K HDR, soporte VIP 1 a 1 24/7.' },
    serenite: { price: '105 €', duration: '24 meses', perMonth: '4,38 €/mes', inclusions: '2 años de tranquilidad, DNS dedicado incluido, cambio de pantalla gratuito.' },
  },
  pt: {
    flex: { price: '35 €', duration: '6 meses', perMonth: '5,83 €/mês', inclusions: 'Acesso a +5700 canais, VOD +16k, Replay, compatível com todas as apps.' },
    essentiel: { price: '55 €', duration: '12 meses', perMonth: '4,58 €/mês', inclusions: 'Validade de 12 meses no servidor oficial, +5700 canais, EPG, VOD semanal.' },
    signature: { price: '59,99 €', duration: '12 meses', perMonth: '4,99 €/mês', inclusions: 'DNS dedicado antibloqueio do operador, 4K HDR, suporte VIP 1 para 1 24/7.' },
    serenite: { price: '105 €', duration: '24 meses', perMonth: '4,38 €/mês', inclusions: '2 anos de tranquilidade, DNS dedicado incluído, transferência de ecrã gratuita.' },
  },
  fi: {
    flex: { price: '35 €', duration: '6 kk', perMonth: '5,83 €/kk', inclusions: 'Pääsy +5700 kanavalle, +16k VOD, Replay, toimii kaikissa sovelluksissa.' },
    essentiel: { price: '55 €', duration: '12 kk', perMonth: '4,58 €/kk', inclusions: '12 kuukauden voimassaolo virallisella palvelimella, +5700 kanavaa, EPG, viikoittain päivittyvä VOD.' },
    signature: { price: '59,99 €', duration: '12 kk', perMonth: '4,99 €/kk', inclusions: 'Oma DNS operaattoriestoja vastaan, 4K HDR, henkilökohtainen VIP-tuki 24/7.' },
    serenite: { price: '105 €', duration: '24 kk', perMonth: '4,38 €/kk', inclusions: '2 vuotta huoletonta katselua, oma DNS mukana, maksuton laitteen vaihto.' },
  },
}

/** A pack with its visible text in the given language (ids, slugs, flags and waMessage unchanged). */
export function localizePack(pack: Pack, locale: LocaleCode): Pack {
  return { ...pack, ...PACK_TEXT[locale][pack.id] }
}

/** The four packs in the current site language. Use this (not PACKS) for anything shown on screen. */
export function usePacks(): Pack[] {
  const [locale] = useLocale()
  return PACKS.map((p) => localizePack(p, locale))
}

/** One pack in the current site language. */
export function usePack(id: PackId): Pack {
  const [locale] = useLocale()
  return localizePack(packById(id), locale)
}

export function packById(id: PackId): Pack {
  const pack = PACKS.find((p) => p.id === id)
  if (!pack) throw new Error(`Unknown pack: ${id}`)
  return pack
}

/** Router path of a pack's product page (use with <Link to> / <ButtonLink to>). */
export function productPath(pack: Pack): string {
  return `/produit/${pack.slug}/`
}

/**
 * Old product URLs (previous catalogue) → where they now lead. Any other old `abonnement-*` /
 * `renouvellement-*` slug (e.g. the retired short plan) falls back to the shop: see legacyProductRedirect.
 */
export const LEGACY_PRODUCT_REDIRECTS: Record<string, string> = {
  'abonnement-6-mois': '/produit/pack-flex-6-mois/',
  'abonnement-12-mois': '/produit/pack-signature-12-mois/',
  'abonnement-12-mois-seul-acces': '/produit/pack-essentiel-12-mois/',
  'abonnement-24-mois': '/produit/pack-serenite-24-mois/',
  'renouvellement-12-mois': '/pricing/',
}

export function legacyProductRedirect(slug: string): string | undefined {
  if (slug in LEGACY_PRODUCT_REDIRECTS) return LEGACY_PRODUCT_REDIRECTS[slug]
  if (/^(abonnement|renouvellement)-/.test(slug)) return '/pricing/'
  return undefined
}
