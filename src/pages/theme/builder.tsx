import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './muffin.css'

// Layout primitives mirroring the theme's page builder: section > wrap > column > text block.
// Widths are fractions ('1-2', '1-3', …); `d` is desktop, `t` tablet (768-959). Below 768px
// every wrap and column is full width, as on the original pages.

export type Frac = '1' | '1-2' | '1-3' | '2-3' | '1-4' | '3-4' | '1-5' | '2-5' | '3-5' | '4-5' | '1-6' | '5-6'

type SectionProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** full-width: the inner wrapper spans the viewport with no side gutter. */
  full?: boolean
  /** no-margin-h / no-margin-v: columns lose their side / bottom margins. */
  nmh?: boolean
  nmv?: boolean
  /** equal-height-wrap: wraps stretch to the tallest one. */
  eqh?: boolean
  /** wrap-reverse: wraps stack in reverse order below 768px. */
  rev?: boolean
  /** Absolutely positioned decorations rendered before the inner wrapper. */
  before?: ReactNode
  /** Section hook, rendered as data-section on the root element. */
  dataSection?: string
}

export function Section({ children, className, style, full, nmh, nmv, eqh, rev, before, dataSection }: SectionProps) {
  return (
    <div
      className={cn(
        'mfp-sec',
        full && 'mfp-sec--full',
        nmh && 'mfp-sec--nmh',
        nmv && 'mfp-sec--nmv',
        eqh && 'mfp-sec--eqh',
        rev && 'mfp-sec--rev',
        className,
      )}
      style={style}
      data-section={dataSection}
    >
      {before}
      <div className="mfp-inner">{children}</div>
    </div>
  )
}

type WrapProps = {
  children?: ReactNode
  d: Frac
  t?: Frac
  className?: string
  style?: CSSProperties
  /** Vertical centring (only effective in equal-height sections, like the original). */
  middle?: boolean
  /** Bottom margin of the columns inside: 0 or 10px instead of 40px. */
  gap?: 0 | 10
  innerStyle?: CSSProperties
  innerClassName?: string
}

export function Wrap({ children, d, t, className, style, middle, gap, innerStyle, innerClassName }: WrapProps) {
  return (
    <div
      className={cn(
        'mfp-wrap',
        `mfp-w-${d}`,
        `mfp-tw-${t ?? d}`,
        middle && 'mfp-wrap--mid',
        gap === 0 && 'mfp-wrap--gap0',
        gap === 10 && 'mfp-wrap--gap10',
        className,
      )}
      style={style}
    >
      <div className={cn('mfp-wrap-inner', innerClassName)} style={innerStyle}>
        {children}
      </div>
    </div>
  )
}

type ColProps = {
  children?: ReactNode
  d?: Frac
  t?: Frac
  kind?: 'text' | 'image' | 'button' | 'placeholder' | 'divider'
  className?: string
  style?: CSSProperties
}

export function Col({ children, d = '1', t, kind = 'text', className, style }: ColProps) {
  return (
    <div className={cn('mfp-col', `mfp-c-${d}`, `mfp-tc-${t ?? d}`, `mfp-col--${kind}`, className)} style={style}>
      <div className="mfp-ci">
        {kind === 'placeholder' ? <div className="mfp-placeholder">&nbsp;</div> : children}
      </div>
    </div>
  )
}

type AttrProps = {
  children?: ReactNode
  align?: 'left' | 'right' | 'center'
  mobileAlign?: 'left' | 'center'
  className?: string
  style?: CSSProperties
}

/** Text block of a column (keeps the theme's per-breakpoint alignment switches). */
export function Attr({ children, align, mobileAlign, className, style }: AttrProps) {
  return (
    <div
      className={cn('mfp-attr', align && `al-${align}`, mobileAlign && `mal-${mobileAlign}`, className)}
      style={style}
    >
      {children}
    </div>
  )
}

/** Invisible spacer rule (theme "no_line" divider): 1px tall plus its bottom margin. */
export function Hr({ mb = 10 }: { mb?: 10 | 15 | 30 | 70 }) {
  return <hr className={cn('mfp-hr', mb !== 10 && `mfp-hr--${mb}`)} />
}

// ---------- Small decorative separators (redrawn) ----------

/**
 * Rounded square with a small smile, drawn above section titles (24×24, sits on the baseline).
 * The dark variant (navy bands) is a 24×25 artwork with one blank row on top.
 */
export function SepBadge({ dark }: { dark?: boolean }) {
  const fill = dark ? '#12263a' : '#ffcf00'
  const smile = dark ? '#181349' : '#ffffff'
  return (
    <svg
      className="mfp-sep"
      width="24"
      height={dark ? 25 : 24}
      viewBox={dark ? '0 -1 24 25' : '0 0 24 24'}
      aria-hidden="true"
    >
      <rect x="0.6" y="0" width="22.8" height="24" rx="6.6" fill={fill} />
      <path d="M7.7 9.8a4.5 4.5 0 0 0 9 0" fill="none" stroke={smile} strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  )
}

/** Two offset dashes under titles (26×8, sits on the baseline). */
export function SepDashes({ dark }: { dark?: boolean }) {
  const fill = dark ? '#12263a' : '#ffcf00'
  return (
    <svg className="mfp-sep" width="26" height="8" viewBox="0 0 26 8" aria-hidden="true">
      <rect x="0" y="0" width="17" height="3" rx="1.5" fill={fill} />
      <rect x="9" y="5" width="17" height="3" rx="1.5" fill={fill} />
    </svg>
  )
}

/** Check mark of the plan lists (17px glyph box, 20px line). */
export function CheckMark() {
  return (
    <svg className="mfp-check" viewBox="0 0 17 20" aria-hidden="true">
      <path
        d="M1.9 9.7l4.4 4.4 8.9-8.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.9"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

// ---------- Curves ----------

type Pt = [number, number]

/** Smooth path through points (Catmull-Rom converted to cubic Béziers). */
function smooth(pts: Pt[]) {
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`
  }
  return d
}

// Navy sections: white wave over their top edge. The art is a 1920×35 band centred on the
// viewport (flat on both sides, 35px dip in the middle), so narrow screens see its centre.
const WAVE_PTS: Pt[] = [
  [440, 0], [480, 1], [520, 3], [560, 6], [600, 10], [640, 14], [680, 18], [720, 22], [760, 26],
  [800, 29], [840, 32], [880, 34], [920, 35], [960, 35.4], [1000, 35], [1040, 34], [1080, 32],
  [1120, 29], [1160, 25], [1200, 21], [1240, 17], [1280, 13], [1320, 9], [1360, 5], [1400, 2],
  [1440, 1], [1480, 0],
]
const WAVE_D = `M0 0H440${smooth(WAVE_PTS).replace(/^M[^C]*/, '')}H1920V-1H0Z`

export function WaveTop() {
  return (
    <div className="mfp-wavetop" aria-hidden="true">
      <svg viewBox="0 -1 1920 36" preserveAspectRatio="none">
        <path d={WAVE_D} fill="#ffffff" />
      </svg>
    </div>
  )
}

// Reseller page: two crossing dashed waves between the steps (art box 1440×78 at 1440px,
// stretched to the full width). Points traced every 60px; `flip` is the mirrored variant.
const DASH_DARK: Pt[] = [
  [0, 9], [60, 15], [120, 24], [180, 33], [240, 42], [300, 49], [360, 54], [420, 57], [480, 58],
  [540, 58], [600, 55], [660, 50], [720, 44], [780, 36], [840, 27], [900, 18], [960, 11], [1020, 10],
  [1080, 16], [1140, 28], [1200, 42], [1260, 55], [1320, 66], [1380, 74], [1440, 78],
]
const DASH_LIGHT: Pt[] = [
  [0, 3], [60, 8], [120, 15], [180, 26], [240, 38], [300, 50], [360, 59], [420, 65], [480, 64],
  [540, 60], [600, 52], [660, 45], [720, 37], [780, 30], [840, 24], [900, 20], [960, 17], [1020, 18],
  [1080, 21], [1140, 29], [1200, 38], [1260, 48], [1320, 57], [1380, 66], [1440, 73],
]
const DASH_DARK_FLIP: Pt[] = [
  [0, 79], [60, 75], [120, 68], [180, 57], [240, 44], [300, 30], [360, 18], [420, 12], [480, 11],
  [540, 19], [600, 28], [660, 37], [720, 45], [780, 52], [840, 56], [900, 59], [960, 59], [1020, 59],
  [1080, 55], [1140, 50], [1200, 43], [1260, 35], [1320, 25], [1380, 16], [1440, 11],
]
const DASH_LIGHT_FLIP: Pt[] = [
  [0, 73], [60, 67], [120, 59], [180, 49], [240, 39], [300, 30], [360, 23], [420, 19], [480, 18],
  [540, 20], [600, 26], [660, 32], [720, 37], [780, 46], [840, 53], [900, 61], [960, 66], [1020, 67],
  [1080, 61], [1140, 50], [1200, 39], [1260, 27], [1320, 16], [1380, 8], [1440, 3],
]

export function DashWave({ flip }: { flip?: boolean }) {
  return (
    <svg className="mfp-dashwave" viewBox="0 0 1440 78" preserveAspectRatio="none" aria-hidden="true">
      <path
        d={smooth(flip ? DASH_LIGHT_FLIP : DASH_LIGHT)}
        fill="none"
        stroke="#fae7b5"
        strokeWidth="1.1"
        strokeDasharray="8 4.5"
      />
      <path
        d={smooth(flip ? DASH_DARK_FLIP : DASH_DARK)}
        fill="none"
        stroke="#f1c243"
        strokeWidth="1.1"
        strokeDasharray="8 4.5"
      />
    </svg>
  )
}

// Box of each faded step number (width, offset from the block edge, offset from its top),
// measured on the original background artwork.
const BIGNUM_BOX: Record<string, { w: number; dx: number; dy: number }> = {
  '01': { w: 224, dx: -12, dy: -3 },
  '02': { w: 287, dx: -10, dy: -3 },
  '03': { w: 288, dx: -10, dy: -3 },
  '04': { w: 304, dx: -10, dy: -3 },
}

/** Large faded step number painted behind a text block (like the original's background art). */
export function BigNum({ n, side }: { n: string; side: 'left' | 'right' }) {
  const box = BIGNUM_BOX[n] ?? { w: 270, dx: 0, dy: 0 }
  return (
    <svg
      className="mfp-bignum"
      width={box.w}
      height={220}
      viewBox={`0 0 ${box.w} 220`}
      style={{ [side]: box.dx, top: box.dy }}
      aria-hidden="true"
    >
      <text
        x="0"
        y="216"
        fill="#fef7f2"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="288"
        textLength={box.w}
        lengthAdjust="spacingAndGlyphs"
      >
        {n}
      </text>
    </svg>
  )
}
