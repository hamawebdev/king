import type { Device } from './devices'

const PAID = 'APLICAÇÃO PAGA · ~8 € / ano · 7 dias de teste grátis'
const PAID_WIN = 'APLICAÇÃO PAGA (~8 € / ano · 7 dias de teste grátis)'
const CODE = 'Código Downloader'

export const DEVICES_PT: Device[] = [
  {
    id: 'smart-tv',
    emoji: '📺',
    name: 'Smart TV',
    detail: 'Samsung, LG, Sony, Philips...',
    guideTitle: 'Smart TV',
    guideDetail: 'Samsung Tizen, LG webOS, Sony, Philips',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '⚠️',
        title: 'Alerta prioritário Smarters Pro',
        paragraphs: [
          'Não utilize o IPTV Smarters Pro nem o Smarters Player numa Smart TV: a versão para Smart TV já não está otimizada para Samsung e LG. Provoca cortes frequentes, instabilidade e bloqueios de reprodução que nada têm a ver com o nosso serviço. Utilize uma das aplicações recomendadas abaixo (ou o IPTV Stream Player, se procura uma alternativa gratuita).',
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: 'Porquê preferir leitores pagos na Smart TV?',
        paragraphs: [
          'O IBO Player Pro, o IBO Player Smarter, o Bob Player e o Hot Player oferecem, cada um, 7 dias de teste grátis. Garantem uma estabilidade 4K exemplar, carregam o guia EPG instantaneamente e permitem retomar os seus filmes e séries no segundo exato em que parou. No fim do teste, a nossa equipa pode ativar a sua licença oficial (~8 € / ano) diretamente pelo WhatsApp.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Nota sobre Android TV',
        paragraphs: [
          'Tem uma Android TV ou Google TV (Sony, TCL, Xiaomi, Philips)? Instale a aplicação gratuita Downloader a partir do Google Play e siga o método Android / Firestick para instalar gratuitamente as nossas aplicações oficiais King 365 TV (V2, V3 ou V4).',
        ],
      },
      {
        type: 'apps',
        title: 'Aplicações recomendadas',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Instalar a partir da Samsung Apps / LG Content Store → Anotar o *Device ID (MAC)* e a *Device Key* → Enviar uma fotografia pelo WhatsApp ([wa.me/33751299176](wa:iboDevice)) para carregarmos diretamente a subscrição e a ativarmos.',
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Interface moderna e ultraestável, com retoma de VOD e EPG completo.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Zapping instantâneo e gestão fluida dos pacotes de canais.',
          },
          {
            name: 'Hot Player / Hot IPTV',
            badge: PAID,
            badgeTone: 'paid',
          },
        ],
      },
    ],
  },
  {
    id: 'firestick',
    emoji: '🔥',
    name: 'Amazon Firestick',
    detail: 'Fire TV Stick 4K / Max / Lite / Cube',
    guideTitle: 'Amazon Firestick',
    guideDetail: 'Fire TV Stick 4K, Max, Lite, Cube',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '🚨',
        title: 'AVISO OFICIAL VEGA OS',
        subtitle: 'AVISO SOBRE O AMAZON FIRE TV STICK HD DE 2.ª GERAÇÃO:',
        paragraphs: [
          'Recomendamos vivamente aos nossos clientes que não comprem o Amazon Fire TV Stick HD (2.ª geração). Este modelo recente funciona com o sistema fechado **Vega OS**, ao contrário das versões anteriores, que utilizavam um sistema Android / Fire OS compatível com aplicações externas:',
        ],
        items: [
          '❌ A aplicação **Downloader** não está disponível, ao contrário dos modelos anteriores.',
          '❌ A instalação de aplicações externas ou ficheiros APK está fortemente restringida.',
          '❌ Por isso, este modelo não é compatível com o nosso serviço.',
          '✅ Para utilizar as nossas aplicações, opte por um dispositivo com Android (Xiaomi, Mecool) ou por um Fire TV Stick 4K / 4K Max / Lite / Cube compatível com o Downloader e com a instalação de APK.',
        ],
      },
      {
        type: 'steps',
        title: 'Os 4 passos de instalação com o Downloader',
        steps: [
          '**Instalar o Downloader:** No ecrã inicial do Fire TV, vá a Pesquisar, escreva *«Downloader»* e instale-o gratuitamente.',
          '**Ativar as opções de programador:** Vá a `Definições > O Meu Fire TV > Acerca de` e clique **7 vezes seguidas, rapidamente,** no nome do Fire TV Stick.',
          '**Permitir fontes desconhecidas:** Em `Opções de programador > Instalar aplicações desconhecidas`, ative a autorização para o **Downloader (ON)**.',
          '**Introduzir o código Downloader:** Abra o Downloader, escreva o código da aplicação pretendida (ver abaixo) e clique em **Go**.',
        ],
      },
      {
        type: 'apps',
        title: 'Aplicações e códigos Downloader no Firestick',
        apps: [
          {
            name: 'King 365 TV — Versão 2 (V2)',
            mark: 'V2',
            badge: 'OFICIAL · GRATUITA',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '756917' }],
            text: 'Início de sessão com Utilizador + Palavra-passe.',
          },
          {
            name: 'King 365 TV — Versão 3 (V3)',
            mark: 'V3',
            badge: 'OFICIAL · GRATUITA',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '283367' }],
            text: 'Início de sessão com Utilizador + Palavra-passe.',
          },
          {
            name: 'King 365 TV — Versão 4 (V4 - Edição 2026)',
            mark: 'V4',
            badge: 'ESPECIAL ECRÃS DE TV · GRATUITA',
            badgeTone: 'special',
            codes: [{ label: CODE, code: '2763945' }],
            text: 'Exclusivamente para ecrãs de TV e Box. Introduzir **Playlist Name** (nome à escolha) + **Utilizador** + **Palavra-passe**.',
          },
          {
            name: 'Leitores pagos',
            badge: '~8 € / ano · 7 dias de teste grátis',
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'Aplicações King365TV: códigos obsoletos a evitar a todo o custo (a desinstalar)',
            danger: true,
            obsolete: [
              { label: 'V4 OLD', code: '8872559' },
              { label: 'V3 OLD', code: '702186' },
              { label: 'V2 OLD', code: '5638769' },
              { label: '2.2 OLD', code: '671387' },
              { label: '2.2.2 OLD', code: '6783194' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'android',
    emoji: '🤖',
    name: 'Android',
    detail: 'Telemóvel, tablet, Google TV, TV Box Xiaomi / Mecool',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Box Xiaomi / Mecool, smartphones e tablets',
    blocks: [
      {
        type: 'apps',
        title: 'Instalação com o Downloader (TV e Box) ou APK direto',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: CODE, code: '223650' }],
            text: 'Compatível com TV, Box, smartphones e tablets.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: CODE, code: '333650' }],
            text: 'Compatível com TV, Box, smartphones e tablets.',
          },
          {
            name: 'King 365 TV V4 (Edição 2026)',
            mark: 'V4',
            codes: [{ label: CODE, code: '443650' }],
            text: '**Apenas para Google TV recentes, televisores Android recentes e TV Box Android** *(não compatível com telemóveis)*. Introduzir *Playlist Name + Utilizador + Palavra-passe*.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Nota sobre redundância King 365',
        paragraphs: [
          'Aconselhamos a instalar ou manter as 3 versões (V2, V3, V4) para ter sempre uma aplicação de reserva pronta caso uma delas esteja em manutenção.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Nota sobre Xtream / M3U e suporte',
        paragraphs: [
          'Para os utilizadores que preferem o seu próprio leitor (TiviMate, IBO Player, Bob Player...), fornecemos os acessos completos em **Xtream Codes** ou **M3U**, ou configuramos a aplicação remotamente pelo WhatsApp ([+33 7 51 29 91 76](wa:help)).',
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS e tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS e tvOS',
    blocks: [
      {
        type: 'apps',
        title: 'Transferência direta a partir da **App Store oficial** (sem VLC nem Smarters Pro no iPhone)',
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APLICAÇÃO PAGA · ~8 € / ano · Teste grátis incluído', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'PC Windows',
    detail: 'Microsoft Store',
    guideTitle: 'PC Windows',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Instalação direta a partir da **Microsoft Store** (sem VLC nem BlueStacks)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Edição Windows)',
            badge: 'GRATUITA',
            badgeTone: 'free',
            text: 'Versão para computador atualizada, fluida e gratuita, com credenciais Xtream.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APLICAÇÃO PAGA (~8 € / ano · Teste grátis incluído)', badgeTone: 'paid' },
          { name: 'vormedia sat', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'ibo player smarter', badge: PAID_WIN, badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mac',
    emoji: '🖥️',
    name: 'Mac',
    detail: 'macOS',
    guideTitle: 'Mac',
    guideDetail: 'macOS',
    blocks: [
      {
        type: 'apps',
        title: 'Instalação em MacBook e iMac (sem VLC)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'GRATUITA', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'APLICAÇÃO PAGA · ~8 € / ano', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mag',
    emoji: '📟',
    name: 'MAG Box',
    detail: 'Infomir 254 / 256 / 322 / 520...',
    guideTitle: 'MAG Box',
    guideDetail: 'Infomir 254 / 256 / 322 / 520...',
    blocks: [
      {
        type: 'steps',
        title: 'Configuração rápida por **endereço MAC**',
        steps: [
          '**Enviar o endereço MAC:** Consulte o endereço na parte de trás da box (`00:1A:79:XX:XX:XX`) e envie-o para o nosso WhatsApp ([wa.me/33751299176](wa:magAddress)).',
          '**Receção do portal:** Enviamos-lhe o seu link `Portal URL` ativado.',
          '**Definições:** Vá a `Settings > System Settings > Servers > Portals`.',
          '**Introdução:** Escreva um nome em `Portal 1 Name` e cole o URL em `Portal 1 URL`.',
          '**Guardar:** Prima OK para guardar e reinicie a box.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'Android TV de alto desempenho',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Funciona com Android TV e Google Play Store integrada',
        steps: [
          'Instale gratuitamente o **Downloader** a partir da Google Play Store.',
          'Autorize o Downloader em `Definições > Preferências do dispositivo > Segurança e restrições`.',
          'Introduza o código Downloader do **King 365 TV V3 (333650)**, do **King 365 TV V4 (443650)** ou do **IBO Player Pro (481220)**.',
        ],
      },
      {
        type: 'codes',
        codes: [
          { label: 'King 365 TV V3', code: '333650' },
          { label: 'King 365 TV V4', code: '443650' },
          { label: 'IBO Player Pro', code: '481220' },
        ],
      },
    ],
  },
  {
    id: 'formuler',
    emoji: '📡',
    name: 'Formuler / Dreamlink',
    detail: 'Aplicação MyTVOnline 2 e 3',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 e MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Importante',
        paragraphs: ['No Formuler, utilize os **códigos Xtream** (URL do portal + Utilizador + Palavra-passe) e **não o endereço MAC**:'],
      },
      {
        type: 'steps',
        steps: [
          '**Abrir o MyTVOnline:** Inicie o *MyTVOnline 2* ou o *MyTVOnline 3* (ou o *DOL2* no Dreamlink).',
          '**Adicionar um portal:** Vá a `Menu > Ligações > Adicionar portal (Add Portal)`.',
          '**Dar nome ao portal:** Escreva um nome à escolha (ex.: *NovaStream*).',
          '**Ativar o início de sessão:** Mude a opção `Início de sessão obrigatório (Login Required)` para **ON**.',
          '**Introduzir os acessos:** Escreva o URL do portal, o utilizador e a palavra-passe que recebeu.',
          '**Ligar:** Prima **Connect** para carregar instantaneamente os canais e o VOD.',
        ],
      },
    ],
  },
]
