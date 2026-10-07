import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  cartCountClass,
  chipIconClass,
  chipVariants,
  iconClass,
  initials,
  neutralTagClass,
  paymentBadgeClass,
  qualityStampClass,
  ribbonClass,
  savingChipVariants,
  statusDotClass,
  tileClass,
} from './recipes'
import type { IconName, QualityTier } from './types'

/** Bookmark ribbon pinned top-left of its (relative) card: COUP DE CŒUR, PLUS POPULAIRE … */
export function Ribbon({ children, icon, className }: { children: ReactNode; icon?: IconName; className?: string }) {
  return (
    <span className={cn(ribbonClass, className)}>
      {icon && <i className={iconClass(icon, 'text-[13px]')} aria-hidden="true" />}
      {children}
    </span>
  )
}

/** Exact saving in brass (−45%, true minus U+2212). lg on the offer card, buy box and featured plan. */
export function SavingChip({ children, size = 'md', className }: { children: ReactNode; size?: 'md' | 'lg'; className?: string }) {
  return <span className={cn(savingChipVariants({ size }), className)}>{children}</span>
}

/** Plan tag: neutral (Découverte, Tarif le plus bas) or saving (Économisez 40%). */
export function Tag({ children, tone = 'neutral', className }: { children: ReactNode; tone?: 'neutral' | 'saving'; className?: string }) {
  if (tone === 'saving') return <SavingChip className={className}>{children}</SavingChip>
  return <span className={cn(neutralTagClass, className)}>{children}</span>
}

type ChipProps = {
  children: ReactNode
  icon?: IconName
  size?: 'md' | 'sm'
  /** Filter chip selected state (ink fill). */
  selected?: boolean
  as?: ElementType
  className?: string
}

/** Static label chip (themes, players, model tags). Zone-aware. */
export function Chip({ children, icon, size = 'md', selected, as: Tag = 'span', className }: ChipProps) {
  return (
    <Tag className={cn(chipVariants({ size, selected: !!selected }), className)}>
      {icon && <i className={iconClass(icon, cn(chipIconClass, selected && 'text-current'))} aria-hidden="true" />}
      {children}
    </Tag>
  )
}

/** Payment method as a monochrome text badge (VISA, MASTERCARD, PAYPAL, CRYPTO). */
export function PaymentBadge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn(paymentBadgeClass, className)}>{children}</span>
}

/** Quality stamp 4K / FHD / HD / SD (4K is the filled one). */
export function QualityStamp({ tier, className }: { tier: QualityTier; className?: string }) {
  return <span className={cn(qualityStampClass.base, tier === '4K' && qualityStampClass.top, className)}>{tier}</span>
}

const STAR_SIZE = { 14: 'text-[14px]', 15: 'text-[15px]', 16: 'text-[16px]' } as const

/** Five decorative stars (brass-700 on light, brass-500 on vault). The rating text beside them carries the meaning. */
export function Stars({ size, className }: { size?: 14 | 15 | 16; className?: string }) {
  return (
    <span aria-hidden="true" className={cn('inline-flex shrink-0 gap-0.5 leading-none text-z-star', size ? STAR_SIZE[size] : 'text-[14px] md:text-[15px]', className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <i key={i} className="ti ti-star-filled" />
      ))}
    </span>
  )
}

/** Rating pill: stars + the content's rating line ("Service préféré en 2026 · 4.8/5"). */
export function RatingPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex min-h-9 items-center gap-2.5 rounded-full border border-hairline bg-ivory py-1 pr-3.5 pl-2.5 font-sans text-meta font-semibold text-ink-soft',
        className,
      )}
    >
      <Stars size={14} className="text-brass-700" />
      <span>{children}</span>
    </p>
  )
}

/** Availability / status dot (evergreen with a halo). Never pulses. */
export function StatusDot({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn(statusDotClass, className)} />
}

/** Initials disc generated from an existing name; aria-hidden, no text node (pseudo-content). */
export function Monogram({ name, size = 40, className }: { name: string; size?: 40 | 56; className?: string }) {
  return (
    <span
      aria-hidden="true"
      data-label={initials(name)}
      className={cn(
        'grid shrink-0 place-items-center rounded-full leading-none before:content-[attr(data-label)]',
        size === 40
          ? 'size-10 bg-evergreen-100 font-sans text-[0.875rem] font-bold text-evergreen-700'
          : 'size-14 bg-vault font-display text-xl font-semibold text-brass-300 vault:ring-1 vault:ring-vault-line',
        className,
      )}
    />
  )
}

/** Brass cart count, absolutely placed on its (relative) icon button. */
export function CartCount({ count, className }: { count: number; className?: string }) {
  return <span className={cn(cartCountClass, className)}>{count}</span>
}

const TILE_SIZE = {
  40: 'size-10 text-[22px]',
  44: 'size-11 text-[22px]',
  56: 'size-14 text-[32px]',
} as const

/** Icon tile: evergreen-100 square with an evergreen-700 glyph (vault: raised square, brass glyph). Default 40 → 44 from md. */
export function IconTile({ icon, size, className }: { icon: IconName; size?: 40 | 44 | 56; className?: string }) {
  return (
    <span aria-hidden="true" className={cn(tileClass, size ? TILE_SIZE[size] : 'size-10 text-[22px] md:size-11', className)}>
      <i className={iconClass(icon)} />
    </span>
  )
}
