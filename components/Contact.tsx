import { Mail, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/motion/FadeIn'
import { ContactForm } from '@/components/ContactForm'
import { heroData } from '@/data/hero'

export function Contact() {
  return (
    <section id="contact">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">Contato</h2>
        <p className="mt-2 max-w-md text-text-secondary">
          Tem um projeto ou oportunidade em mente? Vamos conversar.
        </p>
      </FadeIn>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4">

            href={`mailto:${heroData.links.email}`}
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            
              <Mail size={20} />
              {heroData.links.email}
            

            href={heroData.links.github}
            target="_blank"
            rel="noonper noreferrer"
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            
              <FaGithub size={20} />
              github.com/VitorRS12

            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"  

              <FaLinkedin size={20} />
              linkedin.com/in/edelson-vitor
              
          </div>
        </FadeIn>
      </div>
    </section>
  )
}