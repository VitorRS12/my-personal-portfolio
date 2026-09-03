import { Section } from '@/components/ui/Section' 
import { aboutData } from '@/data/about'
import { FadeIn } from '@/components/motion/FadeIn'
import { BiParagraph } from 'react-icons/bi';

export function About() {
  return (
    <section id="about">
      <FadeIn>
        <h2 className="font-mono text-sm text=accent">Sobre</h2>
      </FadeIn>

      <div className="mt-6 max-w-2xl space-y-4">
        {aboutData.paragraphs.map((Paragraph, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <p className="text-text-scondary">{Paragraph} </p>
          </FadeIn>
        ))}
      </div>
      <p className="text-text-secondary">About — em construção</p>
    </section>
  )
}