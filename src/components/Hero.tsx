import { Fragment, useEffect, useRef } from 'react'
import { hero } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * Procedural ASCII black hole
 *
 * Renders a 71x25 character grid animated at ~16fps via requestAnimationFrame,
 * writing directly to the DOM through a ref to avoid React re-renders.
 *
 * Each cell's brightness is computed from its polar coordinates (distance + angle
 * from center) and mapped to an ASCII density ramp: ' .·:+=*#%'
 *
 * Layers composited per-frame via max blending:
 *   - Event horizon — empty void at center (r < 7)
 *   - Photon ring — bright band at r≈10 with a traveling sine shimmer
 *   - Accretion disk — horizontal strip with Doppler beaming so the
 *     approaching side appears brighter than the receding side
 *   - Gravitational lensing — vertical arcs near the photon sphere
 *     that wobble over time to simulate bent light paths
 *   - Outer glow — smooth radial falloff with a subtle pulse
 */
const BH_COLS = 71
const BH_ROWS = 25
const DENSITY = ' .·:+=*#%'

function generateBlackHoleFrame(t: number): string {
  const cx = BH_COLS / 2
  const cy = BH_ROWS / 2
  const aspect = 2.0
  const lines: string[] = []

  const diskRot = t * 0.5
  const ringShimmer = t * 1.5
  const lensWobble = Math.sin(t * 0.3) * 0.1

  for (let y = 0; y < BH_ROWS; y++) {
    let line = ''
    for (let x = 0; x < BH_COLS; x++) {
      const dx = x - cx
      const dy = (y - cy) * aspect
      const r = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)
      const eventHorizon = 7
      const photonRing = 10
      const diskFade = 30

      if (r < eventHorizon) {
        line += ' '
        continue
      }

      let b = 0

      const rd = Math.abs(r - photonRing)
      if (rd < 2.5) {
        const shimmer = 0.78 + 0.22 * Math.sin(angle * 3 - ringShimmer)
        b = Math.max(b, (1 - rd / 2.5) * 0.95 * shimmer)
      }

      if (Math.abs(y - cy) < 0.8 && r > eventHorizon) {
        const doppler = 0.45 + 0.55 * Math.cos(angle - diskRot)
        b = Math.max(b, doppler * 0.85 * Math.max(0, 1 - (r - eventHorizon) / diskFade))
      }

      const absAngle = Math.abs(angle)
      if (
        Math.abs(absAngle - Math.PI / 2) < 0.4 + lensWobble &&
        r > eventHorizon &&
        r < photonRing + 4
      ) {
        const lensBright = 0.45 + 0.12 * Math.sin(ringShimmer * 0.5 + r * 0.4)
        b = Math.max(b, Math.max(0, lensBright * (1 - Math.abs(r - photonRing) / 5)))
      }

      if (r > photonRing) {
        const pulse = 0.28 + 0.03 * Math.sin(t * 0.6 + r * 0.1)
        b = Math.max(b, Math.max(0, pulse * (1 - (r - photonRing) / (diskFade * 0.8))))
      }

      b = Math.min(1, Math.max(0, b))
      line += DENSITY[Math.round(b * (DENSITY.length - 1))]
    }
    lines.push(line)
  }

  return lines.join('\n')
}

const BLACK_HOLE_STATIC = generateBlackHoleFrame(0)

function Prompt() {
  return (
    <span className="prompt">
      visitor@portfolio
      <span className="prompt-sep">:</span>
      <span className="prompt-dir">~</span>
      <span className="prompt-sep">%</span>
    </span>
  )
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const preRef = useRef<HTMLPreElement>(null)
  const { displayedText: typedName, isComplete: nameTyped } = useTypingEffect(hero.name, {
    speed: 70,
    delay: 600,
    enabled: !reducedMotion,
  })

  const showRest = nameTyped

  useEffect(() => {
    if (reducedMotion) return

    let frameId: number
    let lastUpdate = 0
    const interval = 1000 / 16
    const start = performance.now()

    function tick(now: number) {
      frameId = requestAnimationFrame(tick)
      const delta = now - lastUpdate
      if (delta < interval) return
      lastUpdate = now - (delta % interval)

      const t = (now - start) / 1000
      if (preRef.current) {
        preRef.current.textContent = generateBlackHoleFrame(t)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [reducedMotion])

  return (
    <section className="hero">
      <div className="black-hole" aria-hidden="true">
        <pre ref={preRef} className="black-hole-art">
          {BLACK_HOLE_STATIC}
        </pre>
      </div>
      <div className="prompt-line">
        <Prompt />
        <span className="command"> cat welcome.txt</span>
      </div>
      <div className="hero-output">
        <h1 className="hero-name">
          {typedName}
          {!nameTyped && !reducedMotion && <span className="cursor typing-cursor">█</span>}
        </h1>
        <p className={`hero-title hero-reveal ${showRest ? 'revealed' : ''}`}>
          &gt; {hero.title}
        </p>
        <p
          className={`hero-desc hero-reveal ${showRest ? 'revealed' : ''}`}
          style={!reducedMotion ? { transitionDelay: '0.2s' } : undefined}
        >
          {hero.description.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>
      <div
        className={`prompt-line hero-reveal ${showRest ? 'revealed' : ''}`}
        style={!reducedMotion ? { transitionDelay: '0.4s' } : undefined}
      >
        <Prompt />
        <span className="cursor">█</span>
      </div>
    </section>
  )
}
