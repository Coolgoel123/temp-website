import { useState } from 'react'
import { Menu, X, Linkedin } from 'lucide-react'
import Button3D from './Button3D'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow shadow-yellow-500/30" />
              <span className="text-lg font-semibold tracking-tight text-yellow-100 group-hover:text-yellow-300 transition-colors">Advit Goel</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-yellow-100 hover:text-black hover:bg-yellow-400/90 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button3D href="https://linkedin.com/in/advit-goel" target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
              </Button3D>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-yellow-500/30 p-2 text-yellow-100 hover:bg-yellow-500/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="border-t border-yellow-500/20 p-4 md:hidden">
              <nav className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-yellow-100 hover:text-black hover:bg-yellow-400/90 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button3D as="a" href="https://linkedin.com/in/advit-goel" target="_blank" rel="noreferrer" className="mt-1">
                  <span className="inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
                </Button3D>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
