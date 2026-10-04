import { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { SiteHeader } from './SiteHeader'
import { SideSlide } from './SideSlide'
import { CartDrawer } from './CartDrawer'
import { SiteFooter } from './SiteFooter'
import { CookieBar } from './CookieBar'
import { ChromeContext, type CartItem, type ChromeState } from './chrome-context'
import './chrome.css'

export function SiteLayout() {
  const { pathname } = useLocation()
  const [sideOpen, setSideOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // New page: start at the top, like a full page load on the original.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Body class drives the push effect of the side menu.
  useEffect(() => {
    document.body.classList.toggle('sc-side-open', sideOpen)
  }, [sideOpen])

  const addToCart = useCallback<ChromeState['addToCart']>((item, qty = 1) => {
    setCartItems((items) => {
      const existing = items.find((i) => i.id === item.id)
      if (existing) return items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i))
      return [...items, { ...item, qty }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setCartItems((items) => items.filter((i) => i.id !== id))
  }, [])

  const value = useMemo<ChromeState>(
    () => ({ sideOpen, setSideOpen, cartOpen, setCartOpen, cartItems, addToCart, removeFromCart }),
    [sideOpen, cartOpen, cartItems, addToCart, removeFromCart],
  )

  return (
    <ChromeContext.Provider value={value}>
      <div className="sc-wrapper" id="Wrapper">
        <SiteHeader />
        <main id="Content">
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Outlet />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
      <SideSlide />
      <CartDrawer />
      <CookieBar />
    </ChromeContext.Provider>
  )
}
