import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ToneContext, type SectionTone } from './tone'

const TONES: Record<SectionTone, string> = {
  white: 'bg-canvas',
  mist: 'bg-mist',
  'mist-fade': 'bg-linear-to-b from-mist to-canvas',
  night: 'bg-night text-slate-300 [color-scheme:dark]',
}

/** The shared container: max-w-6xl with a 16px phone gutter (24px from sm). */
export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)} {...props} />
}

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children'> & {
  tone?: SectionTone
  /** Skip the inner Container (full-bleed layouts). */
  bare?: boolean
  innerClassName?: string
  children?: ReactNode
}

/**
 * A page band: `<section>` with the vertical rhythm (py-16 md:py-24) and the inner container.
 * It is `relative isolate`, so an <Aura> inside sits behind the content without extra wrappers.
 */
export function Section({ tone = 'white', bare, className, innerClassName, children, ...props }: SectionProps) {
  return (
    <ToneContext.Provider value={tone}>
      <section className={cn('relative isolate py-16 md:py-24', TONES[tone], className)} {...props}>
        {bare ? children : <Container className={innerClassName}>{children}</Container>}
      </section>
    </ToneContext.Provider>
  )
}
