'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold leading-tight 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Where <br className="sm:hidden" /> Learners Belong
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Together, we’re reshaping learning into something more meaningful — 
          a trusted space to connect, collaborate, and grow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/signup" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-white text-black px-6 py-3 font-semibold shadow-md hover:brightness-95"
            >
              Get Started
            </motion.a>
          </Link>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-slate-700 px-6 py-3 text-slate-200"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Background effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
      </div>
    </section>
  );
}
