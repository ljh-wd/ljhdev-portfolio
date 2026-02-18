import type { Ref } from 'react'
import { skills, NEOFETCH_ART } from '../data/portfolio'
import Panel from './Panel'

const ACTIVITY = [
  '010010120310342132432',
  '101201032213431243213',
  '002102123134321024321',
  '020010212343210232132',
  '101121320232132123420',
  '000100101021020010210',
  '001001010010110010100',
]

export default function Skills({ ref }: { ref?: Ref<HTMLElement> }) {
  return (
    <Panel id="skills" label="skills" ref={ref}>
      <div className="neofetch animate-in" style={{ transitionDelay: '100ms' }}>
        <pre className="neofetch-art" aria-hidden="true">{NEOFETCH_ART}</pre>
        <div className="neofetch-info">
          <div className="nf-title">visitor@portfolio</div>
          <div className="nf-sep">──────────────────</div>
          {skills.rows.map((row) => (
            <div key={row.key} className="nf-row">
              <span className="nf-key">{row.key}</span>
              <span className="nf-val">{row.value}</span>
            </div>
          ))}
          <div className="contrib-graph" aria-hidden="true">
            {ACTIVITY.flatMap((row, day) =>
              row.split('').map((level, week) => (
                <span
                  key={`${day}-${week}`}
                  className={`contrib-cell contrib-${level}`}
                  style={{
                    gridRow: day + 1,
                    gridColumn: week + 1,
                    animationDelay: `${week * 0.03}s`,
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Panel>
  )
}
