import { Check } from 'lucide-react'
import { Card, Pill, Section, SectionHeading } from '@/components/kit'
import { cn } from '@/lib/utils'

/** Spec S9 (p. 9–10), copy word for word. */
const PILLS = ['Qualité 4K & FHD Native', 'Audio VF & VOSTFR', 'Mises à Jour Hebdomadaires', 'Sorties Box-Office Récentes']

type Genre = { name: string; count: string; emoji: string; well: string }

const GENRES: Genre[] = [
  { name: 'Action & Aventure', count: '+2 500', emoji: '💥', well: 'bg-orange-50 ring-orange-100' },
  { name: 'Comédie & Divertissement', count: '+2 000', emoji: '😂', well: 'bg-amber-50 ring-amber-100' },
  { name: 'Drame & Thriller', count: '+2 200', emoji: '🎭', well: 'bg-slate-100 ring-slate-200' },
  { name: 'Sci-Fi & Fantasy', count: '+1 400', emoji: '🚀', well: 'bg-violet-50 ring-violet-100' },
  { name: 'Horreur & Épouvante', count: '+1 100', emoji: '👻', well: 'bg-rose-50 ring-rose-100' },
  { name: 'Romance & Passion', count: '+1 300', emoji: '❤️', well: 'bg-pink-50 ring-pink-100' },
  { name: 'Animation & Jeunesse', count: '+1 000', emoji: '🧸', well: 'bg-sky-50 ring-sky-100' },
  { name: 'Documentaires & Société', count: '+900', emoji: '🌍', well: 'bg-emerald-50 ring-emerald-100' },
]

/** S9 — VOD library: heading with the « king 365 tv me » SEO subtitle, four reassurance pills, eight genre tiles. */
export function HomeVodLibrary() {
  return (
    <Section id="videotheque" tone="mist" aria-labelledby="videotheque-title" className="scroll-mt-20">
      <SectionHeading
        id="videotheque-title"
        eyebrow="CINÉMA & SÉRIES À LA DEMANDE · VOD ILLIMITÉE"
        title={"Vidéothèque King\u00a0365\u00a0TV par NovaStream"}
        subtitle="Plus de 16 000 titres en ultra haute définition intégrés sans surcoût dans votre abonnement King 365 TV. Découvrez ce que l'accès King 365 TV me permet d'explorer chaque soir : blockbusters récents, intégrales de séries et documentaires exclusifs classés par genre."
      />

      <ul className="m-0 mt-8 flex list-none flex-wrap justify-center gap-2.5 p-0">
        {PILLS.map((p) => (
          <li key={p}>
            <Pill icon={<Check className="size-4 text-brand" strokeWidth={2.5} />}>{p}</Pill>
          </li>
        ))}
      </ul>

      <ul className="m-0 mt-12 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 md:mt-14 lg:grid-cols-4 lg:gap-5">
        {GENRES.map((g) => (
          <Card as="li" key={g.name} interactive className="flex flex-col p-4 sm:p-6">
            <span
              aria-hidden="true"
              className={cn('flex size-11 items-center justify-center rounded-xl text-2xl ring-1 ring-inset sm:size-12', g.well)}
            >
              {g.emoji}
            </span>
            <h3 className="mt-4 text-[0.9375rem] leading-snug font-semibold tracking-tight text-heading sm:mt-5 sm:text-base">
              {g.name}
            </h3>
            <p className="mt-auto flex items-baseline gap-1.5 pt-3 text-body">
              <span className="text-2xl font-bold tracking-tight text-heading tabular-nums sm:text-[1.75rem]">{g.count}</span>
              <span className="text-sm">Titres</span>
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
