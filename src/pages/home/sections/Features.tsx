import { BRAND_UPPER } from '@/lib/site'
import type { Card } from '../data'
import { BAND, COLUMN } from '../styles'
import { Accent, FeatureGrid, SectionHead } from '../ui'

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

/** Features: intro and eight cards. */
export function HomeFeatures() {
  return (
    <section data-section="home-features" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={FEATURES_HEAD.eyebrow}
          title={
            <>
              {FEATURES_HEAD.titleStart}
              <Accent>{FEATURES_HEAD.titleBlue}</Accent>
            </>
          }
          text={FEATURES_HEAD.text}
        />
        <FeatureGrid items={FEATURES} columns={4} />
      </div>
    </section>
  )
}
