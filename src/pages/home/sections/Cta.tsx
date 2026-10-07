import { BRAND } from '@/lib/site'
import { ButtonLink, LogoMark, Reveal, Rosette, Section, VaultPanel } from '@/components/brand'
import { ROUTES } from '../data'

const CTA = {
  title: `Passez à ${BRAND} Dès Ce Soir`,
  text: `Une seule formule pour tout regarder, sur chacun de vos écrans. ${BRAND} rassemble chaînes en direct, grands matchs, films et séries dans une interface fluide.`,
  /** "Dès 39€ par an." — the closing sentence of the original paragraph, set as a price statement. */
  from: { lead: 'Dès', price: '39€', unit: 'par an' },
  primary: 'Abonner Maintenant',
  secondary: 'Renouveler mon accès',
}

/** Closing call to action: a centred vault panel on the paper ground of the section above (DIRECTION §9.1 #10). */
export function HomeCta() {
  return (
    <Section zone="paper" dataSection="home-cta" continues>
      <VaultPanel className="relative overflow-hidden text-center">
        {/* Banknote rosette at the panel's right edge, over the empty margin beside the centred column only. */}
        <Rosette className="absolute top-1/2 -right-[22rem] w-[560px] -translate-y-1/2 opacity-[.12] max-lg:hidden" />

        <div className="relative mx-auto flex max-w-[640px] flex-col items-center">
          {/* House monogram in a brass ring between two brass rules (decorative, no text node). */}
          <span aria-hidden="true" className="flex items-center gap-4 text-brass-300">
            <span className="h-px w-7 bg-brass-500" />
            <span className="grid size-12 place-items-center rounded-full border border-brass-500/60">
              <LogoMark className="h-[18px]" />
            </span>
            <span className="h-px w-7 bg-brass-500" />
          </span>

          <Reveal>
            <h2 className="mt-6 font-display text-display-sm text-z-fg md:text-display-md">{CTA.title}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mx-auto mt-5 max-w-[52ch] font-sans text-lead text-z-soft">{CTA.text}</p>
          </Reveal>

          <p className="mt-8 w-fit border-y border-z-line px-6 py-3.5 font-sans text-small font-semibold leading-none text-z-accent">
            {CTA.from.lead} <span className="price-num mx-0.5 text-stat-md align-baseline">{CTA.from.price}</span> {CTA.from.unit}
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <ButtonLink to={ROUTES.p12} variant="brass" size="lg" iconEnd="arrow" full className="sm:w-auto">
              {CTA.primary}
            </ButtonLink>
            <ButtonLink
              to={ROUTES.renew}
              variant="outline-vault"
              size="lg"
              full
              className="sm:w-auto lg:min-h-12 lg:px-[22px] lg:py-3 lg:text-base"
            >
              {CTA.secondary}
            </ButtonLink>
          </div>
        </div>
      </VaultPanel>
    </Section>
  )
}
