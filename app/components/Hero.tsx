'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-24 bg-gradient-to-b from-kapNavy to-kapBlack">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto"
        >
          Where Learners Belong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-[#bfc6cb] max-w-3xl mx-auto"
        >
          Together, we’re reshaping learning into something more meaningful — a trusted space to connect, collaborate, and grow.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex justify-center gap-4">
          <Link href="/signup" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:shadow-kap-deep focus:outline-none focus:ring-2">
            Get Started
          </Link>
          <a href="#features" className="border border-[#ffffff]/10 px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/4">
            Learn More
          </a>
        </motion.div>

        {/* Subtle animated background shapes could go here (CSS or canvas) */}
        <div className="mt-12">
          {/* Placeholder image for hero background animation */}
          <div className="mx-auto w-full max-w-4xl h-36 rounded-2xl bg-gradient-to-r from-[#09090b] to-[#060607] shadow-kap-soft"></div>
        </div>
      </div>
    </section>
  )
}
