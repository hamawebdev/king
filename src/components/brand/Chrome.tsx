import type { RefObject } from 'react'
import { Link } from 'react-router'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Button, WhatsAppButton } from './Button'
import { useInView } from './motion'
import { buttonVariants } from './recipes'
import type { Cta } from './types'

type BubbleProps = {
  /** Existing accessible name ("Contacter sur WhatsApp"). */
  label: string
  href?: string
  /** Keep the existing hook (home-floating-whatsapp). */
  dataSection?: string
  className?: string
}

/** Floating WhatsApp bubble (every page; above the buy bar on phone). Vault glyph on WhatsApp green. */
export function WhatsAppBubble({ label, href = WHATSAPP_HREF, dataSection, className }: BubbleProps) {
  return (
    <a
      href={href}
      aria-label={label}
      data-section={dataSection}
      className={cn(
        'fixed right-6 bottom-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-[30px] text-vault shadow-float ring-2 ring-ivory',
        'transition-colors duration-180 ease-calm hover:bg-whatsapp-hover max-md:right-4 max-md:bottom-[88px]',
        className,
      )}
    >
      <i className="ti ti-brand-whatsapp" aria-hidden="true" />
    </a>
  )
}

type BuyBarProps = {
  old?: string
  price: string
  /** The existing bar label ("Accès 12 mois · −45%"), kept as sr-only text. */
  hiddenLabel?: string
  /** The existing visible word "WhatsApp" (now sr-only on the 48px icon button). */
  waLabel: string
  waHref?: string
  cta: Cta
  /** The offer card / buy box: the bar hides only while it is in view. */
  watch: RefObject<HTMLElement | null>
  dataSection?: string
  className?: string
}

/**
 * Phone buy bar (md:hidden). Visible from load; slides away only while `watch` intersects the viewport;
 * without IntersectionObserver it simply stays. The page's main gets pb-[88px] md:pb-0.
 */
export function BuyBar({ old, price, hiddenLabel, waLabel, waHref, cta, watch, dataSection, className }: BuyBarProps) {
  const hidden = useInView(watch)
  return (
    <div
      data-section={dataSection}
      inert={hidden || undefined}
      className={cn(
        'fixed inset-x-0 bottom-0 z-[45] flex items-center gap-3 border-t border-hairline bg-ivory px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-bar md:hidden',
        'transition-transform duration-260 ease-calm',
        hidden && 'translate-y-full',
        className,
      )}
    >
      <div className="shrink-0 font-sans">
        {old && <s className="price-old block text-micro leading-tight text-ink-muted">{old}</s>}
        <b className="price-num block text-price-sm text-ink">{price}</b>
        {hiddenLabel && <span className="sr-only">{hiddenLabel}</span>}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
        <WhatsAppButton label={waLabel} href={waHref} iconOnly />
        {cta.to ? (
          <Link to={cta.to} onClick={cta.onClick} className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'min-h-12 flex-1')}>
            <span>{cta.label}</span>
          </Link>
        ) : (
          <Button variant="primary" size="md" onClick={cta.onClick} className="min-h-12 flex-1">
            {cta.label}
          </Button>
        )}
      </div>
    </div>
  )
}
