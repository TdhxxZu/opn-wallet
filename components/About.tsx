'use client'

import { CheckCircle2 } from 'lucide-react'

export function About() {
  const benefits = [
    'Decentralized architecture for maximum reliability',
    'Transparent fee structure with no hidden costs',
    'Community-driven development and governance',
    'Enterprise-grade security audits quarterly',
    'Open-source codebase for full transparency',
    'Multi-language support for global users',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 font-semibold mb-2">About OPN Wallet Dashboard</p>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Built for the <span className="gradient-text">Future of Finance</span>
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              OPN Wallet Dashboard represents the next evolution in crypto asset management. We&apos;ve combined cutting-edge blockchain technology with an intuitive interface to create a wallet that doesn&apos;t compromise on security or usability.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Our mission is to democratize access to Web3, making it easy for everyone from beginners to advanced traders to manage their digital assets with confidence.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl blur-3xl"></div>

            <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-purple-900/10 p-8 backdrop-blur-sm space-y-6">
              {/* Mock Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Performance Metrics</h3>

                <div className="space-y-4">
                  {[
                    { label: 'Security Score', value: 98, color: 'from-green-500 to-emerald-500' },
                    { label: 'Network Uptime', value: 99.9, color: 'from-blue-500 to-cyan-500' },
                    { label: 'User Satisfaction', value: 96, color: 'from-purple-500 to-pink-500' },
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/70">{metric.label}</span>
                        <span className="text-foreground font-semibold">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-purple-500/20"></div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 p-4 rounded-lg bg-black/20">
                  <p className="text-foreground/60 text-xs">Transactions/Min</p>
                  <p className="text-2xl font-bold gradient-text">124.5K</p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-black/20">
                  <p className="text-foreground/60 text-xs">Avg Response</p>
                  <p className="text-2xl font-bold gradient-text">45ms</p>
                </div>
              </div>
            </div>

            {/* Accent elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
