'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { WalletInfo } from '@/components/WalletInfo'
import { About } from '@/components/About'
import { Roadmap } from '@/components/Roadmap'
import { Footer } from '@/components/Footer'
import { WalletModal } from '@/components/WalletModal'

export default function Home() {
  const [isWalletOpen, setIsWalletOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Grid background effect */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <Navigation onConnectWallet={() => setIsWalletOpen(true)} />
      <main>
        <Hero onConnectWallet={() => setIsWalletOpen(true)} />
        <Features />
        <WalletInfo />
        <About />
        <Roadmap />
      </main>
      <Footer />

      <WalletModal isOpen={isWalletOpen} onClose={() => setIsWalletOpen(false)} />
    </div>
  )
}
