import type { ReactNode } from 'react'
import type { Localized } from '@/lib/i18n'
import { WHATSAPP_DISPLAY, waLink } from '@/lib/site'

export type Pillar = { emoji: string; title: string; text: ReactNode; wide?: boolean }

export type PillarsCopy = { eyebrow: string; title: string; subtitle: string; pillars: Pillar[] }

const WA = (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold whitespace-nowrap text-brand underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
  >
    {WHATSAPP_DISPLAY}
  </a>
)

/** Spec S12 « Grille Bento des 6 Piliers NovaStream », word for word. 2 rows × 3 tiles; tiles 1 and 6 are wide. */
const fr: PillarsCopy = {
  eyebrow: 'NOVASTREAM · DISTRIBUTEUR AGRÉÉ KING 365 TV',
  title: 'Ce Qui Distingue NovaStream !',
  subtitle:
    'Des milliers de foyers en France, Belgique, Suisse et Canada confient leurs soirées télé à NovaStream. En tant que distributeur agréé King 365 TV, découvrez pourquoi nos abonnés nous restent fidèles année après année.',
  pillars: [
    {
      emoji: '👑',
      title: "L'Exigence NovaStream (Service Plébiscité)",
      text: "Nos abonnés saluent la transparence de l'accompagnement NovaStream et la régularité exemplaire des flux King 365 TV, soir après soir, dès le premier jour d'activation.",
      wide: true,
    },
    {
      emoji: '📱',
      title: 'Compatible sur Tous Vos Écrans',
      text: 'Que vous utilisiez les applications King 365 (V2, V3, V4) ou un lecteur payant (IBO Player, Bob Player, Hot Player), votre abonnement activé par NovaStream fonctionne sur Smart TV, Box Android, Firestick, Apple et PC.',
    },
    {
      emoji: '✨',
      title: "Image Haute Fidélité jusqu'en 4K HDR",
      text: "Du 480p économique au véritable 4K Ultra HD à 60 FPS en passant par le 1080p, le flux fourni par NovaStream s'ajuste automatiquement à votre débit Internet sans compression agressive.",
    },
    {
      emoji: '🌐',
      title: 'Relais NovaStream & DNS Dédié',
      text: 'Un réseau de relais haute disponibilité couplé au DNS Dédié NovaStream, conçu pour éviter les blocages des opérateurs (FAI) selon votre position géographique.',
    },
    {
      emoji: '⚡',
      title: 'Zapping Éclair (< 0,5s)',
      text: "Passez d'une chaîne à l'autre en moins d'une seconde grâce à l'optimisation des accès NovaStream, sans écran noir ni temps de chargement.",
    },
    {
      emoji: '🎧',
      title: 'Aide & Conciergerie NovaStream 7j/7',
      text: (
        <>
          Un conseiller technique NovaStream vous accompagne personnellement sur WhatsApp ({WA}) à chaque étape, de la validation du
          paiement jusqu'au réglage complet de votre écran.
        </>
      ),
      wide: true,
    },
  ],
}

export const PILLARS_COPY: Localized<PillarsCopy> = {
  fr,
  en: {
    eyebrow: 'NOVASTREAM · AUTHORIZED KING 365 TV DISTRIBUTOR',
    title: 'What Sets NovaStream Apart!',
    subtitle:
      'Thousands of households in France, Belgium, Switzerland and Canada trust NovaStream, an authorized King 365 TV distributor, with their TV evenings. Discover why our subscribers stay with us year after year.',
    pillars: [
      {
        emoji: '👑',
        title: 'The NovaStream Standard (Acclaimed Service)',
        text: 'Our subscribers praise the transparency of NovaStream’s support and the exemplary consistency of the King 365 TV streams, night after night, from the very first day of activation.',
        wide: true,
      },
      {
        emoji: '📱',
        title: 'Compatible with All Your Screens',
        text: 'Whether you use the King 365 apps (V2, V3, V4) or a paid player (IBO Player, Bob Player, Hot Player), your NovaStream-activated subscription works on Smart TV, Android Box, Firestick, Apple and PC.',
      },
      {
        emoji: '✨',
        title: 'High-Fidelity Picture up to 4K HDR',
        text: 'From data-saving 480p through 1080p to true 4K Ultra HD at 60 FPS, the stream provided by NovaStream automatically adapts to your Internet speed without aggressive compression.',
      },
      {
        emoji: '🌐',
        title: 'NovaStream Relays & Dedicated DNS',
        text: 'A high-availability relay network combined with NovaStream’s dedicated DNS, designed to avoid ISP blocking depending on your location.',
      },
      {
        emoji: '⚡',
        title: 'Lightning-Fast Zapping (< 0.5s)',
        text: 'Switch from one channel to the next in under a second thanks to NovaStream’s optimized access, with no black screen and no loading time.',
      },
      {
        emoji: '🎧',
        title: 'NovaStream Help & Concierge 7 Days a Week',
        text: (
          <>
            A NovaStream technical advisor personally guides you on WhatsApp ({WA}) at every step, from payment confirmation to the
            complete setup of your screen.
          </>
        ),
        wide: true,
      },
    ],
  },
  de: {
    eyebrow: 'NOVASTREAM · AUTORISIERTER KING 365 TV VERTRIEBSPARTNER',
    title: 'Was NovaStream auszeichnet!',
    subtitle:
      'Tausende Haushalte in Frankreich, Belgien, der Schweiz und Kanada vertrauen ihre Fernsehabende NovaStream an, dem autorisierten Vertriebspartner von King 365 TV. Erfahren Sie, warum unsere Abonnenten uns Jahr für Jahr treu bleiben.',
    pillars: [
      {
        emoji: '👑',
        title: 'Der NovaStream-Anspruch (vielfach gelobter Service)',
        text: 'Unsere Abonnenten schätzen die transparente Betreuung durch NovaStream und die vorbildliche Zuverlässigkeit der King 365 TV Streams – Abend für Abend, vom ersten Tag der Aktivierung an.',
        wide: true,
      },
      {
        emoji: '📱',
        title: 'Kompatibel mit all Ihren Bildschirmen',
        text: 'Ob Sie die King 365 Apps (V2, V3, V4) oder einen kostenpflichtigen Player (IBO Player, Bob Player, Hot Player) nutzen: Ihr von NovaStream aktiviertes Abonnement funktioniert auf Smart TV, Android-Box, Firestick, Apple und PC.',
      },
      {
        emoji: '✨',
        title: 'High-Fidelity-Bild bis 4K HDR',
        text: 'Vom datensparenden 480p über 1080p bis zu echtem 4K Ultra HD mit 60 FPS: Der von NovaStream bereitgestellte Stream passt sich automatisch Ihrer Internetgeschwindigkeit an – ohne aggressive Kompression.',
      },
      {
        emoji: '🌐',
        title: 'NovaStream-Relays & dedizierter DNS',
        text: 'Ein hochverfügbares Relay-Netzwerk, kombiniert mit dem dedizierten DNS von NovaStream – entwickelt, um Sperren durch Internetanbieter je nach Standort zu vermeiden.',
      },
      {
        emoji: '⚡',
        title: 'Blitzschnelles Zappen (< 0,5 s)',
        text: 'Wechseln Sie dank der optimierten NovaStream-Zugänge in weniger als einer Sekunde von Sender zu Sender – ohne schwarzen Bildschirm und ohne Ladezeit.',
      },
      {
        emoji: '🎧',
        title: 'NovaStream-Hilfe & Concierge-Service 7 Tage die Woche',
        text: (
          <>
            Ein technischer Berater von NovaStream begleitet Sie persönlich per WhatsApp ({WA}) bei jedem Schritt – von der
            Zahlungsbestätigung bis zur vollständigen Einrichtung Ihres Bildschirms.
          </>
        ),
        wide: true,
      },
    ],
  },
  es: {
    eyebrow: 'NOVASTREAM · DISTRIBUIDOR AUTORIZADO KING 365 TV',
    title: '¡Lo que distingue a NovaStream!',
    subtitle:
      'Miles de hogares en Francia, Bélgica, Suiza y Canadá confían sus noches de televisión a NovaStream, distribuidor autorizado de King 365 TV. Descubre por qué nuestros suscriptores nos siguen eligiendo año tras año.',
    pillars: [
      {
        emoji: '👑',
        title: 'La exigencia NovaStream (servicio aclamado)',
        text: 'Nuestros suscriptores destacan la transparencia del acompañamiento de NovaStream y la regularidad ejemplar de las emisiones King 365 TV, noche tras noche, desde el primer día de activación.',
        wide: true,
      },
      {
        emoji: '📱',
        title: 'Compatible con todas tus pantallas',
        text: 'Tanto si usas las aplicaciones King 365 (V2, V3, V4) como un reproductor de pago (IBO Player, Bob Player, Hot Player), tu suscripción activada por NovaStream funciona en Smart TV, box Android, Firestick, Apple y PC.',
      },
      {
        emoji: '✨',
        title: 'Imagen de alta fidelidad hasta 4K HDR',
        text: 'Del económico 480p al auténtico 4K Ultra HD a 60 FPS, pasando por el 1080p, la emisión de NovaStream se ajusta automáticamente a tu velocidad de Internet sin compresión agresiva.',
      },
      {
        emoji: '🌐',
        title: 'Relés NovaStream y DNS dedicado',
        text: 'Una red de relés de alta disponibilidad combinada con el DNS dedicado de NovaStream, diseñada para evitar los bloqueos de los operadores según tu ubicación geográfica.',
      },
      {
        emoji: '⚡',
        title: 'Zapping relámpago (< 0,5 s)',
        text: 'Pasa de un canal a otro en menos de un segundo gracias a la optimización de los accesos NovaStream, sin pantalla negra ni tiempos de carga.',
      },
      {
        emoji: '🎧',
        title: 'Ayuda y conserjería NovaStream 7 días a la semana',
        text: (
          <>
            Un asesor técnico de NovaStream te acompaña personalmente por WhatsApp ({WA}) en cada paso, desde la validación del pago
            hasta la configuración completa de tu pantalla.
          </>
        ),
        wide: true,
      },
    ],
  },
  pt: {
    eyebrow: 'NOVASTREAM · DISTRIBUIDOR AUTORIZADO KING 365 TV',
    title: 'O que distingue a NovaStream!',
    subtitle:
      'Milhares de lares em França, na Bélgica, na Suíça e no Canadá confiam as suas noites de televisão à NovaStream, distribuidor autorizado King 365 TV. Descubra porque é que os nossos subscritores nos são fiéis ano após ano.',
    pillars: [
      {
        emoji: '👑',
        title: 'A exigência NovaStream (serviço aclamado)',
        text: 'Os nossos subscritores elogiam a transparência do acompanhamento NovaStream e a regularidade exemplar das emissões King 365 TV, noite após noite, desde o primeiro dia de ativação.',
        wide: true,
      },
      {
        emoji: '📱',
        title: 'Compatível com todos os seus ecrãs',
        text: 'Quer utilize as aplicações King 365 (V2, V3, V4) ou um leitor pago (IBO Player, Bob Player, Hot Player), a sua subscrição ativada pela NovaStream funciona em Smart TV, Box Android, Firestick, Apple e PC.',
      },
      {
        emoji: '✨',
        title: 'Imagem de alta fidelidade até 4K HDR',
        text: 'Do económico 480p ao verdadeiro 4K Ultra HD a 60 FPS, passando pelo 1080p, o fluxo fornecido pela NovaStream ajusta-se automaticamente à sua velocidade de Internet, sem compressão agressiva.',
      },
      {
        emoji: '🌐',
        title: 'Relés NovaStream e DNS dedicado',
        text: 'Uma rede de relés de alta disponibilidade aliada ao DNS dedicado NovaStream, concebida para evitar os bloqueios dos operadores consoante a sua localização geográfica.',
      },
      {
        emoji: '⚡',
        title: 'Zapping relâmpago (< 0,5 s)',
        text: 'Mude de canal em menos de um segundo graças à otimização dos acessos NovaStream, sem ecrã preto nem tempo de carregamento.',
      },
      {
        emoji: '🎧',
        title: 'Ajuda e concierge NovaStream 7 dias por semana',
        text: (
          <>
            Um consultor técnico NovaStream acompanha-o pessoalmente no WhatsApp ({WA}) em cada etapa, desde a validação do pagamento até
            à configuração completa do seu ecrã.
          </>
        ),
        wide: true,
      },
    ],
  },
  fi: {
    eyebrow: 'NOVASTREAM · VALTUUTETTU KING 365 TV -⁠JÄLLEENMYYJÄ',
    title: 'Tämä erottaa NovaStreamin muista!',
    subtitle:
      'Tuhannet kotitaloudet Ranskassa, Belgiassa, Sveitsissä ja Kanadassa luottavat TV-illoissaan NovaStreamiin, valtuutettuun King 365 TV -⁠jälleenmyyjään. Katso, miksi tilaajamme pysyvät kanssamme vuodesta toiseen.',
    pillars: [
      {
        emoji: '👑',
        title: 'NovaStreamin laatulupaus (kiitetty palvelu)',
        text: 'Tilaajamme kiittävät NovaStreamin läpinäkyvää tukea ja King 365 TV -⁠lähetysten esimerkillistä tasaisuutta ilta illan jälkeen – aktivoinnin ensimmäisestä päivästä lähtien.',
        wide: true,
      },
      {
        emoji: '📱',
        title: 'Toimii kaikilla näytöilläsi',
        text: 'Käytitpä King 365 -⁠sovelluksia (V2, V3, V4) tai maksullista soitinta (IBO Player, Bob Player, Hot Player), NovaStreamin aktivoima tilauksesi toimii Smart TV:ssä, Android-boksissa, Firestickissä, Applen laitteissa ja PC:llä.',
      },
      {
        emoji: '✨',
        title: 'Huippulaadukas kuva aina 4K HDR:ään asti',
        text: 'Datansäästävästä 480p:stä 1080p:n kautta aitoon 4K Ultra HD -⁠kuvaan 60 FPS:llä: NovaStreamin lähetys mukautuu automaattisesti nettiyhteytesi nopeuteen ilman rajua pakkausta.',
      },
      {
        emoji: '🌐',
        title: 'NovaStream-välityspalvelimet ja oma DNS',
        text: 'Korkean käytettävyyden välityspalvelinverkko yhdistettynä NovaStreamin omaan DNS:ään, joka on suunniteltu välttämään operaattoriestot sijaintisi mukaan.',
      },
      {
        emoji: '⚡',
        title: 'Salamannopea kanavanvaihto (< 0,5 s)',
        text: 'Vaihda kanavalta toiselle alle sekunnissa NovaStreamin optimoitujen yhteyksien ansiosta – ei mustaa ruutua, ei latausaikoja.',
      },
      {
        emoji: '🎧',
        title: 'NovaStreamin apu ja concierge-palvelu 7 päivää viikossa',
        text: (
          <>
            NovaStreamin tekninen asiakasneuvoja opastaa sinua henkilökohtaisesti WhatsAppissa ({WA}) jokaisessa vaiheessa maksun
            vahvistamisesta näyttösi täydelliseen säätämiseen.
          </>
        ),
        wide: true,
      },
    ],
  },
}
