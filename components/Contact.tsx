import { Mail, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/motion/FadeIn'
import { ContactForm } from '@/components/ContactForm'
import { heroData } from '@/data/hero'
import { a } from 'framer-motion/client';
import { ScrollFloat } from './ui/ScrollFloat';

export function Contact() {
  return (
    <section id="contact">
      <ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  Contato
</ScrollFloat>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4">

            href={`mailto:${heroData.links.email}`}
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            <a>
              <Mail size={20} />
              {heroData.links.email}
            </a>

            href={heroData.links.github}
            target="_blank"
            rel="noonpener noreferrer"
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            <a>
              <FaGithub size={20} />
              github.com/VitorRS12
            </a>

            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"  
            <a>
              <FaLinkedin size={20} />
              linkedin.com/in/edelson-vitor
            </a> 

          </div>
        </FadeIn>
      </div>
    </section>
  )
}