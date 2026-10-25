import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Baremo de reembolso (días contados desde la activación), igual que el francés.
const SCHEDULE: [string, string][] = [
  ['Hasta el día 14:', '85 %'],
  ['Del día 15 al 60:', '65 %'],
  ['Del día 61 al 90:', '40 %'],
  ['Del día 91 al 120:', '25 %'],
  ['Del día 121 al 180:', '20 %'],
  ['Más de 180 días:', '12 %'],
]

// Política de reembolso (traducción de la Politique de remboursement).
export function RefundEs() {
  return (
    <DocLayout
      title="Política de reembolso"
      lead={
        <p>
          Nuestras normas de reembolso. Te rogamos que las leas antes de realizar cualquier pedido: describen las únicas
          condiciones de cancelación y reembolso que aplica {BRAND}.
        </p>
      }
    >
      <P>Estas normas se aplican a los cuatro planes de {BRAND}:</P>
      <PackList />
      <H2 id="garantie-technique">Garantía técnica de 14 días</H2>
      <P>
        Ponemos el máximo cuidado en el funcionamiento de nuestro servicio, pero cada instalación es diferente y
        numerosos factores externos pueden influir en la calidad de la emisión en tu casa. Si una incidencia técnica que
        no logremos corregir te impide utilizar el servicio con normalidad, te reembolsaremos la totalidad de tu pedido
        dentro de los 14 días siguientes a tu primera compra, sea cual sea el dispositivo utilizado.
      </P>
      <P>Fuera de este caso, toda solicitud de reembolso se rige por el baremo que figura a continuación.</P>
      <H2 id="points-a-respecter">Aspectos que debes respetar</H2>
      <P>
        Una avería relacionada con tu propio equipo solo puede dar lugar a un reembolso si aceptas nuestra asistencia y
        aplicas los ajustes que te indiquemos. Si, a pesar de todo, el problema persiste, procederemos al reembolso,
        siempre que nos envíes una prueba del mal funcionamiento, idealmente en forma de vídeo. Antes de cualquier
        solicitud relacionada con un problema técnico, escríbenos por WhatsApp para que nuestro equipo pueda intervenir.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Importante: te rogamos que no abras una disputa con PayPal o con tu banco para obtener un reembolso, ya que
          estaríamos obligados a transmitir los detalles de tu pedido, lo que puede ocasionar gastos de hasta
          1.500&nbsp;€ a tu cargo
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            ¡Toda solicitud de reembolso aceptada conlleva el cierre definitivo de la cuenta y la imposibilidad de volver
            a contratar una suscripción!
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Baremo de reembolso</H2>
      <P>
        Para cualquier otra solicitud, la parte del precio que se devuelve depende del número de días transcurridos
        desde la activación de tu acceso:
      </P>
      <ScheduleList rows={SCHEDULE} suffix="del precio devuelto" />
      <H2 id="modalites">Procedimiento</H2>
      <P>Toda solicitud se dirige a nuestro equipo, por escrito, en WhatsApp.</P>
      <P>
        El reembolso se efectúa por el medio utilizado para el pago: en tu cuenta de PayPal o, para un pago por
        transferencia bancaria inmediata SEPA, mediante transferencia SEPA a la cuenta bancaria de origen, en principio
        en un plazo máximo de 20 días hábiles tras la validación.
      </P>
      <P>
        Las comisiones retenidas por tu proveedor de pago en el momento de la compra no se reembolsan y corren a cargo
        del cliente.
      </P>
      <P>
        Si tienes dificultades para realizar un pedido, activar o renovar un acceso, nuestro equipo está preparado para
        ayudarte.
      </P>
      <HelpCard id="une-question" heading="¿Alguna pregunta?">
        <P>
          Para cualquier duda sobre estas normas de reembolso, escríbenos a través de <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
