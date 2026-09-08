import { FaGithub } from 'react-icons/fa'
import { ExternalLink, Lock } from 'lucide-react'
import { Card } from  '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/motion/FadeIn'
import { projectsData } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">Projects</h2>
      </FadeIn>

      <div className="mt=8 grid grap-6 lg:grid-cols-2">
        {projectsData.map((project, i) => (
          <FadeIn key={project.name} delay={i*0.1}>
            <Card className="cursor-target flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                {project.isPrivate && (
                  <span className="flex items-center gap-1 whitespace-nowrap rounded-full border border-border px-2 py-1 text-xs text-text-secondary">
                    <Lock size={12} />
                    Privado
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-mono text-xs text-accent">Problema</p>
                  <p className="mt-1 text-text-secondary">{project.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-accent">Solução</p>
                  <p className="mt-1 text-text-secondary">{project.solution}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-1.5">
                {project.features.map((feature) => (
                  <li key={feature} className="text-sm text-text-secondary before:mr-2 before:text-accent before:content-['—']">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-mono text-xs text-accent">Desafio</p>
                  <p className="mt-1 text-text-secondary">{project.challenges}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-accent">Resultado</p>
                  <p className="mt-1 text-text-secondary">{project.result}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent">
                    <FaGithub size={16} /> Código
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent">
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
                {!project.githubUrl && !project.demoUrl && !project.isPrivate && (
                  <span className="text-sm text-text-secondary">Link disponível sob demanda</span>
                )}
                </div>
            </Card>
          </FadeIn>
        ))}

      </div>
    </Section>
  )
}