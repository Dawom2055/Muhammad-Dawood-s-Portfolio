import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Animations from '@/components/Animations'
import Footer from '@/components/Footer'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Navbar />
      <Animations />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </>
  )
}
