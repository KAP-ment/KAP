'use client'
import { Flame, TrendingUp, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  { title: 'KAP Score', desc: 'Track your learning journey with KAP Score — streaks designed to measure growth, consistency, and engagement.', Icon: Flame, color: 'text-orange-400' },
  { title: 'Leaderboard & Trends', desc: "See what's trending in your community, discover new topics, and celebrate learners who inspire others.", Icon: TrendingUp, color: 'text-sky-400' },
  { title: 'Trust & Culture', desc: 'Built on a foundation of respect, safety, and belonging — creating a culture where every learner feels valued.', Icon: ShieldCheck, color: 'text-cyan-300' }
]

export default function CoreValues() {
  return (
    <div className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Powered by Progress, Community, and Trust</h2>
        <p className="mt-3 text-[#bfc6cb]">The foundation that makes learning engaging and meaningful on KAPment.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div key={i} className="kap-card">
            <div className="flex gap-4 items-start">
              <div className={`p-3 rounded-md bg-white/4`}>
                {/* icon with dynamic color */}
                <p className={p.color}>
                  <p.Icon className={`w-6 h-6 ${p.color}`} />
                </p>
                <p className="sr-only">{p.title}</p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <p className="p-3 rounded-md bg-white/3">
                    <p.Icon className={`w-6 h-6 ${p.color}`} />
                  </p>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-[#9aa0a6]">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
