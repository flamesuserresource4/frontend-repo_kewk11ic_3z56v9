import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

function NavItem({ label }) {
  return (
    <a href="#" className="text-slate-200/90 hover:text-white transition-colors text-sm md:text-[15px] font-medium px-3 py-2 rounded-md hover:bg-white/5">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_rgba(99,102,241,0.35)] ring-1 ring-white/20 flex items-center justify-center">
              <span className="text-white font-semibold">AI</span>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Aurora Labs</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem label="Solutions" />
            <NavItem label="Work" />
            <NavItem label="Pricing" />
            <NavItem label="Blog" />
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-slate-200/90 hover:text-white text-sm px-3 py-2">Sign in</button>
            <button className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.35)] transition-all">
              Get started
              <ChevronDown size={16} className="opacity-60 group-hover:translate-y-[1px] transition-transform" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 hover:bg-white/10 text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-2">
            <div className="flex flex-col">
              <NavItem label="Solutions" />
              <NavItem label="Work" />
              <NavItem label="Pricing" />
              <NavItem label="Blog" />
              <div className="mt-2 border-t border-white/10" />
              <button className="mt-2 text-left text-slate-200/90 hover:text-white text-sm px-3 py-2">Sign in</button>
              <button className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
