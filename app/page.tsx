import Image from "next/image";
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { WhatIBuild } from '@/components/WhatIBuild'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
