import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function ModernWorld({ className }) {
  return (
    <div className={clsx('relative w-full h-full rounded-3xl overflow-hidden', className)}>
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.15),rgba(236,72,153,0.12),rgba(251,191,36,0.10),transparent_70%)] blur-3xl" />
      </div>

      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.25" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewBox="0 0 600 600"
          className="w-[88%] max-w-[720px] drop-shadow-[0_40px_120px_rgba(99,102,241,0.25)]"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="60%" stopColor="rgba(147,51,234,0.25)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0.15)" />
            </radialGradient>
            <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Sphere base */}
          <circle cx="300" cy="300" r="210" fill="url(#glow)" opacity="0.35" />
          <circle cx="300" cy="300" r="210" fill="none" stroke="url(#stroke)" strokeOpacity="0.35" strokeWidth="1.5" />

          {/* Meridians & Parallels */}
          {Array.from({ length: 7 }).map((_, i) => {
            const t = (i - 3) / 3
            const ry = 210 * Math.cos((t * Math.PI) / 2)
            return (
              <ellipse key={`lat-${i}`} cx="300" cy="300" rx={210} ry={Math.max(0, ry)} fill="none" stroke="url(#stroke)" strokeOpacity="0.35" strokeWidth="1" />
            )
          })}
          {Array.from({ length: 9 }).map((_, i) => {
            const t = (i - 4) / 4
            const rx = 210 * Math.cos((t * Math.PI) / 2)
            return (
              <ellipse key={`lon-${i}`} cx="300" cy="300" rx={Math.max(0, rx)} ry={210} fill="none" stroke="url(#stroke)" strokeOpacity="0.25" strokeWidth="1" />
            )
          })}

          {/* Rotating orbits */}
          <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: 'linear', duration: 28 }} origin="300 300">
            {[0.75, 1.0, 1.25].map((m, idx) => (
              <g key={idx}>
                <circle cx="300" cy="300" r={120 * m} fill="none" stroke="url(#stroke)" strokeOpacity="0.35" strokeDasharray="6 10" />
                <circle cx={300 + 120 * m} cy="300" r="5" fill="#ffffff" opacity="0.9" />
              </g>
            ))}
          </motion.g>

          {/* Sweeping light */}
          <motion.circle
            cx="300"
            cy="300"
            r="210"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeOpacity="0.35"
            style={{ filter: 'blur(2px)' }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      {/* Foreground soft light */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
    </div>
  )
}
