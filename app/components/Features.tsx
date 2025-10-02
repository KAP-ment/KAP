'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Globe, Users, Cpu, FileText, Presentation,
  MessageSquare, Milestone, FolderOpen, Star, Lock,
  ChevronDown, ChevronUp
} from 'lucide-react'

type Feature = {
  title: string
  desc: string
  Icon: any
  category: 'Community' | 'Tools' | 'Trust'
}

const features: Feature[] = [
  { title: 'Local Tutor Match', desc: 'Find trusted tutors nearby—online or offline.', Icon: MapPin, category: 'Community' },
  { title: 'Global Network', desc: 'Connect with learners and mentors worldwide.', Icon: Globe, category: 'Community' },
  { title: 'Community Spaces', desc: 'Safe, learner-first spaces to share and grow.', Icon: Users, category: 'Community' },
  { title: 'AI Learning Guide', desc: 'Smart help with insights, summaries, and tips.', Icon: Cpu, category: 'Tools' },
  { title: 'Collaborative Notes', desc: 'Co-create and organize knowledge together.', Icon: FileText, category: 'Tools' },
  { title: 'Workshops & Seminars', desc: 'Host or join interactive learning sessions.', Icon: Presentation, category: 'Tools' },
  { title: 'Live Collaboration', desc: 'Study, brainstorm, and co-create with peers in real time.', Icon: MessageSquare, category: 'Tools' },
  { title: 'Personalized Journeys', desc: 'Discover topics and communities shaped around your goals.', Icon: Milestone, category: 'Tools' },
  { title: 'Resource Hub', desc: 'Share notes, videos, and learning materials in one place.', Icon: FolderOpen, category: 'Tools' },
  { title: 'Growth & Recognition', desc: 'Earn credibility through your contributions and achievements.', Icon: Star, category: 'Trust' },
  { title: 'Privacy by Design', desc: 'Your data, your control — built with trust at the core.', Icon: Lock, category: 'Trust' }
]

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Auto-close when scrolling past the Features section
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const completelyOut =
          rect.bottom < 0 || rect.top > window.innerHeight

        if (completelyOut && openIndex !== null) {
          setOpenIndex(null) // auto-close all
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [openIndex])

  return (
    <div ref={sectionRef} className="container py-20">
      {/* ====== Heading ====== */}
      <div className="text-center">
        {/* ✅ Mobile stays text-3xl, desktop grows */}
        <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          What’s in KAPment?
        </h2>
        {/* ✅ Mobile normal, desktop grows */}
        <p className="mt-3 text-[#bfc6cb] text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
          Everything you need to learn, share, and grow — together.
        </p>
      </div>

      {/* ====== Desktop Grid ====== */}
      <motion.div
        className="hidden md:grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="show"
      >
        {features.map((f, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.6)' }}
            className="kap-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 inline-flex items-center justify-center">
                <f.Icon size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-[#a6adb2] text-sm max-w-xl">{f.desc}</p>
                <div className="mt-3 text-xs text-[#9aa0a6]">Category: {f.category}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* ====== Mobile View ====== */}
      <div className="block md:hidden mt-10 space-y-4">
        {/* First 3 as normal cards */}
        {features.slice(0, 3).map((f, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -3, boxShadow: '0 6px 18px rgba(0,0,0,0.4)' }}
            className="kap-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 inline-flex items-center justify-center">
                <f.Icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-[#a6adb2] text-sm">{f.desc}</p>
                <div className="mt-3 text-xs text-[#9aa0a6]">Category: {f.category}</div>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Remaining as accordion */}
        {features.slice(3).map((f, i) => {
          const idx = i + 3
          const isOpen = openIndex === idx

          return (
            <div key={idx} className="kap-card p-0 overflow-hidden">
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex items-center justify-between w-full p-4 focus:outline-none focus:ring-0"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5">
                    <f.Icon size={22} />
                  </div>
                  <span className="font-semibold text-base">{f.title}</span>
                </div>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {/* Expandable Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-sm text-[#a6adb2]"
                  >
                    {f.desc}
                    <div className="mt-2 text-xs text-[#9aa0a6]">
                      Category: {f.category}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
