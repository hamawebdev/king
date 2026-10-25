import { WHATSAPP_DISPLAY } from '@/lib/site'
import type { FaqId, FaqText } from './Faq.data'
import { Install, Wa } from './Faq.links'

/** Spec S14 auf Deutsch (gleiche Links und Downloader-Codes wie im Französischen). */
export const de: Record<FaqId, FaqText> = {
  commander: {
    question: 'Wie bestelle ich ein King 365 TV Paket bei NovaStream?',
    answer: (
      <p>
        Klicken Sie auf die Schaltfläche „Jetzt kaufen“ (sie führt Sie direkt zu unseren Abonnement-Paketen), wählen Sie die
        gewünschte Laufzeit, geben Sie Ihre Daten ein und bestätigen Sie Ihre Anfrage bei unserem Team auf WhatsApp
        (<Wa>wa.me/33751299176</Wa>) – für eine sofortige Aktivierung.
      </p>
    ),
  },
  delai: {
    question: 'Wie schnell erhalte ich meine Abonnement-Codes?',
    answer: (
      <p>
        Während unserer Öffnungszeiten erfolgt der Versand Ihrer Zugangsdaten per WhatsApp und E-Mail nach der Zahlungsbestätigung
        nahezu sofort (in der Regel innerhalb von 10 bis 20 Minuten). Bei hohem Andrang kann die Bearbeitung maximal 1 bis 2 Stunden
        dauern (per E-Mail bis zu maximal 6 Stunden).
      </p>
    ),
  },
  email: {
    question: 'Ich habe die E-Mail nicht in der angegebenen Zeit erhalten – muss ich mir Sorgen machen?',
    answer: (
      <p>
        Nein, keine Sorge. Wir versenden von 09:00 bis 22:00 Uhr (GMT+1). Wenn Sie auch in Ihrem Spam-Ordner nichts finden,
        kontaktieren Sie einfach das NovaStream-Team auf WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>): Ein Berater schickt Ihnen Ihre
        Zugangsdaten und löst das Problem sofort.
      </p>
    ),
  },
  'autres-apps': {
    question: 'Kann ich mein King 365 TV Abonnement auch mit anderen IPTV-Apps nutzen?',
    answer: (
      <p>
        Ja, auf jeden Fall! Neben den offiziellen King 365 Apps empfiehlt NovaStream ausdrücklich hervorragende kostenpflichtige
        Player wie IBO Player, IBO Player Smarter, Hot Player oder Bob Player, die besonders flüssig laufen. Sie können auch
        kostenlose Apps aus den App-Stores nutzen, etwa IPTV Smarters Pro oder Smarters Lite.
      </p>
    ),
  },
  renouveler: {
    question: 'Wie verlängere ich mein King 365 TV Abonnement bei NovaStream?',
    answer: (
      <p>
        Wählen Sie die Option „Verlängerung“, geben Sie Ihr Gerät an, setzen Sie das Häkchen für die Verlängerung und nennen Sie
        Ihren aktuellen Benutzernamen – oder klicken Sie direkt auf unseren <Wa>WhatsApp-Link</Wa>. Unser Support schickt Ihnen die
        Zahlungsinformationen: Sobald Sie Ihren Screenshot (Beleg) senden, wird Ihr Abonnement innerhalb weniger Minuten verlängert,
        mit Bestätigung per WhatsApp und E-Mail.
      </p>
    ),
  },
  'memes-identifiants': {
    question: 'Kann ich verlängern und dabei genau dieselben Zugangsdaten behalten?',
    answer: (
      <p>
        Wenn Sie Ihr ursprüngliches Abonnement auf unserer NovaStream-Website abgeschlossen haben: ja. Wir verlängern Ihre aktuellen
        Zugangsdaten direkt, ohne etwas zu ändern. Stammt Ihr bisheriges Abonnement dagegen von einem anderen Verkäufer oder
        Vertriebspartner, erhalten Sie von uns neue offizielle NovaStream-Zugangsdaten, die Sie in Ihren Player eingeben.
      </p>
    ),
  },
  'telecharger-v3': {
    question: 'Wie lade ich die App King 365 TV Box V3 (APK) herunter?',
    answer: (
      <p>
        Gehen Sie direkt zu unserem Download-Bereich, indem Sie <Install>hier klicken</Install> (weiter oben auf dieser Seite), geben
        Sie den neuen offiziellen Downloader-Code der Version 3 (283367) ein und folgen Sie unserer ausführlichen Anleitung.
      </p>
    ),
  },
  'telecharger-v4': {
    question: 'Wie lade ich King 365 TV Version 4 (V4) herunter und installiere sie, und wo finde ich den offiziellen Link?',
    answer: (
      <p>
        <Install>Klicken Sie hier</Install>, um unsere offizielle Installationsanleitung zu öffnen. Version 4 (Downloader-Code:
        2763945) ist für Android-TV-Fernseher, aktuelle Google-TV-Geräte, Android-TV-Boxen und Amazon Fire TV Sticks ausgelegt, die
        mit der Downloader-App kompatibel sind (ausgenommen der Fire TV Stick HD der 2. Generation mit dem geschlossenen System Vega
        OS, das APKs blockiert).
      </p>
    ),
  },
  'versions-officielles': {
    question:
      'Wichtiger Hinweis: Welche offiziellen Versionen von King 365 TV sollte ich installieren, und welche alten Codes sollte ich löschen?',
    answer: (
      <>
        <p>
          Um Unterbrechungen, Anmeldefehler und Zugangsprobleme zu vermeiden, laden Sie die alten, veralteten Versionen nicht mehr
          herunter. Wir empfehlen dringend, alle 3 neuen offiziellen Versionen (V2, V3 und V4) auf Ihrem Gerät zu installieren – so
          ist ein durchgehender Betrieb gewährleistet, und bei Wartungsarbeiten an einem Server haben Sie sofort eine Alternative:
        </p>
        <p className="font-semibold text-heading">✅ Neue offizielle Versionen zum Installieren:</p>
        <ul className="grid gap-1">
          <li>• Version 2 (V2): Downloader-Code 756917</li>
          <li>• Version 3 (V3): Downloader-Code 283367</li>
          <li>• Version 4 (V4): Downloader-Code 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Alte, veraltete Versionen, die Sie unbedingt meiden sollten (bitte deinstallieren):</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  pays: {
    question: 'Funktioniert das King 365 TV Abonnement in Frankreich, Kanada, Belgien und im Ausland?',
    answer: (
      <p>
        Ja, das Abonnement funktioniert überall auf der Welt, sobald Sie eine Internetverbindung haben (Frankreich, Kanada, Belgien,
        Schweiz, Algerien, Tunesien, Marokko usw.).
      </p>
    ),
  },
  'multi-ecrans': {
    question: 'Kann ich mein Abonnement auf mehreren Geräten nutzen oder ein Angebot für mehrere Bildschirme erhalten?',
    answer: (
      <p>
        Ihr Abonnement ist persönlich und kann nicht gleichzeitig geteilt werden: Es erlaubt jeweils einen aktiven Bildschirm. Sie
        können es auf zwei Geräten installieren und abwechselnd nutzen (nie gleichzeitig, um Sperren zu vermeiden). Wenn Sie auf
        mehreren Bildschirmen gleichzeitig schauen möchten, <Wa>kontaktieren Sie NovaStream</Wa> und profitieren Sie von unseren
        Angeboten für zusätzliche, unabhängige Abonnements.
      </p>
    ),
  },
  'sans-parabole': {
    question: 'Kann ich King 365 TV auch ohne Satellitenschüssel kaufen?',
    answer: (
      <p>
        Selbstverständlich! Der IPTV-Dienst King 365 TV wird zu 100 % über das Internet übertragen – ganz ohne Satellitenschüssel.
        Eine stabile Breitband-Internetverbindung (empfohlen sind mindestens 30 Mbit/s für optimale Flüssigkeit in 4K HDR) genügt.
      </p>
    ),
  },
  'televiseur-ancien': {
    question: 'Ich habe einen älteren Fernseher – welche Lösung bieten Sie an?',
    answer: (
      <p>
        Um Ihren Fernseher zu modernisieren, empfiehlt NovaStream eine von Google zertifizierte Android-TV-Box (Google Certified) wie
        Xiaomi Mi Box, Mecool oder RockTek oder eine andere Android-Box mit guter technischer Ausstattung (viel Arbeitsspeicher und
        leistungsstarker Prozessor) für eine besonders flüssige Bedienung.
      </p>
    ),
  },
  confiance: {
    question: 'Woran erkenne ich, dass NovaStream ein zuverlässiger autorisierter Vertriebspartner ist, dem ich voll vertrauen kann?',
    answer: (
      <p>
        NovaStream ist ein anerkannter autorisierter Vertriebspartner mit mehr als 3 Jahren Erfahrung und Zehntausenden treuen
        Abonnenten. Unser Service ist streng strukturiert und transparent: Häufig bereiten wir den Zugang unserer Kunden sogar schon
        vor der Zahlung vor und aktivieren ihn – als Zeichen unseres Vertrauens und unserer Seriosität.
      </p>
    ),
  },
  essai: {
    question: 'Kann ich Ihre Dienste vor dem Bezahlen testen (Testphase)?',
    answer: (
      <p>
        Ja, in bestimmten Fällen ist ein Test über 3 oder 24 Stunden möglich; danach können Sie ein Abonnement ab 6 oder 12 Monaten
        abschließen. <strong className="font-semibold text-heading">Wichtiger Hinweis:</strong> Während großer Spiele und an Abenden
        wichtiger Wettbewerbe werden keine Tests vergeben, um in Abstimmung mit King 365 TV eine maximale Serverstabilität für unsere
        aktiven Abonnenten zu gewährleisten.
      </p>
    ),
  },
  chaines: {
    question: 'Welche Sender sind im Abonnement enthalten?',
    answer: (
      <p>
        Sie erhalten Zugang zu einer riesigen Auswahl an Sendern aus aller Welt: Frankreich, Großbritannien, USA, Kanada, Belgien,
        Schweiz, Maghreb, Afrika und Europa – mit allen Paketen für Sport, Nachrichten, Kino, Serien, Kinder und Dokumentationen
        sowie +16.000 VOD-Filmen und -Serien und Replay für bis zu 15 Tage.
      </p>
    ),
  },
  'ibo-expire': {
    question: 'Mein IBO Player (oder Hot Player / Bob Player) meldet, dass die Aktivierung abgelaufen ist – was tun?',
    answer: (
      <p>
        IBO Player, IBO Player Smarter, Hot Player und Bob Player sind unabhängige, kostenpflichtige Player, die nach ihrer Testphase
        eine Aktivierung verlangen. Installieren Sie auf Android unsere kostenlose offizielle King 365 TV App, um diese Kosten zu
        vermeiden. Wenn Sie keinen Android-Fernseher haben (z. B. ein Smart TV von Samsung oder LG), übernimmt NovaStream die direkte
        Aktivierung Ihres Players für etwa 8 € / Jahr: Kontaktieren Sie einfach unseren Support auf <Wa>WhatsApp</Wa>.
      </p>
    ),
  },
  'licence-payante': {
    question: 'Die App 9Xtream oder IPTV Smarters Pro verlangt eine Zahlung oder meldet, dass meine Aktivierung abgelaufen ist?',
    answer: (
      <p>
        9Xtream und einige Editionen von IPTV Smarters Pro sind kostenpflichtige Dienste, für die eine Softwarelizenz nötig ist.
        Nutzen Sie kostenlos unsere offiziellen King 365 TV Apps (V2, V3, V4) auf Android-TV-Geräten / Boxen, oder kontaktieren Sie
        unseren <Wa>WhatsApp-Support</Wa>, um auf Ihren anderen Bildschirmen eine kompatible kostenpflichtige App zu aktivieren.
      </p>
    ),
  },
  'failed-to-authorize': {
    question: 'INFO für LG- & SAMSUNG-Nutzer: Die Smarters-App zeigt den Fehler „Failed to authorize“ – was tun?',
    answer: (
      <>
        <p>
          Die alte Smarters-App hat derzeit einen Zugriffsfehler (Fehler: „Failed to authorize“). Keine Sorge: Das Problem liegt
          nicht bei unseren Servern, sondern bei der App selbst.
        </p>
        <p>
          ⬇️ Lösung: Die Entwickler bitten darum, auf die neue Version umzusteigen. Laden Sie einfach die neue Version Smarters Pro
          aus dem App-Store Ihres Fernsehers herunter: Ihre aktuellen Zugangsdaten bleiben exakt dieselben.
        </p>
      </>
    ),
  },
  'lien-serveur': {
    question: 'Der Server-Link funktioniert nicht, wenn ich meine Daten eingebe – warum?',
    answer: (
      <p>
        Um maximale Sicherheit und Stabilität zu gewährleisten, erneuert und aktualisiert NovaStream seine Server-Links regelmäßig
        (ohne sie öffentlich zu teilen). Prüfen Sie, ob der Link mit http:// beginnt, und kontaktieren Sie unseren Support auf
        WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>), um sofort den aktuellen Link zu erhalten.
      </p>
    ),
  },
}
