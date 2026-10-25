import { Home } from 'lucide-react'
import { Aura, ButtonLink, Container, Eyebrow, WaButton } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { usePageTitle } from '@/lib/usePageTitle'

const fr = {
  pageTitle: 'Page introuvable | NovaStream',
  eyebrow: 'Erreur 404',
  title: 'Oups... cette page n’existe pas',
  text: 'Cette adresse ne mène à aucune page de notre site. Vérifiez le lien saisi puis réessayez.',
  home: 'Revenir à l’accueil',
  help: 'Besoin d’aide ?',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: 'Page Not Found | NovaStream',
    eyebrow: 'Error 404',
    title: 'Oops... this page doesn’t exist',
    text: 'This address doesn’t lead to any page on our site. Check the link you entered and try again.',
    home: 'Back to home',
    help: 'Need help?',
  },
  de: {
    pageTitle: 'Seite nicht gefunden | NovaStream',
    eyebrow: 'Fehler 404',
    title: 'Hoppla … diese Seite gibt es nicht',
    text: 'Diese Adresse führt zu keiner Seite unserer Website. Bitte prüfen Sie den eingegebenen Link und versuchen Sie es erneut.',
    home: 'Zurück zur Startseite',
    help: 'Brauchen Sie Hilfe?',
  },
  es: {
    pageTitle: 'Página no encontrada | NovaStream',
    eyebrow: 'Error 404',
    title: 'Vaya... esta página no existe',
    text: 'Esta dirección no lleva a ninguna página de nuestro sitio. Comprueba el enlace que has introducido y vuelve a intentarlo.',
    home: 'Volver al inicio',
    help: '¿Necesitas ayuda?',
  },
  pt: {
    pageTitle: 'Página não encontrada | NovaStream',
    eyebrow: 'Erro 404',
    title: 'Ups... esta página não existe',
    text: 'Este endereço não corresponde a nenhuma página do nosso site. Verifique o link introduzido e tente novamente.',
    home: 'Voltar ao início',
    help: 'Precisa de ajuda?',
  },
  fi: {
    pageTitle: 'Sivua ei löytynyt | NovaStream',
    eyebrow: 'Virhe 404',
    title: 'Hups... tätä sivua ei ole olemassa',
    text: 'Tämä osoite ei johda mihinkään sivustomme sivuun. Tarkista kirjoittamasi linkki ja yritä uudelleen.',
    home: 'Takaisin etusivulle',
    help: 'Tarvitsetko apua?',
  },
}

// 404: white canvas with the aura, the error, the way back home and the WhatsApp line.
// Also rendered by Product.tsx for unknown product slugs.
export default function NotFound() {
  const t = useCopy(COPY)
  usePageTitle(t.pageTitle)
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-canvas py-20">
      <Aura variant="hero" />
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <p aria-hidden="true" className="mt-6 text-[5.5rem] leading-none font-bold tracking-tighter text-heading sm:text-[8rem]">
          4<span className="text-brand">0</span>4
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl">{t.title}</h1>
        <p className="mt-4 max-w-md text-lg text-body">{t.text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" size="lg">
            <Home aria-hidden="true" className="size-4.5" />
            {t.home}
          </ButtonLink>
          <WaButton variant="outline" icon size="lg">
            {t.help}
          </WaButton>
        </div>
      </Container>
    </section>
  )
}
