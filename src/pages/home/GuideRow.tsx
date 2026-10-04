import { useState, type ReactNode } from 'react'
import { cx } from './styles'

type GuideRowProps = {
  title: ReactNode
  icon?: string
  /** Starts expanded (the first installation guide does). */
  initiallyOpen?: boolean
  /** FAQ mode: always expanded, no toggle glyph, plain cursor. */
  pinned?: boolean
  children: ReactNode
}

/**
 * Collapsible row. Rows toggle independently (several can be open at once); the panel animates its
 * max-height over 350ms and the "＋" turns 45° into a cross over 300ms.
 */
export function GuideRow({ title, icon, initiallyOpen = false, pinned = false, children }: GuideRowProps) {
  const [open, setOpen] = useState(initiallyOpen)
  const expanded = pinned || open

  return (
    <div className="overflow-hidden rounded-[14px] border border-lp-line bg-white shadow-lp-sm">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={pinned ? undefined : () => setOpen((value) => !value)}
        className={cx(
          'relative flex w-full items-center justify-between gap-[16px] overflow-hidden rounded-[12px] px-[22px] py-[19px] text-left font-archivo text-[16px] leading-[16px] font-bold text-lp-ink',
          'lp-sm:px-[16px] lp-sm:py-[15px] lp-sm:text-[14.5px]',
          // Colour transition the theme gives every button (no visible effect here, kept for parity).
          'transition-[color,background-color,border-color] duration-100 ease-[ease-in-out]',
          pinned ? 'cursor-default' : 'cursor-pointer',
        )}
      >
        <span className="flex items-center gap-[11px]">
          {icon && <i className={cx('ti', icon, 'text-[20px] text-lp-blue')} />} {title}
        </span>{' '}
        <span
          aria-hidden="true"
          className={cx(
            'flex-none text-[22px] text-lp-blue transition-all duration-300 ease-[ease]',
            pinned && 'hidden',
            open && 'rotate-45',
          )}
        >
          ＋
        </span>
      </button>
      <div
        className={cx(
          'overflow-hidden transition-[max-height] duration-[350ms] ease-[ease]',
          pinned ? 'max-h-none' : open ? 'max-h-[1400px]' : 'max-h-0',
        )}
      >
        <div className="px-[22px] pb-[20px] text-[15px] text-lp-muted">{children}</div>
      </div>
    </div>
  )
}
