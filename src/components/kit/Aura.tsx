import { cn } from '@/lib/utils'

/**
 * Captions.ai ambient glow: soft blurred peach / amber / pink (left) and sky blue (right) on white.
 * Absolutely positioned at z-index -1 — the parent needs `relative isolate` (a kit <Section> already is).
 * `hero` drifts very slowly (off under prefers-reduced-motion) and fades out towards the bottom; `soft` is a
 * quieter, static, centre-weighted wash for mid-page bands.
 */
export function Aura({ variant = 'soft', className }: { variant?: 'hero' | 'soft'; className?: string }) {
  return <div aria-hidden="true" className={cn('aura', variant === 'hero' ? 'aura-hero' : 'aura-soft', className)} />
}
