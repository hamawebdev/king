import { useState, type ReactNode, type SyntheticEvent } from 'react'
import { GuideTip, IconTile } from '@/components/brand'
import { cn } from '@/lib/utils'

// Building blocks of the three download guides (DIRECTION §6.3-9, guide accordion). The kit's
// GuideAccordion numbers steps by position and only takes h3/h4; these guides keep their h2 titles
// and, for KODI, the content's own shortcut numbers, so the card is composed here from the same recipe.
//
// One grid runs through every card: a marker column under the 44px icon tile (numerals, bullets,
// brass rules) and a text column aligned with the title (60px in on phone, 64px from md).

/** Text column offset: tile 44 + summary gap (16 phone / 20 md). */
const TEXT_COL = 'pl-[60px] md:pl-16'

/** Guide card on native <details>: tile 44, serif h2, chevron; the body animates through .brand-disclosure. */
export function GuideCard({
  icon,
  title,
  defaultOpen,
  children,
}: {
  icon: string
  title: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(!!defaultOpen)
  const onToggle = (e: SyntheticEvent<HTMLDetailsElement>) => setOpen(e.currentTarget.open)
  return (
    <details
      open={defaultOpen}
      onToggle={onToggle}
      className="brand-disclosure group rounded-card border border-z-line bg-z-card transition-[border-color,box-shadow] duration-180 ease-calm open:shadow-lift hover:border-hairline-deep"
    >
      <summary
        aria-expanded={open}
        className="flex cursor-pointer list-none items-center gap-4 rounded-card p-5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-z-focus md:gap-5 md:px-7 md:py-6"
      >
        <IconTile icon={icon} size={44} />
        <h2 className="min-w-0 flex-1 font-display text-title-lg text-z-fg">{title}</h2>
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-control border border-z-line text-evergreen-700 transition-colors duration-180 ease-calm group-hover:border-hairline-strong group-open:border-ink group-open:bg-ink/6 group-open:text-ink"
        >
          <i className="ti ti-chevron-down text-[18px] transition-transform duration-260 ease-calm group-open:rotate-180" />
        </span>
      </summary>
      <div className="px-5 pb-6 md:px-7 md:pb-8">{children}</div>
    </details>
  )
}

/**
 * Caps label of a guide ("RACCOURCIS :"): the eyebrow recipe (§6.9), its 28px brass rule sitting in the
 * marker column and the words starting on the text column.
 */
export function GuideLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-8 font-sans text-[0.75rem] leading-[1.4] font-semibold tracking-[0.14em] text-z-accent uppercase before:h-px before:w-7 before:shrink-0 before:bg-brass-500 md:gap-9">
      {children}
    </p>
  )
}

/** Plain lead-in line, on the text column. */
export function GuideLine({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn(TEXT_COL, 'font-sans text-small text-z-soft', className)}>{children}</p>
}

/** Tip callout (kit GuideTip) with its bulb in the marker column and its words on the text column. */
export function GuideAside({ children }: { children: ReactNode }) {
  return (
    <GuideTip className="mt-0 gap-[26px] pl-3.5 md:gap-[30px]">
      {children}
    </GuideTip>
  )
}

/** Step list: hairline-ruled rows. */
export function GuideSteps({ ordered, children }: { ordered?: boolean; children: ReactNode }) {
  const List = ordered ? 'ol' : 'ul'
  return <List className="m-0 list-none border-b border-z-line p-0">{children}</List>
}

/**
 * One step row with a hanging marker (the text stays one inline run):
 * - `pos`    list position as pseudo-content (aria-hidden, no text node), serif italic brass;
 * - `bullet` the content's bullet, drawn as a short brass rule.
 */
export function GuideStep({ marker, children }: { marker: 'pos' | 'bullet'; children: ReactNode }) {
  const hang = '-ml-[60px] inline-block w-[60px] md:-ml-16 md:w-16'
  return (
    <li className={cn(TEXT_COL, 'border-t border-z-line py-4 font-sans text-copy text-z-body')}>
      {marker === 'pos' ? (
        <span
          aria-hidden="true"
          className={cn(hang, 'font-display text-[1.375rem] leading-none text-brass-700 italic before:content-[counter(list-item)]')}
        />
      ) : (
        <span aria-hidden="true" className={cn(hang, 'align-middle')}>
          <span className="block h-px w-4 bg-brass-500" />
        </span>
      )}
      {children}
    </li>
  )
}

/**
 * Shortcut row: the key ("1-Touche Menu :" as one text node, so the content's own number stays glued to
 * it; the numeral is set in the serif italic through ::first-letter) beside what it does; stacked on phone.
 */
export function ShortcutRow({ keyName, children }: { keyName: string; children: ReactNode }) {
  return (
    <li className="grid gap-x-8 gap-y-1 border-t border-z-line py-4 md:grid-cols-[13rem_1fr]">
      <span className="block font-sans text-copy font-semibold text-z-fg first-letter:pr-0.5 first-letter:font-display first-letter:text-[1.375rem] first-letter:leading-none first-letter:font-medium first-letter:text-brass-700 first-letter:italic">
        {keyName}
      </span>
      <span className="font-sans text-copy text-z-body">{children}</span>
    </li>
  )
}

/** Key name inside a sentence ("Astuces :"). */
export function KeyName({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-z-fg">{children}</strong>
}
