import { ArrowDownToLine, MonitorSmartphone, Tv } from 'lucide-react'
import { ButtonLink, Card, Section, SectionHeading } from '@/components/kit'
import { routeHref } from '@/lib/site'
import { cn } from '@/lib/utils'

type AppVersion = {
  version: 'V2' | 'V3' | 'V4'
  name: string
  badge: string
  target: string
  /** Spec note shown after the target, in italics. */
  targetNote?: string
  description: string
  cta: string
  /** Spec « [Mise en avant] »: the featured card (visual emphasis only, no label). */
  featured?: boolean
  tvOnly?: boolean
}

/** Spec S3 — the three official apps, left to right, word for word. */
const APPS: AppVersion[] = [
  {
    version: 'V2',
    name: 'King 365 TV Version 2 (V2)',
    badge: 'Édition Classique Éprouvée',
    target: 'Google TV, boîtiers TV Box, téléviseurs Smart TV et smartphones Android.',
    description:
      'Légèreté exemplaire, stabilité maximale sur tous types de débits (même modérés) et faible consommation de mémoire vive.',
    cta: 'Télécharger King 365 V2 (APK)',
  },
  {
    version: 'V3',
    name: 'King 365 TV Version 3 (V3)',
    badge: 'Version Majeure · Multi-Écrans',
    target: 'Google TV, Android TV, TV Box, smartphones et tablettes Android.',
    description:
      'Polyvalence maximale, interface dynamique, guide des programmes (EPG) interactif, gestion optimisée des favoris et excellente réactivité.',
    cta: 'Télécharger King 365 V3 (APK)',
  },
  {
    version: 'V4',
    name: 'King 365 TV Version 4 (V4 - Édition 2026)',
    badge: 'Dernière Version 2026 · TV Uniquement',
    target: 'Google TV récents, Smart TV Android, boîtiers TV Box et Fire TV Stick compatibles.',
    targetNote: '(Non compatible smartphones)',
    description:
      'Interface cinéma moderne et immersive dédiée aux grands écrans, navigation ultra-fluide, zapping instantané et optimisation native 4K.',
    cta: 'Télécharger King 365 V4 (APK)',
    featured: true,
    tvOnly: true,
  },
]

/**
 * The spec gives no APK URL, so every CTA leads to the installation hub (S11), which lists the
 * Downloader codes per version.
 */
const APK_HREF = routeHref('/#installation')

/** The three app cards (V2 → V3 → V4) without the section shell. Reused on the Downloads page. */
export function AppsMatrix({
  className,
  headingLevel = 'h3',
  installHref = APK_HREF,
}: {
  className?: string
  headingLevel?: 'h2' | 'h3'
  /** Where the APK CTAs point (default: the homepage install hub). Pass '#installation' when the hub is on the same page. */
  installHref?: string
}) {
  const H = headingLevel
  return (
    <ul className={cn('m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 lg:gap-6', className)}>
      {APPS.map((app) => {
        const TargetIcon = app.tvOnly ? Tv : MonitorSmartphone
        return (
          <Card
            as="li"
            key={app.version}
            interactive
            className={cn(
              'relative flex flex-col p-6 sm:p-7',
              app.featured && 'border-brand ring-1 ring-brand shadow-card-hover md:-my-3 md:py-9',
            )}
          >
            <div className="flex flex-col items-start gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold tracking-tight',
                  app.featured ? 'bg-brand text-white' : 'bg-brand-soft text-brand',
                )}
              >
                {app.version}
              </span>
              <p
                className={cn(
                  'inline-flex rounded-full border px-2.5 py-1 text-[11px] leading-snug font-semibold tracking-[0.06em] uppercase',
                  app.featured ? 'border-brand/20 bg-brand-soft text-brand' : 'border-line bg-slate-50 text-body',
                )}
              >
                {app.badge}
              </p>
            </div>

            <H className="mt-5 text-xl leading-snug font-bold tracking-tight text-balance text-heading">{app.name}</H>

            <div className="mt-4 flex gap-2.5 rounded-xl border border-line bg-slate-50/70 p-3.5 text-sm leading-relaxed">
              <TargetIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
              <p>
                <span className="font-semibold text-heading">Cible : </span>
                {app.target}
                {app.targetNote ? (
                  <>
                    {' '}
                    <em className="font-medium text-heading">{app.targetNote}</em>.
                  </>
                ) : null}
              </p>
            </div>

            <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-pretty text-body">{app.description}</p>

            <ButtonLink href={installHref} variant={app.featured ? 'brand' : 'outline'} fullWidth className="mt-6">
              <ArrowDownToLine aria-hidden="true" className="size-4.5 shrink-0" />
              {app.cta}
            </ButtonLink>
          </Card>
        )
      })}
    </ul>
  )
}

/** Section 03 — Official apps matrix V2 → V3 → V4 on the mist → white fade. */
export function HomeAppsMatrix() {
  return (
    <Section id="applications" tone="mist-fade" className="scroll-mt-20">
      <SectionHeading
        eyebrow="ÉCOSYSTÈME CERTIFIÉ · APPLICATIONS DÉDIÉES"
        title="L'Expérience King 365 TV sur Vos Écrans"
        subtitle="Propulsé par NovaStream. Accédez à vos flux avec une fluidité absolue grâce aux applications officielles King 365 TV, calibrées sur-mesure pour chaque type d'appareil."
      />
      <AppsMatrix className="mt-12 md:mt-16" />
    </Section>
  )
}
