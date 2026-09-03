'use client'
  
import { GooeyNav } from '@/components/ui/GooeyNav'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(' ')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }, 
    { rootMargin: `-40% 0px -55% 0px` }
  )

  sections.forEach((section) => observer.observe(section))
return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-colors',
        isScrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-sm'
          : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm text-text-primary">
          EV
        </a>

       <div className="hidden md:block">
        <GooeyNav items={navLinks} initialActiveIndex={0} />
    </div>

        <button
          className="cursor-target text-text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm text-text-secondary hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}