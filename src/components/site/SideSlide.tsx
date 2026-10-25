import { useCallback, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { ChevronRight, X } from 'lucide-react'
import { WaButton } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { WHATSAPP_DISPLAY, isCurrent, useMainNav } from '@/lib/site'
import { cn } from '@/lib/utils'
import { useChrome } from './chrome-context'
import { LanguageList } from './LanguageSwitcher'
import { closedPanel, usePanelFocus } from './SiteLayout.focus'
import { Wordmark } from './SiteHeader.wordmark'

const fr = { dialog: 'Menu', closeMenu: 'Fermer le menu', mainMenu: 'Menu principal', language: 'Langue' }

const COPY: Localized<typeof fr> = {
  fr,
  en: { dialog: 'Menu', closeMenu: 'Close menu', mainMenu: 'Main menu', language: 'Language' },
  de: { dialog: 'Menü', closeMenu: 'Menü schließen', mainMenu: 'Hauptmenü', language: 'Sprache' },
  es: { dialog: 'Menú', closeMenu: 'Cerrar menú', mainMenu: 'Menú principal', language: 'Idioma' },
  pt: { dialog: 'Menu', closeMenu: 'Fechar menu', mainMenu: 'Menu principal', language: 'Idioma' },
  fi: { dialog: 'Valikko', closeMenu: 'Sulje valikko', mainMenu: 'Päävalikko', language: 'Kieli' },
}

/** Mobile menu drawer (below lg): slides in from the right over a dimmed page. */
export function SideSlide() {
  const { pathname } = useLocation()
  const { sideOpen, setSideOpen } = useChrome()
  const panel = useRef<HTMLElement>(null)
  const t = useCopy(COPY)
  const nav = useMainNav()
  const close = useCallback(() => setSideOpen(false), [setSideOpen])
  usePanelFocus(sideOpen, panel, close)

  // Lock the page scroll while the drawer is open.
  useEffect(() => {
    if (!sideOpen) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    return () => {
      html.style.overflow = prev
    }
  }, [sideOpen])

  return (
    <>
      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          'fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none lg:hidden',
          sideOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <aside
        ref={panel}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.dialog}
        aria-hidden={!sideOpen}
        inert={!sideOpen}
        data-section="chrome-side"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col border-l border-line bg-canvas shadow-card-hover',
          'transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden',
          !sideOpen && closedPanel,
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-line px-4">
          <Wordmark className="text-xl leading-none" />
          <button
            type="button"
            aria-label={t.closeMenu}
            onClick={close}
            className="grid size-11 place-items-center rounded-xl text-heading transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-[calc(24px+env(safe-area-inset-bottom))]">
          <nav aria-label={t.mainMenu}>
            <ul className="grid gap-0.5">
              {nav.map((item) => {
                const current = isCurrent(pathname, item.to)
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={current ? 'page' : undefined}
                      onClick={close}
                      className={cn(
                        'flex min-h-12 items-center justify-between rounded-xl px-3 text-[1.0625rem] font-medium transition-colors',
                        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                        current ? 'bg-brand-soft text-brand' : 'text-heading hover:bg-slate-50',
                      )}
                    >
                      {item.label}
                      <ChevronRight aria-hidden="true" className="size-4 opacity-50" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="mt-8 border-t border-line pt-6">
            <h2 className="mb-3 text-xs font-semibold tracking-[0.12em] text-body uppercase">{t.language}</h2>
            <LanguageList />
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <WaButton fullWidth size="lg">
              WhatsApp {WHATSAPP_DISPLAY}
            </WaButton>
          </div>
        </div>
      </aside>
    </>
  )
}
