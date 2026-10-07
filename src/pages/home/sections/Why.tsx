import { BRAND_UPPER } from '@/lib/site'
import type { Card } from '../data'
import { BAND_TIGHT, COLUMN, TINT, cx } from '../styles'
import { Accent, FeatureGrid, SectionHead } from '../ui'

const WHY = {
  eyebrow: BRAND_UPPER,
  titleStart: 'Ce Qui ',
  titleBlue: 'Nous Distingue',
  titleEnd: ' !',
  text: 'Des milliers de foyers nous confient leurs soirées télé, découvrez pourquoi ils restent fidèles.',
  cards: [
    { icon: 'ti-crown', title: 'Un service plébiscité', text: 'Nos abonnés saluent la grande simplicité de l’offre et la régularité des flux, soir après soir, depuis le premier jour.' },
    { icon: 'ti-device-mobile', title: 'Compatible partout', text: 'Téléviseur connecté, ordinateur, tablette, smartphone, boîtier Android, clé HDMI, lecteurs M3U et bien d’autres.' },
    { icon: 'ti-sparkles', title: 'Image au top', text: 'Du 480p au 4K en passant par le 720p et le 1080p, le flux suit automatiquement votre débit Internet.' },
    { icon: 'ti-world', title: `Relais ${BRAND_UPPER}`, text: 'Un réseau de relais répartis dans plusieurs pays, choisis selon votre position.' },
    { icon: 'ti-bolt', title: 'Zapping éclair', text: 'Passez d’une chaîne à l’autre en moins d’une seconde, sans écran noir.' },
    { icon: 'ti-lifebuoy', title: 'Aide 7j/7', text: 'Un conseiller vous accompagne à chaque étape, du paiement au réglage.' },
  ] as Card[],
}

/** Why us. */
export function HomeWhy() {
  return (
    <section data-section="home-why" className={cx(BAND_TIGHT, TINT)}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={WHY.eyebrow}
          title={
            <>
              {WHY.titleStart}
              <Accent>{WHY.titleBlue}</Accent>
              {WHY.titleEnd}
            </>
          }
          text={WHY.text}
        />
        <FeatureGrid items={WHY.cards} columns={3} />
      </div>
    </section>
  )
}
