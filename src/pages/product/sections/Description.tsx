import { Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { BRAND } from '@/lib/site'

const DESCRIPTION = {
  eyebrow: 'Description',
  title: ['Pensée pour toute la', 'maison'] as [string, string],
  paragraphs: [
    `Avec ${BRAND} Premium, chacun regarde ce qu'il aime sur l'écran de son choix : le match en direct au salon, les dessins animés sur la tablette et un bon documentaire le soir venu sur l'ordinateur portable.`,
    'Le catalogue s’enrichit chaque semaine et l’abonnement se gère en quelques clics depuis votre espace personnel, sans aucun frais caché ni démarche compliquée.',
  ],
}

/** The three screens the copy names (salon, tablette, ordinateur portable): decorative only. */
const SCREENS = ['ti-device-tv', 'ti-device-tablet', 'ti-device-laptop'] as const

export function Description() {
  const [lead, ...rest] = DESCRIPTION.paragraphs
  return (
    <Section zone="paper" dataSection="product-description" container="text">
      <SectionHead
        eyebrow={DESCRIPTION.eyebrow}
        title={
          <>
            {DESCRIPTION.title[0]} <Kw>{DESCRIPTION.title[1]}</Kw>
          </>
        }
      />

      {/* Ink ledger rule that ends on the three screens the copy names. */}
      <div aria-hidden="true" className="pointer-events-none mt-8 flex items-center gap-3 md:mt-10">
        <span className="h-px flex-1 bg-ink" />
        <ul className="flex items-center divide-x divide-z-line">
          {SCREENS.map((icon) => (
            <li key={icon} className="grid h-6 place-items-center px-3.5 text-[20px] text-evergreen-700 last:pr-0 md:px-4">
              <i className={`ti ${icon}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 md:pt-7">
        <Reveal>
          <p className="max-w-[56ch] font-sans text-lead text-z-soft">{lead}</p>
        </Reveal>
        {rest.map((t, i) => (
          <Reveal key={t} index={i + 1} className="mt-6 border-t border-z-line pt-6 md:mt-7 md:pt-7">
            <p className="max-w-[66ch] font-sans text-copy text-z-body">{t}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
