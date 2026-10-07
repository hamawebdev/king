import { BRAND } from '@/lib/site'
import type { IconText } from '../data'
import { BAND_TIGHT, COLUMN, TILE, TINT, cx } from '../styles'
import { Accent, RowLabel, SectionHead, StatGrid } from '../ui'

const PREMIUM = {
  titleStart: 'Tout Ce Qu’inclut l’Abonnement ',
  titleBlue: `${BRAND} Premium`,
  titleEnd: ' ?',
  stats: [
    { value: '5100+', label: 'Programmes en direct' },
    { value: '8000+', label: 'Titres à la demande' },
    { value: '4K', label: 'Définition jusqu’au 4K' },
    { value: '7-10j', label: 'Rattrapage inclus' },
  ],
  appsTitle: 'Lecteurs pris en charge',
  apps: [
    { icon: 'ti-device-tv', label: 'Smart TV' },
    { icon: 'ti-device-desktop', label: 'PC' },
    { icon: 'ti-brand-apple', label: 'Apple TV' },
    { icon: 'ti-device-mobile', label: 'iPhone' },
    { icon: 'ti-device-tablet', label: 'iPad' },
    { icon: 'ti-brand-android', label: 'Android' },
    { icon: 'ti-flame', label: 'Fire Stick' },
    { icon: 'ti-player-play', label: 'Linux' },
    { icon: 'ti-box', label: 'BOX M3U' },
    { icon: 'ti-traffic-cone', label: 'Mac' },
    { icon: 'ti-bolt', label: 'Lecteur Xtream' },
    { icon: 'ti-box', label: 'Décodeur Z7/Z8' },
    { icon: 'ti-antenna', label: 'Web IPTV' },
  ] as IconText[],
}

/** Premium figures and supported players. */
export function HomePremium() {
  return (
    <section data-section="home-premium" className={cx(BAND_TIGHT, TINT)}>
      <div className={COLUMN}>
        <SectionHead
          title={
            <>
              {PREMIUM.titleStart}
              <Accent>{PREMIUM.titleBlue}</Accent>
              {PREMIUM.titleEnd}
            </>
          }
        />
        <StatGrid items={PREMIUM.stats} className="mb-[46px]" />
        <RowLabel className="mb-[20px]">{PREMIUM.appsTitle}</RowLabel>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {PREMIUM.apps.map((app) => (
            <span
              key={app.label}
              className={cx(TILE, 'flex items-center gap-[8px] rounded-[12px] px-[17px] py-[11px] text-[14px] font-bold')}
            >
              <i className={cx('ti', app.icon, 'text-[17px] text-lp-blue')} /> {app.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
