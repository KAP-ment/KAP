'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-kapNavy to-kapBlack overflow-hidden">
      <div className="container relative z-10 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto"
        >
          Where Learners Belong
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[#bfc6cb] max-w-3xl mx-auto"
        >
          Together, we’re reshaping learning into something more meaningful — a trusted space to connect, collaborate, and grow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/signup"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:shadow-kap-deep focus:outline-none focus:ring-2"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="border border-[#ffffff]/10 px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/4"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Interactive Banner Images */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
        <div className="flex justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-1/3 h-40 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image src="/showcase/tutor.png" alt="Tutor" width={400} height={200} className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-1/3 h-40 rounded-2xl overflow-hidden shadow-lg hidden md:block"
          >
            <Image src="/showcase/network.png" alt="Network" width={400} height={200} className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-1/3 h-40 rounded-2xl overflow-hidden shadow-lg hidden lg:block"
          >
            <Image src="/showcase/ai.png" alt="AI Guide" width={400} height={200} className="object-cover w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
