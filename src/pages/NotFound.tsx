import { Home } from 'lucide-react'
import { Aura, ButtonLink, Container, Eyebrow, WaButton } from '@/components/kit'
import { usePageTitle } from '@/lib/usePageTitle'

// 404: white canvas with the aura, the error, the way back home and the WhatsApp line.
// Also rendered by Product.tsx for unknown product slugs.
export default function NotFound() {
  usePageTitle('Page introuvable | NovaStream')
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-canvas py-20">
      <Aura variant="hero" />
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Erreur 404</Eyebrow>
        <p aria-hidden="true" className="mt-6 text-[5.5rem] leading-none font-bold tracking-tighter text-heading sm:text-[8rem]">
          4<span className="text-brand">0</span>4
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl">Oups... cette page n’existe pas</h1>
        <p className="mt-4 max-w-md text-lg text-body">Cette adresse ne mène à aucune page de notre site. Vérifiez le lien saisi puis réessayez.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" size="lg">
            <Home aria-hidden="true" className="size-4.5" />
            Revenir à l’accueil
          </ButtonLink>
          <WaButton variant="outline" icon size="lg">
            Besoin d’aide ?
          </WaButton>
        </div>
      </Container>
    </section>
  )
}
