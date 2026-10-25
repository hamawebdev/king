// Spec S10 (Issue 10) — « Spécifications et textes français approuvés », word for word (spec p.10–12).
// The four packs themselves live in @/lib/packs (PACKS) — never re-type prices here.
// Other languages: Activation.data.<lang>.ts, typed against ActivationCopy. Components use useActivationCopy().
import { useCopy, type Localized } from '@/lib/i18n'
import { de } from './Activation.data.de'
import { en } from './Activation.data.en'
import { es } from './Activation.data.es'
import { fi } from './Activation.data.fi'
import { pt } from './Activation.data.pt'

/** Keeps « King 365 TV » on one line in headings (non-breaking spaces; the words are unchanged). */
export function keepKing(text: string): string {
  return text.replace(/King 365 TV/g, 'King\u00a0365\u00a0TV')
}

/** A. Protocole d'Activation en 4 Étapes (Onboarding Flow). */
export const ACTIVATION_HEAD = {
  badge: 'PARCOURS CLIENT TRANSPARENT · ACTIVATION GUIDÉE',
  title: 'Comment Activer Votre Accès King 365 TV en 4 Étapes',
  subtitle:
    'Une procédure fluide, confidentielle et assistée de bout en bout. De la sélection de votre formule à votre premier visionnage, nos conseillers vous accompagnent pas à pas.',
}

export type ActivationStep = {
  /** '01' */
  num: string
  title: string
  chip: { emoji: string; label: string }
  text: string
}

export const ACTIVATION_STEPS: ActivationStep[] = [
  {
    num: '01',
    title: 'Sélection de la Durée',
    chip: { emoji: '⏱️', label: '1 minute' },
    text: "Choisissez l'engagement adapté à vos besoins : 6 mois, 12 mois (Pack Signature recommandé) ou 24 mois. Profitez d'une tarification dégressive claire sans engagement masqué.",
  },
  {
    num: '02',
    title: 'PayPal & Virement SEPA',
    chip: { emoji: '🔒', label: 'Protection intégrale' },
    text: 'Réglez votre accès en toute sérénité sans saisir vos coordonnées de carte bancaire sur le site. Transactions protégées via PayPal (avec protection acheteur) ou par Virement Bancaire Instantané SEPA.',
  },
  {
    num: '03',
    title: 'Envoi Instantané Xtream & M3U',
    chip: { emoji: '⚡', label: 'Livraison directe' },
    text: 'Réception immédiate de vos identifiants complets sur WhatsApp et par e-mail : codes API Xtream (identifiant, mot de passe, URL serveur) et lien M3U optimisé avec votre DNS Dédié anti-blocage.',
  },
  {
    num: '04',
    title: 'Installation & Zapping 4K',
    chip: { emoji: '🚀', label: 'Accès immédiat' },
    text: "Insérez vos identifiants dans l'application officielle King 365 TV ou sur votre lecteur multimédia favori. Suivez notre tutoriel détaillé ou laissez notre support configurer votre écran à distance.",
  },
]

/** B. Boîte de Réassurance : Écosystème Ouvert & Engagements Inclus (6 Piliers). */
export const REASSURANCE_TITLE = 'Écosystème Ouvert & Engagements Inclus'

export type PillarIcon = 'players' | 'screens' | 'whatsapp' | 'tutorials' | 'updates' | 'guarantee'

export type Pillar = {
  icon: PillarIcon
  title: string
  /** Text; `{phone}` marks where the WhatsApp number link goes. */
  text: string
}

export const REASSURANCE_PILLARS: Pillar[] = [
  {
    icon: 'players',
    title: 'Compatibilité Lecteurs Tiers',
    text: 'Opérationnel sur applications officielles (V2, V3, V4) et lecteurs tiers majeurs payants ou gratuits (IBO Player, TiviMate, IPTV Smarters Pro, Bob Player, Hot Player, SmartOne...).',
  },
  {
    icon: 'screens',
    title: 'Multi-Écrans & Flexibilité',
    text: 'Utilisable sur Smart TV (Samsung Tizen, LG webOS, Sony, TCL), Android TV, Fire TV Stick, Apple TV, iOS, Android et PC. (1 écran actif en simultané par code, ou abonnements multiples indépendants pour plusieurs écrans simultanés).',
  },
  {
    icon: 'whatsapp',
    title: 'Ligne WhatsApp Dédiée 1-to-1',
    text: 'Accès privilégié direct à un conseiller technique en français 24/7 sur WhatsApp ({phone}) pour toute assistance.',
  },
  {
    icon: 'tutorials',
    title: 'Tutoriels Pas-à-Pas Clés en Main',
    text: 'Guides illustrés transmis lors de la commande pour installer et configurer votre lecteur en moins de 3 minutes.',
  },
  {
    icon: 'updates',
    title: 'Mises à Jour Continues',
    text: "Actualisations automatiques quotidiennes des flux en direct et ajouts constants des dernières sorties VOD durant toute la période d'abonnement.",
  },
  {
    icon: 'guarantee',
    title: "Garantie & Suivi Tout au Long de l'Abonnement",
    text: 'Garantie totale de continuité et suivi technique proactif pendant toute la durée de votre souscription avec remplacement ou récupération gratuite de code en cas de besoin.',
  },
]

/** C. Grille Tarifaire Officielle des 4 Formules — heading (SEO: king 365 tv abonnement / abonnement king 365 / renouveler abonnement king 365). */
export const PRICING_HEAD = {
  badge: 'TARIFS OFFICIELS · DISTRIBUTEUR AGRÉÉ KING 365 TV',
  title: 'Choisissez Votre King 365 TV Abonnement Officiel',
  subtitle:
    "Que vous souhaitiez activer un nouvel abonnement King 365 ou renouveler votre abonnement King 365 actuel, profitez d'une diffusion continue haute performance sans engagement masqué.",
}

/** C. « Inclus dans chaque formule » block, placed directly before the four pack cards. */
export const INCLUDED_HEAD = {
  badge: 'INCLUS DANS CHAQUE FORMULE NOVASTREAM',
  title: "Tout Ce Qu'inclut Votre Abonnement King 365 TV chez NovaStream",
}

export const INCLUDED_METRICS: { value: string; label: string }[] = [
  { value: '+5 700', label: 'Programmes & Chaînes en Direct' },
  { value: '+16 000', label: 'Titres VOD à la Demande (Films & Séries)' },
  { value: '4K HDR', label: "Définition jusqu'au 4K UHD (50/60 FPS)" },
  { value: '7 à 15j', label: 'Rattrapage (Replay) & Timeshift Inclus' },
]

/** Bandeau des Équipements Pris en Charge par NovaStream (Pills). */
export const SUPPORTED_DEVICES: { emoji: string; label: string }[] = [
  { emoji: '📺', label: 'Smart TV (Samsung & LG)' },
  { emoji: '🔥', label: 'Fire TV Stick' },
  { emoji: '🤖', label: 'Google TV & Box Android' },
  { emoji: '🍎', label: 'Apple TV' },
  { emoji: '📱', label: 'iPhone & iPad' },
  { emoji: '💻', label: 'PC Windows & Mac' },
  { emoji: '📡', label: 'Formuler (MyTVOnline)' },
  { emoji: '📟', label: 'MAG Box' },
  { emoji: '⚡', label: 'Lecteur API Xtream' },
  { emoji: '🔗', label: 'Flux M3U' },
]

/** Les 3 Protocoles de Connexion Fournis par NovaStream. `tag` is the parenthetical of the spec title. */
export const CONNECTION_PROTOCOLS: { num: string; title: string; tag: string; text: string }[] = [
  {
    num: '1',
    title: 'Applications King 365 TV via NovaStream',
    tag: 'Conseillé · Sans Frais',
    text: 'Accès direct sur Android, Google TV, Box et Firestick via les versions V2, V3 et V4 avec les identifiants activés par NovaStream.',
  },
  {
    num: '2',
    title: 'Lecteur API Xtream NovaStream',
    tag: 'Apprécié · Zéro Réglage Complexe',
    text: 'Connexion rapide par Identifiant, Mot de passe et URL serveur fournis par NovaStream avec synchronisation automatique du guide EPG.',
  },
  {
    num: '3',
    title: 'Flux M3U & Portail MAC',
    tag: 'iOS, tvOS & Smart TV',
    text: "Pensé par l'équipe NovaStream pour IBO Player, IBO Player Smarter, Bob Player et Hot Player sur Samsung, LG, iPhone, iPad et Apple TV.",
  },
]

/** Column labels of the spec's pack table (they become the labels inside each pack card). */
export const PACK_TABLE_LABELS = {
  formula: 'Formule',
  durationPrice: 'Durée / Tarif',
  inclusions: 'Inclusions Clefs',
  whatsapp: 'Lien Direct WhatsApp',
}

/** Signature emphasis: « Pack Signature recommandé » (Étape 01). */
export const PACK_RECOMMENDED = 'Recommandé'

/** Pack card CTA (UI label; the prefilled message is each pack's spec text). */
export const PACK_CTA = 'Activer sur WhatsApp'

/** Payment line under the packs — Étape 02's sentence, word for word. No card payment anywhere. */
export const PAYMENT_NOTE = 'Transactions protégées via PayPal (avec protection acheteur) ou par Virement Bancaire Instantané SEPA.'

/* ------------------------------------------------------------------------------------------------------------ */
/* Localized copy. French = the constants above (spec text); other languages in Activation.data.<lang>.ts.        */
/* ------------------------------------------------------------------------------------------------------------ */

export type ActivationCopy = {
  head: { badge: string; title: string; subtitle: string }
  /** Word on the step tiles and in their screen-reader prefix (« Étape 01 »). */
  stepLabel: string
  steps: ActivationStep[]
  reassuranceTitle: string
  pillars: Pillar[]
  pricingHead: { badge: string; title: string; subtitle: string }
  includedHead: { badge: string; title: string }
  includedMetrics: { value: string; label: string }[]
  supportedDevices: { emoji: string; label: string }[]
  protocols: { num: string; title: string; tag: string; text: string }[]
  packTableLabels: { formula: string; durationPrice: string; inclusions: string; whatsapp: string }
  packRecommended: string
  packCta: string
  paymentNote: string
}

const fr: ActivationCopy = {
  head: ACTIVATION_HEAD,
  stepLabel: 'Étape',
  steps: ACTIVATION_STEPS,
  reassuranceTitle: REASSURANCE_TITLE,
  pillars: REASSURANCE_PILLARS,
  pricingHead: PRICING_HEAD,
  includedHead: INCLUDED_HEAD,
  includedMetrics: INCLUDED_METRICS,
  supportedDevices: SUPPORTED_DEVICES,
  protocols: CONNECTION_PROTOCOLS,
  packTableLabels: PACK_TABLE_LABELS,
  packRecommended: PACK_RECOMMENDED,
  packCta: PACK_CTA,
  paymentNote: PAYMENT_NOTE,
}

export const ACTIVATION_COPY: Localized<ActivationCopy> = { fr, en, de, es, pt, fi }

/** All of section 10's copy in the current site language. */
export function useActivationCopy(): ActivationCopy {
  return useCopy(ACTIVATION_COPY)
}

/** « Comment Activer Votre Accès… » heading (badge, title, subtitle) in the current language. */
export function useActivationHead(): ActivationCopy['head'] {
  return useActivationCopy().head
}

/** Pack CTA label (« Activer sur WhatsApp ») in the current language. */
export function usePackCta(): string {
  return useActivationCopy().packCta
}
