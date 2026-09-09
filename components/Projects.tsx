'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import {Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/motion/FadeIn'
import { ProjectModal } from '@/components/ProjectModal'
import { projectsData, type Project } from '@/data/projects'
import { ScrollFloat } from './ui/ScrollFloat';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section id="projects">
<ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  Projetos
</ScrollFloat>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projectsData.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1}>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="cursor-target block w-full text-left"
            >
              <Card className="h-full transition-transform hover:-translate-y-1">
                <h3 className="font-semibold text-text-primary">{project.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{project.summary}</p>
                <span className="mt-4 inline-block font-mono text-xs text-accent">
                  Ver detalhes →
                </span>
              </Card>
            </button>
          </FadeIn>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}