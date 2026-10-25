import { Gauge, MapPin, ServerCog, type LucideIcon } from 'lucide-react'
import { Card, Section, SectionHeading } from '@/components/kit'
import { cn } from '@/lib/utils'
import { LiveSportPitch } from './LiveSport.visual'

/** Spec S8 — « Spécifications et textes français approuvés », word for word. Sports and competitions only: no channel names. */
const SPORT = {
  badge: 'INFRASTRUCTURE SPORTIVE DÉDIÉE · ZÉRO COUPURE',
  title: "King 365 TV & Le Sport en Direct : L'Excellence 4K HDR",
  subtitle:
    "Pourquoi NovaStream a fait le choix exclusif de l'infrastructure King 365 TV ? Parce qu'un événement sportif majeur ne tolère aucune coupure. Grâce à un réseau de serveurs ultra-performants optimisés pour la France et l'Europe, bénéficiez d'une fluidité imbattable en 50/60 FPS, du Full HD jusqu'au véritable 4K HDR, même lors des pics d'audience des plus grandes rencontres internationales.",
  /** The three figures the spec's note puts forward; labels reuse the approved copy's own phrases. */
  stats: [
    { value: '4K HDR', label: "Du Full HD jusqu'au véritable 4K HDR" },
    { value: '50/60 FPS', label: 'Fluidité imbattable' },
    { value: '99,99%', label: "Stabilité en Pic d'Audience" },
  ],
  disciplinesTitle: 'Disciplines Majeures Diffusées',
  disciplines: [
    { emoji: '⚽', name: 'Football', detail: 'Grands Championnats & Tournois Majeurs' },
    { emoji: '🏎️', name: 'Sports Mécaniques', detail: 'Courses Automobiles & Moto en Direct' },
    { emoji: '🥊', name: 'Sports de Combat', detail: 'Soirées Chocs & Arts Martiaux' },
    { emoji: '🎾', name: 'Tennis', detail: 'Tournois Internationaux & Grands Chelems' },
    { emoji: '🏀', name: 'Basketball', detail: 'Ligue Majeure & Compétitions Internationales' },
  ],
  pillarsTitle: 'Les 3 Piliers Techniques',
  pillars: [
    {
      icon: ServerCog,
      title: "Stabilité en Pic d'Audience",
      text: 'Serveurs calibrés pour absorber sans latence les millions de requêtes simultanées.',
    },
    {
      icon: Gauge,
      title: 'Fréquence Élevée 50/60 FPS',
      text: 'Fluidité intégrale sur les actions rapides : trajectoires nettes sans effet de flou.',
    },
    {
      icon: MapPin,
      title: 'Diffusion Francophone & UE',
      text: 'Liaisons directes optimisées pour les résidents en France, Belgique et Suisse.',
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
}

/** Section 08 — Live sport in 4K HDR / 50-60 FPS (spec p.8–9). */
export function HomeLiveSport() {
  return (
    <Section id="sport" aria-labelledby="sport-title" className="scroll-mt-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <SectionHeading
          id="sport-title"
          align="left"
          eyebrow={SPORT.badge}
          title={SPORT.title}
          subtitle={<span className="block text-[0.9375rem] sm:text-base">{SPORT.subtitle}</span>}
          className="lg:col-span-6"
        />

        <Card className="p-2.5 sm:p-3 lg:col-span-6">
          <LiveSportPitch />
          <dl className="grid grid-cols-3 divide-x divide-line px-1 pt-4 pb-2 sm:pt-5 sm:pb-3">
            {SPORT.stats.map((stat) => (
              <div key={stat.value} className="flex min-w-0 flex-col-reverse justify-end gap-1 px-2 text-center sm:px-4">
                <dt className="text-[11px] leading-snug text-body sm:text-xs">{stat.label}</dt>
                <dd className="text-lg font-bold tracking-tight whitespace-nowrap text-heading tabular-nums sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>

      <div className="mt-16 md:mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{SPORT.disciplinesTitle}</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {SPORT.disciplines.map((d, i) => (
            <Card
              as="li"
              interactive
              key={d.name}
              className={cn(
                'flex items-center gap-4 p-4 lg:flex-col lg:items-start lg:gap-5 lg:p-5',
                i === SPORT.disciplines.length - 1 && 'sm:col-span-2 lg:col-span-1',
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-2xl leading-none"
              >
                {d.emoji}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-heading">{d.name}</span>
                <span className="mt-0.5 block text-sm leading-snug text-body">({d.detail})</span>
              </span>
            </Card>
          ))}
        </ul>
      </div>

      <div className="mt-16 md:mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{SPORT.pillarsTitle}</h3>
        <ol className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
          {SPORT.pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <li key={p.title} className="border-t border-line pt-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_20px_-8px_rgb(0_102_255/0.6)]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden="true" className="font-mono text-sm text-slate-400 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-semibold tracking-tight text-heading">{p.title}</h4>
                <p className="mt-2 leading-relaxed text-body">{p.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
