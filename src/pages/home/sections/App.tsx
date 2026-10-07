import { AppMock, Chip, IconTile, Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { BRAND_UPPER } from '@/lib/site'
import type { IconText } from '../data'

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

/**
 * App (vault band, 6/6): head, a three-cell feature strip with hairline rules, device chips; the AppMock
 * (phone in front of a TV) on the right. The #telecharger anchor lands here.
 */
export function HomeApp() {
  return (
    <Section
      zone="vault"
      dataSection="home-app"
      id="telecharger"
      containerClassName="grid items-center gap-y-14 md:gap-y-16 lg:grid-cols-12 lg:gap-x-grid"
    >
      <div className="lg:col-span-6 lg:pr-6 xl:pr-10">
        <SectionHead
          eyebrow={APP.eyebrow}
          title={
            <>
              {`${APP.title} `}
              <Kw>{APP.titleBlue}</Kw>
            </>
          }
          lead={APP.text}
        />

        <ul className="m-0 mt-10 grid list-none border-y border-z-line p-0 sm:grid-cols-3 md:mt-12">
          {APP.checks.map((c, i) => (
            <Reveal
              as="li"
              key={c.label}
              index={i}
              className="flex items-center gap-4 border-t border-z-line py-4 first:border-t-0 sm:flex-col sm:items-start sm:gap-5 sm:border-t-0 sm:border-l sm:py-6 sm:pl-5 sm:first:border-l-0 sm:first:pl-0 lg:pl-6"
            >
              <IconTile icon={c.icon} size={40} />
              <span className="font-display text-title text-z-fg">{c.label}</span>
            </Reveal>
          ))}
        </ul>

        <ul className="m-0 mt-8 flex list-none flex-wrap gap-2 p-0">
          {APP.pills.map((p) => (
            <li key={p.label}>
              <Chip icon={p.icon}>{p.label}</Chip>
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="lg:col-span-6">
        <AppMock className="mx-auto max-w-[340px] sm:max-w-[480px] lg:max-w-[560px]" />
      </Reveal>
    </Section>
  )
}
