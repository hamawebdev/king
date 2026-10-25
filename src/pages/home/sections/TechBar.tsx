import { Section } from '@/components/kit'

/** Spec S4 « Technical Micro-Interactions Bar », word for word (emoji kept). */
const ITEMS = [
  { emoji: '⚡', title: 'Zapping Instantané', text: "Changement de chaîne fluide en moins d'une seconde, sans latence." },
  { emoji: '📅', title: 'EPG Dynamique', text: 'Grille complète des programmes en direct avec résumés des diffusions.' },
  { emoji: '⏪', title: 'Replay & Timeshift', text: "Pause du direct et rattrapage de vos émissions favorites jusqu'à 15 jours." },
  { emoji: '📺', title: 'Qualité Adaptative', text: 'Ajustement intelligent de la résolution selon votre débit Internet réel.' },
] as const

/**
 * Section 04 — compact horizontal bar between the apps matrix and the TV grid: four technical pillars.
 * The spec approves no heading for this band, so the h2 is visually hidden (structure only).
 */
export function HomeTechBar() {
  return (
    <Section id="specifications" aria-labelledby="techbar-title" className="scroll-mt-20 py-10 md:py-14">
      <h2 id="techbar-title" className="sr-only">
        Zapping Instantané, EPG Dynamique, Replay &amp; Timeshift, Qualité Adaptative
      </h2>
      <ul className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-canvas shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <li
            key={item.title}
            className={[
              'group relative flex gap-4 p-5 transition-colors duration-200 hover:bg-mist/70 motion-reduce:transition-none sm:p-6 lg:flex-col lg:gap-3',
              i > 0 ? 'border-t border-line' : '',
              i === 1 ? 'sm:border-t-0 sm:border-l' : '',
              i === 2 ? 'lg:border-t-0 lg:border-l' : '',
              i === 3 ? 'sm:border-l lg:border-t-0' : '',
            ].join(' ')}
          >
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-xl ring-1 ring-brand/10 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
            >
              {item.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-semibold tracking-tight text-heading transition-colors duration-200 group-hover:text-brand motion-reduce:transition-none">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{item.text}</p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
