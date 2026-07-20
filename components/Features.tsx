'use client'

import { Shield, Zap, Lock, Network, Wallet, TrendingUp } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade encryption with multi-sig support for maximum protection',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant transactions with sub-second confirmation times',
    },
    {
      icon: Lock,
      title: 'Non-Custodial',
      description: 'Full control of your private keys. We never hold your assets.',
    },
    {
      icon: Network,
      title: 'Multi-Chain',
      description: 'Seamlessly manage assets across multiple blockchain networks',
    },
    {
      icon: Wallet,
      title: 'DeFi Integration',
      description: 'Direct access to top DeFi protocols and liquidity pools',
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Real-time portfolio tracking with advanced analytics dashboard',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Everything you need for a seamless Web3 experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent transition-opacity duration-300"></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/60">{feature.description}</p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="pt-4 text-purple-400 group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
