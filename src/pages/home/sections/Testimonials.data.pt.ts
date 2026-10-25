import type { TestimonialsCopy } from './Testimonials.data'

export const pt: TestimonialsCopy = {
  head: {
    eyebrow: 'TESTEMUNHOS VERIFICADOS · A EXPERIÊNCIA NOVASTREAM',
    title: 'A opinião de quem vê King 365 TV com a NovaStream',
    subtitle:
      'Descubra as opiniões autênticas dos espectadores que escolheram a NovaStream como distribuidor autorizado para ativar a sua subscrição e contar com acompanhamento semana após semana.',
  },
  trustStats: [
    { value: '4,9 / 5', label: 'Classificação global NovaStream', stars: true },
    { value: '+50.000', label: 'Subscritores acompanhados e fidelizados' },
    { value: '99%', label: 'Recomendam o suporte NovaStream' },
  ],
  reviews: [
    {
      badge: 'Rapidez NovaStream',
      quote:
        '«Encomendei a minha subscrição King 365 TV diretamente à NovaStream pelo WhatsApp. Tempo de resposta incrível: menos de 3 minutos depois da minha transferência, o consultor NovaStream já me tinha enviado os códigos e estava tudo a funcionar.»',
      meta: 'Lyon, França · fevereiro de 2026',
    },
    {
      badge: 'Ajuda e cortesia',
      quote:
        '«Como não tenho muito jeito para a tecnologia, tinha receio de não conseguir instalar a aplicação na minha TV Samsung. O suporte NovaStream foi de uma paciência notável: ativaram o meu IBO Player remotamente, passo a passo. Um verdadeiro serviço humano!»',
      meta: 'Quebeque, Canadá · janeiro de 2026',
    },
    {
      badge: 'Estabilidade e DNS NovaStream',
      quote:
        '«Experimentei vários revendedores antes de conhecer a NovaStream. Com o Pack Signature a 59,99 € e o DNS dedicado NovaStream, vejo todos os grandes jogos em 4K a 60 FPS na aplicação King 365 V4 sem o mínimo corte.»',
      meta: 'Namur, Bélgica · dezembro de 2025',
    },
    {
      badge: 'Confiança e transparência',
      quote:
        '«O que aprecio na NovaStream é a franqueza e a seriedade. Como distribuidor autorizado, não pedem nenhum cartão bancário no site, o pagamento por PayPal é seguro e os preços são claros. Sentimo-nos logo em confiança.»',
      meta: 'Bordéus, França · março de 2026',
    },
    {
      badge: 'Cinema e preços simpáticos',
      quote:
        '«Desde que mudámos para a NovaStream, os serões em família mudaram mesmo. O catálogo King 365 é enorme (+16.000 filmes e séries em 4K/FHD), retomamos os episódios onde os deixámos e o preço faz-nos poupar uma fortuna.»',
      meta: 'Toulouse, França · fevereiro de 2026',
    },
    {
      badge: 'Fidelidade e acompanhamento',
      quote:
        '«É o segundo ano que renovo o meu acesso King 365 com a equipa NovaStream. Uma simples mensagem no WhatsApp e o meu código foi prolongado por 12 meses em poucos segundos, sem perder os meus favoritos na minha Box Android.»',
      meta: 'Genebra, Suíça · janeiro de 2026',
    },
  ],
  pills: [
    { emoji: '✨', label: 'Imagem 4K HDR' },
    { emoji: '⚡', label: 'Zapping rápido' },
    { emoji: '🛡️', label: 'Relé DNS NovaStream' },
    { emoji: '💶', label: 'Preço muito simpático' },
    { emoji: '🎬', label: '+16.000 filmes e séries' },
    { emoji: '💬', label: 'Suporte NovaStream < 2 min' },
    { emoji: '📱', label: 'Todos os ecrãs' },
    { emoji: '⏪', label: '15 dias para ver mais tarde' },
  ],
  ui: {
    rating: 'Classificação: 5 em 5',
    screenshotAlt: (name) => `Captura de ecrã do WhatsApp com a opinião de ${name}`,
    screenshotPlaceholder: 'Captura do WhatsApp',
    reviewsLabel: 'Opiniões de clientes NovaStream',
    pillsLabel: 'Pontos fortes NovaStream',
  },
}
