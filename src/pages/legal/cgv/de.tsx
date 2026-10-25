import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from '../shared'
import { PackList } from '../PackList'

// Allgemeine Geschäftsbedingungen (German translation of the Conditions générales de vente).
export function CgvDe() {
  return (
    <DocLayout
      title="Allgemeine Geschäftsbedingungen"
      heading={"Allgemeine Geschäfts\u00ADbedingungen"}
      lead={
        <p>
          Die Verkäufe über {BRAND}. Die Informationen auf dieser Website werden häufig überprüft, um den aktuellen Stand
          unserer Angebote widerzuspiegeln.
        </p>
      }
    >
      <H2 id="formules">Angebotene Pakete</H2>
      <P>
        {BRAND}, autorisierter King 365 TV Vertriebspartner, bietet vier Abonnementpakete ohne versteckte
        Vertragsbindung an. Der angegebene Preis deckt die gesamte Laufzeit des Pakets ab:
      </P>
      <PackList />
      <H2 id="commande">Bestellung</H2>
      <P>
        Jede Bestellung, jede Verlängerung und jede Aktivierung erfolgt direkt mit einem {BRAND}-Berater über{' '}
        <Wa />. Der Berater bestätigt mit Ihnen vor der Zahlung das gewählte Paket und das einzurichtende Gerät.
      </P>
      <H2 id="modes-de-reglement">Akzeptierte Zahlungsarten</H2>
      <P>
        Die Zahlung wird mit Ihrem Berater auf WhatsApp vereinbart, per PayPal (mit Käuferschutz) oder per
        SEPA-Echtzeitüberweisung. Auf der Website werden keine Kartendaten eingegeben oder gespeichert.
      </P>
      <P>
        Die von bestimmten Zahlungsdienstleistern erhobenen Gebühren gehen zu Ihren Lasten und werden im Falle einer
        Stornierung nicht erstattet.
      </P>
      <H2 id="activation">Aktivierung</H2>
      <P>
        Ihre Zugangsdaten (Xtream-API-Codes und M3U-Link) werden Ihnen per WhatsApp und per E-Mail zugesandt, sobald die
        Zahlung bestätigt ist: in der Regel in weniger als 10 bis 20 Minuten während unserer Geschäftszeiten und in
        Zeiten hohen Andrangs innerhalb von bis zu 1 bis 2 Stunden.
      </P>
      <H2 id="fiabilite">Zuverlässigkeit</H2>
      <P>
        Unsere Teams überwachen die Verfügbarkeit der Plattform rund um die Uhr. Unterbrechungen, die auf die Qualität
        Ihrer Internetverbindung oder auf Ihre Hardware zurückzuführen sind, liegen außerhalb unseres Einflussbereichs
        und können uns nicht angelastet werden. Wir setzen alles daran, eine stabile Übertragung zu gewährleisten. Diese
        externen Störungen begründen keinen Anspruch auf Rückerstattung.
      </P>
      <H2 id="support">Support</H2>
      <P>
        Unser Team antwortet auf WhatsApp 7 Tage die Woche und unterstützt Sie kostenlos bei der Einrichtung Ihres Geräts
        oder Ihres Fernsehers.
      </P>
      <H2 id="annulation">Stornierung / Erstattungsregeln</H2>
      <P>
        Die Bedingungen für Stornierung und Rückerstattung (technische Garantie von 14 Tagen und Erstattungsstaffel) sind
        in unserer{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          Rückerstattungsrichtlinie
        </Link>{' '}
        festgelegt; allein diese ist maßgeblich. Jede Anfrage erfolgt schriftlich auf WhatsApp unter Angabe des bestellten
        Pakets.
      </P>
      <P>
        In bestimmten Fällen ist vor dem Abschluss eines Abonnements ein Test mit einer Dauer von 3 Stunden oder
        24 Stunden verfügbar. Bei technischen Schwierigkeiten steht Ihnen unser Team auf WhatsApp zur Verfügung.
      </P>
      <H2 id="interdits">Verbote</H2>
      <P>
        Die Weitergabe Ihrer Zugangsdaten an andere Personen ist untersagt. Ein Code erlaubt jeweils einen aktiven
        Bildschirm: Die gleichzeitige Nutzung desselben Zugangs auf mehreren Geräten führt ebenso wie jede
        Weiterverbreitung des Dienstes zur sofortigen Kündigung ohne jegliche Rückerstattung.
      </P>
      <H2 id="donnees-personnelles">Schutz Ihrer personenbezogenen Daten</H2>
      <P>
        Keine Sie betreffenden Informationen werden an Partner weitergegeben. Ihre Anonymität und Ihre Privatsphäre haben
        für uns absolute Priorität.
      </P>
      <P>
        Kontoinformationen und Verbindungsstatistiken dienen ausschließlich internen Analysen, um unsere Server zu
        dimensionieren und die Qualität des Ihnen angebotenen Dienstes kontinuierlich zu verbessern.
      </P>
    </DocLayout>
  )
}
