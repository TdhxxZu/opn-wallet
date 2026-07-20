'use client'

import { CheckCircle, Circle } from 'lucide-react'

export function Roadmap() {
  const roadmapItems = [
    {
      quarter: 'Q3 2025',
      title: 'Core Launch',
      description: 'OPN Testnet goes live with basic wallet functionality',
      features: ['Wallet Creation', 'Send/Receive', 'Basic Portfolio'],
      completed: true,
    },
    {
      quarter: 'Q4 2025',
      title: 'DeFi Integration',
      description: 'Seamless integration with major DeFi protocols',
      features: ['Swap Interface', 'Staking Dashboard', 'LP Management'],
      completed: false,
    },
    {
      quarter: 'Q1 2026',
      title: 'Advanced Features',
      description: 'Multi-chain support and advanced trading tools',
      features: ['Multi-Chain', 'Advanced Trading', 'Portfolio Analytics'],
      completed: false,
    },
    {
      quarter: 'Q2 2026',
      title: 'Enterprise Solutions',
      description: 'B2B and enterprise-grade features',
      features: ['API Suite', 'White Label', 'Institutional Tools'],
      completed: false,
    },
  ]

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">Development Roadmap</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Our vision for the future of OPN Wallet Dashboard
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`md:grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      item.completed
                        ? 'border-green-400 bg-green-500/20'
                        : 'border-purple-500 bg-purple-500/20'
                    }`}
                  ></div>
                </div>

                {/* Content Card */}
                <div
                  className={`rounded-2xl border ${
                    item.completed
                      ? 'border-green-500/30 bg-green-500/5'
                      : 'border-purple-500/30 bg-purple-500/5'
                  } p-6 sm:p-8 hover:border-purple-500/60 transition-all`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    {item.completed ? (
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={24} />
                    ) : (
                      <Circle className="text-purple-400 flex-shrink-0 mt-0.5" size={24} />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-purple-400 mb-1">{item.quarter}</p>
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{item.description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-center ${
                          item.completed
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-purple-500/20 text-purple-300'
                        }`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-4">Have feature requests? We&apos;d love to hear from you!</p>
          <button className="px-8 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-300 font-medium transition-all">
            Join Community Discord
          </button>
        </div>
      </div>
    </section>
  )
}
