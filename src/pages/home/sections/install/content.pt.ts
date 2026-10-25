import type { InstallCopy } from './content'

export const pt: InstallCopy = {
  guarantees: [
    {
      emoji: '🔄',
      title: 'Renovação fácil',
      text: 'Prolongue o seu acesso com um clique no WhatsApp, sem reinstalar as suas aplicações nem perder os seus favoritos.',
    },
    {
      emoji: '⚡',
      title: 'Ativação rápida',
      text: 'Credenciais Xtream e link M3U enviados de imediato por WhatsApp e por e-mail assim que a encomenda é validada.',
    },
    {
      emoji: '🛡️',
      title: 'Garantia e acompanhamento contínuo (Satisfeito ou compensado)',
      text: 'Acompanhamento personalizado e garantia total de continuidade durante todo o período da sua subscrição.',
    },
  ],

  head: {
    eyebrow: '✨ GUIAS VISUAIS 2026 · DISTRIBUIDOR AUTORIZADO',
    title: 'Instalação King 365 TV 2026: guias interativos passo a passo',
    subtitle:
      'Selecione o dispositivo em que pretende ver os seus programas e siga os passos simples. A maioria dos nossos subscritores fica operacional em menos de 5 minutos.',
  },

  kpis: [
    { value: '< 5 min', label: 'Instalação rápida' },
    { value: '100%', label: 'Compatível com todos os ecrãs' },
    { value: '7/7 · 24/7', label: 'Suporte técnico incluído' },
  ],

  aside: {
    title: 'Guias de configuração NovaStream',
    indicators: [
      { value: '< 5 min', label: 'Instalação rápida' },
      { value: '100%', label: 'Compatível com todos os ecrãs' },
      { value: '7/7', label: 'Suporte técnico incluído' },
    ],
    helpTitle: 'Algum problema durante a configuração?',
    helpText: 'Os nossos consultores NovaStream respondem-lhe 7 dias por semana no WhatsApp',
    tutorial: '📖 Ver o tutorial detalhado passo a passo da NovaStream (com capturas de ecrã)',
    changeDevice: 'Mudar de dispositivo',
  },

  hub: {
    chooseDevice: 'Escolha o seu dispositivo',
    deviceKicker: (n) => `Dispositivo ${n}`,
    stepPrefix: (n) => `Passo ${n}: `,
    copy: 'Copiar',
    copied: 'Copiado',
    copyAria: (code, label) => `Copiar o código ${code} (${label})`,
    copiedAnnounce: (code) => `Código ${code} copiado`,
  },

  faqTitle: 'Perguntas frequentes',
  faqAnswer: 'Resposta:',
  faq: [
    {
      q: 'Introduzi as minhas credenciais mas a aplicação indica um erro. O que devo fazer?',
      a: 'Verifique primeiro o **link do servidor (Server URL)**: tem obrigatoriamente de começar por `http://` **— e não** por `https://`. Esta simples letra é a causa de erro mais frequente. Certifique-se também de que não ficou nenhum espaço a mais ao copiar e colar. **Continua bloqueado?** Envie-nos uma mensagem no WhatsApp ([+33 7 51 29 91 76](wa:help)): a nossa equipa verificará os seus acessos e configurará a subscrição remotamente por si.',
    },
    {
      q: 'Que velocidade de Internet é necessária para uma emissão fluida?',
      a: 'Uma ligação de **10 a 20 Mbps** é o mínimo necessário para um streaming fluido em Full HD. Recomendamos uma velocidade superior (**30 Mbps ou mais**) se quiser tirar pleno partido das emissões em **verdadeiro 4K HDR a 60 FPS** ou se várias pessoas usarem a mesma ligação à Internet em simultâneo em casa.',
    },
    {
      q: 'Tenho de usar uma VPN com a minha subscrição?',
      a: '**Não é obrigatório** — os nossos planos (sobretudo o Pack Signature) incluem um **DNS dedicado** que contorna automaticamente os bloqueios dos operadores de Internet. Se, ainda assim, usar uma VPN, **escolha sempre um servidor situado no seu próprio país**: garante-lhe a melhor velocidade e a latência mais baixa (não se ligue a um país distante).',
    },
    {
      q: 'Porque preciso de um leitor pago em alguns dispositivos?',
      a: 'Os leitores pagos (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) tiram muito melhor partido do hardware. Numa **Smart TV (Samsung / LG) ou num dispositivo Apple**, recomendamos vivamente uma aplicação paga (~8 € / ano após 7 dias de teste grátis): funciona de forma muito mais fluida do que as aplicações gratuitas e memoriza onde parou nos seus filmes e séries. Já em **Android, Google TV, TV Box ou Firestick**, as nossas aplicações oficiais **King 365 TV (V2, V3 e V4)** funcionam na perfeição e são **100% gratuitas**.',
    },
  ],

  helpBanner: {
    title: 'Bloqueado num passo? Configuramos o seu dispositivo consigo.',
    subtitle:
      'Envie uma mensagem à nossa equipa de suporte no WhatsApp: acompanhamo-lo passo a passo ou ativamos a sua subscrição diretamente à distância, seja qual for o seu ecrã.',
    whatsappCta: '💬 Obter ajuda no WhatsApp',
    plansCta: 'Encomendar uma subscrição',
  },
}
