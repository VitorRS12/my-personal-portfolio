import type { ReactNode } from 'react'
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiHtml5, SiCss, SiNodedotjs, SiPhp, SiLaravel, SiPostgresql,
  SiSupabase, SiGit, SiGithub, SiVercel,
  SiDocker, SiLinux, SiCplusplus, SiMongodb,
} from 'react-icons/si'
import { Database, Code2, Cloud, Monitor, FileSpreadsheet } from 'lucide-react'

const techIconMap: Record<string, ReactNode> = {
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Tailwind CSS': <SiTailwindcss />,
  Tailwind: <SiTailwindcss />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  'Node.js': <SiNodedotjs />,
  PHP: <SiPhp />,
  Laravel: <SiLaravel />,
  PostgreSQL: <SiPostgresql />,
  Supabase: <SiSupabase />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  'VS Code': <Code2 />,
  Vercel: <SiVercel />,
  Docker: <SiDocker />,
  Linux: <SiLinux />,
  Windows: <Monitor />,
  'C++': <SiCplusplus />,
  'Mongo DB': <SiMongodb />,
  MongoDB: <SiMongodb />,
  Azure: <Cloud />,
  Excel: <FileSpreadsheet />,
  SQL: <Database />,
  C: <Code2 />,
  'Power BI': <Code2 />,
  'Power Query': <Code2 />,
  DAX: <Code2 />,
  Lovable: <Code2 />,
}

export function getTechLogos(names: readonly string[]) {
  return names.map((name) => ({
    node: techIconMap[name] ?? <Code2 />,
    title: name,
  }))
}