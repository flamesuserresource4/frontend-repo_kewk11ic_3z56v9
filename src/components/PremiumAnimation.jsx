import { useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * PremiumAnimation
 * A high-end animated visual with layered motion: parallax blobs, particles, and light sweeps.
 * No external deps beyond Framer Motion. Fully responsive and GPU-friendly.
 */
export default function PremiumAnimation({ className = '' }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  // Precompute a subtle color palette
  const palette = useMemo(
    () => [
      'rgba(99,102,241,0.7)', // indigo-500
      'rgba(147,51,234,0.65)', // purple-600
      'rgba(236,72,153,0.55)', // pink-500
      'rgba(251,191,36,0.45)', // amber-400
    ],
    []
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let width = 0
    let height = 0
    let raf = 0
    let particles = []

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = Math.floor(rect.width)
      height = Math.floor(rect.height)
      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      init()
    }

    function init() {
      const count = Math.floor((width * height) / 11000)
      particles = new Array(count).fill(0).map(() => {
        const angle = Math.random() * Math.PI * 2
        const radius = 40 + Math.random() * (Math.min(width, height) * 0.35)
        return {
          x: width / 2 + Math.cos(angle) * (radius * 0.2 + Math.random() * radius),
          y: height / 2 + Math.sin(angle) * (radius * 0.2 + Math.random() * radius),
          vx: (-0.3 + Math.random() * 0.6) * 0.5,
          vy: (-0.3 + Math.random() * 0.6) * 0.5,
          size: 0.8 + Math.random() * 1.8,
          color: palette[Math.floor(Math.random() * palette.length)],
        }
      })
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      // Soft vignette
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        Math.min(width, height) * 0.1,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      )
      grad.addColorStop(0, 'rgba(255,255,255,0.06)')
      grad.addColorStop(1, 'rgba(2,6,23,0.0)') // slate-950
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Parallax center follows mouse subtly
      const cx = width / 2 + (mouse.current.x - width / 2) * 0.03
      const cy = height / 2 + (mouse.current.y - height / 2) * 0.03

      // Glow trails
      ctx.globalCompositeOperation = 'lighter'
      particles.forEach((p) => {
        // motion
        p.x += p.vx
        p.y += p.vy

        // gentle pull to center
        const dx = cx - p.x
        const dy = cy - p.y
        p.vx += dx * 0.0006
        p.vy += dy * 0.0006

        // damping
        p.vx *= 0.995
        p.vy *= 0.995

        // wrap around edges for persistence
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // draw
        const r = p.size
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 8)
        g.addColorStop(0, p.color)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 2, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(step)
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX || (e.touches && e.touches[0]?.clientX) || rect.width / 2) - rect.left
      mouse.current.y = (e.clientY || (e.touches && e.touches[0]?.clientY) || rect.height / 2) - rect.top
    }

    resize()
    step()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [palette])

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}>
      {/* Canvas particle field */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient blobs with parallax motion */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.65), transparent 60%)' }}
        initial={{ x: -40, y: -20, scale: 1 }}
        animate={{ x: [ -40, 20, -10, -40 ], y: [ -20, -30, 10, -20 ], scale: [1, 1.05, 1.02, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 60% 60%, rgba(236,72,153,0.55), transparent 60%)' }}
        initial={{ x: 30, y: 20, scale: 1 }}
        animate={{ x: [30, -10, 40, 30], y: [20, 0, -20, 20], scale: [1, 1.06, 1.01, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Light sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0))' }}
        initial={{ opacity: 0.5, y: -40 }}
        animate={{ opacity: [0.3, 0.5, 0.35], y: [ -40, 0, -40 ] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* edge fade for depth */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]" />
    </div>
  )
}
