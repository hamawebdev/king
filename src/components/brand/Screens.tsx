import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LogoMark } from './Logo'
import { QualityStamp } from './Labels'
import { useInView } from './motion'
import { MOSAIC_FILLS, MOSAIC_ICONS, iconClass } from './recipes'
import type { QualityTier } from './types'

type DeviceFrameProps = {
  kind?: 'tv' | 'phone' | 'tablet'
  /** Screen content (ChannelMosaic, an abstract chat …). */
  children?: ReactNode
  className?: string
  screenClassName?: string
}

/** Decorative device frame: ink bezel on light, evergreen-800 bezel with a vault-line ring on vault. */
export function DeviceFrame({ kind = 'tv', children, className, screenClassName }: DeviceFrameProps) {
  const vault = 'vault:bg-evergreen-800 vault:ring-1 vault:ring-vault-line'
  if (kind === 'phone') {
    return (
      <div aria-hidden="true" className={cn('pointer-events-none relative aspect-[9/19.5] rounded-[32px] bg-ink p-2 shadow-float', vault, className)}>
        <div className={cn('relative size-full overflow-hidden rounded-[24px] bg-vault', screenClassName)}>{children}</div>
        <span className="absolute top-2.5 left-1/2 z-[1] h-[18px] w-[30%] -translate-x-1/2 rounded-full bg-ink vault:bg-evergreen-800" />
      </div>
    )
  }
  if (kind === 'tablet') {
    return (
      <div aria-hidden="true" className={cn('pointer-events-none relative aspect-[4/3] rounded-[20px] bg-ink p-2.5 shadow-float', vault, className)}>
        <div className={cn('relative size-full overflow-hidden rounded-[12px] bg-vault', screenClassName)}>{children}</div>
      </div>
    )
  }
  return (
    <div aria-hidden="true" className={cn('tv pointer-events-none relative aspect-video rounded-[6px] bg-ink p-2.5 shadow-float', vault, className)}>
      <div className={cn('relative size-full overflow-hidden rounded-[2px] bg-vault', screenClassName)}>{children}</div>
      <span className="absolute top-full left-1/2 h-1.5 w-[28%] -translate-x-1/2 rounded-b-[4px] bg-evergreen-800" />
    </div>
  )
}

type ChannelMosaicProps = {
  cols?: number
  rows?: number
  /** 1-based selected tile (brass); 0 for none. */
  selected?: number
  /** Up to 6 Tabler glyphs at 30% (default: football, movie, news, kid, world, music). */
  icons?: readonly string[]
  /** Progress bar fill, 0–1. */
  progress?: number
  /** Status dot, progress bar and mini 4K stamp. */
  osd?: boolean
  /** Moves the selection every 2.4s (motion-safe only, paused off-screen). */
  step?: boolean
  /** Fill the parent (inside a screen). false = tiles keep 16:10 (strips on cards). */
  fill?: boolean
  className?: string
}

function iconSlots(count: number, n: number) {
  return Array.from({ length: Math.min(n, 6) }, (_, k) => Math.floor(((k + 0.5) * count) / Math.min(n, 6)))
}

/** The "this is television" motif: a quiet grid of evergreen channel tiles with one brass selection. */
export function ChannelMosaic({
  cols = 6,
  rows = 4,
  selected = 9,
  icons = MOSAIC_ICONS,
  progress = 0.62,
  osd = true,
  step = false,
  fill = true,
  className,
}: ChannelMosaicProps) {
  const count = cols * rows
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [sel, setSel] = useState(selected)

  useEffect(() => {
    if (!step || !inView || selected <= 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setInterval(() => setSel((s) => (s % count) + 1), 2400)
    return () => window.clearInterval(t)
  }, [step, inView, count, selected])

  const slots = iconSlots(count, icons.length)
  return (
    <div ref={ref} aria-hidden="true" className={cn('pointer-events-none relative', fill && 'size-full', className)}>
      <div
        className={cn('grid gap-[3px] p-[3px]', fill && 'size-full')}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: fill ? `repeat(${rows}, minmax(0, 1fr))` : undefined,
        }}
      >
        {Array.from({ length: count }, (_, i) => {
          const on = i + 1 === sel
          const icon = slots.indexOf(i)
          return (
            <span
              key={i}
              className={cn(
                'grid place-items-center rounded-tag transition-colors duration-260 ease-calm',
                !fill && 'aspect-[16/10]',
                on ? 'z-[1] bg-brass-500 outline-2 outline-brass-300' : MOSAIC_FILLS[i % MOSAIC_FILLS.length],
              )}
            >
              {icon >= 0 && !on && <i className={iconClass(icons[icon], 'text-[clamp(10px,1.4vw,18px)] text-on-vault/30')} />}
            </span>
          )
        })}
      </div>
      {osd && (
        <>
          <span className="absolute top-2 left-2 size-2 rounded-full bg-evergreen-600 ring-1 ring-vault" />
          <span
            data-label="4K"
            className="absolute top-2 right-2 rounded-tag bg-brass-500 px-1 py-0.5 font-sans text-[9px] leading-none font-bold text-vault before:content-[attr(data-label)]"
          />
          <span className="absolute inset-x-2 bottom-2 h-[3px] overflow-hidden rounded-full bg-vault-line">
            <span className="block h-full bg-brass-500" style={{ width: `${Math.round(Math.min(Math.max(progress, 0), 1) * 100)}%` }} />
          </span>
        </>
      )}
    </div>
  )
}

const NO_SIGNAL_BARS = ['bg-on-vault/80', 'bg-on-vault-muted', 'bg-vault-outline', 'bg-evergreen-600', 'bg-brass-500', 'bg-evergreen-800', 'bg-vault-line']

/** 404 visual: a TV frame showing seven calm test-card bars. No text. */
export function NoSignal({ className }: { className?: string }) {
  return (
    <DeviceFrame kind="tv" className={cn('w-full max-w-[420px]', className)}>
      <div className="flex size-full">
        {NO_SIGNAL_BARS.map((b) => (
          <span key={b} className={cn('h-full flex-1', b)} />
        ))}
      </div>
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-vault-line" />
    </DeviceFrame>
  )
}

/** App visual (NOVASTREAM PLAY): a phone in front of a TV, both showing the mosaic. */
export function AppMock({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none relative aspect-[100/103] w-full', className)}>
      <DeviceFrame kind="tv" className="absolute top-0 right-0 w-[calc(100%-32px)]">
        <ChannelMosaic />
      </DeviceFrame>
      <DeviceFrame kind="phone" className="absolute bottom-0 left-0 w-[38%]">
        <div className="flex size-full flex-col gap-2 px-2 pt-7 pb-2">
          <LogoMark className="h-3.5 w-auto self-start text-on-vault" />
          <div className="grid aspect-video w-full place-items-center rounded-tag bg-[linear-gradient(180deg,var(--color-evergreen-700),var(--color-vault))]">
            <span className="grid aspect-square w-[26%] max-w-10 place-items-center rounded-full bg-brass-500 text-vault">
              <i className="ti ti-player-play-filled text-[clamp(10px,1.2vw,18px)]" />
            </span>
          </div>
          <div className="-mx-[3px] min-h-0 flex-1">
            <ChannelMosaic cols={3} rows={4} selected={0} osd={false} icons={[]} />
          </div>
        </div>
      </DeviceFrame>
    </div>
  )
}

const LADDER_FILL: Record<QualityTier, string> = {
  '4K': 'w-full bg-ink vault:bg-brass-500',
  FHD: 'w-3/4 bg-evergreen-700 vault:bg-on-vault',
  HD: 'w-1/2 bg-evergreen-600 vault:bg-on-vault-muted',
  SD: 'w-[30%] bg-hairline-strong vault:bg-vault-outline',
}

type QualityLadderProps = {
  rows: { tier: QualityTier; name: ReactNode; text?: ReactNode }[]
  as?: 'h3' | 'h4' | 'p'
  className?: string
}

/** Quality ladder (4K / FHD / HD / SD): stamp, tier name and text, and a bar that shortens by tier. */
export function QualityLadder({ rows, as: H = 'h3', className }: QualityLadderProps) {
  return (
    <ul className={cn('m-0 list-none border-b border-z-line p-0', className)}>
      {rows.map((r) => (
        <li key={r.tier} className="grid grid-cols-[56px_1fr] gap-x-4 gap-y-1 border-t border-z-line py-4">
          <QualityStamp tier={r.tier} className="row-span-3" />
          <H className="font-display text-title text-z-fg">{r.name}</H>
          {r.text != null && <p className="font-sans text-small text-z-soft">{r.text}</p>}
          <span aria-hidden="true" className="mt-2 block h-1.5 overflow-hidden rounded-full bg-sand-deep vault:bg-vault-line">
            <span className={cn('block h-full rounded-full', LADDER_FILL[r.tier])} />
          </span>
        </li>
      ))}
    </ul>
  )
}
