import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavItem({ label }) {
  return (
    <a
      href="#"
      className="px-3 py-2 text-sm md:text-[15px] font-medium text-slate-200/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 pt-4">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 hidden md:block" />

          {/* Glass bar */}
          <div className="flex items-center gap-4 w-full md:w-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] px-3 md:px-4 h-14">
            {/* Brand */}
            <div className="flex items-center gap-2 pr-2 md:pr-3 border-r border-white/10">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 ring-1 ring-white/30 flex items-center justify-center text-[11px] font-bold text-white">AI</div>
              <span className="hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 font-semibold tracking-tight">Aurora Labs</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavItem label="Solutions" />
              <NavItem label="Work" />
              <NavItem label="Pricing" />
              <NavItem label="Blog" />
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button className="text-slate-200/90 hover:text-white text-sm px-3 py-2">Sign in</button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(99,102,241,0.45)] transition-all">
                Get started
              </button>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(v => !v)} className="md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 hover:bg-white/10 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className="flex-1 hidden md:block" />
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-2">
            <div className="flex flex-col">
              <NavItem label="Solutions" />
              <NavItem label="Work" />
              <NavItem label="Pricing" />
              <NavItem label="Blog" />
              <div className="mt-2 border-t border-white/10" />
              <button className="mt-2 text-left text-slate-200/90 hover:text-white text-sm px-3 py-2">Sign in</button>
              <button className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
