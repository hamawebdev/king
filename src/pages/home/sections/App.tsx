import { BRAND_UPPER } from '@/lib/site'
import type { IconText } from '../data'
import { BAND_TIGHT, COLUMN, SPLIT, SPLIT_TEXT, SPLIT_TITLE, TINT, cx } from '../styles'
import { Accent, CheckList, Eyebrow, GlyphPanel, PillList } from '../ui'

const APP = {
  eyebrow: 'Notre Application',
  title: BRAND_UPPER,
  titleBlue: 'PLAY',
  text: 'Une interface claire et rapide, conçue par notre équipe pour lancer vos programmes en un seul geste sur mobile, tablette, téléviseur ou ordinateur portable.',
  checks: [
    { icon: 'ti-bolt', label: 'Zapping express' },
    { icon: 'ti-pointer', label: 'Navigation simple' },
    { icon: 'ti-calendar-event', label: 'Guide TV inclus' },
  ] as IconText[],
  pills: [
    { icon: 'ti-device-tv', label: 'Smart TV' },
    { icon: 'ti-brand-android', label: 'Android/iOS' },
    { icon: 'ti-flame', label: 'Fire Stick' },
    { icon: 'ti-devices', label: 'Multi-écrans' },
  ] as IconText[],
}

/** App: pitch, checks and device pills beside a glyph panel. The #telecharger anchor lands here. */
export function HomeApp() {
  return (
    <section id="telecharger" data-section="home-app" className={cx(BAND_TIGHT, TINT)}>
      <div className={cx(COLUMN, SPLIT)}>
        <div>
          <Eyebrow>{APP.eyebrow}</Eyebrow>
          <h2 className={cx(SPLIT_TITLE, 'mt-[16px] mb-[12px]')}>
            {`${APP.title} `}
            <Accent>{APP.titleBlue}</Accent>
          </h2>
          <p className={SPLIT_TEXT}>{APP.text}</p>
          <CheckList items={APP.checks} className="mb-[22px]" />
          <PillList items={APP.pills} />
        </div>
        <GlyphPanel icon="ti-player-play" fill="royal" />
      </div>
    </section>
  )
}
