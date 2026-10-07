import { useState, type ReactNode } from 'react'
import { BRAND, BRAND_UPPER, SUPPORT_EMAIL_HREF } from '@/lib/site'
import type { Card, IconText } from '../data'
import { BAND, COLUMN, TITLE, buttonClass, cx } from '../styles'
import { Accent, ChipRow, FeatureGrid, RowLabel, SectionHead, StatGrid } from '../ui'

type Guide = { icon: string; title: string; tags: string[]; steps: string[]; tip: string }

const GUIDES_HEAD = {
  eyebrow: 'Mise en Route',
  titleStart: 'Guides de Réglage ',
  titleBlue: BRAND,
  titleEnd: '',
  text: 'Suivez nos fiches pratiques et regardez vos chaînes en moins de dix minutes.',
  stats: [
    { value: '< 8 min', label: 'Installation' },
    { value: '100%', label: 'Compatible' },
    { value: '7j/7', label: 'Support' },
  ],
}

const GUIDES: Guide[] = [
  {
    icon: 'ti-device-tv',
    title: `Smart TV — Paramétrer ${BRAND}`,
    tags: ['Écran 4K', 'OLED', 'QLED', 'LED', '+1'],
    steps: [
      'Ouvrez la boutique d’applications intégrée à votre téléviseur',
      'Installez un lecteur M3U ou Xtream gratuit',
      'Recopiez les informations de connexion de votre commande',
      'Installez-vous et lancez votre chaîne !',
    ],
    tip: 'Pour une image stable, reliez votre téléviseur en Ethernet plutôt qu’en Wi-Fi. Le réglage complet ne dure que quelques minutes.',
  },
  {
    icon: 'ti-flame',
    title: `Fire TV Stick — Paramétrer ${BRAND}`,
    tags: ['Clé HDMI 4K Max', 'Clé HDMI Lite', 'Boîtier Cube'],
    steps: [
      'Dans les options développeur, activez l’installation hors boutique',
      'Ajoutez un outil de téléchargement disponible gratuitement',
      'Saisissez l’adresse de notre APK dans cet outil',
      'Validez, patientez un instant, et c’est terminé !',
    ],
    tip: 'Branchée derrière n’importe quel écran, une clé HDMI le transforme en télé connectée en un instant. Notre lecteur y tourne de façon très fluide.',
  },
  {
    icon: 'ti-brand-android',
    title: `Android — Paramétrer ${BRAND}`,
    tags: ['Smartphones', 'Tablettes', 'Boîtiers', 'TV connectées'],
    steps: [
      'Dans les réglages, permettez les installations hors boutique',
      `Récupérez le fichier APK ${BRAND} sur notre page dédiée`,
      'Suivez l’assistant jusqu’au premier lancement',
      'Connectez-vous : la grille s’affiche, c’est prêt !',
    ],
    tip: 'Notre lecteur a été pensé d’abord pour Android : il se montre léger, rapide et parfaitement adapté aux écrans tactiles comme aux télécommandes.',
  },
  {
    icon: 'ti-brand-apple',
    title: `Apple (iOS/tvOS) — Paramétrer ${BRAND}`,
    tags: ['iPhone', 'iPad', 'Apple TV', 'Mac'],
    steps: [
      'Installez un lecteur M3U compatible depuis la boutique officielle',
      'Rendez-vous dans la section de configuration du lecteur',
      'Remplissez les trois champs requis',
      'Vos chaînes s’affichent aussitôt, prêtes à être regardées !',
    ],
    tip: 'Les appareils Apple gèrent très bien nos flux en haute définition. Choisissez un lecteur récent pour profiter du guide des programmes.',
  },
  {
    icon: 'ti-device-desktop',
    title: `PC / Mac — Paramétrer ${BRAND}`,
    tags: ['Windows', 'macOS', 'Linux'],
    steps: [
      'Installez un lecteur multimédia libre',
      'Dans le lecteur, sélectionnez l’ouverture d’une adresse réseau',
      'Insérez l’adresse M3U reçue',
      'Bonne séance devant votre écran d’ordinateur !',
    ],
    tip: 'Sur ordinateur, un émulateur Android permet aussi d’utiliser notre lecteur maison et ses options.',
  },
  {
    icon: 'ti-box',
    title: `Box & Décodeurs — Paramétrer ${BRAND}`,
    tags: ['Box M3U', 'Décodeur Z8', 'Décodeur Z7', 'Box Android'],
    steps: [
      'Depuis la télécommande, affichez les réglages système',
      'Indiquez le lien serveur transmis lors de votre achat',
      'Laissez le menu se mettre à jour tout seul',
      'Les chaînes s’affichent, bon film !',
    ],
    tip: 'Pensés pour la télécommande, ces décodeurs rendent la navigation très agréable, et plusieurs intègrent un lecteur.',
  },
]

const GUIDES_EXTRA = {
  featsTitle: 'Inclus dans chaque formule',
  feats: [
    { icon: 'ti-device-tv', label: '5200+ Chaînes' },
    { icon: 'ti-movie', label: '8000+ VOD' },
    { icon: 'ti-clock', label: 'Rattrapage 10 j' },
    { icon: 'ti-world', label: 'Multi-pays' },
    { icon: 'ti-devices', label: 'Multi-écrans' },
    { icon: 'ti-sparkles', label: '4K / FHD / HD' },
  ] as IconText[],
  apps: [
    { icon: 'ti-box', title: `${BRAND_UPPER} PLAY`, badge: '• Conseillé', text: `Lecteur officiel ${BRAND} - Sans frais` },
    { icon: 'ti-bolt', title: 'Lecteur Xtream', badge: '• Apprécié', text: `Lit vos codes ${BRAND} sans réglage` },
    { icon: 'ti-brand-apple', title: 'Lecteur M3U', badge: '• iOS/tvOS', text: 'Pensé pour iPhone, iPad et box Apple TV' },
  ] as Card[],
  helpTitle: 'Un Souci Pendant la Configuration ?',
  helpText: 'Nos conseillers vous répondent chaque jour, week-end compris.',
  helpCta: 'Contacter le Support →',
}

function GuideBody({ guide }: { guide: Guide }) {
  return (
    <>
      <div className="mb-[14px] flex flex-wrap gap-[7px]">
        {guide.tags.map((tag) => (
          <span key={tag} className="rounded-[8px] bg-lp-blue-soft px-[11px] py-[4px] text-[12.5px] font-bold text-lp-blue-d">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-[6px] mb-[14px] grid gap-[11px]">
        {guide.steps.map((step, index) => (
          <div key={step} className="flex items-start gap-[13px]">
            <span className="grid size-[28px] flex-none place-items-center rounded-[8px] bg-lp-blue font-archivo text-[13px] font-extrabold text-white">
              {index + 1}
            </span>
            <div>{step}</div>
          </div>
        ))}
      </div>
      <div className="rounded-[11px] border border-[#c9dcff] bg-lp-blue-soft px-[15px] py-[12px] text-[13.5px] text-[#1a3a78]">
        <b className="font-bold text-lp-blue-d">Conseil :</b> {guide.tip}
      </div>
    </>
  )
}

type GuideRowProps = {
  title: ReactNode
  icon?: string
  /** Starts expanded (the first installation guide does). */
  initiallyOpen?: boolean
  children: ReactNode
}

/**
 * Collapsible row. Rows toggle independently (several can be open at once); the panel animates its
 * max-height over 350ms and the "＋" turns 45° into a cross over 300ms.
 */
function GuideRow({ title, icon, initiallyOpen = false, children }: GuideRowProps) {
  const [open, setOpen] = useState(initiallyOpen)

  return (
    <div className="overflow-hidden rounded-[14px] border border-lp-line bg-white shadow-lp-sm">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cx(
          'relative flex w-full items-center justify-between gap-[16px] overflow-hidden rounded-[12px] px-[22px] py-[19px] text-left font-archivo text-[16px] leading-[16px] font-bold text-lp-ink',
          'lp-sm:px-[16px] lp-sm:py-[15px] lp-sm:text-[14.5px]',
          // Colour transition the theme gives every button (no visible effect here, kept for parity).
          'transition-[color,background-color,border-color] duration-100 ease-[ease-in-out]',
          'cursor-pointer',
        )}
      >
        <span className="flex items-center gap-[11px]">
          {icon && <i className={cx('ti', icon, 'text-[20px] text-lp-blue')} />} {title}
        </span>{' '}
        <span
          aria-hidden="true"
          className={cx('flex-none text-[22px] text-lp-blue transition-all duration-300 ease-[ease]', open && 'rotate-45')}
        >
          ＋
        </span>
      </button>
      <div
        className={cx(
          'overflow-hidden transition-[max-height] duration-[350ms] ease-[ease]',
          open ? 'max-h-[1400px]' : 'max-h-0',
        )}
      >
        <div className="px-[22px] pb-[20px] text-[15px] text-lp-muted">{children}</div>
      </div>
    </div>
  )
}

/** Installation guides: figures, collapsible guides, included features, players and help. The #contact anchor lands here. */
export function HomeGuides() {
  return (
    <section id="contact" data-section="home-guides" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={GUIDES_HEAD.eyebrow}
          title={
            <>
              {GUIDES_HEAD.titleStart}
              <Accent>{GUIDES_HEAD.titleBlue}</Accent>
              {GUIDES_HEAD.titleEnd}
            </>
          }
          text={GUIDES_HEAD.text}
        />
        <StatGrid items={GUIDES_HEAD.stats} trio className="mx-auto mb-[46px] max-w-[720px]" />
        <div className="mx-auto grid max-w-[900px] gap-[11px]">
          {GUIDES.map((guide, index) => (
            <GuideRow key={guide.title} title={guide.title} icon={guide.icon} initiallyOpen={index === 0}>
              <GuideBody guide={guide} />
            </GuideRow>
          ))}
        </div>
        <RowLabel className="mt-[46px] mb-[18px]">{GUIDES_EXTRA.featsTitle}</RowLabel>
        <ChipRow items={GUIDES_EXTRA.feats} />
        <FeatureGrid items={GUIDES_EXTRA.apps} columns={3} className="mt-[42px]" />
        <div className="mt-[44px] text-center">
          <h3 className={cx(TITLE, 'mb-[10px] text-[24px]')}>{GUIDES_EXTRA.helpTitle}</h3>
          <p className="mb-[20px] text-lp-muted">{GUIDES_EXTRA.helpText}</p>
          <a href={SUPPORT_EMAIL_HREF} className={buttonClass('solid', 'md')}>
            {GUIDES_EXTRA.helpCta}
          </a>
        </div>
      </div>
    </section>
  )
}
