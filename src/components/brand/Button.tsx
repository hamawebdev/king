import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { buttonIconSize, buttonVariants, iconClass } from './recipes'
import type { ButtonSize, ButtonVariant, IconName } from './types'

type ButtonLookProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Leading Tabler icon (one icon per button at most). */
  iconStart?: IconName
  /** Trailing Tabler icon; 'arrow' = ti-arrow-right that nudges on hover (buy actions). */
  iconEnd?: IconName | 'arrow'
  full?: boolean
  /** Keeps the label, swaps the icon for a spinner, sets aria-busy and blocks clicks. */
  loading?: boolean
  className?: string
  children?: ReactNode
}

function Inner({ iconStart, iconEnd, loading, size = 'md', children }: ButtonLookProps) {
  const sz = buttonIconSize[size]
  const spinner = <i className={iconClass('ti-loader-2', cn(sz, 'motion-safe:animate-spin'))} aria-hidden="true" />
  const start = iconStart ? (loading && !iconEnd ? spinner : <i className={iconClass(iconStart, sz)} aria-hidden="true" />) : null
  const end = iconEnd
    ? loading
      ? spinner
      : iconEnd === 'arrow'
        ? (
            <i
              className={iconClass('ti-arrow-right', cn(sz, 'transition-transform duration-180 ease-calm motion-safe:group-hover/btn:translate-x-0.5'))}
              aria-hidden="true"
            />
          )
        : <i className={iconClass(iconEnd, sz)} aria-hidden="true" />
    : null
  return (
    <>
      {start}
      {children != null && <span>{children}</span>}
      {end}
      {loading && !iconStart && !iconEnd && spinner}
    </>
  )
}

function look({ variant = 'primary', size = 'md', full, className }: ButtonLookProps) {
  return cn(buttonVariants({ variant, size, full: !!full }), className)
}

type ButtonProps = ButtonLookProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

/** <button>. Default type="button"; pass type="submit" for forms. */
export function Button({ variant, size, iconStart, iconEnd, full, loading, className, children, type, disabled, onClick, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type={type ?? 'button'}
      disabled={disabled}
      aria-busy={loading || undefined}
      onClick={loading ? (e) => e.preventDefault() : onClick}
      className={look({ variant, size, full, className })}
    >
      <Inner iconStart={iconStart} iconEnd={iconEnd} loading={loading} size={size}>
        {children}
      </Inner>
    </button>
  )
}

type ButtonLinkProps = ButtonLookProps & Omit<LinkProps, 'className' | 'children'> & { disabled?: boolean }

/** react-router <Link> styled as a button. `disabled` renders aria-disabled and blocks navigation. */
export function ButtonLink({ variant, size, iconStart, iconEnd, full, loading, className, children, disabled, onClick, ...rest }: ButtonLinkProps) {
  const blocked = disabled || loading
  return (
    <Link
      {...rest}
      aria-disabled={blocked || undefined}
      aria-busy={loading || undefined}
      tabIndex={disabled ? -1 : rest.tabIndex}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => (blocked ? e.preventDefault() : onClick?.(e))}
      className={look({ variant, size, full, className })}
    >
      <Inner iconStart={iconStart} iconEnd={iconEnd} loading={loading} size={size}>
        {children}
      </Inner>
    </Link>
  )
}

type ButtonAProps = ButtonLookProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { disabled?: boolean }

/** Plain <a href> styled as a button (external links, #anchors, downloads). */
export function ButtonA({ variant, size, iconStart, iconEnd, full, loading, className, children, disabled, onClick, ...rest }: ButtonAProps) {
  const blocked = disabled || loading
  return (
    <a
      {...rest}
      aria-disabled={blocked || undefined}
      aria-busy={loading || undefined}
      tabIndex={disabled ? -1 : rest.tabIndex}
      onClick={(e) => (blocked ? e.preventDefault() : onClick?.(e))}
      className={look({ variant, size, full, className })}
    >
      <Inner iconStart={iconStart} iconEnd={iconEnd} loading={loading} size={size}>
        {children}
      </Inner>
    </a>
  )
}

type WhatsAppButtonProps = {
  /** The section's own label ("Whatsapp", "WhatsApp" …). */
  label: string
  size?: ButtonSize
  /** Icon-only square (48px in the buy bar); the label stays as sr-only text. */
  iconOnly?: boolean
  href?: string
  full?: boolean
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>

/** WhatsApp action: green fill, vault glyph and label (never white). */
export function WhatsAppButton({ label, size = 'md', iconOnly, href = WHATSAPP_HREF, full, className, ...rest }: WhatsAppButtonProps) {
  if (iconOnly) {
    return (
      <a
        {...rest}
        href={href}
        className={cn(buttonVariants({ variant: 'whatsapp', size }), 'size-12 min-h-0 shrink-0 p-0 text-[22px]', className)}
      >
        <i className="ti ti-brand-whatsapp" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </a>
    )
  }
  return (
    <ButtonA {...rest} href={href} variant="whatsapp" size={size} full={full} iconStart="ti-brand-whatsapp" className={className}>
      {label}
    </ButtonA>
  )
}
