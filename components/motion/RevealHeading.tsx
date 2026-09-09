'use client'

import { motion } from 'framer-motion'

interface RevealHeadingProps {
  children: React.ReactNode
}

export function RevealHeading({ children }: RevealHeadingProps) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-sm text-accent"
      >
        {children}
      </motion.h2>
    </div>
  )
}