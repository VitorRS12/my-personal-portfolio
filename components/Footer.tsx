import { Mail, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { heroData } from '@/data/hero'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} Edelson Vitor
        </p>

        <div className="flex items-center gap-5">
          
            href={heroData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cursor-target text-text-secondary transition-colors hover:text-accent"
          <a>
            <FaGithub size={18} />
          </a>
          
            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="cursor-target text-text-secondary transition-colors hover:text-accent"
          <a>
            <FaLinkedin size={18} />
          </a>
          
            href={`mailto:${heroData.links.email}`}
            aria-label="E-mail"
            className="cursor-target text-text-secondary transition-colors hover:text-accent"
          <a>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}