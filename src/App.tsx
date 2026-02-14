import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact'] as const
type Section = (typeof SECTIONS)[number]

const NEOFETCH_ART = `╭──────────────╮
│              │
│    > _       │
│              │
│              │
╰──────────────╯
  ════════════`

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('about')
  const [crt, setCrt] = useState(true)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  const setRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) sectionRefs.current.set(id, el)
      else sectionRefs.current.delete(id)
    },
    [],
  )

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    )

    sectionRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll-triggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 },
    )

    document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: Section) => {
    sectionRefs.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={crt ? 'crt-on' : ''}>
      {crt && <div className="scanlines" aria-hidden="true" />}
      {crt && <div className="vignette" aria-hidden="true" />}

      <div className="terminal-window">
        {/* ── Header: Title Bar + Nav ── */}
        <div className="terminal-header">
          <div className="title-bar">
            <div className="traffic-lights">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="title-text">visitor@portfolio:~ — zsh — 80×24</span>
            <div className="title-spacer" />
          </div>

          <nav className="nav-bar" role="navigation">
            {SECTIONS.map((item) => (
              <button
                key={item}
                className={`nav-tab ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollTo(item)}
              >
                [{item}]
              </button>
            ))}
          </nav>
        </div>

        {/* ── Content ── */}
        <main className="content">
          {/* Hero */}
          <section className="hero">
            <div className="prompt-line">
              <span className="prompt">
                visitor@portfolio
                <span className="prompt-sep">:</span>
                <span className="prompt-dir">~</span>
                <span className="prompt-sep">$</span>
              </span>
              <span className="command"> cat welcome.txt</span>
            </div>
            <div className="hero-output">
              <h1 className="hero-name">Your Name</h1>
              <p className="hero-title">&gt; Full Stack Developer</p>
              <p className="hero-desc">
                I craft performant, accessible web experiences and build
                <br />
                tools that live in the terminal. Currently open to new opportunities.
              </p>
            </div>
            <div className="prompt-line">
              <span className="prompt">
                visitor@portfolio
                <span className="prompt-sep">:</span>
                <span className="prompt-dir">~</span>
                <span className="prompt-sep">$</span>
              </span>
              <span className="cursor">█</span>
            </div>
          </section>

          {/* ── About ── */}
          <section id="about" ref={setRef('about')} className="panel animate-in">
            <div className="panel-header">
              <span className="panel-dash">──</span>
              <span className="panel-label">about</span>
              <span className="panel-dash-fill" />
            </div>
            <div className="panel-content">
              <p>
                Hey there — I'm a developer who believes the best code is the kind you don't
                notice. I've been shipping software for X years, working across the full stack
                from database schemas to pixel-perfect UIs.
              </p>
              <p>
                When I'm not writing code, you'll find me deep in the terminal, tweaking my
                Neovim config, contributing to open source, or exploring new tools and workflows
                that make development more enjoyable.
              </p>
              <div className="info-grid">
                <div className="info-row">
                  <span className="info-key">location</span>
                  <span className="info-sep">────</span>
                  <span className="info-val">Your City, ST</span>
                </div>
                <div className="info-row">
                  <span className="info-key">focus</span>
                  <span className="info-sep">───────</span>
                  <span className="info-val">Full Stack Development</span>
                </div>
                <div className="info-row">
                  <span className="info-key">interests</span>
                  <span className="info-sep">───</span>
                  <span className="info-val">Open Source, CLI Tools, Systems</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Experience ── */}
          <section id="experience" ref={setRef('experience')} className="panel animate-in">
            <div className="panel-header">
              <span className="panel-dash">──</span>
              <span className="panel-label">experience</span>
              <span className="panel-dash-fill" />
            </div>
            <div className="panel-content">
              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-role">Senior Developer</span>
                  <span className="exp-at">@</span>
                  <span className="exp-company">Company Name</span>
                  <span className="exp-date">2022 — Present</span>
                </div>
                <div className="exp-body">
                  <p>
                    Led development of the core platform, architecting scalable solutions and
                    mentoring junior developers. Reduced build times by 60% and improved test
                    coverage to 95%.
                  </p>
                  <div className="exp-tech">
                    <span className="tag">TypeScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-role">Developer</span>
                  <span className="exp-at">@</span>
                  <span className="exp-company">Previous Co</span>
                  <span className="exp-date">2020 — 2022</span>
                </div>
                <div className="exp-body">
                  <p>
                    Built and maintained multiple client-facing applications serving 100K+ users.
                    Implemented CI/CD pipelines and containerized deployments that cut release
                    cycles from days to hours.
                  </p>
                  <div className="exp-tech">
                    <span className="tag">Python</span>
                    <span className="tag">Django</span>
                    <span className="tag">React</span>
                    <span className="tag">Docker</span>
                  </div>
                </div>
              </div>

              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-role">Junior Developer</span>
                  <span className="exp-at">@</span>
                  <span className="exp-company">First Job Inc</span>
                  <span className="exp-date">2018 — 2020</span>
                </div>
                <div className="exp-body">
                  <p>
                    Started career building internal tools and automating workflows. Developed a
                    love for the command line and DevOps practices that stuck.
                  </p>
                  <div className="exp-tech">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Projects ── */}
          <section id="projects" ref={setRef('projects')} className="panel animate-in">
            <div className="panel-header">
              <span className="panel-dash">──</span>
              <span className="panel-label">projects</span>
              <span className="panel-dash-fill" />
            </div>
            <div className="panel-content">
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-title-bar">
                    <span className="project-dots">
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                    </span>
                    <span className="project-filename">project-alpha/</span>
                  </div>
                  <div className="project-body">
                    <h3 className="project-name">Project Alpha</h3>
                    <p className="project-desc">
                      A CLI tool that automates development workflows. Supports plugins, custom
                      scripts, and integrates with popular CI/CD platforms.
                    </p>
                    <div className="project-tech">
                      <span className="tag">Rust</span>
                      <span className="tag">CLI</span>
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-link">↗ github</a>
                      <a href="#" className="project-link">↗ demo</a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-title-bar">
                    <span className="project-dots">
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                    </span>
                    <span className="project-filename">dashboard-x/</span>
                  </div>
                  <div className="project-body">
                    <h3 className="project-name">Dashboard X</h3>
                    <p className="project-desc">
                      Real-time analytics dashboard with customizable widgets, dark mode, and
                      WebSocket-powered live data streaming.
                    </p>
                    <div className="project-tech">
                      <span className="tag">React</span>
                      <span className="tag">D3.js</span>
                      <span className="tag">WebSocket</span>
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-link">↗ github</a>
                      <a href="#" className="project-link">↗ live</a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-title-bar">
                    <span className="project-dots">
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                      <span className="mini-dot" />
                    </span>
                    <span className="project-filename">dotfiles/</span>
                  </div>
                  <div className="project-body">
                    <h3 className="project-name">Dotfiles</h3>
                    <p className="project-desc">
                      My personal development environment. Neovim config, Zsh setup, tmux
                      layouts, and custom shell scripts. Battle-tested daily.
                    </p>
                    <div className="project-tech">
                      <span className="tag">Shell</span>
                      <span className="tag">Lua</span>
                      <span className="tag">Nix</span>
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-link">↗ github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Skills (Neofetch) ── */}
          <section id="skills" ref={setRef('skills')} className="panel animate-in">
            <div className="panel-header">
              <span className="panel-dash">──</span>
              <span className="panel-label">skills</span>
              <span className="panel-dash-fill" />
            </div>
            <div className="panel-content">
              <div className="neofetch">
                <pre className="neofetch-art" aria-hidden="true">{NEOFETCH_ART}</pre>
                <div className="neofetch-info">
                  <div className="nf-title">visitor@portfolio</div>
                  <div className="nf-sep">──────────────────</div>
                  <div className="nf-row">
                    <span className="nf-key">Languages</span>
                    <span className="nf-val">TypeScript, Python, Rust, Go</span>
                  </div>
                  <div className="nf-row">
                    <span className="nf-key">Frontend</span>
                    <span className="nf-val">React, Next.js, Svelte, Tailwind</span>
                  </div>
                  <div className="nf-row">
                    <span className="nf-key">Backend</span>
                    <span className="nf-val">Node.js, FastAPI, PostgreSQL</span>
                  </div>
                  <div className="nf-row">
                    <span className="nf-key">Cloud</span>
                    <span className="nf-val">AWS, Vercel, Docker, Terraform</span>
                  </div>
                  <div className="nf-row">
                    <span className="nf-key">Tools</span>
                    <span className="nf-val">Neovim, tmux, Git, Zsh</span>
                  </div>
                  <div className="nf-row">
                    <span className="nf-key">Systems</span>
                    <span className="nf-val">Linux, macOS, NixOS</span>
                  </div>
                  <div className="nf-colors" aria-hidden="true">
                    {['#FF5F56', '#FFBD2E', '#27C93F', '#39FF14', '#22D3EE', '#6366F1', '#A855F7', '#EC4899'].map((c) => (
                      <span key={c} className="color-block" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="nf-colors" aria-hidden="true">
                    {['#B33A3A', '#B3851F', '#1B8C2C', '#28B30E', '#1894A6', '#4547AB', '#763BAB', '#A6346C'].map((c) => (
                      <span key={c} className="color-block" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact ── */}
          <section id="contact" ref={setRef('contact')} className="panel animate-in">
            <div className="panel-header">
              <span className="panel-dash">──</span>
              <span className="panel-label">contact</span>
              <span className="panel-dash-fill" />
            </div>
            <div className="panel-content">
              <p className="contact-intro">
                Interested in working together? Let's connect.
              </p>
              <div className="contact-links">
                <a href="mailto:your@email.com" className="contact-line">
                  <span className="contact-prompt">$</span>
                  <span className="contact-cmd">open</span>
                  <span className="contact-val">mailto:your@email.com</span>
                </a>
                <a href="#" className="contact-line">
                  <span className="contact-prompt">$</span>
                  <span className="contact-cmd">open</span>
                  <span className="contact-val">github.com/yourusername</span>
                </a>
                <a href="#" className="contact-line">
                  <span className="contact-prompt">$</span>
                  <span className="contact-cmd">open</span>
                  <span className="contact-val">linkedin.com/in/yourusername</span>
                </a>
                <a href="#" className="contact-line">
                  <span className="contact-prompt">$</span>
                  <span className="contact-cmd">cat</span>
                  <span className="contact-val">resume.pdf</span>
                  <span className="contact-badge">↓ download</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ── Status Bar ── */}
        <footer className="status-bar">
          <span className="status-item">
            <span className="status-dot" />
            visitor@portfolio
          </span>
          <span className="status-item">section: {activeSection}</span>
          <span className="status-item">theme: phosphor</span>
          <button className="crt-toggle" onClick={() => setCrt(!crt)}>
            crt: {crt ? 'on' : 'off'}
          </button>
        </footer>
      </div>
    </div>
  )
}
