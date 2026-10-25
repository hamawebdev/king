import { cn } from '@/lib/utils'
import { useInView, usePrefersReducedMotion } from './Resolution.motion'

/** Ball trajectory: a quadratic curve from the passer into the right-hand goal (viewBox units). */
const P0 = { x: 168, y: 214 }
const C = { x: 312, y: 46 }
const P2 = { x: 448, y: 150 }

function pointAt(t: number) {
  const u = 1 - t
  return {
    x: u * u * P0.x + 2 * u * t * C.x + t * t * P2.x,
    y: u * u * P0.y + 2 * u * t * C.y + t * t * P2.y,
  }
}

/** Sampled ball positions — the « frames »: crisp, discrete, no motion blur (50/60 FPS). */
const FRAMES = Array.from({ length: 9 }, (_, i) => ({ t: (i + 1) / 10, ...pointAt((i + 1) / 10) }))

const TEAM = [
  { x: 168, y: 214 },
  { x: 300, y: 196 },
  { x: 372, y: 104 },
  { x: 236, y: 120 },
]
const OPPONENTS = [
  { x: 352, y: 158 },
  { x: 404, y: 196 },
  { x: 410, y: 118 },
  { x: 446, y: 168 },
]

/**
 * S8 visual: a blueprint football pitch on a soft mist panel with the ball's trajectory drawn as discrete,
 * sharp frames, plus « LIVE » and « 4K HDR · 50/60 FPS » chips. Generic sport only — no channel, league
 * or competition marks. Decorative (aria-hidden); draws once when scrolled into view, static under reduced motion.
 */
export function LiveSportPitch({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 })
  const drawn = inView || reduced

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none relative isolate overflow-hidden rounded-xl border border-brand/10 bg-linear-to-br from-mist via-white to-brand-soft select-none',
        className,
      )}
    >
      <svg viewBox="0 0 480 300" className="block h-auto w-full" fill="none">
        {/* mowing stripes */}
        {Array.from({ length: 11 }, (_, i) =>
          i % 2 === 0 ? <rect key={i} x={20 + i * 40} y={20} width={40} height={260} fill="#0066FF" fillOpacity={0.035} /> : null,
        )}
        {/* pitch lines */}
        <g stroke="#0066FF" strokeOpacity={0.32} strokeWidth={1.5}>
          <rect x={20} y={20} width={440} height={260} rx={4} />
          <line x1={240} y1={20} x2={240} y2={280} />
          <circle cx={240} cy={150} r={38} />
          <rect x={20} y={82} width={68} height={136} />
          <rect x={392} y={82} width={68} height={136} />
          <rect x={20} y={120} width={24} height={60} />
          <rect x={436} y={120} width={24} height={60} />
          <path d="M88 124 A30 30 0 0 1 88 176" />
          <path d="M392 124 A30 30 0 0 0 392 176" />
          <rect x={10} y={132} width={10} height={36} strokeOpacity={0.5} />
          <rect x={460} y={132} width={10} height={36} strokeOpacity={0.5} />
        </g>
        <g fill="#0066FF" fillOpacity={0.4}>
          <circle cx={240} cy={150} r={2.5} />
          <circle cx={66} cy={150} r={2} />
          <circle cx={414} cy={150} r={2} />
        </g>

        {/* players */}
        {OPPONENTS.map((p) => (
          <circle key={`o${p.x}`} cx={p.x} cy={p.y} r={6} fill="#FFFFFF" stroke="#94A3B8" strokeWidth={2} />
        ))}
        {TEAM.map((p) => (
          <circle key={`t${p.x}`} cx={p.x} cy={p.y} r={6} fill="#0066FF" stroke="#FFFFFF" strokeWidth={2} />
        ))}

        {/* trajectory */}
        <path
          d={`M${P0.x} ${P0.y} Q${C.x} ${C.y} ${P2.x} ${P2.y}`}
          pathLength={1}
          stroke="#0066FF"
          strokeOpacity={0.55}
          strokeWidth={1.5}
          strokeDasharray="1 1"
          strokeDashoffset={drawn ? 0 : 1}
          style={{ transition: reduced ? undefined : 'stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) 0.2s' }}
        />
        {FRAMES.map((f, i) => (
          <circle
            key={f.t}
            cx={f.x}
            cy={f.y}
            r={3.4}
            fill="#0066FF"
            fillOpacity={0.12 + i * 0.07}
            style={{
              opacity: drawn ? 1 : 0,
              transition: reduced ? undefined : `opacity 0.3s ease-out ${0.3 + i * 0.15}s`,
            }}
          />
        ))}
        {/* ball */}
        <g
          style={{
            opacity: drawn ? 1 : 0,
            transition: reduced ? undefined : 'opacity 0.4s ease-out 1.7s',
          }}
        >
          <circle cx={P2.x} cy={P2.y} r={12} fill="#0066FF" fillOpacity={0.12} />
          <circle cx={P2.x} cy={P2.y} r={6.5} fill="#FFFFFF" stroke="#0F172A" strokeWidth={1.75} />
          <circle cx={P2.x} cy={P2.y} r={2} fill="#0F172A" />
        </g>
      </svg>

      {/* broadcast chips */}
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-heading shadow-card ring-1 ring-line backdrop-blur-sm sm:top-4 sm:left-4 sm:text-[11px]">
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 rounded-full bg-red-500 motion-safe:animate-ping" />
          <span className="relative size-1.5 rounded-full bg-red-500" />
        </span>
        LIVE
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-heading px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-white shadow-card sm:top-4 sm:right-4 sm:text-[11px]">
        4K HDR · 50/60 FPS
      </span>
    </div>
  )
}
