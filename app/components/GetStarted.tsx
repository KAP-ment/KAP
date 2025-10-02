'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const items = [
  { title: 'AI Learning Assistant', desc: 'See trends, track progress, and celebrate wins.', img: '/images/showcase/ai.png' },
  { title: 'Workshops', desc: 'Join live sessions or host your own.', img: '/images/showcase/workshop.png' },
  { title: 'Collaborative Notes', desc: 'Take and share notes instantly.', img: '/image/showcase/notes.png' },
  { title: 'Community feed', desc: 'See what trends are going on.', img: '/images/showcase/hybrid.png' }
]

export default function GetStarted() {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const interval = setInterval(() => {
      if (!paused && ref.current) {
        ref.current.scrollBy({ left: 1, behavior: 'smooth' })
      }
    }, 50) // speed
    return () => clearInterval(interval)
  }, [paused])

  return (
    <section className="container py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Get Started in Seconds</h2>
      <p className="mt-2 text-[#a6adb2]">Jump into learning with KAPment — quick, simple, personalized.</p>

      <div
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="mt-12 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="kap-card min-w-[250px] flex-shrink-0"
          >
            <img src={i.img} alt={i.title} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="font-semibold text-lg md:text-xl mt-3">{i.title}</h3>
            <p className="text-sm text-[#a6adb2] mt-1">{i.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
