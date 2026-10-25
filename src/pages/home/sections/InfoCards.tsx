import { Card, Section } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'

/** Spec copy word for word (French source); other languages mirror it. */
const fr = {
  srTitle: 'Multi-Écrans Flexibles et Bouquets Multi-Pays Complets',
  screensTitle: 'Multi-Écrans Flexibles',
  screensText: 'Profitez de votre accès sur Smart TV, Google TV, boîtier TV Box, smartphone, tablette et ordinateur.',
  screensNote: "(1 écran actif en simultané par code d'accès, options multi-connexions disponibles sur demande)",
  countriesTitle: 'Bouquets Multi-Pays Complets',
  countriesText:
    "Diffusion internationale couvrant plus de 50 régions : France, Belgique, Suisse, Canada, Maghreb, Royaume-Uni, USA, Italie, Espagne, Allemagne et bien d'autres bouquets thématiques.",
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    srTitle: 'Flexible Multi-Screen and Complete Multi-Country Packages',
    screensTitle: 'Flexible Multi-Screen',
    screensText: 'Enjoy your access on Smart TV, Google TV, TV box, smartphone, tablet and computer.',
    screensNote: '(1 active screen at a time per access code, multi-connection options available on request)',
    countriesTitle: 'Complete Multi-Country Packages',
    countriesText:
      'International broadcasting covering more than 50 regions: France, Belgium, Switzerland, Canada, the Maghreb, the United Kingdom, the USA, Italy, Spain, Germany and many other themed packages.',
  },
  de: {
    srTitle: 'Flexibles Multiscreen und vollständige Länderpakete',
    screensTitle: 'Flexibles Multiscreen',
    screensText: 'Nutzen Sie Ihren Zugang auf Smart TV, Google TV, TV-Box, Smartphone, Tablet und Computer.',
    screensNote: '(1 aktiver Bildschirm gleichzeitig pro Zugangscode, Mehrfachverbindungen auf Anfrage erhältlich)',
    countriesTitle: 'Vollständige Länderpakete',
    countriesText:
      'Internationale Programme aus mehr als 50 Regionen: Frankreich, Belgien, Schweiz, Kanada, Maghreb, Vereinigtes Königreich, USA, Italien, Spanien, Deutschland und viele weitere Themenpakete.',
  },
  es: {
    srTitle: 'Multipantalla flexible y paquetes multipaís completos',
    screensTitle: 'Multipantalla flexible',
    screensText: 'Disfruta de tu acceso en Smart TV, Google TV, TV Box, smartphone, tableta y ordenador.',
    screensNote: '(1 pantalla activa a la vez por código de acceso, opciones multiconexión disponibles bajo petición)',
    countriesTitle: 'Paquetes multipaís completos',
    countriesText:
      'Emisión internacional que cubre más de 50 regiones: Francia, Bélgica, Suiza, Canadá, Magreb, Reino Unido, EE. UU., Italia, España, Alemania y muchos otros paquetes temáticos.',
  },
  pt: {
    srTitle: 'Multiecrã flexível e pacotes multipaís completos',
    screensTitle: 'Multiecrã flexível',
    screensText: 'Desfrute do seu acesso em Smart TV, Google TV, TV Box, telemóvel, tablet e computador.',
    screensNote: '(1 ecrã ativo em simultâneo por código de acesso, opções de multiligação disponíveis mediante pedido)',
    countriesTitle: 'Pacotes multipaís completos',
    countriesText:
      'Emissão internacional que abrange mais de 50 regiões: França, Bélgica, Suíça, Canadá, Magrebe, Reino Unido, EUA, Itália, Espanha, Alemanha e muitos outros pacotes temáticos.',
  },
  fi: {
    srTitle: 'Joustava monen näytön käyttö ja kattavat monimaapaketit',
    screensTitle: 'Joustava monen näytön käyttö',
    screensText: 'Käytä palvelua älytelevisiossa, Google TV:ssä, TV-boksissa, älypuhelimessa, tabletissa ja tietokoneessa.',
    screensNote: '(1 aktiivinen näyttö kerrallaan käyttökoodia kohden, useamman samanaikaisen yhteyden vaihtoehtoja saatavilla pyynnöstä)',
    countriesTitle: 'Kattavat monimaapaketit',
    countriesText:
      'Kansainväliset lähetykset yli 50 alueelta: Ranska, Belgia, Sveitsi, Kanada, Maghreb, Iso-Britannia, Yhdysvallat, Italia, Espanja, Saksa ja monia muita teemapaketteja.',
  },
}

/**
 * Section 06 — two cards answering the two recurring questions (how many screens, which countries).
 * Copy word for word from the spec; the spec approves no heading, so the h2 is visually hidden.
 */
export function HomeInfoCards() {
  const t = useCopy(COPY)
  return (
    <Section id="multi-ecrans" aria-labelledby="infocards-title" className="scroll-mt-20">
      <h2 id="infocards-title" className="sr-only">
        {t.srTitle}
      </h2>
      <ul className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <Card as="li" interactive className="group flex flex-col gap-4 p-6 sm:p-8">
          <CardIcon emoji="📱" />
          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{t.screensTitle}</h3>
          <p className="text-base leading-relaxed text-body">
            {t.screensText} <em className="text-slate-500">{t.screensNote}</em>.
          </p>
        </Card>
        <Card as="li" interactive className="group flex flex-col gap-4 p-6 sm:p-8">
          <CardIcon emoji="🌍" />
          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{t.countriesTitle}</h3>
          <p className="text-base leading-relaxed text-body">{t.countriesText}</p>
        </Card>
      </ul>
    </Section>
  )
}

function CardIcon({ emoji }: { emoji: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-12 place-items-center rounded-xl bg-brand-soft text-2xl ring-1 ring-brand/10 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
    >
      {emoji}
    </span>
  )
}
