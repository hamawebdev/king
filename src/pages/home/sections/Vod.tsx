import { CheckList, GenreRow, Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/site'

const VOD = {
  eyebrow: 'Films & Séries',
  text: 'Plus de 8000 titres à la demande, classés par genre et par année.',
  checks: ['Versions 4K proposées', 'Pistes audio au choix', 'Ajouts chaque semaine', 'Sorties toutes récentes'],
  movies: [
    { value: '1600+', label: 'Action' },
    { value: '1300+', label: 'Comédie' },
    { value: '1900+', label: 'Drame' },
    { value: '700+', label: 'Sci-Fi' },
    { value: '500+', label: 'Horreur' },
    { value: '800+', label: 'Romance' },
    { value: '600+', label: 'Animation' },
    { value: '900+', label: 'Documentaire' },
  ],
}

/**
 * Ledger edges per breakpoint (1 / 2 / 4 columns): the first row of each layout opens on the ink
 * ledger rule, the last row closes with a hairline, so the grid reads as one statement.
 */
const rowEdge = [
  'border-t-ink',
  'md:border-t-ink',
  'lg:border-t-ink',
  'lg:border-t-ink',
  'lg:border-b',
  'lg:border-b',
  'md:border-b',
  'border-b',
]

/** On-demand catalogue: head with the four promises, then the genre ledger (4 × 2 / 2 × 4 / 1 column). */
export function HomeVod() {
  return (
    <Section zone="paper" dataSection="home-vod">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-grid">
        <Reveal className="lg:col-span-7">
          <SectionHead
            eyebrow={VOD.eyebrow}
            title={
              <>
                Vidéothèque <Kw>{BRAND}</Kw>
              </>
            }
            lead={VOD.text}
          />
        </Reveal>
        <Reveal index={1} className="lg:col-span-5 lg:pb-1.5">
          <CheckList
            items={VOD.checks}
            className="gap-x-6 gap-y-3 font-medium sm:grid-cols-2 lg:border-l lg:border-z-line lg:pl-8"
          />
        </Reveal>
      </div>

      <Reveal index={2} className="mt-head">
        <ul className="m-0 grid list-none gap-x-grid p-0 md:grid-cols-2 lg:grid-cols-4">
          {VOD.movies.map((genre, i) => (
            <GenreRow
              key={genre.label}
              genre={genre.label}
              count={genre.value}
              className={cn('py-4 md:py-6', rowEdge[i])}
            />
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
