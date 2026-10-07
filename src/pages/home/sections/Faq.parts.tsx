import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const ACCORDION_MS = 260

/**
 * FAQ row (DIRECTION §6.3-8 look, APG accordion markup): a heading holding a button with aria-expanded,
 * the answer below it. A closed answer stays in the DOM behind `hidden="until-found"`, so find-in-page
 * still reaches it and opens the row (beforematch). Height animates 0fr → 1fr over 260ms; on close the
 * answer is hidden once the animation has run. The plus turns 45° when open.
 */
export function FaqRow({ question, children, defaultOpen = false }: { question: ReactNode; children: ReactNode; defaultOpen?: boolean }) {
  const uid = useId()
  const buttonId = `${uid}-q`
  const panelId = `${uid}-a`
  const panelRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(defaultOpen)
  // Answer rendered (not hidden): true while open and during the closing animation.
  const [shown, setShown] = useState(defaultOpen)

  useEffect(() => {
    if (open) return
    const t = window.setTimeout(() => setShown(false), ACCORDION_MS)
    return () => window.clearTimeout(t)
  }, [open])

  // hidden="until-found" is set on the DOM node: React treats `hidden` as a boolean attribute.
  useLayoutEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (open || shown) el.removeAttribute('hidden')
    else el.setAttribute('hidden', 'until-found')
  }, [open, shown])

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const onMatch = () => {
      setShown(true)
      setOpen(true)
    }
    el.addEventListener('beforematch', onMatch)
    return () => el.removeEventListener('beforematch', onMatch)
  }, [])

  const toggle = () => {
    if (!open) setShown(true)
    setOpen(!open)
  }

  return (
    <div className="border-b border-z-line">
      <h3 className="font-sans text-faq text-z-fg">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className={cn(
            'group flex w-full cursor-pointer items-start justify-between gap-6 rounded-control py-[22px] text-left font-sans text-faq text-z-fg',
            'transition-colors duration-180 ease-calm hover:text-evergreen-700',
            'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-z-focus',
          )}
        >
          <span className="min-w-0">{question}</span>
          <i
            aria-hidden="true"
            className={cn(
              'ti ti-plus mt-0.5 shrink-0 text-[20px] text-evergreen-700 transition-transform duration-260 ease-calm',
              open && 'rotate-45',
            )}
          />
        </button>
      </h3>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-260 ease-calm',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div ref={panelRef} id={panelId} className="min-h-0 overflow-hidden">
          <p className="max-w-[66ch] pr-11 pb-6 font-sans text-copy text-z-soft max-md:pr-0">{children}</p>
        </div>
      </div>
    </div>
  )
}
