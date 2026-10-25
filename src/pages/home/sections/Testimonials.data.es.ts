import type { TestimonialsCopy } from './Testimonials.data'

export const es: TestimonialsCopy = {
  head: {
    eyebrow: 'TESTIMONIOS VERIFICADOS · LA EXPERIENCIA NOVASTREAM',
    title: 'La opinión de quienes ven King 365 TV con NovaStream',
    subtitle:
      'Descubre las opiniones auténticas de espectadores que eligieron NovaStream como distribuidor autorizado para activar su suscripción y contar con seguimiento semana tras semana.',
  },
  trustStats: [
    { value: '4,9 / 5', label: 'Valoración global de NovaStream', stars: true },
    { value: '+50.000', label: 'Suscriptores acompañados y fieles' },
    { value: '99 %', label: 'Recomiendan el soporte de NovaStream' },
  ],
  reviews: [
    {
      badge: 'Rapidez NovaStream',
      quote:
        '«Pedí mi suscripción a King 365 TV directamente a NovaStream por WhatsApp. Un tiempo de respuesta increíble: en menos de 3 minutos tras mi transferencia, el asesor de NovaStream ya me había enviado mis códigos y todo funcionaba.»',
      meta: 'Lyon, Francia · febrero de 2026',
    },
    {
      badge: 'Ayuda y amabilidad',
      quote:
        '«Como no se me da muy bien la tecnología, tenía miedo de no saber instalar la aplicación en mi tele Samsung. El soporte de NovaStream tuvo una paciencia admirable: activaron mi IBO Player a distancia, paso a paso. ¡Un servicio humano de verdad!»',
      meta: 'Quebec, Canadá · enero de 2026',
    },
    {
      badge: 'Estabilidad y DNS NovaStream',
      quote:
        '«Probé varios revendedores antes de conocer NovaStream. Con su Pack Signature a 59,99 € y el DNS dedicado de NovaStream, veo todos los grandes partidos en 4K a 60 FPS en la aplicación King 365 V4 sin el más mínimo corte.»',
      meta: 'Namur, Bélgica · diciembre de 2025',
    },
    {
      badge: 'Confianza y transparencia',
      quote:
        '«Lo que valoro de NovaStream es su franqueza y su seriedad. Como distribuidor autorizado, no piden ninguna tarjeta bancaria en la web, el pago con PayPal es seguro y los precios son claros. Te sientes en confianza desde el primer momento.»',
      meta: 'Burdeos, Francia · marzo de 2026',
    },
    {
      badge: 'Cine y precios ajustados',
      quote:
        '«Desde que nos pasamos a NovaStream, las noches en familia han cambiado de verdad. El catálogo de King 365 es enorme (+16.000 películas y series en 4K/FHD), retomamos los episodios justo donde los dejamos y el precio nos hace ahorrar una fortuna.»',
      meta: 'Toulouse, Francia · febrero de 2026',
    },
    {
      badge: 'Fidelidad y seguimiento',
      quote:
        '«Es el segundo año que renuevo mi acceso a King 365 con el equipo de NovaStream. Un simple mensaje por WhatsApp y mi código quedó prolongado 12 meses en unos segundos, sin perder mis favoritos en mi box Android.»',
      meta: 'Ginebra, Suiza · enero de 2026',
    },
  ],
  pills: [
    { emoji: '✨', label: 'Imagen 4K HDR' },
    { emoji: '⚡', label: 'Zapping exprés' },
    { emoji: '🛡️', label: 'Relé DNS NovaStream' },
    { emoji: '💶', label: 'Precio muy ajustado' },
    { emoji: '🎬', label: '+16.000 películas y series' },
    { emoji: '💬', label: 'Soporte NovaStream < 2 min' },
    { emoji: '📱', label: 'Todas las pantallas' },
    { emoji: '⏪', label: '15 días para ver más tarde' },
  ],
  ui: {
    rating: 'Valoración: 5 de 5',
    screenshotAlt: (name) => `Captura de WhatsApp de la opinión de ${name}`,
    screenshotPlaceholder: 'Captura de WhatsApp',
    reviewsLabel: 'Opiniones de clientes de NovaStream',
    pillsLabel: 'Puntos fuertes de NovaStream',
  },
}
