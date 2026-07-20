'use client'

import { Code2, Heart, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Security', 'Pricing', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'Community', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Disclosure'],
  }

  const socials = [
    { icon: Code2, label: 'GitHub', href: '#' },
    { icon: ExternalLink, label: 'Twitter', href: '#' },
    { icon: Heart, label: 'Community', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ]

  return (
    <footer className="border-t border-purple-500/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-white font-bold">◇</div>
              </div>
              <span className="font-bold gradient-text">OPN</span>
            </div>
            <p className="text-sm text-foreground/60">
              The future of crypto wallet management starts here.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-foreground/60 hover:text-purple-400 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-purple-500/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-foreground/60">
              © {currentYear} OPN Wallet Dashboard. All rights reserved.
            </p>
            <p className="text-xs text-foreground/40">
              Built on the OPN Testnet. Not investment advice.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium whitespace-nowrap transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
