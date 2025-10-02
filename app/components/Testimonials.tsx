'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Ananya',
    role: 'University Student',
    img: '/avatars/ananya.png',
    text: 'KAPment helped me stay consistent with my study. The KAP Score keeps me motivated like never before.'
  },
  {
    name: 'Ravi',
    role: 'Physics Tutor',
    img: '/avatars/ravi.png',
    text: 'The workshops feature makes it so easy to connect with students, both locally and globally.'
  },
  {
    name: 'Sarah',
    role: 'Study Partner & Mentor',
    img: '/avatars/sarah.png',
    text: 'Our study group found a home on KAPment — It feels safe, collaborative, and fun.'
  }
]

export default function Testimonials() {
  return (
    <section className="container py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Trusted by Learners and Educators Worldwide</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="kap-card flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 relative mb-4 rounded-full overflow-hidden">
              <Image src={t.img} alt={t.name} fill className="object-cover" />
            </div>
            <p className="text-[#a6adb2] text-sm">“{t.text}”</p>
            <h4 className="font-semibold mt-4 text-lg">{t.name}</h4>
            <span className="text-xs text-[#9aa0a6]">{t.role}</span>
          </motion.div>
        ))}
      </div>

      {/* Mobile Stacked */}
      <div className="block md:hidden mt-12 space-y-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="kap-card flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 relative mb-4 rounded-full overflow-hidden">
              <Image src={t.img} alt={t.name} fill className="object-cover" />
            </div>
            <p className="text-[#a6adb2] text-sm">“{t.text}”</p>
            <h4 className="font-semibold mt-4 text-lg">{t.name}</h4>
            <span className="text-xs text-[#9aa0a6]">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
