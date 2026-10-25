import { BookOpen, MonitorSmartphone, Puzzle, RefreshCw, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading, WhatsAppIcon } from '@/components/kit'
import { WHATSAPP_DISPLAY, waLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { keepKing, useActivationCopy, type PillarIcon } from './Activation.data'
import { PricingTable } from './PricingTable'

/* ------------------------------------------------------------------------------------------------------------ */
/* A. The 4-step activation protocol.                                                                           */
/* ------------------------------------------------------------------------------------------------------------ */

/**
 * S10-A « Les 4 Étapes », without a section shell or heading. Phone: a vertical timeline (step tile on a rail,
 * text beside it); lg: four columns joined by a horizontal rule through the step tiles.
 */
export function ActivationSteps({ titleAs: Title = 'h3', className }: { titleAs?: 'h2' | 'h3' | 'h4'; className?: string }) {
  const t = useActivationCopy()
  const last = t.steps.length - 1
  return (
    <ol className={cn('m-0 grid list-none gap-9 p-0 lg:grid-cols-4 lg:gap-7', className)}>
      {t.steps.map((step, i) => (
        <li key={step.num} className="relative flex gap-5 lg:flex-col lg:gap-6">
          {i < last ? (
            <span
              aria-hidden="true"
              className="absolute top-16 -bottom-9 left-7 w-px bg-linear-to-b from-brand/35 to-line lg:top-7 lg:right-[-1.75rem] lg:bottom-auto lg:left-16 lg:h-px lg:w-auto lg:bg-linear-to-r"
            />
          ) : null}
          <span
            aria-hidden="true"
            className="relative grid size-14 shrink-0 place-content-center rounded-2xl border border-line bg-canvas text-center shadow-card"
          >
            <span className="text-[9px] leading-none font-semibold tracking-[0.12em] text-slate-500 uppercase">{t.stepLabel}</span>
            <span className="mt-1 text-lg leading-none font-bold text-brand tabular-nums">{step.num}</span>
          </span>

          <div className="min-w-0 pt-1 lg:pt-0">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
              <span aria-hidden="true">{step.chip.emoji}</span>
              {step.chip.label}
            </p>
            <Title className="mt-3 text-lg leading-snug font-semibold text-heading">
              <span className="sr-only">{t.stepLabel} {step.num} — </span>
              {step.title}
            </Title>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------------------------------------------------ */
/* B. Reassurance box: « Écosystème Ouvert & Engagements Inclus » (6 pillars).                                  */
/* ------------------------------------------------------------------------------------------------------------ */

const PILLAR_ICONS: Record<Exclude<PillarIcon, 'whatsapp'>, LucideIcon> = {
  players: Puzzle,
  screens: MonitorSmartphone,
  tutorials: BookOpen,
  updates: RefreshCw,
  guarantee: ShieldCheck,
}

function PillarText({ text }: { text: string }) {
  const [before, after] = text.split('{phone}')
  if (after === undefined) return <>{text}</>
  return (
    <>
      {before}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold whitespace-nowrap text-brand underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {WHATSAPP_DISPLAY}
      </a>
      {after}
    </>
  )
}

/** S10-B reassurance box, without a section shell. */
export function ReassuranceBox({ headingAs: Heading = 'h3', className }: { headingAs?: 'h2' | 'h3'; className?: string }) {
  const PillarTitle = Heading === 'h2' ? 'h3' : 'h4'
  const t = useActivationCopy()
  return (
    <div className={cn('rounded-3xl border border-line bg-mist/70 p-6 sm:p-8 lg:p-12', className)}>
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-cta">
          <ShieldCheck className="size-5" />
        </span>
        <Heading className="text-xl leading-tight font-bold tracking-tight text-balance text-heading sm:text-2xl">
          {t.reassuranceTitle}
        </Heading>
      </div>

      <ul className="m-0 mt-8 grid list-none gap-x-10 gap-y-8 p-0 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-y-10">
        {t.pillars.map((pillar) => {
          const Icon = pillar.icon === 'whatsapp' ? null : PILLAR_ICONS[pillar.icon]
          return (
            <li key={pillar.title} className="flex gap-4 sm:flex-col sm:gap-0">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-canvas text-brand shadow-card"
              >
                {Icon ? <Icon className="size-5" strokeWidth={1.75} /> : <WhatsAppIcon className="size-5 text-whatsapp" />}
              </span>
              <div className="min-w-0 sm:mt-4">
                <PillarTitle className="text-base leading-snug font-semibold text-heading">{pillar.title}</PillarTitle>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">
                  <PillarText text={pillar.text} />
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------------------------------------------------ */
/* Section 10: steps + reassurance (white band), then the official pricing (mist band, #signature on the packs). */
/* ------------------------------------------------------------------------------------------------------------ */

/** Section 10 — Protocole d'activation en 4 étapes, boîte de réassurance, grille tarifaire des 4 formules. */
export function HomeActivation() {
  const t = useActivationCopy()
  return (
    <>
      <Section id="activation" aria-labelledby="activation-title">
        <SectionHeading
          id="activation-title"
          eyebrow={t.head.badge}
          title={keepKing(t.head.title)}
          subtitle={t.head.subtitle}
        />
        <ActivationSteps className="mt-12 md:mt-16" />
        <ReassuranceBox className="mt-16 md:mt-24" />
      </Section>

      <Section id="tarifs" tone="mist-fade" aria-labelledby="tarifs-title">
        <PricingTable id="signature" headingId="tarifs-title" />
      </Section>
    </>
  )
}
