import type { InstallCopy } from './content'

export const es: InstallCopy = {
  guarantees: [
    {
      emoji: '🔄',
      title: 'Renovación sencilla',
      text: 'Amplía tu acceso con un clic en WhatsApp sin reinstalar tus aplicaciones ni perder tus favoritos.',
    },
    {
      emoji: '⚡',
      title: 'Activación rápida',
      text: 'Credenciales Xtream y enlace M3U enviados al instante por WhatsApp y por correo electrónico en cuanto se confirma tu pedido.',
    },
    {
      emoji: '🛡️',
      title: 'Garantía y seguimiento continuo (Satisfecho o compensado)',
      text: 'Acompañamiento personalizado y garantía total de continuidad durante todo el periodo de tu suscripción.',
    },
  ],

  head: {
    eyebrow: '✨ GUÍAS VISUALES 2026 · DISTRIBUIDOR AUTORIZADO',
    title: 'Instalación de King 365 TV 2026: guías interactivas paso a paso',
    subtitle:
      'Selecciona el dispositivo en el que quieres ver tus programas y sigue los sencillos pasos. La mayoría de nuestros suscriptores están listos en menos de 5 minutos.',
  },

  kpis: [
    { value: '< 5 min', label: 'Instalación rápida' },
    { value: '100 %', label: 'Compatible con todas las pantallas' },
    { value: '7/7 · 24/7', label: 'Soporte técnico incluido' },
  ],

  aside: {
    title: 'Guías de configuración NovaStream',
    indicators: [
      { value: '< 5 min', label: 'Instalación rápida' },
      { value: '100 %', label: 'Compatible con todas las pantallas' },
      { value: '7/7', label: 'Soporte técnico incluido' },
    ],
    helpTitle: '¿Algún problema durante la configuración?',
    helpText: 'Nuestros asesores de NovaStream te responden 7 días a la semana por WhatsApp',
    tutorial: '📖 Ver el tutorial detallado paso a paso de NovaStream (con capturas de pantalla)',
    changeDevice: 'Cambiar de dispositivo',
  },

  hub: {
    chooseDevice: 'Elige tu dispositivo',
    deviceKicker: (n) => `Dispositivo ${n}`,
    stepPrefix: (n) => `Paso ${n}: `,
    copy: 'Copiar',
    copied: 'Copiado',
    copyAria: (code, label) => `Copiar el código ${code} (${label})`,
    copiedAnnounce: (code) => `Código ${code} copiado`,
  },

  faqTitle: 'Preguntas frecuentes',
  faqAnswer: 'Respuesta:',
  faq: [
    {
      q: 'He introducido mis credenciales pero la aplicación muestra un error, ¿qué hago?',
      a: 'Comprueba primero el **enlace del servidor (Server URL)**: tiene que empezar obligatoriamente por `http://` **— y no** por `https://`. Esa simple letra es la causa de error más frecuente. Asegúrate también de que no se haya colado ningún espacio de más al copiar y pegar. **¿Sigues bloqueado?** Envíanos un mensaje por WhatsApp ([+33 7 51 29 91 76](wa:help)): nuestro equipo revisará tus accesos y configurará la suscripción a distancia por ti.',
    },
    {
      q: '¿Qué velocidad de Internet necesito para una emisión fluida?',
      a: 'Una conexión de **10 a 20 Mbps** es el mínimo necesario para un streaming fluido en Full HD. Recomendamos más velocidad (**30 Mbps o más**) si quieres disfrutar al máximo de las emisiones en **auténtico 4K HDR a 60 FPS** o si varias personas usan la misma conexión a Internet a la vez en casa.',
    },
    {
      q: '¿Tengo que usar una VPN con mi suscripción?',
      a: '**No es obligatorio**: nuestros planes (en especial el Pack Signature) incluyen un **DNS dedicado** que esquiva automáticamente los bloqueos de los proveedores de Internet. Si aun así usas una VPN, **elige siempre un servidor situado en tu propio país**: así tendrás la mejor velocidad y la latencia más baja (no te conectes a un país lejano).',
    },
    {
      q: '¿Por qué necesito un reproductor de pago en algunos dispositivos?',
      a: 'Los reproductores de pago (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) rinden mucho mejor en el hardware. En una **Smart TV (Samsung / LG) o en Apple**, te recomendamos encarecidamente una aplicación de pago (~8 € / año tras 7 días de prueba gratis): funciona con mucha más fluidez que las aplicaciones gratuitas y recuerda dónde dejaste tus películas y series. En cambio, en **Android, Google TV, TV Box o Firestick**, nuestras aplicaciones oficiales **King 365 TV (V2, V3 y V4)** funcionan de maravilla y son **100 % gratuitas**.',
    },
  ],

  helpBanner: {
    title: '¿Atascado en algún paso? Configuramos tu dispositivo contigo.',
    subtitle:
      'Envía un mensaje a nuestro equipo de soporte por WhatsApp: te acompañaremos paso a paso o activaremos tu suscripción directamente a distancia, sea cual sea tu pantalla.',
    whatsappCta: '💬 Obtener ayuda por WhatsApp',
    plansCta: 'Contratar una suscripción',
  },
}
