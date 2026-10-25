import type { InstallCopy } from './content'

export const fi: InstallCopy = {
  guarantees: [
    {
      emoji: '🔄',
      title: 'Helppo uusiminen',
      text: 'Jatka käyttöoikeuttasi yhdellä klikkauksella WhatsAppissa – sovelluksia ei tarvitse asentaa uudelleen, eivätkä suosikkisi katoa.',
    },
    {
      emoji: '⚡',
      title: 'Nopea aktivointi',
      text: 'Xtream-tunnukset ja M3U-linkki lähetetään heti WhatsAppiin ja sähköpostiin, kun tilauksesi on vahvistettu.',
    },
    {
      emoji: '🛡️',
      title: 'Takuu ja jatkuva tuki (Tyytyväinen tai hyvitetty)',
      text: 'Henkilökohtaista tukea ja täysi jatkuvuustakuu koko tilauksesi ajan.',
    },
  ],

  head: {
    eyebrow: '✨ KUVITETUT OPPAAT 2026 · VALTUUTETTU JÄLLEENMYYJÄ',
    title: 'King 365 TV:n asennus 2026: interaktiiviset vaiheittaiset oppaat',
    subtitle:
      'Valitse laite, jolla haluat katsoa ohjelmiasi, ja seuraa yksinkertaisia vaiheita. Useimmat tilaajamme pääsevät katsomaan alle 5 minuutissa.',
  },

  kpis: [
    { value: '< 5 min', label: 'Nopea asennus' },
    { value: '100 %', label: 'Toimii kaikilla näytöillä' },
    { value: '7/7 · 24/7', label: 'Tekninen tuki sisältyy' },
  ],

  aside: {
    title: 'NovaStreamin asennusoppaat',
    indicators: [
      { value: '< 5 min', label: 'Nopea asennus' },
      { value: '100 %', label: 'Toimii kaikilla näytöillä' },
      { value: '7/7', label: 'Tekninen tuki sisältyy' },
    ],
    helpTitle: 'Ongelmia asennuksessa?',
    helpText: 'NovaStreamin asiakasneuvojat vastaavat sinulle WhatsAppissa 7 päivää viikossa',
    tutorial: '📖 Katso NovaStreamin yksityiskohtainen vaiheittainen opas (kuvakaappauksin)',
    changeDevice: 'Vaihda laitetta',
  },

  hub: {
    chooseDevice: 'Valitse laitteesi',
    deviceKicker: (n) => `Laite ${n}`,
    stepPrefix: (n) => `Vaihe ${n}: `,
    copy: 'Kopioi',
    copied: 'Kopioitu',
    copyAria: (code, label) => `Kopioi koodi ${code} (${label})`,
    copiedAnnounce: (code) => `Koodi ${code} kopioitu`,
  },

  faqTitle: 'Usein kysytyt kysymykset',
  faqAnswer: 'Vastaus:',
  faq: [
    {
      q: 'Syötin tunnukseni, mutta sovellus näyttää virheen. Mitä teen?',
      a: 'Tarkista ensin **palvelimen osoite (Server URL)**: sen on ehdottomasti alettava `http://` **– ei** `https://`. Tämä yksi kirjain on yleisin virheen syy. Varmista myös, ettei kopioidessa ja liittäessä ole tullut ylimääräistä välilyöntiä. **Etkö vieläkään pääse eteenpäin?** Lähetä meille viesti WhatsAppissa ([+33 7 51 29 91 76](wa:help)): tiimimme tarkistaa tunnuksesi ja määrittää tilauksen puolestasi etäyhteydellä.',
    },
    {
      q: 'Millainen internetyhteys tarvitaan sujuvaan katseluun?',
      a: '**10–20 Mbps:n** yhteys on vähimmäisvaatimus sujuvalle Full HD -suoratoistolle. Suosittelemme nopeampaa yhteyttä (**30 Mbps tai enemmän**), jos haluat nauttia lähetyksistä täysin **aidossa 4K HDR -laadussa 60 FPS:llä** tai jos kotonasi useampi henkilö käyttää samaa internetyhteyttä samanaikaisesti.',
    },
    {
      q: 'Tarvitsenko VPN:n tilaukseni kanssa?',
      a: '**Se ei ole pakollista** – pakettimme (erityisesti Pack Signature) sisältävät **oman DNS:n**, joka kiertää automaattisesti internet-operaattoreiden estot. Jos käytät silti VPN:ää, **valitse aina palvelin omasta maastasi**: näin saat parhaan nopeuden ja pienimmän viiveen (älä yhdistä kaukaiseen maahan).',
    },
    {
      q: 'Miksi tarvitsen maksullisen soittimen joillakin laitteilla?',
      a: 'Maksulliset soittimet (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) hyödyntävät laitteistoa paljon paremmin. **Smart TV:ssä (Samsung / LG) tai Applen laitteissa** suosittelemme vahvasti maksullista sovellusta (n. 8 € / vuosi 7 päivän ilmaisen kokeilun jälkeen): se toimii paljon sujuvammin kuin ilmaiset sovellukset ja muistaa, mihin jäit elokuvissa ja sarjoissa. **Androidilla, Google TV:llä, TV Boxilla tai Firestickillä** taas viralliset **King 365 TV -sovelluksemme (V2, V3 ja V4)** toimivat erinomaisesti ja ovat **100 % ilmaisia**.',
    },
  ],

  helpBanner: {
    title: 'Jäikö jokin vaihe kesken? Määritämme laitteesi yhdessä kanssasi.',
    subtitle:
      'Lähetä viesti tukitiimillemme WhatsAppissa: opastamme sinua vaihe vaiheelta tai aktivoimme tilauksesi suoraan etäyhteydellä, olipa näyttösi mikä tahansa.',
    whatsappCta: '💬 Pyydä apua WhatsAppissa',
    plansCta: 'Tilaa paketti',
  },
}
