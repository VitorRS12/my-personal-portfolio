'use client'

import { motion } from 'framer-motion'

export function WordReveal({ text, className = '' }: {text: string, className?: string }) {
    const words = text.split(' ')

    return (
        <p className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                    initial={{ y:'100%', opacity: 0 }}
                    whileInView={{ y: '0%', opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                >
                {word}
                {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
                </span>
            ))}
        </p>
    )
}