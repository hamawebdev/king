import type { Device } from './devices'

const PAID = 'APLICACIÓN DE PAGO · ~8 € / año · 7 días de prueba gratis'
const PAID_WIN = 'APLICACIÓN DE PAGO (~8 € / año · 7 días de prueba gratis)'
const CODE = 'Código Downloader'

export const DEVICES_ES: Device[] = [
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
        title: 'Alerta prioritaria Smarters Pro',
        paragraphs: [
          'No uses IPTV Smarters Pro ni Smarters Player en Smart TV: la versión para Smart TV ya no está optimizada para Samsung y LG. Provoca cortes frecuentes, inestabilidad y bloqueos de reproducción que no tienen nada que ver con nuestro servicio. Usa una de las aplicaciones recomendadas a continuación (o IPTV Stream Player si buscas una alternativa gratuita).',
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: '¿Por qué elegir reproductores de pago en Smart TV?',
        paragraphs: [
          'IBO Player Pro, IBO Player Smarter, Bob Player y Hot Player ofrecen cada una 7 días de prueba gratis. Garantizan una estabilidad 4K ejemplar, cargan la guía EPG al instante y te permiten retomar tus películas y series en el segundo exacto en que las dejaste. Al terminar la prueba, nuestro equipo puede activar tu licencia oficial (~8 € / año) directamente por WhatsApp.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Nota sobre Android TV',
        paragraphs: [
          '¿Tienes una Android TV o Google TV (Sony, TCL, Xiaomi, Philips)? Instala la aplicación gratuita Downloader desde Google Play y sigue el método Android / Firestick para instalar gratis nuestras aplicaciones oficiales King 365 TV (V2, V3 o V4).',
        ],
      },
      {
        type: 'apps',
        title: 'Aplicaciones recomendadas',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Instálala desde Samsung Apps / LG Content Store → Anota el *Device ID (MAC)* y la *Device Key* → Envíanos una foto por WhatsApp ([wa.me/33751299176](wa:iboDevice)) para cargar directamente tu suscripción y activarla.',
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Interfaz moderna y ultraestable con reanudación de VOD y EPG completa.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Zapping instantáneo y gestión fluida de los paquetes de canales.',
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
        subtitle: 'AVISO SOBRE EL AMAZON FIRE TV STICK HD DE 2.ª GENERACIÓN:',
        paragraphs: [
          'Recomendamos encarecidamente a nuestros clientes que no compren el Amazon Fire TV Stick HD (2.ª generación). Este modelo reciente funciona con el sistema cerrado **Vega OS**, a diferencia de las versiones anteriores, que usaban un sistema Android / Fire OS compatible con aplicaciones externas:',
        ],
        items: [
          '❌ La aplicación **Downloader** no está disponible, a diferencia de los modelos anteriores.',
          '❌ La instalación de aplicaciones externas o archivos APK está muy restringida.',
          '❌ Por lo tanto, este modelo no es compatible con nuestro servicio.',
          '✅ Para usar nuestras aplicaciones, te aconsejamos un dispositivo con Android (Xiaomi, Mecool) o un Fire TV Stick 4K / 4K Max / Lite / Cube compatible con Downloader y con la instalación de APK.',
        ],
      },
      {
        type: 'steps',
        title: 'Los 4 pasos de instalación con Downloader',
        steps: [
          '**Instala Downloader:** En la pantalla de inicio de Fire TV, ve a Buscar, escribe *«Downloader»* e instálala gratis.',
          '**Activa las opciones para desarrolladores:** Ve a `Configuración > Mi Fire TV > Acerca de` y pulsa **7 veces seguidas rápidamente** sobre el nombre del Fire TV Stick.',
          '**Permite orígenes desconocidos:** En `Opciones para desarrolladores > Instalar aplicaciones desconocidas`, activa el permiso para **Downloader (ON)**.',
          '**Introduce el código Downloader:** Abre Downloader, escribe el código de la aplicación que quieras (ver abajo) y pulsa **Go**.',
        ],
      },
      {
        type: 'apps',
        title: 'Aplicaciones y códigos Downloader en Firestick',
        apps: [
          {
            name: 'King 365 TV — Versión 2 (V2)',
            mark: 'V2',
            badge: 'OFICIAL · GRATIS',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '756917' }],
            text: 'Inicio de sesión con Usuario + Contraseña.',
          },
          {
            name: 'King 365 TV — Versión 3 (V3)',
            mark: 'V3',
            badge: 'OFICIAL · GRATIS',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '283367' }],
            text: 'Inicio de sesión con Usuario + Contraseña.',
          },
          {
            name: 'King 365 TV — Versión 4 (V4 - Edición 2026)',
            mark: 'V4',
            badge: 'ESPECIAL PANTALLAS DE TV · GRATIS',
            badgeTone: 'special',
            codes: [{ label: CODE, code: '2763945' }],
            text: 'Exclusivamente para pantallas de TV y Box. Introduce **Playlist Name** (el nombre que quieras) + **Usuario** + **Contraseña**.',
          },
          {
            name: 'Reproductores de pago',
            badge: '~8 € / año · 7 días de prueba gratis',
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'Aplicaciones King365TV: códigos obsoletos que debes evitar a toda costa (desinstálalas)',
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
    detail: 'Móvil, tablet, Google TV, TV Box Xiaomi / Mecool',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Box Xiaomi / Mecool, smartphones y tablets',
    blocks: [
      {
        type: 'apps',
        title: 'Instalación con Downloader (TV y Box) o APK directo',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: CODE, code: '223650' }],
            text: 'Compatible con TV, Box, smartphones y tablets.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: CODE, code: '333650' }],
            text: 'Compatible con TV, Box, smartphones y tablets.',
          },
          {
            name: 'King 365 TV V4 (Edición 2026)',
            mark: 'V4',
            codes: [{ label: CODE, code: '443650' }],
            text: '**Solo para Google TV recientes, televisores Android recientes y TV Box Android** *(no compatible con móviles)*. Introduce *Playlist Name + Usuario + Contraseña*.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Nota sobre redundancia King 365',
        paragraphs: [
          'Te aconsejamos instalar o conservar las 3 versiones (V2, V3, V4) para tener siempre una aplicación de reserva lista en caso de mantenimiento en alguna de ellas.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Nota sobre Xtream / M3U y soporte',
        paragraphs: [
          'Si prefieres usar tu propio reproductor (TiviMate, IBO Player, Bob Player...), te facilitamos los accesos completos en **Xtream Codes** o **M3U**, o configuramos la aplicación a distancia por WhatsApp ([+33 7 51 29 91 76](wa:help)).',
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS y tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS y tvOS',
    blocks: [
      {
        type: 'apps',
        title: 'Descarga directa desde la **App Store oficial** (sin VLC ni Smarters Pro en iPhone)',
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APLICACIÓN DE PAGO · ~8 € / año · Prueba gratis incluida', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'PC con Windows',
    detail: 'Microsoft Store',
    guideTitle: 'PC con Windows',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Instalación directa desde **Microsoft Store** (sin VLC ni BlueStacks)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Edición Windows)',
            badge: 'GRATIS',
            badgeTone: 'free',
            text: 'Versión para ordenador actualizada, fluida y gratuita con credenciales Xtream.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'APLICACIÓN DE PAGO (~8 € / año · Prueba gratis incluida)', badgeTone: 'paid' },
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
        title: 'Instalación en MacBook e iMac (sin VLC)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'GRATIS', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'APLICACIÓN DE PAGO · ~8 € / año', badgeTone: 'paid' },
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
        title: 'Configuración rápida por **dirección MAC**',
        steps: [
          '**Envía la dirección MAC:** Busca la dirección en la parte trasera del aparato (`00:1A:79:XX:XX:XX`) y envíanosla por WhatsApp ([wa.me/33751299176](wa:magAddress)).',
          '**Recibe el portal:** Te enviamos tu enlace `Portal URL` activado.',
          '**Ajustes:** Ve a `Settings > System Settings > Servers > Portals`.',
          '**Introduce los datos:** Escribe un nombre en `Portal 1 Name` y pega la URL en `Portal 1 URL`.',
          '**Guarda:** Pulsa OK para guardar y reinicia el aparato.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'Android TV de alto rendimiento',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Funciona con Android TV y Google Play Store integrada',
        steps: [
          'Instala gratis **Downloader** desde Google Play Store.',
          'Autoriza Downloader en `Ajustes > Preferencias del dispositivo > Seguridad y restricciones`.',
          'Introduce el código Downloader de **King 365 TV V3 (333650)**, **King 365 TV V4 (443650)** o **IBO Player Pro (481220)**.',
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
    detail: 'Aplicación MyTVOnline 2 y 3',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 y MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Importante',
        paragraphs: ['En Formuler, usa los **códigos Xtream** (URL del portal + Usuario + Contraseña) y **no la dirección MAC**:'],
      },
      {
        type: 'steps',
        steps: [
          '**Abre MyTVOnline:** Inicia *MyTVOnline 2* o *MyTVOnline 3* (o *DOL2* en Dreamlink).',
          '**Añade un portal:** Ve a `Menú > Conexiones > Añadir portal (Add Portal)`.',
          '**Ponle nombre al portal:** Escribe el nombre que quieras (p. ej. *NovaStream*).',
          '**Activa el inicio de sesión:** Cambia la opción `Inicio de sesión requerido (Login Required)` a **ON**.',
          '**Introduce tus accesos:** Escribe la URL del portal, el usuario y la contraseña que recibiste.',
          '**Conéctate:** Pulsa **Connect** para cargar al instante los canales y el VOD.',
        ],
      },
    ],
  },
]
