import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/motion/FadeIn'
import { educationData } from '@/data/education'


export function Education() {
  return (
    <section id="education">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">Formação</h2>
      </FadeIn>

      <div className="mt-8 space-y-6 border-l border-border pl-6">
        {educationData.map((item, i) => (
          <FadeIn key={item.course} delay={i * 0.1}>
            <div className="relative">
              <span 
                className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  item.status === 'completed' ? 'bg-accent' : 'bg-text-secondary'
                  }`}
                 />
                 <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-text-primary">{item.course}</h3>
                  <span className="font-mono text-xs text-text-secondary">
                    {item.period}
                  </span>
                 </div>
                 <p className="text-sm text-text-secondary">{item.institution}</p>
            </div>
          </FadeIn>
        ))} 
      </div>
    </section>
  )
}