import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from '../shared'

// Política de privacidade (European Portuguese translation of the French source).
export function PrivacyPt() {
  return (
    <DocLayout title="Política de privacidade">
      <H2 id="donnees-recueillies">Os dados pessoais recolhidos</H2>
      <P>Eis os dados que podemos registar:</P>
      <UL cols>
        <li>Apelido</li>
        <li>Nome próprio</li>
        <li>Morada postal</li>
        <li>Código postal</li>
        <li>Endereço de e-mail</li>
        <li>Número de telemóvel ou de telefone fixo</li>
        <li>País</li>
        <li>Data de nascimento</li>
      </UL>
      <P>
        Estes dados chegam-nos principalmente durante as suas conversas com os nossos consultores no WhatsApp
        (encomenda, ativação, suporte). O site regista também algumas preferências no seu navegador, descritas abaixo.
      </P>
      <H2 id="collecte">Recolha e utilização</H2>
      <P>As seguintes interações permitem-nos obter as suas informações pessoais:</P>
      <UL>
        <li>Conversa no WhatsApp com o seu consultor (encomenda, renovação, ativação)</li>
        <li>Envio das suas credenciais por e-mail</li>
      </UL>
      <P>
        O pagamento é feito por PayPal ou por transferência bancária imediata SEPA: nenhum dado de cartão bancário é
        introduzido nem conservado pelo site.
      </P>
      <P>As informações obtidas desta forma servem os objetivos abaixo indicados:</P>
      <UL>
        <li>Processamento das encomendas e das renovações</li>
        <li>Suporte técnico</li>
      </UL>
      <H2 id="cookies">Cookies e preferências</H2>
      <P>Durante a sua navegação, o site regista unicamente no seu navegador (armazenamento local):</P>
      <UL>
        <li>A sua aceitação da faixa de cookies, para que não volte a ser apresentada</li>
        <li>O idioma escolhido no seletor de idioma</li>
      </UL>
      <P>
        Estas informações permanecem no seu dispositivo e servem unicamente para memorizar as suas preferências de
        apresentação. Pode apagá-las a qualquer momento nas definições do seu navegador.
      </P>
      <H2 id="refus-et-suppression">Oposição e eliminação dos dados</H2>
      <P>Pode, a qualquer momento, opor-se à utilização das suas informações ou solicitar a sua eliminação.</P>
      <P>
        O direito de oposição designa a faculdade de cada utilizador se opor a que os seus dados sejam utilizados para
        alguns dos objetivos anunciados no momento em que foram recolhidos.
      </P>
      <P>
        O direito de eliminação designa, por sua vez, a faculdade de solicitar que os seus dados sejam apagados de um
        ficheiro, por exemplo de uma lista de envio de newsletters ou de ofertas comerciais direcionadas.
      </P>
      <P>Para exercer estes direitos, contacte-nos:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Secção online:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            página Contacto
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Consulta</H2>
      <P>
        Qualquer pessoa em causa pode obter a comunicação das informações que lhe dizem respeito, solicitar a sua
        retificação ou exigir o seu apagamento quando sejam inexatas.
      </P>
      <P>Os pedidos devem ser dirigidos:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Secção online:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            página Contacto
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Armazenamento</H2>
      <P>
        As suas informações estão alojadas em servidores protegidos e só são acessíveis a um número restrito de
        colaboradores, eles próprios sujeitos a uma estrita obrigação de sigilo e a controlos regulares.
      </P>
      <P>
        Vários dispositivos complementares asseguram diariamente a proteção adequada dos seus dados, em particular:
      </P>
      <UL cols>
        <li>Cifragem das comunicações (TLS)</li>
        <li>Autenticação reforçada dos administradores</li>
        <li>Controlo de acessos – equipa autorizada</li>
        <li>Controlo de acessos – titular da conta</li>
        <li>Supervisão permanente da rede</li>
        <li>Cópias de segurança</li>
        <li>Certificados digitais atualizados</li>
        <li>Palavras-passe cifradas</li>
        <li>Firewall aplicacional</li>
      </UL>
      <P>
        Adaptamos regularmente as nossas ferramentas a fim de acompanhar a evolução das tecnologias e de preservar a
        confidencialidade das suas operações. Convém, no entanto, recordar que nenhum dispositivo pode oferecer uma
        proteção absoluta: qualquer transferência de informações na Internet comporta uma parte de risco que é
        impossível eliminar totalmente, quaisquer que sejam as precauções tomadas.
      </P>
    </DocLayout>
  )
}
