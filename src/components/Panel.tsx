import type { ReactNode, Ref } from 'react'

interface PanelProps {
  id: string
  label: string
  children: ReactNode
  ref?: Ref<HTMLElement>
}

export default function Panel({ id, label, children, ref }: PanelProps) {
  return (
    <section id={id} ref={ref} className="panel">
      <div className="panel-header animate-in">
        <span className="panel-dash">──</span>
        <span className="panel-label">{label}</span>
        <span className="panel-dash-fill" />
      </div>
      <div className="panel-content">
        {children}
      </div>
    </section>
  )
}
