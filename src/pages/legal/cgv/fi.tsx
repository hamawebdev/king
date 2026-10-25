import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from '../shared'
import { PackList } from '../PackList'

// Yleiset myyntiehdot (Conditions générales de vente): four packs, orders and payment arranged 1-to-1 on WhatsApp.
export function CgvFi() {
  return (
    <DocLayout
      title="Yleiset myyntiehdot"
      lead={
        <p>
          Myynti {BRAND}-palvelussa. Tämän sivuston tiedot tarkistetaan usein, jotta ne vastaavat tarjoustemme
          nykytilaa.
        </p>
      }
    >
      <H2 id="formules">Tarjolla olevat paketit</H2>
      <P>
        {BRAND}, valtuutettu King 365 TV&nbsp;-jälleenmyyjä, tarjoaa neljä tilauspakettia ilman piilotettua
        sitoutumista. Ilmoitettu hinta kattaa paketin koko keston:
      </P>
      <PackList />
      <H2 id="commande">Tilaus</H2>
      <P>
        Kaikki tilaukset, uusimiset ja aktivoinnit tehdään suoraan {BRAND}in asiakasneuvojan kanssa:{' '}
        <Wa />. Asiakasneuvoja vahvistaa kanssasi valitun paketin ja laitteen, johon palvelu otetaan käyttöön, ennen
        maksua.
      </P>
      <H2 id="modes-de-reglement">Hyväksytyt maksutavat</H2>
      <P>
        Maksusta sovitaan asiakasneuvojasi kanssa WhatsAppissa, ja se suoritetaan PayPalilla (ostajansuojalla) tai
        SEPA-pikasiirtona. Sivustolle ei syötetä eikä sivustolla säilytetä maksukorttitietoja.
      </P>
      <P>
        Tiettyjen maksupalveluntarjoajien perimät maksut jäävät sinun maksettaviksesi, eikä niitä palauteta
        peruutuksen yhteydessä.
      </P>
      <H2 id="activation">Aktivointi</H2>
      <P>
        Tunnuksesi (Xtream API&nbsp;-koodit ja M3U-linkki) lähetetään sinulle WhatsAppissa ja sähköpostitse heti, kun
        maksu on vahvistettu: yleensä alle 10–20 minuutissa aukioloaikojemme aikana ja ruuhka-aikoina jopa 1–2
        tunnissa.
      </P>
      <H2 id="fiabilite">Luotettavuus</H2>
      <P>
        Tiimimme valvoo alustan saatavuutta ympäri vuorokauden. Internetyhteytesi laadusta tai laitteistostasi
        johtuvat katkokset ovat hallintamme ulkopuolella, eikä niitä voida lukea meidän vastuullemme. Teemme kaikkemme
        varmistaaksemme vakaan lähetyksen. Nämä ulkoiset häiriöt eivät oikeuta minkäänlaiseen rahanpalautukseen.
      </P>
      <H2 id="support">Tuki</H2>
      <P>
        Tiimimme vastaa WhatsAppissa 7 päivää viikossa ja auttaa sinua maksutta laitteesi tai televisiosi
        määrittämisessä.
      </P>
      <H2 id="annulation">Peruutus / rahanpalautuksen säännöt</H2>
      <P>
        Peruutus- ja rahanpalautusehdot (14 päivän tekninen takuu ja palautustaulukko) määritellään{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          palautuskäytännössämme
        </Link>
        , joka yksin on ratkaiseva. Kaikki pyynnöt tehdään kirjallisesti WhatsAppissa, ja niissä on mainittava tilattu
        paketti.
      </P>
      <P>
        Joissakin tapauksissa ennen tilaamista on saatavilla 3 tunnin tai 24 tunnin kokeilu. Jos kohtaat teknisiä
        ongelmia, tiimimme on käytettävissäsi WhatsAppissa.
      </P>
      <H2 id="interdits">Kielletyt toimet</H2>
      <P>
        Tunnustesi jakaminen muille henkilöille on kielletty. Yhdellä koodilla voi olla yksi aktiivinen näyttö
        kerrallaan: saman käyttöoikeuden samanaikainen käyttö useilla laitteilla, kuten myös palvelun
        edelleenlähettäminen missä tahansa muodossa, johtaa tilauksen välittömään irtisanomiseen ilman minkäänlaista
        rahanpalautusta.
      </P>
      <H2 id="donnees-personnelles">Henkilötietojesi suoja</H2>
      <P>
        Sinua koskevia tietoja ei luovuteta kumppaneille. Nimettömyytesi ja yksityisyytesi ovat meille ehdoton
        prioriteetti.
      </P>
      <P>
        Tilitietoja ja yhteystilastoja käytetään ainoastaan sisäisiin analyyseihin, joiden tarkoituksena on mitoittaa
        palvelimemme ja parantaa jatkuvasti tarjoamamme palvelun laatua.
      </P>
    </DocLayout>
  )
}
