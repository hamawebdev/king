import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu } from 'lucide-react'
import { WhatsAppIcon, buttonClasses } from '@/components/kit'
import { BRAND, MAIN_NAV, isCurrent, waLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { useChrome } from './chrome-context'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Wordmark } from './SiteHeader.wordmark'

const navLinkClass =
  'relative inline-flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] font-medium text-body transition-colors hover:text-heading ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[current=page]:text-heading ' +
  'aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-1.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-brand'

/**
 * Sticky white header: wordmark, main nav (from lg), language menu, WhatsApp CTA and, below lg, the menu toggle.
 * Transparent border at the top of the page; a hairline, blur and soft shadow once scrolled.
 */
export function SiteHeader() {
  const { pathname } = useLocation()
  const { setSideOpen } = useChrome()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="Header"
      data-section="chrome-header"
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200',
        scrolled
          ? 'border-line bg-canvas/85 shadow-[0_1px_12px_-6px_rgb(15_23_42/0.12)] backdrop-blur-md backdrop-saturate-150'
          : 'border-transparent bg-canvas',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          aria-label={`${BRAND} — accueil`}
          className="mr-auto inline-flex min-h-11 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:mr-0 lg:justify-self-start"
        >
          <Wordmark className="text-[1.375rem] leading-none sm:text-2xl" />
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} aria-current={isCurrent(pathname, item.to) ? 'page' : undefined} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 lg:justify-self-end">
          <LanguageSwitcher />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={buttonClasses({
              variant: 'whatsapp',
              className: 'size-11 min-h-11 px-0 sm:w-auto sm:px-4',
            })}
          >
            <WhatsAppIcon className="size-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-haspopup="dialog"
            onClick={() => setSideOpen(true)}
            className="grid size-11 place-items-center rounded-xl text-heading transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          >
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
