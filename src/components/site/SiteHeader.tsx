import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { MAIN_NAV, isCurrent } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Button, CartCount, Wordmark, headerClass, headerNavLinkClass, navCurrentClass } from '@/components/brand'
import { useChrome } from './chrome-context'

// Sticky header (DIRECTION §9.0): paper bar with a hairline; after the first 8px of scroll it turns ivory
// and lifts. Wordmark left, main nav centred from lg, cart (brass count) and, below lg, the menu toggle.
export function SiteHeader() {
  const { pathname } = useLocation()
  const { setCartOpen, setSideOpen, cartItems } = useChrome()
  const [scrolled, setScrolled] = useState(false)
  const count = cartItems.reduce((sum, i) => sum + i.qty, 0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="Header" data-section="chrome-header" className={cn(headerClass.base, scrolled ? headerClass.scrolled : 'bg-paper')}>
      <div className={cn(headerClass.inner, 'lg:grid lg:grid-cols-[1fr_auto_1fr]')}>
        <Link
          to="/"
          className="-my-2 inline-flex min-h-11 items-center self-center justify-self-start rounded-control py-2"
        >
          <Wordmark tone="light" className="h-6 lg:h-7" />
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={isCurrent(pathname, item.to) ? 'page' : undefined}
                  className={cn(headerNavLinkClass, navCurrentClass)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0 lg:justify-self-end">
          <Button variant="icon" aria-label="Panier" className="relative" onClick={() => setCartOpen(true)}>
            <i className="ti ti-shopping-cart" aria-hidden="true" />
            {count > 0 && <CartCount count={count} />}
          </Button>
          <Button variant="icon" aria-label="Menu mobile" className="lg:hidden" onClick={() => setSideOpen(true)}>
            <i className="ti ti-menu-2" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}
