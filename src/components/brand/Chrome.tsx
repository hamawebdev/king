import { useEffect, useLayoutEffect, useState, type AnchorHTMLAttributes, type RefObject } from 'react'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { CtaButton, WhatsAppButton } from './Button'
import { SCOPE, fixedRootClass } from './recipes'
import type { Cta } from './types'

type BubbleProps = {
  /** Existing accessible name ("Contacter sur WhatsApp"). */
  label: string
  href?: string
  /** Keep the existing hook (home-floating-whatsapp). */
  dataSection?: string
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>

/** Floating WhatsApp bubble (every page; above the buy bar on phone). Vault glyph on WhatsApp green. Extra props (target, rel …) go on the <a>. */
export function WhatsAppBubble({ label, href = WHATSAPP_HREF, dataSection, className, ...rest }: BubbleProps) {
  return (
    <a
      {...rest}
      href={href}
      aria-label={label}
      data-section={dataSection}
      className={cn(
        SCOPE,
        'fixed right-6 bottom-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-[30px] text-vault shadow-float ring-2 ring-ivory',
        'transition-colors duration-180 ease-calm hover:bg-whatsapp-hover max-md:right-4 max-md:bottom-[88px]',
        className,
      )}
    >
      <i className="ti ti-brand-whatsapp" aria-hidden="true" />
    </a>
  )
}

/** Default selector of the element the buy bar watches: every <Recap> carries data-buybar-watch. */
const WATCH_SELECTOR = '[data-buybar-watch]'

/**
 * True while any watched element intersects the viewport. `watch` is a ref or a CSS selector resolved in the
 * DOM (so the Recap and the bar can live in different modules); elements that mount later are picked up.
 */
function useWatchInView(watch: RefObject<HTMLElement | null> | string) {
  const [inView, setInView] = useState(false)
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const state = new Map<Element, boolean>()
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) state.set(e.target, e.isIntersecting)
      setInView([...state.values()].some(Boolean))
    })
    const attach = () => {
      const els = typeof watch === 'string' ? Array.from(document.querySelectorAll(watch)) : watch.current ? [watch.current] : []
      els.forEach((el) => io.observe(el))
      return els.length > 0
    }
    let mo: MutationObserver | undefined
    if (!attach() && typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => {
        if (attach()) mo?.disconnect()
      })
      mo.observe(document.body, { childList: true, subtree: true })
    }
    return () => {
      io.disconnect()
      mo?.disconnect()
    }
  }, [watch])
  return inView
}

/** Becomes true once the visitor has scrolled (scrollY > 8); a programmatic scrollTo(0, 0) does not count. */
function useHasScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (scrolled) return
    const on = () => {
      if (window.scrollY > 8) setScrolled(true)
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [scrolled])
  return scrolled
}

type BuyBarProps = {
  old?: string
  price: string
  /** The existing bar label ("Accès 12 mois · −45%"). sr-only unless `labelVisible`. */
  label?: string
  /** Show the label under the price (home: visible from 401px, sr-only at 400px and below). Default false (sr-only). */
  labelVisible?: boolean
  /** The existing visible word "WhatsApp" (now sr-only on the 48px icon button). */
  waLabel: string
  waHref?: string
  /** Extra attributes for the WhatsApp link (product bar: { target: '_blank', rel: 'noopener' }). */
  waProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>
  /** `to` (router), `href` (plain <a>, e.g. "/checkout/" with onClick) or a button. */
  cta: Cta
  /** What hides the bar while in view. Default: any element with data-buybar-watch (every Recap has it). */
  watch?: RefObject<HTMLElement | null> | string
  dataSection?: string
  className?: string
}

/**
 * Phone buy bar (md:hidden). Visible from load; once the visitor scrolls it slides away while the Recap
 * (offer card / buy box) intersects the viewport, and comes back when it leaves. Without IntersectionObserver
 * it stays. While mounted it adds html.has-buybar: index.css then reserves 88px under the footer on phone.
 */
export function BuyBar({ old, price, label, labelVisible, waLabel, waHref, waProps, cta, watch = WATCH_SELECTOR, dataSection, className }: BuyBarProps) {
  const inView = useWatchInView(watch)
  const scrolled = useHasScrolled()
  const hidden = inView && scrolled

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.add('has-buybar')
    return () => root.classList.remove('has-buybar')
  }, [])

  return (
    <div
      data-section={dataSection}
      inert={hidden || undefined}
      className={cn(
        fixedRootClass.light,
        'fixed inset-x-0 bottom-0 z-[45] flex items-center gap-3 border-t border-hairline px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-bar md:hidden',
        'transition-transform duration-260 ease-calm',
        hidden && 'translate-y-full',
        className,
      )}
    >
      <div className="min-w-0 shrink-0 font-sans">
        {old && <s className="price-old block text-micro leading-tight text-ink-muted">{old}</s>}
        <b className="price-num block text-price-sm text-ink">{price}</b>
        {label && (
          <span className={cn(labelVisible ? 'block font-sans text-micro font-medium text-ink-muted max-[400px]:sr-only' : 'sr-only')}>{label}</span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
        <WhatsAppButton {...waProps} label={waLabel} href={waHref} iconOnly />
        <CtaButton cta={cta} variant="primary" size="md" className="min-h-12 flex-1" />
      </div>
    </div>
  )
}
