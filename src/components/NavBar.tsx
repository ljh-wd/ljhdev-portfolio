import type { Section } from '../data/portfolio'

interface NavBarProps {
  sections: readonly Section[]
  activeSection: Section
  onNavigate: (id: Section) => void
}

export default function NavBar({ sections, activeSection, onNavigate }: NavBarProps) {
  return (
    <nav className="nav-bar" role="navigation">
      {sections.map((section) => (
        <button
          key={section}
          className={`nav-tab ${activeSection === section ? 'active' : ''}`}
          onClick={() => onNavigate(section)}
        >
          [{section}]
        </button>
      ))}
    </nav>
  )
}
