import { useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { MAIN_NAV, isCurrent } from '@/lib/site'
import { cn } from '@/lib/utils'
import {
  Button,
  CartCount,
  Wordmark,
  overlayClass,
  overlayClosedClass,
  sideLinkClass,
  sideMenuClass,
} from '@/components/brand'
import { formatEuro, useChrome } from './chrome-context'
import { closedPanel, usePanelFocus } from './SiteLayout.focus'

// Mobile menu sliding in from the right over a vault overlay (DIRECTION §9.0 chrome-side).
export function SideSlide() {
  const { pathname } = useLocation()
  const { sideOpen, setSideOpen, setCartOpen, cartItems } = useChrome()
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = cartItems.reduce((sum, i) => sum + i.qty, 0)
  const panel = useRef<HTMLElement>(null)
  const close = useCallback(() => setSideOpen(false), [setSideOpen])
  usePanelFocus(sideOpen, panel, close)

  return (
    <>
      <div className={cn(overlayClass, !sideOpen && overlayClosedClass)} onClick={close} aria-hidden="true" />
      <aside
        ref={panel}
        className={cn(sideMenuClass, 'border-l border-hairline shadow-float', !sideOpen && closedPanel)}
        aria-label="Menu mobile"
        aria-hidden={!sideOpen}
        inert={!sideOpen}
        data-section="chrome-side"
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-hairline px-5">
          <span aria-hidden="true">
            <Wordmark tone="light" className="h-5" />
          </span>
          <Button variant="icon" aria-label="Fermer le menu" onClick={close}>
            <i className="ti ti-x" aria-hidden="true" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pt-6 pb-[calc(32px+env(safe-area-inset-bottom))]">
          <button
            type="button"
            aria-label="Panier"
            onClick={() => {
              setSideOpen(false)
              setCartOpen(true)
            }}
            className={cn(
              'flex min-h-14 w-full items-center justify-between gap-4 rounded-control border border-hairline bg-paper py-2 pr-4 pl-2',
              'transition-[border-color,background-color] duration-180 ease-calm hover:border-hairline-strong hover:bg-ivory',
            )}
          >
            <span className="relative grid size-10 shrink-0 place-items-center rounded-control bg-evergreen-100 text-[20px] text-evergreen-700">
              <i className="ti ti-shopping-cart" aria-hidden="true" />
              {count > 0 && <CartCount count={count} />}
            </span>
            <span className="font-sans text-[1.0625rem] font-semibold tabular-nums text-ink">{formatEuro(total)}</span>
          </button>

          <nav aria-label="Menu principal" className="mt-8">
            <ul className="border-t border-hairline">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={isCurrent(pathname, item.to) ? 'page' : undefined}
                    className={sideLinkClass}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
