import { WHATSAPP_DISPLAY } from '@/lib/site'
import type { FaqId, FaqText } from './Faq.data'
import { Install, Wa } from './Faq.links'

// Spec S14 suomeksi (samat linkit ja Downloader-koodit kuin ranskaksi).
// Compounds after a name take a non-breaking space before the hyphen (\u00a0 in strings, &nbsp; in JSX).
export const fi: Record<FaqId, FaqText> = {
  commander: {
    question: 'Miten tilaan King 365 TV -⁠paketin NovaStreamilta?',
    answer: (
      <p>
        Napsauta ”Osta nyt”&nbsp;-&#x2060;painiketta (se vie sinut suoraan tilauspakettiemme luo), valitse haluamasi kesto, täytä tietosi
        ja vahvista tilauksesi tiimimme kanssa WhatsAppissa (<Wa>wa.me/33751299176</Wa>), niin aktivointi tapahtuu heti.
      </p>
    ),
  },
  delai: {
    question: 'Kuinka nopeasti saan tilauskoodini?',
    answer: (
      <p>
        Aukioloaikoinamme tunnuksesi lähetetään WhatsAppiin ja sähköpostiin lähes heti maksun vahvistamisen jälkeen (yleensä
        10–20 minuutissa). Ruuhka-aikoina käsittely voi kestää enintään 1–2 tuntia (sähköpostitse enintään 6 tuntia).
      </p>
    ),
  },
  email: {
    question: 'En saanut sähköpostia luvatussa ajassa – pitääkö minun huolestua?',
    answer: (
      <p>
        Ei, ei hätää. Lähetämme koodeja klo 9.00–22.00 (GMT+1). Jos roskapostikansiossakaan ei näy mitään, ota yhteyttä NovaStreamin
        tiimiin WhatsAppissa (<Wa>{WHATSAPP_DISPLAY}</Wa>): asiakasneuvoja lähettää sinulle tunnuksesi ja hoitaa asian heti kuntoon.
      </p>
    ),
  },
  'autres-apps': {
    question: 'Voinko käyttää King 365 TV -⁠tilaustani muissa IPTV-sovelluksissa?',
    answer: (
      <p>
        Kyllä, ehdottomasti! Virallisten King&nbsp;365&nbsp;-&#x2060;sovellusten lisäksi NovaStream suosittelee lämpimästi erinomaisia
        maksullisia soittimia, kuten IBO Player, IBO Player Smarter, Hot Player tai Bob Player, niiden huomattavan sujuvan toiston
        vuoksi. Voit käyttää myös sovelluskaupoista löytyviä ilmaisia sovelluksia, kuten IPTV Smarters Pro tai Smarters Lite.
      </p>
    ),
  },
  renouveler: {
    question: 'Miten uusin King 365 TV -⁠tilaukseni NovaStreamilla?',
    answer: (
      <p>
        Valitse uusimisvaihtoehto, kerro laitteesi, rastita uusimisruutu ja ilmoita nykyinen käyttäjätunnuksesi – tai napsauta
        suoraan <Wa>WhatsApp-linkkiämme</Wa>. Tukemme lähettää sinulle maksutiedot: heti kun lähetät kuvakaappauksen (kuitin),
        tilaustasi jatketaan muutamassa minuutissa, ja saat vahvistuksen WhatsAppiin ja sähköpostiin.
      </p>
    ),
  },
  'memes-identifiants': {
    question: 'Voinko uusia tilauksen ja säilyttää täsmälleen samat tunnukset?',
    answer: (
      <p>
        Jos teit alkuperäisen tilauksesi NovaStreamin sivustolla, kyllä: jatkamme nykyisiä tunnuksiasi suoraan muuttamatta mitään.
        Jos aiempi tilauksesi oli kuitenkin toiselta myyjältä tai jälleenmyyjältä, saat meiltä uudet viralliset NovaStream-tunnukset,
        jotka syötät soittimeesi.
      </p>
    ),
  },
  'telecharger-v3': {
    question: 'Miten lataan King 365 TV Box V3 -⁠sovelluksen (APK)?',
    answer: (
      <p>
        Siirry suoraan latausosioomme <Install>napsauttamalla tästä</Install> (heti yllä tällä sivulla), syötä version 3 uusi
        virallinen Downloader-koodi (283367) ja seuraa yksityiskohtaisia ohjeitamme.
      </p>
    ),
  },
  'telecharger-v4': {
    question: 'Miten lataan ja asennan King 365 TV:n version 4 (V4), ja mistä löydän virallisen linkin?',
    answer: (
      <p>
        <Install>Napsauta tästä</Install> avataksesi virallisen asennusoppaamme. Versio 4 (Downloader-koodi: 2763945) on suunniteltu
        Android TV&nbsp;-&#x2060;televisioille, uusille Google TV&nbsp;-&#x2060;laitteille, Android-TV-bokseille ja Amazon Fire TV Stick&nbsp;-&#x2060;laitteille,
        joissa toimii Downloader-sovellus (paitsi toisen sukupolven Fire TV Stick HD, jossa on APK-tiedostot estävä suljettu Vega
        OS&nbsp;-&#x2060;järjestelmä).
      </p>
    ),
  },
  'versions-officielles': {
    question: 'Tärkeä tiedote: mitkä viralliset King 365 TV -⁠versiot pitää asentaa ja mitkä vanhat koodit poistaa?',
    answer: (
      <>
        <p>
          Välttääksesi katkokset, kirjautumisvirheet ja käyttöongelmat älä enää lataa vanhoja, vanhentuneita versioita. Suosittelemme
          vahvasti asentamaan laitteeseesi kaikki 3 uutta virallista versiota (V2, V3 ja V4), jotta palvelu toimii keskeytyksettä ja
          sinulla on heti vaihtoehto, jos jokin palvelin on huollossa:
        </p>
        <p className="font-semibold text-heading">✅ Asennettavat uudet viralliset versiot:</p>
        <ul className="grid gap-1">
          <li>• Versio 2 (V2): Downloader-koodi 756917</li>
          <li>• Versio 3 (V3): Downloader-koodi 283367</li>
          <li>• Versio 4 (V4): Downloader-koodi 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Vanhat, vanhentuneet versiot, joita tulee ehdottomasti välttää (poista ne):</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  pays: {
    question: 'Toimiiko King 365 TV -⁠tilaus Ranskassa, Kanadassa, Belgiassa ja ulkomailla?',
    answer: (
      <p>
        Kyllä, tilaus toimii kaikkialla maailmassa, kunhan sinulla on internetyhteys (Ranska, Kanada, Belgia, Sveitsi, Algeria,
        Tunisia, Marokko jne.).
      </p>
    ),
  },
  'multi-ecrans': {
    question: 'Voinko käyttää tilaustani usealla laitteella tai saada usean näytön tarjouksen?',
    answer: (
      <p>
        Tilauksesi on henkilökohtainen, eikä sitä voi jakaa samanaikaisesti: se sallii yhden aktiivisen näytön kerrallaan. Voit
        asentaa sen kahteen laitteeseen ja käyttää niitä vuorotellen (ei koskaan samaan aikaan, jotta vältyt estoilta). Jos haluat
        katsoa usealla näytöllä samanaikaisesti, <Wa>ota yhteyttä NovaStreamiin</Wa> ja hyödynnä tarjouksiamme erillisistä
        lisätilauksista.
      </p>
    ),
  },
  'sans-parabole': {
    question: 'Voinko ostaa King 365 TV:n ilman satelliittiantennia?',
    answer: (
      <p>
        Ehdottomasti! King&nbsp;365&nbsp;TV&nbsp;-&#x2060;IPTV-palvelu toimii 100 % internetin kautta, ilman satelliittiantennia. Riittää, että sinulla
        on vakaa laajakaistayhteys (suosittelemme vähintään 30 Mbps sujuvaan 4K HDR&nbsp;-&#x2060;katseluun).
      </p>
    ),
  },
  'televiseur-ancien': {
    question: 'Minulla on vanha televisio – mitä ratkaisua suosittelette?',
    answer: (
      <p>
        Television nykyaikaistamiseksi NovaStream suosittelee Googlen sertifioimaa Android-TV-boksia (Google Certified), kuten Xiaomi
        Mi Box, Mecool tai RockTek, tai mitä tahansa muuta Android-boksia, jossa on hyvät tekniset ominaisuudet (runsaasti
        RAM-muistia ja tehokas suoritin), jotta käyttö on erittäin sujuvaa.
      </p>
    ),
  },
  confiance: {
    question: 'Mistä tiedän, että NovaStream on luotettava valtuutettu jälleenmyyjä, johon voin luottaa täysin?',
    answer: (
      <p>
        NovaStream on tunnettu valtuutettu jälleenmyyjä, jolla on yli 3 vuoden kokemus ja kymmeniätuhansia uskollisia tilaajia.
        Palvelumme on tarkasti järjestetty ja läpinäkyvä: valmistelemme ja aktivoimme usein asiakkaidemme tunnukset jo ennen maksua
        osoituksena luottamuksestamme ja luotettavuudestamme.
      </p>
    ),
  },
  essai: {
    question: 'Voinko kokeilla palveluanne ennen maksamista (kokeilujakso)?',
    answer: (
      <p>
        Kyllä, joissakin tapauksissa tarjoamme 3 tunnin tai 24 tunnin kokeilun, jonka jälkeen voit tehdä 6 tai 12 kuukauden tilauksen.{' '}
        <strong className="font-semibold text-heading">Tärkeää:</strong> Kokeiluja ei myönnetä suurten otteluiden ja merkittävien
        kilpailuiltojen aikana, jotta voimme yhteistyössä King 365 TV:n kanssa taata palvelimen parhaan mahdollisen vakauden
        aktiivisille tilaajillemme.
      </p>
    ),
  },
  chaines: {
    question: 'Mitä kanavia tilaukseen sisältyy?',
    answer: (
      <p>
        Saat käyttöösi valtavan valikoiman kanavia eri puolilta maailmaa: Ranska, Iso-Britannia, Yhdysvallat, Kanada, Belgia,
        Sveitsi, Maghreb, Afrikka ja Eurooppa – mukana kaikki urheilu-, uutis-, elokuva-, sarja-, lasten- ja dokumenttipaketit sekä
        +16 000 VOD-elokuvaa ja -sarjaa ja Replay jopa 15 päivän ajalta.
      </p>
    ),
  },
  'ibo-expire': {
    question: 'IBO Player (tai Hot Player / Bob Player) ilmoittaa, että aktivointi on vanhentunut – mitä teen?',
    answer: (
      <p>
        IBO Player, IBO Player Smarter, Hot Player ja Bob Player ovat itsenäisiä maksullisia soittimia, jotka vaativat aktivoinnin
        kokeilujakson jälkeen. Asenna Androidilla maksuton virallinen King&nbsp;365&nbsp;TV&nbsp;-&#x2060;sovelluksemme, niin vältät nämä maksut. Jos
        sinulla ei ole Android-televisiota (esim. Samsungin tai LG:n Smart TV), NovaStream aktivoi soittimesi suoraan hintaan noin
        8 € / vuosi: ota yhteyttä tukeemme <Wa>WhatsAppissa</Wa>.
      </p>
    ),
  },
  'licence-payante': {
    question: '9Xtream- tai IPTV Smarters Pro -⁠sovellus pyytää maksua tai ilmoittaa, että aktivointini on vanhentunut?',
    answer: (
      <p>
        9Xtream ja jotkin IPTV Smarters Pro&nbsp;-&#x2060;versiot ovat maksullisia palveluita, jotka vaativat ohjelmistolisenssin. Käytä
        virallisia King&nbsp;365&nbsp;TV&nbsp;-&#x2060;sovelluksiamme (V2, V3, V4) maksutta Android TV&nbsp;-&#x2060;laitteilla / bokseilla tai ota yhteyttä{' '}
        <Wa>WhatsApp-tukeemme</Wa>, niin aktivoimme yhteensopivan maksullisen sovelluksen muille näytöillesi.
      </p>
    ),
  },
  'failed-to-authorize': {
    question: 'TIEDOTE LG- ja SAMSUNG-käyttäjille: Smarters-sovellus näyttää virheen ”Failed to authorize” – mitä teen?',
    answer: (
      <>
        <p>
          Vanhassa Smarters-sovelluksessa on tällä hetkellä käyttövirhe (virhe: ”Failed to authorize”). Ei hätää: kyse ei ole
          palvelimistamme vaan itse sovelluksesta.
        </p>
        <p>
          ⬇️ Ratkaisu: kehittäjät pyytävät siirtymään uuteen versioon. Lataa uusi Smarters Pro&nbsp;-&#x2060;versio television
          sovelluskaupasta: nykyiset tunnuksesi pysyvät täsmälleen samoina.
        </p>
      </>
    ),
  },
  'lien-serveur': {
    question: 'Palvelinlinkki ei toimi, kun syötän tietoni – miksi?',
    answer: (
      <p>
        Taatakseen parhaan mahdollisen turvallisuuden ja vakauden NovaStream uusii ja päivittää palvelinlinkkejään säännöllisesti
        (jakamatta niitä julkisesti). Tarkista, että linkki alkaa http://, ja ota yhteyttä tukeemme WhatsAppissa
        (<Wa>{WHATSAPP_DISPLAY}</Wa>), niin saat päivitetyn linkin heti.
      </p>
    ),
  },
}
