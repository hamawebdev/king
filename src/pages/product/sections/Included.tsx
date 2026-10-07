import type { Card } from '../data'
import { HEADING, PANEL, SECTION, WRAP } from '../styles'
import { SectionHead } from '../ui'

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

// What is included
export function Included() {
  return (
    <section data-section="product-included" className={SECTION}>
      <div className={WRAP}>
        <SectionHead eyebrow={INCLUDED.eyebrow} title={INCLUDED.title} />
        <div className="grid grid-cols-3 gap-4 [@media(max-width:900px)]:grid-cols-1">
          {INCLUDED.cards.map((c) => (
            <div key={c.title} className={`${PANEL} rounded-[16px] p-[22px]`}>
              <div className="mb-3 grid size-[46px] place-items-center rounded-[12px] bg-lp-blue-soft text-[21px] text-lp-blue">
                <i className={`ti ${c.icon}`} />
              </div>
              <h4 className={`${HEADING} mb-1.5 text-[16px] font-extrabold text-heading`}>{c.title}</h4>
              <p className="text-[14px] text-lp-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
