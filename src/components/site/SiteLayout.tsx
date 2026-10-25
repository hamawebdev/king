import { Suspense, useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { SiteHeader } from './SiteHeader'
import { SideSlide } from './SideSlide'
import { SiteFooter } from './SiteFooter'
import { CookieBar } from './CookieBar'
import { ChromeContext, type ChromeState } from './chrome-context'

export function SiteLayout() {
  const { pathname } = useLocation()
  const [sideOpen, setSideOpen] = useState(false)

  // New page: start at the top, like a full page load.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // The original blocks the browser context menu on every page; mirrored here (delete to re-enable).
  useEffect(() => {
    const block = (e: MouseEvent) => e.preventDefault()
    document.addEventListener('contextmenu', block)
    return () => document.removeEventListener('contextmenu', block)
  }, [])

  const value = useMemo<ChromeState>(() => ({ sideOpen, setSideOpen }), [sideOpen])

  return (
    <ChromeContext.Provider value={value}>
      <div className="relative bg-canvas text-body" id="Wrapper">
        <SiteHeader />
        <main id="Content">
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Outlet />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
      <SideSlide />
      <CookieBar />
    </ChromeContext.Provider>
  )
}
