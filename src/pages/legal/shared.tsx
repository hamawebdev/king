import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Aura, Container, WhatsAppIcon } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { BRAND, WA_CONTACT_MESSAGE, WHATSAPP_DISPLAY, waLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { usePageTitle } from '@/lib/usePageTitle'
import { Breadcrumbs } from '../theme/PageHero'

/** Bold inline brand mention, as the documents do. */
export function B() {
  return <strong className="font-semibold text-heading">{BRAND}</strong>
}

/** The contact channel: the official WhatsApp line (opens a chat in a new tab). `bare` drops the « WhatsApp » word. */
export function Wa({ bare }: { bare?: boolean }) {
  return (
    <a
      href={waLink(WA_CONTACT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium whitespace-nowrap text-brand underline underline-offset-2 hover:text-brand-hover"
    >
      {bare ? WHATSAPP_DISPLAY : `WhatsApp ${WHATSAPP_DISPLAY}`}
    </a>
  )
}

// ── Document layout ──────────────────────────────────────────────────────────────
// Aura header with breadcrumb and H1; from xl a 3/9 split with a sticky table of contents built from the
// headings marked data-toc (current item heading colour + brand bar). Below xl: one readable column.

type TocItem = { id: string; label: string }

// Layout labels: breadcrumb root and table-of-contents name (visible label and nav aria-label).
const LAYOUT_COPY: Localized<{ home: string; toc: string }> = {
  fr: { home: 'Accueil', toc: 'Sommaire' },
  en: { home: 'Home', toc: 'Contents' },
  de: { home: 'Startseite', toc: 'Inhalt' },
  es: { home: 'Inicio', toc: 'Índice' },
  pt: { home: 'Início', toc: 'Índice' },
  fi: { home: 'Etusivu', toc: 'Sisällys' },
}

const TOC_OFFSET = 140

/**
 * One legal document: its name is the h1, the breadcrumb's last item and the page title. `heading` overrides the h1
 * text only, e.g. a long German compound with a soft hyphen (U+00AD) so it can break at 375 px.
 */
export function DocLayout({
  title,
  heading,
  lead,
  children,
}: {
  title: string
  heading?: string
  lead?: ReactNode
  children: ReactNode
}) {
  usePageTitle(`${title} | ${BRAND}`)
  const t = useCopy(LAYOUT_COPY)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [toc, setToc] = useState<TocItem[]>([])
  const [current, setCurrent] = useState<string | undefined>()

  useEffect(() => {
    const root = bodyRef.current
    if (!root) return
    const heads = Array.from(root.querySelectorAll<HTMLElement>('[data-toc]'))
    setToc(heads.map((h) => ({ id: h.id, label: (h.textContent || '').trim() })))
    let raf = 0
    const update = () => {
      raf = 0
      let cur = heads[0]?.id
      for (const h of heads) {
        if (h.getBoundingClientRect().top <= TOC_OFFSET) cur = h.id
        else break
      }
      setCurrent(cur)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <header className="relative isolate overflow-hidden bg-canvas pt-8 pb-12 md:pt-10 md:pb-16">
        <Aura variant="hero" />
        <Container>
          <Breadcrumbs items={[{ label: t.home, to: '/' }, { label: title }]} className="mb-10 md:mb-14" />
          <div className="max-w-3xl">
            <h1 className="text-[2.125rem] leading-[1.08] font-bold tracking-tight text-balance text-heading sm:text-5xl">
              {heading ?? title}
            </h1>
            {lead ? <div className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{lead}</div> : null}
          </div>
        </Container>
      </header>

      <Container className="pb-16 md:pb-24">
        <div className="border-t border-line pt-10 md:pt-14 xl:grid xl:grid-cols-12 xl:gap-x-8">
          <aside className="hidden xl:col-span-3 xl:block">
            {toc.length > 0 ? (
              <nav aria-label={t.toc} className="sticky top-28 pr-6">
                <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">{t.toc}</p>
                <ol className="grid border-l border-line">
                  {toc.map((item) => {
                    const on = item.id === current
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          aria-current={on ? 'location' : undefined}
                          className={cn(
                            '-ml-px block border-l-2 py-2 pl-4 text-sm leading-snug font-medium transition-colors hover:text-heading',
                            on ? 'border-brand text-heading' : 'border-transparent text-slate-500',
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </nav>
            ) : null}
          </aside>
          <div ref={bodyRef} className="max-w-[68ch] xl:col-span-9">
            {children}
          </div>
        </div>
      </Container>
    </>
  )
}

// ── Text primitives ───────────────────────────────────────────────────────────────────────────────

const copyClass = 'text-base leading-[1.75] text-body max-w-[68ch]'

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn(copyClass, 'mt-5 first:mt-0', className)}>{children}</p>
}

/** Section heading of a document (listed in the table of contents). */
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      data-toc=""
      className="mt-10 scroll-mt-24 border-t border-line pt-10 text-xl leading-snug font-semibold tracking-tight text-heading first:mt-0 first:border-t-0 first:pt-0 md:text-2xl"
    >
      {children}
    </h2>
  )
}

export function UL({ children, cols }: { children: ReactNode; cols?: boolean }) {
  return (
    <ul className={cn(copyClass, 'mt-5 grid list-disc gap-y-2.5 pl-5 marker:text-brand [&>li]:pl-1.5', cols && 'sm:grid-cols-2 sm:gap-x-10')}>
      {children}
    </ul>
  )
}

/** Small statement block (contact lines, pack list). */
export function Contact({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 grid max-w-[68ch] gap-1.5 rounded-2xl border border-line bg-mist/60 px-5 py-4 text-base leading-relaxed text-body [&_.lbl]:text-slate-500">
      {children}
    </div>
  )
}

/** Highlighted notice (a warning the document sets in bold). */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 grid max-w-[68ch] gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-6">
      <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
        <AlertTriangle className="size-5" />
      </span>
      <div>{children}</div>
    </div>
  )
}

/** Closing help block: the document's own help heading and its WhatsApp line. */
export function HelpCard({ id, heading, children }: { id: string; heading: ReactNode; children: ReactNode }) {
  return (
    <div className="mt-14 grid max-w-[68ch] gap-4 rounded-2xl border border-line bg-canvas p-5 shadow-card sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-7">
      <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-whatsapp/12 text-whatsapp-hover">
        <WhatsAppIcon className="size-5" />
      </span>
      <div>
        <h2 id={id} data-toc="" className="scroll-mt-24 text-xl font-semibold tracking-tight text-heading">
          {heading}
        </h2>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  )
}

/**
 * Numbered requirement. The numeral stays in the item's own text, exactly as written; ::first-letter
 * (the digit) sets it in the brand blue.
 */
export function NumberedItem({ children }: { children: ReactNode }) {
  return (
    <li className="border-b border-line py-4 last:border-b-0 last:pb-0 first-letter:pr-1 first-letter:font-semibold first-letter:text-brand">
      {children}
    </li>
  )
}

/** Refund schedule set like a statement: period on the left, share returned on the right. */
export function ScheduleList({ rows, suffix }: { rows: [string, string][]; suffix: string }) {
  return (
    <ul className="mt-6 max-w-[68ch] border-t border-heading">
      {rows.map(([when, pct]) => (
        <li key={when} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
          <span className="text-base text-body">{when}</span>
          <span className="text-right">
            <span className="text-2xl font-bold tracking-tight text-heading tabular-nums">{pct}</span>{' '}
            <span className="text-sm font-medium text-slate-500">{suffix}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
