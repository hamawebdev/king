/** Section 11 copy outside the device guides, word for word from the spec (p.14–21). Inline markup: see devices.ts. */

/** « Bandeau de Réassurance Post-Tarifs (3 Colonnes sous les 4 Formules) ». */
export const GUARANTEES = [
  {
    emoji: '🔄',
    title: 'Renouvellement Facile',
    text: 'Prolongez votre accès en un clic sur WhatsApp sans réinstaller vos applications ni perdre vos favoris.',
  },
  {
    emoji: '⚡',
    title: 'Activation Rapide',
    text: 'Identifiants Xtream et lien M3U envoyés instantanément sur WhatsApp et par e-mail dès validation.',
  },
  {
    emoji: '🛡️',
    title: 'Garantie & Suivi Continu (Satisfait ou Compensé)',
    text: "Accompagnement personnalisé et garantie totale de continuité tout au long de votre période d'abonnement.",
  },
] as const

/** « En-tête du Hub d'Installation 2026 & 3 Indicateurs Clés ». */
export const INSTALL_HEAD = {
  eyebrow: '✨ GUIDES VISUELS 2026 · DISTRIBUTEUR AGRÉÉ',
  title: 'Installation King 365 TV 2026 : Guides Interactifs Pas à Pas',
  subtitle:
    "Sélectionnez l'appareil sur lequel vous souhaitez regarder vos programmes, puis suivez les étapes simples. La majorité de nos abonnés sont opérationnels en moins de 5 minutes.",
} as const

export const INSTALL_KPIS = [
  { value: '< 5 min', label: 'Installation Rapide' },
  { value: '100%', label: 'Compatible Tous Écrans' },
  { value: '7j/7 · 24/7', label: 'Support Technique Inclus' },
] as const

/** Split-screen left column (« Layout Split-Screen CleanShot »). */
export const HUB_ASIDE = {
  title: 'Guides de Réglage NovaStream',
  /** The 3 indicators as the spec words them for this column. */
  indicators: [
    { value: '< 5 min', label: 'Installation Rapide' },
    { value: '100%', label: 'Compatible Tous Écrans' },
    { value: '7j/7', label: 'Support Technique Inclus' },
  ],
  helpTitle: 'Un Souci Pendant la Configuration ?',
  helpText: 'Nos conseillers NovaStream vous répondent 7j/7 sur WhatsApp',
  /** « Bouton Tutoriels Dédiés NovaStream » (the spec's trailing « -> » is drawn as an arrow icon). */
  tutorial: "📖 Voir le tutoriel détaillé NovaStream pas-à-pas (avec captures d'écran)",
  changeDevice: "Changer d'appareil",
} as const

export const INSTALL_FAQ_TITLE = 'Questions Fréquentes'

export const INSTALL_FAQ = [
  {
    q: "J'ai saisi mes identifiants mais l'application indique une erreur, que faire ?",
    a: "Vérifiez tout d'abord le **lien du serveur (Server URL)** : il doit impérativement commencer par `http://` **— et non** `https://`. Cette simple lettre est la cause d'erreur la plus fréquente. Assurez-vous également qu'aucun espace supplémentaire ne s'est glissé lors du copier-coller. **Toujours bloqué ?** Envoyez-nous un message sur WhatsApp ([+33 7 51 29 91 76](wa:help)) : notre équipe vérifiera vos accès et configurera l'abonnement à distance pour vous.",
  },
  {
    q: 'Quel débit Internet est nécessaire pour une diffusion fluide ?',
    a: 'Une connexion de **10 à 20 Mbps** est le minimum requis pour un streaming fluide en Full HD. Nous recommandons un débit supérieur (**30 Mbps et plus**) si vous souhaitez profiter pleinement des flux en **véritable 4K HDR à 60 FPS** ou si plusieurs personnes utilisent la même connexion Internet simultanément à la maison.',
  },
  {
    q: 'Dois-je utiliser un VPN avec mon abonnement ?',
    a: "**Ce n'est pas obligatoire** — nos formules (notamment le Pack Signature) intègrent un **DNS Dédié** qui contourne automatiquement les blocages des opérateurs Internet (FAI). Si vous utilisez tout de même un VPN, **choisissez impérativement un serveur situé dans votre propre pays** : cela vous garantit la meilleure vitesse et la latence la plus faible (ne vous connectez pas à un pays éloigné).",
  },
  {
    q: "Pourquoi ai-je besoin d'un lecteur payant sur certains appareils ?",
    a: "Les lecteurs payants (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) offrent de bien meilleures performances matérielles. Sur une **Smart TV (Samsung / LG) ou Apple**, nous recommandons vivement une application payante (~8 € / an après 7 jours d'essai gratuit) car elle tourne beaucoup plus fluidement que les applications gratuites et mémorise la reprise de vos films et séries. En revanche, sur **Android, Google TV, TV Box ou Firestick**, nos applications officielles **King 365 TV (V2, V3 et V4)** fonctionnent à merveille et sont **100% gratuites**.",
  },
] as const

/** « Bannière Finale d'Assistance Conciergerie WhatsApp ». */
export const HELP_BANNER = {
  title: 'Bloqué à une étape ? Nous configurons votre appareil avec vous.',
  subtitle:
    "Envoyez un message à notre équipe d'assistance sur WhatsApp : nous vous accompagnerons pas à pas ou activerons directement votre abonnement à distance, quel que soit votre écran.",
  whatsappCta: "💬 Obtenir de l'aide sur WhatsApp",
  whatsappMessage: "Bonjour NovaStream, j'ai besoin d'aide pour installer et configurer mon appareil",
  /** « Bouton Formules (Bleu #0066FF) » — goes to the 4 packs (#signature); the spec's « -> » is an arrow icon. */
  plansCta: 'Commander un abonnement',
  plansTo: '/#signature',
} as const
