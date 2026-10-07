import { useId } from 'react'
import { cn } from '@/lib/utils'

// Guilloché rosette (DIRECTION §7.3): 24 closed curves r(θ) = 250 + 36·sin(6θ + φ), φ = i·π/12, rotated i·0.75°,
// sampled every 3°, plus circles at r 300 and r 206. Computed once at module load.
const ROSETTE_D = (() => {
  let d = ''
  for (let i = 0; i < 24; i++) {
    const ph = (i * Math.PI) / 12
    const rot = (i * 0.75 * Math.PI) / 180
    for (let k = 0; k <= 120; k++) {
      const t = (k * 3 * Math.PI) / 180
      const r = 250 + 36 * Math.sin(6 * t + ph)
      const x = (r * Math.cos(t + rot)).toFixed(1)
      const y = (r * Math.sin(t + rot)).toFixed(1)
      d += (k ? 'L' : 'M') + x + ' ' + y
    }
    d += 'Z'
  }
  return d
})()

/**
 * Banknote rosette in brass hairlines. Decorative: max opacity .12 (.10 on phone), at most two per page,
 * never behind a price, CTA or text. Size and place it with className (e.g. "absolute -right-40 -top-24 w-[640px] opacity-[.12]").
 */
export function Rosette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-300 -300 600 600"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      fill="none"
      stroke="var(--color-brass-500)"
      strokeWidth="0.7"
    >
      <path d={ROSETTE_D} vectorEffect="non-scaling-stroke" />
      <circle r="300" vectorEffect="non-scaling-stroke" />
      <circle r="206" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

type SealProps = {
  /** Existing strings of the same section, uppercased, joined with " · " and ending with " ·". */
  text: string
  className?: string
}

/** Guarantee seal (one per page, static, never spins). Hidden on phone by default. */
export function Seal({ text, className }: SealProps) {
  const arcId = `seal-arc-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  return (
    <span aria-hidden="true" className={cn('pointer-events-none relative grid size-[112px] place-items-center max-md:hidden lg:size-36', className)}>
      <svg viewBox="0 0 160 160" className="absolute inset-0 size-full">
        <circle cx="80" cy="80" r="78" fill="var(--z-card)" stroke="var(--color-brass-500)" />
        <circle cx="80" cy="80" r="56" fill="none" stroke="var(--color-brass-500)" opacity=".5" />
        <defs>
          <path id={arcId} d="M80,14 a66,66 0 1,1 -0.01,0" />
        </defs>
        <text fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" letterSpacing="1.2" fill="var(--z-accent)">
          <textPath href={`#${arcId}`} textLength="410" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <i className="ti ti-shield-check relative text-[32px] text-z-icon" />
    </span>
  )
}
