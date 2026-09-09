export interface Project {
  name: string
  summary: string // resumo curto para o card
  problem: string
  solution: string
  stack: string[]
  features: string[]
  challenges: string
  result: string
  githubUrl?: string
  demoUrl?: string
  isPrivate?: boolean
}

export const projectsData: Project[] = [
  {
    name: 'Sistema de Patelas',
    summary: 'Gestão de moldes e prensas de vulcanização direto no chão de fábrica.',
    problem: 'Gestão manual de moldes e prensas de vulcanização, sem controle centralizado de montagem e componentes — risco de montar peças defeituosas (NOK) por falta de rastreabilidade.',
    solution: 'Sistema web para gerenciamento de moldes/prensas de vulcanização, com controle de patelas e diafragmas cobrindo todo o fluxo de cadastro e montagem, pensado para uso direto no chão de fábrica.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Supabase', 'Vercel'],
    features: [
      'Autenticação de usuários',
      'CRUD completo da aba de Diafragmas (Aba Diafragmas)',
      'Integração com fluxo de montagem',
      'Sincronização de dados entre backend e frontend',
    ],
    challenges: 'Desenvolver um sistema que seria efetivamente usado na fábrica exigiu uma estrutura simples e adaptável — não bastava funcionar, precisava ser fácil de operar no dia a dia da produção.',
    result: 'A equipe passou a ter controle muito maior sobre a montagem de patelas, economizando tempo e reduzindo custo ao impedir que patelas NOK (defeituosas) sejam montadas.',
    isPrivate: true,
  },
  {
    name: 'ERP SaaS',
    summary: 'Plataforma de gestão para micro-empreendedores de nail design, cílios e sobrancelhas.',
    problem: 'Micro-empreendedores de nail design, cílios e sobrancelhas geralmente gerenciam agendamentos e clientes de forma manual, sem visibilidade sobre o desempenho do próprio negócio.',
    solution: 'Plataforma SaaS de gestão para esse nicho, com agendamento, controle de clientes e um dashboard que mostra os serviços mais realizados no mês.',
    stack: ['TypeScript', 'CSS', 'Supabase', 'Lovable'],
    features: [
      'Agendamento de clientes',
      'Controle de clientes',
      'Dashboard com os serviços mais realizados no mês',
    ],
    challenges: 'Trabalhar com uma ferramenta de desenvolvimento assistido por IA (Lovable) exigiu se adaptar a estruturas diferentes das que eu escrevia manualmente — um processo que contribuiu diretamente para meu aprendizado em como interagir com IA no desenvolvimento.',
    result: 'Em produção, com os primeiros usuários testando a plataforma.',
    demoUrl: 'https://bellenailsapp.com',
  },
]