import { Gauge, MapPin, ServerCog, type LucideIcon } from 'lucide-react'
import { Card, Section, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { LiveSportPitch } from './LiveSport.visual'

/**
 * Spec S8 — « Spécifications et textes français approuvés », word for word. Sports and competitions only: no channel names.
 * French source; other languages mirror it. */
const fr = {
  badge: 'INFRASTRUCTURE SPORTIVE DÉDIÉE · ZÉRO COUPURE',
  title: "King 365 TV & Le Sport en Direct : L'Excellence 4K HDR",
  subtitle:
    "Pourquoi NovaStream a fait le choix exclusif de l'infrastructure King 365 TV ? Parce qu'un événement sportif majeur ne tolère aucune coupure. Grâce à un réseau de serveurs ultra-performants optimisés pour la France et l'Europe, bénéficiez d'une fluidité imbattable en 50/60 FPS, du Full HD jusqu'au véritable 4K HDR, même lors des pics d'audience des plus grandes rencontres internationales.",
  /** The three figures the spec's note puts forward; labels reuse the approved copy's own phrases. */
  stats: [
    { value: '4K HDR', label: "Du Full HD jusqu'au véritable 4K HDR" },
    { value: '50/60 FPS', label: 'Fluidité imbattable' },
    { value: '99,99%', label: "Stabilité en Pic d'Audience" },
  ],
  disciplinesTitle: 'Disciplines Majeures Diffusées',
  disciplines: [
    { emoji: '⚽', name: 'Football', detail: 'Grands Championnats & Tournois Majeurs' },
    { emoji: '🏎️', name: 'Sports Mécaniques', detail: 'Courses Automobiles & Moto en Direct' },
    { emoji: '🥊', name: 'Sports de Combat', detail: 'Soirées Chocs & Arts Martiaux' },
    { emoji: '🎾', name: 'Tennis', detail: 'Tournois Internationaux & Grands Chelems' },
    { emoji: '🏀', name: 'Basketball', detail: 'Ligue Majeure & Compétitions Internationales' },
  ],
  pillarsTitle: 'Les 3 Piliers Techniques',
  pillars: [
    {
      icon: ServerCog,
      title: "Stabilité en Pic d'Audience",
      text: 'Serveurs calibrés pour absorber sans latence les millions de requêtes simultanées.',
    },
    {
      icon: Gauge,
      title: 'Fréquence Élevée 50/60 FPS',
      text: 'Fluidité intégrale sur les actions rapides : trajectoires nettes sans effet de flou.',
    },
    {
      icon: MapPin,
      title: 'Diffusion Francophone & UE',
      text: 'Liaisons directes optimisées pour les résidents en France, Belgique et Suisse.',
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    badge: 'DEDICATED SPORTS INFRASTRUCTURE · ZERO DROPOUTS',
    title: 'King 365 TV & Live Sports: 4K HDR Excellence',
    subtitle:
      'Why did NovaStream choose the King 365 TV infrastructure exclusively? Because a major sporting event tolerates no interruptions. Thanks to a network of ultra-high-performance servers optimized for France and Europe, enjoy unbeatable smoothness at 50/60 FPS, from Full HD up to true 4K HDR, even during the audience peaks of the biggest international fixtures.',
    stats: [
      { value: '4K HDR', label: 'From Full HD up to true 4K HDR' },
      { value: '50/60 FPS', label: 'Unbeatable smoothness' },
      { value: '99.99%', label: 'Stability at Peak Audience' },
    ],
    disciplinesTitle: 'Major Sports Broadcast',
    disciplines: [
      { emoji: '⚽', name: 'Football', detail: 'Top Leagues & Major Tournaments' },
      { emoji: '🏎️', name: 'Motorsports', detail: 'Live Car & Motorcycle Racing' },
      { emoji: '🥊', name: 'Combat Sports', detail: 'Big Fight Nights & Martial Arts' },
      { emoji: '🎾', name: 'Tennis', detail: 'International Tournaments & Grand Slams' },
      { emoji: '🏀', name: 'Basketball', detail: 'Major League & International Competitions' },
    ],
    pillarsTitle: 'The 3 Technical Pillars',
    pillars: [
      {
        icon: ServerCog,
        title: 'Stability at Peak Audience',
        text: 'Servers calibrated to absorb millions of simultaneous requests with zero latency.',
      },
      {
        icon: Gauge,
        title: 'High 50/60 FPS Frame Rate',
        text: 'Total smoothness in fast action: sharp trajectories with no motion blur.',
      },
      {
        icon: MapPin,
        title: 'French-Speaking & EU Broadcasting',
        text: 'Optimized direct links for residents of France, Belgium and Switzerland.',
      },
    ],
  },
  de: {
    badge: 'EIGENE SPORT-INFRASTRUKTUR · KEINE AUSFÄLLE',
    title: 'King 365 TV & Live-Sport: Exzellenz in 4K HDR',
    subtitle:
      'Warum hat sich NovaStream exklusiv für die Infrastruktur von King 365 TV entschieden? Weil ein großes Sportereignis keine Unterbrechung duldet. Dank eines Netzes hochleistungsfähiger, für Frankreich und Europa optimierter Server genießen Sie unschlagbar flüssige Bilder mit 50/60 FPS – von Full HD bis zu echtem 4K HDR, selbst bei den Zuschauerspitzen der größten internationalen Begegnungen.',
    stats: [
      { value: '4K HDR', label: 'Von Full HD bis zu echtem 4K HDR' },
      { value: '50/60 FPS', label: 'Unschlagbar flüssig' },
      { value: '99,99 %', label: 'Stabilität bei Zuschauer\xadspitzen' },
    ],
    disciplinesTitle: 'Die wichtigsten Sportarten im Programm',
    disciplines: [
      { emoji: '⚽', name: 'Fußball', detail: 'Top-Ligen & große Turniere' },
      { emoji: '🏎️', name: 'Motorsport', detail: 'Auto- & Motorradrennen live' },
      { emoji: '🥊', name: 'Kampfsport', detail: 'Top-Kämpfe & Kampfkünste' },
      { emoji: '🎾', name: 'Tennis', detail: 'Internationale Turniere & Grand Slams' },
      { emoji: '🏀', name: 'Basketball', detail: 'Top-Liga & internationale Wettbewerbe' },
    ],
    pillarsTitle: 'Die 3 technischen Säulen',
    pillars: [
      {
        icon: ServerCog,
        title: 'Stabilität bei Zuschauerspitzen',
        text: 'Server, die darauf ausgelegt sind, Millionen gleichzeitiger Anfragen ohne Latenz zu verarbeiten.',
      },
      {
        icon: Gauge,
        title: 'Hohe Bildrate mit 50/60 FPS',
        text: 'Volle Flüssigkeit bei schnellen Spielzügen: scharfe Flugbahnen ohne Bewegungsunschärfe.',
      },
      {
        icon: MapPin,
        title: 'Übertragung für Frankophone & EU',
        text: 'Optimierte Direktverbindungen für Zuschauer in Frankreich, Belgien und der Schweiz.',
      },
    ],
  },
  es: {
    badge: 'INFRAESTRUCTURA DEPORTIVA DEDICADA · CERO CORTES',
    title: 'King 365 TV y el deporte en directo: la excelencia 4K HDR',
    subtitle:
      '¿Por qué NovaStream eligió en exclusiva la infraestructura de King 365 TV? Porque un gran evento deportivo no tolera ningún corte. Gracias a una red de servidores de altísimo rendimiento optimizados para Francia y Europa, disfruta de una fluidez imbatible a 50/60 FPS, del Full HD al auténtico 4K HDR, incluso en los picos de audiencia de los mayores encuentros internacionales.',
    stats: [
      { value: '4K HDR', label: 'Del Full HD al auténtico 4K HDR' },
      { value: '50/60 FPS', label: 'Fluidez imbatible' },
      { value: '99,99 %', label: 'Estabilidad en picos de audiencia' },
    ],
    disciplinesTitle: 'Grandes disciplinas retransmitidas',
    disciplines: [
      { emoji: '⚽', name: 'Fútbol', detail: 'Grandes ligas y torneos importantes' },
      { emoji: '🏎️', name: 'Deportes de motor', detail: 'Carreras de coches y motos en directo' },
      { emoji: '🥊', name: 'Deportes de combate', detail: 'Grandes veladas y artes marciales' },
      { emoji: '🎾', name: 'Tenis', detail: 'Torneos internacionales y Grand Slams' },
      { emoji: '🏀', name: 'Baloncesto', detail: 'Liga principal y competiciones internacionales' },
    ],
    pillarsTitle: 'Los 3 pilares técnicos',
    pillars: [
      {
        icon: ServerCog,
        title: 'Estabilidad en picos de audiencia',
        text: 'Servidores calibrados para absorber sin latencia millones de peticiones simultáneas.',
      },
      {
        icon: Gauge,
        title: 'Alta frecuencia de 50/60 FPS',
        text: 'Fluidez total en las jugadas rápidas: trayectorias nítidas sin efecto de desenfoque.',
      },
      {
        icon: MapPin,
        title: 'Emisión francófona y UE',
        text: 'Conexiones directas optimizadas para residentes en Francia, Bélgica y Suiza.',
      },
    ],
  },
  pt: {
    badge: 'INFRAESTRUTURA DESPORTIVA DEDICADA · ZERO CORTES',
    title: 'King 365 TV e o desporto em direto: a excelência 4K HDR',
    subtitle:
      'Porque é que a NovaStream escolheu em exclusivo a infraestrutura King 365 TV? Porque um grande evento desportivo não tolera nenhum corte. Graças a uma rede de servidores de alto desempenho otimizados para França e para a Europa, beneficie de uma fluidez imbatível a 50/60 FPS, do Full HD ao verdadeiro 4K HDR, mesmo nos picos de audiência dos maiores encontros internacionais.',
    stats: [
      { value: '4K HDR', label: 'Do Full HD ao verdadeiro 4K HDR' },
      { value: '50/60 FPS', label: 'Fluidez imbatível' },
      { value: '99,99%', label: 'Estabilidade em picos de audiência' },
    ],
    disciplinesTitle: 'Grandes modalidades transmitidas',
    disciplines: [
      { emoji: '⚽', name: 'Futebol', detail: 'Grandes campeonatos e torneios principais' },
      { emoji: '🏎️', name: 'Desportos motorizados', detail: 'Corridas de automóveis e motos em direto' },
      { emoji: '🥊', name: 'Desportos de combate', detail: 'Grandes combates e artes marciais' },
      { emoji: '🎾', name: 'Ténis', detail: 'Torneios internacionais e Grand Slams' },
      { emoji: '🏀', name: 'Basquetebol', detail: 'Liga principal e competições internacionais' },
    ],
    pillarsTitle: 'Os 3 pilares técnicos',
    pillars: [
      {
        icon: ServerCog,
        title: 'Estabilidade em picos de audiência',
        text: 'Servidores calibrados para absorver sem latência milhões de pedidos simultâneos.',
      },
      {
        icon: Gauge,
        title: 'Frequência elevada de 50/60 FPS',
        text: 'Fluidez total nas jogadas rápidas: trajetórias nítidas sem efeito de desfocagem.',
      },
      {
        icon: MapPin,
        title: 'Emissão francófona e UE',
        text: 'Ligações diretas otimizadas para residentes em França, na Bélgica e na Suíça.',
      },
    ],
  },
  fi: {
    badge: 'OMA URHEILUINFRASTRUKTUURI · NOLLA KATKOSTA',
    title: 'King 365 TV ja suora urheilu: 4K HDR -⁠huippulaatua',
    subtitle:
      'Miksi NovaStream valitsi yksinomaan King 365 TV:n infrastruktuurin? Koska suuri urheilutapahtuma ei salli yhtään katkosta. Ranskaan ja Eurooppaan optimoidun huipputehokkaan palvelinverkon ansiosta saat lyömättömän sujuvan kuvan 50/60 FPS:n nopeudella, Full HD:sta aitoon 4K HDR -⁠laatuun, jopa suurimpien kansainvälisten otteluiden katsojahuippujen aikana.',
    stats: [
      { value: '4K HDR', label: 'Full HD:sta aitoon 4K HDR -⁠laatuun' },
      { value: '50/60 FPS', label: 'Lyömätön sujuvuus' },
      { value: '99,99 %', label: 'Vakaus katsoja\xadhuippujen aikana' },
    ],
    disciplinesTitle: 'Tärkeimmät lähetettävät lajit',
    disciplines: [
      { emoji: '⚽', name: 'Jalkapallo', detail: 'Suuret sarjat ja turnaukset' },
      { emoji: '🏎️', name: 'Moottoriurheilu', detail: 'Auto- ja moottoripyöräkilpailut suorana' },
      { emoji: '🥊', name: 'Kamppailulajit', detail: 'Huippuottelut ja kamppailutaiteet' },
      { emoji: '🎾', name: 'Tennis', detail: 'Kansainväliset turnaukset ja Grand Slamit' },
      { emoji: '🏀', name: 'Koripallo', detail: 'Pääsarja ja kansainväliset kilpailut' },
    ],
    pillarsTitle: '3 teknistä peruspilaria',
    pillars: [
      {
        icon: ServerCog,
        title: 'Vakaus katsojahuippujen aikana',
        text: 'Palvelimet on mitoitettu käsittelemään miljoonia samanaikaisia pyyntöjä ilman viivettä.',
      },
      {
        icon: Gauge,
        title: 'Korkea 50/60 FPS:n kuvataajuus',
        text: 'Täysi sujuvuus nopeissa tilanteissa: terävät liikeradat ilman liike-epäterävyyttä.',
      },
      {
        icon: MapPin,
        title: 'Ranskankielinen ja EU-alueen jakelu',
        text: 'Optimoidut suorat yhteydet Ranskassa, Belgiassa ja Sveitsissä asuville.',
      },
    ],
  },
}

/** Section 08 — Live sport in 4K HDR / 50-60 FPS (spec p.8–9). */
export function HomeLiveSport() {
  const t = useCopy(COPY)
  return (
    <Section id="sport" aria-labelledby="sport-title" className="scroll-mt-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <SectionHeading
          id="sport-title"
          align="left"
          eyebrow={t.badge}
          title={t.title}
          subtitle={<span className="block text-[0.9375rem] sm:text-base">{t.subtitle}</span>}
          className="lg:col-span-6"
        />

        <Card className="p-2.5 sm:p-3 lg:col-span-6">
          <LiveSportPitch />
          <dl className="grid grid-cols-3 divide-x divide-line px-1 pt-4 pb-2 sm:pt-5 sm:pb-3">
            {t.stats.map((stat) => (
              <div key={stat.value} className="flex min-w-0 flex-col-reverse justify-end gap-1 px-2 text-center sm:px-4">
                <dt className="text-[11px] leading-snug text-body sm:text-xs">{stat.label}</dt>
                <dd className="text-lg font-bold tracking-tight whitespace-nowrap text-heading tabular-nums sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>

      <div className="mt-16 md:mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{t.disciplinesTitle}</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {t.disciplines.map((d, i) => (
            <Card
              as="li"
              interactive
              key={i}
              className={cn(
                'flex items-center gap-4 p-4 lg:flex-col lg:items-start lg:gap-5 lg:p-5',
                i === t.disciplines.length - 1 && 'sm:col-span-2 lg:col-span-1',
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-2xl leading-none"
              >
                {d.emoji}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-heading">{d.name}</span>
                <span className="mt-0.5 block text-sm leading-snug text-body">({d.detail})</span>
              </span>
            </Card>
          ))}
        </ul>
      </div>

      <div className="mt-16 md:mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{t.pillarsTitle}</h3>
        <ol className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
          {t.pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <li key={i} className="border-t border-line pt-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_20px_-8px_rgb(0_102_255/0.6)]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden="true" className="font-mono text-sm text-slate-400 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-semibold tracking-tight text-heading">{p.title}</h4>
                <p className="mt-2 leading-relaxed text-body">{p.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
