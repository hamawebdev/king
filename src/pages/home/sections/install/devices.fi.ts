import type { Device } from './devices'

// Non-breaking space (U+00A0) before the hyphen of Finnish compounds built on a multi-word name, e.g. King 365 TV-sovellus.
// Fire TV has no Finnish interface: its menu paths are given in English, as the device shows them.

const PAID = 'MAKSULLINEN SOVELLUS · n. 8 € / vuosi · 7 päivän ilmainen kokeilu'
const PAID_WIN = 'MAKSULLINEN SOVELLUS (n. 8 € / vuosi · 7 päivän ilmainen kokeilu)'
const CODE = 'Downloader-koodi'

export const DEVICES_FI: Device[] = [
  {
    id: 'smart-tv',
    emoji: '📺',
    name: 'Smart TV',
    detail: 'Samsung, LG, Sony, Philips...',
    guideTitle: 'Smart TV',
    guideDetail: 'Samsung Tizen, LG webOS, Sony, Philips',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '⚠️',
        title: 'Tärkeä varoitus: Smarters Pro',
        paragraphs: [
          'Älä käytä IPTV Smarters Prota tai Smarters Playeria Smart TV:ssä: Smart TV -versiota ei ole enää optimoitu Samsungille ja LG:lle. Se aiheuttaa toistuvia katkoja, epävakautta ja toiston jumiutumista, jotka eivät johdu palvelustamme. Käytä jotakin alla suositelluista sovelluksista (tai IPTV Stream Playeria, jos etsit ilmaista vaihtoehtoa).',
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: 'Miksi valita maksullinen soitin Smart TV:hen?',
        paragraphs: [
          'IBO Player Prossa, IBO Player Smarterissa, Bob Playerissa ja Hot Playerissa on kussakin 7 päivän ilmainen kokeilu. Ne tarjoavat erinomaisen vakaan 4K-kuvan, lataavat EPG-oppaan heti ja antavat jatkaa elokuvia ja sarjoja täsmälleen siitä sekunnista, mihin jäit. Kokeilun päätyttyä tiimimme voi aktivoida virallisen lisenssisi (n. 8 € / vuosi) suoraan WhatsAppin kautta.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Huomio Android TV:stä',
        paragraphs: [
          'Onko sinulla Android TV tai Google TV (Sony, TCL, Xiaomi, Philips)? Asenna ilmainen Downloader-sovellus Google Playsta ja asenna sitten viralliset King 365 TV -sovelluksemme (V2, V3 tai V4) ilmaiseksi Android / Firestick -ohjeen mukaan.',
        ],
      },
      {
        type: 'apps',
        title: 'Suositellut sovellukset',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Asenna Samsung Appsista / LG Content Storesta → Kirjoita muistiin *Device ID (MAC)* ja *Device Key* → Lähetä niistä kuva WhatsAppiin ([wa.me/33751299176](wa:iboDevice)), niin lisäämme tilauksesi suoraan ja aktivoimme sen.',
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Moderni ja erittäin vakaa käyttöliittymä, VOD-toiston jatkaminen ja täydellinen EPG.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Salamannopea kanavanvaihto ja sujuva kanavapakettien hallinta.',
          },
          {
            name: 'Hot Player / Hot IPTV',
            badge: PAID,
            badgeTone: 'paid',
          },
        ],
      },
    ],
  },
  {
    id: 'firestick',
    emoji: '🔥',
    name: 'Amazon Firestick',
    detail: 'Fire TV Stick 4K / Max / Lite / Cube',
    guideTitle: 'Amazon Firestick',
    guideDetail: 'Fire TV Stick 4K, Max, Lite, Cube',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '🚨',
        title: 'VIRALLINEN VAROITUS: VEGA OS',
        subtitle: 'VAROITUS 2. SUKUPOLVEN AMAZON FIRE TV STICK HD -LAITTEESTA:',
        paragraphs: [
          'Suosittelemme vahvasti, ettei asiakkaamme hanki Amazon Fire TV Stick HD:tä (2. sukupolvi). Tämä uusi malli toimii suljetulla **Vega OS** -järjestelmällä, toisin kuin aiemmat versiot, jotka käyttivät ulkoisten sovellusten kanssa yhteensopivaa Android / Fire OS -järjestelmää:',
        ],
        items: [
          '❌ **Downloader**-sovellus ei ole saatavilla, toisin kuin aiemmissa malleissa.',
          '❌ Ulkoisten sovellusten ja APK-tiedostojen asentamista on rajoitettu voimakkaasti.',
          '❌ Siksi tämä malli ei ole yhteensopiva palvelumme kanssa.',
          '✅ Sovelluksiamme varten suosittelemme Android-laitetta (Xiaomi, Mecool) tai Fire TV Stick 4K / 4K Max / Lite / Cube -mallia, joka tukee Downloaderia ja APK-asennusta.',
        ],
      },
      {
        type: 'steps',
        title: 'Asennus Downloaderilla neljässä vaiheessa',
        steps: [
          '**Asenna Downloader:** Siirry Fire TV:n aloitusnäytössä hakuun (Search), kirjoita *”Downloader”* ja asenna se ilmaiseksi.',
          '**Ota kehittäjäasetukset käyttöön:** Siirry kohtaan `Settings > My Fire TV > About` ja napsauta Fire TV Stickin nimeä **7 kertaa nopeasti**.',
          '**Salli tuntemattomat lähteet:** Ota kohdassa `Developer Options > Install unknown apps` lupa käyttöön **Downloaderille (ON)**.',
          '**Syötä Downloader-koodi:** Avaa Downloader, kirjoita haluamasi sovelluksen koodi (alla) ja napsauta **Go**.',
        ],
      },
      {
        type: 'apps',
        title: 'Sovellukset ja Downloader-koodit Firestickille',
        apps: [
          {
            name: 'King 365 TV — Versio 2 (V2)',
            mark: 'V2',
            badge: 'VIRALLINEN · ILMAINEN',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '756917' }],
            text: 'Kirjautuminen käyttäjätunnuksella ja salasanalla.',
          },
          {
            name: 'King 365 TV — Versio 3 (V3)',
            mark: 'V3',
            badge: 'VIRALLINEN · ILMAINEN',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '283367' }],
            text: 'Kirjautuminen käyttäjätunnuksella ja salasanalla.',
          },
          {
            name: 'King 365 TV — Versio 4 (V4 - 2026-versio)',
            mark: 'V4',
            badge: 'TV-NÄYTÖILLE · ILMAINEN',
            badgeTone: 'special',
            codes: [{ label: CODE, code: '2763945' }],
            text: 'Vain TV-näytöille ja bokseille. Syötä **Playlist Name** (vapaavalintainen nimi) + **käyttäjätunnus** + **salasana**.',
          },
          {
            name: 'Maksulliset soittimet',
            badge: 'n. 8 € / vuosi · 7 päivän ilmainen kokeilu',
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'King365TV-sovellukset – vanhentuneet koodit, vältä ehdottomasti (poista asennus)',
            danger: true,
            obsolete: [
              { label: 'V4 OLD', code: '8872559' },
              { label: 'V3 OLD', code: '702186' },
              { label: 'V2 OLD', code: '5638769' },
              { label: '2.2 OLD', code: '671387' },
              { label: '2.2.2 OLD', code: '6783194' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'android',
    emoji: '🤖',
    name: 'Android',
    detail: 'Puhelin, tabletti, Google TV, Xiaomi / Mecool TV Box',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Xiaomi / Mecool Box, älypuhelimet ja tabletit',
    blocks: [
      {
        type: 'apps',
        title: 'Asennus Downloaderilla (TV ja Box) tai suoraan APK-tiedostona',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: CODE, code: '223650' }],
            text: 'Toimii TV:ssä, Boxissa, älypuhelimissa ja tableteissa.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: CODE, code: '333650' }],
            text: 'Toimii TV:ssä, Boxissa, älypuhelimissa ja tableteissa.',
          },
          {
            name: 'King 365 TV V4 (2026-versio)',
            mark: 'V4',
            codes: [{ label: CODE, code: '443650' }],
            text: '**Vain uusille Google TV -laitteille, uusille Android-televisioille ja Android TV Boxeille** *(ei toimi puhelimissa)*. Syötä *Playlist Name + käyttäjätunnus + salasana*.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Huomio: varasovellus King 365:lle',
        paragraphs: [
          'Suosittelemme asentamaan tai säilyttämään kaikki 3 versiota (V2, V3, V4), jotta sinulla on aina varasovellus valmiina, jos jokin niistä on huoltokatkolla.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Huomio: Xtream / M3U ja tuki',
        paragraphs: [
          'Jos käytät mieluummin omaa soitintasi (TiviMate, IBO Player, Bob Player...), toimitamme täydet tunnukset **Xtream Codes**- tai **M3U**-muodossa, tai määritämme sovelluksen etäyhteydellä WhatsAppin kautta ([+33 7 51 29 91 76](wa:help)).',
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS ja tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS ja tvOS',
    blocks: [
      {
        type: 'apps',
        title: 'Lataa suoraan **virallisesta App Storesta** (ei VLC:tä, ei Smarters Prota iPhonessa)',
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'MAKSULLINEN SOVELLUS · n. 8 € / vuosi · ilmainen kokeilu sisältyy', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'Windows-tietokone',
    detail: 'Microsoft Store',
    guideTitle: 'Windows-tietokone',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Asennus suoraan **Microsoft Storesta** (ei lainkaan VLC:tä eikä BlueStacksia)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Windows-versio)',
            badge: 'ILMAINEN',
            badgeTone: 'free',
            text: 'Päivitetty tietokoneversio, sujuva ja ilmainen, Xtream-tunnuksilla.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'MAKSULLINEN SOVELLUS (n. 8 € / vuosi · ilmainen kokeilu sisältyy)', badgeTone: 'paid' },
          { name: 'vormedia sat', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'ibo player smarter', badge: PAID_WIN, badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mac',
    emoji: '🖥️',
    name: 'Mac',
    detail: 'macOS',
    guideTitle: 'Mac',
    guideDetail: 'macOS',
    blocks: [
      {
        type: 'apps',
        title: 'Asennus MacBookiin ja iMaciin (ilman VLC:tä)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'ILMAINEN', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'MAKSULLINEN SOVELLUS · n. 8 € / vuosi', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mag',
    emoji: '📟',
    name: 'MAG Box',
    detail: 'Infomir 254 / 256 / 322 / 520...',
    guideTitle: 'MAG Box',
    guideDetail: 'Infomir 254 / 256 / 322 / 520...',
    blocks: [
      {
        type: 'steps',
        title: 'Nopea määritys **MAC-osoitteella**',
        steps: [
          '**Lähetä MAC-osoite:** Katso osoite boksin takaa (`00:1A:79:XX:XX:XX`) ja lähetä se meille WhatsAppiin ([wa.me/33751299176](wa:magAddress)).',
          '**Vastaanota portaali:** Lähetämme sinulle aktivoidun `Portal URL` -linkin.',
          '**Asetukset:** Siirry kohtaan `Settings > System Settings > Servers > Portals`.',
          '**Syötä tiedot:** Kirjoita nimi kenttään `Portal 1 Name` ja liitä URL-osoite kenttään `Portal 1 URL`.',
          '**Tallenna:** Tallenna painamalla OK ja käynnistä boksi uudelleen.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'Tehokas Android TV',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Toimii Android TV:llä, jossa on sisäänrakennettu Google Play Store',
        steps: [
          'Asenna **Downloader** ilmaiseksi Google Play Storesta.',
          'Salli Downloader kohdassa `Asetukset > Laitteen asetukset > Tietoturva ja rajoitukset`.',
          'Syötä Downloader-koodi: **King 365 TV V3 (333650)**, **King 365 TV V4 (443650)** tai **IBO Player Pro (481220)**.',
        ],
      },
      {
        type: 'codes',
        codes: [
          { label: 'King 365 TV V3', code: '333650' },
          { label: 'King 365 TV V4', code: '443650' },
          { label: 'IBO Player Pro', code: '481220' },
        ],
      },
    ],
  },
  {
    id: 'formuler',
    emoji: '📡',
    name: 'Formuler / Dreamlink',
    detail: 'MyTVOnline 2 & 3 -sovellus',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 & MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Tärkeää',
        paragraphs: ['Käytä Formulerissa **Xtream-tunnuksia** (portaalin URL + käyttäjätunnus + salasana), **älä MAC-osoitetta**:'],
      },
      {
        type: 'steps',
        steps: [
          '**Avaa MyTVOnline:** Käynnistä *MyTVOnline 2* tai *MyTVOnline 3* (tai Dreamlinkissä *DOL2*).',
          '**Lisää portaali:** Siirry kohtaan `Valikko > Yhteydet > Lisää portaali (Add Portal)`.',
          '**Nimeä portaali:** Kirjoita haluamasi nimi (esim. *NovaStream*).',
          '**Ota kirjautuminen käyttöön:** Kytke asetus `Kirjautuminen vaaditaan (Login Required)` tilaan **ON**.',
          '**Syötä tunnukset:** Kirjoita saamasi portaalin URL, käyttäjätunnus ja salasana.',
          '**Yhdistä:** Paina **Connect**, niin kanavat ja VOD latautuvat heti.',
        ],
      },
    ],
  },
]
