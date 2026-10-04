import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { MAIN_NAV, BRAND, isCurrent } from '@/lib/site'
import { CartIcon, MenuIcon } from './icons'
import { useChrome } from './chrome-context'

export function SiteHeader() {
  const { pathname } = useLocation()
  const { setCartOpen, setSideOpen } = useChrome()
  const [sticky, setSticky] = useState(false)
  const [barHeight, setBarHeight] = useState(110)

  useEffect(() => {
    const onScroll = () => {
      // Desktop bar is 110px, mobile mini bar is 60px; it turns sticky once scrolled past itself.
      const h = window.innerWidth < 768 ? 61 : 111
      setBarHeight(h)
      setSticky(window.scrollY > h)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header id="Header">
      {/* Keeps the content from jumping while the bar is fixed. */}
      <div className="sc-header-placeholder" style={{ height: sticky ? barHeight : 0 }} />
      <div className={`sc-topbar${sticky ? ' is-sticky' : ''}`}>
        <div className="sc-topbar__container">
          <Link to="/" className="sc-logo" title={BRAND}>
            <img src="/placeholder/logo.svg" alt={BRAND} width={80} height={45} />
          </Link>
          <nav aria-label="Menu principal">
            <ul className="sc-menu">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={isCurrent(pathname, item.to) ? 'is-current' : undefined}>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="sc-topbar__right">
            <button
              type="button"
              className="sc-icon-btn sc-cart-btn"
              aria-label="Panier"
              onClick={() => setCartOpen(true)}
            >
              <CartIcon />
            </button>
            <button
              type="button"
              className="sc-icon-btn sc-toggle"
              aria-label="Menu mobile"
              onClick={() => setSideOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
