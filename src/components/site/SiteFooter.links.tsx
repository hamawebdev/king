import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { routeHref } from '@/lib/site'
import { scrollToSection } from './SiteFooter.scroll'

/**
 * Link to a homepage section (#hero, #signature, #installation…). On the homepage it scrolls smoothly;
 * elsewhere it navigates to /#id (Home scrolls to the hash after mount). Base-path safe.
 */
export function SectionLink({
  id,
  className,
  children,
  onNavigate,
}: {
  id: string
  className?: string
  children: ReactNode
  onNavigate?: () => void
}) {
  const { pathname } = useLocation()
  if (pathname === '/') {
    return (
      <a
        href={routeHref(`/#${id}`)}
        className={className}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
          if (scrollToSection(id)) e.preventDefault()
          onNavigate?.()
        }}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={{ pathname: '/', hash: `#${id}` }} className={className} onClick={onNavigate}>
      {children}
    </Link>
  )
}

/** Plain external link (WhatsApp, wa.me…) opening in a new tab. */
export function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
