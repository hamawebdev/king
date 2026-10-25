import { useId } from 'react'
import { Aura, Card, Pill, SectionHeading, Section } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useInView, usePrefersReducedMotion } from './Resolution.motion'
import { ResolutionScreen } from './Resolution.screen'

/** Spec S5 — « Spécifications et textes français approuvés », word for word. French source; other languages mirror it. */
const fr = {
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
  /** Separator after a tier label (French typography puts a space before the colon). */
  colon: ' :',
  /** Screen-reader value of a meter. */
  percent: (value: number) => `${value} %`,
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    badge: '2026 EDITION · DEDICATED BANDWIDTH & HIGH-FIDELITY STREAMS',
    title: 'TV Lineup & Official King 365 TV Streams',
    subtitle:
      'Distributed by NovaStream. Enjoy smooth streaming with no aggressive compression. Our streams adapt intelligently to your bandwidth to guarantee completely uninterrupted viewing.',
    spectrumTitle: 'Resolution Spectrum',
    spectrum: [
      {
        name: '4K Ultra HD',
        detail: '(2160p / 50-60 FPS)',
        value: 100,
        label: 'Absolute Fidelity',
        text: 'Crystal-clear sharpness for big match nights and UHD cinema.',
      },
      {
        name: 'Full HD 1080p',
        detail: '(Ultra-Smooth)',
        value: 88,
        label: 'Ideal Standard',
        text: 'Consistent, balanced quality recommended for all channels.',
      },
      {
        name: 'HD 720p',
        detail: '(Adaptive)',
        value: 65,
        label: 'Standard Connection',
        text: 'Perfect for ADSL speeds, with no risk of dropouts or stuttering.',
      },
      {
        name: 'SD 480p',
        detail: '(Economy Mode)',
        value: 40,
        label: '4G Mobility',
        text: 'Low data usage when you’re on the move on a mobile network.',
      },
    ],
    themesTitle: 'What’s On',
    themes: [
      { emoji: '⚽', label: 'Live Sports' },
      { emoji: '🎬', label: 'Movies & Box Office' },
      { emoji: '🍿', label: 'VOD Series' },
      { emoji: '📰', label: '24/7 News' },
      { emoji: '👶', label: 'Kids’ World' },
      { emoji: '🎵', label: 'Music & Entertainment' },
    ],
    colon: ':',
    percent: (value: number) => `${value}%`,
  },
  de: {
    badge: 'EDITION 2026 · DEDIZIERTE BANDBREITE & HIGH-FIDELITY-STREAMS',
    title: 'Senderangebot & offizielle King 365 TV Streams',
    subtitle:
      'Vertrieben von NovaStream. Genießen Sie flüssiges Streaming ohne aggressive Kompression. Unsere Streams passen sich intelligent an Ihre Bandbreite an und garantieren eine durchgehend unterbrechungsfreie Übertragung.',
    spectrumTitle: 'Auflösungsspektrum',
    spectrum: [
      {
        name: '4K Ultra HD',
        detail: '(2160p / 50-60 FPS)',
        value: 100,
        label: 'Absolute Detailtreue',
        text: 'Kristallklare Schärfe für große Spielabende und UHD-Kino.',
      },
      {
        name: 'Full HD 1080p',
        detail: '(Besonders flüssig)',
        value: 88,
        label: 'Idealer Standard',
        text: 'Konstante, ausgewogene Qualität – empfohlen für alle Sender.',
      },
      {
        name: 'HD 720p',
        detail: '(Adaptiv)',
        value: 65,
        label: 'Standardverbindung',
        text: 'Ideal für ADSL-Anschlüsse – ohne Aussetzer oder Ruckeln.',
      },
      {
        name: 'SD 480p',
        detail: '(Sparmodus)',
        value: 40,
        label: 'Mobil mit 4G',
        text: 'Geringer Datenverbrauch unterwegs im Mobilfunknetz.',
      },
    ],
    themesTitle: 'Themen im Programm',
    themes: [
      { emoji: '⚽', label: 'Live-Sport' },
      { emoji: '🎬', label: 'Filme & Kinohits' },
      { emoji: '🍿', label: 'VOD-Serien' },
      { emoji: '📰', label: 'Nachrichten 24/7' },
      { emoji: '👶', label: 'Kinderwelt' },
      { emoji: '🎵', label: 'Musik & Unterhaltung' },
    ],
    colon: ':',
    percent: (value: number) => `${value} %`,
  },
  es: {
    badge: 'EDICIÓN 2026 · ANCHO DE BANDA DEDICADO Y EMISIONES DE ALTA FIDELIDAD',
    title: 'Parrilla de TV y emisiones oficiales King 365 TV',
    subtitle:
      'Distribuido por NovaStream. Disfruta de una emisión fluida sin compresión agresiva. Nuestras emisiones se adaptan de forma inteligente a tu ancho de banda para garantizar una continuidad total.',
    spectrumTitle: 'Espectro de resoluciones',
    spectrum: [
      {
        name: '4K Ultra HD',
        detail: '(2160p / 50-60 FPS)',
        value: 100,
        label: 'Fidelidad absoluta',
        text: 'Nitidez cristalina para las grandes noches de partido y el cine UHD.',
      },
      {
        name: 'Full HD 1080p',
        detail: '(Alta fluidez)',
        value: 88,
        label: 'Estándar ideal',
        text: 'Calidad constante y equilibrada, recomendada para todos los canales.',
      },
      {
        name: 'HD 720p',
        detail: '(Adaptativo)',
        value: 65,
        label: 'Conexión estándar',
        text: 'Perfecto para conexiones ADSL, sin riesgo de cortes ni tirones.',
      },
      {
        name: 'SD 480p',
        detail: '(Modo ahorro)',
        value: 40,
        label: 'Movilidad 4G',
        text: 'Bajo consumo de datos cuando estás fuera de casa con la red móvil.',
      },
    ],
    themesTitle: 'Temáticas en antena',
    themes: [
      { emoji: '⚽', label: 'Deportes en directo' },
      { emoji: '🎬', label: 'Cine y taquilla' },
      { emoji: '🍿', label: 'Series VOD' },
      { emoji: '📰', label: 'Noticias 24/7' },
      { emoji: '👶', label: 'Mundo infantil' },
      { emoji: '🎵', label: 'Música y entretenimiento' },
    ],
    colon: ':',
    percent: (value: number) => `${value} %`,
  },
  pt: {
    badge: 'EDIÇÃO 2026 · LARGURA DE BANDA DEDICADA E EMISSÕES DE ALTA FIDELIDADE',
    title: 'Grelha de TV e emissões oficiais King 365 TV',
    subtitle:
      'Distribuído pela NovaStream. Aceda a uma emissão fluida sem compressão agressiva. As nossas emissões adaptam-se de forma inteligente à sua largura de banda para garantir uma continuidade total.',
    spectrumTitle: 'Espetro de resoluções',
    spectrum: [
      {
        name: '4K Ultra HD',
        detail: '(2160p / 50-60 FPS)',
        value: 100,
        label: 'Fidelidade absoluta',
        text: 'Nitidez cristalina para as grandes noites de jogo e o cinema UHD.',
      },
      {
        name: 'Full HD 1080p',
        detail: '(Alta fluidez)',
        value: 88,
        label: 'Padrão ideal',
        text: 'Qualidade constante e equilibrada, recomendada para todos os canais.',
      },
      {
        name: 'HD 720p',
        detail: '(Adaptativo)',
        value: 65,
        label: 'Ligação padrão',
        text: 'Perfeito para ligações ADSL, sem risco de cortes nem paragens.',
      },
      {
        name: 'SD 480p',
        detail: '(Modo económico)',
        value: 40,
        label: 'Mobilidade 4G',
        text: 'Baixo consumo de dados em deslocação na rede móvel.',
      },
    ],
    themesTitle: 'Temas na programação',
    themes: [
      { emoji: '⚽', label: 'Desporto em direto' },
      { emoji: '🎬', label: 'Filmes e bilheteira' },
      { emoji: '🍿', label: 'Séries VOD' },
      { emoji: '📰', label: 'Notícias 24/7' },
      { emoji: '👶', label: 'Universo infantil' },
      { emoji: '🎵', label: 'Música e entretenimento' },
    ],
    colon: ':',
    percent: (value: number) => `${value}%`,
  },
  fi: {
    badge: 'VERSIO 2026 · OMA KAISTANLEVEYS JA KORKEALAATUISET LÄHETYKSET',
    title: 'TV-kanavat ja viralliset King 365 TV -⁠lähetykset',
    subtitle:
      'NovaStreamin jakelema. Nauti sujuvasta lähetyksestä ilman rajua pakkausta. Lähetyksemme mukautuvat älykkäästi kaistanleveyteesi ja takaavat täysin katkeamattoman katselun.',
    spectrumTitle: 'Resoluutiotasot',
    spectrum: [
      {
        name: '4K Ultra HD',
        detail: '(2160p / 50-60 FPS)',
        value: 100,
        label: 'Ehdoton tarkkuus',
        text: 'Kristallinkirkas terävyys suuriin otteluiltoihin ja UHD-elokuviin.',
      },
      {
        name: 'Full HD 1080p',
        detail: '(Erittäin sujuva)',
        value: 88,
        label: 'Ihanteellinen perustaso',
        text: 'Tasainen ja tasapainoinen laatu, suositeltu kaikille kanaville.',
      },
      {
        name: 'HD 720p',
        detail: '(Mukautuva)',
        value: 65,
        label: 'Tavallinen yhteys',
        text: 'Täydellinen ADSL-yhteyksille ilman katkoksia tai nykimistä.',
      },
      {
        name: 'SD 480p',
        detail: '(Säästötila)',
        value: 40,
        label: 'Liikkeellä 4G:llä',
        text: 'Vähäinen datankulutus liikkeellä mobiiliverkossa.',
      },
    ],
    themesTitle: 'Ohjelmatarjonnan teemat',
    themes: [
      { emoji: '⚽', label: 'Urheilu suorana' },
      { emoji: '🎬', label: 'Elokuvat ja hitit' },
      { emoji: '🍿', label: 'VOD-sarjat' },
      { emoji: '📰', label: 'Uutiset 24/7' },
      { emoji: '👶', label: 'Lasten maailma' },
      { emoji: '🎵', label: 'Musiikki ja viihde' },
    ],
    colon: ':',
    percent: (value: number) => `${value} %`,
  },
}

/** Fill colour per tier: full brand for 4K, cooling towards sky blue as the resolution drops. */
const FILLS = [
  'from-sky-400 via-brand to-brand',
  'from-sky-400 to-brand/85',
  'from-sky-300 to-sky-500',
  'from-sky-200 to-sky-400',
]

type Tier = (typeof fr.spectrum)[number]

function SpectrumRow({ tier, index, filled }: { tier: Tier; index: number; filled: boolean }) {
  const nameId = useId()
  const t = useCopy(COPY)
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
        aria-valuetext={t.percent(tier.value)}
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
        <strong className="font-semibold text-heading">
          {tier.label}
          {t.colon}
        </strong>{' '}
        {tier.text}
      </p>
    </li>
  )
}

/** Right column of S5: the four resolution meters; they fill when scrolled into view (static under reduced motion). */
function ResolutionSpectrum({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const filled = inView || reduced
  const t = useCopy(COPY)
  return (
    <Card className={cn('bg-white/85 p-6 backdrop-blur-sm sm:p-8', className)}>
      <div ref={ref}>
        <h3 className="text-lg font-semibold tracking-tight text-heading">{t.spectrumTitle}</h3>
        <ul className="mt-6 divide-y divide-line">
          {t.spectrum.map((tier, i) => (
            <SpectrumRow key={i} tier={tier} index={i} filled={filled} />
          ))}
        </ul>
      </div>
    </Card>
  )
}

/** Section 05 — TV grid & resolution spectrum under the Captions.ai aura (spec p.6–7). */
export function HomeResolution() {
  const t = useCopy(COPY)
  return (
    <Section id="grille-tv" aria-labelledby="grille-tv-title" className="scroll-mt-20">
      <Aura variant="soft" className="opacity-100" />
      <SectionHeading
        id="grille-tv-title"
        eyebrow={t.badge}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="mt-12 grid items-center gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
        <ResolutionScreen className="mx-auto w-full max-w-2xl lg:col-span-7 lg:max-w-none" />
        <ResolutionSpectrum className="lg:col-span-5" />
      </div>

      <div className="mt-14 flex flex-col items-center gap-5 md:mt-16">
        <h3 className="text-sm font-semibold tracking-[0.08em] text-body uppercase">{t.themesTitle}</h3>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {t.themes.map((theme, i) => (
            <li key={i}>
              <Pill icon={theme.emoji}>{theme.label}</Pill>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
