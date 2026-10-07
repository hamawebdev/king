import type { IconText } from '../data'
import { PANEL, SECTION, WRAP } from '../styles'
import { SectionHead } from '../ui'

const QUALITY = {
  title: ['Tout un', 'univers'] as [string, string],
  tiles: [
    { value: '4K', label: 'Ultra HD' },
    { value: 'FHD', label: '1080p' },
    { value: 'HD', label: '720p' },
    { value: 'SD', label: '480p' },
  ],
  categories: [
    { icon: 'ti-ball-football', text: 'Sports' },
    { icon: 'ti-movie', text: 'Films' },
    { icon: 'ti-device-tv', text: 'Séries' },
    { icon: 'ti-news', text: 'News' },
    { icon: 'ti-mood-kid', text: 'Jeunesse' },
    { icon: 'ti-music', text: 'Musique' },
  ] as IconText[],
}

// Picture quality and categories
export function Quality() {
  return (
    <section data-section="product-quality" className={`${SECTION} bg-lp-soft`}>
      <div className={WRAP}>
        <SectionHead title={QUALITY.title} />
        <div className="mb-[22px] grid grid-cols-4 gap-3.5 [@media(max-width:900px)]:grid-cols-2">
          {QUALITY.tiles.map((q) => (
            <div key={q.value} className={`${PANEL} rounded-[14px] p-5 text-center`}>
              <b className="block font-archivo text-[26px] font-black text-lp-blue">{q.value}</b>
              <span className="text-[13.5px] font-bold text-lp-muted">{q.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {QUALITY.categories.map((c) => (
            <span key={c.text} className={`${PANEL} flex items-center gap-2 rounded-[12px] px-[18px] py-[11px] text-[14.5px] font-bold`}>
              <i className={`ti ${c.icon} text-lp-blue`} /> {c.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
