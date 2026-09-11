'use client'

import { useRef } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { heroData } from "@/data/hero"
import { MatrixRain } from '@/components/motion/MatrixRain'
import { Button } from "@/components/Button"
import { FadeIn } from "@/components/motion/FadeIn"
import { ProfileOrbit } from '@/components/motion/ProfileOrbit'
import { LogoLoop } from '@/components/ui/LogoLoop'
import { ScrollFloat } from '@/components/ui/ScrollFloat'
import { getTechLogos } from '@/data/tech-icons'
import { WordReveal } from './motion/WordReveal';

export function Hero() {
  const photoAnchorRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-24 lg:text-left"      >
        <MatrixRain className="opacity-40 [mask-image:linear-gradient(to_left,black_40%,transparent_75%)]" />

        <ProfileOrbit {...({ anchorRef: photoAnchorRef } as any)} />

        {/*Espaço Reservado - define onde a foto está alocada antes de encolher*/}
        <div ref={photoAnchorRef} className="hidden shrink-0 lg:block" style={{ width: 280, height: 280 }} />

        <div className="relative flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
      <FadeIn>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <p className="font-mono text-sm tracking-wide text-accent">{heroData.greeting}</p>
        </div>
      </FadeIn>

      <ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  {heroData.name}
</ScrollFloat>

      <FadeIn delay={0.2}>
        <p className="mt-2 text-lg text-text-secondary ">
          {heroData.role}
        </p>
      </FadeIn>

      <WordReveal text={heroData.description} className="mt=6 max-w-xl text-text-secondary" />

      <FadeIn delay={0.4}>
        <LogoLoop
    logos={getTechLogos(heroData.stack)}
    speed={30}
    logoHeight={22}
    className="mx-auto max-w-md"
    ariaLabel="Tecnologias principais"
  />
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="mt-10 flex items-center gap-4"> 
          <button
            type="button"
            className="cursor-target"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            >
            Ver Projetos <ArrowRight size={16} className="ml-2" />
          </button>
          <button
            type="button"
            className="cursor-target"
            onClick={() => {
              window.location.href = `mailto:${heroData.links.email}`
            }}
            >
            Contato
          </button>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
          <div className="mt-8 flex items-center gap-5"> 

            <a
              href={heroData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-target text-text-secondary transition-colors hover:text-accent"
              >
              <FaGithub size={20} />
            </a>

            <a
              href={heroData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-target text-text-secondary transition-colors hover:text-accent"
              >
              <FaLinkedin size={20} />
            </a>

            <a
              href={`mailto:${heroData.links.email}`}
              aria-label="E-mail"
              className="cursor-target text-text-secondary transition-colors hover:text-accent"
              >
              <Mail size={20} />
            </a>
        </div>
      </FadeIn>
    </div>
    </div>
    </section>
  )
}