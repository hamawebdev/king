import { Section, SectionHeading } from '@/components/kit'
import { cn } from '@/lib/utils'

type Stage = 'past' | 'now' | 'next'

type Milestone = {
  /** « 2021 », « Aujourd'hui », « Horizon 2027 » */
  when: string
  /** « Origine », « Partenariat » … */
  phase: string
  title: string
  text: string
  stage: Stage
}

/** Spec S7 (p. 7–8), copy word for word. */
const MILESTONES: Milestone[] = [
  {
    when: '2021',
    phase: 'Origine',
    title: 'Une Volonté de Clarté',
    text: "Face aux saturations fréquentes du marché, NovaStream est né d'un objectif précis : réconcilier haute fidélité visuelle, clarté des offres et suivi client rigoureux.",
    stage: 'past',
  },
  {
    when: '2023',
    phase: 'Partenariat',
    title: 'Distributeur Agréé King 365',
    text: "Sélectionné pour la distribution officielle de l'infrastructure King 365 TV. Déploiement de relais d'activation dédiés garantissant un accès officiel, stable et conforme.",
    stage: 'past',
  },
  {
    when: "Aujourd'hui",
    phase: 'Expérience Client',
    title: '+50 000 Accès & Support 7j/7',
    text: "Mise en place d'un système de distribution direct : livraison instantanée des accès via WhatsApp et e-mail, accompagnement technique personnalisé et garantie continue.",
    stage: 'now',
  },
  {
    when: 'Horizon 2027',
    phase: 'Innovation',
    title: 'Écosystème & Mises à Jour',
    text: "Préparation constante des prochaines évolutions applicatives King 365 TV, optimisation des guides multi-écrans et portails d'assistance proactive.",
    stage: 'next',
  },
]

function Marker({ stage }: { stage: Stage }) {
  if (stage === 'now') {
    return (
      <span className="relative flex size-6 items-center justify-center rounded-full bg-brand ring-4 ring-brand/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/30 motion-reduce:hidden" />
        <span className="relative size-2 rounded-full bg-white" />
      </span>
    )
  }
  if (stage === 'next') {
    return (
      <span className="flex size-6 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-canvas">
        <span className="size-1.5 rounded-full bg-slate-300" />
      </span>
    )
  }
  return (
    <span className="flex size-6 items-center justify-center rounded-full border border-brand/20 bg-brand-soft">
      <span className="size-2 rounded-full bg-brand" />
    </span>
  )
}

/**
 * S7 — Notre Parcours: four milestones from 2021 to the 2027 horizon. Phone: vertical rail;
 * desktop: one horizontal connector. Past steps solid, « Aujourd'hui » highlighted, 2027 dashed (still ahead).
 */
export function HomeRoadmap() {
  return (
    <Section id="parcours" aria-labelledby="parcours-title" className="scroll-mt-20">
      <SectionHeading
        id="parcours-title"
        eyebrow="NOTRE PARCOURS · CONFIANCE & ENGAGEMENT"
        title="Les Étapes d'un Partenariat d'Excellence"
      />

      <ol className="m-0 mt-12 grid list-none p-0 md:mt-16 lg:grid-cols-4">
        {MILESTONES.map((m, i) => {
          const last = i === MILESTONES.length - 1
          // The segment leading to the future milestone is dashed.
          const dashedNext = MILESTONES[i + 1]?.stage === 'next'
          return (
            <li key={m.when} className={cn('relative pl-11 lg:pt-12 lg:pr-8 lg:pl-0', !last && 'pb-10 lg:pb-0')}>
              {/* connector: vertical on phone/tablet, horizontal on desktop */}
              {!last ? (
                <>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-8 bottom-1 left-[11px] lg:hidden',
                      dashedNext ? 'border-l-2 border-dashed border-slate-300' : 'w-0.5 bg-brand/25',
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-[11px] right-2 left-8 hidden lg:block',
                      dashedNext ? 'border-t-2 border-dashed border-slate-300' : 'h-0.5 bg-brand/25',
                    )}
                  />
                </>
              ) : null}
              <span aria-hidden="true" className="absolute top-0 left-0">
                <Marker stage={m.stage} />
              </span>

              <p
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm font-semibold',
                  m.stage === 'next' ? 'text-body' : 'text-brand',
                )}
              >
                <span>{m.when}</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className={m.stage === 'next' ? 'text-body' : 'text-heading'}>{m.phase}</span>
              </p>
              <h3 className="mt-2 text-lg leading-snug font-semibold tracking-tight text-balance text-heading sm:text-xl">
                {m.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-body">{m.text}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
