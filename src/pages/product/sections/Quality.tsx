import { ChannelMosaic, Chip, DeviceFrame, Kw, QualityLadder, Reveal, Section, SectionHead } from '@/components/brand'
import type { QualityTier } from '@/components/brand'
import type { IconText } from '../data'

const QUALITY = {
  title: ['Tout un', 'univers'] as [string, string],
  tiles: [
    { value: '4K', label: 'Ultra HD' },
    { value: 'FHD', label: '1080p' },
    { value: 'HD', label: '720p' },
    { value: 'SD', label: '480p' },
  ] as { value: QualityTier; label: string }[],
  categories: [
    { icon: 'ti-ball-football', text: 'Sports' },
    { icon: 'ti-movie', text: 'Films' },
    { icon: 'ti-device-tv', text: 'Séries' },
    { icon: 'ti-news', text: 'News' },
    { icon: 'ti-mood-kid', text: 'Jeunesse' },
    { icon: 'ti-music', text: 'Musique' },
  ] as IconText[],
}

// Picture quality and categories: head, then a TV showing the six universes (chips below) beside the quality ladder.
export function Quality() {
  return (
    <Section zone="paper" dataSection="product-quality">
      <div className="grid gap-y-10 md:gap-y-12 lg:grid-cols-12 lg:gap-x-grid lg:gap-y-0">
        <SectionHead
          title={
            <>
              {QUALITY.title[0]} <Kw>{QUALITY.title[1]}</Kw>
            </>
          }
          className="lg:col-span-7 lg:row-start-1"
        />

        <Reveal className="lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-head lg:self-center">
          <QualityLadder
            as="p"
            rows={QUALITY.tiles.map((q) => ({ tier: q.value, name: q.label }))}
            className="md:grid md:grid-cols-2 md:gap-x-grid md:border-b-0 lg:block lg:border-b"
          />
        </Reveal>

        <Reveal index={1} className="lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:mt-head">
          <DeviceFrame kind="tv" className="w-full md:max-w-[640px] lg:max-w-none">
            <ChannelMosaic icons={QUALITY.categories.map((c) => c.icon)} />
          </DeviceFrame>
        </Reveal>

        <Reveal index={2} className="lg:col-span-7 lg:col-start-1 lg:row-start-3 lg:mt-10">
          <ul className="flex flex-wrap gap-2">
            {QUALITY.categories.map((c) => (
              <li key={c.text}>
                <Chip icon={c.icon}>{c.text}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
