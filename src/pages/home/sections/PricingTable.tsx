import { Check } from 'lucide-react'
import { Eyebrow, Pill, SectionHeading, WaButton } from '@/components/kit'
import { usePacks, type Pack } from '@/lib/packs'
import { cn } from '@/lib/utils'
import { keepKing, useActivationCopy } from './Activation.data'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
const NEXT_LEVEL: Record<HeadingLevel, HeadingLevel> = { h1: 'h2', h2: 'h3', h3: 'h4', h4: 'h4' }

/* ------------------------------------------------------------------------------------------------------------ */
/* « Inclus dans chaque formule »: badge, H3, 4 metrics, supported-devices pills, 3 connection protocols.         */
/* ------------------------------------------------------------------------------------------------------------ */

type IncludedMetricsProps = {
  /** Level of « Tout Ce Qu'inclut… » (default h3); protocol titles sit one level below. */
  headingAs?: 'h2' | 'h3'
  /** Show the supported-devices pills (default true). */
  devices?: boolean
  /** Show the 3 connection protocols (default true). */
  protocols?: boolean
  className?: string
}

/** S10-C « Inclus dans chaque formule NovaStream » block, without a section shell. */
export function IncludedMetrics({ headingAs = 'h3', devices = true, protocols = true, className }: IncludedMetricsProps) {
  const Heading = headingAs
  const ProtocolTitle = NEXT_LEVEL[headingAs]
  const t = useActivationCopy()
  return (
    <div className={className}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <Eyebrow tone="neutral">{t.includedHead.badge}</Eyebrow>
        <Heading className="text-2xl leading-tight font-bold tracking-tight text-balance text-heading sm:text-[1.75rem]">
          {keepKing(t.includedHead.title)}
        </Heading>
      </div>

      {/* One card, four cells split by 1px rules (gap-px over the line colour). */}
      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:grid-cols-4">
        {t.includedMetrics.map((m) => (
          <div key={m.value} className="flex flex-col-reverse justify-end gap-2 bg-canvas px-4 py-6 sm:px-6 sm:py-7">
            <dt className="text-[0.8125rem] leading-snug text-body sm:text-sm">{m.label}</dt>
            <dd className="text-[1.625rem] leading-none font-bold tracking-tight text-heading tabular-nums sm:text-4xl">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      {devices ? (
        <ul className="m-0 mt-6 flex list-none flex-wrap justify-center gap-2 p-0">
          {t.supportedDevices.map((d) => (
            <li key={d.label} className="flex">
              <Pill icon={d.emoji} className="py-1 text-[0.8125rem] sm:text-sm">
                {d.label}
              </Pill>
            </li>
          ))}
        </ul>
      ) : null}

      {protocols ? (
        <ol className="m-0 mt-10 grid list-none gap-4 p-0 lg:grid-cols-3 lg:gap-5">
          {t.protocols.map((p) => (
            <li key={p.num} className="flex flex-col rounded-2xl border border-line bg-canvas p-5 shadow-card sm:p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-sm font-bold text-brand"
                >
                  {p.num}
                </span>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-body">{p.tag}</span>
              </div>
              <ProtocolTitle className="mt-4 text-base leading-snug font-semibold text-heading">
                <span className="sr-only">{p.num}. </span>
                {p.title}
              </ProtocolTitle>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{p.text}</p>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------------------------------------------------ */
/* The four packs (the spec's table: Formule / Durée-Tarif / Inclusions Clefs / Lien Direct WhatsApp → cards).   */
/* ------------------------------------------------------------------------------------------------------------ */

/**
 * « Accès +5700 chaînes, VOD +16k, Replay, compatible toutes apps. » → one check line per comma-separated item.
 * Splits on a comma followed by a space only, so decimal commas (« 4,58 ») never split; every language writes
 * « +5700 » without a thousands separator for the same reason.
 */
function inclusionItems(inclusions: string) {
  return inclusions.replace(/\.\s*$/, '').split(/,\s+/)
}

function PackCard({ pack, titleAs: Title }: { pack: Pack; titleAs: HeadingLevel }) {
  const t = useActivationCopy()
  const featured = pack.highlighted
  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-canvas p-6 sm:p-7 xl:p-6',
        featured
          ? 'border-brand shadow-card-hover ring-1 ring-brand xl:-translate-y-4'
          : 'border-line shadow-card transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-card-hover',
      )}
    >
      {featured ? (
        <p className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-cta sm:left-7">
          <span aria-hidden="true">⭐</span>
          {t.packRecommended}
        </p>
      ) : null}

      <Title className="text-lg leading-snug font-bold text-heading">
        {pack.name}
        {featured ? <span aria-hidden="true"> ⭐</span> : null}
      </Title>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-1.5">
        <span className="text-[2.5rem] leading-none font-bold tracking-tight text-heading tabular-nums">{pack.price}</span>
        <span className="text-base font-medium text-body">/ {pack.duration}</span>
      </p>
      <p className="mt-3">
        <span
          className={cn(
            'inline-flex rounded-full px-2.5 py-1 text-[0.8125rem] font-semibold tabular-nums',
            featured ? 'bg-brand text-white' : 'bg-brand-soft text-brand',
          )}
        >
          {pack.perMonth}
        </span>
      </p>

      <div className="mt-6 border-t border-line pt-5">
        <p className="text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">{t.packTableLabels.inclusions}</p>
        <ul className="m-0 mt-3 flex list-none flex-col gap-2.5 p-0">
          {inclusionItems(pack.inclusions).map((item) => (
            <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
              <span className={cn('block first-letter:uppercase', /DNS/.test(item) ? 'font-semibold text-heading' : 'text-body')}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Message above the button so every button sits on the card's bottom edge (aligned across the row). */}
      <div className="mt-auto pt-7">
        {/* The prefilled message, as the spec's « Lien Direct WhatsApp » column shows it (always French: advisors work in French). */}
        <p lang="fr" className="mb-3 rounded-xl bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-500">« {pack.waMessage} »</p>
        <WaButton
          message={pack.waMessage}
          variant={featured ? 'whatsapp' : 'outline'}
          icon
          fullWidth
          aria-label={`${t.packCta} — ${pack.name} (${pack.price} / ${pack.duration})`}
          className={cn('xl:px-3 xl:whitespace-nowrap', featured ? 'border border-transparent' : '[&>svg]:text-whatsapp')}
        >
          {t.packCta}
        </WaButton>
      </div>
    </article>
  )
}

type PricingTableProps = {
  /** Anchor on the packs block (the homepage passes 'signature' for the footer's « Boutique (#signature) »). */
  id?: string
  /** Render the « Tarifs officiels » badge + title + subtitle (default true). */
  heading?: boolean
  /** Level of that title (default h2; 'h1' on a page whose main heading it is). Sub-blocks sit one level below. */
  headingAs?: 'h1' | 'h2'
  /** id for the title element (aria-labelledby on the wrapping section). */
  headingId?: string
  /** Render the « Inclus dans chaque formule » block before the packs (default true). */
  included?: boolean
  className?: string
}

/**
 * S10-C « Grille Tarifaire Officielle des 4 Formules », without a section shell: heading, the « Inclus dans chaque
 * formule » block, then the four packs from PACKS (Signature ⭐ recommended and lifted) and the payment line
 * (PayPal / Virement SEPA only — no card payment). Phone: cards stack in spec order; md: 2 × 2; xl: 4 columns.
 */
export function PricingTable({ id, heading = true, headingAs = 'h2', headingId, included = true, className }: PricingTableProps) {
  const sub = NEXT_LEVEL[headingAs] as 'h2' | 'h3'
  // Pack names sit under the main title (or under the page's heading when the title is hidden).
  const packTitle: HeadingLevel = heading ? sub : 'h3'
  const t = useActivationCopy()
  const packs = usePacks()
  return (
    <div className={className}>
      {heading ? (
        <SectionHeading
          as={headingAs}
          id={headingId}
          eyebrow={t.pricingHead.badge}
          title={keepKing(t.pricingHead.title)}
          subtitle={t.pricingHead.subtitle}
        />
      ) : null}

      {included ? <IncludedMetrics headingAs={sub} className={heading ? 'mt-14 md:mt-20' : undefined} /> : null}

      <div id={id} className={cn('scroll-mt-24', heading || included ? 'mt-14 md:mt-20' : undefined)}>
        <ul className="m-0 grid list-none gap-6 p-0 pt-3.5 md:grid-cols-2 xl:grid-cols-4 xl:gap-5 xl:pt-8">
          {packs.map((pack) => (
            <li key={pack.id} className="flex flex-col">
              <PackCard pack={pack} titleAs={packTitle} />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-pretty text-body">
          <span aria-hidden="true" className="mr-1.5">🔒</span>
          {t.paymentNote}
        </p>
      </div>
    </div>
  )
}
