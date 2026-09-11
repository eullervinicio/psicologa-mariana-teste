import type {
  ContentItem,
  FaqItem,
  NavigationItem,
  ProcessStep,
} from "@/types/content";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const heroContent = {
  eyebrow: "Psicoterapia para adultos",
  title:
    "Um acompanhamento atento para compreender o que você vive com mais clareza",
  description:
    "Atendimento psicológico com escuta e respeito, orientado pela Terapia Cognitivo-Comportamental e pelas necessidades de cada pessoa.",
  cta: "Conversar pelo WhatsApp",
  ctaNote: "Um primeiro contato para informações e agendamento.",
} as const;

export const needsContent = {
  eyebrow: "Quando buscar acompanhamento",
  title: "Diferentes momentos podem levar alguém a buscar terapia",
  description:
    "Nem sempre é simples nomear o que está acontecendo. Às vezes, a procura começa por um incômodo persistente; em outras, pelo desejo de compreender escolhas, relações ou formas de lidar com a própria rotina.",
  items: [
    {
      title: "Ansiedade e sobrecarga",
      description:
        "Quando preocupações, cobranças e tarefas parecem ocupar mais espaço do que você gostaria.",
    },
    {
      title: "Relações e limites",
      description:
        "Para olhar com mais atenção para vínculos, comunicação e dificuldades em estabelecer limites.",
    },
    {
      title: "Autoestima e autoconhecimento",
      description:
        "Um espaço para reconhecer necessidades, compreender a própria história e ampliar a percepção sobre si.",
    },
    {
      title: "Mudanças e decisões",
      description:
        "Em períodos de transição, incerteza ou escolhas que pedem tempo e clareza.",
    },
    {
      title: "Padrões que se repetem",
      description:
        "Quando certas situações, pensamentos ou reações voltam a acontecer e despertam o desejo de fazer diferente.",
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
  eyebrow: "Abordagem",
  title: "Terapia Cognitivo-Comportamental na prática",
  paragraphs: [
    "A Terapia Cognitivo-Comportamental, também conhecida como TCC, observa a relação entre pensamentos, emoções e comportamentos.",
    "Ao longo do acompanhamento, buscamos compreender como essas relações aparecem na sua vida e construir formas de lidar com elas que sejam coerentes com o seu momento.",
    "O processo é colaborativo: as questões são conversadas com clareza, e o ritmo do atendimento considera as necessidades de cada pessoa.",
  ],
  principles: [
    {
      title: "Compreender",
      description:
        "Observar situações, pensamentos, emoções e comportamentos com mais clareza.",
    },
    {
      title: "Construir",
      description:
        "Desenvolver novas formas de responder às dificuldades, respeitando possibilidades reais.",
    },
    {
      title: "Acompanhar",
      description:
        "Revisar o percurso em conjunto e ajustar o processo ao que fizer sentido ao longo do tempo.",
    },
  ] satisfies readonly ContentItem[],
} as const;

export const processContent = {
  eyebrow: "Como funciona",
  title: "Um primeiro contato simples, com espaço para esclarecer dúvidas",
  description:
    "Você não precisa chegar com tudo organizado. O contato inicial serve para receber informações sobre o atendimento e verificar possibilidades de horário.",
  steps: [
    {
      number: "01",
      title: "Envie uma mensagem",
      description:
        "Ao clicar no botão do WhatsApp, você pode se apresentar brevemente e dizer se busca atendimento online ou presencial.",
    },
    {
      number: "02",
      title: "Receba as informações",
      description:
        "Nesse contato, você poderá esclarecer dúvidas sobre disponibilidade, honorários e funcionamento do atendimento.",
    },
    {
      number: "03",
      title: "Combine o primeiro encontro",
      description:
        "Havendo disponibilidade e interesse, definimos o melhor horário para a primeira sessão.",
    },
    {
      number: "04",
      title: "Inicie a conversa",
      description:
        "Na primeira sessão, conversamos sobre o que motivou sua busca e sobre como o processo terapêutico pode ser conduzido.",
    },
  ] satisfies readonly ProcessStep[],
  modalities: [
    {
      title: "Atendimento online",
      description:
        "Realizado por videochamada, permite fazer as sessões a partir de um local reservado, com privacidade e conexão estável.",
    },
    {
      title: "Atendimento presencial",
      description:
        "Realizado em São Paulo — SP, em ambiente preparado para o acompanhamento psicológico.",
    },
  ] satisfies readonly ContentItem[],
  note: "As informações sobre disponibilidade, honorários e formas de pagamento são fornecidas pelo WhatsApp.",
} as const;

export const faqContent = {
  eyebrow: "Dúvidas frequentes",
  title: "Antes de entrar em contato",
  description:
    "Respostas objetivas para algumas dúvidas comuns sobre o início do acompanhamento.",
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
