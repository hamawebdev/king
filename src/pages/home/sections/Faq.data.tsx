import type { ReactNode } from 'react'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { Install, Wa } from './Faq.links'

export type FaqItem = {
  /** Stable id, used for the accordion's aria wiring. */
  id: string
  emoji: string
  question: string
  answer: ReactNode
}

/** Spec S14 — the 20 approved questions and answers, word for word (Downloader codes as written there). */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'commander',
    emoji: '🛒',
    question: 'Comment commander une formule King 365 TV chez NovaStream ?',
    answer: (
      <p>
        Cliquez sur le bouton « Acheter maintenant » (qui vous dirige directement vers nos formules d'abonnement),
        choisissez la durée souhaitée, renseignez vos informations et validez votre demande avec notre équipe sur
        WhatsApp (<Wa>wa.me/33751299176</Wa>) pour une activation immédiate.
      </p>
    ),
  },
  {
    id: 'delai',
    emoji: '📩',
    question: "Dans quel délai vais-je recevoir mes codes d'abonnement ?",
    answer: (
      <p>
        Pendant nos heures d'ouverture, l'envoi de vos identifiants sur WhatsApp et par e-mail après validation du
        paiement est quasi instantané (généralement en moins de 10 à 20 minutes). En période de forte affluence, le
        traitement peut prendre entre 1 et 2 heures maximum (et jusqu'à 6 heures maximum par e-mail).
      </p>
    ),
  },
  {
    id: 'email',
    emoji: '❓',
    question: "Je n'ai pas reçu l'e-mail dans le délai imparti, dois-je m'inquiéter ?",
    answer: (
      <p>
        Non, rassurez-vous. Nos envois sont assurés de 09h00 à 22h00 (GMT+1). Si vous ne voyez rien dans vos courriers
        indésirables (spams), contactez simplement l'équipe NovaStream sur WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>) : un
        conseiller vous transmettra vos accès et réglera la situation immédiatement.
      </p>
    ),
  },
  {
    id: 'autres-apps',
    emoji: '📱',
    question: "Puis-je utiliser mon abonnement King 365 TV sur d'autres applications IPTV ?",
    answer: (
      <p>
        Oui, absolument ! En plus des applications officielles King 365, NovaStream vous recommande vivement d'utiliser
        d'excellents lecteurs payants tels que IBO Player, IBO Player Smarter, Hot Player ou Bob Player pour leur
        fluidité remarquable. Vous pouvez également utiliser des applications gratuites disponibles sur les stores comme
        IPTV Smarters Pro ou Smarters Lite.
      </p>
    ),
  },
  {
    id: 'renouveler',
    emoji: '🔄',
    question: 'Comment renouveler mon abonnement King 365 TV chez NovaStream ?',
    answer: (
      <p>
        Sélectionnez l'option de Renouvellement, indiquez votre appareil, cochez la case dédiée au renouvellement en
        précisant votre identifiant actuel, ou cliquez directement sur notre <Wa>lien WhatsApp</Wa>. Notre support vous
        transmet les informations de paiement : dès l'envoi de votre capture d'écran (reçu), votre abonnement est
        prolongé en quelques minutes sur WhatsApp et par e-mail.
      </p>
    ),
  },
  {
    id: 'memes-identifiants',
    emoji: '🔑',
    question: 'Puis-je renouveler en conservant exactement les mêmes identifiants de mon compte ?',
    answer: (
      <p>
        Si vous aviez souscrit votre abonnement initial sur notre site NovaStream, oui : nous prolongeons directement
        vos identifiants actuels sans rien modifier. En revanche, si votre ancien abonnement provenait d'un autre vendeur
        ou distributeur, nous vous fournirons de nouveaux identifiants officiels NovaStream à saisir dans votre lecteur.
      </p>
    ),
  },
  {
    id: 'telecharger-v3',
    emoji: '📥',
    question: "Comment télécharger l'application King 365 TV Box V3 (APK) ?",
    answer: (
      <p>
        Rendez-vous directement dans notre section de téléchargement en <Install>cliquant ici</Install> (juste au-dessus
        sur cette page), saisissez le nouveau code Downloader officiel de la Version 3 (283367) et suivez nos
        instructions détaillées.
      </p>
    ),
  },
  {
    id: 'telecharger-v4',
    emoji: '🚀',
    question: 'Comment télécharger et installer King 365 TV Version 4 (V4) et où trouver le lien officiel ?',
    answer: (
      <p>
        <Install>Cliquez ici</Install> pour accéder à notre guide d'installation officiel. La Version 4 (Code
        Downloader : 2763945) est conçue pour les téléviseurs Android TV, les appareils Google TV récents, les boîtiers
        TV Box Android et les clés Amazon Fire TV Stick compatibles avec l'application Downloader (à l'exception du Fire
        TV Stick HD 2ᵉ génération sous système fermé Vega OS qui bloque les APK).
      </p>
    ),
  },
  {
    id: 'versions-officielles',
    emoji: '⚠️',
    question:
      'Annonce Importante : Quelles versions officielles King 365 TV faut-il installer et quels anciens codes faut-il supprimer ?',
    answer: (
      <>
        <p>
          Afin d'éviter les coupures, les erreurs d'identification et les problèmes d'accès, ne téléchargez plus les
          anciennes versions obsolètes. Il est fortement conseillé d'installer les 3 nouvelles versions officielles (V2,
          V3 et V4) sur votre appareil pour garantir un fonctionnement continu et une alternative immédiate en cas de
          maintenance d'un serveur :
        </p>
        <p className="font-semibold text-heading">✅ Nouvelles versions officielles à installer :</p>
        <ul className="grid gap-1">
          <li>• Version 2 (V2) : Code Downloader 756917</li>
          <li>• Version 3 (V3) : Code Downloader 283367</li>
          <li>• Version 4 (V4) : Code Downloader 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Anciennes versions obsolètes à éviter absolument (à désinstaller) :</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  {
    id: 'pays',
    emoji: '🌍',
    question:
      "Le service d'abonnement King 365 TV fonctionne-t-il en France, au Canada, en Belgique et à l'étranger ?",
    answer: (
      <p>
        Oui, l'abonnement fonctionne partout dans le monde dès lors que vous disposez d'une connexion Internet (France,
        Canada, Belgique, Suisse, Algérie, Tunisie, Maroc, etc.).
      </p>
    ),
  },
  {
    id: 'multi-ecrans',
    emoji: '🖥️',
    question: 'Puis-je utiliser mon abonnement sur plusieurs appareils ou obtenir une offre multi-écrans ?',
    answer: (
      <p>
        Votre abonnement est personnel et ne peut pas être partagé simultanément : il autorise un seul écran actif à la
        fois. Vous pouvez l'installer sur deux appareils et les utiliser en alternance (jamais en même temps pour éviter
        les blocages). Si vous souhaitez regarder sur plusieurs écrans simultanément, <Wa>contactez NovaStream</Wa> pour
        bénéficier de nos offres sur des abonnements supplémentaires indépendants.
      </p>
    ),
  },
  {
    id: 'sans-parabole',
    emoji: '📡',
    question: 'Puis-je acheter King 365 TV sans accès à une parabole satellite ?',
    answer: (
      <p>
        Absolument ! Le service IPTV King 365 TV est diffusé à 100% via Internet, sans aucune parabole satellite. Une
        connexion Internet haut débit stable (d'au moins 30 Mbps recommandés pour une fluidité optimale en 4K HDR)
        suffit.
      </p>
    ),
  },
  {
    id: 'televiseur-ancien',
    emoji: '📺',
    question: "J'ai un téléviseur ancien, quelle solution proposez-vous ?",
    answer: (
      <p>
        Pour moderniser votre téléviseur, NovaStream vous recommande d'acquérir un boîtier TV Box Android certifié par
        Google (Google Certified) tel que Xiaomi Mi Box, Mecool ou RockTek, ou tout autre boîtier Android doté de bonnes
        caractéristiques techniques (mémoire RAM élevée et processeur performant) pour une navigation ultra-fluide.
      </p>
    ),
  },
  {
    id: 'confiance',
    emoji: '🤝',
    question: 'Comment savoir que NovaStream est un distributeur agréé fiable et vous accorder toute ma confiance ?',
    answer: (
      <p>
        NovaStream est un distributeur agréé reconnu avec plus de 3 ans d'expérience et des dizaines de milliers
        d'abonnés fidèles. Notre service est rigoureusement structuré et transparent : il nous arrive même fréquemment de
        préparer et d'activer les accès de nos clients avant le règlement pour témoigner de notre confiance et de notre
        sérieux.
      </p>
    ),
  },
  {
    id: 'essai',
    emoji: '⏱️',
    question: "Puis-je tester vos services avant de payer (période d'essai) ?",
    answer: (
      <p>
        Oui, un test est disponible dans certains cas pour une durée de 3 heures ou 24 heures, à l'issue duquel vous
        pouvez souscrire un abonnement à partir de 6 mois ou 12 mois. <strong className="font-semibold text-heading">Note importante :</strong>{' '}
        Aucun test n'est délivré pendant les grands matchs et soirées de compétitions majeures afin de garantir, en
        coordination avec King 365 TV, une stabilité maximale du serveur pour nos abonnés actifs.
      </p>
    ),
  },
  {
    id: 'chaines',
    emoji: '🌐',
    question: "Quelles sont les chaînes disponibles dans l'abonnement ?",
    answer: (
      <p>
        Vous accédez à une sélection immense de chaînes du monde entier : France, Royaume-Uni, États-Unis, Canada,
        Belgique, Suisse, Maghreb, Afrique et Europe — incluant tous les bouquets Sport, Actualités, Cinéma, Séries,
        Jeunesse et Documentaires, ainsi que +16 000 films et séries VOD et le Replay jusqu'à 15 jours.
      </p>
    ),
  },
  {
    id: 'ibo-expire',
    emoji: '💳',
    question: "Mon lecteur IBO Player (ou Hot Player / Bob Player) m'indique que l'activation a expiré, que faire ?",
    answer: (
      <p>
        Les applications IBO Player, IBO Player Smarter, Hot Player et Bob Player sont des lecteurs payants
        indépendants exigeant une activation après leur période d'essai. Sur Android, installez notre application
        officielle King 365 TV gratuite pour éviter ces frais. Si vous n'avez pas de téléviseur Android (ex: Smart TV
        Samsung ou LG), NovaStream assure le service d'activation directe de votre lecteur pour environ 8 € / an :
        contactez simplement notre support sur <Wa>WhatsApp</Wa>.
      </p>
    ),
  },
  {
    id: 'licence-payante',
    emoji: '🔐',
    question: "L'application 9Xtream ou IPTV Smarters Pro me demande de payer ou indique que mon activation a expiré ?",
    answer: (
      <p>
        9Xtream et certaines éditions de IPTV Smarters Pro sont des services payants nécessitant une licence logicielle.
        Utilisez gratuitement nos applications officielles King 365 TV (V2, V3, V4) sur les appareils Android TV / Box,
        ou contactez notre <Wa>support WhatsApp</Wa> pour activer une application payante compatible sur vos autres
        écrans.
      </p>
    ),
  },
  {
    id: 'failed-to-authorize',
    emoji: '🛠️',
    question: "INFO Utilisateurs LG & SAMSUNG : L'application Smarters affiche l'erreur « Failed to authorize », que faire ?",
    answer: (
      <>
        <p>
          L'ancienne application Smarters rencontre actuellement un bug d'accès (Erreur : "Failed to authorize"). Soyez
          rassurés, ce n'est pas un problème au niveau de nos serveurs, mais de l'application elle-même.
        </p>
        <p>
          ⬇️ Solution : Les développeurs demandent de passer à la nouvelle version. Téléchargez simplement la nouvelle
          version Smarters Pro depuis le store de votre TV : vos identifiants actuels restent strictly identiques.
        </p>
      </>
    ),
  },
  {
    id: 'lien-serveur',
    emoji: '🔗',
    question: 'Le lien du serveur ne fonctionne pas lorsque je saisis mes informations, pourquoi ?',
    answer: (
      <p>
        Afin de garantir une sécurité et une stabilité maximales, NovaStream renouvelle et met à jour régulièrement ses
        liens de serveur (sans les partager publiquement). Vérifiez que le lien commence bien par http:// et contactez
        notre support sur WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>) pour obtenir immédiatement le lien actualisé.
      </p>
    ),
  },
]
