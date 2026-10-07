// Shared prop types of the brand kit (DIRECTION « Réserve », §12).
import type { MouseEvent } from 'react'

/** Surface of a section root (DIRECTION §5.4). */
export type Zone = 'paper' | 'ivory' | 'sand' | 'vault'

/** Container widths: content 1200, wide 1320, text 760. */
export type ContainerSize = 'content' | 'wide' | 'text'

/** Vertical rhythm of a section: 72/96/128, 40/50/64, hero 40/60/88, or none. */
export type Rhythm = 'section' | 'sm' | 'hero' | 'none'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'brass'
  | 'ivory'
  | 'outline-vault'
  | 'link-vault'
  | 'whatsapp'
  | 'icon'
  | 'icon-vault'

export type ButtonSize = 'sm' | 'md' | 'lg'

/** A Tabler icon class, with or without the `ti-` prefix ("ti-lock" or "lock"). */
export type IconName = string

/** Icon + label pair (trust rows, guarantee rows). */
export type IconText = { icon: IconName; label: string }

/**
 * A call to action. `to` renders a router link, `href` a plain <a> (anchors, external, "/checkout/"),
 * neither a <button>. Both link forms keep role=link. `ariaLabel`, `target`, `rel` pass through.
 */
export type Cta = {
  label: string
  to?: string
  href?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  ariaLabel?: string
  target?: string
  rel?: string
}

export type QualityTier = '4K' | 'FHD' | 'HD' | 'SD'

export type CoffretVariant = '3' | '6' | '12' | '24' | 'renew'

export type StatItem = { value?: string; label: string; star?: boolean }

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p'
