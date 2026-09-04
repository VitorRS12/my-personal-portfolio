import { BiCategory } from "react-icons/bi";

export const skillsData = [
    {
        category: 'Front-end',
        capability: 'Interface web responsivas, tipadas e perfomáticas',
        stack:['TypeScript','JavaScrip','React','Next.js','Tailwind CSS','HTML','CSS']
    },
    {
        category: 'Back-end',
        capability: 'APIs e sistemas de gestão que sustentam operações reais',
        stack:['Node.js','APIs REST','SQL','PostgreSQL','Supabase']
    },
    {
        category: 'Dados',
        capability: 'Dashboards e indicadores que viram decisão, não só planilja',
        stack:['Power BI','Excel','Power Query','DAX']
    },
    {
        category: 'Ferramentas',
        capability: 'Fluxo de desenvolvimento, deploy e infraestrutura de ponta a ponta',
        stack:['Git','GitHub','VS Code','Vercel','Linux','Docker']
    },
] as const 