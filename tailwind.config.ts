import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend:{
            fontFamily:{
                sans: ['var (--font-geist-sans)'],
                mono: ['var (--font-geist-mono)'],
            },
            colors: {
                background: 'var(--background)',
                card: 'var(--card)',
                border: 'var(--border)',
                accent: 'var(--accent)', 
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
            },
        },
    },
    plugins: [], 
}

export default config