import { cn } from '@/lib/utils'

interface SectionProps {
    id: string
    className?: string
    children: React.ReactNode
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn('mx-auto max-w-6xl px-6 md:py-24', className)}>
            {children}
        </section>
    )
}