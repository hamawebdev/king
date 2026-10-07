import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SCOPE, cardClass, containerClass, rhythmClass, zoneClass } from './recipes'
import type { ContainerSize, Rhythm, Zone } from './types'

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'> & {
  /** Exactly one zone per section root (DIRECTION §5.4). */
  zone: Zone
  /** The section hook, rendered as data-section (keep the existing value). */
  dataSection: string
  /** Existing anchor id, if any (gets scroll-mt-[88px]). */
  id?: string
  /** Vertical rhythm: section 72/96/128 (default), sm 40/50/64, hero 40/60/88, none. */
  rhythm?: Rhythm
  /** Continues the ground of the section above: pt-0 and no top border. */
  continues?: boolean
  /** Inner container width, or false to lay out the children yourself. Default content (1200). */
  container?: ContainerSize | false
  /** Clip overflowing decoration (rosette corners) on both axes with overflow: clip (sticky still works). Default true. */
  clip?: boolean
  /** Root element (default section). */
  as?: ElementType
  className?: string
  /** Classes for the inner container (grid, flex …). */
  containerClassName?: string
  children?: ReactNode
}

/**
 * Section root of a redesigned band: zone ground + zone variables, the brand reset scope, the vertical
 * rhythm and the container. Every redesigned section starts here.
 */
export function Section({
  zone,
  dataSection,
  id,
  rhythm = 'section',
  continues,
  container = 'content',
  clip = true,
  as: Tag = 'section',
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      {...rest}
      id={id}
      data-section={dataSection}
      className={cn(
        SCOPE,
        zoneClass[zone],
        'relative',
        clip && 'overflow-clip',
        rhythmClass[rhythm],
        continues && 'pt-0 border-t-0',
        id && 'scroll-mt-[88px]',
        className,
      )}
    >
      {container ? <div className={cn(containerClass[container], containerClassName)}>{children}</div> : children}
    </Tag>
  )
}

type ContainerProps = {
  size?: ContainerSize
  as?: ElementType
  className?: string
  children?: ReactNode
}

/** Centred container: `mx-auto px-gutter max-w-{content|wide|text}`. Never add the padding shorthand. */
export function Container({ size = 'content', as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn(containerClass[size], className)}>{children}</Tag>
}

type VaultPanelProps = {
  /** small: the FAQ help box (p-6, no certificate frame). */
  size?: 'default' | 'small'
  as?: ElementType
  className?: string
  children?: ReactNode
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>

/**
 * Contained dark panel (V-panel) inside a light section: home CTA, product final CTA, WhatsApp blocks,
 * trial teaser, downloads closing, FAQ help box. Its children read the vault zone variables.
 */
export function VaultPanel({ size = 'default', as: Tag = 'div', className, children, ...rest }: VaultPanelProps) {
  return (
    <Tag {...rest} className={cn(size === 'small' ? cardClass.vaultPanelSm : cardClass.vaultPanel, className)}>
      {children}
    </Tag>
  )
}
