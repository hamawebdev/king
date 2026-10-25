import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Refund schedule (days counted from activation), same tiers as the French document.
const SCHEDULE: [string, string][] = [
  ['Bis zum 14. Tag:', '85 %'],
  ['Vom 15. bis 60. Tag:', '65 %'],
  ['Vom 61. bis 90. Tag:', '40 %'],
  ['Vom 91. bis 120. Tag:', '25 %'],
  ['Vom 121. bis 180. Tag:', '20 %'],
  ['Nach mehr als 180 Tagen:', '12 %'],
]

// Rückerstattungsrichtlinie (German translation of the Politique de remboursement).
export function RefundDe() {
  return (
    <DocLayout
      title="Rückerstattungsrichtlinie"
      heading={"Rückerstattungs\u00ADrichtlinie"}
      lead={
        <p>
          Unsere Regeln zur Rückerstattung. Bitte lesen Sie sie vor jeder Bestellung: Sie beschreiben die einzigen
          Stornierungs- und Erstattungsmodalitäten, die {BRAND} anwendet.
        </p>
      }
    >
      <P>Diese Regeln gelten für die vier {BRAND}-Pakete:</P>
      <PackList />
      <H2 id="garantie-technique">Technische Garantie von 14 Tagen</H2>
      <P>
        Wir verwenden größte Sorgfalt darauf, dass unser Dienst funktioniert, doch jede Installation ist anders, und
        zahlreiche externe Faktoren können die Übertragungsqualität bei Ihnen beeinflussen. Wenn ein technischer Fehler,
        den wir nicht beheben können, Sie an der normalen Nutzung des Dienstes hindert, erstatten wir Ihnen innerhalb
        von 14 Tagen nach Ihrem ersten Kauf den vollständigen Betrag Ihrer Bestellung, unabhängig vom verwendeten Gerät.
      </P>
      <P>Außerhalb dieses Falls richtet sich jeder Erstattungsantrag nach der nachstehenden Staffel.</P>
      <H2 id="points-a-respecter">Zu beachtende Punkte</H2>
      <P>
        Ein Defekt Ihrer eigenen Hardware kann nur dann zu einer Rückerstattung führen, wenn Sie unsere Unterstützung
        annehmen und die von uns angegebenen Einstellungen vornehmen. Besteht das Problem dennoch weiterhin, nehmen wir
        die Rückerstattung vor, sofern Sie uns einen Nachweis der Funktionsstörung übermitteln, idealerweise in Form
        eines Videos. Bitte schreiben Sie uns vor jedem Antrag im Zusammenhang mit einem technischen Problem auf
        WhatsApp, damit unser Team eingreifen kann.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Wichtig: Bitte eröffnen Sie keinen Streitfall bei PayPal oder Ihrer Bank, um eine Rückerstattung zu erhalten,
          da wir in diesem Fall verpflichtet wären, die Einzelheiten Ihrer Bestellung zu übermitteln, was Kosten von bis
          zu 1.500 € zu Ihren Lasten verursachen kann
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            Jeder angenommene Erstattungsantrag führt zur endgültigen Schließung des Kontos und macht den erneuten
            Abschluss eines Abonnements unmöglich!
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Erstattungsstaffel</H2>
      <P>
        Bei allen anderen Anträgen hängt der erstattete Anteil des Preises von der Anzahl der Tage ab, die seit der
        Aktivierung Ihres Zugangs vergangen sind:
      </P>
      <ScheduleList rows={SCHEDULE} suffix="des Preises erstattet" />
      <H2 id="modalites">Modalitäten</H2>
      <P>Jeder Antrag ist schriftlich auf WhatsApp an unser Team zu richten.</P>
      <P>
        Die Rückerstattung erfolgt über das bei der Zahlung verwendete Zahlungsmittel: auf Ihr PayPal-Konto oder, bei
        Zahlung per SEPA-Echtzeitüberweisung, per SEPA-Überweisung auf das ursprüngliche Bankkonto, grundsätzlich
        innerhalb von höchstens 20 Arbeitstagen nach Bestätigung.
      </P>
      <P>
        Die von Ihrem Zahlungsdienstleister beim Kauf einbehaltenen Gebühren werden nicht erstattet und gehen zu Lasten
        des Kunden.
      </P>
      <P>
        Wenn Sie Schwierigkeiten beim Bestellen, Aktivieren oder Verlängern eines Zugangs haben, steht unser Team bereit,
        Sie zu unterstützen.
      </P>
      <HelpCard id="une-question" heading="Haben Sie eine Frage?">
        <P>
          Bei Fragen zu diesen Erstattungsregeln schreiben Sie uns über <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
