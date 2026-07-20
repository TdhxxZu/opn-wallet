'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  onConnectWallet: () => void
}

export function Navigation({ onConnectWallet }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Wallet', id: 'wallet' },
    { label: 'About', id: 'about' },
    { label: 'Roadmap', id: 'roadmap' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <div className="text-white font-bold text-lg">◇</div>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">OPN Wallet</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/70 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Connect Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onConnectWallet}
              className="hidden md:inline-flex px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium text-sm transition-all duration-300 glow-purple"
            >
              Connect Wallet
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onConnectWallet()
                setIsMobileMenuOpen(false)
              }}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium text-sm transition-all"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
