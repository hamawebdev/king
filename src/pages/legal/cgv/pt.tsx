import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from '../shared'
import { PackList } from '../PackList'

// Condições gerais de venda (European Portuguese translation of the French source).
export function CgvPt() {
  return (
    <DocLayout
      title="Condições gerais de venda"
      lead={
        <p>
          As vendas na {BRAND}. As informações deste site são revistas com frequência para refletir o estado atual das
          nossas ofertas.
        </p>
      }
    >
      <H2 id="formules">Planos disponíveis</H2>
      <P>
        A {BRAND}, Distribuidor Autorizado King 365 TV, propõe quatro planos de subscrição, sem qualquer compromisso
        oculto. O preço indicado cobre toda a duração do plano:
      </P>
      <PackList />
      <H2 id="commande">Encomenda</H2>
      <P>
        Qualquer encomenda, renovação e ativação é efetuada diretamente com um consultor {BRAND} através do{' '}
        <Wa />. O consultor confirma consigo o plano escolhido e o dispositivo a configurar antes do pagamento.
      </P>
      <H2 id="modes-de-reglement">Meios de pagamento aceites</H2>
      <P>
        O pagamento é acordado com o seu consultor no WhatsApp, por PayPal (com proteção do comprador) ou por
        transferência bancária imediata SEPA. Nenhum dado de cartão bancário é introduzido nem conservado no site.
      </P>
      <P>
        As comissões cobradas por determinados prestadores de serviços de pagamento ficam a seu cargo e não são
        restituídas em caso de cancelamento.
      </P>
      <H2 id="activation">Ativação</H2>
      <P>
        As suas credenciais (códigos API Xtream e ligação M3U) são-lhe enviadas por WhatsApp e por e-mail logo após a
        validação do pagamento: geralmente em menos de 10 a 20 minutos durante o nosso horário de funcionamento, e até
        1 a 2 horas em períodos de grande afluência.
      </P>
      <H2 id="fiabilite">Fiabilidade</H2>
      <P>
        As nossas equipas monitorizam a disponibilidade da plataforma dia e noite. As interrupções devidas à qualidade
        da sua ligação à internet ou ao seu equipamento escapam ao nosso controlo e não nos podem ser imputadas.
        Fazemos todos os possíveis para garantir uma emissão estável. Estes incidentes externos não conferem direito a
        qualquer reembolso.
      </P>
      <H2 id="support">Suporte</H2>
      <P>
        A nossa equipa responde no WhatsApp 7 dias por semana e acompanha-o sem custos na configuração do seu
        dispositivo ou da sua TV.
      </P>
      <H2 id="annulation">Cancelamento / Regras de restituição</H2>
      <P>
        As condições de cancelamento e de reembolso (garantia técnica de 14 dias e tabela de reembolso) são fixadas
        pela nossa{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          política de reembolso
        </Link>
        , que é a única que faz fé. Qualquer pedido deve ser feito por escrito no WhatsApp, indicando o plano
        encomendado.
      </P>
      <P>
        Em certos casos, está disponível um teste com a duração de 3 horas ou 24 horas antes da subscrição. Em caso de
        dificuldade técnica, a nossa equipa está ao seu dispor no WhatsApp.
      </P>
      <H2 id="interdits">Proibições</H2>
      <P>
        É proibida a partilha das suas credenciais com outras pessoas. Um código permite um ecrã ativo de cada vez: a
        utilização simultânea do mesmo acesso em vários dispositivos, tal como qualquer retransmissão do serviço,
        implica a rescisão imediata, sem qualquer reembolso.
      </P>
      <H2 id="donnees-personnelles">Respeito pelos seus dados pessoais</H2>
      <P>
        Nenhuma informação que lhe diga respeito é cedida a parceiros. O seu anonimato e a sua privacidade são para nós
        uma prioridade absoluta.
      </P>
      <P>
        As informações de conta e as estatísticas de ligação servem unicamente para análises internas destinadas a
        dimensionar os nossos servidores e a melhorar continuamente a qualidade do serviço que lhe prestamos.
      </P>
    </DocLayout>
  )
}
