import type { ElementType, MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Button, ButtonLink } from './Button'
import { Chip, IconTile, Monogram, Ribbon, Stars, StatusDot, Tag } from './Labels'
import { Price } from './Price'
import { cardClass, checkIconClass } from './recipes'
import type { Cta, IconName } from './types'

type CardProps = {
  children?: ReactNode
  /** panel = 12px radius (plan, related, support, app box); card = 8px (default). */
  radius?: 'card' | 'panel'
  /** Hover lift for clickable cards only. */
  interactive?: boolean
  as?: ElementType
  className?: string
}

/** Base card: 1px zone line, zone card fill (ivory on paper/sand, paper on ivory, evergreen-800 on vault), no shadow. */
export function Card({ children, radius = 'card', interactive, as: Tag = 'div', className }: CardProps) {
  return (
    <Tag className={cn(radius === 'panel' ? cardClass.panel : cardClass.base, interactive && cardClass.interactive, className)}>
      {children}
    </Tag>
  )
}

/** Checklist with evergreen checks (brass on vault). */
export function CheckList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn('m-0 grid list-none gap-2.5 p-0 font-sans text-small text-z-body', className)}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5">
          <i className={checkIconClass} aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

type FeatureCardProps = {
  icon: IconName
  title: ReactNode
  text?: ReactNode
  /** Model tags (device families) as small chips. */
  tags?: string[]
  as?: 'h3' | 'h4'
  className?: string
  children?: ReactNode
}

/** Feature card: tile + title + text. A row (tile left) on phone, stacked from md with aligned title rows. */
export function FeatureCard({ icon, title, text, tags, as: H = 'h3', className, children }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'grid grid-cols-[40px_1fr] gap-x-3.5 rounded-card border border-z-line bg-z-card p-4 md:grid-cols-1 md:grid-rows-[auto_1fr] md:p-card',
        className,
      )}
    >
      <IconTile icon={icon} className="md:mb-5" />
      <div>
        <H className="font-display text-title text-z-fg">{title}</H>
        {text != null && <p className="mt-2 font-sans text-small text-z-soft">{text}</p>}
        {tags && tags.length > 0 && (
          <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
            {tags.map((t) => (
              <li key={t}>
                <Chip size="sm">{t}</Chip>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </article>
  )
}

/** Ledger list: rows without boxes, 1 / 2 / 3 columns, gap-x-6 gap-y-12. */
export function LedgerList({ children, className }: { children: ReactNode; className?: string }) {
  return <ol className={cn('m-0 grid list-none gap-x-6 gap-y-12 p-0 md:grid-cols-2 lg:grid-cols-3', className)}>{children}</ol>
}

type LedgerItemProps = {
  /** The item's own number, only if the content has one. Never invent one. */
  index?: string
  title: ReactNode
  children?: ReactNode
  as?: 'h3' | 'h4'
  className?: string
}

/** Ledger row: 1px ink rule on top, optional italic accent index, title, small text. */
export function LedgerItem({ index, title, children, as: H = 'h3', className }: LedgerItemProps) {
  return (
    <li className={cn('ledger', className)}>
      {index && <p className="font-display text-stat-md text-z-accent italic">{index}</p>}
      <H className={cn('font-display text-title text-z-fg', index && 'mt-3')}>{title}</H>
      {children != null && <div className="mt-2 font-sans text-small text-z-soft">{children}</div>}
    </li>
  )
}

/** VOD genre ledger row: genre (serif title) left, count (statement numeral) right. */
export function GenreRow({ genre, count, className }: { genre: ReactNode; count: ReactNode; className?: string }) {
  return (
    <li className={cn('flex items-baseline justify-between gap-4 border-t border-z-line py-4', className)}>
      <span className="font-display text-title text-z-fg">{genre}</span>
      <span className="price-num text-stat-md text-z-fg">{count}</span>
    </li>
  )
}

type PlanCardProps = {
  name: string
  tag?: { label: string; tone: 'neutral' | 'saving' }
  old?: string
  price: string
  unit?: string
  perMonth?: string
  features: ReactNode[]
  cta: Cta
  details?: { label: string; to: string }
  /** Featured: vault panel, brass frame, lifted at xl, brass CTA. */
  featured?: boolean
  /** Ribbon string, only if the content has one. */
  ribbon?: string
  as?: 'h2' | 'h3'
  className?: string
}

/** Plan card (home ×4, shop ×3): tag, name, price block, divider, checklist, CTA, details link. */
export function PlanCard({ name, tag, old, price, unit, perMonth, features, cta, details, featured, ribbon, as: H = 'h3', className }: PlanCardProps) {
  const ctaVariant = featured ? 'brass' : 'primary'
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-panel border p-card',
        featured
          ? 'panel-vault cert-frame border-brass-500/60 shadow-float xl:-mt-4 xl:pt-[calc(var(--spacing-card)+1rem)]'
          : 'border-z-line bg-z-card',
        ribbon && 'pt-[calc(var(--spacing-card)+0.5rem)]',
        className,
      )}
    >
      {ribbon && <Ribbon icon="ti-award">{ribbon}</Ribbon>}
      {tag && (
        <div>
          <Tag tone={tag.tone}>{tag.label}</Tag>
        </div>
      )}
      <H className={cn('font-display text-title-lg text-z-fg', tag && 'mt-3')}>{name}</H>
      <Price old={old} value={price} unit={unit} perMonth={perMonth} size="lg" className="mt-4" />
      <hr className="my-5 border-0 border-t border-z-line" />
      <CheckList items={features} />
      <div className="relative z-[1] mt-auto pt-6">
        {cta.to ? (
          <ButtonLink to={cta.to} variant={ctaVariant} size="md" full iconEnd="arrow" onClick={cta.onClick}>
            {cta.label}
          </ButtonLink>
        ) : (
          <Button variant={ctaVariant} size="md" full iconEnd="arrow" onClick={cta.onClick}>
            {cta.label}
          </Button>
        )}
        {details && (
          <p className="mt-3.5 text-center">
            <Link
              to={details.to}
              className={cn(
                'inline-flex min-h-11 items-center font-sans text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4 hover:decoration-2',
                featured ? 'text-brass-300 hover:text-on-vault' : 'text-evergreen-700 hover:text-ink',
              )}
            >
              {details.label}
            </Link>
          </p>
        )}
      </div>
    </article>
  )
}

type TestimonialProps = {
  quote: ReactNode
  name: string
  meta?: ReactNode
  /** Shows the five stars when given (the rating text lives elsewhere). */
  rating?: number
  className?: string
}

/** Testimonial: stars, decorative «, serif italic quote, monogram + name + meta. No photos. */
export function Testimonial({ quote, name, meta, rating, className }: TestimonialProps) {
  return (
    <figure className={cn('m-0 flex flex-col rounded-card border border-z-line bg-z-card p-card', className)}>
      {rating != null && <Stars />}
      <span aria-hidden="true" className="mt-4 block h-8 font-display text-5xl leading-none text-brass-500 before:content-['«']" />
      <blockquote className="m-0 mt-2 font-display text-[1.125rem] leading-[1.45] text-z-fg italic md:text-[1.1875rem]">{quote}</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <Monogram name={name} size={40} />
        <span className="grid">
          <span className="font-sans text-[0.9375rem] font-semibold text-z-fg">{name}</span>
          {meta != null && <span className="font-sans text-meta text-z-muted">{meta}</span>}
        </span>
      </figcaption>
    </figure>
  )
}

type SupportCardProps = {
  name: string
  role?: ReactNode
  availability?: ReactNode
  as?: 'h3' | 'h4'
  className?: string
  children?: ReactNode
}

/** Support person card: vault monogram 56, name (title-lg), role (meta), status dot + availability. */
export function SupportCard({ name, role, availability, as: H = 'h3', className, children }: SupportCardProps) {
  return (
    <article className={cn(cardClass.panel, className)}>
      <Monogram name={name} size={56} />
      <H className="mt-5 font-display text-title-lg text-z-fg">{name}</H>
      {role != null && <p className="mt-1 font-sans text-meta font-medium text-z-muted">{role}</p>}
      {availability != null && (
        <p className="mt-4 flex items-center gap-2.5 font-sans text-small text-z-soft">
          <StatusDot />
          <span>{availability}</span>
        </p>
      )}
      {children}
    </article>
  )
}

type AppBoxProps = {
  /** Screen visual (AppMock or a DeviceFrame), shown in a 16:10 vault panel. */
  screen: ReactNode
  name: ReactNode
  text?: ReactNode
  /** Buttons (V3 primary md with ti-download, V2 secondary md). */
  actions?: ReactNode
  as?: 'h2' | 'h3'
  className?: string
}

/** App box (downloads): 16:10 vault screen on top, then name, text and the download actions. */
export function AppBox({ screen, name, text, actions, as: H = 'h3', className }: AppBoxProps) {
  return (
    <article className={cn('overflow-hidden rounded-panel border border-z-line bg-z-card', className)}>
      <div className="panel-vault relative grid aspect-[16/10] place-items-center overflow-hidden p-6">{screen}</div>
      <div className="p-card">
        <H className="font-display text-title-lg text-z-fg">{name}</H>
        {text != null && <div className="mt-2 font-sans text-small text-z-soft">{text}</div>}
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </article>
  )
}

type RelatedCardProps = {
  /** Coffret size="sm" (16:10). */
  visual: ReactNode
  title: string
  to: string
  old?: string
  price: string
  action: { label: string; onClick?: (e: MouseEvent<HTMLElement>) => void }
  as?: 'h2' | 'h3'
  className?: string
}

/** Related product: coffret, title link, struck old price, price-md, secondary sm "Ajouter au panier". */
export function RelatedCard({ visual, title, to, old, price, action, as: H = 'h3', className }: RelatedCardProps) {
  return (
    <article className={cn(cardClass.panel, 'flex flex-col', className)}>
      {visual}
      <H className="mt-5 font-display text-title text-z-fg">
        <Link to={to} className="hover:underline hover:decoration-1 hover:underline-offset-4">
          {title}
        </Link>
      </H>
      <Price old={old} value={price} size="md" className="mt-3" />
      <div className="mt-auto pt-5">
        <Button variant="secondary" size="sm" full iconStart="ti-shopping-cart-plus" onClick={action.onClick}>
          {action.label}
        </Button>
      </div>
    </article>
  )
}
