import { useId } from 'react'
import { Aura, Card, Pill, SectionHeading, Section } from '@/components/kit'
import { cn } from '@/lib/utils'
import { useInView, usePrefersReducedMotion } from './Resolution.motion'
import { ResolutionScreen } from './Resolution.screen'

/** Spec S5 — « Spécifications et textes français approuvés », word for word. */
const RESOLUTION = {
  badge: 'ÉDITION 2026 · BANDE PASSANTE DÉDIÉE & FLUX HAUTE FIDÉLITÉ',
  title: 'Grille TV & Flux Officiels King 365 TV',
  subtitle:
    "Distribué par NovaStream. Accédez à une diffusion fluide sans compression agressive. Nos flux s'adaptent intelligemment à votre bande passante pour garantir une continuité totale de diffusion.",
  spectrumTitle: 'Spectre des Résolutions',
  spectrum: [
    {
      name: '4K Ultra HD',
      detail: '(2160p / 50-60 FPS)',
      value: 100,
      label: 'Fidélité Absolue',
      text: 'Netteté cristalline pour les grands soirs de matchs et le cinéma UHD.',
    },
    {
      name: 'Full HD 1080p',
      detail: '(Haute Fluidité)',
      value: 88,
      label: 'Standard Idéal',
      text: "Qualité constante et équilibrée recommandée pour l'ensemble des chaînes.",
    },
    {
      name: 'HD 720p',
      detail: '(Adaptatif)',
      value: 65,
      label: 'Connexion Standard',
      text: 'Parfait pour les débits ADSL sans risque de coupure ni saccade.',
    },
    {
      name: 'SD 480p',
      detail: '(Mode Économique)',
      value: 40,
      label: 'Mobilité 4G',
      text: 'Basse consommation de data en déplacement sur réseau mobile.',
    },
  ],
  themesTitle: 'Thèmes au programme',
  themes: [
    { emoji: '⚽', label: 'Sports Direct' },
    { emoji: '🎬', label: 'Films & Box-Office' },
    { emoji: '🍿', label: 'Séries VOD' },
    { emoji: '📰', label: 'Actualités 24/7' },
    { emoji: '👶', label: 'Univers Jeunesse' },
    { emoji: '🎵', label: 'Musique & Divertissement' },
  ],
}

/** Fill colour per tier: full brand for 4K, cooling towards sky blue as the resolution drops. */
const FILLS = [
  'from-sky-400 via-brand to-brand',
  'from-sky-400 to-brand/85',
  'from-sky-300 to-sky-500',
  'from-sky-200 to-sky-400',
]

type Tier = (typeof RESOLUTION.spectrum)[number]

function SpectrumRow({ tier, index, filled }: { tier: Tier; index: number; filled: boolean }) {
  const nameId = useId()
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <p className="min-w-0 text-[0.9375rem] leading-snug">
          <span id={nameId} className="font-semibold text-heading">
            {tier.name}
          </span>{' '}
          <span className="text-sm text-body">{tier.detail}</span>
        </p>
        <span aria-hidden="true" className="shrink-0 text-sm font-semibold text-heading tabular-nums">
          {tier.value}%
        </span>
      </div>
      <div
        role="meter"
        aria-labelledby={nameId}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={tier.value}
        aria-valuetext={`${tier.value} %`}
        className="relative mt-2.5 h-2 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-900/[0.03] ring-inset"
      >
        <span
          className={cn(
            'absolute inset-y-0 left-0 rounded-full bg-linear-to-r transition-[width] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
            FILLS[index],
          )}
          style={{ width: filled ? `${tier.value}%` : '0%', transitionDelay: filled ? `${index * 140}ms` : undefined }}
        />
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-body">
        <strong className="font-semibold text-heading">{tier.label} :</strong> {tier.text}
      </p>
    </li>
  )
}

/** Right column of S5: the four resolution meters; they fill when scrolled into view (static under reduced motion). */
function ResolutionSpectrum({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const filled = inView || reduced
  return (
    <Card className={cn('bg-white/85 p-6 backdrop-blur-sm sm:p-8', className)}>
      <div ref={ref}>
        <h3 className="text-lg font-semibold tracking-tight text-heading">{RESOLUTION.spectrumTitle}</h3>
        <ul className="mt-6 divide-y divide-line">
          {RESOLUTION.spectrum.map((tier, i) => (
            <SpectrumRow key={tier.name} tier={tier} index={i} filled={filled} />
          ))}
        </ul>
      </div>
    </Card>
  )
}

/** Section 05 — TV grid & resolution spectrum under the Captions.ai aura (spec p.6–7). */
export function HomeResolution() {
  return (
    <Section id="grille-tv" aria-labelledby="grille-tv-title" className="scroll-mt-20">
      <Aura variant="soft" className="opacity-100" />
      <SectionHeading
        id="grille-tv-title"
        eyebrow={RESOLUTION.badge}
        title={RESOLUTION.title}
        subtitle={RESOLUTION.subtitle}
      />

      <div className="mt-12 grid items-center gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
        <ResolutionScreen className="mx-auto w-full max-w-2xl lg:col-span-7 lg:max-w-none" />
        <ResolutionSpectrum className="lg:col-span-5" />
      </div>

      <div className="mt-14 flex flex-col items-center gap-5 md:mt-16">
        <h3 className="text-sm font-semibold tracking-[0.08em] text-body uppercase">{RESOLUTION.themesTitle}</h3>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {RESOLUTION.themes.map((theme) => (
            <li key={theme.label}>
              <Pill icon={theme.emoji}>{theme.label}</Pill>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
