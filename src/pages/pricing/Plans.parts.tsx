import type { CSSProperties } from 'react'
import { useReveal } from '@/components/brand'
import { cn } from '@/lib/utils'

// Shop plans: the duration ruler that doubles as each card's divider. A 24-month scale (one tick per
// month, a longer tick every six) with the plan's own span drawn in ink (brass on the featured vault card).
// Purely decorative: aria-hidden, no text. With motion allowed the drawn span wipes in once, left to right,
// when the card scrolls into view; without JS or with reduced motion it is simply drawn. The observed element
// is the unclipped wrapper (a fully clipped target never reports an intersection).

const SCALE = 24
const TICKS = Array.from({ length: SCALE + 1 }, (_, i) => i)

function tickStyle(i: number): CSSProperties {
  // Keep the last tick inside the box so the 24-month end mark is not clipped.
  return { left: i === SCALE ? 'calc(100% - 1px)' : `${(i / SCALE) * 100}%` }
}

function Ticks({ upTo, className }: { upTo: number; className: string }) {
  return (
    <>
      {TICKS.filter((i) => i <= upTo).map((i) => (
        <span
          key={i}
          className={cn('absolute top-0 w-px', i % 6 === 0 ? 'h-3' : 'h-1.5', className)}
          style={tickStyle(i)}
        />
      ))}
    </>
  )
}

export function DurationRule({ months, index = 0, className }: { months: number; index?: number; className?: string }) {
  const { ref } = useReveal<HTMLSpanElement>(index)
  const span = Math.min(months, SCALE)
  return (
    <span ref={ref} data-rule="" aria-hidden="true" className={cn('pointer-events-none relative block h-3 w-full', className)}>
      {/* the full scale, quiet */}
      <span className="absolute inset-x-0 top-0 h-px bg-hairline-deep vault:bg-vault-line" />
      <Ticks upTo={SCALE} className="bg-hairline-deep vault:bg-vault-line" />
      {/* the plan's span, drawn */}
      <span
        className={cn(
          'absolute inset-0 [clip-path:inset(0_0_0_0)] transition-[clip-path] duration-[900ms] ease-calm',
          '[html.js-motion_[data-rule]:not([data-reveal=in])_&]:[clip-path:inset(0_100%_0_0)]',
        )}
        style={{ transitionDelay: `${150 + Math.min(index, 3) * 90}ms` }}
      >
        <span
          className="absolute top-0 left-0 h-px bg-ink vault:bg-brass-500"
          style={{ width: span === SCALE ? '100%' : `${(span / SCALE) * 100}%` }}
        />
        <Ticks upTo={span} className="bg-ink vault:bg-brass-500" />
      </span>
    </span>
  )
}
