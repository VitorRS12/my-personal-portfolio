'use client'

import { useEffect, useState } from 'react'
import { Menu, X} from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const [ísOpen, setIsOpen] = useState(false)
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

  return (
    <header id="header" className="flex min-h-screen items-center justify-center">
      <p className="text-text-secondary">Header — em construção</p>
    </header>
  )
}