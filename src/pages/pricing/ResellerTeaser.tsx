import { ButtonLink, ChannelMosaic, DeviceFrame, Reveal, Section, WhatsAppButton } from '@/components/brand'
import { WHATSAPP_HREF } from '@/lib/site'

// Shop: "Devenir Revendeur" teaser. Paper band, 5/7 from lg: the heading and its two contact actions on the
// left, a TV frame with the channel mosaic (and, from md, a phone showing the same grid) on the right.

/** Decorative screens: one access, every screen. aria-hidden, no text nodes. */
function TeaserScreens() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative mx-auto w-full max-w-[560px] md:ml-0 md:pb-[9%] lg:mr-0 lg:ml-auto">
      <DeviceFrame kind="tv" className="w-full md:w-[88%]">
        <ChannelMosaic selected={9} />
      </DeviceFrame>
      <DeviceFrame
        kind="phone"
        className="absolute right-0 bottom-0 hidden w-[22%] rounded-[24px] p-1.5 md:block"
        screenClassName="rounded-[18px]"
      >
        <div className="size-full pt-6">
          <ChannelMosaic cols={3} rows={7} selected={11} osd={false} step icons={['ti-movie', 'ti-ball-football', 'ti-news']} />
        </div>
      </DeviceFrame>
    </div>
  )
}

export function ShopReseller() {
  return (
    <Section
      zone="paper"
      dataSection="shop-reseller"
      containerClassName="grid items-center gap-y-12 md:gap-y-14 lg:grid-cols-12 lg:gap-x-grid"
    >
      <Reveal className="lg:col-span-5">
        <span aria-hidden="true" className="block h-px w-7 bg-brass-500" />
        <h2 className="mt-5 font-display text-display-md text-z-fg">
          <span className="block">Devenir Revendeur</span>
          <span className="block text-z-soft">Offre NovaStream</span>
        </h2>
        <div className="mt-8 flex max-w-[30rem] flex-col gap-3 border-t border-z-line pt-8 sm:flex-row sm:flex-wrap">
          <ButtonLink to="/contact/" variant="secondary" size="lg" iconStart="ti-mail" full className="sm:w-auto">
            Email
          </ButtonLink>
          <WhatsAppButton label="Whatsapp" href={WHATSAPP_HREF} size="lg" full className="sm:w-auto" />
        </div>
      </Reveal>
      <Reveal index={1} className="lg:col-span-7">
        <TeaserScreens />
      </Reveal>
    </Section>
  )
}
