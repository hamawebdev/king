import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Refund schedule (days counted from activation); same tiers as the French. Non-breaking space before « % ».
const SCHEDULE: [string, string][] = [
  ['14. päivään asti:', '85 %'],
  ['15.–60. päivä:', '65 %'],
  ['61.–90. päivä:', '40 %'],
  ['91.–120. päivä:', '25 %'],
  ['121.–180. päivä:', '20 %'],
  ['Yli 180 päivää:', '12 %'],
]

// Palautuskäytäntö (Politique de remboursement).
export function RefundFi() {
  return (
    <DocLayout
      title="Palautuskäytäntö"
      heading={"Palautus\u00ADkäytäntö"}
      lead={
        <p>
          Rahanpalautussääntömme. Tutustu niihin ennen tilaamista: ne kuvaavat ainoat peruutus- ja
          rahanpalautusehdot, joita {BRAND} soveltaa.
        </p>
      }
    >
      <P>Näitä sääntöjä sovelletaan kaikkiin neljään {BRAND}-pakettiin:</P>
      <PackList />
      <H2 id="garantie-technique">14 päivän tekninen takuu</H2>
      <P>
        Huolehdimme palvelumme toimivuudesta mahdollisimman huolellisesti, mutta jokainen asennus on erilainen ja monet
        ulkoiset tekijät voivat vaikuttaa lähetyksen laatuun luonasi. Jos tekninen ongelma, jota emme pysty
        korjaamaan, estää sinua käyttämästä palvelua normaalisti, palautamme tilauksesi koko hinnan ensimmäistä
        ostostasi seuraavien 14 päivän aikana riippumatta käytetystä laitteesta.
      </P>
      <P>Muissa tapauksissa kaikkiin rahanpalautuspyyntöihin sovelletaan alla olevaa taulukkoa.</P>
      <H2 id="points-a-respecter">Huomioitavat seikat</H2>
      <P>
        Omaan laitteistoosi liittyvä vika voi oikeuttaa rahanpalautukseen vain, jos hyväksyt tukemme ja teet
        ohjeistamamme asetukset. Jos ongelma tästä huolimatta jatkuu, palautamme rahat sillä edellytyksellä, että
        toimitat meille todisteen toimintahäiriöstä, mieluiten videona. Ennen teknistä ongelmaa koskevaa pyyntöä
        kirjoita meille WhatsAppissa, jotta tiimimme voi puuttua asiaan.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Tärkeää: älä avaa riitaa PayPalissa tai pankissasi saadaksesi rahanpalautuksen, sillä joutuisimme
          toimittamaan tilauksesi tiedot, mikä voi aiheuttaa sinun maksettaviksesi jopa 1&nbsp;500&nbsp;€:n kulut
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            Jokainen hyväksytty rahanpalautuspyyntö johtaa tilin pysyvään sulkemiseen, eikä uutta tilausta voi enää
            tehdä!
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Palautustaulukko</H2>
      <P>
        Muissa pyynnöissä palautettava osuus hinnasta riippuu siitä, montako päivää käyttöoikeutesi aktivoinnista on
        kulunut:
      </P>
      <ScheduleList rows={SCHEDULE} suffix="hinnasta palautetaan" />
      <H2 id="modalites">Menettely</H2>
      <P>Kaikki pyynnöt tehdään tiimillemme kirjallisesti WhatsAppissa.</P>
      <P>
        Rahat palautetaan samalla maksutavalla, jota käytit maksaessasi: PayPal-tilillesi tai, jos maksoit
        SEPA-pikasiirtona, SEPA-tilisiirtona alkuperäiselle pankkitilille, pääsääntöisesti enintään 20 arkipäivän
        kuluessa hyväksynnästä.
      </P>
      <P>
        Maksupalveluntarjoajasi ostohetkellä perimiä maksuja ei palauteta, vaan ne jäävät asiakkaan maksettaviksi.
      </P>
      <P>
        Jos sinulla on vaikeuksia käyttöoikeuden tilaamisessa, aktivoinnissa tai uusimisessa, tiimimme on valmiina
        auttamaan sinua.
      </P>
      <HelpCard id="une-question" heading="Kysyttävää?">
        <P>
          Jos sinulla on kysyttävää näistä rahanpalautussäännöistä, kirjoita meille: <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
