import { useEffect, useRef, useState, type ReactNode } from 'react'
import { IconTile, Rosette } from '@/components/brand'
import { BRAND, SITE_DOMAIN } from '@/lib/site'
import { cn } from '@/lib/utils'

// Placeholder contact address shown as plain text (the original prints its address unlinked).
export const LEGAL_EMAIL = `info@${SITE_DOMAIN}`

/** Bold inline brand mention, as the original documents do. */
export function B() {
  return <strong className="font-semibold text-ink">{BRAND}</strong>
}

/** The contact address, unlinked like the original; wraps anywhere on narrow screens. */
export function Mail() {
  return <span className="break-anywhere font-medium text-ink">{LEGAL_EMAIL}</span>
}

// ── Document layout (DIRECTION §9.7) ──────────────────────────────────────────────────────────────
// H1 display-lg over a hairline; from xl a 3/9 split with a sticky table of contents built from the
// headings marked data-toc (current item ink + 1px brass bar). Below xl: one max-w-text column.

type TocItem = { id: string; label: string }

const TOC_OFFSET = 140

export function DocLayout({ title, lead, children }: { title: ReactNode; lead?: ReactNode; children: ReactNode }) {
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

  // `text-copy` on the container makes every 68ch below resolve against the body size, so rules,
  // cards and paragraphs share one measure. Below xl the whole document is that single column.
  return (
    <div className="mx-auto max-w-content px-gutter font-sans text-copy">
      <div className="relative mx-auto max-w-[68ch] xl:max-w-none">
        <header className="relative pt-hero pb-10 md:pb-14 xl:grid xl:grid-cols-12 xl:gap-x-grid">
          <Rosette className="absolute -top-28 -left-44 hidden w-[420px] opacity-[.10] xl:block" />
          <div className="relative xl:col-span-9 xl:col-start-4">
            <span aria-hidden="true" className="block h-px w-7 bg-brass-500" />
            <h1 className="mt-6 font-display text-display-lg text-z-fg">{title}</h1>
            {lead ? <div className="mt-6 max-w-[56ch] font-sans text-lead text-z-soft">{lead}</div> : null}
          </div>
        </header>

        <div className="border-t border-hairline pt-10 pb-section md:pt-14 xl:grid xl:grid-cols-12 xl:gap-x-grid">
          <aside className="hidden xl:col-span-3 xl:block">
            {toc.length > 0 ? (
              <nav aria-label="Sommaire" className="sticky top-28 pr-6">
                <ol className="grid border-l border-hairline">
                  {toc.map((item) => {
                    const on = item.id === current
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          aria-current={on ? 'location' : undefined}
                          className={cn(
                            '-ml-px block border-l py-2 pl-4 font-sans text-meta leading-[1.4] font-medium',
                            'transition-colors duration-180 ease-calm hover:text-ink',
                            on ? 'border-brass-500 text-ink' : 'border-transparent text-ink-muted',
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
          <div ref={bodyRef} className="max-w-[68ch] xl:col-span-9 xl:col-start-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Text primitives ───────────────────────────────────────────────────────────────────────────────

const copyClass = 'font-sans text-copy leading-[1.7] text-ink-body max-w-[68ch]'

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn(copyClass, 'mt-5 first:mt-0', className)}>{children}</p>
}

/**
 * Section heading of a document (listed in the table of contents).
 * - `major`: the documents' own H2 level → display-sm.
 * - `title`: mixed-case H3 sections → title.
 * - `label`: headings the original sets in capitals → Hanken label behind a brass rule (no serif capitals);
 *   tracked only when the string is in capitals (`caps`, default true).
 */
export function H2({
  id,
  tone = 'major',
  caps = true,
  children,
}: {
  id: string
  tone?: 'major' | 'title' | 'label'
  caps?: boolean
  children: ReactNode
}) {
  return (
    <h2
      id={id}
      data-toc=""
      className={cn(
        'scroll-mt-[88px] border-t border-hairline first:mt-0 first:border-t-0 first:pt-0',
        tone === 'major' && 'mt-10 pt-10 font-display text-display-sm text-z-fg md:mt-12 md:pt-12',
        tone === 'title' && 'mt-8 pt-8 font-display text-title text-z-fg md:mt-10 md:pt-10',
        tone === 'label' &&
          'mt-8 flex items-center gap-3 pt-8 font-sans text-[0.9375rem] leading-[1.35] font-semibold text-ink md:mt-10 md:pt-10',
        tone === 'label' && (caps ? 'tracking-[0.08em]' : 'tracking-[0.01em]'),
      )}
    >
      {tone === 'label' ? <span aria-hidden="true" className="h-px w-7 shrink-0 bg-brass-500" /> : null}
      {children}
    </h2>
  )
}

export function UL({ children, cols }: { children: ReactNode; cols?: boolean }) {
  return (
    <ul
      className={cn(
        copyClass,
        'mt-5 grid list-disc gap-y-2.5 pl-5 marker:text-brass-700 [&>li]:pl-1.5',
        cols && 'sm:grid-cols-2 sm:gap-x-10',
      )}
    >
      {children}
    </ul>
  )
}

/** Contact lines (Courriel / Rubrique en ligne) set as a small statement block. */
export function Contact({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 grid max-w-[68ch] gap-1.5 rounded-card border border-hairline bg-ivory px-5 py-4 font-sans text-copy leading-[1.6] text-ink-body [&_.lbl]:text-ink-muted">
      {children}
    </div>
  )
}

/** Highlighted notice (a warning the document sets in bold). */
export function Callout({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="mt-10 grid max-w-[68ch] gap-4 rounded-card border border-hairline bg-ivory p-card sm:grid-cols-[auto_1fr] sm:gap-5">
      <IconTile icon={icon} />
      <div>{children}</div>
    </div>
  )
}

/** Closing help block: the document's own help heading and its contact line. */
export function HelpCard({
  id,
  heading,
  tone = 'title',
  children,
}: {
  id: string
  heading: ReactNode
  tone?: 'title' | 'label'
  children: ReactNode
}) {
  return (
    <div className="mt-14 grid max-w-[68ch] gap-4 rounded-panel border border-hairline bg-ivory p-card sm:grid-cols-[auto_1fr] sm:gap-5">
      <IconTile icon="ti-mail" />
      <div>
        <h2
          id={id}
          data-toc=""
          className={cn(
            'scroll-mt-[88px]',
            tone === 'title'
              ? 'font-display text-title-lg text-z-fg'
              : 'pt-1 font-sans text-[0.9375rem] leading-[1.35] font-semibold tracking-[0.08em] text-ink',
          )}
        >
          {heading}
        </h2>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  )
}
