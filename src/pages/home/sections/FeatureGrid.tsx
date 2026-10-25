import type { ReactNode } from 'react'
import { Card, Section, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Feature = {
  emoji: string
  title: string
  text: ReactNode
  highlight?: boolean
}

const Kw = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-heading">{children}</strong>

/** Spec S2 — the 8 CleanShot cards, word for word (bold = the spec's bold SEO phrases). French source; other languages mirror it. */
const fr: { eyebrow: string; title: string; subtitle: string; features: Feature[] } = {
  eyebrow: 'POINTS FORTS · PERFORMANCE & FIABILITÉ',
  title: 'Tout Savoir sur Votre Abonnement King 365 TV',
  subtitle:
    'Que vous souhaitiez activer un nouvel abonnement King 365 ou sécuriser le renouvellement King 365 de votre code actuel, découvrez une infrastructure stable et réactive, pensée pour le confort de chaque utilisateur, du salon au mobile.',
  features: [
    {
      emoji: '📺',
      title: '+5700 Chaînes Direct',
      text: 'Sélection complète de flux TV en direct (France, Belgique, Suisse, International). Chaînes sportives, ciné et jeunesse en Full HD et 4K sans latence.',
    },
    {
      emoji: '📱',
      title: 'Tous Vos Écrans',
      text: 'Fonctionne sur Google TV, Smart TV Android (Sony, TCL, Xiaomi), TV Box, Fire TV Stick, smartphones et tablettes (Android & iOS), ainsi que PC et Mac.',
    },
    {
      emoji: '💰',
      title: 'Économiser avec King 365',
      highlight: true,
      text: (
        <>
          Un seul <Kw>abonnement King 365 TV</Kw> remplace l'ensemble de vos abonnements séparés (Sport, Cinéma, Séries, EPG et
          Replay) au tarif le plus compétitif du marché.
        </>
      ),
    },
    {
      emoji: '⚡',
      title: 'Stabilité Anti-Coupure',
      text: "Infrastructure éprouvée lors des grands soirs de matchs mondiaux. Serveurs puissants assurant une bande passante stable à 99,99% sans buffering ni gel d'image.",
    },
    {
      emoji: '🎬',
      title: '+12K Films & +4K Séries',
      text: 'Bibliothèque VOD ultra-complète en haute définition. Des milliers de blockbusters récents et intégrales de séries avec mises à jour hebdomadaires.',
    },
    {
      emoji: '⏪',
      title: 'Replay sur +580 Chaînes',
      text: "Ne manquez aucun programme. Profitez d'une fonction rediffusion (Replay) performante couvrant plus de 580 chaînes avec contrôle du direct de 7 à 15 jours.",
    },
    {
      emoji: '🚀',
      title: 'Envoi Immédiat & Renouvellement',
      text: (
        <>
          Codes envoyés immédiatement dès validation. Déjà client ? Optez pour le <Kw>renouvellement King 365</Kw> sans réinstaller
          votre application ni perdre vos réglages.
        </>
      ),
    },
    {
      emoji: '🛡️',
      title: 'Accès Garanti & Support 24/7',
      text: (
        <>
          Assistance réactive pour vous accompagner, <Kw>renouveler votre abonnement King 365</Kw> ou assurer la{' '}
          <Kw>recuperation code king 365</Kw> sans frais supplémentaires.
        </>
      ),
    },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'KEY STRENGTHS · PERFORMANCE & RELIABILITY',
    title: 'Everything You Need to Know About Your King 365 TV Subscription',
    subtitle:
      'Whether you want to activate a new King 365 subscription or secure the King 365 renewal of your current code, discover a stable, responsive infrastructure designed for every user’s comfort, from the living room to your phone.',
    features: [
      {
        emoji: '📺',
        title: '+5700 Live Channels',
        text: 'A complete selection of live TV streams (France, Belgium, Switzerland, International). Sports, movie and kids’ channels in Full HD and 4K with zero latency.',
      },
      {
        emoji: '📱',
        title: 'All Your Screens',
        text: 'Works on Google TV, Android Smart TVs (Sony, TCL, Xiaomi), TV boxes, Fire TV Stick, smartphones and tablets (Android & iOS), as well as PC and Mac.',
      },
      {
        emoji: '💰',
        title: 'Save with King 365',
        highlight: true,
        text: (
          <>
            A single <Kw>King 365 TV subscription</Kw> replaces all your separate subscriptions (Sports, Movies, Series, EPG and
            Replay) at the most competitive price on the market.
          </>
        ),
      },
      {
        emoji: '⚡',
        title: 'Dropout-Free Stability',
        text: 'An infrastructure proven on the biggest international match nights. Powerful servers deliver 99.99% stable bandwidth with no buffering or frozen picture.',
      },
      {
        emoji: '🎬',
        title: '+12K Movies & +4K Series',
        text: 'An ultra-complete VOD library in high definition. Thousands of recent blockbusters and complete series, with weekly updates.',
      },
      {
        emoji: '⏪',
        title: 'Replay on +580 Channels',
        text: 'Never miss a show. Enjoy a powerful catch-up (Replay) feature covering more than 580 channels, with live TV control from 7 to 15 days.',
      },
      {
        emoji: '🚀',
        title: 'Instant Delivery & Renewal',
        text: (
          <>
            Codes sent the moment your order is confirmed. Already a customer? Choose <Kw>King 365 renewal</Kw> without reinstalling
            your app or losing your settings.
          </>
        ),
      },
      {
        emoji: '🛡️',
        title: 'Guaranteed Access & 24/7 Support',
        text: (
          <>
            Responsive support to help you out, <Kw>renew your King 365 subscription</Kw> or handle{' '}
            <Kw>King 365 code recovery</Kw> at no extra cost.
          </>
        ),
      },
    ],
  },
  de: {
    eyebrow: 'STÄRKEN · LEISTUNG & ZUVERLÄSSIGKEIT',
    title: 'Alles Wissenswerte über Ihr King 365 TV Abonnement',
    subtitle:
      'Ob Sie ein neues King 365 Abonnement aktivieren oder die King 365 Verlängerung Ihres aktuellen Codes sichern möchten: Entdecken Sie eine stabile, reaktionsschnelle Infrastruktur, die auf den Komfort jedes Nutzers ausgelegt ist – vom Wohnzimmer bis aufs Smartphone.',
    features: [
      {
        emoji: '📺',
        title: '+5700 Live-Sender',
        text: 'Eine vollständige Auswahl an Live-TV-Streams (Frankreich, Belgien, Schweiz, international). Sport-, Film- und Kindersender in Full HD und 4K ohne Latenz.',
      },
      {
        emoji: '📱',
        title: 'Alle Ihre Bildschirme',
        text: 'Läuft auf Google TV, Android Smart TVs (Sony, TCL, Xiaomi), TV-Boxen, Fire TV Stick, Smartphones und Tablets (Android & iOS) sowie auf PC und Mac.',
      },
      {
        emoji: '💰',
        title: 'Sparen mit King 365',
        highlight: true,
        text: (
          <>
            Ein einziges <Kw>King 365 TV Abonnement</Kw> ersetzt all Ihre separaten Abonnements (Sport, Kino, Serien, EPG und
            Replay) – zum wettbewerbsfähigsten Preis am Markt.
          </>
        ),
      },
      {
        emoji: '⚡',
        title: 'Stabilität ohne Aussetzer',
        text: 'Eine Infrastruktur, die sich an den großen internationalen Spielabenden bewährt hat. Leistungsstarke Server garantieren eine zu 99,99 % stabile Bandbreite – ohne Puffern und ohne Standbild.',
      },
      {
        emoji: '🎬',
        title: '+12K Filme & +4K Serien',
        text: 'Eine äußerst umfangreiche VOD-Bibliothek in hoher Auflösung. Tausende aktuelle Blockbuster und komplette Serien mit wöchentlichen Updates.',
      },
      {
        emoji: '⏪',
        title: 'Replay auf +580 Sendern',
        text: 'Verpassen Sie keine Sendung mehr. Nutzen Sie eine leistungsstarke Nachhol-Funktion (Replay) für mehr als 580 Sender – mit Steuerung des Live-Programms über 7 bis 15 Tage.',
      },
      {
        emoji: '🚀',
        title: 'Sofortiger Versand & Verlängerung',
        text: (
          <>
            Codes werden sofort nach der Bestätigung verschickt. Bereits Kunde? Wählen Sie die <Kw>King 365 Verlängerung</Kw>, ohne
            Ihre App neu zu installieren oder Ihre Einstellungen zu verlieren.
          </>
        ),
      },
      {
        emoji: '🛡️',
        title: 'Garantierter Zugang & Support 24/7',
        text: (
          <>
            Reaktionsschneller Support, der Sie begleitet, <Kw>Ihr King 365 Abonnement verlängert</Kw> oder die{' '}
            <Kw>Wiederherstellung Ihres King 365 Codes</Kw> übernimmt – ohne Zusatzkosten.
          </>
        ),
      },
    ],
  },
  es: {
    eyebrow: 'PUNTOS FUERTES · RENDIMIENTO Y FIABILIDAD',
    title: 'Todo sobre tu suscripción King 365 TV',
    subtitle:
      'Tanto si quieres activar una nueva suscripción King 365 como asegurar la renovación King 365 de tu código actual, descubre una infraestructura estable y ágil, pensada para la comodidad de cada usuario, del salón al móvil.',
    features: [
      {
        emoji: '📺',
        title: '+5700 canales en directo',
        text: 'Selección completa de emisiones de TV en directo (Francia, Bélgica, Suiza, internacional). Canales de deportes, cine e infantiles en Full HD y 4K sin latencia.',
      },
      {
        emoji: '📱',
        title: 'Todas tus pantallas',
        text: 'Funciona en Google TV, Smart TV Android (Sony, TCL, Xiaomi), TV Box, Fire TV Stick, smartphones y tabletas (Android e iOS), así como en PC y Mac.',
      },
      {
        emoji: '💰',
        title: 'Ahorra con King 365',
        highlight: true,
        text: (
          <>
            Una sola <Kw>suscripción King 365 TV</Kw> sustituye a todas tus suscripciones por separado (deporte, cine, series, EPG y
            Replay) al precio más competitivo del mercado.
          </>
        ),
      },
      {
        emoji: '⚡',
        title: 'Estabilidad sin cortes',
        text: 'Una infraestructura probada en las grandes noches de partidos internacionales. Servidores potentes que garantizan un ancho de banda estable al 99,99 %, sin buffering ni imagen congelada.',
      },
      {
        emoji: '🎬',
        title: '+12K películas y +4K series',
        text: 'Una videoteca VOD completísima en alta definición. Miles de éxitos de taquilla recientes y series completas, con actualizaciones semanales.',
      },
      {
        emoji: '⏪',
        title: 'Replay en +580 canales',
        text: 'No te pierdas ningún programa. Disfruta de una potente función para ver más tarde (Replay) que cubre más de 580 canales, con control del directo de 7 a 15 días.',
      },
      {
        emoji: '🚀',
        title: 'Envío inmediato y renovación',
        text: (
          <>
            Códigos enviados nada más validar el pedido. ¿Ya eres cliente? Elige la <Kw>renovación King 365</Kw> sin reinstalar tu
            aplicación ni perder tus ajustes.
          </>
        ),
      },
      {
        emoji: '🛡️',
        title: 'Acceso garantizado y soporte 24/7',
        text: (
          <>
            Un soporte ágil para acompañarte, <Kw>renovar tu suscripción King 365</Kw> o encargarse de la{' '}
            <Kw>recuperación del código King 365</Kw> sin coste adicional.
          </>
        ),
      },
    ],
  },
  pt: {
    eyebrow: 'PONTOS FORTES · DESEMPENHO E FIABILIDADE',
    title: 'Tudo sobre a sua subscrição King 365 TV',
    subtitle:
      'Quer pretenda ativar uma nova subscrição King 365 ou garantir a renovação King 365 do seu código atual, descubra uma infraestrutura estável e ágil, pensada para o conforto de cada utilizador, da sala de estar ao telemóvel.',
    features: [
      {
        emoji: '📺',
        title: '+5700 canais em direto',
        text: 'Seleção completa de emissões de TV em direto (França, Bélgica, Suíça, internacional). Canais de desporto, cinema e infantis em Full HD e 4K sem latência.',
      },
      {
        emoji: '📱',
        title: 'Todos os seus ecrãs',
        text: 'Funciona em Google TV, Smart TV Android (Sony, TCL, Xiaomi), TV Box, Fire TV Stick, telemóveis e tablets (Android e iOS), bem como em PC e Mac.',
      },
      {
        emoji: '💰',
        title: 'Poupe com o King 365',
        highlight: true,
        text: (
          <>
            Uma única <Kw>subscrição King 365 TV</Kw> substitui todas as suas subscrições separadas (desporto, cinema, séries, EPG e
            Replay) ao preço mais competitivo do mercado.
          </>
        ),
      },
      {
        emoji: '⚡',
        title: 'Estabilidade sem cortes',
        text: 'Uma infraestrutura testada nas grandes noites de jogos internacionais. Servidores potentes que asseguram uma largura de banda estável a 99,99%, sem buffering nem imagem congelada.',
      },
      {
        emoji: '🎬',
        title: '+12K filmes e +4K séries',
        text: 'Biblioteca VOD ultracompleta em alta definição. Milhares de blockbusters recentes e séries completas, com atualizações semanais.',
      },
      {
        emoji: '⏪',
        title: 'Replay em +580 canais',
        text: 'Não perca nenhum programa. Desfrute de uma função de ver mais tarde (Replay) eficaz que abrange mais de 580 canais, com controlo do direto de 7 a 15 dias.',
      },
      {
        emoji: '🚀',
        title: 'Envio imediato e renovação',
        text: (
          <>
            Códigos enviados imediatamente após a validação. Já é cliente? Opte pela <Kw>renovação King 365</Kw> sem reinstalar a
            sua aplicação nem perder as suas definições.
          </>
        ),
      },
      {
        emoji: '🛡️',
        title: 'Acesso garantido e suporte 24/7',
        text: (
          <>
            Suporte reativo para o acompanhar, <Kw>renovar a sua subscrição King 365</Kw> ou tratar da{' '}
            <Kw>recuperação do código King 365</Kw> sem custos adicionais.
          </>
        ),
      },
    ],
  },
  fi: {
    eyebrow: 'VAHVUUDET · SUORITUSKYKY JA LUOTETTAVUUS',
    title: 'Kaikki King 365 TV -tilauksestasi',
    subtitle:
      'Halusitpa aktivoida uuden King 365 -tilauksen tai varmistaa nykyisen koodisi King 365 -uusimisen, tutustu vakaaseen ja nopeasti reagoivaan infrastruktuuriin, joka on suunniteltu jokaisen käyttäjän mukavuutta ajatellen – olohuoneesta puhelimeen.',
    features: [
      {
        emoji: '📺',
        title: '+5700 suoraa kanavaa',
        text: 'Kattava valikoima suoria TV-lähetyksiä (Ranska, Belgia, Sveitsi, kansainväliset). Urheilu-, elokuva- ja lastenkanavat Full HD- ja 4K-laadussa ilman viivettä.',
      },
      {
        emoji: '📱',
        title: 'Kaikki näyttösi',
        text: 'Toimii Google TV:ssä, Android-älytelevisioissa (Sony, TCL, Xiaomi), TV-bokseissa, Fire TV Stickissä, älypuhelimissa ja tableteissa (Android ja iOS) sekä PC:ssä ja Macissa.',
      },
      {
        emoji: '💰',
        title: 'Säästä King 365:n avulla',
        highlight: true,
        text: (
          <>
            Yksi ainoa <Kw>{'King 365 TV -tilaus'}</Kw> korvaa kaikki erilliset tilauksesi (urheilu, elokuvat, sarjat, EPG ja
            Replay) markkinoiden kilpailukykyisimpään hintaan.
          </>
        ),
      },
      {
        emoji: '⚡',
        title: 'Katkoton vakaus',
        text: 'Infrastruktuuri, joka on koeteltu suurina kansainvälisinä otteluiltoina. Tehokkaat palvelimet takaavat 99,99 % vakaan kaistanleveyden ilman puskurointia tai jäätyvää kuvaa.',
      },
      {
        emoji: '🎬',
        title: '+12K elokuvaa ja +4K sarjaa',
        text: 'Erittäin kattava teräväpiirtoinen VOD-kirjasto. Tuhansia tuoreita menestyselokuvia ja kokonaisia sarjoja, päivitykset viikoittain.',
      },
      {
        emoji: '⏪',
        title: 'Replay +580 kanavalla',
        text: 'Älä enää missaa yhtään ohjelmaa. Nauti tehokkaasta jälkikatselutoiminnosta (Replay), joka kattaa yli 580 kanavaa ja jolla voit hallita suoraa lähetystä 7–15 päivän ajalta.',
      },
      {
        emoji: '🚀',
        title: 'Välitön toimitus ja uusiminen',
        text: (
          <>
            Koodit lähetetään heti vahvistuksen jälkeen. Oletko jo asiakas? Valitse <Kw>{'King 365 -uusiminen'}</Kw>, niin sinun ei
            tarvitse asentaa sovellusta uudelleen eivätkä asetuksesi katoa.
          </>
        ),
      },
      {
        emoji: '🛡️',
        title: 'Taattu pääsy ja tuki 24/7',
        text: (
          <>
            Nopea tuki on apunasi, kun haluat <Kw>{'uusia King 365 -tilauksesi'}</Kw> tai tarvitset{' '}
            <Kw>{'King 365 -koodin palautuksen'}</Kw> – ilman lisäkuluja.
          </>
        ),
      },
    ],
  },
}

/** Section 02 — « Points forts »: badge, H2, SEO subtitle and the 8-card grid (4 / 2 / 1 columns). */
export function HomeFeatureGrid() {
  const t = useCopy(COPY)
  return (
    <Section id="points-forts" className="scroll-mt-20">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-5">
        {t.features.map((f, i) => (
          <Card
            as="li"
            key={i}
            interactive
            className={cn(
              'relative flex flex-col gap-3 p-5 sm:gap-4 sm:p-6',
              f.highlight && 'border-brand/40 bg-brand-soft ring-1 ring-brand/20 hover:border-brand/60',
            )}
          >
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-[1.375rem] leading-none',
                  f.highlight ? 'bg-canvas shadow-card' : 'bg-brand-soft',
                )}
              >
                {f.emoji}
              </span>
              <h3
                className={cn('text-lg leading-snug font-semibold tracking-tight', f.highlight ? 'text-brand' : 'text-heading')}
              >
                {f.title}
              </h3>
            </div>
            <p className="text-[0.9375rem] leading-relaxed text-pretty text-body">{f.text}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
