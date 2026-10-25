import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQ_ITEMS, type FaqItem } from './Faq.data'

type FaqListProps = {
  items?: FaqItem[]
  /** Item ids open on first render (default: the first question). */
  defaultOpen?: string[]
  /** Heading level of each question (h3 under a section h2 by default). */
  headingLevel?: 'h3' | 'h4'
  className?: string
}

/** The FAQ accordion on its own (+ turns into × when open). Reusable on inner pages. */
export function FaqList({ items = FAQ_ITEMS, defaultOpen, headingLevel: Heading = 'h3', className }: FaqListProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen ?? (items[0] ? [items[0].id] : [])))
  const baseId = useId()

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <ol className={cn('grid gap-3', className)}>
      {items.map((item, index) => {
        const isOpen = open.has(item.id)
        const buttonId = `${baseId}-q-${item.id}`
        const panelId = `${baseId}-a-${item.id}`
        return (
          <li
            key={item.id}
            className={cn(
              'rounded-2xl border bg-canvas transition-[border-color,box-shadow] duration-200',
              isOpen ? 'border-brand/25 shadow-card-hover' : 'border-line shadow-card hover:border-slate-300',
            )}
          >
            <Heading className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-start gap-3 rounded-2xl p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:gap-4 sm:p-5"
              >
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-lg leading-none sm:size-10"
                >
                  {item.emoji}
                </span>
                <span className="min-w-0 flex-1 self-center text-[0.9844rem] leading-snug font-semibold text-pretty text-heading sm:text-[1.0625rem]">
                  <span className="sr-only">{index + 1}. </span>
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1.5 grid size-7 shrink-0 place-items-center rounded-full border transition-[transform,background-color,color,border-color] duration-200 motion-reduce:transition-none',
                    isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'border-line text-body',
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 px-4 pb-5 text-[0.9375rem] leading-relaxed text-body sm:pr-16 sm:pb-6 sm:pl-[4.75rem] sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
