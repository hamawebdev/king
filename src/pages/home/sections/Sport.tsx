import type { IconText } from '../data'
import { BAND_TIGHT, COLUMN, SPLIT, SPLIT_TEXT, SPLIT_TITLE, TINT, cx } from '../styles'
import { Eyebrow, GlyphPanel, PillList } from '../ui'

const SPORT = {
  eyebrow: 'Matchs en live',
  title: 'Tout le Sport en Direct',
  text: 'Football, basket, tennis ou sports mécaniques : vivez chaque rencontre en direct avec une image soignée, où que vous soyez.',
  pills: [
    { icon: 'ti-ball-football', label: 'Football' },
    { icon: 'ti-ball-basketball', label: 'Basketball' },
    { icon: 'ti-ball-tennis', label: 'Tennis' },
    { icon: 'ti-car', label: 'Voitures' },
  ] as IconText[],
}

/** Sport: pitch and sport pills beside a glyph panel. */
export function HomeSport() {
  return (
    <section data-section="home-sport" className={cx(BAND_TIGHT, TINT)}>
      <div className={cx(COLUMN, SPLIT)}>
        <div>
          <Eyebrow>{SPORT.eyebrow}</Eyebrow>
          <h2 className={cx(SPLIT_TITLE, 'mt-[14px] mb-[16px]')}>{SPORT.title}</h2>
          <p className={SPLIT_TEXT}>{SPORT.text}</p>
          <PillList items={SPORT.pills} />
        </div>
        <GlyphPanel icon="ti-ball-football" fill="bright" />
      </div>
    </section>
  )
}
