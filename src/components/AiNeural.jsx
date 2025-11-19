import { motion } from 'framer-motion'

export default function AiNeural({ className = '' }) {
  return (
    <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900/40 to-slate-950/60 ${className}`}>
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.20),transparent_60%)] blur-2xl" />
      </div>

      {/* Neural mesh */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 800 800"
          className="w-[92%] max-w-[880px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
            </radialGradient>
          </defs>

          {/* Pulsing field lines */}
          {[0, 45, 90, 135].map((angle, i) => (
            <motion.circle
              key={i}
              cx="400"
              cy="400"
              r={220 + i * 30}
              fill="none"
              stroke="url(#g)"
              strokeOpacity="0.25"
              strokeDasharray="10 14"
              style={{ transformOrigin: '400px 400px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30 - i * 3, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Connections */}
          {[
            [220, 260, 520, 300],
            [280, 520, 600, 420],
            [220, 380, 420, 560],
            [480, 220, 600, 360],
            [360, 260, 300, 520],
            [540, 520, 420, 600],
          ].map((d, i) => (
            <motion.line
              key={`l-${i}`}
              x1={d[0]}
              y1={d[1]}
              x2={d[2]}
              y2={d[3]}
              stroke="url(#g)"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0.2, 0.6] }}
              transition={{ duration: 2 + i * 0.25, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          ))}

          {/* Nodes */}
          {[
            [220, 260],
            [520, 300],
            [600, 420],
            [300, 520],
            [420, 600],
            [420, 560],
            [600, 360],
            [360, 260],
            [220, 380],
            [480, 220],
          ].map(([x, y], i) => (
            <g key={`n-${i}`}>
              <circle cx={x} cy={y} r="12" fill="url(#g)" opacity="0.9" />
              <circle cx={x} cy={y} r="26" fill="url(#nodeGlow)" opacity="0.35" />
              <motion.circle
                cx={x}
                cy={y}
                r="18"
                fill="none"
                stroke="white"
                strokeOpacity="0.35"
                style={{ filter: 'blur(1.5px)' }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.15, 0.8], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.2, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
              />
            </g>
          ))}
        </motion.svg>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
    </div>
  )
}
