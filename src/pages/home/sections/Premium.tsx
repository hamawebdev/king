import { Chip, Eyebrow, Kw, Reveal, Section } from '@/components/brand'
import { BRAND } from '@/lib/site'
import type { IconText } from '../data'

const PREMIUM = {
  titleStart: 'Tout Ce Qu’inclut l’Abonnement ',
  titleBlue: `${BRAND} Premium`,
  // NBSP before « ? » (French spacing, DIRECTION §3.3)
  titleEnd: ' ?',
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

const TITLE_ID = 'home-premium-title'
const APPS_ID = 'home-premium-apps'

/**
 * Premium figures and supported players, on a vault band (DIRECTION §9.1 #13).
 * lg: heading in the left 5 columns; the four figures (2 × 2 ledger) and the player chips share the right 7,
 * so every figure, rule and chip hangs from one vertical line. Tablet: figures in one row of four. Phone: 2 × 2.
 */
export function HomePremium() {
  return (
    <Section
      zone="vault"
      dataSection="home-premium"
      aria-labelledby={TITLE_ID}
      containerClassName="grid gap-y-12 md:gap-y-14 lg:grid-cols-12 lg:gap-x-grid lg:gap-y-20"
    >
      <h2
        id={TITLE_ID}
        className="max-w-[17ch] font-display text-display-md text-z-fg md:max-w-[22ch] lg:col-span-5 lg:max-w-none lg:self-start lg:pr-6"
      >
        {PREMIUM.titleStart}
        <Kw>{PREMIUM.titleBlue}</Kw>
        {PREMIUM.titleEnd}
      </h2>

      <ul className="m-0 grid list-none grid-cols-2 gap-x-grid gap-y-9 p-0 md:grid-cols-4 lg:col-span-7 lg:col-start-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12 lg:pl-6">
        {PREMIUM.stats.map((stat, i) => (
          <Reveal as="li" key={stat.label} index={i} className="flex flex-col border-t border-z-line pt-5 lg:pt-6">
            <span className="price-num text-stat-lg text-z-fg">{stat.value}</span>
            <span className="mt-3 font-sans text-meta font-semibold text-z-muted">{stat.label}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal className="border-t border-z-line pt-8 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-x-grid lg:pt-10">
        <Eyebrow as="h3" className="lg:col-span-5 lg:self-start lg:pt-2.5">
          <span id={APPS_ID}>{PREMIUM.appsTitle}</span>
        </Eyebrow>
        <ul
          aria-labelledby={APPS_ID}
          className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0 lg:col-span-7 lg:col-start-6 lg:mt-0 lg:pl-6"
        >
          {PREMIUM.apps.map((app) => (
            <li key={app.label} className="flex">
              <Chip icon={app.icon}>{app.label}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
