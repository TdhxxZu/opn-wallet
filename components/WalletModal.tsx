'use client'

import { X, Wallet2, Shield } from 'lucide-react'
import { useEffect } from 'react'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const walletOptions = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect with MetaMask wallet extension',
    },
    {
      name: 'WalletConnect',
      icon: '📱',
      description: 'Connect with mobile wallet via QR code',
    },
    {
      name: 'Coinbase Wallet',
      icon: '₿',
      description: 'Connect with Coinbase Wallet',
    },
    {
      name: 'Rainbow',
      icon: '🌈',
      description: 'Connect with Rainbow wallet',
    },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-purple-900/30 backdrop-blur-xl p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
        >
          <X size={20} className="text-foreground/60" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2">
            <Wallet2 size={24} className="text-purple-400" />
            <h2 className="text-2xl font-bold text-foreground">Connect Wallet</h2>
          </div>
          <p className="text-foreground/60 text-sm">
            Select a wallet to connect to OPN Wallet Dashboard
          </p>
        </div>

        {/* Wallet Options */}
        <div className="space-y-3 mb-8">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.name}
              onClick={onClose}
              className="w-full p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5 hover:bg-purple-500/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{wallet.icon}</div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-purple-300 transition-colors">
                    {wallet.name}
                  </h3>
                  <p className="text-xs text-foreground/60">{wallet.description}</p>
                </div>
                <div className="text-purple-400">
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4 space-y-2">
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-purple-300 mb-1">Security First</p>
              <p className="text-xs text-foreground/60">
                Your private keys never leave your device. We use industry-standard security practices.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-foreground/60">
            Don&apos;t have a wallet?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Get one here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
