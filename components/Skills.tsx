import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/motion/FadeIn'
import { skillsData } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent"> Skills</h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillsData.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.1}>
            <Card className="cursor-target h-full">
              <h3 className="font-semibold text-text-primary">
                {group.category}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {group.capability}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                  ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}