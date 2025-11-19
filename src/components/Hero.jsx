import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import PremiumAnimation from './PremiumAnimation'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-gradient-to-b from-indigo-500/30 via-fuchsia-400/20 to-amber-300/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -top-20 -right-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
              Next‑gen AI agency platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Build voice‑ready AI experiences with a premium, modern touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
            >
              Strategy, design and deployment for assistants, automation and voice agents — delivered with enterprise polish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(99,102,241,0.45)] transition-all">
                Get a demo
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-semibold px-5 py-3 border border-white/10 hover:bg-white/15 transition-all">
                Explore work
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-6 opacity-80 justify-center lg:justify-start"
            >
              <div className="h-8 w-24 bg-white/10 rounded" />
              <div className="h-8 w-24 bg-white/10 rounded" />
              <div className="h-8 w-24 bg-white/10 rounded" />
              <div className="h-8 w-24 bg-white/10 rounded" />
            </motion.div>
          </div>

          {/* Premium animated visual replacing static image */}
          <div className="relative h-[420px] md:h-[540px] lg:h-[640px]">
            <PremiumAnimation className="h-full" />
            {/* Optional: if you still want Spline as a layer, uncomment below */}
            {/* <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
