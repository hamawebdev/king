import { FeatureCard, FeatureGrid, Kw, Reveal, Section, SectionHead } from '@/components/brand'
import type { Card } from '../data'

const INCLUDED = {
  eyebrow: 'Confort d’usage',
  title: ['Des outils pratiques pour votre', 'quotidien'] as [string, string],
  cards: [
    { icon: 'ti-calendar-event', title: 'Guide des programmes', text: 'Grille sur sept jours avec résumés, horaires et rappels avant le début.' },
    { icon: 'ti-users', title: 'Profils personnels', text: 'Jusqu’à cinq profils, chacun avec ses favoris et ses propres suggestions.' },
    { icon: 'ti-lock', title: 'Contrôle parental', text: 'Un code verrouille les contenus sensibles en un geste depuis les réglages.' },
    { icon: 'ti-language', title: 'Audio multilingue', text: 'Version originale ou doublée, avec sous-titres activables à tout moment.' },
    { icon: 'ti-cast', title: 'Envoi vers la télé', text: 'Lancez un programme sur le mobile puis basculez-le sur le grand écran.' },
    { icon: 'ti-player-play', title: 'Reprise de lecture', text: 'Arrêtez un film sur un appareil et terminez-le plus tard sur un autre.' },
  ] as Card[],
}

// What is included: sand band, left-aligned head, six feature cards 1 / 2 / 3 (DIRECTION §9.2 #4).
export function Included() {
  return (
    <Section zone="sand" dataSection="product-included">
      <Reveal>
        <SectionHead
          eyebrow={INCLUDED.eyebrow}
          title={
            <>
              {INCLUDED.title[0]} <Kw>{INCLUDED.title[1]}</Kw>
            </>
          }
        />
      </Reveal>
      <Reveal index={1} className="mt-head">
        <FeatureGrid cols={3}>
          {INCLUDED.cards.map((c) => (
            <FeatureCard key={c.title} root="li" icon={c.icon} title={c.title} text={c.text} />
          ))}
        </FeatureGrid>
      </Reveal>
    </Section>
  )
}
