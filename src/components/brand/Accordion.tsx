import { useState, type ReactNode, type SyntheticEvent } from 'react'
import { cn } from '@/lib/utils'
import { Chip, IconTile } from './Labels'
import type { IconName } from './types'

/**
 * Open state of a native <details>, mirrored as an explicit aria-expanded on its <summary> (same value the
 * platform exposes; tests and scripts can read it as an attribute).
 */
function useDetailsOpen(defaultOpen?: boolean) {
  const [open, setOpen] = useState(!!defaultOpen)
  const onToggle = (e: SyntheticEvent<HTMLDetailsElement>) => setOpen(e.currentTarget.open)
  return { open, onToggle }
}

/** FAQ list: hairline on top, each row closes with a hairline. */
export function FaqList({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('border-t border-z-line', className)}>{children}</div>
}

type FaqItemProps = {
  question: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  /**
   * Wrap the question in a heading element. Leave it unset for FAQ rows: VoiceOver and some NVDA/Chrome
   * combinations flatten <summary> into a button, so a heading inside it drops out of heading navigation.
   * Keep the outline through the section H2 instead.
   */
  headingAs?: 'h3' | 'h4'
  className?: string
}

/**
 * FAQ row on native <details>: find-in-page still opens answers, aria-expanded comes from the platform,
 * the answer stays in the DOM. Height animates over 260ms where supported; the plus turns 45°.
 */
export function FaqItem({ question, children, defaultOpen, headingAs, className }: FaqItemProps) {
  const Q = headingAs ?? 'span'
  const { open, onToggle } = useDetailsOpen(defaultOpen)
  return (
    <details open={defaultOpen} onToggle={onToggle} className={cn('brand-disclosure group border-b border-z-line', className)}>
      <summary aria-expanded={open} className="flex cursor-pointer list-none items-start justify-between gap-6 py-[22px] font-sans text-faq text-z-fg">
        <Q className="font-sans text-faq text-z-fg">{question}</Q>
        <i
          className="ti ti-plus mt-0.5 shrink-0 text-[20px] text-evergreen-700 transition-transform duration-260 ease-calm group-open:rotate-45 vault:text-brass-300"
          aria-hidden="true"
        />
      </summary>
      <div className="max-w-[66ch] pb-6 font-sans text-copy text-z-soft">{children}</div>
    </details>
  )
}

/** Tip callout: 2px evergreen left rule on evergreen-100, bulb icon. */
export function GuideTip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('mt-4 flex gap-3 rounded-control border-l-2 border-evergreen-700 bg-evergreen-100 px-4 py-3.5 font-sans text-[0.9375rem] text-ink', className)}>
      <i className="ti ti-bulb mt-0.5 shrink-0 text-[18px] text-evergreen-700" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/** A value to type (URL, code): sand tag, semibold, tabular, breaks anywhere. On a sand ground pass className="bg-paper". */
export function Code({ children, className }: { children: ReactNode; className?: string }) {
  return <code className={cn('rounded-tag bg-sand px-1.5 py-0.5 font-sans font-semibold text-ink tabular-nums break-anywhere vault:bg-vault-raised vault:text-on-vault', className)}>{children}</code>
}

type GuideAccordionProps = {
  icon: IconName
  title: ReactNode
  /** Device tags as small chips (content strings: shown on every width, wrapping under the title on phone). */
  tags?: string[]
  /** Hide the tags below md, only when they would wrap past two lines on phone (§6.3-9). */
  hideTagsOnPhone?: boolean
  steps: ReactNode[]
  tip?: ReactNode
  defaultOpen?: boolean
  as?: 'h3' | 'h4'
  className?: string
  /** Extra content after the steps and tip. */
  children?: ReactNode
}

/** Guide accordion card: tile 44, serif title, device chips, chevron; numbered steps and an optional tip. */
export function GuideAccordion({ icon, title, tags, hideTagsOnPhone, steps, tip, defaultOpen, as: H = 'h3', className, children }: GuideAccordionProps) {
  const { open, onToggle } = useDetailsOpen(defaultOpen)
  return (
    <details open={defaultOpen} onToggle={onToggle} className={cn('brand-disclosure group rounded-card border border-z-line bg-z-card', className)}>
      <summary aria-expanded={open} className="flex cursor-pointer list-none items-center gap-4 rounded-card p-5 md:px-6">
        <IconTile icon={icon} size={44} />
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2">
          <H className="font-display text-title text-z-fg">{title}</H>
          {tags && tags.length > 0 && (
            <span className={cn('flex flex-wrap gap-2', hideTagsOnPhone && 'max-md:hidden')}>
              {tags.map((t) => (
                <Chip key={t} size="sm">
                  {t}
                </Chip>
              ))}
            </span>
          )}
        </span>
        <i
          className="ti ti-chevron-down shrink-0 text-[20px] text-evergreen-700 transition-transform duration-260 ease-calm group-open:rotate-180 vault:text-brass-300"
          aria-hidden="true"
        />
      </summary>
      <div className="px-5 pb-5 md:px-6 md:pb-6">
        <ol className="m-0 list-none p-0">
          {steps.map((s, i) => (
            <li key={i} className="grid grid-cols-[40px_1fr] gap-3 border-t border-z-line py-3.5">
              <span
                aria-hidden="true"
                data-label={String(i + 1)}
                className="font-display text-xl leading-[1.4] text-z-accent italic before:content-[attr(data-label)]"
              />
              <div className="font-sans text-copy text-z-body">{s}</div>
            </li>
          ))}
        </ol>
        {tip != null && <GuideTip>{tip}</GuideTip>}
        {children}
      </div>
    </details>
  )
}
