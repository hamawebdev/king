import { useEffect, useState } from 'react'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useInView, usePrefersReducedMotion } from './Resolution.motion'

/** Theme tiles on the screen: generic programme themes only (never channel names or logos). French source; other languages mirror it. */
const fr = [
  { emoji: '⚽', label: 'Sports', meta: 'Direct' },
  { emoji: '🎬', label: 'Films', meta: 'Box-Office' },
  { emoji: '🍿', label: 'Séries', meta: 'VOD' },
  { emoji: '📰', label: 'Actualités', meta: '24/7' },
  { emoji: '👶', label: 'Jeunesse', meta: 'Univers' },
  { emoji: '🎵', label: 'Musique', meta: 'Divertissement' },
]

const SCREEN_TILES: Localized<typeof fr> = {
  fr,
  en: [
    { emoji: '⚽', label: 'Sports', meta: 'Live' },
    { emoji: '🎬', label: 'Movies', meta: 'Box Office' },
    { emoji: '🍿', label: 'Series', meta: 'VOD' },
    { emoji: '📰', label: 'News', meta: '24/7' },
    { emoji: '👶', label: 'Kids', meta: 'Family' },
    { emoji: '🎵', label: 'Music', meta: 'Entertainment' },
  ],
  de: [
    { emoji: '⚽', label: 'Sport', meta: 'Live' },
    { emoji: '🎬', label: 'Filme', meta: 'Kinohits' },
    { emoji: '🍿', label: 'Serien', meta: 'VOD' },
    { emoji: '📰', label: 'Nachrichten', meta: '24/7' },
    { emoji: '👶', label: 'Kinder', meta: 'Familie' },
    { emoji: '🎵', label: 'Musik', meta: 'Unterhaltung' },
  ],
  es: [
    { emoji: '⚽', label: 'Deportes', meta: 'Directo' },
    { emoji: '🎬', label: 'Cine', meta: 'Taquilla' },
    { emoji: '🍿', label: 'Series', meta: 'VOD' },
    { emoji: '📰', label: 'Noticias', meta: '24/7' },
    { emoji: '👶', label: 'Infantil', meta: 'Familia' },
    { emoji: '🎵', label: 'Música', meta: 'Ocio' },
  ],
  pt: [
    { emoji: '⚽', label: 'Desporto', meta: 'Direto' },
    { emoji: '🎬', label: 'Filmes', meta: 'Bilheteira' },
    { emoji: '🍿', label: 'Séries', meta: 'VOD' },
    { emoji: '📰', label: 'Notícias', meta: '24/7' },
    { emoji: '👶', label: 'Infantil', meta: 'Família' },
    { emoji: '🎵', label: 'Música', meta: 'Entretenimento' },
  ],
  fi: [
    { emoji: '⚽', label: 'Urheilu', meta: 'Suorana' },
    { emoji: '🎬', label: 'Elokuvat', meta: 'Hitit' },
    { emoji: '🍿', label: 'Sarjat', meta: 'VOD' },
    { emoji: '📰', label: 'Uutiset', meta: '24/7' },
    { emoji: '👶', label: 'Lapset', meta: 'Perhe' },
    { emoji: '🎵', label: 'Musiikki', meta: 'Viihde' },
  ],
}

const STEP_MS = 2600

/**
 * Left column of S5: a thin-bezel OLED TV showing the « 4K LIVE FEED » status over a grid of programme themes.
 * The highlighted tile steps through the grid while the screen is on screen (never under reduced motion).
 * Purely illustrative: the whole figure is aria-hidden (its content repeats the pills and the spectrum).
 */
export function ResolutionScreen({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [ref, visible] = useInView<HTMLDivElement>({ once: false, threshold: 0.2 })
  const [active, setActive] = useState(0)
  const tiles = useCopy(SCREEN_TILES)

  useEffect(() => {
    if (reduced || !visible) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % fr.length), STEP_MS)
    return () => window.clearInterval(id)
  }, [reduced, visible])

  return (
    <div ref={ref} aria-hidden="true" className={cn('pointer-events-none select-none', className)}>
      {/* bezel */}
      <div className="rounded-[1.375rem] bg-linear-to-b from-slate-700 to-slate-900 p-[5px] shadow-[0_40px_80px_-40px_rgb(15_23_42/0.55),0_12px_24px_-12px_rgb(15_23_42/0.25)] sm:p-1.5">
        {/* screen */}
        <div className="relative isolate aspect-[16/11] overflow-hidden rounded-[1.0625rem] bg-[#04060C] sm:aspect-video">
          {/* OLED depth: warm and icy light echoing the section aura */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_100%_0%,rgb(0_102_255/0.30),transparent_70%),radial-gradient(55%_60%_at_0%_100%,rgb(255_160_110/0.16),transparent_70%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-linear-to-b from-white/[0.05] to-transparent" />

          <div className="flex h-full flex-col gap-2.5 p-3 sm:gap-3.5 sm:p-5 lg:p-6">
            {/* status bar */}
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white ring-1 ring-white/10 sm:text-[11px]">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 rounded-full bg-red-500 motion-safe:animate-ping" />
                  <span className="relative size-1.5 rounded-full bg-red-500" />
                </span>
                4K LIVE FEED
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-400 sm:text-[11px]">
                2160p · HDR · 50 FPS
              </span>
            </div>

            {/* theme grid */}
            <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-1.5 sm:gap-2.5">
              {tiles.map((tile, i) => {
                const on = i === active
                return (
                  <div
                    key={i}
                    className={cn(
                      'relative flex min-w-0 flex-col justify-between overflow-hidden rounded-lg p-2 ring-1 transition-[background-color,box-shadow] duration-500 sm:rounded-xl sm:p-3',
                      on ? 'bg-brand/25 ring-brand/70 shadow-[0_0_28px_-6px_rgb(0_102_255/0.7)]' : 'bg-white/[0.04] ring-white/[0.07]',
                    )}
                  >
                    <span className="text-base leading-none sm:text-2xl">{tile.emoji}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-[10px] font-semibold text-white sm:text-[13px]">{tile.label}</span>
                      <span className="hidden truncate text-[11px] text-slate-400 sm:block">{tile.meta}</span>
                    </span>
                    {on ? (
                      <span className="absolute top-2 right-2 size-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgb(125_211_252)] sm:top-3 sm:right-3" />
                    ) : null}
                  </div>
                )
              })}
            </div>

            {/* live progress */}
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-semibold tracking-wider text-red-400 sm:text-[11px]">LIVE</span>
              <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <span className="absolute inset-y-0 left-0 w-[86%] rounded-full bg-linear-to-r from-sky-400 to-brand" />
              </span>
              <span className="font-mono text-[10px] text-slate-400 sm:text-[11px]">UHD</span>
            </div>
          </div>

          {/* glass reflection */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.07)_0%,transparent_32%)]" />
        </div>
      </div>
      {/* stand */}
      <div className="mx-auto h-3 w-12 bg-linear-to-b from-slate-500 to-slate-300 sm:h-4 sm:w-16" />
      <div className="mx-auto h-1.5 w-36 rounded-full bg-linear-to-r from-slate-300 via-slate-400 to-slate-300 shadow-[0_10px_20px_-6px_rgb(15_23_42/0.35)] sm:w-52" />
    </div>
  )
}
