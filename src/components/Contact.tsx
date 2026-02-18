import type { Ref } from 'react'
import { contact } from '../data/portfolio'
import Panel from './Panel'

export default function Contact({ ref }: { ref?: Ref<HTMLElement> }) {
  return (
    <Panel id="contact" label="contact" ref={ref}>
      <div className="animate-in" style={{ transitionDelay: '100ms' }}>
        <div className="contact-links">
          {contact.links.map((link) => (
            <a key={link.value} href={link.url} className="contact-line">
              <span className="contact-prompt">%</span>
              <span className="contact-cmd">{link.command}</span>
              <span className="contact-val">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Panel>
  )
}
