import type { ReactNode } from 'react'
import { BRAND_UPPER } from '@/lib/site'
import { ButtonA, ChannelMosaic, DeviceFrame, IconTile, LogoMark, Reveal, Section } from '@/components/brand'
import { cn } from '@/lib/utils'

// Downloads: the two application boxes with their V2 / V3 buttons, then the introduction.
// The introduction is the original single paragraph, split by sentence: the first one is the lead
// (with the site's one drop cap), the four others become a 2×2 ledger of selling points.

const INTRO_LEAD =
  'Toutes nos applications partagent le même compte : commencez un film sur le téléviseur du salon et terminez-le sur votre téléphone dans le train, à la seconde près.'

const INTRO_POINTS = [
  { icon: 'ti-refresh', text: 'Chaque version reçoit des améliorations régulières, installées automatiquement en arrière-plan.' },
  { icon: 'ti-shield-check', text: 'Les fichiers proposés ci-dessous sont vérifiés et ne contiennent aucune publicité.' },
  { icon: 'ti-devices', text: "Vos favoris, votre historique et vos préférences d'affichage vous suivent d'un appareil à l'autre." },
  {
    icon: 'ti-wifi',
    text: "Pour un confort optimal, nous recommandons une connexion stable et un écran récent, mais la lecture s'adapte aussi aux réseaux plus modestes.",
  },
]

/** Version mark drawn from the existing link label ("V2" / "V3") via pseudo-content: no text node. */
function VersionMark({ label }: { label: string }) {
  return (
    <span
      data-label={label}
      className="absolute top-3 left-3 z-[2] grid h-9 min-w-12 place-items-center rounded-tag border border-vault-outline px-2 font-display text-base leading-none font-semibold text-on-vault before:content-[attr(data-label)] lg:top-4 lg:left-4"
    />
  )
}

/** Small phone screen: app mark, a play tile and a few channel tiles (decorative). */
function PhoneScreen() {
  return (
    <div className="flex size-full flex-col gap-1.5 px-1.5 pt-6 pb-1.5">
      <LogoMark className="h-3 w-auto self-start text-on-vault" />
      <div className="grid aspect-video w-full place-items-center rounded-tag bg-[linear-gradient(180deg,var(--color-evergreen-700),var(--color-vault))]">
        <span className="grid aspect-square w-[30%] place-items-center rounded-full bg-brass-500 text-vault">
          <i className="ti ti-player-play-filled text-[clamp(8px,0.9vw,13px)]" />
        </span>
      </div>
      <div className="-mx-[3px] min-h-0 flex-1">
        <ChannelMosaic cols={2} rows={4} selected={0} osd={false} icons={[]} />
      </div>
    </div>
  )
}

/** V2 screen: a television showing the channel mosaic. */
function ScreenV2() {
  return (
    <DeviceFrame kind="tv" className="w-[68%] -translate-y-1">
      <ChannelMosaic step />
    </DeviceFrame>
  )
}

/** V3 screen: a tablet with a phone in front of it, both on the same account. */
function ScreenV3() {
  return (
    <div className="relative aspect-[16/10] w-[78%]">
      <DeviceFrame kind="tablet" className="absolute top-1/2 left-0 w-[66%] -translate-y-1/2">
        <ChannelMosaic cols={5} rows={4} selected={7} />
      </DeviceFrame>
      <DeviceFrame kind="phone" className="absolute right-[6%] bottom-0 w-[22%] rounded-[22px] p-1.5" screenClassName="rounded-[16px]">
        <PhoneScreen />
      </DeviceFrame>
    </div>
  )
}

function AppCard({ version, screen, children, index }: { version: string; screen: ReactNode; children: ReactNode; index: number }) {
  return (
    <Reveal as="article" index={index} className="flex flex-col overflow-hidden rounded-panel border border-z-line bg-z-card">
      <div aria-hidden="true" className="panel-vault relative grid aspect-[16/10] place-items-center overflow-hidden">
        <VersionMark label={version} />
        {screen}
      </div>
      <div className="border-t border-z-line p-card">{children}</div>
    </Reveal>
  )
}

export function DownloadApps() {
  return (
    <Section zone="sand" dataSection="download-apps">
      <div className="grid gap-grid md:grid-cols-2">
        <AppCard version="V2" screen={<ScreenV2 />} index={0}>
          <ButtonA href="#telecharger-v2" variant="secondary" size="lg" iconStart="ti-download" full>
            {BRAND_UPPER} V2
          </ButtonA>
        </AppCard>
        <AppCard version="V3" screen={<ScreenV3 />} index={1}>
          <ButtonA href="#telecharger-v3" variant="primary" size="lg" iconStart="ti-download" full>
            {BRAND_UPPER} V3
          </ButtonA>
        </AppCard>
      </div>

      <div className="mt-head grid gap-y-8 lg:grid-cols-12 lg:gap-x-grid">
        <Reveal className="border-t border-ink pt-5 lg:col-span-5 lg:pr-8">
          <p
            className={cn(
              'max-w-[56ch] font-sans text-lead text-z-soft',
              'first-letter:float-left first-letter:mt-[0.16em] first-letter:mr-3 first-letter:font-display first-letter:text-[5.1em] first-letter:leading-[0.74] first-letter:font-medium first-letter:text-brass-700',
            )}
          >
            {INTRO_LEAD}
          </p>
        </Reveal>
        <ul className="m-0 grid list-none gap-x-grid gap-y-8 p-0 sm:grid-cols-2 lg:col-span-7">
          {INTRO_POINTS.map((p, i) => (
            <Reveal as="li" key={p.icon} index={i} className="grid grid-cols-[40px_1fr] content-start gap-x-4 border-t border-z-line pt-5 sm:grid-cols-1">
              <IconTile icon={p.icon} size={40} />
              <p className="font-sans text-small text-z-body sm:mt-4">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
