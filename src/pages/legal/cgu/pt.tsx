import { BRAND_UPPER } from '@/lib/site'
import { B, DocLayout, H2, HelpCard, NumberedItem as Item, P, Wa } from '../shared'

// Termos de utilização (European Portuguese translation of the French source).
export function CguPt() {
  return (
    <DocLayout
      title="Termos de utilização"
      lead={
        <p>
        Os presentes termos estabelecem o enquadramento em que cada visitante pode consultar e utilizar o site
        da <B />. Qualquer navegação nas nossas páginas implica a leitura e a aceitação integral do texto que se segue. Se
        alguma destas regras não lhe convier, convidamo-lo a abandonar o site da <B /> e a não abrir conta na
        plataforma.
        </p>
      }
    >
      <H2 id="droits-sur-les-contenus">DIREITOS SOBRE OS CONTEÚDOS</H2>
      <P>
        © 2026 <B /> – todos os direitos reservados. Os textos, elementos visuais e elementos gráficos aqui publicados
        pertencem à <B /> ou aos seus parceiros e podem incluir sinais distintivos registados pela <B /> ou por
        terceiros. Pode exibir, imprimir ou guardar determinadas páginas para uso estritamente privado, desde que
        mantenha intactas e perfeitamente legíveis todas as menções de propriedade nelas constantes.
      </P>
      <P>
        Qualquer reprodução, difusão ou exploração que exceda esse uso privado, sem acordo prévio por escrito, pode
        constituir contrafação e implicar a sua plena responsabilidade.
      </P>
      <P>
        Embora a <B /> se esforce por manter as suas páginas cuidadosamente atualizadas, não é dada qualquer garantia
        quanto à exaustividade, à exatidão ou à atualidade das informações publicadas, que podem ser alteradas a
        qualquer momento e sem aviso prévio. A totalidade dos conteúdos é disponibilizada no estado em que se encontra,
        sem compromisso de disponibilidade permanente, e a sua consulta, tal como a sua utilização, é feita sob a sua
        exclusiva e inteira responsabilidade, por sua conta e risco.
      </P>
      <H2 id="obligations-de-chaque-membre">OBRIGAÇÕES DE CADA MEMBRO</H2>
      <P>
        Cada membro responde pessoalmente pelas ações realizadas a partir da sua conta. É proibido utilizar o site de
        forma que a <B /> considere contrária à sua finalidade, nomeadamente: para fins ilícitos ou enganosos; para
        difundir mensagens publicitárias não solicitadas; para tentar contornar os dispositivos técnicos de proteção;
        para aceder a sistemas sem autorização; para recolher dados sobre outras pessoas; para levar a cabo uma
        operação de burla; para propagar software malicioso ou qualquer programa nocivo; para publicar, armazenar ou
        partilhar conteúdos sujeitos a direitos de terceiros sem dispor das autorizações necessárias, ou conteúdos de
        ódio, chocantes, injuriosos, falsos, ameaçadores, discriminatórios ou atentatórios da dignidade de outrem; para
        modificar, copiar, danificar ou eliminar ficheiros, bases de dados, servidores ou equipamentos sem estar
        habilitado para tal; ou ainda para perturbar a navegação e o conforto dos outros membros. Qualquer mensagem
        publicada num espaço público do site pode ser lida por todos os visitantes; tenha-o presente.
      </P>
      <P>
        A <B /> não controla previamente as publicações dos seus membros e não partilha necessariamente o seu
        conteúdo. A <B /> não examina cada mensagem colocada online, mas reserva-se o direito de retirar ou modificar
        qualquer publicação contrária às presentes regras de que tome conhecimento. A <B /> pode também restringir ou
        encerrar o acesso de um membro ao site quando considere, com total independência, que foi cometido um
        incumprimento dos presentes termos.
      </P>
      <P>
        A <B /> não se torna proprietária dos conteúdos publicados por si no site. Ao colocá-los online, concede à <B /> uma
        autorização gratuita, mundial e não exclusiva para os alojar, reproduzir, adaptar, traduzir, resumir, formatar,
        representar, difundir e integrar noutros suportes, para efeitos do funcionamento do site e da sua promoção, sem
        que seja devida qualquer contrapartida pela <B />. Aceita, além disso, não invocar contra essa exploração as
        prerrogativas de que dispõe ou possa vir a dispor enquanto autor.
      </P>
      <H2 id="signalement-d-un-abus">DENÚNCIA DE UM ABUSO</H2>
      <P>
        Se considerar que um conteúdo presente no site viola os seus direitos ou a sua reputação, e se residir fora da
        União Europeia, pode enviar uma denúncia detalhada à <B /> por escrito através do <Wa />. Cada pedido é
        analisado com atenção pela nossa equipa e dá lugar ao seguimento considerado pertinente em função da natureza e
        da gravidade dos factos relatados.
      </P>
      <H2 id="reclamation-procedure-de-retrait">RECLAMAÇÃO – PROCEDIMENTO DE REMOÇÃO</H2>
      <P>
        Quando uma obra que lhe pertence pareça estar reproduzida no site sem o seu consentimento, pode informar
        a <B /> escrevendo através do <Wa />. Após verificação, poderemos retirar o elemento em causa, avisar o membro
        que o publicou e permitir-lhe apresentar as suas observações no âmbito de uma contestação. O elemento retirado
        poderá voltar a ser colocado online se essa contestação se revelar fundamentada. Conservamos um registo escrito
        de cada reclamação recebida, bem como das medidas tomadas em resposta. Uma reclamação abusiva ou manifestamente
        infundada pode expor o seu autor a procedimentos judiciais, bem como ao pagamento de indemnização por perdas e
        danos, custas processuais e honorários de advogado.
      </P>
      <P>
        Para ser admissível, qualquer reclamação enviada à <B /> deve ser apresentada por escrito e reunir, no mínimo,
        as informações indicadas abaixo:
      </P>
      <ol className="mt-5 max-w-[68ch] border-t border-line text-base leading-[1.75] text-body">
        <Item>
          1. A assinatura manuscrita ou digital do titular dos direitos invocados, ou a de um mandatário devidamente
          habilitado a agir em seu nome.
        </Item>
        <Item>2. A identificação precisa da obra ou do conteúdo cuja proteção é reivindicada.</Item>
        <Item>
          3. A descrição do elemento controvertido publicado no site, com o endereço exato da página onde aparece e
          qualquer indicação útil que permita à <B /> encontrá-lo rapidamente, a fim de bloquear o acesso ao mesmo ou de
          o eliminar definitivamente dos seus servidores e dos seus arquivos.
        </Item>
        <Item>
          4. Os dados de contacto completos do requerente que permitam à <B /> responder-lhe, nomeadamente o seu nome, a
          sua morada postal, um número de telefone e, se possível, um endereço de correio eletrónico através do qual
          possa ser contactado com a maior brevidade.
        </Item>
        <Item>
          5. Uma declaração pela qual o requerente afirma, de boa-fé, que a publicação contestada não foi autorizada nem
          pelo titular dos direitos, nem pelo seu representante, nem por uma disposição legal ou regulamentar aplicável
          na matéria.
        </Item>
        <Item>
          6. Um atestado que certifique a exatidão das informações prestadas e confirme, sob pena de sanções, que o
          requerente é efetivamente o titular dos direitos em causa ou que está habilitado a representá-lo.
        </Item>
      </ol>
      <H2 id="identifiants-personnels">CREDENCIAIS PESSOAIS</H2>
      <P>
        Determinadas funcionalidades do site estão reservadas aos membros que dispõem de um identificador e de uma
        palavra-passe. Cabe-lhe manter estes elementos secretos e escolher uma palavra-passe robusta, difícil de
        adivinhar, que não reutilize em nenhum outro serviço. As suas credenciais são estritamente pessoais e nunca
        devem ser emprestadas, partilhadas nem revendidas. É proibido criar uma conta com uma identidade falsa ou
        fazendo-se passar por outra pessoa. Qualquer operação efetuada com as suas credenciais presume-se realizada por
        si. Em caso de perda, roubo ou dúvida quanto à confidencialidade dos seus acessos, avise sem demora a <B />,
        para que a sua conta seja protegida.
      </P>
      <H2 id="exclusions">EXCLUSÕES</H2>
      <P>
        A totalidade dos compromissos assumidos pela <B /> consta do presente documento. Nenhuma garantia adicional,
        expressa ou tácita, pode ser deduzida de qualquer outro suporte, incluindo em matéria de desempenho, adequação a
        um uso específico, compatibilidade ou ausência de defeitos.
      </P>
      <P>
        Em caso algum poderá a <B /> ser obrigada a reparar um dano indireto, qualquer que seja a sua causa ou o
        fundamento jurídico invocado (contratual, extracontratual, negligência ou outro). Quando a sua responsabilidade
        for reconhecida, a indemnização devida pela <B /> não poderá exceder o montante efetivamente pago por si pelo
        serviço ou produto que está na origem do litígio, no decurso dos últimos doze meses.
      </P>
      <P>
        A <B /> fixou os seus preços tendo em conta as exclusões que precedem. Estas constituem um elemento
        determinante do equilíbrio do contrato e continuam aplicáveis mesmo na hipótese de outra cláusula ser
        considerada ineficaz ou deixar de produzir efeitos.
      </P>
      <H2 id="loi-et-tribunaux">LEI E TRIBUNAIS</H2>
      <P>
        Os presentes termos regem-se pela lei francesa, com exclusão de qualquer norma de conflito de leis que conduza à
        aplicação de outra legislação. Em caso de litígio relativo à sua interpretação ou execução, as partes
        procurarão primeiro uma solução amigável. Na falta de acordo, qualquer ação intentada contra a <B /> será
        submetida aos tribunais competentes da área da sua sede.
      </P>
      <H2 id="sites-tiers">SITES DE TERCEIROS</H2>
      <P>
        O site pode remeter para páginas externas que a <B /> não gere. A <B /> não intervém nas vendas realizadas por
        esses terceiros e não presta qualquer garantia sobre as mesmas. Essas páginas externas podem propor os seus
        próprios produtos. A <B /> declina qualquer responsabilidade quanto ao seu conteúdo, à sua disponibilidade, às
        ligações que contêm, às suas atualizações ou às suas regras de funcionamento. A <B /> não se responsabiliza
        pelas ofertas ou serviços que possa aí subscrever. Convidamo-lo a ler atentamente as condições próprias de cada
        um desses sites. A <B /> disponibiliza estas ligações apenas para sua comodidade de navegação e a sua presença
        não implica de modo algum aprovação por parte da <B />.
      </P>
      <H2 id="vie-privee">PRIVACIDADE</H2>
      <P>
        O tratamento dos seus dados está descrito na nossa Política de privacidade, que faz parte integrante deste
        texto.
      </P>
      <H2 id="caractere-indicatif">CARÁTER INDICATIVO</H2>
      <P>
        As informações apresentadas neste site têm um valor meramente indicativo e não constituem uma proposta
        comercial.
      </P>
      <H2 id="mise-a-jour">ATUALIZAÇÃO DO PRESENTE TEXTO</H2>
      <P>
        A <B /> reserva-se a possibilidade de adaptar este texto a qualquer momento. A versão em vigor foi atualizada
        em 25 de outubro de 2026.
      </P>
      <H2 id="engagement">
        Compromisso
      </H2>
      <P>
        Nenhum conteúdo deste site constitui um convite a investir na <B />.
      </P>
      <HelpCard id="aide" heading={<>AJUDA {BRAND_UPPER}</>}>
        <P>
          A <B /> está disponível por escrito, 7 dias por semana: <Wa />
        </P>
      </HelpCard>
    </DocLayout>
  )
}
