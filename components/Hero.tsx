'use client'

import { ArrowRight, Zap } from 'lucide-react'

interface HeroProps {
  onConnectWallet: () => void
}

export function Hero({ onConnectWallet }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 w-fit mx-auto">
            <Zap size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">OPN Testnet Live</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Next-Gen Wallet</span>
              <br />
              <span className="text-foreground">for Web3</span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Experience the future of crypto management with OPN Wallet Dashboard. Secure, fast, and built for the decentralized web.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onConnectWallet}
              className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold flex items-center gap-2 transition-all duration-300 glow-purple hover:glow-purple-lg"
            >
              Connect Wallet
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg border border-purple-500/30 hover:border-purple-500 text-purple-300 hover:text-purple-200 font-semibold transition-all duration-300 hover:bg-purple-500/5">
              View Docs
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-purple-500/10">
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">99.9%</p>
              <p className="text-sm text-foreground/60">Uptime</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">50M+</p>
              <p className="text-sm text-foreground/60">Transactions</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">10K+</p>
              <p className="text-sm text-foreground/60">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
