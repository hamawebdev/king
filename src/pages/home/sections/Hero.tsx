import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Aura, Eyebrow, Section, WaButton } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { packById } from '@/lib/packs'

const RENEW_MESSAGE = 'Bonjour NovaStream, je souhaite renouveler mon code King 365 TV'

/** Spec S1, word for word (French source). Other languages mirror the same shape. */
const fr = {
  eyebrow: 'Distributeur Agréé King 365 TV · Activation Instantanée 24/7',
  titleLead: "L'Expérience Télévisuelle Ultime : Vos Flux King 365 TV en ",
  titleAccent: 'Véritable 4K HDR',
  subtitle:
    "Propulsé par NovaStream. Accédez à une diffusion continue sans coupure, à un catalogue VOD colossal de +16 000 titres et aux applications officielles King 365 TV sur l'ensemble de vos écrans.",
  ctaOrder: 'Commander mon Accès Signature (59,99 €)',
  ctaRenew: 'Renouveler mon Code Actuel',
  stats: [
    { value: '+5 700', label: 'Chaînes Directes Mondiales', detail: "Diffusion en direct à l'échelle mondiale" },
    { value: '+16 000', label: 'Films & Séries', detail: 'Catalogue VOD HD, FHD et 4K Native' },
    { value: '99,99%', label: 'Stabilité Réseau Garantie', detail: 'Infrastructure haute disponibilité' },
    { value: '+50 000', label: 'Utilisateurs Accompagnés', detail: "Clients satisfaits sur l'écosystème NovaStream" },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'Authorized King 365 TV Distributor · Instant Activation 24/7',
    titleLead: 'The Ultimate TV Experience: Your King 365 TV Streams in ',
    titleAccent: 'True 4K HDR',
    subtitle:
      'Powered by NovaStream. Enjoy uninterrupted streaming, a colossal VOD catalogue of +16,000 titles and the official King 365 TV apps on all your screens.',
    ctaOrder: 'Order my Signature Access (€59.99)',
    ctaRenew: 'Renew my Current Code',
    stats: [
      { value: '+5,700', label: 'Live Channels Worldwide', detail: 'Live streaming on a global scale' },
      { value: '+16,000', label: 'Movies & Series', detail: 'HD, FHD and native 4K VOD catalogue' },
      { value: '99.99%', label: 'Guaranteed Network Stability', detail: 'High-availability infrastructure' },
      { value: '+50,000', label: 'Users Supported', detail: 'Satisfied customers in the NovaStream ecosystem' },
    ],
  },
  de: {
    eyebrow: 'Autorisierter King 365 TV Vertriebspartner · Sofortige Aktivierung 24/7',
    titleLead: 'Das ultimative TV-Erlebnis: Ihre King 365 TV Streams in ',
    titleAccent: 'echtem 4K HDR',
    subtitle:
      'Powered by NovaStream. Genießen Sie unterbrechungsfreies Streaming, einen riesigen VOD-Katalog mit +16.000 Titeln und die offiziellen King 365 TV Apps auf all Ihren Bildschirmen.',
    ctaOrder: 'Meinen Signature-Zugang bestellen (59,99 €)',
    ctaRenew: 'Meinen aktuellen Code verlängern',
    stats: [
      { value: '+5.700', label: 'Live-Sender weltweit', detail: 'Live-Übertragung in globalem Maßstab' },
      { value: '+16.000', label: 'Filme & Serien', detail: 'VOD-Katalog in HD, FHD und nativem 4K' },
      { value: '99,99 %', label: 'Garantierte Netzstabilität', detail: 'Hochverfügbare Infrastruktur' },
      { value: '+50.000', label: 'Betreute Nutzer', detail: 'Zufriedene Kunden im NovaStream-Ökosystem' },
    ],
  },
  es: {
    eyebrow: 'Distribuidor Autorizado King 365 TV · Activación Instantánea 24/7',
    titleLead: 'La Experiencia Televisiva Definitiva: Tus Emisiones King 365 TV en ',
    titleAccent: 'Auténtico 4K HDR',
    subtitle:
      'Con la tecnología de NovaStream. Disfruta de una emisión continua sin cortes, de un colosal catálogo VOD de +16.000 títulos y de las aplicaciones oficiales King 365 TV en todas tus pantallas.',
    ctaOrder: 'Pedir mi Acceso Signature (59,99 €)',
    ctaRenew: 'Renovar mi Código Actual',
    stats: [
      { value: '+5.700', label: 'Canales en Directo en Todo el Mundo', detail: 'Emisión en directo a escala mundial' },
      { value: '+16.000', label: 'Películas y Series', detail: 'Catálogo VOD HD, FHD y 4K nativo' },
      { value: '99,99 %', label: 'Estabilidad de Red Garantizada', detail: 'Infraestructura de alta disponibilidad' },
      { value: '+50.000', label: 'Usuarios Acompañados', detail: 'Clientes satisfechos en el ecosistema NovaStream' },
    ],
  },
  pt: {
    eyebrow: 'Distribuidor Autorizado King 365 TV · Ativação Instantânea 24/7',
    titleLead: 'A Experiência Televisiva Definitiva: As Suas Emissões King 365 TV em ',
    titleAccent: 'Verdadeiro 4K HDR',
    subtitle:
      'Com a tecnologia NovaStream. Desfrute de uma emissão contínua sem cortes, de um catálogo VOD colossal com +16.000 títulos e das aplicações oficiais King 365 TV em todos os seus ecrãs.',
    ctaOrder: 'Encomendar o meu Acesso Signature (59,99 €)',
    ctaRenew: 'Renovar o meu Código Atual',
    stats: [
      { value: '+5.700', label: 'Canais em Direto em Todo o Mundo', detail: 'Emissão em direto à escala mundial' },
      { value: '+16.000', label: 'Filmes e Séries', detail: 'Catálogo VOD HD, FHD e 4K nativo' },
      { value: '99,99%', label: 'Estabilidade de Rede Garantida', detail: 'Infraestrutura de alta disponibilidade' },
      { value: '+50.000', label: 'Utilizadores Acompanhados', detail: 'Clientes satisfeitos no ecossistema NovaStream' },
    ],
  },
  fi: {
    eyebrow: 'Valtuutettu King 365 TV -⁠jälleenmyyjä · Välitön aktivointi 24/7',
    titleLead: 'Täydellinen TV-elämys: King 365 TV -⁠lähetyksesi ',
    titleAccent: 'aidossa 4K HDR -⁠laadussa',
    subtitle:
      'NovaStreamin tarjoama. Nauti katkeamattomasta lähetyksestä, valtavasta yli 16 000 nimikkeen VOD-kirjastosta ja virallisista King 365 TV -⁠sovelluksista kaikilla näytöilläsi.',
    ctaOrder: 'Tilaa Signature-pääsyni (59,99 €)',
    ctaRenew: 'Uusi nykyinen koodini',
    stats: [
      { value: '+5 700', label: 'Suoraa kanavaa maailmalta', detail: 'Suorat lähetykset maailmanlaajuisesti' },
      { value: '+16 000', label: 'Elokuvaa ja sarjaa', detail: 'VOD-kirjasto HD-, FHD- ja natiivi 4K -laadussa' },
      { value: '99,99 %', label: 'Taattu verkon vakaus', detail: 'Korkean käytettävyyden infrastruktuuri' },
      { value: '+50 000', label: 'Tuettua käyttäjää', detail: 'Tyytyväisiä asiakkaita NovaStream-ekosysteemissä' },
    ],
  },
}

/** Section 01 — Hero (trust header, the page's only h1, two WhatsApp CTAs) and the 4-column stats strip. */
export function HomeHero() {
  const signature = packById('signature')
  const t = useCopy(COPY)
  return (
    <Section id="hero" aria-labelledby="hero-title" className="scroll-mt-20 pt-12 sm:pt-16 md:pt-20">
      <Aura variant="hero" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Eyebrow tone="neutral" className="normal-case tracking-normal sm:text-[13px]">
          <BadgeCheck aria-hidden="true" className="hidden size-4 shrink-0 text-brand sm:block" />
          <span>{t.eyebrow}</span>
        </Eyebrow>

        <h1
          id="hero-title"
          className="mt-6 font-sans text-[2.125rem] leading-[1.08] font-bold tracking-tight text-balance text-heading sm:text-5xl lg:text-[3.75rem]"
        >
          {t.titleLead}
          <span className="text-brand">{t.titleAccent}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-body sm:text-lg">
          {t.subtitle}
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <WaButton message={signature.waMessage} variant="brand" size="lg" className="group w-full sm:w-auto">
            {t.ctaOrder}
            <ArrowRight
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </WaButton>
          <WaButton message={RENEW_MESSAGE} variant="outline" size="lg" className="w-full sm:w-auto">
            {t.ctaRenew}
          </WaButton>
        </div>
      </div>

      <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-line bg-canvas/80 shadow-card backdrop-blur-sm sm:mt-16 lg:grid-cols-4">
        {t.stats.map((stat, i) => (
          <div
            key={i}
            className={[
              'flex flex-col gap-1 p-4 text-left sm:p-6',
              i % 2 === 1 ? 'border-l border-line' : '',
              i >= 2 ? 'border-t border-line lg:border-t-0' : '',
              i === 2 ? 'lg:border-l' : '',
            ].join(' ')}
          >
            <dt className="order-2 text-sm leading-snug font-semibold text-heading sm:text-[0.9375rem]">{stat.label}</dt>
            <dd className="order-1 text-[1.75rem] leading-none font-bold tracking-tight whitespace-nowrap text-heading tabular-nums sm:text-4xl">
              {stat.value}
            </dd>
            <dd className="order-3 text-xs leading-snug text-body sm:text-sm">{stat.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
