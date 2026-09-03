'use client'

import { Mail, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { heroData } from "@/data/hero"
import { Button } from "@/components/Button"
import{ FadeIn } from "@/components/motion/FadeIn"

export function Hero() {
  return (
    <section 
      id="hero" 
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
      <FadeIn>
        <p className="font-mono text-sm text-accent">{heroData.greeting}</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mt-3 text 4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          {heroData.name}
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-2 text-lg text-text-secondary ">
          {heroData.role}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-6 max-w-xl text-text-secondary">
          {heroData.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {heroData.stack.map((tech) => (
            <span
            key={tech}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs texte-text-secondary" 
          >
            {tech}
          </span>
          ))}
          </div>
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
    </section>
  )
}