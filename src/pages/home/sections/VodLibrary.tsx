import { Check } from 'lucide-react'
import { Card, Pill, Section, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/** Spec S9 (p. 9–10), copy word for word (French source; other languages mirror it). */
const fr = {
  eyebrow: 'CINÉMA & SÉRIES À LA DEMANDE · VOD ILLIMITÉE',
  title: 'Vidéothèque King\u00a0365\u00a0TV par NovaStream',
  subtitle:
    "Plus de 16 000 titres en ultra haute définition intégrés sans surcoût dans votre abonnement King 365 TV. Découvrez ce que l'accès King 365 TV me permet d'explorer chaque soir : blockbusters récents, intégrales de séries et documentaires exclusifs classés par genre.",
  pills: ['Qualité 4K & FHD Native', 'Audio VF & VOSTFR', 'Mises à Jour Hebdomadaires', 'Sorties Box-Office Récentes'],
  genres: [
    { name: 'Action & Aventure', count: '+2 500' },
    { name: 'Comédie & Divertissement', count: '+2 000' },
    { name: 'Drame & Thriller', count: '+2 200' },
    { name: 'Sci-Fi & Fantasy', count: '+1 400' },
    { name: 'Horreur & Épouvante', count: '+1 100' },
    { name: 'Romance & Passion', count: '+1 300' },
    { name: 'Animation & Jeunesse', count: '+1 000' },
    { name: 'Documentaires & Société', count: '+900' },
  ],
  titlesUnit: 'Titres',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'MOVIES & SERIES ON DEMAND · UNLIMITED VOD',
    title: 'The King 365 TV Video Library by NovaStream',
    subtitle:
      'More than 16,000 titles in ultra high definition, included at no extra cost in your King 365 TV subscription. Discover what your King 365 TV access lets you explore every evening: recent blockbusters, complete series and exclusive documentaries sorted by genre.',
    pills: [
      'Native 4K & FHD Quality',
      'French Audio & Subtitled Originals',
      'Weekly Updates',
      'Latest Box Office Releases',
    ],
    genres: [
      { name: 'Action & Adventure', count: '+2,500' },
      { name: 'Comedy & Entertainment', count: '+2,000' },
      { name: 'Drama & Thriller', count: '+2,200' },
      { name: 'Sci-Fi & Fantasy', count: '+1,400' },
      { name: 'Horror & Terror', count: '+1,100' },
      { name: 'Romance & Passion', count: '+1,300' },
      { name: 'Animation & Kids', count: '+1,000' },
      { name: 'Documentaries & Society', count: '+900' },
    ],
    titlesUnit: 'Titles',
  },
  de: {
    eyebrow: 'FILME & SERIEN AUF ABRUF · UNBEGRENZTES VOD',
    title: 'Die King 365 TV Videothek von NovaStream',
    subtitle:
      'Mehr als 16.000 Titel in Ultra-HD, ohne Aufpreis in Ihrem King 365 TV Abonnement enthalten. Entdecken Sie, was Ihnen Ihr King 365 TV Zugang jeden Abend zu bieten hat: aktuelle Blockbuster, komplette Serien und exklusive Dokumentationen, sortiert nach Genre.',
    pills: [
      'Native 4K- & FHD-Qualität',
      'Französischer Ton & OmU',
      'Wöchentliche Updates',
      'Aktuelle Kinohits',
    ],
    genres: [
      { name: 'Action & Abenteuer', count: '+2.500' },
      { name: 'Komödie & Unterhaltung', count: '+2.000' },
      { name: 'Drama & Thriller', count: '+2.200' },
      { name: 'Sci-Fi & Fantasy', count: '+1.400' },
      { name: 'Horror & Grusel', count: '+1.100' },
      { name: 'Romantik & Leidenschaft', count: '+1.300' },
      { name: 'Animation & Kinder', count: '+1.000' },
      { name: 'Dokumentationen & Gesellschaft', count: '+900' },
    ],
    titlesUnit: 'Titel',
  },
  es: {
    eyebrow: 'CINE Y SERIES A LA CARTA · VOD ILIMITADO',
    title: 'Videoteca King 365 TV de NovaStream',
    subtitle:
      'Más de 16.000 títulos en ultra alta definición incluidos sin coste adicional en tu suscripción King 365 TV. Descubre lo que tu acceso King 365 TV te permite explorar cada noche: éxitos de taquilla recientes, series completas y documentales exclusivos clasificados por género.',
    pills: [
      'Calidad 4K y FHD nativa',
      'Audio en francés y V.O. subtitulada',
      'Actualizaciones semanales',
      'Estrenos recientes de taquilla',
    ],
    genres: [
      { name: 'Acción y aventura', count: '+2.500' },
      { name: 'Comedia y entretenimiento', count: '+2.000' },
      { name: 'Drama y thriller', count: '+2.200' },
      { name: 'Ciencia ficción y fantasía', count: '+1.400' },
      { name: 'Terror y miedo', count: '+1.100' },
      { name: 'Romance y pasión', count: '+1.300' },
      { name: 'Animación e infantil', count: '+1.000' },
      { name: 'Documentales y sociedad', count: '+900' },
    ],
    titlesUnit: 'títulos',
  },
  pt: {
    eyebrow: 'CINEMA E SÉRIES A PEDIDO · VOD ILIMITADO',
    title: 'Videoteca King 365 TV pela NovaStream',
    subtitle:
      'Mais de 16.000 títulos em ultra-alta definição incluídos sem custos adicionais na sua subscrição King 365 TV. Descubra o que o seu acesso King 365 TV lhe permite explorar todas as noites: blockbusters recentes, séries completas e documentários exclusivos organizados por género.',
    pills: [
      'Qualidade 4K e FHD nativa',
      'Áudio em francês e V.O. legendada',
      'Atualizações semanais',
      'Estreias recentes de bilheteira',
    ],
    genres: [
      { name: 'Ação e aventura', count: '+2.500' },
      { name: 'Comédia e entretenimento', count: '+2.000' },
      { name: 'Drama e thriller', count: '+2.200' },
      { name: 'Ficção científica e fantasia', count: '+1.400' },
      { name: 'Horror e terror', count: '+1.100' },
      { name: 'Romance e paixão', count: '+1.300' },
      { name: 'Animação e infantil', count: '+1.000' },
      { name: 'Documentários e sociedade', count: '+900' },
    ],
    titlesUnit: 'títulos',
  },
  fi: {
    eyebrow: 'ELOKUVAT JA SARJAT TILAUKSESTA · RAJATON VOD',
    title: 'NovaStreamin King 365 TV -⁠videokirjasto',
    subtitle:
      'Yli 16 000 nimikettä ultrateräväpiirtona ilman lisämaksua King 365 TV -⁠tilauksessasi. Katso, mitä King 365 TV -⁠käyttöoikeutesi antaa sinun tutkia joka ilta: tuoreita menestyselokuvia, kokonaisia sarjoja ja eksklusiivisia dokumentteja lajityypeittäin.',
    pills: [
      'Natiivi 4K- ja FHD-laatu',
      'Ranskankielinen ääni ja tekstitetyt versiot',
      'Viikoittaiset päivitykset',
      'Tuoreet elokuvateatterihitit',
    ],
    genres: [
      { name: 'Toiminta ja seikkailu', count: '+2 500' },
      { name: 'Komedia ja viihde', count: '+2 000' },
      { name: 'Draama ja trilleri', count: '+2 200' },
      { name: 'Sci-fi ja fantasia', count: '+1 400' },
      { name: 'Kauhu ja jännitys', count: '+1 100' },
      { name: 'Romantiikka ja intohimo', count: '+1 300' },
      { name: 'Animaatio ja lapset', count: '+1 000' },
      { name: 'Dokumentit ja yhteiskunta', count: '+900' },
    ],
    titlesUnit: 'nimikettä',
  },
}

/** Genre tile decoration, in genre order. */
const GENRE_STYLE: { emoji: string; well: string }[] = [
  { emoji: '💥', well: 'bg-orange-50 ring-orange-100' },
  { emoji: '😂', well: 'bg-amber-50 ring-amber-100' },
  { emoji: '🎭', well: 'bg-slate-100 ring-slate-200' },
  { emoji: '🚀', well: 'bg-violet-50 ring-violet-100' },
  { emoji: '👻', well: 'bg-rose-50 ring-rose-100' },
  { emoji: '❤️', well: 'bg-pink-50 ring-pink-100' },
  { emoji: '🧸', well: 'bg-sky-50 ring-sky-100' },
  { emoji: '🌍', well: 'bg-emerald-50 ring-emerald-100' },
]

/** S9 — VOD library: heading with the « king 365 tv me » SEO subtitle, four reassurance pills, eight genre tiles. */
export function HomeVodLibrary() {
  const t = useCopy(COPY)
  return (
    <Section id="videotheque" tone="mist" aria-labelledby="videotheque-title" className="scroll-mt-20">
      <SectionHeading
        id="videotheque-title"
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <ul className="m-0 mt-8 flex list-none flex-wrap justify-center gap-2.5 p-0">
        {t.pills.map((p, i) => (
          <li key={i}>
            <Pill icon={<Check className="size-4 text-brand" strokeWidth={2.5} />}>{p}</Pill>
          </li>
        ))}
      </ul>

      <ul className="m-0 mt-12 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 md:mt-14 lg:grid-cols-4 lg:gap-5">
        {t.genres.map((g, i) => (
          <Card as="li" key={i} interactive className="flex flex-col p-4 sm:p-6">
            <span
              aria-hidden="true"
              className={cn(
                'flex size-11 items-center justify-center rounded-xl text-2xl ring-1 ring-inset sm:size-12',
                GENRE_STYLE[i].well,
              )}
            >
              {GENRE_STYLE[i].emoji}
            </span>
            <h3 className="mt-4 text-[0.9375rem] leading-snug font-semibold tracking-tight text-heading sm:mt-5 sm:text-base">
              {g.name}
            </h3>
            <p className="mt-auto flex items-baseline gap-1.5 pt-3 text-body">
              <span className="text-2xl font-bold tracking-tight text-heading tabular-nums sm:text-[1.75rem]">{g.count}</span>
              <span className="text-sm">{t.titlesUnit}</span>
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
