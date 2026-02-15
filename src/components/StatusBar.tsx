import type { Section } from '../data/portfolio'

interface StatusBarProps {
  activeSection: Section
  crt: boolean
  onCrtToggle: () => void
}

export default function StatusBar({ activeSection, crt, onCrtToggle }: StatusBarProps) {
  return (
    <footer className="status-bar">
      <span className="status-item">
        <span className="status-dot" />
        visitor@portfolio
      </span>
      <span className="status-item">section: {activeSection}</span>
      <span className="status-item">theme: ayu-dark</span>
      <button className="crt-toggle" onClick={onCrtToggle}>
        crt: {crt ? 'on' : 'off'}
      </button>
    </footer>
  )
}
