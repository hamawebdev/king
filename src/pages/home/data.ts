// Home landing page content. Every sentence here is placeholder copy written for the layout clone;
// lengths are matched to the original only so that lines wrap the same way.
import { BRAND, BRAND_UPPER } from '@/lib/site'

export type IconText = { icon: string; label: string }
export type Card = { icon: string; title: string; text: string; badge?: string }

export const ROUTES = {
  p3: '/produit/abonnement-3-mois/',
  p6: '/produit/abonnement-6-mois/',
  p12: '/produit/abonnement-12-mois/',
  p24: '/produit/abonnement-24-mois/',
  renew: '/produit/renouvellement-12-mois/',
}

export const HERO = {
  rating: 'Service préféré en 2026 · 4.8/5',
  titleStart: 'Découvrez ',
  titleBlue: '+5200 Chaînes TV',
  titleEnd: ' sans Limite',
  sub: `${BRAND} rassemble le sport en live, les sorties ciné et des milliers d’épisodes au même endroit. Formules dès 39€ par an.`,
  cta: 'Activer mon accès TV',
  renew: 'Je renouvelle',
  trust: [
    { icon: 'ti-lock', label: 'Paiement Protégé' },
    { icon: 'ti-bolt', label: 'Envoi Quasi Immédiat' },
    { icon: 'ti-users', label: '40 000+ Inscrits' },
  ] as IconText[],
}

export const OFFER = {
  ribbon: 'COUP DE CŒUR',
  plan: 'Pack Intégral 12 Mois',
  oldPrice: '108€/an',
  price: '59€',
  per: '/an',
  pct: '−45%',
  save: 'Tarif spécial jusqu’à fin octobre',
  cta: 'Abonner Maintenant',
  feats: ['5200+ Chaînes', '8000+ VOD', 'Ultra HD 4K', 'Rattrapage'],
}

export const PROOF_RATING = 'Avis 4.8/5'

export const PROOF = [
  { value: '40K+', label: 'Abonnés fidèles' },
  { value: '5200+', label: 'Chaînes en direct' },
  { value: '60+', label: 'Pays couverts' },
  { value: '24/7', label: 'Assistance dédiée' },
]

export const FEATURES_HEAD = {
  eyebrow: 'Points forts',
  titleStart: 'Tout Savoir sur ',
  titleBlue: BRAND_UPPER,
  text: 'Une plateforme pensée pour le confort de chaque spectateur, du salon au mobile.',
}

export const FEATURES: Card[] = [
  { icon: 'ti-device-tv', title: '5200+ Chaînes TV', text: 'Des bouquets en direct venus des quatre coins du globe.' },
  { icon: 'ti-movie', title: 'Vidéothèque XXL', text: 'Des milliers de titres à la demande, avec des ajouts toutes les semaines.' },
  { icon: 'ti-device-desktop', title: 'Image 4K & FHD', text: 'Une définition qui s’adapte, de la SD jusqu’à l’Ultra HD 4K.' },
  { icon: 'ti-player-track-next', title: 'Lecture Flexible', text: 'Figez le direct ou relancez une émission déjà passée.' },
  { icon: 'ti-world', title: 'Réseau Mondial', text: 'Des flux fluides servis par des relais présents sur cinq continents.' },
  { icon: 'ti-device-mobile', title: 'Tous Vos Écrans', text: 'Fonctionne sur téléviseur, ordinateur, tablette, mobile et box TV.' },
  { icon: 'ti-lifebuoy', title: 'Aide 7j/7', text: 'Des conseillers à l’écoute chaque jour, sans attente.' },
  { icon: 'ti-shield-lock', title: 'Accès Toujours Protégé', text: 'Codes perdus ? Un nouvel envoi se déclenche en un clic, sans attendre.' },
]

export const APP = {
  eyebrow: 'Notre Application',
  title: BRAND_UPPER,
  titleBlue: 'PLAY',
  text: 'Une interface claire et rapide, conçue par notre équipe pour lancer vos programmes en un seul geste sur mobile, tablette, téléviseur ou ordinateur portable.',
  checks: [
    { icon: 'ti-bolt', label: 'Zapping express' },
    { icon: 'ti-pointer', label: 'Navigation simple' },
    { icon: 'ti-calendar-event', label: 'Guide TV inclus' },
  ] as IconText[],
  pills: [
    { icon: 'ti-device-tv', label: 'Smart TV' },
    { icon: 'ti-brand-android', label: 'Android/iOS' },
    { icon: 'ti-flame', label: 'Fire Stick' },
    { icon: 'ti-devices', label: 'Multi-écrans' },
  ] as IconText[],
}

export const CHANNELS = {
  eyebrow: 'Édition 2026',
  titleStart: 'Grille ',
  titleBlue: BRAND_UPPER,
  titleEnd: ' TV',
  text: 'Un large choix de programmes internationaux, des grandes chaînes nationales aux bouquets thématiques.',
  qualities: [
    { value: '4K', label: 'Ultra HD' },
    { value: 'FHD', label: '1080p' },
    { value: 'HD', label: '720p' },
    { value: 'SD', label: '480p' },
  ],
  catsTitle: 'Thèmes au programme',
  cats: [
    { icon: 'ti-ball-football', label: 'Sports' },
    { icon: 'ti-movie', label: 'Films' },
    { icon: 'ti-device-tv', label: 'Séries' },
    { icon: 'ti-news', label: 'News' },
    { icon: 'ti-mood-kid', label: 'Jeunesse' },
    { icon: 'ti-music', label: 'Musique' },
  ] as IconText[],
}

export const DISCOVER = {
  eyebrow: `${BRAND_UPPER} · saison 2026`,
  titleStart: 'Explorez ',
  titleBlue: BRAND,
  text: `${BRAND} a bâti sa réputation sur la fiabilité de ses flux et sur la clarté de ses offres. Chaque formule associe confort de visionnage, simplicité d’usage et suivi attentif.`,
  stats: [
    { value: '5200+', label: 'Chaînes TV' },
    { value: '8000+', label: 'Films & Séries' },
    { value: '40K+', label: 'Abonnés Comblés' },
    { value: '99.95%', label: 'Service Continu' },
  ],
  subTitle: `Ce Qui Distingue ${BRAND} au Quotidien`,
  cards: [
    { icon: 'ti-flag', title: 'Référence Francophone', text: `${BRAND} accompagne chaque soir des milliers de foyers en France, en Suisse et au Québec.` },
    { icon: 'ti-settings', title: 'Architecture Robuste', text: 'Nos relais vidéo sont installés dans plusieurs centres de données pour réduire les délais d’attente.' },
    { icon: 'ti-box', title: 'Lecteur Maison', text: 'Notre lecteur intégré propose le contrôle du direct, des listes de favoris et un rattrapage de dix jours.' },
    { icon: 'ti-world', title: 'Présence Mondiale', text: 'Votre accès vous suit en voyage et reste actif dans plus de 60 pays répartis sur tous les continents.' },
    { icon: 'ti-lifebuoy', title: 'Assistance Réactive', text: 'Une question ? Écrivez-nous à toute heure, la réponse arrive vite.' },
    { icon: 'ti-coin-euro', title: 'Budget Maîtrisé', text: 'Une seule formule remplace plusieurs offres payantes, pour un coût annuel nettement plus léger.' },
  ] as Card[],
  cats: [
    { icon: 'ti-ball-football', label: 'Sport' },
    { icon: 'ti-movie', label: 'Cinéma' },
    { icon: 'ti-device-tv', label: 'Séries' },
    { icon: 'ti-world', label: 'International' },
  ] as IconText[],
}

export const TIMELINE = {
  titleStart: 'Les Étapes ',
  titleBlue: BRAND,
  items: [
    { yr: 'Lancement', title: 'Une Idée de Départ', text: 'Le projet est né d’une idée claire : rendre la télé en ligne simple pour tous.' },
    { yr: 'Croissance', title: 'Rayonnement Européen', text: 'L’équipe a conçu son propre lecteur vidéo, disponible sur chaque plateforme.' },
    { yr: 'Maintenant', title: 'Acteur de Confiance', text: 'Des milliers de foyers comptent désormais sur nous pour leurs soirées télé.' },
    { yr: 'Demain', title: 'Nouveautés à Venir', text: 'De nouveaux outils sont déjà en préparation pour nos abonnés.' },
  ],
}

export const SPORT = {
  eyebrow: 'Matchs en live',
  title: 'Tout le Sport en Direct',
  text: 'Football, basket, tennis ou sports mécaniques : vivez chaque rencontre en direct avec une image soignée, où que vous soyez.',
  pills: [
    { icon: 'ti-ball-football', label: 'Football' },
    { icon: 'ti-ball-basketball', label: 'Basketball' },
    { icon: 'ti-ball-tennis', label: 'Tennis' },
    { icon: 'ti-car', label: 'Voitures' },
  ] as IconText[],
}

export const VOD = {
  eyebrow: 'Films & Séries',
  title: `Vidéothèque ${BRAND}`,
  text: 'Plus de 8000 titres à la demande, classés par genre et par année.',
  checks: ['Versions 4K proposées', 'Pistes audio au choix', 'Ajouts chaque semaine', 'Sorties toutes récentes'],
  movies: [
    { value: '1600+', label: 'Action' },
    { value: '1300+', label: 'Comédie' },
    { value: '1900+', label: 'Drame' },
    { value: '700+', label: 'Sci-Fi' },
    { value: '500+', label: 'Horreur' },
    { value: '800+', label: 'Romance' },
    { value: '600+', label: 'Animation' },
    { value: '900+', label: 'Documentaire' },
  ],
}

export const CTA = {
  title: `Passez à ${BRAND} Dès Ce Soir`,
  text: `Une seule formule pour tout regarder, sur chacun de vos écrans. ${BRAND} rassemble chaînes en direct, grands matchs, films et séries dans une interface fluide. Dès 39€ par an.`,
  primary: 'Abonner Maintenant',
  secondary: 'Renouveler mon accès',
}

export type Plan = {
  badge: string
  badgeAlt?: boolean
  featured?: boolean
  name: string
  price: string
  per: string
  perMonth: string
  lastFeature: string
  to: string
}

export const PLANS_HEAD = {
  eyebrow: 'Abonnements',
  titleStart: 'Comparez Toutes Nos ',
  titleBlue: 'Formules',
  text: 'Quatre durées au choix, toutes avec le même contenu et la même assistance.',
}

/** Label pinned on the highlighted plan card. */
export const PLAN_FLAG = 'PLUS POPULAIRE'

export const PLAN_FEATURES = [
  'Toutes les chaînes incluses',
  'Assistance prioritaire',
  '99,95% de disponibilité',
  'Du SD jusqu’à l’Ultra HD 4K',
  'Rattrapage 7 à 10 jours',
]

export const PLANS: Plan[] = [
  { badge: 'Découverte', badgeAlt: true, name: 'Accès 3 Mois', price: '38€', per: '/3 mois', perMonth: 'soit 12,67€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p3 },
  { badge: 'Économisez 40%', name: 'Accès 6 Mois', price: '45€', per: '/6 mois', perMonth: 'soit 7,50€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p6 },
  { badge: 'Économisez 62%', featured: true, name: 'Accès 12 Mois', price: '59€', per: '/12 mois', perMonth: 'soit 4,92€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p12 },
  { badge: 'Tarif le plus bas', name: 'Ultra PRO 24 Mois', price: '109€', per: '/24 mois', perMonth: 'soit 4,54€/mois', lastFeature: 'Image nette & zéro coupure', to: ROUTES.p24 },
]

export const PLANS_TRUST = {
  secure: 'Règlement 100% protégé',
  fast: 'Accès livré sans délai',
  pay: 'Paiement :',
  methods: ['VISA', 'MASTERCARD', 'PAYPAL'],
}

export const COMPAT = {
  eyebrow: 'Compatibilité',
  titleStart: 'Disponible sur ',
  titleBlue: 'Chacun de vos Écrans',
  text: 'Des tutoriels pas à pas pour configurer chaque type d’appareil',
  items: [
    { icon: 'ti-device-tv', title: 'Téléviseurs', text: 'Quelques réglages et c’est parti', tags: ['Écran 4K', 'OLED', 'QLED', '+2'] },
    { icon: 'ti-brand-android', title: 'Android', text: `Lecteurs M3U, codes Xtream, appli ${BRAND}`, tags: ['Boîtier', 'Téléphone', 'Tablette'] },
    { icon: 'ti-brand-apple', title: 'Apple', text: 'Mise en service pas à pas sur iOS et tvOS', tags: ['iPhone', 'iPad', 'Apple TV'] },
    { icon: 'ti-box', title: 'Boîtiers', text: 'Box et décodeurs courants', tags: ['Box M3U', 'Décodeur Z7', 'Décodeur Z8'] },
  ],
}

export const PREMIUM = {
  titleStart: 'Tout Ce Qu’inclut l’Abonnement ',
  titleBlue: `${BRAND} Premium`,
  titleEnd: ' ?',
  stats: [
    { value: '5100+', label: 'Programmes en direct' },
    { value: '8000+', label: 'Titres à la demande' },
    { value: '4K', label: 'Définition jusqu’au 4K' },
    { value: '7-10j', label: 'Rattrapage inclus' },
  ],
  appsTitle: 'Lecteurs pris en charge',
  apps: [
    { icon: 'ti-device-tv', label: 'Smart TV' },
    { icon: 'ti-device-desktop', label: 'PC' },
    { icon: 'ti-brand-apple', label: 'Apple TV' },
    { icon: 'ti-device-mobile', label: 'iPhone' },
    { icon: 'ti-device-tablet', label: 'iPad' },
    { icon: 'ti-brand-android', label: 'Android' },
    { icon: 'ti-flame', label: 'Fire Stick' },
    { icon: 'ti-player-play', label: 'Linux' },
    { icon: 'ti-box', label: 'BOX M3U' },
    { icon: 'ti-traffic-cone', label: 'Mac' },
    { icon: 'ti-bolt', label: 'Lecteur Xtream' },
    { icon: 'ti-box', label: 'Décodeur Z7/Z8' },
    { icon: 'ti-antenna', label: 'Web IPTV' },
  ] as IconText[],
}

export type Guide = { icon: string; title: string; tags: string[]; steps: string[]; tip: string }

export const GUIDES_HEAD = {
  eyebrow: 'Mise en Route',
  titleStart: 'Guides de Réglage ',
  titleBlue: BRAND,
  titleEnd: '',
  text: 'Suivez nos fiches pratiques et regardez vos chaînes en moins de dix minutes.',
  stats: [
    { value: '< 8 min', label: 'Installation' },
    { value: '100%', label: 'Compatible' },
    { value: '7j/7', label: 'Support' },
  ],
}

export const GUIDES: Guide[] = [
  {
    icon: 'ti-device-tv',
    title: `Smart TV — Paramétrer ${BRAND}`,
    tags: ['Écran 4K', 'OLED', 'QLED', 'LED', '+1'],
    steps: [
      'Ouvrez la boutique d’applications intégrée à votre téléviseur',
      'Installez un lecteur M3U ou Xtream gratuit',
      'Recopiez les informations de connexion de votre commande',
      'Installez-vous et lancez votre chaîne !',
    ],
    tip: 'Pour une image stable, reliez votre téléviseur en Ethernet plutôt qu’en Wi-Fi. Le réglage complet ne dure que quelques minutes.',
  },
  {
    icon: 'ti-flame',
    title: `Fire TV Stick — Paramétrer ${BRAND}`,
    tags: ['Clé HDMI 4K Max', 'Clé HDMI Lite', 'Boîtier Cube'],
    steps: [
      'Dans les options développeur, activez l’installation hors boutique',
      'Ajoutez un outil de téléchargement disponible gratuitement',
      'Saisissez l’adresse de notre APK dans cet outil',
      'Validez, patientez un instant, et c’est terminé !',
    ],
    tip: 'Branchée derrière n’importe quel écran, une clé HDMI le transforme en télé connectée en un instant. Notre lecteur y tourne de façon très fluide.',
  },
  {
    icon: 'ti-brand-android',
    title: `Android — Paramétrer ${BRAND}`,
    tags: ['Smartphones', 'Tablettes', 'Boîtiers', 'TV connectées'],
    steps: [
      'Dans les réglages, permettez les installations hors boutique',
      `Récupérez le fichier APK ${BRAND} sur notre page dédiée`,
      'Suivez l’assistant jusqu’au premier lancement',
      'Connectez-vous : la grille s’affiche, c’est prêt !',
    ],
    tip: 'Notre lecteur a été pensé d’abord pour Android : il se montre léger, rapide et parfaitement adapté aux écrans tactiles comme aux télécommandes.',
  },
  {
    icon: 'ti-brand-apple',
    title: `Apple (iOS/tvOS) — Paramétrer ${BRAND}`,
    tags: ['iPhone', 'iPad', 'Apple TV', 'Mac'],
    steps: [
      'Installez un lecteur M3U compatible depuis la boutique officielle',
      'Rendez-vous dans la section de configuration du lecteur',
      'Remplissez les trois champs requis',
      'Vos chaînes s’affichent aussitôt, prêtes à être regardées !',
    ],
    tip: 'Les appareils Apple gèrent très bien nos flux en haute définition. Choisissez un lecteur récent pour profiter du guide des programmes.',
  },
  {
    icon: 'ti-device-desktop',
    title: `PC / Mac — Paramétrer ${BRAND}`,
    tags: ['Windows', 'macOS', 'Linux'],
    steps: [
      'Installez un lecteur multimédia libre',
      'Dans le lecteur, sélectionnez l’ouverture d’une adresse réseau',
      'Insérez l’adresse M3U reçue',
      'Bonne séance devant votre écran d’ordinateur !',
    ],
    tip: 'Sur ordinateur, un émulateur Android permet aussi d’utiliser notre lecteur maison et ses options.',
  },
  {
    icon: 'ti-box',
    title: `Box & Décodeurs — Paramétrer ${BRAND}`,
    tags: ['Box M3U', 'Décodeur Z8', 'Décodeur Z7', 'Box Android'],
    steps: [
      'Depuis la télécommande, affichez les réglages système',
      'Indiquez le lien serveur transmis lors de votre achat',
      'Laissez le menu se mettre à jour tout seul',
      'Les chaînes s’affichent, bon film !',
    ],
    tip: 'Pensés pour la télécommande, ces décodeurs rendent la navigation très agréable, et plusieurs intègrent un lecteur.',
  },
]

export const GUIDES_EXTRA = {
  featsTitle: 'Inclus dans chaque formule',
  feats: [
    { icon: 'ti-device-tv', label: '5200+ Chaînes' },
    { icon: 'ti-movie', label: '8000+ VOD' },
    { icon: 'ti-clock', label: 'Rattrapage 10 j' },
    { icon: 'ti-world', label: 'Multi-pays' },
    { icon: 'ti-devices', label: 'Multi-écrans' },
    { icon: 'ti-sparkles', label: '4K / FHD / HD' },
  ] as IconText[],
  apps: [
    { icon: 'ti-box', title: `${BRAND_UPPER} PLAY`, badge: '• Conseillé', text: `Lecteur officiel ${BRAND} - Sans frais` },
    { icon: 'ti-bolt', title: 'Lecteur Xtream', badge: '• Apprécié', text: `Lit vos codes ${BRAND} sans réglage` },
    { icon: 'ti-brand-apple', title: 'Lecteur M3U', badge: '• iOS/tvOS', text: 'Pensé pour iPhone, iPad et box Apple TV' },
  ] as Card[],
  helpTitle: 'Un Souci Pendant la Configuration ?',
  helpText: 'Nos conseillers vous répondent chaque jour, week-end compris.',
  helpCta: 'Contacter le Support →',
}

export const WHY = {
  eyebrow: BRAND_UPPER,
  titleStart: 'Ce Qui ',
  titleBlue: 'Nous Distingue',
  titleEnd: ' !',
  text: 'Des milliers de foyers nous confient leurs soirées télé, découvrez pourquoi ils restent fidèles.',
  cards: [
    { icon: 'ti-crown', title: 'Un service plébiscité', text: 'Nos abonnés saluent la grande simplicité de l’offre et la régularité des flux, soir après soir, depuis le premier jour.' },
    { icon: 'ti-device-mobile', title: 'Compatible partout', text: 'Téléviseur connecté, ordinateur, tablette, smartphone, boîtier Android, clé HDMI, lecteurs M3U et bien d’autres.' },
    { icon: 'ti-sparkles', title: 'Image au top', text: 'Du 480p au 4K en passant par le 720p et le 1080p, le flux suit automatiquement votre débit Internet.' },
    { icon: 'ti-world', title: `Relais ${BRAND_UPPER}`, text: 'Un réseau de relais répartis dans plusieurs pays, choisis selon votre position.' },
    { icon: 'ti-bolt', title: 'Zapping éclair', text: 'Passez d’une chaîne à l’autre en moins d’une seconde, sans écran noir.' },
    { icon: 'ti-lifebuoy', title: 'Aide 7j/7', text: 'Un conseiller vous accompagne à chaque étape, du paiement au réglage.' },
  ] as Card[],
}

export const REVIEWS = {
  eyebrow: 'Témoignages',
  titleStart: 'L’Avis de Ceux Qui Regardent ',
  titleBlue: BRAND,
  text: 'Des retours de spectateurs qui utilisent notre service chaque semaine depuis des années.',
  stats: [
    { value: '4.8/5', label: 'Note Globale' },
    { value: '40K+', label: 'Abonnés Fidélisés' },
    { value: '98%', label: 'Recommandent' },
  ],
  items: [
    {
      quote: `« Depuis que nous avons ${BRAND}, les soirées en famille ont vraiment changé. Une offre honnête et complète ! »`,
      initials: 'LM',
      name: 'Lucas M.',
      meta: 'Lyon, France · Février 2026',
      tag: 'Ciné',
    },
    {
      quote: `« Installée à l’étranger, je retrouve grâce à ${BRAND} mes émissions préférées. Une image parfaite ! »`,
      initials: 'SB',
      name: 'Sophie B.',
      meta: 'Québec, Canada · Novembre 2025',
      tag: 'International',
    },
    {
      quote: '« J’ai essayé plusieurs offres avant celle-ci : aucune coupure, un choix énorme, je recommande. »',
      initials: 'KD',
      name: 'Karim D.',
      meta: 'Namur, Belgique · Décembre 2025',
      tag: 'Fiabilité',
    },
  ],
  cats: [
    { icon: 'ti-sparkles', label: 'Image 4K' },
    { icon: 'ti-bolt', label: 'Zapping Express' },
    { icon: 'ti-world', label: 'En Voyage' },
    { icon: 'ti-coin-euro', label: 'Tarif Très Doux' },
    { icon: 'ti-movie', label: 'Films à Volonté' },
    { icon: 'ti-lifebuoy', label: 'Aide Très Rapide' },
    { icon: 'ti-devices', label: 'Tous Les Écrans' },
    { icon: 'ti-clock', label: 'Rattrapage' },
  ] as IconText[],
}

export const FAQ_HEAD = {
  eyebrow: `Aide ${BRAND_UPPER}`,
  titleStart: 'Vos Questions Fréquentes – ',
  titleBlue: BRAND_UPPER,
  text: `Tout ce qu’il faut savoir avant, pendant et après la commande de votre formule ${BRAND} Premium.`,
}

export const FAQ: { q: string; a: string }[] = [
  {
    q: `Comment commander une formule ${BRAND} en ligne ?`,
    a: 'Sélectionnez une durée dans la grille tarifaire, ajoutez-la au panier puis réglez en ligne par carte ou par virement. Vos codes arrivent ensuite par e-mail, avec un mode d’emploi.',
  },
  {
    q: 'Dans quel délai mes identifiants me sont-ils envoyés ?',
    a: 'Comptez en général une vingtaine de minutes, et jamais plus de quelques heures en période chargée. Un horodatage visible dans votre compte client confirme le moment exact où vos codes sont partis.',
  },
  {
    q: 'Le message de confirmation n’est pas arrivé, que dois-je faire ?',
    a: 'Les envois manuels ont lieu de 08:30 à 21:30 ; une commande passée la nuit est donc traitée le lendemain matin. Jetez un œil à votre dossier de courriers indésirables et à votre compte client. Toujours rien ? Un message sur notre messagerie suffit : un conseiller retrouvera votre commande en quelques minutes.',
  },
  {
    q: `Mes codes ${BRAND} marchent-ils aussi avec des logiciels IPTV tiers ?`,
    a: 'Oui. Chaque commande s’accompagne d’un lien de liste M3U et de codes Xtream, deux formats lus par la quasi-totalité des logiciels IPTV. Pour profiter du guide des programmes et du rattrapage sans réglage, notre lecteur maison reste toutefois le plus pratique.',
  },
  {
    q: 'Plus aucune chaîne ne se lance sur mon appareil, que faire ?',
    a: 'Commencez par redémarrer votre appareil et votre box Internet. Si l’écran reste noir, rendez-vous dans votre compte client, rubrique « Mes accès », et générez un nouveau jeu d’identifiants en quelques secondes ; notre équipe reste joignable si le souci persiste malgré tout après cette manipulation.',
  },
  {
    q: `Que faire quand mon abonnement ${BRAND} expire ?`,
    a: 'Ouvrez la page de renouvellement accessible depuis le menu principal. Indiquez le type d’appareil, cochez l’option de prolongation, ajoutez votre identifiant actuel, validez le panier puis réglez votre commande : la durée achetée s’ajoute simplement à celle qui reste.',
  },
  {
    q: `Où trouver le fichier d’installation du lecteur ${BRAND_UPPER} ?`,
    a: 'Le fichier d’installation se trouve sur notre page de téléchargement, accompagné d’un pas-à-pas détaillé pour chaque type d’appareil.',
  },
  {
    q: 'Mes chaînes restent-elles disponibles lors d’un séjour hors de France ?',
    a: 'Absolument : en voyage comme à la maison, il suffit d’un accès Internet stable pour retrouver vos chaînes.',
  },
  {
    q: 'Est-il possible de regarder sur plusieurs écrans de la maison ?',
    a: 'L’installation est possible sur autant d’appareils que souhaité ; en revanche, un seul flux peut être lu à la fois. Gardez vos codes pour vous.',
  },
  {
    q: 'Faut-il une parabole ou une antenne pour profiter du service ?',
    a: 'Pas du tout ! Tout passe par votre box Internet, sans aucun équipement sur le toit ni décodeur satellite. Prévoyez simplement un débit d’au moins 5 Mbps pour une lecture fluide.',
  },
  {
    q: 'Mon téléviseur est ancien, existe-t-il une solution ?',
    a: 'Un petit boîtier Android branché sur le port HDMI suffit pour rendre votre ancien écran compatible. Sur simple demande, notre équipe vous suggère un modèle abordable et vraiment très simple à configurer au quotidien.',
  },
  {
    q: 'Existe-t-il d’autres logiciels de lecture que vous appréciez ?',
    a: 'Différents logiciels du marché donnent de très bons résultats avec nos flux ; notre comparatif en ligne détaille leurs atouts comme leurs limites respectives.',
  },
  {
    q: 'Mon téléviseur connecté est-il compatible avec vos codes ?',
    a: 'La liste des lecteurs compatibles avec chaque marque de téléviseur figure dans notre tutoriel dédié.',
  },
  {
    q: 'Une clé HDMI de streaming suffit-elle pour regarder ?',
    a: 'Tout à fait. Ces petites clés font tourner nos flux sans difficulté, et un tutoriel illustré vous accompagne.',
  },
  {
    q: 'Boîtier Android ou clé HDMI : quel équipement privilégier ?',
    a: 'Notre préférence va au boîtier Android standard, plus ouvert : le choix de lecteurs y est bien plus vaste et leur mise en place se fait en un clin d’œil.',
  },
  {
    q: 'Le lecteur refuse ma connexion et affiche un message « accès expiré »',
    a: 'Ce message signale des codes périmés : demandez-en de nouveaux dans votre compte, puis mettez à jour le lecteur.',
  },
  {
    q: 'Existe-t-il un essai gratuit avant de passer commande ?',
    a: `Oui, un accès test gratuit permet de découvrir le service ; il se lance depuis le lecteur ${BRAND} PLAY.`,
  },
  {
    q: 'Une version d’essai plus longue est-elle envisageable ?',
    a: 'Tout à fait : une formule découverte de courte durée existe aussi, à commander en ligne en quelques clics.',
  },
  {
    q: 'Quels bouquets sont inclus ?',
    a: 'Vous trouverez des grilles généralistes et thématiques de nombreuses régions : francophonie, Europe, Amérique du Nord, Afrique, ainsi que du sport, de l’info, du cinéma et des dessins animés.',
  },
  {
    q: 'Un message de fin de licence bloque mon lecteur externe',
    a: 'Plusieurs lecteurs du marché fonctionnent sur abonnement : une fois la période offerte écoulée, leur éditeur exige un règlement. Notre propre lecteur n’entraîne aucun frais et s’installe en quelques minutes sur tout appareil Android.',
  },
  {
    q: 'Un lecteur tiers bloque l’accès aux films et séries tant que je ne paie pas',
    a: 'Cette option est vendue par l’éditeur du lecteur, pas par nous. Notre lecteur maison donne accès au catalogue complet sans supplément.',
  },
  {
    q: 'Mon logiciel de lecture réclame un renouvellement de sa licence',
    a: `La licence de ce logiciel dépend uniquement de son éditeur. Pour ne plus vous en soucier, basculez vers le lecteur ${BRAND} PLAY, offert à tous nos abonnés Android.`,
  },
  {
    q: `Comment obtenir le lecteur ${BRAND_UPPER} PLAY ?`,
    a: 'Rendez-vous dans la rubrique Télécharger du menu : le fichier pour Android y est proposé en accès libre.',
  },
]

export const STICKY = {
  oldPrice: '108€',
  price: '59€',
  label: 'Accès 12 mois · −45%',
  whatsapp: 'WhatsApp',
  cta: 'Abonner',
}
