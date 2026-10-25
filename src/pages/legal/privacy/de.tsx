import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from '../shared'

// Datenschutzerklärung (German translation of the Politique de confidentialité).
export function PrivacyDe() {
  return (
    <DocLayout title="Datenschutzerklärung" heading={"Datenschutz\u00ADerklärung"}>
      <H2 id="donnees-recueillies">Erhobene personenbezogene Daten</H2>
      <P>Folgende Daten können wir speichern:</P>
      <UL cols>
        <li>Nachname</li>
        <li>Vorname</li>
        <li>Postanschrift</li>
        <li>Postleitzahl</li>
        <li>E-Mail-Adresse</li>
        <li>Mobil- oder Festnetznummer</li>
        <li>Land</li>
        <li>Geburtsdatum</li>
      </UL>
      <P>
        Diese Daten erhalten wir hauptsächlich im Rahmen Ihres Austauschs mit unseren Beratern auf WhatsApp (Bestellung,
        Aktivierung, Support). Die Website speichert außerdem einige Einstellungen in Ihrem Browser, die nachstehend
        beschrieben sind.
      </P>
      <H2 id="collecte">Erhebung und Verwendung</H2>
      <P>Über die folgenden Kontakte erhalten wir Ihre personenbezogenen Daten:</P>
      <UL>
        <li>WhatsApp-Unterhaltung mit Ihrem Berater (Bestellung, Verlängerung, Aktivierung)</li>
        <li>Versand Ihrer Zugangsdaten per E-Mail</li>
      </UL>
      <P>
        Die Zahlung erfolgt per PayPal oder per SEPA-Echtzeitüberweisung: Auf der Website werden keine Kartendaten
        eingegeben oder gespeichert.
      </P>
      <P>Die auf diese Weise erhaltenen Informationen dienen den folgenden Zwecken:</P>
      <UL>
        <li>Bearbeitung von Bestellungen und Verlängerungen</li>
        <li>Technischer Support</li>
      </UL>
      <H2 id="cookies">Cookies und Einstellungen</H2>
      <P>Während Ihres Besuchs speichert die Website ausschließlich in Ihrem Browser (lokaler Speicher):</P>
      <UL>
        <li>Ihre Zustimmung zum Cookie-Banner, damit es nicht erneut angezeigt wird</li>
        <li>Die im Sprachwähler gewählte Sprache</li>
      </UL>
      <P>
        Diese Informationen verbleiben auf Ihrem Gerät und dienen ausschließlich dazu, Ihre Anzeigeeinstellungen zu
        speichern. Sie können sie jederzeit in den Einstellungen Ihres Browsers löschen.
      </P>
      <H2 id="refus-et-suppression">Widerspruch und Löschung der Daten</H2>
      <P>Sie können der Verwendung Ihrer Informationen jederzeit widersprechen oder deren Löschung verlangen.</P>
      <P>
        Das Widerspruchsrecht bezeichnet die Möglichkeit jedes Nutzers, der Verwendung seiner Daten für bestimmte der
        Zwecke zu widersprechen, die zum Zeitpunkt ihrer Erhebung angegeben wurden.
      </P>
      <P>
        Das Recht auf Löschung bezeichnet seinerseits die Möglichkeit, die Löschung seiner Daten aus einer Datei zu
        verlangen, zum Beispiel aus einer Verteilerliste für Newsletter oder gezielte kommerzielle Angebote.
      </P>
      <P>Um diese Rechte geltend zu machen, kontaktieren Sie uns:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Online-Bereich:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Kontaktseite
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Auskunft</H2>
      <P>
        Jede betroffene Person kann Auskunft über die sie betreffenden Informationen erhalten, deren Berichtigung
        verlangen oder ihre Löschung fordern, wenn sie unrichtig sind.
      </P>
      <P>Anfragen sind zu richten an:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Online-Bereich:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Kontaktseite
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Speicherung</H2>
      <P>
        Ihre Informationen werden auf geschützten Servern gehostet und sind nur einer begrenzten Anzahl von Mitarbeitern
        zugänglich, die ihrerseits einer strengen Verschwiegenheitspflicht und regelmäßigen Kontrollen unterliegen.
      </P>
      <P>Mehrere ergänzende Vorkehrungen sorgen täglich für den wirksamen Schutz Ihrer Daten, insbesondere:</P>
      <UL cols>
        <li>Verschlüsselung der Datenübertragung (TLS)</li>
        <li>Verstärkte Authentifizierung der Administratoren</li>
        <li>Zugriffskontrolle – berechtigtes Team</li>
        <li>Zugriffskontrolle – Kontoinhaber</li>
        <li>Ständige Netzwerküberwachung</li>
        <li>Sicherungskopien</li>
        <li>Aktuelle digitale Zertifikate</li>
        <li>Verschlüsselte Passwörter</li>
        <li>Anwendungs-Firewall</li>
      </UL>
      <P>
        Wir passen unsere Werkzeuge regelmäßig an, um mit der technologischen Entwicklung Schritt zu halten und die
        Vertraulichkeit Ihrer Vorgänge zu wahren. Es sei jedoch darauf hingewiesen, dass keine Vorkehrung einen absoluten
        Schutz bieten kann: Jede Übertragung von Informationen über das Internet birgt ein Risiko, das sich unabhängig
        von den getroffenen Vorsichtsmaßnahmen nicht vollständig ausschließen lässt.
      </P>
    </DocLayout>
  )
}
