import type { ActivationCopy } from './Activation.data'

export const es: ActivationCopy = {
  head: {
    badge: 'PROCESO TRANSPARENTE · ACTIVACIÓN GUIADA',
    title: 'Cómo activar tu acceso a King 365 TV en 4 pasos',
    subtitle:
      'Un proceso fluido, confidencial y asistido de principio a fin. Desde la elección de tu plan hasta tu primera emisión, nuestros asesores te acompañan paso a paso.',
  },
  stepLabel: 'Paso',
  steps: [
    {
      num: '01',
      title: 'Elige la duración',
      chip: { emoji: '⏱️', label: '1 minuto' },
      text: 'Elige el periodo que mejor se adapte a ti: 6 meses, 12 meses (Pack Signature recomendado) o 24 meses. Disfruta de una tarifa clara y decreciente, sin compromisos ocultos.',
    },
    {
      num: '02',
      title: 'PayPal y transferencia SEPA',
      chip: { emoji: '🔒', label: 'Protección total' },
      text: 'Paga tu acceso con total tranquilidad, sin introducir los datos de tu tarjeta en la web. Transacciones protegidas mediante PayPal (con protección al comprador) o por transferencia bancaria inmediata SEPA.',
    },
    {
      num: '03',
      title: 'Envío instantáneo Xtream y M3U',
      chip: { emoji: '⚡', label: 'Entrega directa' },
      text: 'Recibe al instante tus credenciales completas por WhatsApp y por correo electrónico: códigos API Xtream (usuario, contraseña, URL del servidor) y enlace M3U optimizado con tu DNS dedicado antibloqueo.',
    },
    {
      num: '04',
      title: 'Instalación y zapping en 4K',
      chip: { emoji: '🚀', label: 'Acceso inmediato' },
      text: 'Introduce tus credenciales en la aplicación oficial King 365 TV o en tu reproductor multimedia favorito. Sigue nuestro tutorial detallado o deja que nuestro soporte configure tu pantalla a distancia.',
    },
  ],
  reassuranceTitle: 'Ecosistema abierto y compromisos incluidos',
  pillars: [
    {
      icon: 'players',
      title: 'Compatibilidad con reproductores de terceros',
      text: 'Funciona en las aplicaciones oficiales (V2, V3, V4) y en los principales reproductores de terceros, de pago o gratuitos (IBO Player, TiviMate, IPTV Smarters Pro, Bob Player, Hot Player, SmartOne...).',
    },
    {
      icon: 'screens',
      title: 'Multipantalla y flexibilidad',
      text: 'Disponible en Smart TV (Samsung Tizen, LG webOS, Sony, TCL), Android TV, Fire TV Stick, Apple TV, iOS, Android y PC. (1 pantalla activa a la vez por código, o varias suscripciones independientes para varias pantallas simultáneas.)',
    },
    {
      icon: 'whatsapp',
      title: 'Línea de WhatsApp dedicada 1 a 1',
      text: 'Acceso directo y prioritario a un asesor técnico de habla francesa 24/7 por WhatsApp ({phone}) para cualquier consulta.',
    },
    {
      icon: 'tutorials',
      title: 'Tutoriales paso a paso listos para usar',
      text: 'Guías ilustradas enviadas con tu pedido para instalar y configurar tu reproductor en menos de 3 minutos.',
    },
    {
      icon: 'updates',
      title: 'Actualizaciones continuas',
      text: 'Actualizaciones automáticas diarias de las emisiones en directo y nuevos estrenos VOD añadidos constantemente durante toda la suscripción.',
    },
    {
      icon: 'guarantee',
      title: 'Garantía y seguimiento durante toda la suscripción',
      text: 'Garantía total de continuidad y seguimiento técnico proactivo durante toda tu suscripción, con sustitución o recuperación gratuita del código si lo necesitas.',
    },
  ],
  pricingHead: {
    badge: 'PRECIOS OFICIALES · DISTRIBUIDOR AUTORIZADO KING 365 TV',
    title: 'Elige tu suscripción oficial a King 365 TV',
    subtitle:
      'Tanto si quieres activar una nueva suscripción a King 365 como renovar tu suscripción actual a King 365, disfruta de una emisión continua de alto rendimiento sin compromisos ocultos.',
  },
  includedHead: {
    badge: 'INCLUIDO EN CADA PLAN NOVASTREAM',
    title: 'Todo lo que incluye tu suscripción a King 365 TV con NovaStream',
  },
  includedMetrics: [
    { value: '+5.700', label: 'Programas y canales en directo' },
    { value: '+16.000', label: 'Títulos VOD a la carta (películas y series)' },
    { value: '4K HDR', label: 'Definición hasta 4K UHD (50/60 FPS)' },
    { value: '7–15 días', label: 'Ver más tarde (Replay) y Timeshift incluidos' },
  ],
  supportedDevices: [
    { emoji: '📺', label: 'Smart TV (Samsung y LG)' },
    { emoji: '🔥', label: 'Fire TV Stick' },
    { emoji: '🤖', label: 'Google TV y box Android' },
    { emoji: '🍎', label: 'Apple TV' },
    { emoji: '📱', label: 'iPhone y iPad' },
    { emoji: '💻', label: 'PC Windows y Mac' },
    { emoji: '📡', label: 'Formuler (MyTVOnline)' },
    { emoji: '📟', label: 'MAG Box' },
    { emoji: '⚡', label: 'Reproductor API Xtream' },
    { emoji: '🔗', label: 'Lista M3U' },
  ],
  protocols: [
    {
      num: '1',
      title: 'Aplicaciones King 365 TV a través de NovaStream',
      tag: 'Recomendado · Sin coste',
      text: 'Acceso directo en Android, Google TV, Box y Firestick con las versiones V2, V3 y V4 y las credenciales activadas por NovaStream.',
    },
    {
      num: '2',
      title: 'Reproductor API Xtream NovaStream',
      tag: 'Valorado · Cero ajustes complicados',
      text: 'Conexión rápida con el usuario, la contraseña y la URL del servidor facilitados por NovaStream, con sincronización automática de la guía EPG.',
    },
    {
      num: '3',
      title: 'Lista M3U y portal MAC',
      tag: 'iOS, tvOS y Smart TV',
      text: 'Pensado por el equipo de NovaStream para IBO Player, IBO Player Smarter, Bob Player y Hot Player en Samsung, LG, iPhone, iPad y Apple TV.',
    },
  ],
  packTableLabels: {
    formula: 'Plan',
    durationPrice: 'Duración / Precio',
    inclusions: 'Qué incluye',
    whatsapp: 'Enlace directo a WhatsApp',
  },
  packRecommended: 'Recomendado',
  packCta: 'Activar en WhatsApp',
  paymentNote: 'Transacciones protegidas mediante PayPal (con protección al comprador) o por transferencia bancaria inmediata SEPA.',
}
