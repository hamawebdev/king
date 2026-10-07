import { FaqList, Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { BRAND, BRAND_UPPER } from '@/lib/site'
import { FaqRow } from './Faq.parts'

const FAQ_HEAD = {
  eyebrow: `Aide ${BRAND_UPPER}`,
  titleStart: 'Vos Questions Fréquentes – ',
  titleBlue: BRAND_UPPER,
  text: `Tout ce qu’il faut savoir avant, pendant et après la commande de votre formule ${BRAND} Premium.`,
}

const FAQ: { q: string; a: string }[] = [
  {
    q: `Comment commander une formule ${BRAND} en ligne ?`,
    a: 'Sélectionnez une durée dans la grille tarifaire, ajoutez-la au panier puis réglez en ligne par carte ou par virement. Vos codes arrivent ensuite par e-mail, avec un mode d’emploi.',
  },
  {
    q: 'Dans quel délai mes identifiants me sont-ils envoyés ?',
    a: 'Comptez en général une vingtaine de minutes, et jamais plus de quelques heures en période chargée. Un horodatage visible dans votre compte client confirme le moment exact où vos codes sont partis.',
  },
  {
    q: 'Le message de confirmation n’est pas arrivé, que dois-je faire ?',
    a: 'Les envois manuels ont lieu de 08:30 à 21:30 ; une commande passée la nuit est donc traitée le lendemain matin. Jetez un œil à votre dossier de courriers indésirables et à votre compte client. Toujours rien ? Un message sur notre messagerie suffit : un conseiller retrouvera votre commande en quelques minutes.',
  },
  {
    q: `Mes codes ${BRAND} marchent-ils aussi avec des logiciels IPTV tiers ?`,
    a: 'Oui. Chaque commande s’accompagne d’un lien de liste M3U et de codes Xtream, deux formats lus par la quasi-totalité des logiciels IPTV. Pour profiter du guide des programmes et du rattrapage sans réglage, notre lecteur maison reste toutefois le plus pratique.',
  },
  {
    q: 'Plus aucune chaîne ne se lance sur mon appareil, que faire ?',
    a: 'Commencez par redémarrer votre appareil et votre box Internet. Si l’écran reste noir, rendez-vous dans votre compte client, rubrique « Mes accès », et générez un nouveau jeu d’identifiants en quelques secondes ; notre équipe reste joignable si le souci persiste malgré tout après cette manipulation.',
  },
  {
    q: `Que faire quand mon abonnement ${BRAND} expire ?`,
    a: 'Ouvrez la page de renouvellement accessible depuis le menu principal. Indiquez le type d’appareil, cochez l’option de prolongation, ajoutez votre identifiant actuel, validez le panier puis réglez votre commande : la durée achetée s’ajoute simplement à celle qui reste.',
  },
  {
    q: `Où trouver le fichier d’installation du lecteur ${BRAND_UPPER} ?`,
    a: 'Le fichier d’installation se trouve sur notre page de téléchargement, accompagné d’un pas-à-pas détaillé pour chaque type d’appareil.',
  },
  {
    q: 'Mes chaînes restent-elles disponibles lors d’un séjour hors de France ?',
    a: 'Absolument : en voyage comme à la maison, il suffit d’un accès Internet stable pour retrouver vos chaînes.',
  },
  {
    q: 'Est-il possible de regarder sur plusieurs écrans de la maison ?',
    a: 'L’installation est possible sur autant d’appareils que souhaité ; en revanche, un seul flux peut être lu à la fois. Gardez vos codes pour vous.',
  },
  {
    q: 'Faut-il une parabole ou une antenne pour profiter du service ?',
    a: 'Pas du tout ! Tout passe par votre box Internet, sans aucun équipement sur le toit ni décodeur satellite. Prévoyez simplement un débit d’au moins 5 Mbps pour une lecture fluide.',
  },
  {
    q: 'Mon téléviseur est ancien, existe-t-il une solution ?',
    a: 'Un petit boîtier Android branché sur le port HDMI suffit pour rendre votre ancien écran compatible. Sur simple demande, notre équipe vous suggère un modèle abordable et vraiment très simple à configurer au quotidien.',
  },
  {
    q: 'Existe-t-il d’autres logiciels de lecture que vous appréciez ?',
    a: 'Différents logiciels du marché donnent de très bons résultats avec nos flux ; notre comparatif en ligne détaille leurs atouts comme leurs limites respectives.',
  },
  {
    q: 'Mon téléviseur connecté est-il compatible avec vos codes ?',
    a: 'La liste des lecteurs compatibles avec chaque marque de téléviseur figure dans notre tutoriel dédié.',
  },
  {
    q: 'Une clé HDMI de streaming suffit-elle pour regarder ?',
    a: 'Tout à fait. Ces petites clés font tourner nos flux sans difficulté, et un tutoriel illustré vous accompagne.',
  },
  {
    q: 'Boîtier Android ou clé HDMI : quel équipement privilégier ?',
    a: 'Notre préférence va au boîtier Android standard, plus ouvert : le choix de lecteurs y est bien plus vaste et leur mise en place se fait en un clin d’œil.',
  },
  {
    q: 'Le lecteur refuse ma connexion et affiche un message « accès expiré »',
    a: 'Ce message signale des codes périmés : demandez-en de nouveaux dans votre compte, puis mettez à jour le lecteur.',
  },
  {
    q: 'Existe-t-il un essai gratuit avant de passer commande ?',
    a: `Oui, un accès test gratuit permet de découvrir le service ; il se lance depuis le lecteur ${BRAND} PLAY.`,
  },
  {
    q: 'Une version d’essai plus longue est-elle envisageable ?',
    a: 'Tout à fait : une formule découverte de courte durée existe aussi, à commander en ligne en quelques clics.',
  },
  {
    q: 'Quels bouquets sont inclus ?',
    a: 'Vous trouverez des grilles généralistes et thématiques de nombreuses régions : francophonie, Europe, Amérique du Nord, Afrique, ainsi que du sport, de l’info, du cinéma et des dessins animés.',
  },
  {
    q: 'Un message de fin de licence bloque mon lecteur externe',
    a: 'Plusieurs lecteurs du marché fonctionnent sur abonnement : une fois la période offerte écoulée, leur éditeur exige un règlement. Notre propre lecteur n’entraîne aucun frais et s’installe en quelques minutes sur tout appareil Android.',
  },
  {
    q: 'Un lecteur tiers bloque l’accès aux films et séries tant que je ne paie pas',
    a: 'Cette option est vendue par l’éditeur du lecteur, pas par nous. Notre lecteur maison donne accès au catalogue complet sans supplément.',
  },
  {
    q: 'Mon logiciel de lecture réclame un renouvellement de sa licence',
    a: `La licence de ce logiciel dépend uniquement de son éditeur. Pour ne plus vous en soucier, basculez vers le lecteur ${BRAND} PLAY, offert à tous nos abonnés Android.`,
  },
  {
    q: `Comment obtenir le lecteur ${BRAND_UPPER} PLAY ?`,
    a: 'Rendez-vous dans la rubrique Télécharger du menu : le fichier pour Android y est proposé en accès libre.',
  },
]

/** French typography: no-break space before ? ! : ; » – and after «, so punctuation never orphans onto its own line. */
function fr(text: string) {
  return text.replace(/ ([?!:;»–])/g, '\u00a0$1').replace(/« /g, '«\u00a0')
}

/**
 * FAQ (DIRECTION §9, row 17): split on paper (5/7 from lg so the 52px NOVASTREAM never breaks mid-word), the head sticky from lg, the 22 questions as hairline
 * rows: heading + aria-expanded button, answers kept in the DOM behind hidden="until-found". The first
 * answer is open so the reading pattern is visible at once.
 */
export function HomeFaq() {
  return (
    <Section
      zone="paper"
      dataSection="home-faq"
      aria-labelledby="home-faq-title"
      containerClassName="grid gap-y-head lg:grid-cols-12 lg:gap-x-grid"
    >
      <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pr-10 xl:pr-16">
        <Reveal>
          <SectionHead
            id="home-faq-title"
            eyebrow={FAQ_HEAD.eyebrow}
            title={
              <>
                {fr(FAQ_HEAD.titleStart)}
                <Kw>{FAQ_HEAD.titleBlue}</Kw>
              </>
            }
            lead={FAQ_HEAD.text}
          />
        </Reveal>
      </div>
      <FaqList className="lg:col-span-7 lg:col-start-6">
        {FAQ.map((item, i) => (
          <FaqRow key={item.q} question={fr(item.q)} defaultOpen={i === 0}>
            {fr(item.a)}
          </FaqRow>
        ))}
      </FaqList>
    </Section>
  )
}
