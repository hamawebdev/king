import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from '../shared'
import { PackList } from '../PackList'

// Condiciones generales de venta (traducción de las Conditions générales de vente).
export function CgvEs() {
  return (
    <DocLayout
      title="Condiciones generales de venta"
      lead={
        <p>
          Las ventas en {BRAND}. La información de este sitio web se revisa con frecuencia para reflejar el estado actual
          de nuestras ofertas.
        </p>
      }
    >
      <H2 id="formules">Planes ofrecidos</H2>
      <P>
        {BRAND}, distribuidor autorizado de King 365 TV, ofrece cuatro planes de suscripción, sin compromisos ocultos. El
        precio indicado cubre toda la duración del plan:
      </P>
      <PackList />
      <H2 id="commande">Pedido</H2>
      <P>
        Todo pedido, renovación y activación se realiza directamente con un asesor de {BRAND} a través de{' '}
        <Wa />. El asesor confirma contigo el plan elegido y el dispositivo que se va a configurar antes del pago.
      </P>
      <H2 id="modes-de-reglement">Formas de pago aceptadas</H2>
      <P>
        El pago se acuerda con tu asesor en WhatsApp, mediante PayPal (con protección al comprador) o mediante
        transferencia bancaria inmediata SEPA. En el sitio web no se introduce ni se conserva ningún dato de tarjeta
        bancaria.
      </P>
      <P>
        Las comisiones cobradas por determinados proveedores de pago corren de tu cuenta y no se reembolsan en caso de
        cancelación.
      </P>
      <H2 id="activation">Activación</H2>
      <P>
        Tus credenciales (códigos API Xtream y enlace M3U) se te envían por WhatsApp y por correo electrónico en cuanto
        se valida el pago: generalmente en menos de 10 a 20 minutos durante nuestro horario de atención, y hasta 1 a 2
        horas en periodos de gran afluencia.
      </P>
      <H2 id="fiabilite">Fiabilidad</H2>
      <P>
        Nuestros equipos supervisan la disponibilidad de la plataforma día y noche. Los cortes debidos a la calidad de tu
        conexión a internet o a tu equipo escapan a nuestro control y no pueden sernos imputados. Hacemos todo lo posible
        para garantizar una emisión estable. Estos incidentes externos no dan derecho a ningún reembolso.
      </P>
      <H2 id="support">Soporte</H2>
      <P>
        Nuestro equipo responde en WhatsApp 7 días a la semana y te ayuda sin coste alguno a configurar tu dispositivo o
        tu TV.
      </P>
      <H2 id="annulation">Cancelación / Normas de devolución</H2>
      <P>
        Las condiciones de cancelación y reembolso (garantía técnica de 14 días y baremo de reembolso) se establecen en
        nuestra{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          política de reembolso
        </Link>
        , la única que hace fe. Toda solicitud se realiza por escrito en WhatsApp indicando el plan contratado.
      </P>
      <P>
        En algunos casos hay disponible una prueba de 3 horas o 24 horas antes de suscribirte. En caso de dificultad
        técnica, nuestro equipo está a tu disposición en WhatsApp.
      </P>
      <H2 id="interdits">Prohibiciones</H2>
      <P>
        Está prohibido compartir tus credenciales con otras personas. Un código permite una pantalla activa a la vez: el
        uso simultáneo de un mismo acceso en varios dispositivos, al igual que cualquier retransmisión del servicio,
        conlleva la rescisión inmediata, sin ningún reembolso.
      </P>
      <H2 id="donnees-personnelles">Respeto de tus datos personales</H2>
      <P>
        No cedemos a socios ninguna información sobre ti. Tu anonimato y tu privacidad son para nosotros una prioridad
        absoluta.
      </P>
      <P>
        La información de la cuenta y las estadísticas de conexión se utilizan únicamente para análisis internos
        destinados a dimensionar nuestros servidores y a mejorar de forma continua la calidad del servicio que te
        ofrecemos.
      </P>
    </DocLayout>
  )
}
