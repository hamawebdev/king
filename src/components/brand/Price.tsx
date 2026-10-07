import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Stars, PaymentBadge } from './Labels'
import { guaranteeRowClass, iconClass, infoRowClass, trustItemClass, trustRowClass } from './recipes'
import type { IconName, IconText, StatItem } from './types'

const PRICE_SIZE = {
  xl: { num: 'text-price-xl', unit: 'text-lg', old: 'text-[clamp(1.125rem,0.986rem+0.571vw,1.5rem)]' },
  lg: { num: 'text-price-lg', unit: 'text-base', old: 'text-lg' },
  md: { num: 'text-price-md', unit: 'text-small', old: 'text-base' },
  sm: { num: 'text-price-sm', unit: 'text-micro', old: 'text-micro' },
} as const

type PriceProps = {
  /** Struck original price, only if the content has one ("108€/an"). Gets a hidden "Prix initial :" label. */
  old?: string
  /** The price exactly as written ("59€"). */
  value: string
  /** Unit beside the price ("/an", "TTC", "/6 mois"). */
  unit?: string
  /** Per-month line ("soit 4,17€/mois"), brass accent. */
  perMonth?: string
  size?: keyof typeof PRICE_SIZE
  /** Old price left of the price on one line instead of above it. */
  inline?: boolean
  className?: string
}

/** The one price block: old price above, statement-style serif figure with its unit, then the per-month line. */
export function Price({ old, value, unit, perMonth, size = 'lg', inline, className }: PriceProps) {
  const s = PRICE_SIZE[size]
  const oldEl = old ? <s className={cn('price-old block w-fit', s.old, 'leading-tight')}>{old}</s> : null
  return (
    <div className={cn('font-sans', className)}>
      {!inline && oldEl}
      <p className={cn('flex flex-wrap items-baseline gap-x-1.5', inline && 'gap-x-2')}>
        {inline && oldEl}
        <span className={cn('price-num', s.num)}>{value}</span>
        {unit && <span className={cn('font-sans font-medium text-z-muted', s.unit)}>{unit}</span>}
      </p>
      {perMonth && <p className="mt-2 font-sans text-meta font-semibold text-z-accent">{perMonth}</p>}
    </div>
  )
}

type PaymentRowProps = {
  /** The section's own label ("Paiement sécurisé :", "Paiement :"). */
  label?: string
  /** Only the methods the section lists. */
  methods: string[]
  align?: 'start' | 'center'
  className?: string
}

/** Lock + label + monochrome payment badges. Zone-aware (on-vault badges on vault). */
export function PaymentRow({ label, methods, align = 'start', className }: PaymentRowProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', align === 'center' && 'justify-center', className)}>
      <i className="ti ti-lock shrink-0 text-[15px] text-z-icon" aria-hidden="true" />
      {label && <span className="font-sans text-micro font-medium text-z-muted">{label}</span>}
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {methods.map((m) => (
          <li key={m}>
            <PaymentBadge>{m}</PaymentBadge>
          </li>
        ))}
      </ul>
    </div>
  )
}

type RowProps = { items: IconText[]; align?: 'start' | 'center'; className?: string }

/** Trust row: icon + meta label items (Paiement Protégé, Envoi Quasi Immédiat …). */
export function TrustRow({ items, align = 'start', className }: RowProps) {
  return (
    <ul className={cn('m-0 list-none p-0', trustRowClass, align === 'center' && 'justify-center', className)}>
      {items.map((it) => (
        <li key={it.label} className={trustItemClass}>
          <i className={iconClass(it.icon, 'text-[17px] text-z-icon')} aria-hidden="true" />
          {it.label}
        </li>
      ))}
    </ul>
  )
}

/** Guarantee row under a buy CTA (centred, micro, zone icon colour). */
export function GuaranteeRow({ items, className }: { items: IconText[]; className?: string }) {
  return (
    <ul className={cn('m-0 list-none p-0', guaranteeRowClass, className)}>
      {items.map((it) => (
        <li key={it.label} className="inline-flex items-center gap-1.5">
          <i className={iconClass(it.icon, 'text-[16px] text-z-icon')} aria-hidden="true" />
          {it.label}
        </li>
      ))}
    </ul>
  )
}

/** Info row ("Tarif spécial jusqu'à fin octobre") with a clock: raised strip, accent text. */
export function InfoRow({ children, icon = 'ti-clock', className }: { children: ReactNode; icon?: IconName; className?: string }) {
  return (
    <p className={cn(infoRowClass, className)}>
      <i className={iconClass(icon, 'text-[18px]')} aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

type StatStripProps = {
  items: StatItem[]
  size?: 'lg' | 'md'
  className?: string
}

/**
 * Stat strip without cards: 2 columns on phone (odd last spans both), 3 + 2 on tablet, one row from lg,
 * hairline rules between cells. Values render final (no counters).
 */
export function StatStrip({ items, size = 'lg', className }: StatStripProps) {
  return (
    <ul
      className={cn(
        'm-0 grid list-none grid-cols-2 border-y border-z-line p-0 md:grid-cols-3 lg:flex lg:justify-between',
        className,
      )}
    >
      {items.map((it, i) => (
        <li
          key={`${it.label}-${i}`}
          className={cn(
            'flex flex-col gap-2.5 border-z-line px-5 py-5 md:px-6 lg:flex-1',
            // phone: 2 columns, rules between cells, odd last spans both
            'max-md:even:border-l max-md:[&:nth-child(n+3)]:border-t max-md:last:odd:col-span-2',
            // tablet: 3 + 2
            'md:max-lg:[&:not(:nth-child(3n+1))]:border-l md:max-lg:[&:nth-child(n+4)]:border-t',
            // desktop: one row, vertical rules
            'lg:border-l lg:first:border-l-0',
          )}
        >
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            {it.value && <span className={cn('price-num text-z-fg', size === 'lg' ? 'text-stat-lg' : 'text-stat-md')}>{it.value}</span>}
            {it.star && <Stars />}
          </span>
          <span className="font-sans text-meta font-semibold text-z-muted">{it.label}</span>
        </li>
      ))}
    </ul>
  )
}
