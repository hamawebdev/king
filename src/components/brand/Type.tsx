import { Fragment, type AnchorHTMLAttributes, type ElementType, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'
import { cn } from '@/lib/utils'
import { linkClass } from './recipes'

type EyebrowProps = {
  children: ReactNode
  /** Rule on both sides (centred heads only). */
  center?: boolean
  as?: ElementType
  className?: string
}

/** Small caps label with a 28px brass rule (brass-700 on light, brass-300 on vault). */
export function Eyebrow({ children, center, as: Tag = 'p', className }: EyebrowProps) {
  return <Tag className={cn(center ? 'eyebrow-center' : 'eyebrow', className)}>{children}</Tag>
}

const HEAD_SIZE = {
  xl: 'text-display-xl',
  lg: 'text-display-lg',
  md: 'text-display-md',
  sm: 'text-display-sm',
} as const

type SectionHeadProps = {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  /** Heading level (default h2; h1 for page heroes). */
  as?: 'h1' | 'h2' | 'h3'
  /** display-xl (home H1), display-lg (page H1), display-md (section H2, default), display-sm (bands, panels). */
  size?: keyof typeof HEAD_SIZE
  align?: 'start' | 'center'
  /** Sticky from lg (4/8 FAQ and guide heads). */
  sticky?: boolean
  id?: string
  className?: string
  /** Extra content under the lead (a button pair, a rating pill …). */
  children?: ReactNode
}

/** Eyebrow → 16px → heading → 16px → lead. Left-aligned by default. Wrap keywords in <Kw>. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  as: H = 'h2',
  size = 'md',
  align = 'start',
  sticky,
  id,
  className,
  children,
}: SectionHeadProps) {
  const center = align === 'center'
  return (
    <header
      className={cn(
        // flex column: the inline-flex eyebrow becomes a flex item, so no line-box strut adds to the 16px gap
        'flex max-w-[56rem] flex-col',
        center && 'mx-auto items-center text-center',
        sticky && 'lg:sticky lg:top-24 lg:self-start',
        className,
      )}
    >
      {eyebrow != null && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <H id={id} className={cn('font-display text-z-fg', HEAD_SIZE[size], eyebrow != null && 'mt-4')}>
        {title}
      </H>
      {lead != null && <p className={cn('mt-4 max-w-[56ch] font-sans text-lead text-z-soft', center && 'mx-auto')}>{lead}</p>}
      {children}
    </header>
  )
}

const LEADING_FIGURE = /^([+−-]?\d[\d\s.,]*\s+)/

/** All-caps keyword, or one that starts with an all-caps word ("NOVASTREAM Premium"): stays roman. */
function isCapsKeyword(text: string) {
  const first = text.trim().split(/\s+/)[0] ?? ''
  const isCaps = (w: string) => /\p{L}/u.test(w) && w === w.toLocaleUpperCase('fr')
  return isCaps(text) || (first.replace(/[^\p{L}]/gu, '').length > 1 && isCaps(first))
}

/**
 * The keyword (replaces the blue accent): Newsreader italic in the zone accent.
 * All-caps keywords (NOVASTREAM, or starting with an all-caps word) stay roman ink; a leading figure ("+5200 ") stays roman outside the span.
 * At most one per heading. Never use <em> for it.
 */
export function Kw({ children, className }: { children: string; className?: string }) {
  if (isCapsKeyword(children)) {
    return <span className={cn('kw-caps', className)}>{children}</span>
  }
  const m = children.match(LEADING_FIGURE)
  if (m) {
    return (
      <Fragment>
        {m[1]}
        <span className={cn('kw', className)}>{children.slice(m[1].length)}</span>
      </Fragment>
    )
  }
  return <span className={cn('kw', className)}>{children}</span>
}

/** Inline text link (router). Evergreen on light, brass-300 on vault. */
export function TextLink({ className, ...props }: LinkProps) {
  return <Link {...props} className={cn(linkClass, typeof className === 'string' ? className : undefined)} />
}

/** Inline text link (plain href). */
export function TextA({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={cn(linkClass, className)} />
}

type Crumb = { label: string; to?: string }

/** Breadcrumb: meta text, chevron separators, current item semibold with aria-current. */
export function Breadcrumb({ items, label, className }: { items: Crumb[]; label?: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-meta font-medium text-z-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
              {last || !c.to ? (
                <span aria-current={last ? 'page' : undefined} className={cn(last && 'font-semibold text-z-fg')}>
                  {c.label}
                </span>
              ) : (
                <Link to={c.to} className="underline-offset-4 transition-colors duration-180 ease-calm hover:text-z-fg hover:underline">
                  {c.label}
                </Link>
              )}
              {!last && <i className="ti ti-chevron-right text-[12px]" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
