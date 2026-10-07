import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Chip, GuideTip, IconTile } from '@/components/brand'
import { cn } from '@/lib/utils'

type GuideRowProps = {
  icon: string
  title: string
  /** Device tags, shown as small chips under the title (collapsed or open). */
  tags: string[]
  steps: ReactNode[]
  tip: ReactNode
  /** Starts expanded (the first installation guide does). */
  initiallyOpen?: boolean
}

/** Accordion close animation (DIRECTION §8: accordion 260ms). */
const CLOSE_MS = 260

/**
 * Guide accordion in the kit's look (DIRECTION §6.3-9) on a real <button aria-expanded>: the button is the
 * title (its accessible name stays the guide title), and it is stretched over the whole header so the icon,
 * chips and chevron are part of the target. Rows toggle independently. The closed panel is
 * `hidden="until-found"`, so find-in-page still reaches the steps and opens the guide (beforematch).
 */
export function GuideRow({ icon, title, tags, steps, tip, initiallyOpen = false }: GuideRowProps) {
  const [open, setOpen] = useState(initiallyOpen)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstRun = useRef(true)
  const uid = useId()
  const buttonId = `${uid}-button`
  const panelId = `${uid}-panel`

  // Show at once on open; hide after the rows have collapsed on close.
  useLayoutEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (open) {
      firstRun.current = false
      el.removeAttribute('hidden')
      return
    }
    if (firstRun.current) {
      firstRun.current = false
      el.setAttribute('hidden', 'until-found')
      return
    }
    const timer = window.setTimeout(() => el.setAttribute('hidden', 'until-found'), CLOSE_MS)
    return () => window.clearTimeout(timer)
  }, [open])

  // Find-in-page revealed the content: mirror it in the state (and aria-expanded).
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const onMatch = () => setOpen(true)
    el.addEventListener('beforematch', onMatch)
    return () => el.removeEventListener('beforematch', onMatch)
  }, [])

  return (
    <div className="rounded-card border border-z-line bg-z-card">
      <div
        className={cn(
          'relative grid grid-cols-[40px_1fr_20px] items-center gap-x-4 gap-y-3 rounded-card p-5 md:grid-cols-[44px_1fr_20px] md:px-6',
          'has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-z-focus',
        )}
      >
        <IconTile icon={icon} className="row-span-2 self-start" />
        <h3 className="col-start-2 font-display text-title text-z-fg">
          <button
            type="button"
            id={buttonId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className="cursor-pointer text-left [text-wrap:balance] after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
          >
            {title}
          </button>
        </h3>
        <i
          aria-hidden="true"
          className={cn(
            'ti ti-chevron-down col-start-3 row-start-1 justify-self-end text-[20px] text-evergreen-700 transition-transform duration-260 ease-calm',
            open && 'rotate-180',
          )}
        />
        <ul className="col-start-2 col-end-4 m-0 flex list-none flex-wrap gap-2 p-0">
          {tags.map((tag) => (
            <li key={tag}>
              <Chip size="sm">{tag}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-260 ease-calm',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div ref={panelRef} id={panelId} role="region" aria-labelledby={buttonId}>
            <div className="px-5 pb-5 md:pr-6 md:pb-6 md:pl-[84px]">
              <ol className="m-0 list-none p-0">
                {steps.map((step, index) => (
                  <li key={index} className="grid grid-cols-[32px_1fr] gap-3 border-t border-z-line py-3.5">
                    <span
                      aria-hidden="true"
                      data-label={String(index + 1)}
                      className="font-display text-xl leading-[1.4] text-z-accent italic before:content-[attr(data-label)]"
                    />
                    <div className="font-sans text-copy text-z-body">{step}</div>
                  </li>
                ))}
              </ol>
              <GuideTip className="mt-2">{tip}</GuideTip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
