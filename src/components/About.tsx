import type { Ref } from 'react'
import { about } from '../data/portfolio'
import Panel from './Panel'

const SEP_CHARS = 6

export default function About({ ref }: { ref?: Ref<HTMLElement> }) {
  return (
    <Panel id="about" label="about" ref={ref}>
      <div className="animate-in" style={{ transitionDelay: '100ms' }}>
        {about.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <div className="info-grid">
          {about.info.map((item) => (
            <div key={item.key} className="info-row">
              <span className="info-key">{item.key}</span>
              <span className="info-sep">{'─'.repeat(SEP_CHARS)}</span>
              <span className="info-val">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}
