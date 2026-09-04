import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/motion/FadeIn'
import { experienceData } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience">
      <FadeIn>
        <h2 className= "font-mono text-sm text-accent">Experiência</h2>
      </FadeIn>

      <div className="mt-8 space-y-6 border-l border-border pl-6">
        {experienceData.map((item, i) => (
          <FadeIn key={item.role} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-text-primary">
                {item.role}
              </h3>
              <span className="font-mono text-xs text-text-secondary">
                {item.period}
                {item.period} && (
                  <span className="ml-2 rounded-full border border-accent/40 px-2 py-0.5 text-accent">
                  atual
                  </span>
                )
              </span>
              </div> 

              <p className="text-sm text-text-secondary">{item.company}</p>

              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((point) => (
                  <li 
                    key={point}
                    className="text-sm text-text-secondary before:mr-2 before: text-accent before:content-['-']"
                    >
                      {point}
                    </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}