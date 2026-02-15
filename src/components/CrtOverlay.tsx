export default function CrtOverlay({ enabled }: { enabled: boolean }) {
  if (!enabled) return null
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  )
}
