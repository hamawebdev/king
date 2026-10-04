import { useEffect, useId, useRef } from 'react'
import { Placeholder, type PlaceholderTone } from '@/components/site/Placeholder'

// Redrawn artwork for the theme pages. Photos and illustrations are <Placeholder>s clipped to
// blob outlines of our own; balls, arcs and triangles are decorative SVG shapes. Every piece
// keeps the original image box (width × height) so the layout matches.

const uid = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '')

type Ball = { x: number; y: number; r: number; color: keyof typeof BALLS }

const BALLS = {
  yellow: ['#fff6b8', '#ffd400', '#d8a400'],
  pink: ['#f3a2c8', '#c8327c', '#7d0f45'],
  blue: ['#acd6ff', '#2f86f0', '#0f4fb5'],
  purple: ['#e590bb', '#9b1a5c', '#5c0a33'],
} as const

function BallDefs({ id }: { id: string }) {
  return (
    <>
      {(Object.keys(BALLS) as (keyof typeof BALLS)[]).map((k) => (
        <radialGradient key={k} id={`${id}-${k}`} cx="0.36" cy="0.32" r="0.75">
          <stop offset="0" stopColor={BALLS[k][0]} />
          <stop offset="0.45" stopColor={BALLS[k][1]} />
          <stop offset="1" stopColor={BALLS[k][2]} />
        </radialGradient>
      ))}
      <radialGradient id={`${id}-shadow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#000000" stopOpacity="0.14" />
        <stop offset="1" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </>
  )
}

function Balls({ id, balls }: { id: string; balls: Ball[] }) {
  return (
    <>
      {balls.map((b, i) => (
        <g key={i}>
          <ellipse cx={b.x + 3} cy={b.y + b.r * 1.9} rx={b.r * 1.6} ry={b.r * 0.8} fill={`url(#${id}-shadow)`} />
          <circle cx={b.x} cy={b.y} r={b.r} fill={`url(#${id}-${b.color})`} />
        </g>
      ))}
    </>
  )
}

// ---------- Hero artwork (480 × 420 box at desktop, scales with the column) ----------

type HeroVariant = {
  tone: PlaceholderTone
  label: string
  /** Pale backdrop blob behind the photo. */
  cream: string
  /** Photo / illustration outline. */
  photo: string
  /** Optional coloured blob behind the photo (contact: yellow). */
  under?: { d: string; color: string }
  arc: { d: string; color: string; width: number }
  band: { d: string; from: string; to: string }
  balls: Ball[]
  triangles: { d: string; fill?: boolean }[]
}

const HEROES: Record<'phone' | 'target' | 'duo' | 'smile', HeroVariant> = {
  phone: {
    tone: 'photo',
    label: 'Photo',
    cream: 'M150 0H480V300C430 360 360 392 300 392C230 392 190 338 150 304C100 268 28 248 20 175C12 110 62 40 150 0Z',
    photo:
      'M126 0H480V292C462 330 420 372 360 388C300 402 250 386 205 340C180 312 160 292 140 282C100 262 70 230 62 180C54 128 76 54 126 0Z',
    arc: { d: 'M124 2C98 28 74 62 64 108', color: '#ffcf00', width: 7 },
    band: { d: 'M150 280C190 330 245 376 322 390C268 396 214 380 180 345C168 330 158 306 150 280Z', from: '#f25aa0', to: '#c41a72' },
    balls: [
      { x: 57, y: 126, r: 20, color: 'yellow' },
      { x: 192, y: 342, r: 19, color: 'pink' },
    ],
    triangles: [{ d: 'M381 313L429 297L393 283Z' }],
  },
  target: {
    tone: 'warm',
    label: 'Illustration',
    cream: 'M136 0H480V310C430 372 360 405 290 405C220 405 170 352 130 316C80 280 10 250 8 160C6 96 60 34 136 0Z',
    photo:
      'M112 0H480V300C452 352 400 392 330 404C262 414 214 378 180 336C150 300 96 272 64 220C34 170 44 70 112 0Z',
    arc: { d: 'M128 0C96 30 58 78 44 150C38 178 40 196 46 206', color: '#2350d8', width: 11 },
    band: { d: 'M150 300C190 348 240 388 318 404C262 408 214 392 182 360C170 346 158 324 150 300Z', from: '#ffd84a', to: '#f5b800' },
    balls: [
      { x: 121, y: 125, r: 15, color: 'blue' },
      { x: 233, y: 380, r: 11, color: 'blue' },
    ],
    triangles: [
      { d: 'M54 226L76 231L60 238Z', fill: true },
      { d: 'M312 357L357 343L329 330Z' },
    ],
  },
  duo: {
    tone: 'photo',
    label: 'Photo',
    cream: 'M140 0H480V330C430 396 360 418 290 418C220 418 180 366 140 330C90 296 14 268 6 180C0 110 52 40 140 0Z',
    photo:
      'M118 0H480V320C462 366 420 404 360 414C298 422 246 406 206 362C178 330 150 314 120 298C80 274 50 236 44 180C38 120 64 50 118 0Z',
    arc: { d: 'M118 2C88 34 56 80 46 150C42 170 42 182 44 190', color: '#8a1150', width: 8 },
    band: { d: 'M196 348C228 376 262 398 300 410C262 410 232 398 212 378C204 370 200 360 196 348Z', from: '#ffd400', to: '#f2b600' },
    balls: [
      { x: 49, y: 84, r: 13, color: 'purple' },
      { x: 187, y: 334, r: 21, color: 'yellow' },
    ],
    triangles: [],
  },
  smile: {
    tone: 'photo',
    label: 'Photo',
    cream: 'M150 0H480V320C430 380 360 410 290 410C220 410 170 350 130 316C80 280 12 256 10 170C8 100 60 36 150 0Z',
    under: {
      d: 'M150 0H480V292C452 344 400 386 334 396C268 404 226 380 186 334C154 298 118 280 92 260C62 236 50 198 54 150C58 96 92 40 150 0Z',
      color: '#ffcf00',
    },
    photo: 'M226 140C226 90 270 58 330 58C390 58 440 90 442 150V330C430 366 400 392 360 402C334 408 304 410 280 404C252 388 228 360 212 322C206 260 212 190 226 140Z',
    arc: { d: 'M136 4C100 34 74 70 62 120', color: '#f7a400', width: 9 },
    band: { d: 'M140 300C176 340 230 380 300 394C250 398 204 384 176 352C162 338 150 320 140 300Z', from: '#a3135f', to: '#7a0c46' },
    balls: [
      { x: 57, y: 148, r: 19, color: 'yellow' },
      { x: 382, y: 286, r: 15, color: 'purple' },
    ],
    triangles: [],
  },
}

/** Hero photo cropped in a blob; it sits on the text baseline like the original <img>. */
export function HeroBlob({ variant }: { variant: keyof typeof HEROES }) {
  const v = HEROES[variant]
  const id = uid(useId())
  return (
    <span className="mfp-art" style={{ aspectRatio: '480 / 420' }}>
      <svg viewBox="0 0 480 420" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <clipPath id={`${id}-clip`} clipPathUnits="objectBoundingBox">
            <path d={v.photo} transform={`scale(${1 / 480} ${1 / 420})`} />
          </clipPath>
        </defs>
        <path d={v.cream} fill="#fdf4ee" opacity="0.8" />
        {v.under && <path d={v.under.d} fill={v.under.color} />}
      </svg>
      <span className="mfp-art-photo" style={{ clipPath: `url(#${id}-clip)` }}>
        <Placeholder tone={v.tone} label={v.label} className="size-full" />
      </span>
      <svg viewBox="0 0 480 420" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <BallDefs id={id} />
          <linearGradient id={`${id}-band`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={v.band.from} />
            <stop offset="1" stopColor={v.band.to} />
          </linearGradient>
        </defs>
        <path d={v.band.d} fill={`url(#${id}-band)`} />
        <path d={v.arc.d} fill="none" stroke={v.arc.color} strokeWidth={v.arc.width} strokeLinecap="round" />
        {v.triangles.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill={t.fill ? '#ffbe1a' : 'none'}
            stroke="#ffc400"
            strokeWidth={t.fill ? 0 : 5}
            strokeLinejoin="round"
          />
        ))}
        <Balls id={id} balls={v.balls} />
      </svg>
    </span>
  )
}

// ---------- Reseller steps: icon on a cream blob with yellow / teal edges ----------

const STEP_BLOB_D =
  'M225 7C300 0 390 30 440 85C480 130 485 200 470 250C450 310 380 360 320 400C280 425 240 445 215 442C180 438 150 400 110 350C70 300 10 260 2 200C-5 140 40 80 110 40C150 18 190 9 225 7Z'

// Per step: box height, mirror, and how the yellow / teal copies are turned so that only
// thin slivers peek out from behind the cream blob.
const STEP_ART: { h: number; flip: boolean; yellow: number; teal: number }[] = [
  { h: 452, flip: true, yellow: 8, teal: -7 },
  { h: 443, flip: false, yellow: 7, teal: -8 },
  { h: 436, flip: true, yellow: -8, teal: 7 },
  { h: 432, flip: false, yellow: -7, teal: 8 },
]

/** Step illustration: same box as the original SVG artwork (480 wide, height per step). */
export function StepBlob({ index }: { index: number }) {
  const s = STEP_ART[index]
  const base = `translate(0 ${(s.h - 446) / 2})${s.flip ? ' translate(480 0) scale(-1 1)' : ''}`
  return (
    <span
      className={`mfp-art mfp-step-art mfp-step-art--${index + 1}`}
      style={{ aspectRatio: `480 / ${s.h}`, maxWidth: 480 }}
    >
      <svg viewBox={`0 0 480 ${s.h}`} aria-hidden="true">
        <g transform={base}>
          <path d={STEP_BLOB_D} fill="#ffcf00" transform={`rotate(${s.yellow} 240 224) scale(0.985)`} />
          <path d={STEP_BLOB_D} fill="#08bcc3" transform={`rotate(${s.teal} 240 224) scale(0.975)`} />
          <path d={STEP_BLOB_D} fill="#fdf6f1" />
        </g>
      </svg>
      <Placeholder
        tone="illustration"
        label="Illustration"
        className="absolute rounded-[12px]"
        style={{ left: '29%', top: '22%', width: '46%', height: '45%' }}
      />
    </span>
  )
}

// ---------- Contact team: portrait on a cream blob (780 × 779 / 777 artwork) ----------

const TEAM_BLOB_D =
  'M146 22C214 -2 300 6 352 54C404 102 398 176 402 240C406 306 398 362 350 398C302 434 228 444 166 424C104 404 54 360 36 300C18 240 22 168 44 112C66 56 98 40 146 22Z'

export function TeamBlob({ rot = 0, h = 779 }: { rot?: number; h?: number }) {
  const id = uid(useId())
  return (
    <span className="mfp-art" style={{ aspectRatio: `780 / ${h}` }}>
      <svg viewBox="0 0 440 440" aria-hidden="true">
        <defs>
          {/* Portrait outline: head and shoulders, cut by the blob edge at the bottom right. */}
          <clipPath id={`${id}-c`} clipPathUnits="objectBoundingBox">
            <path d="M0.3 0.2C0.3 0.08 0.4 0.02 0.52 0.02C0.64 0.02 0.73 0.09 0.73 0.21C0.73 0.32 0.7 0.4 0.66 0.45C0.8 0.48 0.93 0.53 0.98 0.62L1 0.66C0.86 0.84 0.7 0.95 0.5 1H0.06C0.03 0.84 0.02 0.72 0.05 0.63C0.1 0.52 0.24 0.48 0.38 0.45C0.33 0.39 0.3 0.31 0.3 0.2Z" />
          </clipPath>
        </defs>
        <path d={TEAM_BLOB_D} fill="#fdf6f1" transform={`rotate(${rot} 220 220)`} />
      </svg>
      <span
        className="mfp-art-photo"
        style={{ left: '16%', top: '6%', width: '74%', height: '94%', clipPath: `url(#${id}-c)` }}
      >
        <Placeholder tone="photo" label="Portrait" className="size-full" />
      </span>
    </span>
  )
}

// ---------- Downloads: application box (300 × 284 image box) ----------

export function AppBox() {
  return (
    <span className="mfp-art" style={{ width: 300, maxWidth: '100%', aspectRatio: '300 / 284' }}>
      <Placeholder
        tone="light"
        label="Application"
        className="absolute"
        style={{
          left: '5.33%',
          right: '6%',
          top: '2.46%',
          bottom: '3.17%',
          border: '4px solid #14ace3',
          borderRadius: 38,
        }}
      />
    </span>
  )
}

// ---------- Background arcs ----------

function BlurDefs({ id, sd }: { id: string; sd: number }) {
  return (
    <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation={sd} />
    </filter>
  )
}

/**
 * Pale blurred yellow arcs on both edges of a section, scaled with the section width
 * (1440 × 179 art at desktop), anchored to the bottom or to the vertical centre.
 */
export function EdgeArcs({ anchor }: { anchor: 'bottom' | 'center' }) {
  const id = uid(useId())
  return (
    <svg
      className={`mfp-arcs mfp-arcs--${anchor}`}
      viewBox="0 0 1440 179"
      style={{ aspectRatio: '1440 / 179' }}
      aria-hidden="true"
    >
      <defs>
        <BlurDefs id={`${id}-b`} sd={5.5} />
      </defs>
      <g filter={`url(#${id}-b)`} fill="none" stroke="#ffc928" strokeWidth="21" strokeLinecap="round" opacity="0.9">
        <path d="M-11.5 32.7A39 39 0 0 1 23.3 102.4" />
        <path d="M1402.4 133.6A40 40 0 0 0 1464.9 160.8" />
      </g>
    </svg>
  )
}

/** Yellow ring pieces drifting on the shop's navy form band (desktop parallax art). */
export function NavyArcs() {
  const ref = useRef<SVGSVGElement>(null)
  const id = uid(useId())

  useEffect(() => {
    const svg = ref.current
    const box = svg?.parentElement
    if (!svg || !box) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = box.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 while the band is below the fold, 1 once it has scrolled past the top.
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)))
      svg.style.transform = `translate3d(0, ${(-p * 160).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="mfp-navyarcs" aria-hidden="true">
      <svg ref={ref} viewBox="0 0 1440 868">
        <defs>
          <BlurDefs id={`${id}-b1`} sd={7} />
          <BlurDefs id={`${id}-b2`} sd={10} />
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd84a" />
            <stop offset="1" stopColor="#f2a900" />
          </linearGradient>
        </defs>
        <g fill="none" strokeLinecap="round">
          <path d="M-22 618A52 52 0 0 1 -22 722" stroke="#f5c43a" strokeWidth="24" opacity="0.55" filter={`url(#${id}-b1)`} />
          <path d="M4 802A14 14 0 0 0 32 802" stroke={`url(#${id}-g)`} strokeWidth="6" />
          <path d="M1334 580A14 14 0 0 1 1350 592" stroke={`url(#${id}-g)`} strokeWidth="6" />
          <path d="M1294 820A86 86 0 0 1 1420 870" stroke="#f5c43a" strokeWidth="34" opacity="0.8" filter={`url(#${id}-b2)`} />
        </g>
      </svg>
    </div>
  )
}

/** Contact hero: pale giant word and a glossy ball, anchored to the bottom-left corner. */
export function HeroWord({ word }: { word: string }) {
  const id = uid(useId())
  return (
    <svg className="mfp-heroword" viewBox="0 0 1000 400" aria-hidden="true">
      <defs>
        <BallDefs id={id} />
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <text x="-41" y="313" fill="#fef8f3" fontFamily="'Zen Kaku Gothic New', sans-serif" fontWeight="900" fontSize="300">
        {word}
      </text>
      <ellipse cx="16" cy="206" rx="40" ry="78" fill="#ffffff" filter={`url(#${id}-blur)`} />
      <circle cx="0" cy="117" r="32" fill={`url(#${id}-purple)`} />
    </svg>
  )
}
