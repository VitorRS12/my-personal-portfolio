export interface Project {
  name: string
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
    problem:
      'Gestão manual de moldes e prensas de vulcanização, sem controle centralizado de montagem e componentes.',
    solution:
      'Sistema web para gerenciamento de moldes/prensas de vulcanização, incluindo controle de patelas e diafragmas com fluxo completo de cadastro e montagem.',
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
    problem: 'Micro-empreendedores de nail design, cílios e sobrancelhas geralmente gerenciam agendamentos e clientes de forma manual, sem visibilidade sobre o desempenho do próprio negócio.',
    solution: 'Sistema ERP em modelo SaaS voltado para pequenos vendedores brasileiros.',
    stack: [
        'TypeScript', 'CSS', 'Supabase', 'Lovable'
    ],
    features: [
      'Agendamento de clientes',
      'Controle de clientes',
      'Dashboard com indicadores de maiores vendas'
    ],
    challenges: 'Trabalhar com uma ferramenta de desenvolvimento assistido por IA (Lovable) exigiu se adaptar a estruturas diferentes das que eu escrevia manualmente — um processo que contribuiu diretamente para meu aprendizado em como interagir com IA no desenvolvimento.',
    result: 'Finalizando a etapa de aprovação pelas clientes, já em uso e com últimos resultados',
    demoUrl: 'https://bellenailsapp.com',
  },
]
