import { Section, SectionHeading } from '@/components/kit'
import { useCopy } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { PILLARS_COPY, type Pillar } from './Pillars.copy'

/** French typography: no-break space before ! ? : ; » and after «, so punctuation never orphans. Text is unchanged. */
const nbsp = (t: string) => t.replace(/ ([!?:;»])/g, ' $1').replace(/« /g, '« ')

function PillarTile({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <li
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-line p-6 shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7',
        pillar.wide ? 'bg-mist md:col-span-2 lg:col-span-3' : 'bg-canvas lg:col-span-2',
      )}
    >
      {pillar.wide ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-2 text-[9rem] leading-none opacity-[0.06] grayscale select-none sm:text-[11rem]"
        >
          {pillar.emoji}
        </span>
      ) : null}
      <div className="relative flex items-center justify-between gap-4">
        <span
          aria-hidden="true"
          className={cn(
            'grid size-12 shrink-0 place-items-center rounded-xl text-2xl leading-none',
            pillar.wide ? 'bg-canvas shadow-card' : 'bg-brand-soft',
          )}
        >
          {pillar.emoji}
        </span>
        <span aria-hidden="true" className="text-xs font-semibold tracking-[0.12em] text-slate-400 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3
        className={cn(
          'relative mt-6 font-sans font-semibold tracking-tight text-balance text-heading',
          pillar.wide ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl',
        )}
      >
        {nbsp(pillar.title)}
      </h3>
      <p className={cn('relative mt-3 text-[0.9375rem] leading-relaxed text-pretty text-body', pillar.wide && 'max-w-xl sm:text-base')}>
        {typeof pillar.text === 'string' ? nbsp(pillar.text) : pillar.text}
      </p>
    </li>
  )
}

/** Section 12 — « Ce Qui Distingue NovaStream ! »: bento of the 6 pillars. */
export function HomePillars() {
  const t = useCopy(PILLARS_COPY)
  return (
    <Section id="piliers" aria-labelledby="home-pillars-title" className="scroll-mt-20">
      <SectionHeading
        id="home-pillars-title"
        eyebrow={t.eyebrow}
        title={nbsp(t.title)}
        subtitle={t.subtitle}
      />
      <ul role="list" className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-7">
        {t.pillars.map((pillar, i) => (
          <PillarTile key={pillar.title} pillar={pillar} index={i} />
        ))}
      </ul>
    </Section>
  )
}
