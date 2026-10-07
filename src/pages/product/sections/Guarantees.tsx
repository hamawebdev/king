import { Reveal, Section } from '@/components/brand'
import type { Card } from '../data'

const BAND: Card[] = [
  { icon: 'ti-calendar-off', title: 'Sans engagement', text: 'Aucun prélèvement automatique : vous renouvelez seulement si vous le souhaitez.' },
  { icon: 'ti-users', title: 'Profils séparés', text: 'Chaque membre du foyer garde ses favoris et son historique.' },
  { icon: 'ti-refresh', title: 'Mises à jour', text: 'De nouveaux films et séries rejoignent le catalogue chaque semaine.' },
]

// Guarantees band (DIRECTION §9 · product-guarantees): ivory band, three line-icon guarantees in a ruled row.
export function Guarantees() {
  return (
    <Section zone="ivory" dataSection="product-guarantees" rhythm="sm">
      <ul className="grid border-t border-b border-t-ink border-b-z-line md:grid-cols-3">
        {BAND.map((g, i) => (
          <Reveal
            as="li"
            key={g.title}
            index={i}
            className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-4 border-t border-z-line py-6 first:border-t-0 md:grid-cols-1 md:grid-rows-[auto_auto_1fr] md:border-t-0 md:border-l md:px-6 md:py-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0 lg:px-10 lg:py-10"
          >
            <i
              className={`ti ${g.icon} text-[32px] leading-none text-evergreen-700 md:mb-5`}
              aria-hidden="true"
            />
            <div className="md:contents">
              <h3 className="font-display text-title text-z-fg">{g.title}</h3>
              <p className="mt-2 max-w-[34ch] text-small text-z-soft">{g.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
