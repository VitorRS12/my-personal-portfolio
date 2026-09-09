import { Section } from '@/components/ui/Section' 
import { aboutData } from '@/data/about'
import { FadeIn } from '@/components/motion/FadeIn'
import { ScrollFloat } from '@/components/ui/ScrollFloat';

export function About() {
  return (
    <Section id="about">
      <ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  Sobre
</ScrollFloat>

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