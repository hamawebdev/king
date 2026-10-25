import { WHATSAPP_DISPLAY } from '@/lib/site'
import type { FaqId, FaqText } from './Faq.data'
import { Install, Wa } from './Faq.links'

/** Spec S14 em português europeu (mesmas ligações e códigos Downloader que em francês). */
export const pt: Record<FaqId, FaqText> = {
  commander: {
    question: 'Como encomendar um plano King 365 TV na NovaStream?',
    answer: (
      <p>
        Clique no botão «Comprar agora» (que o leva diretamente aos nossos planos de subscrição), escolha a duração pretendida,
        preencha os seus dados e confirme o pedido com a nossa equipa no WhatsApp (<Wa>wa.me/33751299176</Wa>) para uma ativação
        imediata.
      </p>
    ),
  },
  delai: {
    question: 'Em quanto tempo vou receber os meus códigos de subscrição?',
    answer: (
      <p>
        Durante o nosso horário de funcionamento, o envio das suas credenciais por WhatsApp e por e-mail após a validação do pagamento
        é quase instantâneo (geralmente em menos de 10 a 20 minutos). Em períodos de grande afluência, o processamento pode demorar
        entre 1 e 2 horas no máximo (e até 6 horas no máximo por e-mail).
      </p>
    ),
  },
  email: {
    question: 'Não recebi o e-mail dentro do prazo indicado. Devo preocupar-me?',
    answer: (
      <p>
        Não, não se preocupe. Os nossos envios são feitos das 09h00 às 22h00 (GMT+1). Se também não encontrar nada na pasta de
        correio indesejado (spam), contacte simplesmente a equipa NovaStream no WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>): um consultor
        enviar-lhe-á os seus acessos e resolverá a situação de imediato.
      </p>
    ),
  },
  'autres-apps': {
    question: 'Posso utilizar a minha subscrição King 365 TV noutras aplicações IPTV?',
    answer: (
      <p>
        Sim, sem dúvida! Além das aplicações oficiais King 365, a NovaStream recomenda vivamente excelentes leitores pagos como o IBO
        Player, IBO Player Smarter, Hot Player ou Bob Player, pela sua fluidez notável. Também pode utilizar aplicações gratuitas
        disponíveis nas lojas de aplicações, como o IPTV Smarters Pro ou o Smarters Lite.
      </p>
    ),
  },
  renouveler: {
    question: 'Como renovar a minha subscrição King 365 TV na NovaStream?',
    answer: (
      <p>
        Selecione a opção de Renovação, indique o seu dispositivo e assinale a caixa de renovação indicando o seu utilizador atual,
        ou clique diretamente na nossa <Wa>ligação WhatsApp</Wa>. O nosso suporte envia-lhe as informações de pagamento: assim que
        enviar a sua captura de ecrã (recibo), a sua subscrição é prolongada em poucos minutos, com confirmação por WhatsApp e por
        e-mail.
      </p>
    ),
  },
  'memes-identifiants': {
    question: 'Posso renovar mantendo exatamente as mesmas credenciais da minha conta?',
    answer: (
      <p>
        Se fez a sua subscrição inicial no nosso site NovaStream, sim: prolongamos diretamente as suas credenciais atuais sem alterar
        nada. Por outro lado, se a sua subscrição anterior provinha de outro vendedor ou distribuidor, iremos fornecer-lhe novas
        credenciais oficiais NovaStream para introduzir no seu leitor.
      </p>
    ),
  },
  'telecharger-v3': {
    question: 'Como transferir a aplicação King 365 TV Box V3 (APK)?',
    answer: (
      <p>
        Aceda diretamente à nossa secção de transferências <Install>clicando aqui</Install> (logo acima nesta página), introduza o
        novo código Downloader oficial da Versão 3 (283367) e siga as nossas instruções detalhadas.
      </p>
    ),
  },
  'telecharger-v4': {
    question: 'Como transferir e instalar o King 365 TV Versão 4 (V4) e onde encontrar a ligação oficial?',
    answer: (
      <p>
        <Install>Clique aqui</Install> para aceder ao nosso guia de instalação oficial. A Versão 4 (código Downloader: 2763945) foi
        concebida para televisores Android TV, dispositivos Google TV recentes, TV Box Android e Amazon Fire TV Stick compatíveis com
        a aplicação Downloader (exceto o Fire TV Stick HD de 2.ª geração com o sistema fechado Vega OS, que bloqueia os APK).
      </p>
    ),
  },
  'versions-officielles': {
    question: 'Aviso importante: que versões oficiais King 365 TV devo instalar e que códigos antigos devo eliminar?',
    answer: (
      <>
        <p>
          Para evitar cortes, erros de identificação e problemas de acesso, deixe de transferir as versões antigas obsoletas.
          Recomendamos vivamente que instale as 3 novas versões oficiais (V2, V3 e V4) no seu dispositivo para garantir um
          funcionamento contínuo e uma alternativa imediata em caso de manutenção de um servidor:
        </p>
        <p className="font-semibold text-heading">✅ Novas versões oficiais a instalar:</p>
        <ul className="grid gap-1">
          <li>• Versão 2 (V2): código Downloader 756917</li>
          <li>• Versão 3 (V3): código Downloader 283367</li>
          <li>• Versão 4 (V4): código Downloader 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Versões antigas obsoletas a evitar absolutamente (a desinstalar):</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  pays: {
    question: 'O serviço de subscrição King 365 TV funciona em França, no Canadá, na Bélgica e no estrangeiro?',
    answer: (
      <p>
        Sim, a subscrição funciona em qualquer parte do mundo, desde que disponha de uma ligação à Internet (França, Canadá, Bélgica,
        Suíça, Argélia, Tunísia, Marrocos, etc.).
      </p>
    ),
  },
  'multi-ecrans': {
    question: 'Posso utilizar a minha subscrição em vários dispositivos ou obter uma oferta multiecrã?',
    answer: (
      <p>
        A sua subscrição é pessoal e não pode ser partilhada em simultâneo: permite um único ecrã ativo de cada vez. Pode instalá-la
        em dois dispositivos e utilizá-los alternadamente (nunca ao mesmo tempo, para evitar bloqueios). Se quiser ver em vários
        ecrãs em simultâneo, <Wa>contacte a NovaStream</Wa> para beneficiar das nossas ofertas em subscrições adicionais
        independentes.
      </p>
    ),
  },
  'sans-parabole': {
    question: 'Posso comprar King 365 TV sem acesso a uma antena parabólica?',
    answer: (
      <p>
        Com certeza! O serviço IPTV King 365 TV é transmitido 100% pela Internet, sem qualquer antena parabólica. Basta uma ligação à
        Internet de banda larga estável (recomenda-se pelo menos 30 Mbps para uma fluidez ideal em 4K HDR).
      </p>
    ),
  },
  'televiseur-ancien': {
    question: 'Tenho um televisor antigo. Que solução propõem?',
    answer: (
      <p>
        Para modernizar o seu televisor, a NovaStream recomenda a aquisição de uma TV Box Android certificada pela Google (Google
        Certified), como a Xiaomi Mi Box, Mecool ou RockTek, ou qualquer outra box Android com boas características técnicas (muita
        memória RAM e um processador potente) para uma navegação ultrafluida.
      </p>
    ),
  },
  confiance: {
    question: 'Como posso saber que a NovaStream é um distribuidor autorizado fiável, em quem posso confiar plenamente?',
    answer: (
      <p>
        A NovaStream é um distribuidor autorizado reconhecido, com mais de 3 anos de experiência e dezenas de milhares de subscritores
        fiéis. O nosso serviço é rigorosamente estruturado e transparente: chegamos mesmo, com frequência, a preparar e ativar os
        acessos dos nossos clientes antes do pagamento, como prova da nossa confiança e seriedade.
      </p>
    ),
  },
  essai: {
    question: 'Posso testar os vossos serviços antes de pagar (período de teste)?',
    answer: (
      <p>
        Sim, em certos casos está disponível um teste com a duração de 3 ou 24 horas, após o qual pode aderir a uma subscrição a
        partir de 6 ou 12 meses. <strong className="font-semibold text-heading">Nota importante:</strong> Não são disponibilizados
        testes durante os grandes jogos e noites de grandes competições, para garantir, em coordenação com a King 365 TV, a máxima
        estabilidade do servidor para os nossos subscritores ativos.
      </p>
    ),
  },
  chaines: {
    question: 'Que canais estão disponíveis na subscrição?',
    answer: (
      <p>
        Tem acesso a uma seleção imensa de canais de todo o mundo: França, Reino Unido, Estados Unidos, Canadá, Bélgica, Suíça,
        Magrebe, África e Europa — incluindo todos os pacotes de Desporto, Notícias, Cinema, Séries, Infantil e Documentários, bem
        como +16.000 filmes e séries VOD e Replay até 15 dias.
      </p>
    ),
  },
  'ibo-expire': {
    question: 'O meu IBO Player (ou Hot Player / Bob Player) indica que a ativação expirou. O que fazer?',
    answer: (
      <p>
        As aplicações IBO Player, IBO Player Smarter, Hot Player e Bob Player são leitores pagos independentes que exigem uma ativação
        após o período de teste. No Android, instale a nossa aplicação oficial King 365 TV gratuita para evitar estes custos. Se não
        tiver um televisor Android (ex.: Smart TV Samsung ou LG), a NovaStream assegura a ativação direta do seu leitor por cerca de
        8 € / ano: basta contactar o nosso suporte no <Wa>WhatsApp</Wa>.
      </p>
    ),
  },
  'licence-payante': {
    question: 'A aplicação 9Xtream ou IPTV Smarters Pro pede-me para pagar ou indica que a minha ativação expirou?',
    answer: (
      <p>
        O 9Xtream e algumas edições do IPTV Smarters Pro são serviços pagos que exigem uma licença de software. Utilize gratuitamente
        as nossas aplicações oficiais King 365 TV (V2, V3, V4) nos dispositivos Android TV / Box, ou contacte o nosso{' '}
        <Wa>suporte WhatsApp</Wa> para ativar uma aplicação paga compatível nos seus outros ecrãs.
      </p>
    ),
  },
  'failed-to-authorize': {
    question: 'INFO para utilizadores LG e SAMSUNG: a aplicação Smarters mostra o erro «Failed to authorize». O que fazer?',
    answer: (
      <>
        <p>
          A antiga aplicação Smarters tem atualmente um erro de acesso (Erro: «Failed to authorize»). Não se preocupe: não se trata
          de um problema dos nossos servidores, mas da própria aplicação.
        </p>
        <p>
          ⬇️ Solução: os programadores pedem que se passe para a nova versão. Basta transferir a nova versão Smarters Pro a partir
          da loja de aplicações da sua TV: as suas credenciais atuais mantêm-se exatamente iguais.
        </p>
      </>
    ),
  },
  'lien-serveur': {
    question: 'A ligação do servidor não funciona quando introduzo os meus dados. Porquê?',
    answer: (
      <p>
        Para garantir a máxima segurança e estabilidade, a NovaStream renova e atualiza regularmente as suas ligações de servidor
        (sem as partilhar publicamente). Verifique se a ligação começa por http:// e contacte o nosso suporte no WhatsApp
        (<Wa>{WHATSAPP_DISPLAY}</Wa>) para obter de imediato a ligação atualizada.
      </p>
    ),
  },
}
