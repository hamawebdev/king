import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

// Stand-in for photos, illustrations and product shots. Size and crop it with className/style
// to match the original image's box; the tone only approximates the original's overall colour.
const TONES = {
  photo: 'linear-gradient(135deg, #d9dee7 0%, #c4cbd8 55%, #b3bccc 100%)',
  warm: 'linear-gradient(135deg, #f6e7c8 0%, #f1cf86 55%, #e9b44c 100%)',
  illustration: 'linear-gradient(135deg, #fde9a6 0%, #f8cf4a 50%, #37b9c3 100%)',
  product: 'linear-gradient(160deg, #eef1f6 0%, #c9d2e3 45%, #24306b 100%)',
  dark: 'linear-gradient(160deg, #2b3a63 0%, #121a3a 100%)',
  light: 'linear-gradient(135deg, #f4f6fa 0%, #e6eaf1 100%)',
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
          stroke="#ffffff"
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
