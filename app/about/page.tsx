'use client'

import { BookOpen, Users, Brain, Rocket, Calendar, Target, MessageCircle, Star, Zap, Globe, Layers, GraduationCap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="px-6 sm:px-12 lg:px-24 py-16 space-y-24 text-slate-800">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Learning, Reimagined for Everyone
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600">
          KAPment is built for students, professionals, and lifelong learners. 
          This page tells our story, our vision, and the details behind every feature.
        </p>
      </section>

      {/* Our Story / Mission */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <p className="text-slate-600 leading-relaxed">
          Education today is fragmented. Students face outdated systems, professionals 
          struggle to keep up with changing skills, and self-learners often feel isolated.  
          We built KAPment because we believe learning should be frictionless, 
          accessible, and empowering for everyone.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Our mission is simple: create an ecosystem where students, tutors, and professionals 
          can learn, connect, and grow together — regardless of where they come from.
        </p>
      </section>

      {/* Get Started in Seconds */}
      <section id="get-started" className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">Get Started in Seconds</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Create Profile", desc: "Sign up as learner, tutor, or professional in seconds." },
            { icon: Layers, title: "Choose Interests", desc: "Pick from subjects, careers, and skills that excite you." },
            { icon: Globe, title: "Explore Ecosystem", desc: "Join communities, post in the Feed, or search for tutors." },
            { icon: Rocket, title: "Grow & Thrive", desc: "Learn smarter, connect with peers, and find new opportunities." }
          ].map((step, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl p-6 text-center space-y-3 hover:shadow-lg transition">
              <step.icon className="mx-auto w-10 h-10 text-indigo-600" />
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12 Features Grid */}
      <section id="features" className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">The 12 Features of KAPment</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: "tutor-match", icon: Users, title: "Tutor Match", desc: "Find trusted tutors or mentors in any subject or profession." },
            { id: "kapment-feed", icon: MessageCircle, title: "KAPment Feed", desc: "Subreddit-style hub to share posts, doubts, and resources." },
            { id: "ai-assistant", icon: Brain, title: "AI Study Assistant", desc: "Your personal AI mentor for instant help and custom quizzes." },
            { id: "study-tools", icon: BookOpen, title: "Study Tools", desc: "Smart tools to organize notes, flashcards, and practice." },
            { id: "groups", icon: Users, title: "Groups & Communities", desc: "Create or join study groups and professional circles." },
            { id: "opportunities", icon: Target, title: "Opportunities", desc: "Discover internships, freelance gigs, or skill challenges." },
            { id: "showcase", icon: Star, title: "Showcase Profile", desc: "Highlight skills, achievements, and connect with recruiters." },
            { id: "collab", icon: Zap, title: "Collaboration Hub", desc: "Work together on projects, case studies, and peer-learning." },
            { id: "events", icon: Calendar, title: "Events & Webinars", desc: "Join live sessions, workshops, and Q&As with experts." },
            { id: "resources", icon: Layers, title: "Resource Library", desc: "Curated content, notes, and tools shared by community." },
            { id: "certs", icon: GraduationCap, title: "Micro-Certifications", desc: "Earn badges and recognition for completing challenges." },
            { id: "global", icon: Globe, title: "Global Network", desc: "Connect with learners and professionals worldwide." },
          ].map((feature) => (
            <div id={feature.id} key={feature.id} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <feature.icon className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">The KAPment Ecosystem</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Learn", desc: "Access AI tools, tutors, and resources to accelerate growth." },
            { icon: Users, title: "Connect", desc: "Engage with peers, professionals, and mentors across domains." },
            { icon: Rocket, title: "Grow", desc: "Showcase your skills and unlock career or freelance opportunities." }
          ].map((pillar, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl p-6 text-center space-y-3 hover:shadow-lg transition">
              <pillar.icon className="mx-auto w-10 h-10 text-indigo-600" />
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="text-sm text-slate-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Now */}
      <section id="why-now" className="space-y-6">
        <h2 className="text-3xl font-semibold">Why Now?</h2>
        <p className="text-slate-600 leading-relaxed">
          The world is changing faster than traditional education can keep up.  
          AI is reshaping jobs, industries are evolving daily, and learners 
          need new ways to stay ahead. KAPment exists to bridge the gap — 
          offering a community-driven, affordable, and future-ready way to learn.
        </p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Our Roadmap</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            { year: "2025", desc: "Beta launch with Tutor Match, Feed, and AI Assistant." },
            { year: "2026", desc: "Introduce AI mentorship and micro-certifications." },
            { year: "2027", desc: "Expand into global professional networks and opportunities." },
            { year: "Beyond", desc: "Build the world’s largest ecosystem for lifelong learning." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <div className="text-indigo-600 font-bold text-lg">{item.year}</div>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us (no id) */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="text-slate-600 leading-relaxed">
          We’re learners first. KAPment was built by people who struggled with the same 
          challenges you face: finding mentors, keeping up with new skills, and staying motivated.  
          Instead of waiting for a solution, we created one. Our values are simple: 
          learning is lifelong, knowledge should be accessible, and everyone can be both a teacher and a learner.
        </p>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Be Part of the Movement</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          KAPment isn’t just a platform — it’s a community.  
          Join us and shape the future of learning, no matter who you are.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Join Early Access
        </button>
      </section>
    </main>
  )
}
