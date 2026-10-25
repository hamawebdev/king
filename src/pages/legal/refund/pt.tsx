import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Refund schedule (days counted from activation), same tiers as the French source.
const SCHEDULE: [string, string][] = [
  ['Até ao 14.º dia:', '85%'],
  ['Do 15.º ao 60.º dia:', '65%'],
  ['Do 61.º ao 90.º dia:', '40%'],
  ['Do 91.º ao 120.º dia:', '25%'],
  ['Do 121.º ao 180.º dia:', '20%'],
  ['Para além de 180 dias:', '12%'],
]

// Política de reembolso (European Portuguese translation of the French source).
export function RefundPt() {
  return (
    <DocLayout
      title="Política de reembolso"
      lead={
        <p>
          As nossas regras de reembolso. Pedimos-lhe que as leia antes de qualquer encomenda: descrevem as únicas
          modalidades de cancelamento e de reembolso aplicadas pela {BRAND}.
        </p>
      }
    >
      <P>Estas regras aplicam-se aos quatro planos {BRAND}:</P>
      <PackList />
      <H2 id="garantie-technique">Garantia técnica de 14 dias</H2>
      <P>
        Empenhamo-nos ao máximo no bom funcionamento do nosso serviço, mas cada instalação é diferente e numerosos
        fatores externos podem influenciar a qualidade da emissão em sua casa. Se um incidente técnico que não
        consigamos corrigir o impedir de utilizar normalmente o serviço, reembolsá-lo-emos da totalidade da sua
        encomenda nos 14 dias seguintes à sua primeira compra, qualquer que seja o dispositivo utilizado.
      </P>
      <P>Fora deste caso, qualquer pedido de reembolso segue a tabela abaixo.</P>
      <H2 id="points-a-respecter">Pontos a respeitar</H2>
      <P>
        Uma avaria relacionada com o seu próprio equipamento só pode dar lugar a reembolso se aceitar a nossa
        assistência e aplicar as configurações que lhe indicarmos. Se, ainda assim, o problema persistir,
        procederemos ao reembolso, desde que nos envie um comprovativo da avaria, idealmente sob a forma de vídeo.
        Antes de qualquer pedido relacionado com um problema técnico, pedimos-lhe que nos escreva no WhatsApp para que a
        nossa equipa possa intervir.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Importante: pedimos-lhe que não abra um litígio junto do PayPal ou do seu banco para obter um reembolso,
          pois seríamos obrigados a transmitir os detalhes da sua encomenda, o que pode implicar custos que podem
          atingir 1.500 € a seu cargo
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            Qualquer pedido de reembolso aceite implica o encerramento definitivo da conta e a impossibilidade de contratar
            novamente uma subscrição!
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Tabela de reembolso</H2>
      <P>
        Para qualquer outro pedido, a parte do preço restituída depende do número de dias decorridos desde a ativação
        do seu acesso:
      </P>
      <ScheduleList rows={SCHEDULE} suffix="do preço restituído" />
      <H2 id="modalites">Modalidades</H2>
      <P>Qualquer pedido é feito junto da nossa equipa, por escrito no WhatsApp.</P>
      <P>
        O reembolso é efetuado pelo meio utilizado no pagamento: na sua conta PayPal, ou por transferência SEPA para a
        conta bancária de origem no caso de um pagamento por transferência bancária imediata SEPA, em princípio num
        prazo máximo de 20 dias úteis após validação.
      </P>
      <P>
        As comissões retidas pelo seu prestador de serviços de pagamento no momento da compra não são restituídas e
        ficam a cargo do cliente.
      </P>
      <P>
        Se tiver dificuldades em encomendar, ativar ou renovar um acesso, a nossa equipa está pronta para o
        acompanhar.
      </P>
      <HelpCard id="une-question" heading="Tem alguma dúvida?">
        <P>
          Para qualquer questão sobre estas regras de reembolso, escreva-nos através do <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
