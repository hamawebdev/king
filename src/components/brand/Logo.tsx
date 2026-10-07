import { BRAND } from '@/lib/site'
import { cn } from '@/lib/utils'
import { MARK, NOVA_PATH, N_PATH, STREAM_PATH, WORDMARK } from './logo-paths'

const TONE = {
  /** Follows the zone: ink + brass-700 on light, on-vault + brass-300 on vault. */
  auto: { nova: 'var(--z-fg)', stream: 'var(--z-accent)' },
  light: { nova: 'var(--color-ink)', stream: 'var(--color-brass-700)' },
  vault: { nova: 'var(--color-on-vault)', stream: 'var(--color-brass-300)' },
} as const

type WordmarkProps = {
  /** Default auto (zone-aware). Force light or vault when the zone variables are not set. */
  tone?: keyof typeof TONE
  /** header 28px tall, footer 32px tall. */
  size?: 'header' | 'footer'
  className?: string
}

/**
 * NovaStream wordmark (inline SVG outlines): "Nova" Newsreader 600, "Stream" Newsreader italic 500 in the
 * accent, then a brass-500 dot. role="img", accessible name "NovaStream".
 */
export function Wordmark({ tone = 'auto', size = 'header', className }: WordmarkProps) {
  const c = TONE[tone]
  return (
    <svg
      role="img"
      aria-label={BRAND}
      viewBox={WORDMARK.viewBox}
      className={cn('block w-auto shrink-0', size === 'footer' ? 'h-8' : 'h-7', className)}
    >
      <path d={NOVA_PATH} fill={c.nova} />
      <path d={STREAM_PATH} fill={c.stream} />
      <circle cx={WORDMARK.dot.cx} cy={WORDMARK.dot.cy} r={WORDMARK.dot.r} fill="var(--color-brass-500)" />
    </svg>
  )
}

/** The app mark ("N" + brass dot), decorative. The N takes currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox={MARK.viewBox} className={cn('block h-6 w-auto shrink-0', className)}>
      <path d={N_PATH} fill="currentColor" />
      <circle cx={MARK.dot.cx} cy={MARK.dot.cy} r={MARK.dot.r} fill="var(--color-brass-500)" />
    </svg>
  )
}
