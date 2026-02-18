import type { Ref } from 'react'
import { projects } from '../data/portfolio'
import Panel from './Panel'

export default function Projects({ ref }: { ref?: Ref<HTMLElement> }) {
  return (
    <Panel id="projects" label="projects" ref={ref}>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const card = (
            <div
              key={project.folder}
              className="project-card animate-in"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="project-title-bar">
                <span className="project-dots">
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                </span>
                <span className="project-filename">{project.folder}</span>
              </div>
              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )

          return project.link ? (
            <a
              key={project.folder}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              {card}
            </a>
          ) : (
            card
          )
        })}
      </div>
    </Panel>
  )
}
