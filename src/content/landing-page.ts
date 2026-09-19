import type { ContentItem, FaqItem, NavigationItem, ProcessStep } from "@/types/content";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const heroContent = {
  eyebrow: "Psicoterapia para adultos",
  title: "Um acompanhamento atento para compreender o que você vive com mais clareza",
  description:
    "Atendimento psicológico com escuta e respeito, orientado pela Terapia Cognitivo-Comportamental e pelas necessidades de cada pessoa.",
  cta: "Conversar pelo WhatsApp",
  ctaNote: "Um primeiro contato para informações e agendamento.",
} as const;

export const needsContent = {
  eyebrow: "Em que posso te ajudar",
  title: "Diferentes momentos podem levar alguém à terapia",
  description:
    "A terapia é para quem deseja se conhecer melhor, lidar com dificuldades emocionais e construir uma vida mais equilibrada. Veja algumas situações que podem ser trabalhadas no processo terapêutico.",
  items: [
    {
      title: "Ansiedade e estresse",
      description: "Quando a mente não desacelera e tudo parece demais.",
    },
    {
      title: "Autoconhecimento",
      description: "Para entender seus padrões e fazer escolhas mais conscientes.",
    },
    {
      title: "Relacionamentos",
      description:
        "Dificuldades nos relacionamentos afetivos, familiares ou profissionais.",
    },
    {
      title: "Mudanças e transições",
      description: "Momentos de mudança, luto, novos ciclos e decisões importantes.",
    },
    {
      title: "Autoestima",
      description: "Para se sentir mais segura, confiante e em paz com quem você é.",
    },
    {
      title: "Demandas específicas",
      description:
        "Questões como depressão, TDAH, procrastinação e outras demandas emocionais.",
    },
  ] satisfies readonly ContentItem[],
} as const;

export const aboutContent = {
  eyebrow: "Sobre",
  title: "Presença, escuta e clareza na condução do processo",
  paragraphs: [
    "Sou Mariana Alves, psicóloga, e realizo acompanhamento psicológico de adultos em atendimentos online e presenciais.",
    "Meu trabalho parte de uma escuta atenta e respeitosa, considerando a história, o contexto e as necessidades de cada pessoa. A terapia é conduzida de forma colaborativa, com espaço para compreender experiências, organizar questões importantes e construir caminhos possíveis ao longo do processo.",
  ],
} as const;

export const approachContent = {
  eyebrow: "Minha abordagem",
  title: "Terapia\nCognitivo-Comportamental",
  paragraphs: [
    "Trabalhamos juntos para compreender o que você sente, identificar padrões e desenvolver novas formas de pensar e agir. A TCC é uma abordagem baseada em evidências, focada no presente e em mudanças reais e possíveis para a sua vida.",
  ],
  principles: [
    {
      title: "Compreender",
      description: "Entender o que está acontecendo e quais são os seus padrões.",
    },
    {
      title: "Refletir",
      description: "Explorar pensamentos, emoções e comportamentos com mais clareza.",
    },
    {
      title: "Desenvolver",
      description: "Aprender estratégias práticas para lidar com os desafios da vida.",
    },
    {
      title: "Evoluir",
      description: "Construir uma rotina mais leve, com mais equilíbrio e bem-estar.",
    },
  ] satisfies readonly ContentItem[],
} as const;

export const processContent = {
  eyebrow: "Como funciona",
  title: "Um primeiro contato simples, com todo o cuidado que você merece",
  description:
    "Do primeiro contato ao acompanhamento, tudo é pensado para que você se sinta acolhido e seguro em cada etapa.",
  cta: "Conversar pelo WhatsApp",
  steps: [
    {
      number: "1",
      title: "Você entra em contato",
      description: "Tire suas dúvidas e agende seu horário pelo WhatsApp.",
    },
    {
      number: "2",
      title: "Agendamos sua sessão",
      description: "Escolha o melhor dia e horário, de forma prática e rápida.",
    },
    {
      number: "3",
      title: "Nos encontramos (online ou presencial)",
      description: "Um espaço seguro para você falar e ser ouvida.",
    },
    {
      number: "4",
      title: "Seguimos juntos",
      description:
        "Um acompanhamento contínuo, no seu ritmo, com foco no que realmente importa para você.",
    },
  ] satisfies readonly ProcessStep[],
  modalitiesEyebrow: "Modalidades de atendimento",
  modalitiesTitle: "Terapia do seu jeito, onde você estiver",
  modalitiesDescription:
    "Você pode optar pelo atendimento presencial, em um espaço acolhedor e confortável, ou pela modalidade online, com a mesma qualidade, sigilo e acolhimento.",
  modalities: [
    {
      title: "Atendimento online",
      description: "Com a mesma qualidade e acolhimento, no conforto da sua casa.",
      image: "/images/atendimento-online.jpg",
      imageAlt: "Ambiente acolhedor para atendimento online, com notebook sobre uma mesa.",
    },
    {
      title: "Atendimento presencial",
      description: "Um espaço pensado para o seu bem-estar, com privacidade e conforto.",
      image: "/images/atendimento-presencial.jpg",
      imageAlt: "Consultório acolhedor para atendimento presencial, com poltrona e plantas.",
    },
  ],
  testimonial:
    "A terapia me ajudou a olhar para mim com mais leveza e a encontrar caminhos que fazem sentido. Hoje me sinto mais segura e em paz com as minhas escolhas.",
  testimonialAttribution: "Paciente (nome preservado)",
  closingStatement: "Cuidar\nda sua saúde mental\ntambém é uma forma\nde avançar.",
} as const;

export const faqContent = {
  eyebrow: "Dúvidas frequentes",
  title: "Antes de entrar em contato",
  description: "Respostas objetivas para algumas dúvidas comuns sobre o início do acompanhamento.",
  items: [
    {
      question: "Como funciona a primeira sessão?",
      answer: [
        "A primeira sessão é um momento para conversar sobre o que motivou sua busca, conhecer melhor seu contexto e esclarecer dúvidas sobre o processo terapêutico.",
        "Você não precisa preparar um relato completo nem saber exatamente por onde começar. A conversa é conduzida de forma gradual.",
      ],
    },
    {
      question: "O atendimento é online ou presencial?",
      answer: [
        "As duas modalidades estão disponíveis. O atendimento online acontece por videochamada, e o presencial é realizado em São Paulo — SP.",
      ],
    },
    {
      question: "Como saber os horários e os honorários?",
      answer: [
        "As informações sobre disponibilidade, honorários e formas de pagamento são fornecidas diretamente pelo WhatsApp.",
      ],
    },
    {
      question: "Preciso saber o que dizer no primeiro contato?",
      answer: [
        "Não. Você pode apenas se apresentar e dizer que gostaria de receber informações sobre o atendimento psicológico. Se preferir, também pode informar se busca atendimento online ou presencial.",
      ],
    },
    {
      question: "Posso tirar uma dúvida antes de agendar?",
      answer: [
        "Sim. O contato inicial também pode ser usado para esclarecer dúvidas sobre o funcionamento do atendimento antes de decidir pelo agendamento.",
      ],
    },
    {
      question: "Como funciona a terapia online?",
      answer: [
        "A sessão é realizada por videochamada. Para preservar a qualidade do encontro, é importante estar em um local reservado, com privacidade e conexão estável.",
      ],
    },
    {
      question: "O WhatsApp pode ser usado em situações de urgência?",
      answer: [
        "Não. O WhatsApp é destinado a informações e agendamento e não funciona como canal de emergência ou atendimento imediato.",
      ],
    },
  ] satisfies readonly FaqItem[],
} as const;

export const contactContent = {
  eyebrow: "Primeiro contato",
  title: "Quando fizer sentido para você, podemos conversar",
  paragraphs: [
    "Se quiser receber informações sobre o atendimento ou verificar possibilidades de horário, envie uma mensagem pelo WhatsApp.",
    "Você pode escrever de forma breve. A conversa inicial é apenas para esclarecer dúvidas e organizar um possível agendamento.",
  ],
  cta: "Conversar pelo WhatsApp",
  disclaimer:
    "Este canal é destinado a informações e agendamento. Não funciona como atendimento de urgência ou emergência.",
} as const;

export const formContent = {
  title: "Prefere enviar uma mensagem por aqui?",
  description:
    "Preencha apenas os dados necessários para receber um retorno sobre o atendimento. Não inclua informações sensíveis sobre sua saúde neste formulário.",
  contactHint: "Informe pelo menos um canal para retorno: WhatsApp ou e-mail.",
  messageHint:
    "Escreva apenas uma dúvida breve sobre o funcionamento ou o agendamento. Evite informações clínicas ou dados sensíveis.",
  unavailableMessage:
    "O formulário foi preenchido corretamente, mas o serviço de envio ainda não está conectado. Nenhum dado foi enviado. Para entrar em contato agora, use o WhatsApp.",
} as const;
