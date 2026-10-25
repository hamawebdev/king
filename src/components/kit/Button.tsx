import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router'
import { waLink } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppIcon'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './button-classes'

type AnchorRest = Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>

type WaButtonProps = AnchorRest & {
  /** Prefilled WhatsApp text, word for word from the spec. */
  message?: string
  variant?: 'whatsapp' | 'brand' | 'outline'
  size?: ButtonSize
  fullWidth?: boolean
  /** Show the WhatsApp glyph (default: on for the whatsapp variant). */
  icon?: boolean
  className?: string
  children: ReactNode
}

/** WhatsApp concierge link (wa.me/33751299176?text=…), opens in a new tab. */
export function WaButton({ message, variant = 'whatsapp', size = 'md', fullWidth, icon, className, children, ...rest }: WaButtonProps) {
  const showIcon = icon ?? variant === 'whatsapp'
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    >
      {showIcon ? <WhatsAppIcon className={size === 'lg' ? 'size-5.5' : 'size-5'} /> : null}
      {children}
    </a>
  )
}

type ButtonLinkProps = AnchorRest & {
  variant?: Exclude<ButtonVariant, 'whatsapp'>
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  children: ReactNode
} & ({ to: string; href?: never } | { href: string; to?: never })

/** Non-WhatsApp button: `to` → react-router <Link>, `href` → <a> (http(s) links open in a new tab). */
export function ButtonLink({ to, href, variant = 'brand', size = 'md', fullWidth, className, children, ...rest }: ButtonLinkProps) {
  const cls = buttonClasses({ variant, size, fullWidth, className })
  if (to !== undefined) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
