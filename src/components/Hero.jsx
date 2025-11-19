import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import AiNeural from './AiNeural'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background accents (keep colorway) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-gradient-to-b from-indigo-500/30 via-fuchsia-400/20 to-amber-300/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -top-20 -right-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
          {/* Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
              Aurora Labs — shipping real AI products
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Design, build and launch production‑grade AI experiences
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
            >
              Strategy to ship. We craft assistants, automations and voice agents that feel premium, scale reliably and fit your brand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(99,102,241,0.45)] transition-all"
              >
                Start free
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white font-semibold px-5 py-3 border border-white/10 hover:bg-white/15 transition-all"
              >
                Talk to sales <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Quick value bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
            >
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Voice & chat experiences</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Production infra & evals</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> On‑brand UX and motion</li>
            </motion.ul>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-6 opacity-80 justify-center lg:justify-start"
            >
              <div className="h-8 w-24 rounded bg-white/10 flex items-center justify-center text-[10px] tracking-wide uppercase text-white/70">Acme</div>
              <div className="h-8 w-24 rounded bg-white/10 flex items-center justify-center text-[10px] tracking-wide uppercase text-white/70">Nimbus</div>
              <div className="h-8 w-24 rounded bg-white/10 flex items-center justify-center text-[10px] tracking-wide uppercase text-white/70">Orbit</div>
              <div className="h-8 w-24 rounded bg-white/10 flex items-center justify-center text-[10px] tracking-wide uppercase text-white/70">Vector</div>
            </motion.div>
          </div>

          {/* Right visual: AI neural network animation (clean, no card) */}
          <div className="relative h-[420px] md:h-[540px] lg:h-[640px]">
            <AiNeural className="h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
