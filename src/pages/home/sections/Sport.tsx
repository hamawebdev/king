import { ChannelMosaic, DeviceFrame, Eyebrow, IconTile, Reveal, SPORT_ICONS, Section } from '@/components/brand'
import { cn } from '@/lib/utils'
import type { IconText } from '../data'

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

/** Vertical hairlines between index cells: 2 columns on phone and lg, 4 from sm and from xl. */
const CELL_RULE = [
  '',
  'border-l pl-4',
  'sm:border-l sm:pl-4 lg:border-l-0 lg:pl-0 xl:border-l xl:pl-4',
  'border-l pl-4',
]

/**
 * Sport (ivory band, 6/6): eyebrow, H2 and lead over a ruled index of the four disciplines; on the right a
 * TV hung on a paper wall above a sand console, its screen a sport-glyph channel mosaic whose brass
 * selection steps (motion-safe only).
 */
export function HomeSport() {
  return (
    <Section
      zone="ivory"
      dataSection="home-sport"
      containerClassName="grid items-center gap-y-12 md:gap-y-14 lg:grid-cols-12 lg:gap-x-grid"
    >
      <Reveal className="min-w-0 lg:col-span-6 lg:pr-6 xl:pr-8">
        <Eyebrow>{SPORT.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-display-md text-z-fg">{SPORT.title}</h2>
        <p className="mt-4 max-w-[46ch] font-sans text-lead text-z-soft">{SPORT.text}</p>
        <ul className="mt-8 grid grid-cols-2 border-t border-z-line sm:grid-cols-4 md:mt-10 lg:grid-cols-2 xl:grid-cols-4">
          {SPORT.pills.map((sport, i) => (
            <li
              key={sport.label}
              className={cn('flex min-w-0 flex-col items-start gap-3 border-b border-z-line py-5', CELL_RULE[i])}
            >
              <IconTile icon={sport.icon} size={40} />
              <span className="font-display text-title text-z-fg">{sport.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal index={1} className="min-w-0 lg:col-span-6">
        <div
          aria-hidden="true"
          className="pointer-events-none relative overflow-hidden rounded-panel border border-z-line bg-z-card"
        >
          <span className="absolute inset-x-6 top-0 h-px bg-brass-500 sm:inset-x-12 lg:inset-x-10 xl:inset-x-14" />
          <div className="px-6 pt-10 pb-1.5 sm:px-12 sm:pt-14 lg:px-10 xl:px-14">
            <DeviceFrame kind="tv" className="mx-auto w-full max-w-[560px]">
              <ChannelMosaic icons={SPORT_ICONS} selected={9} step />
            </DeviceFrame>
          </div>
          <span className="block h-10 border-t border-hairline-deep bg-sand sm:h-14" />
        </div>
      </Reveal>
    </Section>
  )
}
