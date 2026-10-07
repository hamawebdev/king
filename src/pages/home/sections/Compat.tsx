import { BRAND } from '@/lib/site'
import { ChannelMosaic, DeviceFrame, FeatureCard, FeatureGrid, Kw, Reveal, Section, SectionHead } from '@/components/brand'

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

/**
 * "Every screen" lineup: the four device families as one quiet still life — a TV with its box,
 * a tablet and a phone, all showing the channel mosaic. Decorative only (no text nodes).
 */
function ScreenLineup({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="pointer-events-none relative aspect-[16/11] w-full">
        <DeviceFrame kind="tv" className="absolute top-0 right-0 w-[78%]">
          <ChannelMosaic osd={false} />
        </DeviceFrame>
        {/* set-top box beside the TV stand, with its status light */}
        <span className="absolute top-[74%] right-[5%] flex h-[6%] w-[28%] items-center justify-end rounded-tag bg-ink pr-[4%] shadow-lift">
          <span className="size-1.5 rounded-full bg-brass-500" />
        </span>
        <DeviceFrame kind="tablet" className="absolute bottom-0 left-0 w-[36%]" screenClassName="p-[2px]">
          <ChannelMosaic cols={4} rows={3} selected={0} osd={false} icons={['ti-movie', 'ti-world', 'ti-music']} />
        </DeviceFrame>
        <DeviceFrame
          kind="phone"
          className="absolute bottom-0 left-[39%] w-[13%] rounded-[18px] p-1 [&>span]:top-1.5 [&>span]:h-1.5"
          screenClassName="rounded-[14px] pt-3"
        >
          <ChannelMosaic cols={2} rows={5} selected={0} osd={false} icons={[]} />
        </DeviceFrame>
      </div>
    </div>
  )
}

/** Device compatibility. */
export function HomeCompat() {
  return (
    <Section zone="paper" dataSection="home-compat">
      <div className="grid gap-y-10 md:grid-cols-12 md:items-end md:gap-x-grid">
        <SectionHead
          className="md:col-span-7"
          eyebrow={COMPAT.eyebrow}
          title={
            <>
              {COMPAT.titleStart}
              <Kw>{COMPAT.titleBlue}</Kw>
            </>
          }
          lead={COMPAT.text}
        />
        <Reveal className="max-md:hidden md:col-span-5 lg:col-start-8">
          <ScreenLineup className="ml-auto w-full max-w-[440px] pb-1.5" />
        </Reveal>
      </div>
      <Reveal className="mt-head">
        <FeatureGrid>
          {COMPAT.items.map((device) => (
            <FeatureCard
              key={device.title}
              root="li"
              icon={device.icon}
              title={device.title}
              text={device.text}
              tags={device.tags}
            />
          ))}
        </FeatureGrid>
      </Reveal>
    </Section>
  )
}
