/**
 * Section 11 — the 9 device guides, word for word from the spec (« Spécifications et textes français approuvés », p.15–20).
 *
 * Inline markup understood by <Rich>: **bold**, *italic*, `mono` (menu paths, field names), [label](wa:key) for a
 * WhatsApp link whose prefilled text is WA_MESSAGES[key].
 *
 * Note: the spec gives two different Downloader code sets for King 365 TV — Firestick (756917 / 283367 / 2763945)
 * and Android (223650 / 333650 / 443650). Each block is copied exactly as written; reported to the lead.
 *
 * Other languages: devices.{en,de,es,pt,fi}.ts, same devices, blocks, apps and codes in the same order (useDevices()).
 * WhatsApp prefilled texts stay French (the advisors work in French): pass the French device name (DEVICES) to them.
 */

import { useCopy, type Localized } from '@/lib/i18n'
import { DEVICES_DE } from './devices.de'
import { DEVICES_EN } from './devices.en'
import { DEVICES_ES } from './devices.es'
import { DEVICES_FI } from './devices.fi'
import { DEVICES_PT } from './devices.pt'

export type DeviceId = 'smart-tv' | 'firestick' | 'android' | 'apple' | 'windows' | 'mac' | 'mag' | 'shield' | 'formuler'

export type DownloaderCode = { label: string; code: string }

export type BadgeTone = 'paid' | 'free' | 'special'

export type AppEntry = {
  name: string
  /** Label pill, e.g. « APPLICATION PAYANTE · ~8 € / an · 7 jours d'essai gratuit ». */
  badge?: string
  badgeTone?: BadgeTone
  /** Monogram in the logo tile (King 365 versions); a generic player icon otherwise. */
  mark?: string
  /** Rich text shown in the panel. */
  text?: string
  /** Copyable Downloader codes shown in the panel. */
  codes?: DownloaderCode[]
  /** Obsolete codes to avoid (shown in red, not copyable). */
  obsolete?: DownloaderCode[]
  danger?: boolean
}

export type CalloutTone = 'danger' | 'warning' | 'tip' | 'info'

export type GuideBlock =
  | { type: 'callout'; tone: CalloutTone; /** Spec emoji (a lucide icon stands in when the spec has none). */ emoji?: string; title: string; subtitle?: string; paragraphs: string[]; items?: string[] }
  | { type: 'steps'; title?: string; steps: string[] }
  | { type: 'apps'; title: string; apps: AppEntry[] }
  | { type: 'codes'; codes: DownloaderCode[] }

export type Device = {
  id: DeviceId
  emoji: string
  /** Selector card: name + detail (spec list « 3. Sélecteur Interactif des 9 Appareils »). */
  name: string
  detail: string
  /** Guide heading (spec « Appareil N : … »). */
  guideTitle: string
  guideDetail?: string
  blocks: GuideBlock[]
}

/** Prefilled WhatsApp texts. `help` is the spec's (help banner); the others are neutral support messages (no spec text). */
export const WA_MESSAGES = {
  help: "Bonjour NovaStream, j'ai besoin d'aide pour installer et configurer mon appareil",
  iboDevice:
    "Bonjour NovaStream, voici la photo du Device ID (MAC) et de la Device Key de mon application IBO Player pour l'activation de mon abonnement",
  magAddress: "Bonjour NovaStream, voici l'adresse MAC de mon boîtier MAG pour recevoir mon lien Portal URL :",
} as const

export type WaMessageKey = keyof typeof WA_MESSAGES

/** Help card in the sticky column (spec gives the number, no text): neutral message, names the device when one is open. */
export function setupHelpMessage(deviceName?: string) {
  return `Bonjour NovaStream, j'ai un souci pendant la configuration de mon appareil${deviceName ? ` (${deviceName})` : ''}`
}

/** « Voir le tutoriel détaillé » button (spec gives no tutorial URL): asks the advisors for the illustrated guide. */
export function tutorialMessage(deviceName?: string) {
  return `Bonjour NovaStream, je souhaite recevoir le tutoriel détaillé pas-à-pas (avec captures d'écran)${deviceName ? ` pour mon appareil ${deviceName}` : ''}`
}

const PAID = "APPLICATION PAYANTE · ~8 € / an · 7 jours d'essai gratuit"
const PAID_WIN = "APPLICATION PAYANTE (~8 € / an · 7 jours d'essai gratuit)"

export const DEVICES: Device[] = [
  {
    id: 'smart-tv',
    emoji: '📺',
    name: 'Smart TV',
    detail: 'Samsung, LG, Sony, Philips...',
    guideTitle: 'Smart TV',
    guideDetail: 'Samsung Tizen, LG webOS, Sony, Philips',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '⚠️',
        title: 'Alerte Prioritaire Smarters Pro',
        paragraphs: [
          "Ne pas utiliser IPTV Smarters Pro ou Smarters Player sur Smart TV : La version Smart TV n'est plus optimisée sur Samsung et LG. Elle engendre des coupures fréquentes, une instabilité et des blocages de lecture indépendants de notre service. Utilisez l'une des applications recommandées ci-dessous (ou IPTV Stream Player si vous cherchez une alternative gratuite).",
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: 'Pourquoi privilégier les lecteurs payants sur Smart TV ?',
        paragraphs: [
          "IBO Player Pro, IBO Player Smarter, Bob Player et Hot Player proposent chacune 7 jours d'essai gratuit. Elles offrent une stabilité 4K exemplaire, chargent le guide EPG instantanément et vous permettent de reprendre vos films et séries à la seconde exacte où vous vous êtes arrêté. À la fin de l'essai, notre équipe peut activer votre licence officielle (~8 € / an) directement via WhatsApp.",
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Note Android TV',
        paragraphs: [
          "Vous possédez une Android TV ou Google TV (Sony, TCL, Xiaomi, Philips) ? Installez l'application gratuite Downloader depuis Google Play, puis suivez la méthode Android / Firestick pour installer gratuitement nos applications officielles King 365 TV (V2, V3 ou V4).",
        ],
      },
      {
        type: 'apps',
        title: 'Applications Recommandées',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: "Installer depuis Samsung Apps / LG Content Store → Noter le *Device ID (MAC)* et la *Device Key* → Envoyer en photo sur WhatsApp ([wa.me/33751299176](wa:iboDevice)) pour injection directe de l'abonnement et activation.",
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Interface moderne ultra-stable avec reprise de lecture VOD et EPG complet.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Zapping instantané et gestion fluide des bouquets.',
          },
          {
            name: 'Hot Player / Hot IPTV',
            badge: "APPLICATION PAYANTE · ~8 € / an / 7 jours d'essai gratuit",
            badgeTone: 'paid',
          },
        ],
      },
    ],
  },
  {
    id: 'firestick',
    emoji: '🔥',
    name: 'Amazon Firestick',
    detail: 'Fire TV Stick 4K / Max / Lite / Cube',
    guideTitle: 'Amazon Firestick',
    guideDetail: 'Fire TV Stick 4K, Max, Lite, Cube',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '🚨',
        title: 'AVERTISSEMENT OFFICIEL VEGA OS',
        subtitle: "AVERTISSEMENT CONCERNANT L'AMAZON FIRE TV STICK HD DE 2ᵉ GÉNÉRATION :",
        paragraphs: [
          'Nous recommandons vivement à notre clientèle de ne pas acquérir le Amazon Fire TV Stick HD (2ᵉ génération). Ce modèle récent fonctionne sous le système fermé **Vega OS**, contrairement aux versions précédentes qui utilisaient un système Android / Fire OS compatible avec les applications externes :',
        ],
        items: [
          "❌ L'application **Downloader** n'est pas disponible, contrairement aux modèles antérieurs.",
          "❌ L'installation d'applications externes ou de fichiers APK est fortement restreinte.",
          "❌ En conséquence, ce modèle n'est pas compatible avec notre usage.",
          "✅ Pour l'utilisation de nos applications, il est conseillé de privilégier un appareil fonctionnant sous Android (Xiaomi, Mecool) ou un modèle Fire TV Stick 4K / 4K Max / Lite / Cube compatible avec Downloader et l'installation d'APK.",
        ],
      },
      {
        type: 'steps',
        title: "Les 4 Étapes d'Installation via Downloader",
        steps: [
          '**Installer Downloader :** Sur l\'écran d\'accueil Fire TV, aller sur Rechercher, taper *"Downloader"* et l\'installer gratuitement.',
          '**Activer les Options Développeur :** Aller dans `Paramètres > Ma Fire TV > À propos`, puis cliquer **7 fois rapidement** sur le nom du Fire TV Stick.',
          "**Autoriser les sources inconnues :** Dans `Options pour les développeurs > Installer des applications inconnues`, activer l'autorisation pour **Downloader (ON)**.",
          "**Saisir le Code Downloader :** Ouvrir Downloader, taper le code de l'application souhaitée ci-dessous et cliquer sur **Go**.",
        ],
      },
      {
        type: 'apps',
        title: 'Applications & Codes Downloader sur Firestick',
        apps: [
          {
            name: 'King 365 TV — Version 2 (V2)',
            mark: 'V2',
            badge: 'OFFICIELLE · GRATUITE',
            badgeTone: 'free',
            codes: [{ label: 'Code Downloader', code: '756917' }],
            text: 'Connexion par Identifiant + Mot de passe.',
          },
          {
            name: 'King 365 TV — Version 3 (V3)',
            mark: 'V3',
            badge: 'OFFICIELLE · GRATUITE',
            badgeTone: 'free',
            codes: [{ label: 'Code Downloader', code: '283367' }],
            text: 'Connexion par Identifiant + Mot de passe.',
          },
          {
            name: 'King 365 TV — Version 4 (V4 - Édition 2026)',
            mark: 'V4',
            badge: 'SPÉCIAL ÉCRANS TV · GRATUITE',
            badgeTone: 'special',
            codes: [{ label: 'Code Downloader', code: '2763945' }],
            text: 'Exclusivement pour écrans TV et Box. Saisir **Playlist Name** (nom au choix) + **Identifiant** + **Mot de passe**.',
          },
          {
            name: 'Lecteurs Payants',
            badge: "~8 € / an · 7 jours d'essai gratuit",
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'Applications King365TV Codes Obsolètes à Éviter Absolument (À désinstaller)',
            danger: true,
            obsolete: [
              { label: 'V4 OLD', code: '8872559' },
              { label: 'V3 OLD', code: '702186' },
              { label: 'V2 OLD', code: '5638769' },
              { label: '2.2 OLD', code: '671387' },
              { label: '2.2.2 OLD', code: '6783194' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'android',
    emoji: '🤖',
    name: 'Android',
    detail: 'Téléphone, Tablette, Google TV, TV Box Xiaomi / Mecool',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Box Xiaomi / Mecool, Smartphones & Tablettes',
    blocks: [
      {
        type: 'apps',
        title: 'Installation via Downloader (TV & Box) ou APK direct',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: 'Code Downloader', code: '223650' }],
            text: 'Compatible TV, Box, Smartphones et Tablettes.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: 'Code Downloader', code: '333650' }],
            text: 'Compatible TV, Box, Smartphones et Tablettes.',
          },
          {
            name: 'King 365 TV V4 (Édition 2026)',
            mark: 'V4',
            codes: [{ label: 'Code Downloader', code: '443650' }],
            text: '**Uniquement pour Google TV récents, téléviseurs Android récents et TV Box Android** *(non compatible téléphones)*. Saisir *Playlist Name + Identifiant + Mot de passe*.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Note Redondance King 365',
        paragraphs: [
          "Nous conseillons d'installer ou conserver les 3 versions (V2, V3, V4) afin d'avoir toujours une application de secours prête en cas de maintenance sur l'une d'elles.",
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Note Xtream / M3U & Assistance',
        paragraphs: [
          "Pour les utilisateurs préférant leur propre lecteur (TiviMate, IBO Player, Bob Player...), nous fournissons les accès complets en **Xtream Codes** ou **M3U**, ou nous configurons l'application à distance via WhatsApp ([+33 7 51 29 91 76](wa:help)).",
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS & tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS & tvOS',
    blocks: [
      {
        type: 'apps',
        title: "Téléchargement direct depuis l'**App Store officiel** (aucun VLC, aucun Smarters Pro sur iPhone)",
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APPLICATION PAYANTE · ~8 € / an · Essai gratuit inclus', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'Windows PC',
    detail: 'Microsoft Store',
    guideTitle: 'Windows PC',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Installation directe depuis le **Microsoft Store** (suppression totale de VLC et BlueStacks)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Édition Windows)',
            badge: 'GRATUIT (FREE)',
            badgeTone: 'free',
            text: 'Version ordinateur mise à jour, fluide et gratuite via identifiants Xtream.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APPLICATION PAYANTE (~8 € / an · Essai gratuit inclus)', badgeTone: 'paid' },
          { name: 'vormedia sat', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'ibo player smarter', badge: PAID_WIN, badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mac',
    emoji: '🖥️',
    name: 'Mac',
    detail: 'macOS',
    guideTitle: 'Mac',
    guideDetail: 'macOS',
    blocks: [
      {
        type: 'apps',
        title: 'Installation sur MacBook et iMac (sans VLC)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'GRATUIT / FREE', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'APPLICATION PAYANTE · ~8 € / an', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mag',
    emoji: '📟',
    name: 'MAG Box',
    detail: 'Infomir 254 / 256 / 322 / 520...',
    guideTitle: 'MAG Box',
    guideDetail: 'Infomir 254 / 256 / 322 / 520...',
    blocks: [
      {
        type: 'steps',
        title: 'Configuration rapide par **Adresse MAC**',
        steps: [
          "**Envoyer l'adresse MAC :** Relever l'adresse au dos du boîtier (`00:1A:79:XX:XX:XX`) et l'envoyer sur notre WhatsApp ([wa.me/33751299176](wa:magAddress)).",
          '**Réception du Portail :** Nous vous transmettons votre lien `Portal URL` activé.',
          '**Paramètres :** Aller dans `Settings > System Settings > Servers > Portals`.',
          "**Saisie :** Entrer un nom dans `Portal 1 Name` et coller l'URL dans `Portal 1 URL`.",
          '**Sauvegarde :** Appuyer sur OK pour enregistrer et redémarrer le boîtier.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'Android TV Haute Performance',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Fonctionne sous Android TV avec Google Play Store intégré',
        steps: [
          'Installer gratuitement **Downloader** depuis le Google Play Store.',
          'Autoriser Downloader dans `Paramètres > Préférences de l\'appareil > Sécurité et restrictions`.',
          'Saisir le code Downloader de **King 365 TV V3 (333650)**, **King 365 TV V4 (443650)** ou **IBO Player Pro (481220)**.',
        ],
      },
      {
        type: 'codes',
        codes: [
          { label: 'King 365 TV V3', code: '333650' },
          { label: 'King 365 TV V4', code: '443650' },
          { label: 'IBO Player Pro', code: '481220' },
        ],
      },
    ],
  },
  {
    id: 'formuler',
    emoji: '📡',
    name: 'Formuler / Dreamlink',
    detail: 'Application MyTVOnline 2 & 3',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 & MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Important',
        paragraphs: [
          "Utiliser les **codes Xtream** (URL Portail + Identifiant + Mot de passe) et **non l'adresse MAC** sur Formuler :",
        ],
      },
      {
        type: 'steps',
        steps: [
          '**Ouvrir MyTVOnline :** Lancer *MyTVOnline 2* ou *MyTVOnline 3* (ou *DOL2* sur Dreamlink).',
          '**Ajouter un Portail :** Aller dans `Menu > Connexions > Ajouter un Portail (Add Portal)`.',
          '**Nommer le Portail :** Saisir un nom au choix (ex: *NovaStream*).',
          "**Activer la connexion :** Basculer l'option `Connexion requise (Login Required)` sur **ON**.",
          "**Saisir les accès :** Entrer l'URL du Portail, l'Identifiant et le Mot de passe reçus.",
          '**Se connecter :** Appuyer sur **Connect** pour charger instantanément les chaînes et la VOD.',
        ],
      },
    ],
  },
]

const DEVICES_BY_LOCALE: Localized<Device[]> = {
  fr: DEVICES,
  en: DEVICES_EN,
  de: DEVICES_DE,
  es: DEVICES_ES,
  pt: DEVICES_PT,
  fi: DEVICES_FI,
}

/** The 9 device guides in the current language (same ids and order as DEVICES). */
export function useDevices(): Device[] {
  return useCopy(DEVICES_BY_LOCALE)
}
