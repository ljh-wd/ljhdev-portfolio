export default function TitleBar() {
  return (
    <div className="title-bar">
      <div className="traffic-lights">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
      </div>
      <span className="title-text">visitor@portfolio:~ — zsh</span>
      <div className="title-spacer" />
    </div>
  )
}
