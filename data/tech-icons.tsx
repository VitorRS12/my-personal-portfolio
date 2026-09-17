import type { ReactNode } from 'react'
import { PowerBiIcon, ExcelIcon, WindowsIcon, PowerQueryIcon, ApiRestIcon, VsCodeIcon } from '@/data/Icons/icons'
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiHtml5, SiCss, SiNodedotjs, SiPhp, SiLaravel, SiPostgresql,
  SiSupabase, SiGit, SiGithub, SiVercel,
  SiDocker, SiLinux, SiCplusplus, SiMongodb,
  SiC,} from 'react-icons/si'
import { Database, Code2, Cloud, Monitor, FileSpreadsheet, Server } from 'lucide-react'


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
  'VS Code': <VsCodeIcon>{null}</VsCodeIcon>,
  Vercel: <SiVercel />,
  Docker: <SiDocker />,
  Linux: <SiLinux />,
  Windows: <WindowsIcon>{null}</WindowsIcon>,
  'C++': <SiCplusplus />,
  'Mongo DB': <SiMongodb />,
  MongoDB: <SiMongodb />,
  Azure: <Cloud />,
  Excel: <ExcelIcon>{null}</ExcelIcon>,
  SQL: <Database />,
  C: <SiC />,
  'Power BI': <PowerBiIcon>{null}</PowerBiIcon>,
  'Power Query': <PowerQueryIcon>{null}</PowerQueryIcon>,
  DAX: <Code2 />,
  Lovable: <Code2 />,
  'APIs REST': <ApiRestIcon>{null}</ApiRestIcon>, 
}

function normalize(name: string) {
  return name.trim().toLowerCase()
}

export function getTechLogos(names: readonly string[]) {
  return names.map((name) => ({
    node: techIconMap[name] ?? <Code2 />,
    title: name,
  }))
}