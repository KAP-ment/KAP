'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section aria-label="Hero" className="py-28">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight"
        >
          Where Learners Belong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Together, we’re reshaping learning into something more meaningful — a trusted space to connect, collaborate, and grow.
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/signup">
            <a className="rounded-lg bg-white text-black px-6 py-3 font-semibold shadow-md hover:brightness-95 focus:ring-2 focus:ring-offset-2">Get Started</a>
          </Link>
          <a href="/learn-more" className="rounded-lg border border-slate-700 px-6 py-3 text-slate-200">Learn More</a>
        </div>
      </div>

      {/* subtle animated background effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* You can replace with a Lottie/Canvas/Particles background later */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
      </div>
    </section>
  );
}
