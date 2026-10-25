import type { ReactNode } from 'react'
import { waLink } from '@/lib/site'
import { SectionLink } from '@/components/site/SiteFooter.links'

/** Inline links used inside FAQ answers: WhatsApp (new tab) and the installation guide (#installation). */
const linkClass =
  'font-medium text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm'

export function Wa({ children }: { children: ReactNode }) {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

export function Install({ children }: { children: ReactNode }) {
  return (
    <SectionLink id="installation" className={linkClass}>
      {children}
    </SectionLink>
  )
}
