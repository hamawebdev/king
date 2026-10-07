import { FeatureCard, FeatureGrid, Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { BRAND_UPPER } from '@/lib/site'
import type { Card } from '../data'

const FEATURES_HEAD = {
  eyebrow: 'Points forts',
  titleStart: 'Tout Savoir sur ',
  titleBlue: BRAND_UPPER,
  text: 'Une plateforme pensée pour le confort de chaque spectateur, du salon au mobile.',
}

const FEATURES: Card[] = [
  { icon: 'ti-device-tv', title: '5200+ Chaînes TV', text: 'Des bouquets en direct venus des quatre coins du globe.' },
  { icon: 'ti-movie', title: 'Vidéothèque XXL', text: 'Des milliers de titres à la demande, avec des ajouts toutes les semaines.' },
  { icon: 'ti-device-desktop', title: 'Image 4K & FHD', text: 'Une définition qui s’adapte, de la SD jusqu’à l’Ultra HD 4K.' },
  { icon: 'ti-player-track-next', title: 'Lecture Flexible', text: 'Figez le direct ou relancez une émission déjà passée.' },
  { icon: 'ti-world', title: 'Réseau Mondial', text: 'Des flux fluides servis par des relais présents sur cinq continents.' },
  { icon: 'ti-device-mobile', title: 'Tous Vos Écrans', text: 'Fonctionne sur téléviseur, ordinateur, tablette, mobile et box TV.' },
  { icon: 'ti-lifebuoy', title: 'Aide 7j/7', text: 'Des conseillers à l’écoute chaque jour, sans attente.' },
  { icon: 'ti-shield-lock', title: 'Accès Toujours Protégé', text: 'Codes perdus ? Un nouvel envoi se déclenche en un clic, sans attendre.' },
]

/**
 * Cells of the ruled sheet: no box, the hairlines come from the 1px grid gaps over a hairline ground.
 * Outer columns sit flush with the head (no outer padding), inner edges keep the card padding.
 */
const CELL = [
  'rounded-none border-0 bg-paper px-0 py-6',
  'md:px-card md:py-card md:odd:pl-0 md:even:pr-0',
  'xl:odd:pl-card xl:even:pr-card xl:[&:nth-child(4n+1)]:pl-0 xl:[&:nth-child(4n)]:pr-0',
].join(' ')

/** Features: a left-aligned split head, then the eight points as one ruled sheet under an ink ledger rule. */
export function HomeFeatures() {
  return (
    <Section zone="paper" dataSection="home-features">
      <Reveal className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-grid">
        <SectionHead
          className="lg:col-span-7"
          eyebrow={FEATURES_HEAD.eyebrow}
          title={
            <>
              {FEATURES_HEAD.titleStart}
              <Kw>{FEATURES_HEAD.titleBlue}</Kw>
            </>
          }
        />
        <p className="max-w-[56ch] font-sans text-lead text-z-soft lg:col-span-5 lg:col-start-8 lg:max-w-[36ch] lg:justify-self-end">
          {FEATURES_HEAD.text}
        </p>
      </Reveal>

      <Reveal className="mt-head">
        <FeatureGrid className="gap-px border-t border-b border-t-ink border-b-hairline bg-hairline md:gap-px">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} root="li" icon={f.icon} title={f.title} text={f.text} className={CELL} />
          ))}
        </FeatureGrid>
      </Reveal>
    </Section>
  )
}
