import { useState } from 'react'
import { SECTIONS, type Section } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { useScrollReveal } from './hooks/useScrollReveal'
import SkipToContent from './components/SkipToContent'
import CrtOverlay from './components/CrtOverlay'
import TitleBar from './components/TitleBar'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import StatusBar from './components/StatusBar'
import './App.css'

export default function App() {
  const [crt, setCrt] = useState(true)
  const { activeSection, sectionRef } = useActiveSection(SECTIONS)
  useScrollReveal()

  const scrollTo = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={crt ? 'crt-on' : ''}>
      <SkipToContent />
      <CrtOverlay enabled={crt} />

      <div className="terminal-window">
        <div className="terminal-header">
          <TitleBar />
          <NavBar sections={SECTIONS} activeSection={activeSection} onNavigate={scrollTo} />
        </div>

        <main className="content" id="main-content">
          <Hero />
          <About ref={sectionRef('about')} />
          <Projects ref={sectionRef('projects')} />
          <Skills ref={sectionRef('skills')} />
          <Contact ref={sectionRef('contact')} />
        </main>

        <StatusBar
          activeSection={activeSection}
          crt={crt}
          onCrtToggle={() => setCrt((prev) => !prev)}
        />
      </div>
    </div>
  )
}
