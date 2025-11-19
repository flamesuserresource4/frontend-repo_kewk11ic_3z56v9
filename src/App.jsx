import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Ambient background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(251,191,36,0.10),transparent)]" />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
