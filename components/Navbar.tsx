'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Our Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-dark/95 backdrop-blur-md z-50 border-b border-gold/20"
    >
      <div className="container-width px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-gold hover:text-yellow-400 transition-colors">
          VOXAUR
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#ffd700' }}
              className="text-light hover:text-gold transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#book-call"
            whileHover={{ scale: 1.05 }}
            className="btn-primary text-sm"
          >
            Book a Call
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark border-t border-gold/20 px-6 py-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-light hover:text-gold transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#book-call" className="btn-primary text-sm inline-block w-full text-center">
            Book a Call
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}