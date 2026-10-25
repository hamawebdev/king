import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from '../shared'

// Política de privacidad (traducción de la Politique de confidentialité).
export function PrivacyEs() {
  return (
    <DocLayout title="Política de privacidad">
      <H2 id="donnees-recueillies">Datos personales recopilados</H2>
      <P>Estos son los datos que podemos registrar:</P>
      <UL cols>
        <li>Apellidos</li>
        <li>Nombre</li>
        <li>Dirección postal</li>
        <li>Código postal</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono móvil o fijo</li>
        <li>País</li>
        <li>Fecha de nacimiento</li>
      </UL>
      <P>
        Estos datos nos llegan principalmente durante tus conversaciones con nuestros asesores en WhatsApp (pedido,
        activación, soporte). El sitio web también guarda algunas preferencias en tu navegador, que se describen a
        continuación.
      </P>
      <H2 id="collecte">Recopilación y uso</H2>
      <P>Los siguientes intercambios nos permiten obtener tu información personal:</P>
      <UL>
        <li>Conversación de WhatsApp con tu asesor (pedido, renovación, activación)</li>
        <li>Envío de tus credenciales por correo electrónico</li>
      </UL>
      <P>
        El pago se realiza mediante PayPal o mediante transferencia bancaria inmediata SEPA: el sitio web no recoge ni
        conserva ningún dato de tarjeta bancaria.
      </P>
      <P>La información obtenida de este modo se utiliza para los fines siguientes:</P>
      <UL>
        <li>Tramitación de pedidos y renovaciones</li>
        <li>Soporte técnico</li>
      </UL>
      <H2 id="cookies">Cookies y preferencias</H2>
      <P>Durante tu navegación, el sitio web guarda únicamente en tu navegador (almacenamiento local):</P>
      <UL>
        <li>Tu aceptación del aviso de cookies, para no volver a mostrarlo</li>
        <li>El idioma elegido en el selector de idioma</li>
      </UL>
      <P>
        Esta información permanece en tu dispositivo y solo sirve para recordar tus preferencias de visualización.
        Puedes borrarla en cualquier momento desde los ajustes de tu navegador.
      </P>
      <H2 id="refus-et-suppression">Oposición y supresión de los datos</H2>
      <P>Puedes oponerte en cualquier momento al uso de tu información o solicitar su supresión.</P>
      <P>
        El derecho de oposición designa la facultad de cada usuario de oponerse a que sus datos se utilicen para algunos
        de los fines anunciados en el momento de su recogida.
      </P>
      <P>
        El derecho de supresión designa, por su parte, la facultad de solicitar que sus datos se borren de un fichero,
        por ejemplo de una lista de envío de boletines informativos o de ofertas comerciales segmentadas.
      </P>
      <P>Para ejercer estos derechos, contáctanos:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Sección en línea:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            página de Contacto
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Consulta</H2>
      <P>
        Toda persona interesada puede obtener la comunicación de la información que le concierne, solicitar su
        rectificación o reclamar su supresión cuando sea inexacta.
      </P>
      <P>Las solicitudes deben dirigirse a:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Sección en línea:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            página de Contacto
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Almacenamiento</H2>
      <P>
        Tu información se aloja en servidores protegidos y solo es accesible para un número reducido de colaboradores, a
        su vez sujetos a una estricta obligación de confidencialidad y a controles periódicos.
      </P>
      <P>Varios dispositivos complementarios velan a diario por la correcta protección de tus datos, en particular:</P>
      <UL cols>
        <li>Cifrado de las comunicaciones (TLS)</li>
        <li>Autenticación reforzada de los administradores</li>
        <li>Control de accesos – equipo autorizado</li>
        <li>Control de accesos – titular de la cuenta</li>
        <li>Supervisión permanente de la red</li>
        <li>Copias de seguridad</li>
        <li>Certificados digitales actualizados</li>
        <li>Contraseñas cifradas</li>
        <li>Cortafuegos de aplicaciones</li>
      </UL>
      <P>
        Adaptamos periódicamente nuestras herramientas para seguir la evolución de las tecnologías y preservar la
        confidencialidad de tus operaciones. No obstante, conviene recordar que ningún dispositivo puede ofrecer una
        protección absoluta: toda transferencia de información por Internet conlleva un riesgo que es imposible
        eliminar por completo, sean cuales sean las precauciones adoptadas.
      </P>
    </DocLayout>
  )
}
