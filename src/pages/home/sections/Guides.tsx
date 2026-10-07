import { BRAND, BRAND_UPPER, SUPPORT_EMAIL_HREF } from '@/lib/site'
import { ButtonA, IconTile, Kw, Reveal, Section, SectionHead, Tag } from '@/components/brand'
import type { Card, IconText } from '../data'
import { GuideRow } from './Guides.parts'

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
    { icon: 'ti-box', title: `${BRAND_UPPER} PLAY`, badge: 'Conseillé', text: `Lecteur officiel ${BRAND} - Sans frais` },
    { icon: 'ti-bolt', title: 'Lecteur Xtream', badge: 'Apprécié', text: `Lit vos codes ${BRAND} sans réglage` },
    { icon: 'ti-brand-apple', title: 'Lecteur M3U', badge: 'iOS/tvOS', text: 'Pensé pour iPhone, iPad et box Apple TV' },
  ] as Card[],
  helpTitle: 'Un Souci Pendant la Configuration ?',
  helpText: 'Nos conseillers vous répondent chaque jour, week-end compris.',
  // The arrow is drawn by the button's icon (the brand face has no → glyph).
  helpCta: 'Contacter le Support',
}

/** French typography: a non-breaking space before ? ! : ; so the sign never wraps alone (text unchanged). */
const nb = (text: string) => text.replace(/ ([?!:;])/g, '\u00a0$1')

/** The three setup figures as statement rows: label left, figure right (a 3-cell strip on tablet). */
function SetupFigures() {
  return (
    <dl className="mt-8 grid border-b border-z-line md:mt-10 md:grid-cols-3 lg:mt-10 lg:grid-cols-1">
      {GUIDES_HEAD.stats.map((stat) => (
        <div
          key={stat.label}
          className={[
            'flex items-baseline justify-between gap-4 border-t border-z-line py-4',
            'md:flex-col-reverse md:items-start md:justify-end md:gap-2 md:border-l md:px-6 md:py-5 md:first:border-l-0 md:first:pl-0',
            'lg:flex-row lg:items-baseline lg:justify-between lg:gap-4 lg:border-l-0 lg:px-0 lg:py-4',
          ].join(' ')}
        >
          <dt className="font-sans text-meta font-semibold text-z-muted">{stat.label}</dt>
          <dd className="m-0 price-num text-stat-md">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Installation guides: sticky head with the setup figures, six guides, support line, inclusions and players. The #contact anchor lands here. */
export function HomeGuides() {
  return (
    <Section zone="paper" dataSection="home-guides" id="contact">
      <div className="grid gap-x-grid lg:grid-cols-12">
        <SectionHead
          sticky
          className="lg:col-span-4 lg:pr-6"
          eyebrow={GUIDES_HEAD.eyebrow}
          title={
            <>
              {GUIDES_HEAD.titleStart}
              <Kw>{GUIDES_HEAD.titleBlue}</Kw>
              {GUIDES_HEAD.titleEnd}
            </>
          }
          lead={GUIDES_HEAD.text}
        >
          <SetupFigures />
        </SectionHead>

        <div className="mt-head lg:col-span-8 lg:mt-0">
          <div className="grid gap-3">
            {GUIDES.map((guide, index) => (
              <GuideRow
                key={guide.title}
                icon={guide.icon}
                title={guide.title}
                tags={guide.tags}
                steps={guide.steps.map(nb)}
                tip={
                  <>
                    <strong className="font-semibold">{nb('Conseil :')}</strong> {guide.tip}
                  </>
                }
                initiallyOpen={index === 0}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-x-4 border-t border-z-line pt-8 md:grid-cols-[44px_1fr] md:items-start">
            <IconTile icon="ti-lifebuoy" size={44} className="max-md:hidden" />
            <div className="min-w-0">
              <h3 className="font-display text-title-lg text-z-fg">{nb(GUIDES_EXTRA.helpTitle)}</h3>
              <p className="mt-2 font-sans text-small text-z-soft">{GUIDES_EXTRA.helpText}</p>
            </div>
            <ButtonA
              href={SUPPORT_EMAIL_HREF}
              variant="secondary"
              size="md"
              iconEnd="arrow"
              className="mt-5 max-md:w-full md:col-start-2 md:justify-self-start"
            >
              {GUIDES_EXTRA.helpCta}
            </ButtonA>
          </div>
        </div>
      </div>

      <div className="ledger mt-20 grid gap-x-grid gap-y-10 md:mt-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-4 lg:pr-6">
          <h3 className="font-display text-title text-z-fg">{GUIDES_EXTRA.featsTitle}</h3>
          <ul className="m-0 mt-5 grid list-none grid-cols-2 gap-x-6 p-0 md:grid-cols-3 lg:grid-cols-2">
            {GUIDES_EXTRA.feats.map((feat) => (
              <li
                key={feat.label}
                className="flex items-center gap-2.5 border-b border-z-line py-3 font-sans text-small font-medium text-z-body"
              >
                <i className={`ti ${feat.icon} shrink-0 text-[18px] text-z-icon`} aria-hidden="true" />
                <span>{feat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="m-0 grid list-none gap-y-3 p-0 md:grid-cols-3 md:gap-x-grid md:gap-y-0 lg:col-span-8">
          {GUIDES_EXTRA.apps.map((app, index) => (
            <Reveal
              key={app.title}
              as="li"
              index={index}
              className={[
                'grid grid-cols-[44px_1fr] content-start gap-x-4 rounded-panel border border-z-line bg-z-card p-5',
                'md:row-span-3 md:grid-cols-[1fr_auto] md:grid-rows-subgrid md:gap-x-3 md:p-card',
              ].join(' ')}
            >
              <IconTile icon={app.icon} size={44} className="row-span-3 md:row-span-1" />
              {app.badge && <Tag className="col-start-2 justify-self-start md:self-start">{app.badge}</Tag>}
              <h4 className="col-start-2 mt-2 font-display text-title text-z-fg md:col-span-2 md:col-start-1 md:mt-5">{app.title}</h4>
              <p className="col-start-2 mt-2 font-sans text-small text-z-soft md:col-span-2 md:col-start-1">{app.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
