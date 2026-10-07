import { IconTile, Kw, Section, SectionHead, useReveal } from '@/components/brand'
import { BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { Card } from '../data'

const WHY = {
  eyebrow: BRAND_UPPER,
  titleStart: 'Ce Qui ',
  titleBlue: 'Nous Distingue',
  titleEnd: ' !',
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

/**
 * One cell of the hairline ledger. The cell keeps its paper fill at all times; only its content reveals,
 * so the 1px hairline gutters never show through while the content fades in.
 */
function WhyItem({ card, index }: { card: Card; index: number }) {
  const { ref, className: revealClass, style } = useReveal<HTMLDivElement>(index)
  return (
    <li className="bg-z-card">
      <div
        ref={ref}
        style={style}
        className={cn(
          revealClass,
          'grid h-full grid-cols-[40px_1fr] content-start gap-x-4 px-5 py-6 md:grid-cols-1 md:p-card lg:px-9 lg:pt-10 lg:pb-11',
        )}
      >
        <IconTile icon={card.icon} className="row-span-2 md:row-span-1 md:mb-6" />
        <h3 className="font-display text-title text-z-fg">{card.title}</h3>
        <p className="col-start-2 mt-2 max-w-[38ch] font-sans text-small text-z-soft md:col-start-1 md:mt-2.5">{card.text}</p>
      </div>
    </li>
  )
}

/** Why us: editorial split head, then the six reasons set as one hairline ledger (paper cells on the ivory band). */
export function HomeWhy() {
  return (
    <Section zone="ivory" dataSection="home-why">
      <div className="grid gap-x-grid gap-y-4 lg:grid-cols-12 lg:items-end">
        <SectionHead
          className="lg:col-span-7"
          eyebrow={WHY.eyebrow}
          title={
            <>
              {WHY.titleStart}
              <Kw>{WHY.titleBlue}</Kw>
              {WHY.titleEnd}
            </>
          }
        />
        <p className="max-w-[44ch] font-sans text-lead text-z-soft lg:col-span-5 lg:col-start-8 lg:border-l lg:border-z-line lg:pb-1.5 lg:pl-8">
          {WHY.text}
        </p>
      </div>

      <ul className="m-0 mt-head grid list-none gap-px overflow-hidden rounded-panel border border-z-line bg-hairline p-0 md:grid-cols-2 lg:grid-cols-3">
        {WHY.cards.map((card, i) => (
          <WhyItem key={card.title} card={card} index={i % 3} />
        ))}
      </ul>
    </Section>
  )
}
