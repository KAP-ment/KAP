'use client'

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// ✅ Dummy login check (replace with your real auth system later)
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
      {/* Hero / Ecosystem */}
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Ecosystem</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          New ways to learn, connect, and grow with tools designed for you.
        </p>
      </section>

      {/* Feature Sections with Mockups */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        {/* Example: Find Your Tutor */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold mb-4">Find Your Tutor</h2>
            <p className="text-gray-400 mb-6">
              Discover trusted tutors in your city for offline sessions or connect online
              with mentors worldwide. Tailored learning experiences that fit your style.
            </p>
            <button
              onClick={() => handleRedirect("/tutors")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Try Now
            </button>
          </div>
          <div className="bg-gray-900 w-full h-80 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">[ Placeholder for Tutor Mockup ]</span>
          </div>
        </div>

        {/* Workshops */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold mb-4">Workshops</h2>
            <p className="text-gray-400 mb-6">
              Join or host live sessions — study groups, expert talks, or deep-dives.
              Learning together makes it interactive and fun.
            </p>
            <button
              onClick={() => handleRedirect("/workshops")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Join a Workshop
            </button>
          </div>
          <div className="bg-gray-900 w-full h-80 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">[ Placeholder for Workshops Mockup ]</span>
          </div>
        </div>

        {/* Community */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold mb-4">Community</h2>
            <p className="text-gray-400 mb-6">
              Find and join communities tailored to your interests. Share, discuss, and
              grow with fellow learners.
            </p>
            <button
              onClick={() => handleRedirect("/community")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Join Community
            </button>
          </div>
          <div className="bg-gray-900 w-full h-80 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">[ Placeholder for Community Mockup ]</span>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">AI Assistant</h2>
            <p className="text-gray-400 mb-6">
              Get focused answers, recommendations, and personalized help when you need it most.
            </p>
            <button
              onClick={() => handleRedirect("/ai-assistant")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Use AI Assistant
            </button>
          </div>
          <div className="bg-gray-900 w-full h-80 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">[ Placeholder for AI Assistant Mockup ]</span>
          </div>
        </div>
      </section>

      {/* Features Grid (Desktop) */}
      <section className="hidden md:block py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything in One Place</h2>
        <div className="grid grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.id}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 cursor-pointer transition"
              onClick={() => handleRedirect(f.link)}
            >
              <h3 className="text-lg font-semibold mb-2">
                {i + 1}. {f.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{f.description}</p>
              <span className="text-xs text-gray-500">Category: {f.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Accordion (Mobile) */}
      <section className="md:hidden py-24 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Everything in One Place</h2>
        <div className="space-y-4">
          {features.map((f, i) => (
            <div
              key={f.id}
              className="bg-gray-900 p-4 rounded-xl cursor-pointer"
              onClick={() => handleRedirect(f.link)}
            >
              <div
                className="flex justify-between items-center"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenAccordion(openAccordion === i ? null : i)
                }}
              >
                <span className="font-medium">{f.title}</span>
                {openAccordion === i ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {openAccordion === i && (
                <div className="mt-3 text-sm text-gray-400">
                  <p>{f.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Category: {f.category}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-24">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-400 mb-6">Sign up and unlock the full ecosystem today.</p>
        <button
          onClick={() => handleRedirect("/dashboard")}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-lg"
        >
          Try Now
        </button>
      </section>
    </div>
  )
}
