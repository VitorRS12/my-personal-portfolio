import { whatIBuildData } from '@/data/whatibuild'
import { Section } from '@/components/ui/Section' 
import { FadeIn } from '@/components/motion/FadeIn'
import { Card } from '@/components/ui/Card'
import { ScrollFloat } from './ui/ScrollFloat';


export function WhatIBuild() {
  return (
    <Section id="what-i-build">
<ScrollFloat
  containerClassName="font-mono text-sm text-accent"
  scrollStart="top bottom-=10%"
  scrollEnd="bottom bottom-=30%"
>
  O que eu construo
</ScrollFloat>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {whatIBuildData.map((item, i) => {
          const Icon = item.icons
          return (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Card className="cursor-target h-full">
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}