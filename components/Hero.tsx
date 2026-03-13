'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-dark to-dark pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-width px-6 text-center relative z-10"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm-label text-gold bg-gold/10 px-4 py-2 rounded-full inline-block">
            FOR DTC BRAND OWNERS
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="heading-lg mb-6 text-light leading-tight"
        >
          Start Scaling Your Revenue With <br />
          <span className="text-gold">World-Class Email Marketing</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-light/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Voxaur is your brand's voice. We help brands scale with email marketing turning leads into customers and customers into loyal fans.
        </motion.p>

        {/* Social Proof */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-gold font-semibold text-lg">⭐ Rated 5 stars by 10+ happy brands</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#book-call" className="btn-primary inline-block text-lg">
            Book Your Intro Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}