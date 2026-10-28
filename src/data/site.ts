export const site = {
  name: 'Dra. Marjorie Cordeiro',
  givenName: 'Marjorie Cordeiro',
  url: 'https://marjoriecordeiro.adv.br',
  title: 'Advogada de Direito Médico e da Saúde | Dra. Marjorie Cordeiro',
  description:
    'Orientação jurídica para pacientes e médicos em Direito Médico e da Saúde. Negativas de plano, home care e medicamentos. Fortaleza e online em todo o Brasil.',
  locale: 'pt-BR',
  area: 'Direito Médico e da Saúde',
  signature: 'Clareza para decidir. Segurança para agir.',
  phrase: 'Clareza jurídica para decisões importantes em saúde.',
  line: 'Atuação para pacientes e profissionais médicos.',
  oab: 'OAB/CE nº 29.417',
  oabValue: '29417',
  email: 'marjoriecordeiro@gmail.com',
  phoneDisplay: '(85) 98119-1112',
  phoneE164: '+5585981191112',
  whatsappNumber: '5585981191112',
  hours: 'segunda a sexta, 08h às 18h',
  address: {
    street: 'Rua Dr. Gilberto Studart, 55, salas 417 e 418, torre Sul, Duets Office Tower',
    city: 'Fortaleza',
    region: 'CE',
    country: 'BR',
    line: 'Rua Dr. Gilberto Studart, 55, salas 417 e 418, torre Sul, Duets Office Tower, Fortaleza-CE',
  },
  attendance: 'Atendimento presencial em Fortaleza e online em todo o Brasil.',
  linkedin: 'https://www.linkedin.com/in/marjorie-cordeiro-491b8422/',
  instagram: 'https://www.instagram.com/marjoriecordeiro_/',
  privacyUpdated: '26 de outubro de 2026',
  privacyUpdatedIso: '2026-10-26',
  messages: {
    neutral: 'Olá, Dra. Marjorie. Gostaria de orientação.',
    patient: 'Olá, Dra. Marjorie. Sou paciente ou familiar e gostaria de orientação.',
    doctor: 'Olá, Dra. Marjorie. Sou médico(a) e gostaria de orientação.',
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const patientTeasers = [
  {
    title: 'Negativas de cobertura',
    text: 'Exames, tratamentos e cirurgias com cobertura negada pelo plano de saúde.',
  },
  {
    title: 'Home care',
    text: 'Negativas ou dificuldades na assistência domiciliar indicada pelo médico.',
  },
  {
    title: 'Medicamentos de alto custo',
    text: 'Acesso e cobertura de medicamentos prescritos.',
  },
  {
    title: 'Terapias para pessoas com TEA',
    text: 'Cobertura e acesso às terapias indicadas.',
  },
] as const;

export const patientFronts = [
  {
    icon: 'document',
    title: 'Negativas de cobertura',
    text: 'O plano negou um exame, tratamento ou cirurgia indicado pelo médico? A análise considera o motivo da negativa, os documentos médicos e o contrato.',
  },
  {
    icon: 'home',
    title: 'Home care',
    text: 'O plano negou ou dificultou a assistência domiciliar indicada? A análise considera a indicação médica, a situação do paciente e as regras de cobertura.',
  },
  {
    icon: 'bottle',
    title: 'Medicamentos de alto custo',
    text: 'O acesso a um medicamento prescrito foi negado ou está difícil? A análise considera a prescrição, a cobertura e a forma de fornecimento.',
  },
  {
    icon: 'hands',
    title: 'Terapias para pessoas com TEA',
    text: 'A família encontrou dificuldades na cobertura das terapias indicadas? A análise considera a indicação, a continuidade do tratamento e as regras aplicáveis.',
  },
] as const;

export const patientTags = [
  'tratamentos oncológicos',
  'doenças raras',
  'cobertura fora do rol da ANS',
  'reajustes de plano de saúde',
  'cancelamento ou rescisão de plano',
  'carência e portabilidade',
  'reembolso',
  'tratamentos e medicamentos pelo SUS',
  'responsabilidade civil de hospitais e clínicas',
] as const;

export const doctorTags = [
  'TCLE e termos de consentimento',
  'prontuários e documentação',
  'relação médico-paciente',
  'organização jurídica da prática e de clínicas',
  'direitos profissionais',
  'atualizações jurídicas e regulatórias',
] as const;

export const doctorFronts = [
  {
    icon: 'signature',
    title: 'TCLE e termos de consentimento',
    text: 'Seu termo de consentimento descreve os riscos do procedimento que você realiza? A orientação revisa e estrutura os termos para que reflitam a sua prática.',
  },
  {
    icon: 'folder',
    title: 'Prontuários e documentação',
    text: 'Seus registros de atendimento estão organizados e completos? A orientação ajuda a estruturar prontuários e documentos que dão segurança à prática médica.',
  },
  {
    icon: 'building',
    title: 'Clínicas e equiparação hospitalar',
    text: 'Sua clínica realiza procedimentos que podem permitir um tratamento tributário diferenciado? A orientação analisa a organização jurídica da clínica e a possibilidade de equiparação hospitalar.',
  },
  {
    icon: 'badge',
    title: 'Residência médica e direitos profissionais',
    text: 'Você é médico residente e não sabe quais direitos tem durante a residência? A orientação esclarece temas como auxílio-moradia e outros direitos profissionais.',
  },
] as const;

export const methodSteps = [
  {
    title: 'Ouvir',
    text: 'Conhecer a situação e o contexto de quem procura orientação.',
  },
  {
    title: 'Entender',
    text: 'Identificar as questões jurídicas envolvidas.',
  },
  {
    title: 'Analisar',
    text: 'Avaliar documentos, informações e particularidades do caso.',
  },
  {
    title: 'Orientar',
    text: 'Explicar com clareza os caminhos possíveis.',
  },
  {
    title: 'Agir',
    text: 'Conduzir os próximos passos jurídicos, quando necessário.',
  },
] as const;

export const contactSteps = [
  {
    title: 'Conte sua situação',
    text: 'Envie uma mensagem pelo WhatsApp com um breve resumo do que está acontecendo.',
  },
  {
    title: 'Reúna os documentos',
    text: 'Tenha em mãos o que estiver disponível, como relatório médico indicando o tratamento, negativa do plano de saúde, dados do contrato do plano de saúde e documento de identificação.',
  },
  {
    title: 'Receba o retorno',
    text: 'O retorno é feito em até 24 horas para agendar a orientação, online ou presencial.',
  },
] as const;

export const credentials = [
  'Direito pela Universidade de Fortaleza, 2014',
  'Pós-graduação em processo penal e penal',
  'Mestranda na Universidade Católica Portuguesa — UCP Porto',
  'Especialização em Direito Médico e da Saúde',
  'Jornalista de formação',
] as const;

export type FaqAudience = 'pacientes' | 'medicos';

export interface FaqItem {
  question: string;
  answer: string;
  audience: FaqAudience;
  priority?: boolean;
}

export const faqs: FaqItem[] = [
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar um tratamento indicado pelo médico?',
    answer:
      'Pode haver negativa, mas ela precisa ser analisada conforme o motivo apresentado, o contrato, a indicação médica e as regras aplicáveis. A recusa da operadora não significa, por si só, que a cobertura não seja devida.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar uma cirurgia indicada pelo médico?',
    answer:
      'Depende da justificativa da operadora e das circunstâncias do caso. Questões como cobertura contratual, carência, indicação médica e regras da ANS precisam ser consideradas.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar um exame solicitado pelo médico?',
    answer:
      'A operadora pode apresentar motivos para a recusa, mas a negativa deve ser justificada. É importante analisar qual exame foi prescrito, a razão clínica e o fundamento utilizado pelo plano.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar tratamento porque ele não está no rol da ANS?',
    answer:
      'A ausência no rol não encerra automaticamente a análise. Existem situações em que tratamentos não previstos expressamente podem ser discutidos à luz da legislação e dos critérios aplicáveis.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar medicamento de alto custo?',
    answer:
      'A resposta depende do medicamento, da indicação médica, da forma de uso, do contrato e das normas aplicáveis. Uma negativa deve ser analisada individualmente.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'Como conseguir medicamento de alto custo pelo SUS?',
    answer:
      'O caminho depende do medicamento, da indicação clínica e da forma como ele é disponibilizado pelo sistema público. Prescrição, relatório médico e documentos do paciente costumam ser importantes para a análise.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar home care mesmo com indicação médica?',
    answer:
      'A indicação médica é um elemento relevante. Também é necessário avaliar se o atendimento domiciliar substitui uma internação hospitalar, quais cuidados foram prescritos e qual foi a justificativa da operadora.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano pode reduzir ou interromper um home care que já estava sendo fornecido?',
    answer:
      'Uma redução ou interrupção deve ser analisada com atenção, principalmente quando contraria a indicação médica ou pode comprometer a continuidade do cuidado.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode limitar o número de sessões de terapia para uma pessoa com TEA?',
    answer:
      'Há regras e entendimentos específicos sobre terapias multidisciplinares para pessoas com TEA, e limitações impostas pela operadora podem precisar de análise.',
  },
  {
    audience: 'pacientes',
    priority: true,
    question: 'O plano de saúde pode negar terapia ABA para uma pessoa com autismo?',
    answer:
      'A indicação profissional, a necessidade clínica, a estrutura da rede credenciada e a justificativa da operadora precisam ser avaliadas.',
  },
  {
    audience: 'pacientes',
    question: 'O plano de saúde pode cancelar o contrato durante um tratamento?',
    answer:
      'Existem situações em que a continuidade do tratamento precisa ser considerada antes da interrupção da cobertura. O tipo de contrato e o motivo do cancelamento são fundamentais para a análise.',
  },
  {
    audience: 'pacientes',
    question: 'Como saber se o reajuste do plano de saúde é abusivo?',
    answer:
      'Um reajuste elevado não é automaticamente ilegal. É necessário verificar o tipo de plano, o índice aplicado, a justificativa apresentada e as regras correspondentes ao contrato.',
  },
  {
    audience: 'pacientes',
    question: 'O plano deve reembolsar atendimento fora da rede credenciada quando não há profissional disponível?',
    answer:
      'Em determinadas situações, como inexistência de rede apta ou circunstâncias excepcionais, pode haver discussão sobre reembolso. O caso depende da situação concreta e das regras do plano.',
  },
  {
    audience: 'pacientes',
    question: 'Preciso entrar na Justiça para resolver uma negativa do plano?',
    answer:
      'Nem sempre. Dependendo da situação, existem medidas que podem ser avaliadas antes de uma ação judicial. A análise do caso indica qual caminho faz sentido.',
  },
  {
    audience: 'pacientes',
    question: 'Uma negativa do plano encerra as possibilidades?',
    answer:
      'Não necessariamente. A negativa deve ser analisada junto com a prescrição médica, o contrato e as regras aplicáveis ao caso.',
  },
  {
    audience: 'pacientes',
    question: 'Quais documentos devo reunir antes do primeiro contato?',
    answer:
      'Em geral, relatório ou prescrição médica indicando o tratamento ou medicação, a negativa do plano, preferencialmente por escrito, e os dados do contrato. Se algum documento estiver faltando, isso não impede o primeiro contato.',
  },
  {
    audience: 'pacientes',
    question: 'Como funciona o atendimento online?',
    answer:
      'A orientação é feita por videochamada ou presencial, com envio dos documentos em formato digital, para clientes de todo o Brasil.',
  },
  {
    audience: 'pacientes',
    question: 'Sou familiar, e não o paciente. Posso buscar orientação?',
    answer:
      'Sim. Muitas vezes é um familiar quem dá o primeiro passo. Dependendo do caso, documentos ou autorização do paciente podem ser necessários, e isso é explicado no atendimento.',
  },
  {
    audience: 'pacientes',
    question: 'O plano de saúde não respondeu meu pedido. O que devo fazer?',
    answer:
      'Vale guardar o número de protocolo, a data do pedido e os documentos enviados. A falta de resposta também pode ser analisada na orientação.',
  },
  {
    audience: 'pacientes',
    question: 'O que acontece depois da análise inicial?',
    answer:
      'A Dra. Marjorie Cordeiro explica o que foi identificado e quais caminhos podem ser considerados. A decisão sobre como seguir é sempre sua.',
  },
  {
    audience: 'medicos',
    question: 'O TCLE é obrigatório em todo procedimento médico?',
    answer:
      'O dever de informar e obter consentimento é central na prática médica, mas a forma de documentá-lo pode variar conforme o procedimento e o contexto. Em situações que envolvem maior risco ou complexidade, a formalização escrita ganha especial importância.',
  },
  {
    audience: 'medicos',
    question: 'Um modelo genérico de TCLE serve para todos os procedimentos?',
    answer:
      'Não é recomendável tratar procedimentos diferentes como se tivessem os mesmos riscos, alternativas e particularidades. O documento deve refletir adequadamente a realidade do atendimento e utilizar linguagem compreensível ao paciente.',
  },
  {
    audience: 'medicos',
    question: 'O paciente pode pedir uma cópia do prontuário médico?',
    answer:
      'Sim. O acesso do paciente ao próprio prontuário é protegido pelas normas éticas médicas, respeitados os critérios de sigilo e as situações previstas na regulamentação.',
  },
  {
    audience: 'medicos',
    question: 'Por quanto tempo uma clínica deve guardar o prontuário médico?',
    answer:
      'Existem regras específicas sobre guarda e digitalização de prontuários. O prazo e a forma de armazenamento precisam observar a legislação e as normas profissionais aplicáveis.',
  },
  {
    audience: 'medicos',
    question: 'Recebi uma notificação ou denúncia no CRM. O que devo fazer?',
    answer:
      'É importante identificar exatamente qual procedimento foi instaurado, observar os prazos, preservar os registros do atendimento e analisar a documentação antes de apresentar qualquer manifestação.',
  },
  {
    audience: 'medicos',
    question: 'Minha clínica pode ter direito à equiparação hospitalar?',
    answer:
      'Nem toda clínica se enquadra. A possibilidade depende das atividades efetivamente prestadas, da estrutura da empresa e dos requisitos tributários e jurídicos aplicáveis.',
  },
  {
    audience: 'medicos',
    question: 'Médico residente tem direito a auxílio-moradia?',
    answer:
      'Existe regulamentação específica para moradia e auxílio-moradia de médicos residentes, e houve mudanças recentes nas regras e percentuais. A análise precisa considerar o período da residência e a situação da instituição responsável pelo programa.',
  },
  {
    audience: 'medicos',
    question: 'Médicos também podem buscar orientação?',
    answer:
      'Sim. A orientação a médicos e clínicas é preventiva e envolve temas como TCLE, prontuários, documentação e direitos profissionais.',
  },
  {
    audience: 'medicos',
    question: 'Preciso procurar orientação jurídica somente quando existe um problema?',
    answer:
      'Não. A orientação preventiva pode ajudar a revisar documentos, esclarecer dúvidas e organizar aspectos jurídicos da prática antes que exista um conflito.',
  },
  {
    audience: 'medicos',
    question: 'Clínicas também podem buscar orientação jurídica?',
    answer:
      'Sim. A atuação pode envolver documentação, organização jurídica da prestação de serviços e outros aspectos da rotina da clínica.',
  },
  {
    audience: 'medicos',
    question: 'Como saber se meus documentos estão adequados à minha prática?',
    answer:
      'Uma revisão preventiva compara os termos, prontuários e documentos usados no dia a dia com a prática real e as normas aplicáveis, apontando o que pode ser ajustado.',
  },
  {
    audience: 'medicos',
    question: 'As orientações são sigilosas?',
    answer:
      'Sim. As informações compartilhadas na orientação jurídica são protegidas pelo sigilo profissional do advogado.',
  },
  {
    audience: 'medicos',
    question: 'A Dra. Marjorie Cordeiro atende pacientes e médicos. Como isso funciona?',
    answer:
      'Cada caso é analisado individualmente antes do atendimento, com a verificação das partes envolvidas, para garantir independência profissional e evitar qualquer situação incompatível.',
  },
];

export const formProfiles = ['Paciente', 'Familiar', 'Médico', 'Clínica', 'Outro'] as const;

export const formSubjects = [
  'Negativa de cobertura',
  'Home care',
  'Medicamento de alto custo',
  'Terapias para TEA',
  'Plano de saúde',
  'Questão relacionada ao SUS',
  'Direito Médico para médicos',
  'Documentação / TCLE / prontuário',
  'Clínica / prática médica',
  'Outro',
] as const;

export const privacySections = [
  {
    title: '1. Quem cuida dos seus dados',
    paragraphs: [
      'A Dra. Marjorie Cordeiro, inscrita na OAB/CE nº 29.417, é responsável pelos dados pessoais recebidos por meio deste site e dos canais de contato utilizados no atendimento.',
    ],
  },
  {
    title: '2. Quais dados podem ser recebidos',
    paragraphs: ['Podem ser recebidos dados como:'],
    items: [
      'nome',
      'telefone',
      'e-mail',
      'informações enviadas por você no contato',
      'documentos necessários para compreender a situação apresentada',
      'quando necessário, informações de saúde relacionadas ao caso',
    ],
    after: [
      'Também podem ser coletados dados de navegação, como páginas acessadas, dispositivo utilizado e origem da visita, por meio de ferramentas de análise do site.',
    ],
  },
  {
    title: '3. Como esses dados são utilizados',
    paragraphs: ['Os dados podem ser utilizados para:'],
    items: [
      'responder ao seu contato',
      'agendar atendimento',
      'compreender e analisar a situação apresentada',
      'prestar os serviços jurídicos contratados',
      'cumprir obrigações legais e profissionais',
      'melhorar o funcionamento e o conteúdo do site',
    ],
    after: ['Os dados não são vendidos nem compartilhados para fins comerciais.'],
  },
  {
    title: '4. Compartilhamento e segurança',
    paragraphs: [
      'As informações podem ser compartilhadas apenas quando isso for necessário para o atendimento, para o funcionamento dos serviços utilizados ou para o cumprimento de obrigação legal.',
      'Podem estar envolvidos, por exemplo, serviços de hospedagem, e-mail, WhatsApp, armazenamento e outras ferramentas necessárias ao atendimento.',
      'As informações compartilhadas no contexto da atuação jurídica também estão sujeitas ao sigilo profissional da advocacia.',
    ],
  },
  {
    title: '5. Cookies e dados de navegação',
    paragraphs: [
      'O site pode utilizar cookies e ferramentas de análise para entender como a página é utilizada e melhorar sua experiência.',
      'Quando houver cookies que dependam de autorização, você poderá aceitar, rejeitar ou ajustar suas preferências no aviso apresentado pelo site.',
    ],
  },
  {
    title: '6. Seus direitos',
    paragraphs: ['Você pode solicitar informações sobre seus dados pessoais, inclusive:'],
    items: [
      'confirmação sobre o uso dos seus dados',
      'acesso às informações',
      'correção de dados incorretos ou desatualizados',
      'informações sobre compartilhamentos',
      'outras solicitações previstas na legislação aplicável',
    ],
    after: [
      'Alguns dados podem precisar ser mantidos pelo período necessário para cumprimento de obrigações legais ou para o exercício regular de direitos.',
    ],
  },
  {
    title: '7. Contato',
    paragraphs: [
      'Para dúvidas ou solicitações relacionadas aos seus dados pessoais, entre em contato pelo e-mail: marjoriecordeiro@gmail.com',
    ],
  },
  {
    title: '8. Atualizações',
    paragraphs: [
      'Esta Política de Privacidade pode ser atualizada sempre que necessário. A versão mais recente estará disponível nesta página.',
    ],
  },
] as const;

export const knowsAbout = [
  'Direito Médico e da Saúde',
  'Negativas de cobertura de plano de saúde',
  'Home care',
  'Medicamentos de alto custo',
  'Terapias para pessoas com TEA',
  'Planos de saúde',
  'Sistema Único de Saúde',
  'TCLE e prontuário médico',
  'Direitos de médicos residentes',
  'Equiparação hospitalar',
] as const;
