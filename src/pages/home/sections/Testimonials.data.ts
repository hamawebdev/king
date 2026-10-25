// Spec S13 copy, word for word. To add a WhatsApp screenshot to a card, drop the image in
// public/testimonials/ and set `screenshot` to its path WITHOUT a leading slash, e.g. 'testimonials/thomas.jpg'
// (it is resolved with routeHref so it works under the GitHub Pages base path).
// Other languages: Testimonials.data.<lang>.ts (badge, quote, meta per review, in the same order); names, emoji and
// screenshots always come from REVIEWS below. Components use useTestimonials().
import { useCopy, type Localized } from '@/lib/i18n'
import { de } from './Testimonials.data.de'
import { en } from './Testimonials.data.en'
import { es } from './Testimonials.data.es'
import { fi } from './Testimonials.data.fi'
import { pt } from './Testimonials.data.pt'

export type Review = {
  /** Spec « Badge » (emoji first). */
  badgeEmoji: string
  badge: string
  quote: string
  name: string
  /** « City, Country · Month Year » */
  meta: string
  /** Optional WhatsApp screenshot, e.g. 'testimonials/thomas.jpg'. Empty → placeholder frame. */
  screenshot?: string
}

export const TESTIMONIALS_COPY = {
  eyebrow: "TÉMOIGNAGES VÉRIFIÉS · L'EXPÉRIENCE NOVASTREAM",
  title: "L'Avis de Ceux Qui Regardent King 365 TV avec NovaStream",
  subtitle:
    'Découvrez les retours authentiques des spectateurs qui ont choisi NovaStream comme distributeur agréé pour activer et suivre leur abonnement chaque semaine.',
}

/** « Barre de Confiance NovaStream (3 Indicateurs Clés) ». */
export const TRUST_STATS: { value: string; label: string; stars?: boolean }[] = [
  { value: '4.9 / 5', label: 'Note Globale NovaStream', stars: true },
  { value: '+50 000', label: 'Abonnés Accompagnés & Fidélisés' },
  { value: '99%', label: 'Recommandent le Support NovaStream' },
]

export const REVIEWS: Review[] = [
  {
    badgeEmoji: '⚡',
    badge: 'Réactivité NovaStream',
    quote:
      "« J'ai commandé mon abonnement King 365 TV directement chez NovaStream via WhatsApp. Temps de réponse incroyable : en moins de 3 minutes après mon virement, le conseiller NovaStream m'avait déjà envoyé mes codes et tout fonctionnait. »",
    name: 'Thomas R.',
    meta: 'Lyon, France · Février 2026',
  },
  {
    badgeEmoji: '🤝',
    badge: 'Aide & Courtoisie',
    quote:
      "« N'étant pas très douée avec la technologie, j'avais peur de ne pas savoir installer l'application sur ma TV Samsung. Le support NovaStream a été d'une patience remarquable : ils ont activé mon lecteur IBO Player à distance pas à pas. Un vrai service humain ! »",
    name: 'Sophie B.',
    meta: 'Québec, Canada · Janvier 2026',
  },
  {
    badgeEmoji: '🛡️',
    badge: 'Stabilité & DNS NovaStream',
    quote:
      "« J'ai essayé plusieurs revendeurs avant de connaître NovaStream. Avec leur Pack Signature à 59,99 € et le DNS Dédié NovaStream, je regarde tous les grands matchs en 4K 60 FPS sur l'application King 365 V4 sans la moindre coupure. »",
    name: 'Karim D.',
    meta: 'Namur, Belgique · Décembre 2025',
  },
  {
    badgeEmoji: '💎',
    badge: 'Confiance & Transparence',
    quote:
      "« Ce que j'apprécie chez NovaStream, c'est la franchise et le sérieux. En tant que distributeur agréé, ils ne demandent aucune carte bancaire sur le site, le paiement PayPal est sécurisé et les tarifs sont clairs. On se sent immédiatement en confiance. »",
    name: 'Marc L.',
    meta: 'Bordeaux, France · Mars 2026',
  },
  {
    badgeEmoji: '🎬',
    badge: 'Cinéma & Prix Doux',
    // « price » is the spec's wording (kept as written; main raises it with the client).
    quote:
      "« Depuis que nous sommes passés chez NovaStream, les soirées en famille ont vraiment changé. Le catalogue King 365 est énorme (+16 000 films et séries en 4K/FHD), on reprend nos épisodes là où on s'était arrêté, et le price nous fait économiser une fortune. »",
    name: 'Lucas M.',
    meta: 'Toulouse, France · Février 2026',
  },
  {
    badgeEmoji: '🔄',
    badge: 'Fidélité & Suivi',
    quote:
      '« Deuxième année que je renouvelle mon accès King 365 auprès de l\'équipe NovaStream. Un simple message sur leur WhatsApp et mon code a été prolongé pour 12 mois en quelques secondes, sans perdre mes favoris sur ma Box Android. »',
    name: 'Nadia K.',
    meta: 'Genève, Suisse · Janvier 2026',
  },
]

/** « Bandeau Inférieur des 8 Pastilles NovaStream (Pills) ». */
export const REVIEW_PILLS: { emoji: string; label: string }[] = [
  { emoji: '✨', label: 'Image 4K HDR' },
  { emoji: '⚡', label: 'Zapping Express' },
  { emoji: '🛡️', label: 'Relais DNS NovaStream' },
  { emoji: '💶', label: 'Tarif Très Doux' },
  { emoji: '🎬', label: '+16 000 Films & Séries' },
  { emoji: '💬', label: 'Support NovaStream < 2 min' },
  { emoji: '📱', label: 'Tous Les Écrans' },
  { emoji: '⏪', label: 'Rattrapage 15 Jours' },
]

/* ------------------------------------------------------------------------------------------------------------ */
/* Localized copy. French = the constants above (spec text).                                                     */
/* ------------------------------------------------------------------------------------------------------------ */

/** The translatable part of a review (name, emoji and screenshot stay those of REVIEWS). */
export type ReviewText = Pick<Review, 'badge' | 'quote' | 'meta'>

export type TestimonialsCopy = {
  head: { eyebrow: string; title: string; subtitle: string }
  trustStats: { value: string; label: string; stars?: boolean }[]
  /** Same order as REVIEWS. */
  reviews: ReviewText[]
  pills: { emoji: string; label: string }[]
  ui: {
    /** aria-label of the 5 stars. */
    rating: string
    screenshotAlt: (name: string) => string
    /** Empty screenshot frame (decorative). */
    screenshotPlaceholder: string
    reviewsLabel: string
    pillsLabel: string
  }
}

const fr: TestimonialsCopy = {
  head: TESTIMONIALS_COPY,
  trustStats: TRUST_STATS,
  reviews: REVIEWS,
  pills: REVIEW_PILLS,
  ui: {
    rating: 'Note : 5 sur 5',
    screenshotAlt: (name) => `Capture WhatsApp de l'avis de ${name}`,
    screenshotPlaceholder: 'Capture WhatsApp',
    reviewsLabel: 'Avis clients NovaStream',
    pillsLabel: 'Points forts NovaStream',
  },
}

const COPY: Localized<TestimonialsCopy> = { fr, en, de, es, pt, fi }

/** Section 13 copy in the current language, reviews merged with REVIEWS (names, emoji, screenshots). */
export function useTestimonials(): Omit<TestimonialsCopy, 'reviews'> & { reviews: Review[] } {
  const t = useCopy(COPY)
  return { ...t, reviews: REVIEWS.map((r, i) => ({ ...r, ...t.reviews[i] })) }
}
