'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const tabs = ['Notes', 'Workshops', 'Communities', 'AI Help', 'Leaderboard']

export default function QuickStart() {
  const [active, setActive] = useState(0)

  return (
    <div className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Get Started in Seconds</h2>
        <p className="mt-3 text-[#bfc6cb]">Jump into learning with KAPment — quick, simple, and personalized.</p>

        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          {tabs.map((t, i) => (
            <button key={i}
              onClick={() => setActive(i)}
              className={`kap-pill ${active === i ? 'ring-2 ring-indigo-500' : ''}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* placeholders — replace /public/images/screenshots/*.png accordingly */}
        <motion.div whileHover={{ y: -6 }} className="kap-card">
          <Image src="/images/screenshots/notes.png" alt="Collaborative Notes" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Collaborative Notes</h3>
          <p className="text-[#9aa0a6] mt-2">Take and share notes instantly with peers.</p>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="kap-card">
          <Image src="/images/screenshots/workshops.png" alt="Workshops" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Workshops</h3>
          <p className="text-[#9aa0a6] mt-2">Join live sessions or host your own.</p>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="kap-card">
          <Image src="/images/screenshots/ai-assistant.png" alt="AI Assistant" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">AI Learning Assistant</h3>
          <p className="text-[#9aa0a6] mt-2">See trends, track progress, and celebrate wins.</p>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="kap-card">
          <Image src="/images/screenshots/leaderboard.png" alt="Leaderboard" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Leaderboard</h3>
          <p className="text-[#9aa0a6] mt-2">See trends, track progress, and celebrate wins.</p>
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <a href="/explore" className="px-8 py-3 rounded-full bg-white text-black font-semibold">Explore KAPment</a>
      </div>
    </div>
  )
}
