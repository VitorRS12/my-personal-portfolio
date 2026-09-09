import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/motion/FadeIn'
import { skillsData } from '@/data/skills'
import { ScrollFloat } from './ui/ScrollFloat';
import { LogoLoop } from '@/components/ui/LogoLoop'
import { getTechLogos } from '@/data/tech-icons'

export function Skills() {
  return (
    <section id="skills">
<ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  Skills
</ScrollFloat>      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillsData.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.1}>
            <Card className="cursor-target h-full">
              <h3 className="font-semibold text-text-primary">
                {group.category}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {group.capability}
              </p>

              <div className="mt-4">
  <LogoLoop
    logos={getTechLogos(group.stack)}
    speed={25}
    logoHeight={20}
    ariaLabel={`Tecnologias de ${group.category}`}
  />
</div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}