import { BRAND } from '@/lib/site'
import { BAND, COLUMN, SPLIT, SPLIT_TEXT, SPLIT_TITLE, TILE, cx } from '../styles'
import { CheckList, Eyebrow, GlyphPanel } from '../ui'

const VOD = {
  eyebrow: 'Films & Séries',
  title: `Vidéothèque ${BRAND}`,
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

/** Small figure tile (catalogue counts per genre). */
function CountTile({ value, label }: { value: string; label: string }) {
  return (
    <div className={cx(TILE, 'rounded-[14px] p-[18px] text-center')}>
      <b className="block font-archivo text-[24px] font-black text-lp-blue">{value}</b>
      <span className="text-[13px] font-bold text-lp-muted">{label}</span>
    </div>
  )
}

/** On-demand catalogue: pitch beside a glyph panel, then the count per genre. */
export function HomeVod() {
  return (
    <section data-section="home-vod" className={BAND}>
      <div className={cx(COLUMN, SPLIT)}>
        <GlyphPanel icon="ti-movie" fill="night" />
        <div>
          <Eyebrow>{VOD.eyebrow}</Eyebrow>
          <h2 className={cx(SPLIT_TITLE, 'mt-[14px] mb-[16px]')}>{VOD.title}</h2>
          <p className={SPLIT_TEXT}>{VOD.text}</p>
          <CheckList items={VOD.checks.map((label) => ({ icon: 'ti-check', label }))} />
        </div>
      </div>
      <div className={cx(COLUMN, 'mt-[40px]')}>
        <div className="mt-[8px] grid grid-cols-[repeat(4,1fr)] gap-[14px] lp-lg:grid-cols-[repeat(2,1fr)] lp-sm:grid-cols-[1fr]">
          {VOD.movies.map((genre) => (
            <CountTile key={genre.label} {...genre} />
          ))}
        </div>
      </div>
    </section>
  )
}
