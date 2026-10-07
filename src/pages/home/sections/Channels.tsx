import { BRAND_UPPER } from '@/lib/site'
import type { IconText } from '../data'
import { BAND, COLUMN, TILE, cx } from '../styles'
import { Accent, ChipRow, RowLabel, SectionHead } from '../ui'

const CHANNELS = {
  eyebrow: 'Édition 2026',
  titleStart: 'Grille ',
  titleBlue: BRAND_UPPER,
  titleEnd: ' TV',
  text: 'Un large choix de programmes internationaux, des grandes chaînes nationales aux bouquets thématiques.',
  qualities: [
    { value: '4K', label: 'Ultra HD' },
    { value: 'FHD', label: '1080p' },
    { value: 'HD', label: '720p' },
    { value: 'SD', label: '480p' },
  ],
  catsTitle: 'Thèmes au programme',
  cats: [
    { icon: 'ti-ball-football', label: 'Sports' },
    { icon: 'ti-movie', label: 'Films' },
    { icon: 'ti-device-tv', label: 'Séries' },
    { icon: 'ti-news', label: 'News' },
    { icon: 'ti-mood-kid', label: 'Jeunesse' },
    { icon: 'ti-music', label: 'Musique' },
  ] as IconText[],
}

/** Quality level tile (4K / FHD / HD / SD). */
function QualityTile({ value, label }: { value: string; label: string }) {
  return (
    <div className={cx(TILE, 'rounded-[16px] p-[24px] text-center')}>
      <b className="block font-archivo text-[28px] font-black text-lp-blue">{value}</b>
      <span className="text-[14px] font-bold text-lp-muted">{label}</span>
    </div>
  )
}

/** Channels and picture quality. */
export function HomeChannels() {
  return (
    <section data-section="home-channels" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={CHANNELS.eyebrow}
          title={
            <>
              {CHANNELS.titleStart}
              <Accent>{CHANNELS.titleBlue}</Accent>
              {CHANNELS.titleEnd}
            </>
          }
          text={CHANNELS.text}
        />
        <div className="my-[32px] grid grid-cols-[repeat(4,1fr)] gap-[16px] lp-lg:grid-cols-[repeat(2,1fr)] lp-md:grid-cols-[1fr]">
          {CHANNELS.qualities.map((quality) => (
            <QualityTile key={quality.value} {...quality} />
          ))}
        </div>
        <RowLabel className="mt-[26px]">{CHANNELS.catsTitle}</RowLabel>
        <ChipRow items={CHANNELS.cats} />
      </div>
    </section>
  )
}
