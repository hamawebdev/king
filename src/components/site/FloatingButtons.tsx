import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { WhatsAppIcon } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { waLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { scrollToTop } from './SiteFooter.scroll'

const fr = { top: 'Retour en haut', whatsapp: 'Contacter NovaStream sur WhatsApp' }

const COPY: Localized<typeof fr> = {
  fr,
  en: { top: 'Back to top', whatsapp: 'Contact NovaStream on WhatsApp' },
  de: { top: 'Nach oben', whatsapp: 'NovaStream auf WhatsApp kontaktieren' },
  es: { top: 'Volver arriba', whatsapp: 'Contactar con NovaStream por WhatsApp' },
  pt: { top: 'Voltar ao topo', whatsapp: 'Contactar a NovaStream pelo WhatsApp' },
  fi: { top: 'Takaisin ylös', whatsapp: 'Ota yhteyttä NovaStreamiin WhatsAppissa' },
}

/**
 * Spec S15 floating buttons, on every page: the WhatsApp bubble pinned bottom-right (#25D366 → #20BA5A)
 * and, stacked above it once the visitor has scrolled, the back-to-top ↑ button.
 */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  const t = useCopy(COPY)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      data-section="chrome-floating"
      className="pointer-events-none fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <button
        type="button"
        aria-label={t.top}
        onClick={scrollToTop}
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={cn(
          'grid size-11 place-items-center rounded-full border border-line bg-canvas/95 text-heading shadow-card-hover backdrop-blur',
          'transition-[opacity,transform,background-color] duration-200 hover:bg-slate-50 motion-reduce:transition-none',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
          showTop ? 'pointer-events-auto opacity-100' : 'translate-y-2 opacity-0',
        )}
      >
        <ArrowUp aria-hidden="true" className="size-5" />
      </button>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        className={cn(
          'pointer-events-auto grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-cta-wa',
          'transition-[background-color,transform] duration-200 hover:bg-whatsapp-hover motion-safe:hover:-translate-y-0.5',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-hover',
        )}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  )
}
