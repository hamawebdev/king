import { BRAND, BRAND_UPPER } from '@/lib/site'
import { B, DocLayout, H2, HelpCard, NumberedItem as Item, P, Wa } from '../shared'

/** <B /> with a Finnish case ending inside the bold (NovaStreamin, NovaStreamille…), same markup as <B />. */
function Bi({ e }: { e: 'in' | 'ille' | 'ia' | 'iin' }) {
  return (
    <strong className="font-semibold text-heading">
      {BRAND}
      {e}
    </strong>
  )
}

// Käyttöehdot (Conditions d’utilisation).
export function CguFi() {
  return (
    <DocLayout
      title="Käyttöehdot"
      lead={
        <p>
        Nämä ehdot määrittävät puitteet, joiden mukaisesti jokainen vierailija voi selata ja käyttää <Bi e="in" />{' '}
        sivustoa. Sivujemme selaaminen merkitsee, että olet lukenut seuraavan tekstin ja hyväksyt sen kokonaisuudessaan.
        Jos jokin näistä säännöistä ei sovi sinulle, pyydämme sinua poistumaan <Bi e="in" /> sivustolta ja olemaan
        avaamatta tiliä alustalla.
        </p>
      }
    >
      <H2 id="droits-sur-les-contenus">OIKEUDET SISÄLTÖIHIN</H2>
      <P>
        © 2026 <B /> – kaikki oikeudet pidätetään. Täällä julkaistut tekstit, kuvat ja graafiset elementit kuuluvat{' '}
        <Bi e="ille" /> tai sen kumppaneille, ja ne voivat sisältää <Bi e="in" /> tai kolmansien osapuolten
        rekisteröimiä tunnusmerkkejä. Saat näyttää, tulostaa tai tallentaa tiettyjä sivuja yksinomaan yksityiseen
        käyttöön sillä edellytyksellä, että kaikki niissä olevat omistusoikeusmerkinnät säilyvät koskemattomina ja
        täysin luettavina.
      </P>
      <P>
        Kaikki tämän yksityisen käytön ylittävä kopiointi, levittäminen tai hyödyntäminen ilman etukäteen annettua
        kirjallista suostumusta voi olla immateriaalioikeuksien loukkaus, josta olet täysimääräisesti vastuussa.
      </P>
      <P>
        Vaikka <B /> pyrkii pitämään sivunsa huolellisesti ajan tasalla, julkaistujen tietojen kattavuudesta,
        tarkkuudesta tai ajantasaisuudesta ei anneta mitään takuuta, ja tiedot voivat muuttua milloin tahansa ilman
        ennakkoilmoitusta. Kaikki sisällöt tarjotaan sellaisinaan ilman sitoumusta jatkuvasta saatavuudesta, ja niiden
        selaaminen ja käyttö tapahtuvat yksinomaan omalla vastuullasi ja omalla riskilläsi.
      </P>
      <H2 id="obligations-de-chaque-membre">JÄSENTEN VELVOLLISUUDET</H2>
      <P>
        Jokainen jäsen vastaa henkilökohtaisesti tililtään tehdyistä toimista. Sivustoa on kielletty käyttämästä
        tavalla, jonka <B /> katsoisi olevan sen käyttötarkoituksen vastainen, erityisesti: lainvastaisiin tai
        harhaanjohtaviin tarkoituksiin; pyytämättömien mainosviestien levittämiseen; teknisten suojausjärjestelmien
        kiertämisyrityksiin; luvattomaan tunkeutumiseen järjestelmiin; muita henkilöitä koskevien tietojen
        keräämiseen; petoksen toteuttamiseen; haittaohjelmien tai muiden vahingollisten ohjelmien levittämiseen;
        kolmansien osapuolten oikeuksien alaisten sisältöjen julkaisemiseen, tallentamiseen tai jakamiseen ilman
        tarvittavia lupia tai vihaa lietsovien, järkyttävien, solvaavien, valheellisten, uhkaavien, syrjivien tai
        toisten ihmisarvoa loukkaavien sisältöjen julkaisemiseen, tallentamiseen tai jakamiseen; tiedostojen,
        tietokantojen, palvelinten tai laitteiden muuttamiseen, kopioimiseen, vahingoittamiseen tai poistamiseen ilman
        siihen oikeuttavaa lupaa; tai muiden jäsenten selaamisen ja käyttömukavuuden häiritsemiseen. Pidä mielessä,
        että kaikki sivuston julkisella alueella julkaistut viestit ovat kaikkien vierailijoiden luettavissa.
      </P>
      <P>
        <B /> ei valvo jäsentensä julkaisuja etukäteen eikä välttämättä yhdy niiden sisältöön.{' '}
        <B /> ei tarkasta jokaista julkaistua viestiä, mutta pidättää itsellään oikeuden poistaa tai muokata mitä
        tahansa näiden sääntöjen vastaista julkaisua, joka tulee sen tietoon. <B /> voi myös rajoittaa jäsenen pääsyä
        sivustolle tai lopettaa sen, jos se täysin itsenäisesti katsoo, että näitä ehtoja on rikottu.
      </P>
      <P>
        <B /> ei tule sivustolla julkaisemiesi sisältöjen omistajaksi. Julkaisemalla ne myönnät <Bi e="ille" />{' '}
        maksuttoman, maailmanlaajuisen ja ei-yksinomaisen luvan isännöidä, kopioida, muokata, kääntää, tiivistää,
        muotoilla, esittää ja levittää niitä sekä liittää niitä muihin välineisiin sivuston toiminnan ja sen
        markkinoinnin tarpeisiin ilman, että <B /> on velvollinen suorittamaan minkäänlaista vastiketta. Lisäksi
        sitoudut olemaan vetoamatta tätä hyödyntämistä vastaan oikeuksiin, jotka sinulla on tai voi olla tekijänä.
      </P>
      <H2 id="signalement-d-un-abus">VÄÄRINKÄYTÖKSEN ILMOITTAMINEN</H2>
      <P>
        Jos katsot, että sivustolla oleva sisältö loukkaa oikeuksiasi tai mainettasi ja asut Euroopan unionin
        ulkopuolella, voit lähettää <Bi e="ille" /> yksityiskohtaisen kirjallisen ilmoituksen: <Wa />. Tiimimme
        käsittelee jokaisen pyynnön huolellisesti, ja se johtaa toimenpiteisiin, jotka katsotaan aiheellisiksi
        ilmoitettujen seikkojen luonteen ja vakavuuden perusteella.
      </P>
      <H2 id="reclamation-procedure-de-retrait">VAATIMUS – POISTOMENETTELY</H2>
      <P>
        Jos sinulle kuuluva teos vaikuttaa olevan kopioitu sivustolle ilman suostumustasi, voit ilmoittaa siitä{' '}
        <Bi e="ille" /> kirjoittamalla: <Wa />. Tarkistuksen jälkeen voimme poistaa kyseisen elementin, ilmoittaa
        asiasta sen julkaisseelle jäsenelle ja antaa hänelle mahdollisuuden esittää huomautuksensa vastaväitteen
        yhteydessä. Poistettu elementti voidaan palauttaa sivustolle, jos vastaväite osoittautuu perustelluksi.
        Säilytämme kirjallisen merkinnän jokaisesta vastaanotetusta vaatimuksesta sekä sen johdosta toteutetuista
        toimenpiteistä. Vilpillinen tai ilmeisen perusteeton vaatimus voi altistaa sen esittäjän oikeustoimille sekä
        velvollisuudelle maksaa vahingonkorvauksia, oikeudenkäyntikuluja ja asianajopalkkioita.
      </P>
      <P>
        Jotta <Bi e="ille" /> toimitettu vaatimus voidaan ottaa käsiteltäväksi, se on tehtävä kirjallisesti ja siinä
        on oltava vähintään alla luetellut tiedot:
      </P>
      <ol className="mt-5 max-w-[68ch] border-t border-line text-base leading-[1.75] text-body">
        <Item>
          1. Niiden oikeuksien haltijan, joihin vedotaan, käsin kirjoitettu tai sähköinen allekirjoitus tai hänen
          puolestaan toimimaan asianmukaisesti valtuutetun asiamiehen allekirjoitus.
        </Item>
        <Item>2. Tarkka yksilöinti teoksesta tai sisällöstä, jolle suojaa vaaditaan.</Item>
        <Item>
          3. Kuvaus sivustolla julkaistusta riidanalaisesta elementistä, mukaan lukien sen sivun tarkka osoite, jolla
          se näkyy, sekä kaikki hyödylliset tarkennukset, joiden avulla <B /> voi löytää sen nopeasti estääkseen pääsyn
          siihen tai poistaakseen sen pysyvästi palvelimiltaan ja arkistoistaan.
        </Item>
        <Item>
          4. Pyynnön esittäjän täydelliset yhteystiedot, joiden avulla <B /> voi vastata hänelle, erityisesti nimi,
          postiosoite, puhelinnumero ja mahdollisuuksien mukaan sähköpostiosoite, josta hänet tavoittaa mahdollisimman
          pian.
        </Item>
        <Item>
          5. Lausuma, jossa pyynnön esittäjä vilpittömässä mielessä vakuuttaa, ettei riitautettua julkaisua ole
          sallinut oikeuksien haltija, hänen edustajansa eikä mikään asiaan sovellettava laki tai määräys.
        </Item>
        <Item>
          6. Vakuutus, jolla todistetaan annettujen tietojen paikkansapitävyys ja vahvistetaan seuraamusten uhalla,
          että pyynnön esittäjä on kyseisten oikeuksien haltija tai valtuutettu edustamaan tätä.
        </Item>
      </ol>
      <H2 id="identifiants-personnels">HENKILÖKOHTAISET TUNNUKSET</H2>
      <P>
        Tietyt sivuston toiminnot on varattu jäsenille, joilla on käyttäjätunnus ja salasana. Sinun vastuullasi on
        pitää nämä tiedot salassa ja valita vahva, vaikeasti arvattava salasana, jota et käytä missään muussa
        palvelussa. Tunnuksesi ovat ehdottoman henkilökohtaisia, eikä niitä saa koskaan lainata, jakaa tai myydä
        edelleen. Tilin luominen väärällä henkilöllisyydellä tai toisena henkilönä esiintyen on kielletty. Kaikkien
        tunnuksillasi suoritettujen toimien katsotaan olevan sinun suorittamiasi. Jos tunnuksesi katoavat tai
        varastetaan tai epäilet niiden luottamuksellisuuden vaarantuneen, ilmoita viipymättä <Bi e="ille" />, jotta
        tilisi voidaan suojata.
      </P>
      <H2 id="exclusions">VASTUUNRAJOITUKSET</H2>
      <P>
        Kaikki <Bi e="in" /> antamat sitoumukset sisältyvät tähän asiakirjaan. Mitään lisätakuuta, nimenomaista tai
        hiljaista, ei voida johtaa mistään muusta lähteestä, mukaan lukien suorituskyky, soveltuvuus tiettyyn
        käyttötarkoitukseen, yhteensopivuus tai virheettömyys.
      </P>
      <P>
        <B /> ei missään tapauksessa ole velvollinen korvaamaan välillistä vahinkoa riippumatta sen syystä tai
        esitetystä oikeudellisesta perusteesta (sopimusperusteinen, sopimuksenulkoinen, huolimattomuus tai muu). Jos{' '}
        <Bi e="in" /> vastuu todetaan, sen maksettavaksi tuleva korvaus ei voi ylittää summaa, jonka olet
        tosiasiallisesti maksanut riidan aiheuttaneesta palvelusta tai tuotteesta viimeisten kahdentoista kuukauden
        aikana.
      </P>
      <P>
        <B /> on määrittänyt hintansa ottaen huomioon edellä mainitut rajoitukset. Ne ovat sopimuksen tasapainon
        kannalta ratkaiseva tekijä, ja niitä sovelletaan myös siinä tapauksessa, että jokin muu ehto todettaisiin
        tehottomaksi tai se jäisi vaille vaikutusta.
      </P>
      <H2 id="loi-et-tribunaux">SOVELLETTAVA LAKI JA TUOMIOISTUIMET</H2>
      <P>
        Näihin ehtoihin sovelletaan Ranskan lakia, lukuun ottamatta lainvalintasääntöjä, jotka johtaisivat jonkin muun
        lainsäädännön soveltamiseen. Jos niiden tulkinnasta tai täytäntöönpanosta syntyy erimielisyyttä, osapuolet
        pyrkivät ensin sovinnolliseen ratkaisuun. Jos sopimukseen ei päästä, kaikki <Bi e="ia" /> vastaan nostettavat
        kanteet käsitellään sen kotipaikan toimivaltaisissa tuomioistuimissa.
      </P>
      <H2 id="sites-tiers">KOLMANSIEN OSAPUOLTEN SIVUSTOT</H2>
      <P>
        Sivustolla voi olla linkkejä ulkopuolisille sivuille, joita <B /> ei hallinnoi. <B /> ei osallistu näiden
        kolmansien osapuolten myyntiin eikä anna niille mitään takuuta. Nämä ulkopuoliset sivut voivat tarjota omia
        tuotteitaan. <B /> ei vastaa niiden sisällöstä, saatavuudesta, niiden sisältämistä linkeistä, päivityksistä
        tai toimintasäännöistä. <B /> ei takaa tarjouksia tai palveluita, jotka saatat tilata niiden kautta. Kehotamme
        sinua lukemaan huolellisesti kunkin sivuston omat ehdot. <B /> tarjoaa nämä linkit ainoastaan selaamisesi
        helpottamiseksi, eikä niiden olemassaolo merkitse millään tavoin <Bi e="in" /> hyväksyntää.
      </P>
      <H2 id="vie-privee">YKSITYISYYS</H2>
      <P>
        Tietojesi käsittely kuvataan tietosuojaselosteessamme, joka on erottamaton osa tätä tekstiä.
      </P>
      <H2 id="caractere-indicatif">SUUNTAA-ANTAVA LUONNE</H2>
      <P>
        Tällä sivustolla esitetyt tiedot ovat ainoastaan suuntaa-antavia, eivätkä ne ole kaupallinen tarjous.
      </P>
      <H2 id="mise-a-jour">TÄMÄN TEKSTIN PÄIVITTÄMINEN</H2>
      <P>
        <B /> pidättää itsellään oikeuden muuttaa tätä tekstiä milloin tahansa. Voimassa oleva versio on päivitetty
        25.&nbsp;lokakuuta 2026.
      </P>
      <H2 id="engagement">
        Sitoumus
      </H2>
      <P>
        Mikään tämän sivuston sisältö ei ole kehotus sijoittaa <Bi e="iin" />.
      </P>
      <HelpCard id="aide" heading={<>{BRAND_UPPER}-TUKI</>}>
        <P>
          <B /> on tavoitettavissa kirjallisesti 7 päivää viikossa: <Wa />
        </P>
      </HelpCard>
    </DocLayout>
  )
}
