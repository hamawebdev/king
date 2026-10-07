import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

// Stand-in for photos, illustrations and product shots. Size and crop it with className/style
// to match the original image's box. Tones are drawn from the brand palette (paper, sand, brass, evergreen).
const TONES = {
  photo: 'linear-gradient(135deg, var(--color-sand) 0%, var(--color-sand-deep) 55%, var(--color-hairline-deep) 100%)',
  warm: 'linear-gradient(135deg, var(--color-brass-100) 0%, var(--color-brass-300) 55%, var(--color-brass-500) 100%)',
  illustration: 'linear-gradient(135deg, var(--color-brass-100) 0%, var(--color-brass-300) 50%, var(--color-evergreen-600) 100%)',
  product: 'linear-gradient(160deg, var(--color-ivory) 0%, var(--color-sand-deep) 45%, var(--color-evergreen-800) 100%)',
  dark: 'linear-gradient(160deg, var(--color-evergreen-800) 0%, var(--color-vault) 100%)',
  light: 'linear-gradient(135deg, var(--color-ivory) 0%, var(--color-sand) 100%)',
} as const

export type PlaceholderTone = keyof typeof TONES

type Props = {
  className?: string
  style?: CSSProperties
  tone?: PlaceholderTone
  label?: string
  /** Hide the small image glyph (for backgrounds and tiny thumbnails). */
  bare?: boolean
}

export function Placeholder({ className, style, tone = 'photo', label = 'Image', bare }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn('relative overflow-hidden', className)}
      style={{ backgroundImage: TONES[tone], ...style }}
    >
      {!bare && (
        <svg
          viewBox="0 0 24 24"
          className="absolute top-1/2 left-1/2 size-[18%] max-h-12 max-w-12 min-h-4 min-w-4 -translate-x-1/2 -translate-y-1/2 opacity-35"
          fill="none"
          stroke="var(--color-ivory)"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M21 16l-5-5-8 8" />
        </svg>
      )}
    </div>
  )
}
