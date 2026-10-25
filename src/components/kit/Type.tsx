import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSectionTone } from './tone'

type EyebrowTone = 'brand' | 'neutral' | 'onDark'

const EYEBROW_TONES: Record<EyebrowTone, string> = {
  brand: 'border-brand/15 bg-brand-soft text-brand',
  neutral: 'border-line bg-canvas text-body shadow-card',
  onDark: 'border-white/15 bg-white/10 text-white',
}

type EyebrowProps = ComponentPropsWithoutRef<'p'> & { tone?: EyebrowTone }

/** Small uppercase pill badge for the spec's « Badge » / « Badge Eyebrow » lines. Defaults to onDark in a night Section. */
export function Eyebrow({ tone, className, ...props }: EyebrowProps) {
  const sectionTone = useSectionTone()
  const t = tone ?? (sectionTone === 'night' ? 'onDark' : 'brand')
  return (
    <p
      className={cn(
        'inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-center text-[11px] leading-snug font-semibold tracking-[0.08em] text-balance uppercase sm:text-xs',
        EYEBROW_TONES[t],
        className,
      )}
      {...props}
    />
  )
}

type SectionHeadingProps = {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  as?: 'h1' | 'h2' | 'h3'
  /** id for the heading element (aria-labelledby targets). */
  id?: string
  className?: string
}

const TITLE_SIZES = {
  h1: 'text-[2.125rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]',
  h2: 'text-[1.875rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]',
  h3: 'text-2xl leading-tight sm:text-[1.75rem]',
}

/** Eyebrow + heading + subtitle block that opens a section. */
export function SectionHeading({ eyebrow, title, subtitle, align = 'center', as: Tag = 'h2', id, className }: SectionHeadingProps) {
  const night = useSectionTone() === 'night'
  const centered = align === 'center'
  return (
    <div className={cn('flex flex-col gap-4', centered ? 'mx-auto max-w-3xl items-center text-center' : 'items-start text-left', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag id={id} className={cn('font-sans font-bold tracking-tight text-balance', TITLE_SIZES[Tag], night ? 'text-white' : 'text-heading')}>
        {title}
      </Tag>
      {subtitle ? (
        <p className={cn('max-w-2xl text-base leading-relaxed text-pretty sm:text-lg', night ? 'text-slate-300' : 'text-body')}>{subtitle}</p>
      ) : null}
    </div>
  )
}
