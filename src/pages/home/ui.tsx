import type { ReactNode } from 'react'
import type { Card, IconText } from './data'
import { EASE_200, TILE, TITLE, cx } from './styles'

/** Highlighted words inside a title. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-lp-blue">{children}</span>
}

/** Small uppercase pill shown above section titles. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-[8px] rounded-full bg-lp-blue-soft px-[15px] py-[7px] text-[13px] font-extrabold tracking-[0.08em] text-lp-blue uppercase">
      {children}
    </span>
  )
}

type SectionHeadProps = {
  eyebrow?: ReactNode
  title: ReactNode
  text?: ReactNode
  /** Secondary heading inside a band: smaller title and a fixed 36px gap below. */
  minor?: boolean
}

/** Centred section intro: optional eyebrow, title and lead paragraph. */
export function SectionHead({ eyebrow, title, text, minor }: SectionHeadProps) {
  return (
    <div className={cx('mx-auto max-w-[660px] text-center', minor ? 'mb-[36px]' : 'mb-[50px] lp-md:mb-[32px]')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          TITLE,
          'mt-[16px] mb-[12px]',
          minor ? 'text-[length:clamp(24px,3vw,32px)]' : 'text-[length:clamp(28px,4vw,42px)] lp-md:text-[26px]',
        )}
      >
        {title}
      </h2>
      {text && <p className="text-[17px] text-lp-muted lp-md:text-[15.5px]">{text}</p>}
    </div>
  )
}

/** Centred caption above a row of chips or badges. */
export function RowLabel({ className, children }: { className: string; children: ReactNode }) {
  return <p className={cx('text-center font-extrabold tracking-[0.04em] text-lp-dim', className)}>{children}</p>
}

/** Wrapping, centred row of icon chips. */
export function ChipRow({ items, className = 'mt-[24px]' }: { items: IconText[]; className?: string }) {
  return (
    <div className={cx('flex flex-wrap justify-center gap-[11px]', className)}>
      {items.map((item) => (
        <span
          key={item.label}
          className={cx(TILE, 'flex items-center gap-[8px] rounded-[12px] px-[20px] py-[12px] text-[15px] font-bold')}
        >
          <i className={cx('ti', item.icon, 'text-[18px] text-lp-blue')} /> {item.label}
        </span>
      ))}
    </div>
  )
}

type Stat = { value: string; label: string }

/** Grid of big blue figures. `trio` keeps three columns at every width (as the original's inline grids do). */
export function StatGrid({ items, trio, className }: { items: Stat[]; trio?: boolean; className?: string }) {
  return (
    <div
      className={cx(
        'grid gap-[20px]',
        trio ? 'grid-cols-[repeat(3,1fr)]' : 'grid-cols-[repeat(4,1fr)] lp-lg:grid-cols-[repeat(2,1fr)] lp-sm:grid-cols-[1fr]',
        className,
      )}
    >
      {items.map((stat) => (
        <div key={stat.label} className={cx(TILE, 'rounded-[16px] px-[16px] py-[26px] text-center')}>
          <b className="block font-archivo text-[length:clamp(28px,3.4vw,40px)] font-black text-lp-blue">{stat.value}</b>
          <span className="text-[14px] font-bold text-lp-muted">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

/** Icon tile + title + text card that lifts on hover. */
export function FeatureCard({ icon, title, badge, text }: Card) {
  return (
    <div
      className={cx(
        'rounded-[18px] border border-lp-line bg-white p-[26px] hover:-translate-y-[4px] hover:border-white hover:shadow-lp',
        EASE_200,
      )}
    >
      <div className="mb-[16px] grid size-[50px] place-items-center rounded-[13px] bg-lp-blue-soft text-[24px] text-lp-blue">
        <i className={cx('ti', icon)} />
      </div>
      <h4 className={cx(TITLE, 'mb-[8px] text-[18px]')}>
        {title}
        {badge && (
          <>
            {' '}
            <small className="text-[12px] font-bold text-lp-blue">{badge}</small>
          </>
        )}
      </h4>
      <p className="text-[14.5px] text-lp-muted">{text}</p>
    </div>
  )
}

/** Responsive grid of feature cards: 4 or 3 columns, then 2 (≤980px) and 1 (≤680px). */
export function FeatureGrid({ items, columns, className }: { items: Card[]; columns: 3 | 4; className?: string }) {
  return (
    <div
      className={cx(
        'grid gap-[18px] lp-lg:grid-cols-[repeat(2,1fr)] lp-md:grid-cols-[1fr]',
        columns === 4 ? 'grid-cols-[repeat(4,1fr)]' : 'grid-cols-[repeat(3,1fr)]',
        className,
      )}
    >
      {items.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  )
}

/** Vertical list of icon + label lines. */
export function CheckList({ items, className }: { items: IconText[]; className?: string }) {
  return (
    <div className={cx('grid gap-[13px]', className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-[12px] font-semibold">
          <i className={cx('ti', item.icon, 'text-[19px] text-lp-blue')} /> {item.label}
        </div>
      ))}
    </div>
  )
}

/** Rounded pills with an icon, left aligned. */
export function PillList({ items }: { items: IconText[] }) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {items.map((item) => (
        <span
          key={item.label}
          className={cx(TILE, 'flex items-center gap-[8px] rounded-full px-[19px] py-[11px] text-[14px] font-bold')}
        >
          <i className={cx('ti', item.icon, 'text-[17px] text-lp-blue')} /> {item.label}
        </span>
      ))}
    </div>
  )
}

const PANEL_FILL = {
  royal: 'bg-[linear-gradient(160deg,#2563eb,#173a9e)]',
  bright: 'bg-[linear-gradient(160deg,#3b82f6,#1b4dd8)]',
  night: 'bg-[linear-gradient(160deg,#13284f,#0a1c44)]',
}

/** Gradient panel with a centred glyph (the original draws these in CSS, no image involved). */
export function GlyphPanel({ icon, fill }: { icon: string; fill: keyof typeof PANEL_FILL }) {
  return (
    <div
      className={cx(
        'grid aspect-[16/11] place-items-center rounded-[22px] text-[64px] text-white shadow-lp lp-md:text-[50px]',
        PANEL_FILL[fill],
      )}
    >
      <i className={cx('ti', icon)} />
    </div>
  )
}
