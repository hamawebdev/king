import { BRAND } from '@/lib/site'
import { BAND, COLUMN, QUAD_GRID, TILE, TITLE, cx } from '../styles'
import { Accent, SectionHead } from '../ui'

const COMPAT = {
  eyebrow: 'Compatibilité',
  titleStart: 'Disponible sur ',
  titleBlue: 'Chacun de vos Écrans',
  text: 'Des tutoriels pas à pas pour configurer chaque type d’appareil',
  items: [
    { icon: 'ti-device-tv', title: 'Téléviseurs', text: 'Quelques réglages et c’est parti', tags: ['Écran 4K', 'OLED', 'QLED', '+2'] },
    { icon: 'ti-brand-android', title: 'Android', text: `Lecteurs M3U, codes Xtream, appli ${BRAND}`, tags: ['Boîtier', 'Téléphone', 'Tablette'] },
    { icon: 'ti-brand-apple', title: 'Apple', text: 'Mise en service pas à pas sur iOS et tvOS', tags: ['iPhone', 'iPad', 'Apple TV'] },
    { icon: 'ti-box', title: 'Boîtiers', text: 'Box et décodeurs courants', tags: ['Box M3U', 'Décodeur Z7', 'Décodeur Z8'] },
  ],
}

type Device = { icon: string; title: string; text: string; tags: string[] }

/** Device family card with model tags. */
function DeviceCard({ device }: { device: Device }) {
  return (
    <div className={cx(TILE, 'rounded-[18px] p-[26px]')}>
      <div className="mb-[14px] grid size-[48px] place-items-center rounded-[12px] bg-lp-blue-soft text-[23px] text-lp-blue">
        <i className={cx('ti', device.icon)} />
      </div>
      <h4 className={cx(TITLE, 'mb-[7px] text-[17px]')}>{device.title}</h4>
      <p className="mb-[14px] text-[13.5px] text-lp-muted">{device.text}</p>
      <div className="flex flex-wrap gap-[7px]">
        {device.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[8px] border border-lp-line bg-lp-soft px-[11px] py-[5px] text-[12.5px] font-bold text-lp-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Device compatibility. */
export function HomeCompat() {
  return (
    <section data-section="home-compat" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={COMPAT.eyebrow}
          title={
            <>
              {COMPAT.titleStart}
              <Accent>{COMPAT.titleBlue}</Accent>
            </>
          }
          text={COMPAT.text}
        />
        <div className={cx(QUAD_GRID, 'gap-[18px]')}>
          {COMPAT.items.map((device) => (
            <DeviceCard key={device.title} device={device} />
          ))}
        </div>
      </div>
    </section>
  )
}
