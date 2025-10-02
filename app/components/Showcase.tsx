'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const showcase = {
  Community: [
    { title: 'Tutor Match', desc: 'Find trusted tutors nearby or online.', img: '/showcase/tutor.png' },
    { title: 'Global Network', desc: 'Connect with learners worldwide.', img: '/showcase/network.png' }
  ],
  Tools: [
    { title: 'AI Learning Guide', desc: 'Smart help with insights, summaries, and tips.', img: '/showcase/ai.png' },
    { title: 'Collaborative Notes', desc: 'Co-create and share knowledge easily.', img: '/showcase/notes.png' }
  ],
  Trust: [
    { title: 'Privacy by Design', desc: 'Your data, your control — built with trust.', img: '/showcase/privacy.png' },
    { title: 'Workshops + Feed', desc: 'Learn and share with live workshops & feeds.', img: '/showcase/workshop-feed.png' }
  ]
}

export default function Showcase() {
  const [active, setActive] = useState<'Community'|'Tools'|'Trust'>('Community')

  return (
    <section className="mt-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Explore What Makes KAPment Special</h2>
      <p className="mt-2 text-[#a6adb2]">Switch between pillars to see how KAPment empowers learners.</p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-8">
        {Object.keys(showcase).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key as any)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              active === key
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="relative flex justify-center items-center mt-12 h-[350px]">
        <AnimatePresence mode="wait">
          {showcase[active].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="absolute bg-zinc-900 border border-zinc-700 rounded-2xl p-5 w-72 text-left shadow-xl"
              style={{ left: `${i * 240 - 120}px` }}
            >
              <div className="relative w-full h-32 mb-3 rounded-xl overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-sm text-[#a6adb2] mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
