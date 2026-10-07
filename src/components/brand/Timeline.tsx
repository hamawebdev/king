import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TimelineItem = { label: string; title: ReactNode; text?: ReactNode }

/**
 * Company milestones (Lancement · Croissance · Maintenant · Demain): a brass connector with evergreen
 * nodes, horizontal from lg, a vertical rail on phone. The last node is hollow.
 */
export function Timeline({ items, as: H = 'h3', className }: { items: TimelineItem[]; as?: 'h3' | 'h4'; className?: string }) {
  return (
    <ol
      style={{ '--tl-n': items.length, '--tl-end': `calc((100% - ${items.length - 1} * 2rem) / ${items.length} - 10px)` } as CSSProperties}
      className={cn(
        'relative m-0 grid list-none gap-10 p-0',
        // connector from lg: one horizontal line, first node centre → last node centre
        'lg:grid-cols-[repeat(var(--tl-n),minmax(0,1fr))] lg:gap-8',
        'lg:before:absolute lg:before:top-[9.5px] lg:before:left-2.5 lg:before:right-(--tl-end) lg:before:h-px lg:before:bg-brass-500',
        className,
      )}
    >
      {items.map((it, i) => {
        const last = i === items.length - 1
        return (
          <li
            key={it.label}
            className={cn(
              'relative pt-1 pl-10 lg:pt-12 lg:pl-0',
              // phone/tablet rail: a segment from this node to the next one (none after the last node)
              !last && 'before:absolute before:top-2.5 before:-bottom-10 before:left-[9.5px] before:w-px before:bg-brass-500 lg:before:hidden',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-0 left-0 size-5 rounded-full ring-[5px] ring-evergreen-100',
                last ? 'border border-evergreen-600 bg-z-card' : 'bg-evergreen-600',
              )}
            />
            <p className="eyebrow">{it.label}</p>
            <H className="mt-3 font-display text-title text-z-fg">{it.title}</H>
            {it.text != null && <p className="mt-2 font-sans text-small text-z-soft">{it.text}</p>}
          </li>
        )
      })}
    </ol>
  )
}
