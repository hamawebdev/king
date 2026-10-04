import { Link, useLocation } from 'react-router'
import { MAIN_NAV, isCurrent } from '@/lib/site'
import { CartIcon, CloseIcon } from './icons'
import { formatEuro, useChrome } from './chrome-context'

// Mobile slide-in menu from the right (pushes the page 250px to the left).
export function SideSlide() {
  const { pathname } = useLocation()
  const { sideOpen, setSideOpen, setCartOpen, cartItems } = useChrome()
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      <div className="sc-overlay" onClick={() => setSideOpen(false)} aria-hidden="true" />
      <aside className="sc-side" aria-label="Menu mobile" aria-hidden={!sideOpen} inert={!sideOpen}>
        <div className="sc-side__close-row">
          <button type="button" className="sc-side__close" aria-label="Fermer le menu" onClick={() => setSideOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="sc-side__extras">
          <div className="sc-side__extras-wrapper">
            <button
              type="button"
              className="sc-side__cart"
              aria-label="Panier"
              onClick={() => {
                setSideOpen(false)
                setCartOpen(true)
              }}
            >
              <CartIcon />
              <span className="sc-side__cart-total">{formatEuro(total)}</span>
            </button>
          </div>
        </div>
        <nav aria-label="Menu principal">
          <ul className="sc-side__menu">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={isCurrent(pathname, item.to) ? 'is-current' : undefined}
                  onClick={() => setSideOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
