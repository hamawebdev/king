import type { InstallCopy } from './content'

export const de: InstallCopy = {
  guarantees: [
    {
      emoji: '🔄',
      title: 'Einfache Verlängerung',
      text: 'Verlängern Sie Ihren Zugang mit einem Klick auf WhatsApp – ohne Ihre Apps neu zu installieren oder Ihre Favoriten zu verlieren.',
    },
    {
      emoji: '⚡',
      title: 'Schnelle Aktivierung',
      text: 'Xtream-Zugangsdaten und M3U-Link werden sofort nach der Bestätigung per WhatsApp und E-Mail verschickt.',
    },
    {
      emoji: '🛡️',
      title: 'Garantie & laufende Betreuung (Zufrieden oder entschädigt)',
      text: 'Persönliche Betreuung und volle Verfügbarkeitsgarantie während Ihrer gesamten Abonnementlaufzeit.',
    },
  ],

  head: {
    eyebrow: '✨ VISUELLE ANLEITUNGEN 2026 · AUTORISIERTER VERTRIEBSPARTNER',
    title: 'King 365 TV Installation 2026: Interaktive Schritt-für-Schritt-Anleitungen',
    subtitle:
      'Wählen Sie das Gerät, auf dem Sie Ihre Programme sehen möchten, und folgen Sie dann den einfachen Schritten. Die meisten unserer Abonnenten sind in weniger als 5 Minuten startklar.',
  },

  kpis: [
    { value: '< 5 min', label: 'Schnelle Installation' },
    { value: '100 %', label: 'Kompatibel mit allen Bildschirmen' },
    { value: '7/7 · 24/7', label: 'Technischer Support inklusive' },
  ],

  aside: {
    title: 'NovaStream Einrichtungsanleitungen',
    indicators: [
      { value: '< 5 min', label: 'Schnelle Installation' },
      { value: '100 %', label: 'Kompatibel mit allen Bildschirmen' },
      { value: '7/7', label: 'Technischer Support inklusive' },
    ],
    helpTitle: 'Probleme bei der Einrichtung?',
    helpText: 'Unsere NovaStream Berater antworten Ihnen 7 Tage die Woche auf WhatsApp',
    tutorial: '📖 Ausführliche Schritt-für-Schritt-Anleitung von NovaStream ansehen (mit Screenshots)',
    changeDevice: 'Gerät wechseln',
  },

  hub: {
    chooseDevice: 'Wählen Sie Ihr Gerät',
    deviceKicker: (n) => `Gerät ${n}`,
    stepPrefix: (n) => `Schritt ${n}: `,
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyAria: (code, label) => `Code ${code} kopieren (${label})`,
    copiedAnnounce: (code) => `Code ${code} kopiert`,
  },

  faqTitle: 'Häufige Fragen',
  faqAnswer: 'Antwort:',
  faq: [
    {
      q: 'Ich habe meine Zugangsdaten eingegeben, aber die App zeigt einen Fehler an. Was tun?',
      a: 'Prüfen Sie zuerst den **Server-Link (Server URL)**: Er muss unbedingt mit `http://` beginnen **– nicht** mit `https://`. Dieser eine Buchstabe ist die häufigste Fehlerursache. Achten Sie außerdem darauf, dass sich beim Kopieren und Einfügen kein zusätzliches Leerzeichen eingeschlichen hat. **Immer noch nicht weiter?** Schreiben Sie uns auf WhatsApp ([+33 7 51 29 91 76](wa:help)): Unser Team prüft Ihren Zugang und richtet das Abonnement per Fernzugriff für Sie ein.',
    },
    {
      q: 'Welche Internetgeschwindigkeit brauche ich für ein flüssiges Streaming?',
      a: 'Eine Verbindung mit **10 bis 20 Mbit/s** ist das Minimum für flüssiges Streaming in Full HD. Wir empfehlen eine höhere Bandbreite (**30 Mbit/s und mehr**), wenn Sie Streams in **echtem 4K HDR mit 60 FPS** voll genießen möchten oder mehrere Personen im Haushalt gleichzeitig dieselbe Internetverbindung nutzen.',
    },
    {
      q: 'Brauche ich ein VPN für mein Abonnement?',
      a: '**Das ist nicht nötig** – unsere Pakete (insbesondere das Pack Signature) enthalten einen **dedizierten DNS**, der Sperren der Internetanbieter automatisch umgeht. Wenn Sie trotzdem ein VPN nutzen, **wählen Sie unbedingt einen Server in Ihrem eigenen Land**: So erhalten Sie die beste Geschwindigkeit und die geringste Latenz (verbinden Sie sich nicht mit einem weit entfernten Land).',
    },
    {
      q: 'Warum brauche ich auf manchen Geräten einen kostenpflichtigen Player?',
      a: 'Kostenpflichtige Player (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) holen deutlich mehr Leistung aus der Hardware heraus. Auf einem **Smart TV (Samsung / LG) oder Apple-Gerät** empfehlen wir dringend eine kostenpflichtige App (~8 € / Jahr nach 7 Tagen kostenlosem Test): Sie läuft wesentlich flüssiger als kostenlose Apps und merkt sich, wo Sie bei Filmen und Serien aufgehört haben. Auf **Android, Google TV, TV-Box oder Firestick** dagegen laufen unsere offiziellen **King 365 TV Apps (V2, V3 und V4)** hervorragend und sind **100 % kostenlos**.',
    },
  ],

  helpBanner: {
    title: 'Bei einem Schritt hängengeblieben? Wir richten Ihr Gerät gemeinsam mit Ihnen ein.',
    subtitle:
      'Schreiben Sie unserem Support-Team auf WhatsApp: Wir begleiten Sie Schritt für Schritt oder aktivieren Ihr Abonnement direkt per Fernzugriff – egal, auf welchem Bildschirm.',
    whatsappCta: '💬 Hilfe auf WhatsApp erhalten',
    plansCta: 'Abonnement bestellen',
  },
}
