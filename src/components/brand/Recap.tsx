import type { ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'
import { CtaButton } from './Button'
import { Ribbon, SavingChip } from './Labels'
import { GuaranteeRow, InfoRow, PaymentRow, Price } from './Price'
import { cardClass } from './recipes'
import { Seal } from './Rosette'
import { ChannelMosaic } from './Screens'
import type { Cta, IconName, IconText } from './types'

type RecapProps = {
  /** Ribbon string from the content (COUP DE CŒUR, ESSENTIEL …). */
  ribbon?: string
  plan: string
  old?: string
  price: string
  unit?: string
  perMonth?: string
  /** Saving chip text (−45%). */
  saving?: string
  /** Info row text ("Tarif spécial jusqu'à fin octobre"). */
  info?: string
  infoIcon?: IconName
  /** Two-column feature checks. */
  features: ReactNode[]
  /** The brass purchase action. */
  cta: Cta
  /** Guarantee row within 16px of the CTA (the section's own reassurance items). */
  guarantees?: IconText[]
  /** Payment footer strip, only if the content has one. */
  payment?: { label?: string; methods: string[] }
  /** Seal text on the card's bottom-left corner (lg only). */
  seal?: string
  /** Sticky from lg (product buy box). */
  sticky?: boolean
  /** Mosaic strip on the top edge below lg (home offer card). */
  mosaicStrip?: boolean
  /** Heading level of the plan name (default h2). */
  as?: 'h2' | 'h3' | 'p'
  /** Optional ref. Not needed for the BuyBar: the Recap marks itself with data-buybar-watch. */
  ref?: Ref<HTMLElement>
  className?: string
}

/**
 * Offer card (home hero) and buy box (product): price, saving, reassurance and means of payment in one
 * vault block with a brass rule along the top. Never reveal-animate it.
 */
export function Recap({
  ribbon,
  plan,
  old,
  price,
  unit,
  perMonth,
  saving,
  info,
  infoIcon = 'ti-clock',
  features,
  cta,
  guarantees,
  payment,
  seal,
  sticky,
  mosaicStrip,
  as: H = 'h2',
  ref,
  className,
}: RecapProps) {
  return (
    <article ref={ref} data-buybar-watch="" className={cn(cardClass.recap, sticky && 'lg:sticky lg:top-24', className)}>
      {ribbon && <Ribbon icon="ti-award">{ribbon}</Ribbon>}
      {mosaicStrip && <ChannelMosaic rows={2} cols={6} selected={9} osd={false} fill={false} className="mb-5 -mx-[3px] opacity-50 lg:hidden" />}
      <H className="border-b border-vault-line pb-5 font-display text-title-lg text-on-vault">{plan}</H>
      <Price old={old} value={price} unit={unit} perMonth={perMonth} size="xl" className="mt-5" />
      {(saving || info) && (
        <div className="mt-4">
          {saving && <SavingChip size="lg">{saving}</SavingChip>}
          {info && (
            <InfoRow icon={infoIcon} className={cn(saving && 'mt-3')}>
              {info}
            </InfoRow>
          )}
        </div>
      )}
      <ul className="m-0 mt-6 grid list-none grid-cols-2 gap-x-4 gap-y-2.5 p-0 font-sans text-small text-on-vault">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <i className="ti ti-check mt-0.5 shrink-0 text-[18px] text-brass-500" aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="relative z-[1] mt-6">
        <CtaButton cta={cta} variant="brass" size="lg" full iconEnd="arrow" />
        {guarantees && guarantees.length > 0 && <GuaranteeRow items={guarantees} className="mt-3.5" />}
      </div>
      {payment && (
        <div className="relative z-[1] -mx-5 mt-6 -mb-6 rounded-b-panel border-t border-vault-line bg-vault-raised px-5 py-4 lg:-mx-9 lg:-mb-8 lg:px-9">
          <PaymentRow label={payment.label} methods={payment.methods} />
        </div>
      )}
      {seal && <Seal text={seal} className="absolute -bottom-12 -left-12 z-[2] max-lg:hidden" />}
    </article>
  )
}

type OrderLine = { thumb?: ReactNode; name: ReactNode; meta?: ReactNode; old?: string; price: string }

type OrderSummaryProps = {
  /** Optional heading from the content. */
  title?: ReactNode
  lines: OrderLine[]
  /** Labels come from the content ("Sous-total", "Total"). */
  subtotal?: { label: string; value: string }
  total: { label: string; value: string }
  sticky?: boolean
  /** Payment radio cards, terms, the primary lg submit with ti-lock, then the PaymentRow. */
  children?: ReactNode
  className?: string
}

/** Light Recap for checkout and cart: sand panel, line items, tabular totals, then the payment block. */
export function OrderSummary({ title, lines, subtotal, total, sticky = true, children, className }: OrderSummaryProps) {
  return (
    <section className={cn(cardClass.orderSummary, sticky && 'lg:sticky lg:top-24', className)}>
      {title != null && <h2 className="mb-4 font-display text-display-sm text-ink">{title}</h2>}
      <ul className="m-0 list-none p-0">
        {lines.map((l, i) => (
          <li key={i} className="flex items-center justify-between gap-4 border-b border-hairline-deep py-3 font-sans text-small">
            <span className="flex min-w-0 items-center gap-3">
              {l.thumb}
              <span className="grid min-w-0">
                <span className="font-semibold text-ink">{l.name}</span>
                {l.meta != null && <span className="text-meta text-ink-muted">{l.meta}</span>}
              </span>
            </span>
            <span className="flex shrink-0 items-baseline gap-2 tabular-nums">
              {l.old && <s className="price-old text-micro">{l.old}</s>}
              <span className="font-semibold text-ink">{l.price}</span>
            </span>
          </li>
        ))}
      </ul>
      <dl className="m-0 mt-4 grid gap-2 font-sans tabular-nums">
        {subtotal && (
          <div className="flex items-baseline justify-between gap-4 text-small text-ink-soft">
            <dt>{subtotal.label}</dt>
            <dd className="m-0">{subtotal.value}</dd>
          </div>
        )}
        <div className="flex items-baseline justify-between gap-4 border-t border-hairline-deep pt-3">
          <dt className="font-semibold text-ink">{total.label}</dt>
          <dd className="m-0 price-num text-price-md text-ink">{total.value}</dd>
        </div>
      </dl>
      {children && <div className="mt-6 grid gap-4">{children}</div>}
    </section>
  )
}
