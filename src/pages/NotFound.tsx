import { ButtonLink, NoSignal, Reveal, Rosette, Section } from '@/components/brand'

// 404 (DIRECTION §9.9): a vault band, centred, between the header and the vault footer (a brass hairline
// separates the two dark grounds). A TV frame showing calm test-card bars ("no signal") sits in the upper
// area with the guilloché rosette behind it, then the serif title, the subtitle and the way back home.
// Also rendered by Product.tsx for unknown product slugs.
export default function NotFound() {
  return (
    <Section
      zone="vault"
      dataSection="notfound"
      className="flex min-h-[70svh] items-center border-b border-brass-500/40"
      containerClassName="flex flex-col items-center text-center"
    >
      {/* Upper area: the rosette sits behind the TV only, never behind the text below. */}
      <div aria-hidden="true" className="pointer-events-none relative grid w-full place-items-center">
        <Rosette className="absolute top-1/2 left-1/2 w-[380px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[.10] md:w-[460px] lg:w-[480px]" />
        <NoSignal className="relative max-w-[280px] md:max-w-[360px] lg:max-w-[420px]" />
      </div>

      <div className="relative mt-12 flex max-w-[640px] flex-col items-center md:mt-14 lg:mt-16">
        <Reveal>
          <span aria-hidden="true" className="mx-auto mb-6 block h-px w-7 bg-brass-500" />
          <h2 className="font-display text-display-sm text-z-fg md:text-display-md">Oups... Erreur 404</h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mx-auto mt-4 max-w-[48ch] font-sans text-lead text-on-vault-muted">
            Cette adresse ne mène à aucune page de notre site.
          </p>
        </Reveal>

        <div className="mt-8 flex w-full flex-col items-center gap-4 border-t border-z-line pt-8 sm:w-auto sm:flex-row sm:gap-6 md:mt-10">
          <p className="font-sans text-copy text-z-muted">
            Vérifiez le lien saisi puis réessayez <em className="font-display text-[1.125rem] font-normal text-brass-300 italic">ou</em>
          </p>{' '}
          <ButtonLink to="/" variant="ivory" size="md" full className="sm:w-auto">
            Revenir à l’accueil
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
