import { Section, SectionHeading } from '@/components/kit'
import { WHATSAPP_DISPLAY, waLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/** French typography: no-break space before ! ? : ; » and after «, so punctuation never orphans. Text is unchanged. */
const fr = (t: string) => t.replace(/ ([!?:;»])/g, ' $1').replace(/« /g, '« ')

type Pillar = { emoji: string; title: string; text: ReactNode; wide?: boolean }

const WA = (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold whitespace-nowrap text-brand underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
  >
    {WHATSAPP_DISPLAY}
  </a>
)

/** Spec S12 « Grille Bento des 6 Piliers NovaStream », word for word. 2 rows × 3 tiles; tiles 1 and 6 are wide. */
const PILLARS: Pillar[] = [
  {
    emoji: '👑',
    title: "L'Exigence NovaStream (Service Plébiscité)",
    text: fr(
      "Nos abonnés saluent la transparence de l'accompagnement NovaStream et la régularité exemplaire des flux King 365 TV, soir après soir, dès le premier jour d'activation.",
    ),
    wide: true,
  },
  {
    emoji: '📱',
    title: 'Compatible sur Tous Vos Écrans',
    text: 'Que vous utilisiez les applications King 365 (V2, V3, V4) ou un lecteur payant (IBO Player, Bob Player, Hot Player), votre abonnement activé par NovaStream fonctionne sur Smart TV, Box Android, Firestick, Apple et PC.',
  },
  {
    emoji: '✨',
    title: "Image Haute Fidélité jusqu'en 4K HDR",
    text: "Du 480p économique au véritable 4K Ultra HD à 60 FPS en passant par le 1080p, le flux fourni par NovaStream s'ajuste automatiquement à votre débit Internet sans compression agressive.",
  },
  {
    emoji: '🌐',
    title: 'Relais NovaStream & DNS Dédié',
    text: 'Un réseau de relais haute disponibilité couplé au DNS Dédié NovaStream, conçu pour éviter les blocages des opérateurs (FAI) selon votre position géographique.',
  },
  {
    emoji: '⚡',
    title: 'Zapping Éclair (< 0,5s)',
    text: "Passez d'une chaîne à l'autre en moins d'une seconde grâce à l'optimisation des accès NovaStream, sans écran noir ni temps de chargement.",
  },
  {
    emoji: '🎧',
    title: 'Aide & Conciergerie NovaStream 7j/7',
    text: (
      <>
        Un conseiller technique NovaStream vous accompagne personnellement sur WhatsApp ({WA}) à chaque étape, de la validation du
        paiement jusqu'au réglage complet de votre écran.
      </>
    ),
    wide: true,
  },
]

function PillarTile({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <li
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-line p-6 shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7',
        pillar.wide ? 'bg-mist md:col-span-2 lg:col-span-3' : 'bg-canvas lg:col-span-2',
      )}
    >
      {pillar.wide ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-2 text-[9rem] leading-none opacity-[0.06] grayscale select-none sm:text-[11rem]"
        >
          {pillar.emoji}
        </span>
      ) : null}
      <div className="relative flex items-center justify-between gap-4">
        <span
          aria-hidden="true"
          className={cn(
            'grid size-12 shrink-0 place-items-center rounded-xl text-2xl leading-none',
            pillar.wide ? 'bg-canvas shadow-card' : 'bg-brand-soft',
          )}
        >
          {pillar.emoji}
        </span>
        <span aria-hidden="true" className="text-xs font-semibold tracking-[0.12em] text-slate-400 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3
        className={cn(
          'relative mt-6 font-sans font-semibold tracking-tight text-balance text-heading',
          pillar.wide ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl',
        )}
      >
        {fr(pillar.title)}
      </h3>
      <p className={cn('relative mt-3 text-[0.9375rem] leading-relaxed text-pretty text-body', pillar.wide && 'max-w-xl sm:text-base')}>
        {typeof pillar.text === 'string' ? fr(pillar.text) : pillar.text}
      </p>
    </li>
  )
}

/** Section 12 — « Ce Qui Distingue NovaStream ! »: bento of the 6 pillars. */
export function HomePillars() {
  return (
    <Section id="piliers" aria-labelledby="home-pillars-title" className="scroll-mt-20">
      <SectionHeading
        id="home-pillars-title"
        eyebrow="NOVASTREAM · DISTRIBUTEUR AGRÉÉ KING 365 TV"
        title={fr('Ce Qui Distingue NovaStream !')}
        subtitle="Des milliers de foyers en France, Belgique, Suisse et Canada confient leurs soirées télé à NovaStream. En tant que distributeur agréé King 365 TV, découvrez pourquoi nos abonnés nous restent fidèles année après année."
      />
      <ul role="list" className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-7">
        {PILLARS.map((pillar, i) => (
          <PillarTile key={pillar.title} pillar={pillar} index={i} />
        ))}
      </ul>
    </Section>
  )
}
