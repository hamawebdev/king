import type { TestimonialsCopy } from './Testimonials.data'

// Compounds after a name (King 365 -käyttöoikeus) use \u00a0 before the hyphen so they never break.
export const fi: TestimonialsCopy = {
  head: {
    eyebrow: 'VAHVISTETUT ASIAKASKOKEMUKSET · NOVASTREAM-ELÄMYS',
    title: 'Mitä King 365 TV:n katsojat sanovat NovaStreamista',
    subtitle:
      'Lue aitoja kokemuksia katsojilta, jotka valitsivat NovaStreamin valtuutetuksi jälleenmyyjäkseen aktivoimaan tilauksensa ja huolehtimaan siitä viikosta toiseen.',
  },
  trustStats: [
    { value: '4,9 / 5', label: 'NovaStreamin kokonaisarvio', stars: true },
    { value: '+50 000', label: 'Tuettua ja uskollista tilaajaa' },
    { value: '99 %', label: 'Suosittelee NovaStreamin tukea' },
  ],
  reviews: [
    {
      badge: 'NovaStreamin nopeus',
      quote:
        '”Tilasin King 365 TV -⁠tilaukseni suoraan NovaStreamilta WhatsAppissa. Uskomattoman nopea vastaus: alle 3 minuuttia tilisiirtoni jälkeen NovaStreamin asiakasneuvoja oli jo lähettänyt koodini, ja kaikki toimi.”',
      meta: 'Lyon, Ranska · helmikuu 2026',
    },
    {
      badge: 'Apu ja ystävällisyys',
      quote:
        '”Koska en ole kovin hyvä tekniikan kanssa, pelkäsin, etten osaisi asentaa sovellusta Samsung-televisiooni. NovaStreamin tuki oli huomattavan kärsivällinen: he aktivoivat IBO Player -⁠soittimeni etänä vaihe vaiheelta. Todella inhimillistä palvelua!”',
      meta: 'Québec, Kanada · tammikuu 2026',
    },
    {
      badge: 'Vakaus ja NovaStream-DNS',
      quote:
        '”Kokeilin useita jälleenmyyjiä ennen kuin löysin NovaStreamin. Heidän Pack Signature -⁠paketillaan (59,99 €) ja NovaStreamin omalla DNS:llä katson kaikki suuret ottelut 4K-laadussa 60 FPS:llä King 365 V4 -⁠sovelluksessa ilman ainuttakaan katkosta.”',
      meta: 'Namur, Belgia · joulukuu 2025',
    },
    {
      badge: 'Luottamus ja läpinäkyvyys',
      quote:
        '”Arvostan NovaStreamissa suoruutta ja luotettavuutta. Valtuutettuna jälleenmyyjänä he eivät pyydä pankkikorttia sivustolla, PayPal-maksu on turvallinen ja hinnat ovat selkeät. Heihin tuntee luottamusta heti.”',
      meta: 'Bordeaux, Ranska · maaliskuu 2026',
    },
    {
      badge: 'Elokuvia edulliseen hintaan',
      quote:
        '”Siitä lähtien kun siirryimme NovaStreamiin, perheen yhteiset illat ovat todella muuttuneet. King 365 -⁠valikoima on valtava (+16 000 elokuvaa ja sarjaa 4K/FHD-laadussa), jatkamme jaksoja siitä, mihin jäimme, ja hinta säästää meiltä omaisuuden.”',
      meta: 'Toulouse, Ranska · helmikuu 2026',
    },
    {
      badge: 'Uskollisuus ja tuki',
      quote:
        '”Uusin King 365 -⁠käyttöoikeuteni NovaStreamin tiimin kautta jo toista vuotta. Yksi viesti heidän WhatsAppiinsa, ja koodiani jatkettiin 12 kuukaudella muutamassa sekunnissa – suosikkini Android-boksillani säilyivät.”',
      meta: 'Geneve, Sveitsi · tammikuu 2026',
    },
  ],
  pills: [
    { emoji: '✨', label: '4K HDR -⁠kuva' },
    { emoji: '⚡', label: 'Pikakanavanvaihto' },
    { emoji: '🛡️', label: 'NovaStream-DNS-välitys' },
    { emoji: '💶', label: 'Erittäin edullinen hinta' },
    { emoji: '🎬', label: '+16 000 elokuvaa ja sarjaa' },
    { emoji: '💬', label: 'NovaStream-tuki < 2 min' },
    { emoji: '📱', label: 'Kaikki näytöt' },
    { emoji: '⏪', label: '15 päivän jälkikatselu' },
  ],
  ui: {
    rating: 'Arvio: 5/5',
    screenshotAlt: (name) => `WhatsApp-kuvakaappaus arviosta – ${name}`,
    screenshotPlaceholder: 'WhatsApp-kuvakaappaus',
    reviewsLabel: 'NovaStreamin asiakasarviot',
    pillsLabel: 'NovaStreamin vahvuudet',
  },
}
