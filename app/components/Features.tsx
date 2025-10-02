'use client'
import { MapPin, Globe, Users, Cpu, FileText, Presentation, MessageSquare, Milestone, FolderOpen, Star, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

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
  return (
    <div className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What’s in KAPment?</h2>
        <p className="mt-3 text-[#bfc6cb]">Everything you need to learn, share, and grow — together.</p>
      </div>

      <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" animate="show" variants={{
        hidden: {},
        show: {}
      }}>
        {features.map((f, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.6)' }}
            className="kap-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/3 inline-flex items-center justify-center">
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
    </div>
  )
}
