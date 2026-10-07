import { ButtonLink, Kw, Reveal, Seal, Section, VaultPanel, WhatsAppButton } from '@/components/brand'
import { WHATSAPP_HREF } from '@/lib/site'

// Shop: "Découverte 24h" free-trial teaser. Continues the paper ground of the reseller teaser above and
// holds one contained vault panel (DIRECTION §9.3 #4): the title and the two contact actions on the left
// (7 columns), the guarantee seal carrying the trial's own words on the right (5 columns, hidden on phone).

/** Seal text: the section's own heading, uppercased, joined with " · " (DIRECTION §7.6). */
const SEAL_TEXT = 'DÉCOUVERTE 24H · OFFRE NOVASTREAM ·'

export function ShopTrial() {
  return (
    <Section zone="paper" dataSection="shop-trial" continues>
      <VaultPanel className="relative grid items-center gap-y-10 md:grid-cols-12 md:gap-x-8">
        <Reveal className="relative md:col-span-7">
          <h2 className="font-display text-display-md text-z-fg">
            <Kw>Découverte</Kw> <span className="text-z-accent">24h</span>
            <br />
            Offre NovaStream
          </h2>
          <span aria-hidden="true" className="mt-6 block h-px w-7 bg-brass-500" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink to="/contact/" variant="ivory" size="md" iconStart="ti-mail" full className="sm:w-auto">
              Email
            </ButtonLink>
            <WhatsAppButton label="Whatsapp" href={WHATSAPP_HREF} size="md" full className="sm:w-auto" />
          </div>
        </Reveal>
        <Reveal
          index={1}
          className="relative hidden justify-center md:col-span-5 md:flex md:self-stretch md:items-center md:border-l md:border-vault-line lg:justify-center"
        >
          <Seal text={SEAL_TEXT} className="md:size-36 lg:size-44" />
        </Reveal>
      </VaultPanel>
    </Section>
  )
}
