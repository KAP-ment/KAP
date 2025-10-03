'use client'

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

// ✅ Dummy login check (replace with real auth later)
const isLoggedIn = false

// ✅ Feature list (12 features)
const features = [
  {
    id: "local-tutor-match",
    title: "Local Tutor Match",
    description: "Find trusted tutors nearby—online or offline.",
    category: "Community",
    link: "/tutors",
  },
  {
    id: "global-network",
    title: "Global Network",
    description: "Connect with learners and mentors worldwide.",
    category: "Community",
    link: "/network",
  },
  {
    id: "community-spaces",
    title: "Community Spaces",
    description: "Safe, learner-first spaces to share and grow.",
    category: "Community",
    link: "/community",
  },
  {
    id: "ai-learning-guide",
    title: "AI Learning Guide",
    description: "Smart help with insights, summaries, and tips.",
    category: "Tools",
    link: "/ai-assistant",
  },
  {
    id: "collaborative-notes",
    title: "Collaborative Notes",
    description: "Co-create and organize knowledge together.",
    category: "Tools",
    link: "/notes",
  },
  {
    id: "workshops",
    title: "Workshops & Seminars",
    description: "Host or join interactive learning sessions.",
    category: "Tools",
    link: "/workshops",
  },
  {
    id: "live-collaboration",
    title: "Live Collaboration",
    description: "Study, brainstorm, and co-create with peers in real time.",
    category: "Tools",
    link: "/collaboration",
  },
  {
    id: "personalized-journeys",
    title: "Personalized Journeys",
    description: "Discover topics and communities shaped around your goals.",
    category: "Tools",
    link: "/journeys",
  },
  {
    id: "resource-hub",
    title: "Resource Hub",
    description: "Share notes, videos, and learning materials in one place.",
    category: "Tools",
    link: "/resources",
  },
  {
    id: "growth-recognition",
    title: "Growth & Recognition",
    description: "Earn credibility through your contributions.",
    category: "Trust",
    link: "/recognition",
  },
  {
    id: "privacy",
    title: "Privacy by Design",
    description: "Your data, your control—built with trust at the core.",
    category: "Trust",
    link: "/privacy",
  },
]

export default function LearnMorePage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const handleRedirect = (link: string) => {
    if (isLoggedIn) {
      window.location.href = link
    } else {
      window.location.href = "/signup"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">Ecosystem</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          New ways to learn, connect, and grow with tools designed for you.
        </p>
      </section>

      {/* ================= FEATURE SECTIONS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        {/* Find Your Tutor */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-5xl font-bold mb-6">Find Your Tutor</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Learning starts with the right guide. With KAPment, you can discover trusted tutors 
              in your own city for offline sessions or connect online with mentors worldwide. 
              Whether you're preparing for competitive exams, learning a new language, 
              or just need extra help, KAPment ensures you find someone who fits your learning style. 
              It’s more than just a list of names — it’s a trusted ecosystem where learners 
              meet mentors with transparency, credibility, and care.
            </p>
            <button
              onClick={() => handleRedirect("/tutors")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Try Now
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-56 md:w-[420px] md:h-[280px]">
              <Image
                src="/images/mockups/tutor-laptop.png"
                alt="Tutor Laptop Mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Workshops */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-5xl font-bold mb-6">Workshops</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join or host live sessions — study groups, expert talks, or deep-dives. 
              Learning together makes it interactive, collaborative, and fun.
            </p>
            <button
              onClick={() => handleRedirect("/workshops")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Join a Workshop
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
              <Image
                src="/images/mockups/workshops-tablet.png"
                alt="Workshops Tablet Mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-5xl font-bold mb-6">Community</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Find and join communities tailored to your interests. 
              Share, discuss, and connect with fellow learners through 
              posts, events, and projects.
            </p>
            <button
              onClick={() => handleRedirect("/community")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Join Community
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
              <Image
                src="/images/mockups/community.png"
                alt="Community Mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">AI Assistant</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Get focused answers, tailored recommendations, 
              and personalized help when you need it most. 
              The AI Learning Assistant keeps you on track and saves time.
            </p>
            <button
              onClick={() => handleRedirect("/ai-assistant")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Use AI Assistant
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-[320px] md:h-[420px]">
              <Image
                src="/images/mockups/ai-phone.png"
                alt="AI Assistant Phone Mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... (features grid, accordion, final CTA same as before) ... */}
    </div>
  )
}
