import type { ActivationCopy } from './Activation.data'

// Finnish compounds after a name (King 365 TV -sovellus) use \u00a0 before the hyphen so they never break.
export const fi: ActivationCopy = {
  head: {
    badge: 'LÄPINÄKYVÄ ASIAKASPOLKU · OPASTETTU AKTIVOINTI',
    title: 'Näin aktivoit King 365 TV -käyttöoikeutesi 4 vaiheessa',
    subtitle:
      'Sujuva, luottamuksellinen ja alusta loppuun tuettu prosessi. Asiakasneuvojamme opastavat sinua vaihe vaiheelta paketin valinnasta ensimmäiseen katselukertaan.',
  },
  stepLabel: 'Vaihe',
  steps: [
    {
      num: '01',
      title: 'Valitse kesto',
      chip: { emoji: '⏱️', label: '1 minuutti' },
      text: 'Valitse tarpeisiisi sopiva jakso: 6 kuukautta, 12 kuukautta (suositus: Pack Signature) tai 24 kuukautta. Selkeä hinnoittelu, joka edullistuu jakson pidentyessä – ei piilotettuja sitoumuksia.',
    },
    {
      num: '02',
      title: 'PayPal ja SEPA-siirto',
      chip: { emoji: '🔒', label: 'Täysi suoja' },
      text: 'Maksa käyttöoikeutesi huoletta – korttitietoja ei tarvitse syöttää sivustolle. Suojatut maksut PayPalilla (ostajansuojalla) tai SEPA-pikasiirtona.',
    },
    {
      num: '03',
      title: 'Xtream- ja M3U-tunnukset heti',
      chip: { emoji: '⚡', label: 'Suora toimitus' },
      text: 'Saat täydelliset tunnuksesi heti WhatsAppiin ja sähköpostiin: Xtream API -koodit (käyttäjätunnus, salasana, palvelimen URL) sekä optimoidun M3U-linkin, joka käyttää omaa DNS:ää operaattoriestoja vastaan.',
    },
    {
      num: '04',
      title: 'Asennus ja 4K-kanavasurffailu',
      chip: { emoji: '🚀', label: 'Heti käyttöön' },
      text: 'Syötä tunnuksesi viralliseen King 365 TV -sovellukseen tai suosikkimediasoittimeesi. Seuraa yksityiskohtaista opastamme tai anna tukemme määrittää näyttösi etänä.',
    },
  ],
  reassuranceTitle: 'Avoin ekosysteemi ja sitoumuksemme',
  pillars: [
    {
      icon: 'players',
      title: 'Toimii myös muissa soittimissa',
      text: 'Toimii virallisissa sovelluksissa (V2, V3, V4) sekä suosituimmissa maksullisissa ja ilmaisissa kolmannen osapuolen soittimissa (IBO Player, TiviMate, IPTV Smarters Pro, Bob Player, Hot Player, SmartOne...).',
    },
    {
      icon: 'screens',
      title: 'Monta näyttöä ja joustavuutta',
      text: 'Käytettävissä Smart TV:ssä (Samsung Tizen, LG webOS, Sony, TCL), Android TV:ssä, Fire TV Stickissä, Apple TV:ssä, iOS:ssä, Androidissa ja PC:llä. (Yksi aktiivinen näyttö kerrallaan koodia kohden – tai useita erillisiä tilauksia, jos haluat katsoa usealla näytöllä samanaikaisesti.)',
    },
    {
      icon: 'whatsapp',
      title: 'Oma WhatsApp-linja, henkilökohtainen palvelu',
      text: 'Suora etuoikeutettu yhteys ranskankieliseen tekniseen asiakasneuvojaan 24/7 WhatsAppissa ({phone}) – apua kaikkeen.',
    },
    {
      icon: 'tutorials',
      title: 'Valmiit vaiheittaiset oppaat',
      text: 'Kuvitetut oppaat toimitetaan tilauksen yhteydessä, joten soittimesi on asennettu ja määritetty alle 3 minuutissa.',
    },
    {
      icon: 'updates',
      title: 'Jatkuvat päivitykset',
      text: 'Suorat lähetykset päivittyvät automaattisesti joka päivä, ja uusimpia VOD-julkaisuja lisätään jatkuvasti koko tilauksesi ajan.',
    },
    {
      icon: 'guarantee',
      title: 'Takuu ja tuki koko tilauksen ajan',
      text: 'Täysi jatkuvuustakuu ja ennakoiva tekninen seuranta koko tilauksesi ajan – tarvittaessa koodi vaihdetaan tai palautetaan maksutta.',
    },
  ],
  pricingHead: {
    badge: 'VIRALLISET HINNAT · VALTUUTETTU KING 365 TV -JÄLLEENMYYJÄ',
    title: 'Valitse virallinen King 365 TV -tilauksesi',
    subtitle:
      'Halusitpa aktivoida uuden King 365 -tilauksen tai uusia nykyisen King 365 -tilauksesi, nautit tehokkaasta ja katkeamattomasta lähetyksestä ilman piilotettuja sitoumuksia.',
  },
  includedHead: {
    badge: 'KAIKISSA NOVASTREAM-PAKETEISSA',
    title: 'Kaikki, mitä King 365 TV -tilauksesi sisältää NovaStreamilla',
  },
  includedMetrics: [
    { value: '+5 700', label: 'Suoraa ohjelmaa ja kanavaa' },
    { value: '+16 000', label: 'Tilattavaa VOD-nimikettä (elokuvat ja sarjat)' },
    { value: '4K HDR', label: 'Kuvanlaatu jopa 4K UHD (50/60 FPS)' },
    { value: '7–15 pv', label: 'Jälkikatselu (Replay) & Timeshift mukana' },
  ],
  supportedDevices: [
    { emoji: '📺', label: 'Smart TV (Samsung & LG)' },
    { emoji: '🔥', label: 'Fire TV Stick' },
    { emoji: '🤖', label: 'Google TV ja Android-boksi' },
    { emoji: '🍎', label: 'Apple TV' },
    { emoji: '📱', label: 'iPhone ja iPad' },
    { emoji: '💻', label: 'Windows-PC ja Mac' },
    { emoji: '📡', label: 'Formuler (MyTVOnline)' },
    { emoji: '📟', label: 'MAG Box' },
    { emoji: '⚡', label: 'Xtream API -soitin' },
    { emoji: '🔗', label: 'M3U-soittolista' },
  ],
  protocols: [
    {
      num: '1',
      title: 'King 365 TV -sovellukset NovaStreamin kautta',
      tag: 'Suositeltu · Maksuton',
      text: 'Suora käyttö Androidilla, Google TV:llä, boksilla ja Firestickillä versioilla V2, V3 ja V4 NovaStreamin aktivoimilla tunnuksilla.',
    },
    {
      num: '2',
      title: 'NovaStream Xtream API -soitin',
      tag: 'Suosittu · Ei monimutkaisia asetuksia',
      text: 'Nopea yhteys NovaStreamin toimittamalla käyttäjätunnuksella, salasanalla ja palvelimen URL-osoitteella sekä EPG-ohjelmaoppaan automaattisella synkronoinnilla.',
    },
    {
      num: '3',
      title: 'M3U-soittolista ja MAC-portaali',
      tag: 'iOS, tvOS ja Smart TV',
      text: 'NovaStream-tiimin suunnittelema IBO Playerille, IBO Player Smarterille, Bob Playerille ja Hot Playerille Samsungilla, LG:llä, iPhonella, iPadilla ja Apple TV:llä.',
    },
  ],
  packTableLabels: {
    formula: 'Paketti',
    durationPrice: 'Kesto / Hinta',
    inclusions: 'Sisältää',
    whatsapp: 'Suora WhatsApp-linkki',
  },
  packRecommended: 'Suositeltu',
  packCta: 'Aktivoi WhatsAppissa',
  paymentNote: 'Suojatut maksut PayPalilla (ostajansuojalla) tai SEPA-pikasiirtona.',
}
