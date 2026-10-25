import { WHATSAPP_DISPLAY } from '@/lib/site'
import type { FaqId, FaqText } from './Faq.data'
import { Install, Wa } from './Faq.links'

/** Spec S14 en español (mismos enlaces y códigos Downloader que en francés). */
export const es: Record<FaqId, FaqText> = {
  commander: {
    question: '¿Cómo contrato un plan King 365 TV con NovaStream?',
    answer: (
      <p>
        Haz clic en el botón «Comprar ahora» (que te lleva directamente a nuestros planes de suscripción), elige la duración que
        quieras, introduce tus datos y confirma tu solicitud con nuestro equipo por WhatsApp (<Wa>wa.me/33751299176</Wa>) para una
        activación inmediata.
      </p>
    ),
  },
  delai: {
    question: '¿En cuánto tiempo recibiré mis códigos de suscripción?',
    answer: (
      <p>
        Durante nuestro horario de atención, el envío de tus credenciales por WhatsApp y por correo electrónico tras la validación
        del pago es casi instantáneo (normalmente en menos de 10 a 20 minutos). En periodos de mucha demanda, el proceso puede tardar
        entre 1 y 2 horas como máximo (y hasta 6 horas como máximo por correo electrónico).
      </p>
    ),
  },
  email: {
    question: 'No he recibido el correo electrónico en el plazo indicado, ¿debo preocuparme?',
    answer: (
      <p>
        No, no te preocupes. Nuestros envíos se realizan de 09:00 a 22:00 (GMT+1). Si tampoco ves nada en tu carpeta de correo no
        deseado (spam), contacta simplemente con el equipo de NovaStream por WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>): un asesor te
        enviará tus accesos y resolverá la situación de inmediato.
      </p>
    ),
  },
  'autres-apps': {
    question: '¿Puedo usar mi suscripción a King 365 TV en otras aplicaciones IPTV?',
    answer: (
      <p>
        ¡Sí, por supuesto! Además de las aplicaciones oficiales King 365, NovaStream te recomienda encarecidamente excelentes
        reproductores de pago como IBO Player, IBO Player Smarter, Hot Player o Bob Player por su notable fluidez. También puedes usar
        aplicaciones gratuitas disponibles en las tiendas de apps, como IPTV Smarters Pro o Smarters Lite.
      </p>
    ),
  },
  renouveler: {
    question: '¿Cómo renuevo mi suscripción a King 365 TV con NovaStream?',
    answer: (
      <p>
        Selecciona la opción de Renovación, indica tu dispositivo y marca la casilla de renovación indicando tu usuario actual, o haz
        clic directamente en nuestro <Wa>enlace de WhatsApp</Wa>. Nuestro soporte te envía los datos de pago: en cuanto envíes tu
        captura de pantalla (recibo), tu suscripción se prolonga en pocos minutos, con confirmación por WhatsApp y por correo
        electrónico.
      </p>
    ),
  },
  'memes-identifiants': {
    question: '¿Puedo renovar conservando exactamente las mismas credenciales de mi cuenta?',
    answer: (
      <p>
        Si contrataste tu suscripción inicial en nuestra web NovaStream, sí: prolongamos directamente tus credenciales actuales sin
        cambiar nada. En cambio, si tu suscripción anterior procedía de otro vendedor o distribuidor, te facilitaremos nuevas
        credenciales oficiales NovaStream para introducir en tu reproductor.
      </p>
    ),
  },
  'telecharger-v3': {
    question: '¿Cómo descargo la aplicación King 365 TV Box V3 (APK)?',
    answer: (
      <p>
        Ve directamente a nuestra sección de descargas <Install>haciendo clic aquí</Install> (justo encima, en esta misma página),
        introduce el nuevo código Downloader oficial de la Versión 3 (283367) y sigue nuestras instrucciones detalladas.
      </p>
    ),
  },
  'telecharger-v4': {
    question: '¿Cómo descargo e instalo King 365 TV Versión 4 (V4) y dónde encuentro el enlace oficial?',
    answer: (
      <p>
        <Install>Haz clic aquí</Install> para acceder a nuestra guía de instalación oficial. La Versión 4 (código Downloader:
        2763945) está diseñada para televisores Android TV, dispositivos Google TV recientes, TV Box Android y Amazon Fire TV Stick
        compatibles con la aplicación Downloader (excepto el Fire TV Stick HD de 2.ª generación con el sistema cerrado Vega OS, que
        bloquea los APK).
      </p>
    ),
  },
  'versions-officielles': {
    question: 'Aviso importante: ¿qué versiones oficiales de King 365 TV hay que instalar y qué códigos antiguos hay que eliminar?',
    answer: (
      <>
        <p>
          Para evitar cortes, errores de identificación y problemas de acceso, no descargues más las versiones antiguas obsoletas.
          Te recomendamos encarecidamente instalar las 3 nuevas versiones oficiales (V2, V3 y V4) en tu dispositivo para garantizar
          un funcionamiento continuo y una alternativa inmediata en caso de mantenimiento de un servidor:
        </p>
        <p className="font-semibold text-heading">✅ Nuevas versiones oficiales que debes instalar:</p>
        <ul className="grid gap-1">
          <li>• Versión 2 (V2): código Downloader 756917</li>
          <li>• Versión 3 (V3): código Downloader 283367</li>
          <li>• Versión 4 (V4): código Downloader 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Versiones antiguas obsoletas que debes evitar a toda costa (desinstálalas):</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  pays: {
    question: '¿El servicio de suscripción King 365 TV funciona en Francia, Canadá, Bélgica y en el extranjero?',
    answer: (
      <p>
        Sí, la suscripción funciona en cualquier parte del mundo siempre que tengas conexión a Internet (Francia, Canadá, Bélgica,
        Suiza, Argelia, Túnez, Marruecos, etc.).
      </p>
    ),
  },
  'multi-ecrans': {
    question: '¿Puedo usar mi suscripción en varios dispositivos u obtener una oferta multipantalla?',
    answer: (
      <p>
        Tu suscripción es personal y no se puede compartir simultáneamente: permite una sola pantalla activa a la vez. Puedes
        instalarla en dos dispositivos y usarlos de forma alterna (nunca al mismo tiempo, para evitar bloqueos). Si quieres ver en
        varias pantallas a la vez, <Wa>contacta con NovaStream</Wa> para aprovechar nuestras ofertas en suscripciones adicionales
        independientes.
      </p>
    ),
  },
  'sans-parabole': {
    question: '¿Puedo comprar King 365 TV sin tener antena parabólica?',
    answer: (
      <p>
        ¡Por supuesto! El servicio IPTV King 365 TV se emite al 100 % por Internet, sin ninguna antena parabólica. Basta con una
        conexión a Internet de banda ancha estable (se recomiendan al menos 30 Mbps para una fluidez óptima en 4K HDR).
      </p>
    ),
  },
  'televiseur-ancien': {
    question: 'Tengo un televisor antiguo, ¿qué solución hay?',
    answer: (
      <p>
        Para modernizar tu televisor, NovaStream te recomienda adquirir un TV Box Android certificado por Google (Google Certified)
        como Xiaomi Mi Box, Mecool o RockTek, o cualquier otro box Android con buenas características técnicas (mucha memoria RAM y
        un procesador potente) para una navegación ultrafluida.
      </p>
    ),
  },
  confiance: {
    question: '¿Cómo puedo saber que NovaStream es un distribuidor autorizado fiable en el que puedo confiar plenamente?',
    answer: (
      <p>
        NovaStream es un distribuidor autorizado reconocido, con más de 3 años de experiencia y decenas de miles de suscriptores
        fieles. Nuestro servicio está rigurosamente estructurado y es transparente: incluso es frecuente que preparemos y activemos
        los accesos de nuestros clientes antes del pago, como muestra de nuestra confianza y nuestra seriedad.
      </p>
    ),
  },
  essai: {
    question: '¿Puedo probar el servicio antes de pagar (periodo de prueba)?',
    answer: (
      <p>
        Sí, en algunos casos hay disponible una prueba de 3 o 24 horas, tras la cual puedes contratar una suscripción a partir de 6
        o 12 meses. <strong className="font-semibold text-heading">Nota importante:</strong> No se ofrecen pruebas durante los
        grandes partidos ni las noches de grandes competiciones para garantizar, en coordinación con King 365 TV, la máxima
        estabilidad del servidor para nuestros suscriptores activos.
      </p>
    ),
  },
  chaines: {
    question: '¿Qué canales incluye la suscripción?',
    answer: (
      <p>
        Accedes a una enorme selección de canales de todo el mundo: Francia, Reino Unido, Estados Unidos, Canadá, Bélgica, Suiza,
        Magreb, África y Europa, con todos los paquetes de Deportes, Noticias, Cine, Series, Infantil y Documentales, además de
        +16.000 películas y series VOD y Replay de hasta 15 días.
      </p>
    ),
  },
  'ibo-expire': {
    question: 'Mi IBO Player (o Hot Player / Bob Player) me indica que la activación ha caducado, ¿qué hago?',
    answer: (
      <p>
        IBO Player, IBO Player Smarter, Hot Player y Bob Player son reproductores de pago independientes que exigen una activación al
        terminar su periodo de prueba. En Android, instala nuestra aplicación oficial gratuita King 365 TV para evitar estos costes.
        Si no tienes un televisor Android (p. ej., una Smart TV Samsung o LG), NovaStream se encarga de activar directamente tu
        reproductor por unos 8 € / año: solo tienes que contactar con nuestro soporte por <Wa>WhatsApp</Wa>.
      </p>
    ),
  },
  'licence-payante': {
    question: '¿La aplicación 9Xtream o IPTV Smarters Pro me pide pagar o indica que mi activación ha caducado?',
    answer: (
      <p>
        9Xtream y algunas ediciones de IPTV Smarters Pro son servicios de pago que requieren una licencia de software. Usa gratis
        nuestras aplicaciones oficiales King 365 TV (V2, V3, V4) en dispositivos Android TV / Box, o contacta con nuestro{' '}
        <Wa>soporte de WhatsApp</Wa> para activar una aplicación de pago compatible en tus otras pantallas.
      </p>
    ),
  },
  'failed-to-authorize': {
    question: 'INFO para usuarios de LG y SAMSUNG: la aplicación Smarters muestra el error «Failed to authorize», ¿qué hago?',
    answer: (
      <>
        <p>
          La antigua aplicación Smarters tiene actualmente un fallo de acceso (Error: «Failed to authorize»). No te preocupes: no es
          un problema de nuestros servidores, sino de la propia aplicación.
        </p>
        <p>
          ⬇️ Solución: los desarrolladores piden pasar a la nueva versión. Descarga simplemente la nueva versión Smarters Pro desde
          la tienda de aplicaciones de tu TV: tus credenciales actuales siguen siendo exactamente las mismas.
        </p>
      </>
    ),
  },
  'lien-serveur': {
    question: 'El enlace del servidor no funciona cuando introduzco mis datos, ¿por qué?',
    answer: (
      <p>
        Para garantizar la máxima seguridad y estabilidad, NovaStream renueva y actualiza regularmente sus enlaces de servidor (sin
        compartirlos públicamente). Comprueba que el enlace empiece por http:// y contacta con nuestro soporte por WhatsApp
        (<Wa>{WHATSAPP_DISPLAY}</Wa>) para obtener al instante el enlace actualizado.
      </p>
    ),
  },
}
