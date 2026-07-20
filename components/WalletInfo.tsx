'use client'

import { Copy, ExternalLink } from 'lucide-react'

export function WalletInfo() {
  const walletStats = [
    {
      label: 'Total Volume',
      value: '$2.4B',
      change: '+24.5%',
      positive: true,
    },
    {
      label: 'Active Wallets',
      value: '125K',
      change: '+12.3%',
      positive: true,
    },
    {
      label: 'Avg Transaction',
      value: '$19.2K',
      change: '+8.1%',
      positive: true,
    },
    {
      label: 'Network Fee',
      value: '0.05%',
      change: '-2.3%',
      positive: true,
    },
  ]

  return (
    <section id="wallet" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">Wallet Information</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Real-time insights into network performance
          </p>
        </div>

        {/* Main Wallet Card */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Large stat card */}
          <div className="lg:col-span-2 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-900/10 p-8 sm:p-12">
            <div className="space-y-8">
              <div>
                <p className="text-foreground/60 text-sm font-medium mb-2">Your Balance</p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl sm:text-5xl font-bold gradient-text">$45,231.89</h3>
                  <span className="text-green-400 text-sm font-medium">+12.5% this month</span>
                </div>
              </div>

              {/* Wallet Address */}
              <div className="bg-black/30 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-xs">Wallet Address</p>
                    <p className="text-foreground font-mono text-sm">0x7a3f4...8d2c9</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                    <Copy size={18} className="text-purple-400" />
                  </button>
                  <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                    <ExternalLink size={18} className="text-purple-400" />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-medium transition-colors">
                  Send
                </button>
                <button className="px-4 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-medium transition-colors">
                  Receive
                </button>
              </div>
            </div>
          </div>

          {/* Network Status */}
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-900/10 p-8">
            <h4 className="text-lg font-semibold mb-6">Network Status</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground/60 text-sm">Gas Price</span>
                <span className="text-foreground font-semibold">42 Gwei</span>
              </div>
              <div className="h-px bg-purple-500/10"></div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/60 text-sm">Block Time</span>
                <span className="text-foreground font-semibold">12.2s</span>
              </div>
              <div className="h-px bg-purple-500/10"></div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/60 text-sm">TPS</span>
                <span className="text-green-400 font-semibold">1,247</span>
              </div>
              <div className="h-px bg-purple-500/10"></div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/60 text-sm">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-green-400 text-sm">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {walletStats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
            >
              <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
