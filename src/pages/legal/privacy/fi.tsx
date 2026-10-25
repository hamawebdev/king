import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from '../shared'

// Tietosuojaseloste (Politique de confidentialité).
export function PrivacyFi() {
  return (
    <DocLayout title="Tietosuojaseloste" heading={"Tietosuoja\u00ADseloste"}>
      <H2 id="donnees-recueillies">Kerättävät henkilötiedot</H2>
      <P>Voimme tallentaa seuraavat tiedot:</P>
      <UL cols>
        <li>Sukunimi</li>
        <li>Etunimi</li>
        <li>Postiosoite</li>
        <li>Postinumero</li>
        <li>Sähköpostiosoite</li>
        <li>Matkapuhelin- tai lankapuhelinnumero</li>
        <li>Maa</li>
        <li>Syntymäaika</li>
      </UL>
      <P>
        Saamme nämä tiedot pääasiassa, kun asioit asiakasneuvojiemme kanssa WhatsAppissa (tilaus, aktivointi, tuki).
        Sivusto tallentaa myös joitakin asetuksia selaimeesi; ne kuvataan alla.
      </P>
      <H2 id="collecte">Keruu ja käyttö</H2>
      <P>Saamme henkilötietosi seuraavien yhteydenottojen kautta:</P>
      <UL>
        <li>WhatsApp-keskustelu asiakasneuvojasi kanssa (tilaus, uusiminen, aktivointi)</li>
        <li>Tunnustesi lähettäminen sähköpostitse</li>
      </UL>
      <P>
        Maksu suoritetaan PayPalilla tai SEPA-pikasiirtona: maksukorttitietoja ei syötetä sivustolle eikä sivusto
        säilytä niitä.
      </P>
      <P>Näin saatuja tietoja käytetään seuraaviin tarkoituksiin:</P>
      <UL>
        <li>Tilausten ja uusimisten käsittely</li>
        <li>Tekninen tuki</li>
      </UL>
      <H2 id="cookies">Evästeet ja asetukset</H2>
      <P>Selatessasi sivusto tallentaa ainoastaan selaimeesi (paikalliseen tallennustilaan):</P>
      <UL>
        <li>Evästeilmoituksen hyväksyntäsi, jotta ilmoitusta ei enää näytetä</li>
        <li>Kielivalitsimessa valitsemasi kielen</li>
      </UL>
      <P>
        Nämä tiedot pysyvät laitteellasi, ja niitä käytetään ainoastaan näyttöasetustesi muistamiseen. Voit poistaa ne
        milloin tahansa selaimesi asetuksista.
      </P>
      <H2 id="refus-et-suppression">Vastustaminen ja tietojen poistaminen</H2>
      <P>Voit milloin tahansa vastustaa tietojesi käyttöä tai pyytää niiden poistamista.</P>
      <P>
        Vastustamisoikeudella tarkoitetaan jokaisen käyttäjän mahdollisuutta vastustaa tietojensa käyttämistä
        joihinkin niistä tarkoituksista, jotka ilmoitettiin tietoja kerättäessä.
      </P>
      <P>
        Poisto-oikeudella puolestaan tarkoitetaan mahdollisuutta pyytää tietojen poistamista rekisteristä, esimerkiksi
        uutiskirjeiden tai kohdennettujen kaupallisten tarjousten postituslistalta.
      </P>
      <P>Voit käyttää näitä oikeuksia ottamalla meihin yhteyttä:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Verkossa:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Yhteystiedot-sivu
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Tietojen tarkastaminen</H2>
      <P>
        Jokainen rekisteröity voi saada tiedokseen itseään koskevat tiedot, pyytää niiden korjaamista tai vaatia niiden
        poistamista, jos ne ovat virheellisiä.
      </P>
      <P>Pyynnöt tulee osoittaa:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Verkossa:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Yhteystiedot-sivu
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Säilytys</H2>
      <P>
        Tietosi säilytetään suojatuilla palvelimilla, ja niihin on pääsy vain rajallisella määrällä työntekijöitä,
        joita sitoo tiukka vaitiolovelvollisuus ja joita valvotaan säännöllisesti.
      </P>
      <P>
        Useat toisiaan täydentävät järjestelmät huolehtivat päivittäin tietojesi asianmukaisesta suojaamisesta,
        erityisesti:
      </P>
      <UL cols>
        <li>Tiedonsiirron salaus (TLS)</li>
        <li>Ylläpitäjien vahvennettu tunnistautuminen</li>
        <li>Pääsynhallinta – valtuutettu henkilöstö</li>
        <li>Pääsynhallinta – tilin haltija</li>
        <li>Verkon jatkuva valvonta</li>
        <li>Varmuuskopiot</li>
        <li>Ajantasaiset digitaaliset varmenteet</li>
        <li>Salatut salasanat</li>
        <li>Sovelluspalomuuri</li>
      </UL>
      <P>
        Mukautamme työkalujamme säännöllisesti teknologian kehityksen mukaisesti ja suojataksemme toimintojesi
        luottamuksellisuuden. On kuitenkin syytä muistaa, ettei mikään järjestelmä voi tarjota ehdotonta suojaa:
        kaikkeen tiedonsiirtoon internetissä liittyy riski, jota ei voida kokonaan poistaa, olivatpa varotoimet mitkä
        tahansa.
      </P>
    </DocLayout>
  )
}
