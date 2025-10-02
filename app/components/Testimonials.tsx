import Image from 'next/image'

const testimonials = [
  { name: 'Ananya', role: 'University Student', quote: 'KAPment helped me stay consistent with my study. The KAP Score keeps me motivated like never before.', avatar: '/images/screenshots/avatar1.jpg' },
  { name: 'Ravi', role: 'Physics Tutor', quote: 'The workshops feature makes it so easy to connect with students, both locally and globally.', avatar: '/images/screenshots/avatar2.jpg' },
  { name: 'Sarah', role: 'Study Partner & Mentor', quote: 'Our study group found a home on KAPment — It feels safe, collaborative, and fun.', avatar: '/images/screenshots/avatar3.jpg' }
]

export default function Testimonials() {
  return (
    <div className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Trusted by Learners and Educators Worldwide</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="kap-card text-center">
            <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
              <Image src={t.avatar} alt={t.name} width={80} height={80} />
            </div>
            <blockquote className="mt-4 text-[#d7dbe0]">“{t.quote}”</blockquote>
            <div className="mt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-[#9aa0a6]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
