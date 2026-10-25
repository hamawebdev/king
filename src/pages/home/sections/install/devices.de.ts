import type { Device } from './devices'

const PAID = 'KOSTENPFLICHTIGE APP · ~8 € / Jahr · 7 Tage kostenlos testen'
const PAID_WIN = 'KOSTENPFLICHTIGE APP (~8 € / Jahr · 7 Tage kostenlos testen)'
const CODE = 'Downloader-Code'

export const DEVICES_DE: Device[] = [
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
        title: 'Wichtiger Hinweis zu Smarters Pro',
        paragraphs: [
          'Verwenden Sie IPTV Smarters Pro oder Smarters Player nicht auf einem Smart TV: Die Smart-TV-Version ist für Samsung und LG nicht mehr optimiert. Sie verursacht häufige Abbrüche, Instabilität und Wiedergabe-Hänger, die nichts mit unserem Dienst zu tun haben. Nutzen Sie eine der unten empfohlenen Apps (oder IPTV Stream Player, wenn Sie eine kostenlose Alternative suchen).',
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: 'Warum auf dem Smart TV kostenpflichtige Player bevorzugen?',
        paragraphs: [
          'IBO Player Pro, IBO Player Smarter, Bob Player und Hot Player bieten jeweils 7 Tage kostenlosen Test. Sie überzeugen mit vorbildlicher 4K-Stabilität, laden den EPG-Guide sofort und lassen Sie Filme und Serien genau an der Sekunde fortsetzen, an der Sie aufgehört haben. Nach Ablauf des Tests kann unser Team Ihre offizielle Lizenz (~8 € / Jahr) direkt über WhatsApp aktivieren.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Hinweis zu Android TV',
        paragraphs: [
          'Sie haben einen Android TV oder Google TV (Sony, TCL, Xiaomi, Philips)? Installieren Sie die kostenlose App Downloader aus Google Play und folgen Sie dann der Android-/Firestick-Methode, um unsere offiziellen King 365 TV Apps (V2, V3 oder V4) kostenlos zu installieren.',
        ],
      },
      {
        type: 'apps',
        title: 'Empfohlene Apps',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Über Samsung Apps / LG Content Store installieren → *Device ID (MAC)* und *Device Key* notieren → Als Foto per WhatsApp senden ([wa.me/33751299176](wa:iboDevice)), damit wir das Abonnement direkt einspielen und aktivieren.',
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Moderne, äußerst stabile Oberfläche mit VOD-Fortsetzung und vollständigem EPG.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Blitzschnelles Umschalten und flüssige Verwaltung der Senderpakete.',
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
        title: 'OFFIZIELLE WARNUNG ZU VEGA OS',
        subtitle: 'WARNUNG ZUM AMAZON FIRE TV STICK HD DER 2. GENERATION:',
        paragraphs: [
          'Wir raten unseren Kunden dringend davon ab, den Amazon Fire TV Stick HD (2. Generation) zu kaufen. Dieses neue Modell läuft mit dem geschlossenen System **Vega OS** – anders als die Vorgängerversionen, die ein mit externen Apps kompatibles Android / Fire OS nutzten:',
        ],
        items: [
          '❌ Die App **Downloader** ist – anders als bei früheren Modellen – nicht verfügbar.',
          '❌ Die Installation externer Apps oder APK-Dateien ist stark eingeschränkt.',
          '❌ Dieses Modell ist daher nicht mit unserem Dienst kompatibel.',
          '✅ Für unsere Apps empfehlen wir ein Gerät mit Android (Xiaomi, Mecool) oder einen Fire TV Stick 4K / 4K Max / Lite / Cube, der Downloader und die Installation von APKs unterstützt.',
        ],
      },
      {
        type: 'steps',
        title: 'Die 4 Installationsschritte mit Downloader',
        steps: [
          '**Downloader installieren:** Gehen Sie auf dem Fire TV Startbildschirm auf Suchen, geben Sie *„Downloader“* ein und installieren Sie die App kostenlos.',
          '**Entwickleroptionen aktivieren:** Öffnen Sie `Einstellungen > Mein Fire TV > Info` und klicken Sie **7-mal schnell hintereinander** auf den Namen des Fire TV Sticks.',
          '**Unbekannte Quellen zulassen:** Aktivieren Sie unter `Entwickleroptionen > Unbekannte Apps installieren` die Berechtigung für **Downloader (EIN)**.',
          '**Downloader-Code eingeben:** Öffnen Sie Downloader, geben Sie den Code der gewünschten App (siehe unten) ein und klicken Sie auf **Go**.',
        ],
      },
      {
        type: 'apps',
        title: 'Apps & Downloader-Codes für Firestick',
        apps: [
          {
            name: 'King 365 TV — Version 2 (V2)',
            mark: 'V2',
            badge: 'OFFIZIELL · KOSTENLOS',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '756917' }],
            text: 'Anmeldung mit Benutzername + Passwort.',
          },
          {
            name: 'King 365 TV — Version 3 (V3)',
            mark: 'V3',
            badge: 'OFFIZIELL · KOSTENLOS',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '283367' }],
            text: 'Anmeldung mit Benutzername + Passwort.',
          },
          {
            name: 'King 365 TV — Version 4 (V4 - Edition 2026)',
            mark: 'V4',
            badge: 'SPEZIELL FÜR TV-BILDSCHIRME · KOSTENLOS',
            badgeTone: 'special',
            codes: [{ label: CODE, code: '2763945' }],
            text: 'Ausschließlich für TV-Bildschirme und Boxen. **Playlist Name** (frei wählbar) + **Benutzername** + **Passwort** eingeben.',
          },
          {
            name: 'Kostenpflichtige Player',
            badge: '~8 € / Jahr · 7 Tage kostenlos testen',
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'King365TV Apps – veraltete Codes, unbedingt vermeiden (bitte deinstallieren)',
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
    detail: 'Smartphone, Tablet, Google TV, TV-Box Xiaomi / Mecool',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Box Xiaomi / Mecool, Smartphones & Tablets',
    blocks: [
      {
        type: 'apps',
        title: 'Installation über Downloader (TV & Box) oder direkt per APK',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: CODE, code: '223650' }],
            text: 'Kompatibel mit TV, Box, Smartphones und Tablets.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: CODE, code: '333650' }],
            text: 'Kompatibel mit TV, Box, Smartphones und Tablets.',
          },
          {
            name: 'King 365 TV V4 (Edition 2026)',
            mark: 'V4',
            codes: [{ label: CODE, code: '443650' }],
            text: '**Nur für aktuelle Google TV Geräte, aktuelle Android-Fernseher und Android TV-Boxen** *(nicht kompatibel mit Smartphones)*. *Playlist Name + Benutzername + Passwort* eingeben.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Hinweis: King 365 mehrfach absichern',
        paragraphs: [
          'Wir empfehlen, alle 3 Versionen (V2, V3, V4) zu installieren bzw. zu behalten, damit Sie immer eine Ersatz-App parat haben, falls eine davon gewartet wird.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Hinweis zu Xtream / M3U & Support',
        paragraphs: [
          'Wenn Sie lieber Ihren eigenen Player nutzen (TiviMate, IBO Player, Bob Player...), stellen wir Ihnen die vollständigen Zugangsdaten als **Xtream Codes** oder **M3U** bereit – oder wir richten die App per Fernzugriff über WhatsApp für Sie ein ([+33 7 51 29 91 76](wa:help)).',
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS & tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS & tvOS',
    blocks: [
      {
        type: 'apps',
        title: 'Direkter Download aus dem **offiziellen App Store** (kein VLC, kein Smarters Pro auf dem iPhone)',
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'KOSTENPFLICHTIGE APP · ~8 € / Jahr · Kostenloser Test inklusive', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'Windows-PC',
    detail: 'Microsoft Store',
    guideTitle: 'Windows-PC',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Direkte Installation aus dem **Microsoft Store** (ganz ohne VLC und BlueStacks)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Windows-Edition)',
            badge: 'KOSTENLOS',
            badgeTone: 'free',
            text: 'Aktualisierte Desktop-Version, flüssig und kostenlos, mit Xtream-Zugangsdaten.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'KOSTENPFLICHTIGE APP (~8 € / Jahr · Kostenloser Test inklusive)', badgeTone: 'paid' },
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
        title: 'Installation auf MacBook und iMac (ohne VLC)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'KOSTENLOS', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'KOSTENPFLICHTIGE APP · ~8 € / Jahr', badgeTone: 'paid' },
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
        title: 'Schnelle Einrichtung per **MAC-Adresse**',
        steps: [
          '**MAC-Adresse senden:** Lesen Sie die Adresse auf der Rückseite der Box ab (`00:1A:79:XX:XX:XX`) und senden Sie sie uns per WhatsApp ([wa.me/33751299176](wa:magAddress)).',
          '**Portal erhalten:** Wir senden Ihnen Ihren aktivierten `Portal URL`-Link.',
          '**Einstellungen:** Öffnen Sie `Settings > System Settings > Servers > Portals`.',
          '**Eingabe:** Tragen Sie einen Namen in `Portal 1 Name` ein und fügen Sie die URL in `Portal 1 URL` ein.',
          '**Speichern:** Drücken Sie OK, um zu speichern, und starten Sie die Box neu.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'Android TV mit Höchstleistung',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Läuft mit Android TV und integriertem Google Play Store',
        steps: [
          'Installieren Sie **Downloader** kostenlos aus dem Google Play Store.',
          'Erlauben Sie Downloader unter `Einstellungen > Geräteeinstellungen > Sicherheit & Einschränkungen`.',
          'Geben Sie den Downloader-Code von **King 365 TV V3 (333650)**, **King 365 TV V4 (443650)** oder **IBO Player Pro (481220)** ein.',
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
    detail: 'App MyTVOnline 2 & 3',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 & MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Wichtig',
        paragraphs: ['Verwenden Sie auf Formuler die **Xtream-Codes** (Portal-URL + Benutzername + Passwort) und **nicht die MAC-Adresse**:'],
      },
      {
        type: 'steps',
        steps: [
          '**MyTVOnline öffnen:** Starten Sie *MyTVOnline 2* oder *MyTVOnline 3* (bzw. *DOL2* auf Dreamlink).',
          '**Portal hinzufügen:** Öffnen Sie `Menü > Verbindungen > Portal hinzufügen (Add Portal)`.',
          '**Portal benennen:** Geben Sie einen beliebigen Namen ein (z. B. *NovaStream*).',
          '**Anmeldung aktivieren:** Stellen Sie die Option `Anmeldung erforderlich (Login Required)` auf **ON**.',
          '**Zugangsdaten eingeben:** Tragen Sie die erhaltene Portal-URL, den Benutzernamen und das Passwort ein.',
          '**Verbinden:** Drücken Sie auf **Connect**, um Sender und VOD sofort zu laden.',
        ],
      },
    ],
  },
]
