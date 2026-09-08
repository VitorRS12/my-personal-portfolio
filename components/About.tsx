import { Section } from '@/components/ui/Section' 
import { aboutData } from '@/data/about'
import { FadeIn } from '@/components/motion/FadeIn'

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">Sobre</h2>
      </FadeIn>

      <div className="mt-6 max-w-2xl space-y-4">
        {aboutData.paragraphs.map((Paragraph, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <p className="text-text-secondary">{Paragraph} </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}