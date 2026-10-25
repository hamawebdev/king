import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { Aura, Container, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export type Crumb = { label: string; to?: string }

const BREADCRUMB_LABEL: Localized<string> = {
  fr: 'Fil d’Ariane',
  en: 'Breadcrumb',
  de: 'Brotkrümelnavigation',
  es: 'Ruta de navegación',
  pt: 'Trilho de navegação',
  fi: 'Murupolku',
}

/** Breadcrumb trail (last item = current page). */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const label = useCopy(BREADCRUMB_LABEL)
  return (
    <nav aria-label={label} className={cn('text-sm text-body', className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.label} className="inline-flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className="rounded-sm underline-offset-4 hover:text-brand hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'font-medium text-heading' : undefined}>
                  {c.label}
                </span>
              )}
              {!last ? <ChevronRight aria-hidden="true" className="size-3.5 text-slate-400" /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

type PageHeroProps = {
  crumbs?: Crumb[]
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  /** Buttons / pills under the heading. */
  children?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

/** Inner-page opening band: white canvas with the hero aura, breadcrumb, the page's h1. */
export function PageHero({ crumbs, eyebrow, title, subtitle, children, align = 'center', className }: PageHeroProps) {
  const centered = align === 'center'
  return (
    <section className={cn('relative isolate overflow-hidden bg-canvas pt-8 pb-14 md:pt-10 md:pb-20', className)}>
      <Aura variant="hero" />
      <Container>
        {crumbs ? <Breadcrumbs items={crumbs} className={cn('mb-10 md:mb-14', centered && 'flex justify-center')} /> : null}
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} align={align} />
        {children ? (
          <div className={cn('mt-8 flex flex-wrap gap-3', centered ? 'justify-center' : 'justify-start')}>{children}</div>
        ) : null}
      </Container>
    </section>
  )
}
