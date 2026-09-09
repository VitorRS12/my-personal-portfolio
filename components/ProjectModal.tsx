'use client' 

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { X, ExternalLink, Lock, Presentation } from 'lucide-react'
import { LogoLoop } from '@/components/ui/LogoLoop'
import { getTechLogos } from '@/data/tech-icons'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
    project: Project | null
    onClose: () => void 
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = project ? 'hidden' : ''
    return () => {
        window.addEventListener('keydown', handleKey)
        document.body.style.overflow = ''
    }
    }, [project, onClose])
    if (typeof document === 'undefined') return null
    
    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }} 
                  className="fixed isent-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
                  onClick={onClose}
                  role="presentation"
                  >
                    <motion.div
                    initial={{ opacity: 0, scale: 0.94, y:16 }}
                    animate={{ opacity: 1, scale: 1, y:0 }}
                    exit={{ opacity: 0, scale: 0.96, y:8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-8"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    arial-modal="true"
                    aria-labelledby="project-modal-title"
                >
                  <button
                  onClick={onClose}
                  aria-label="Fechar"
                  className="cursor-target absolute right-6 top-6 text-text-secondary transiotion-colors hober:text-accent"
                >
                    <X size={20} />
                </button>
                <div className="flex items-start gap-3 pr-8">
                    <h3 id="project-modal-title" className="text-xl font-semibold text-text-secondary">
                        {project.name}
                    </h3>
                    {project.isPrivate && (
                        <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-border px-2 py-1 text-xs text-text-secondary">
                            <Lock size={12} />
                            Privado
                        </span>
                    )}
                </div>

                <div className="mt-6 space-y-4 text-sm">
                    <div>
                        <p className="font-mono text-xs text-accent">Problema</p>
                        <p className="mt-1 text-text-secondary">{project.problem}</p>
                    </div>
                    <div>
                        <p className="font-mono text-xs text-accent">Solução</p>
                        <p className="mt-1 text-text-secondary">{project.solution}</p>
                    </div>
                </div>

                <div className="mt-5">
  <LogoLoop
    logos={getTechLogos(project.stack)}
    speed={20}
    logoHeight={22}
    ariaLabel={`Tecnologias usadas em ${project.name}`}
  />
</div>

                <ul className="mt-5 space-y-1.5">
                    {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-text-secondary before:mr-2 before:text-accent before:content-['—']">
                            {feature}
                        </li>
                    ))}
            </ul>

                  <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-mono text-xs text-accent">Desafio</p>
                <p className="mt-1 text-text-secondary">{project.challenges}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent">Resultado</p>
                <p className="mt-1 text-text-secondary">{project.result}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4 border-t border-border pt-6">
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
                </motion.div>
                  </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}