'use client'

import { BookOpen, Users, Brain, Rocket, Target, MessageCircle, Star, Zap, Globe, Layers, GraduationCap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="px-6 sm:px-12 lg:px-48 py-16 bg-slate-50 text-slate-800 leading-relaxed">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
          Learning, Reimagined for Everyone
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Whether you're a student, tutor, or professional — KAPment is your space to learn, share, and grow.  
          This is the story of how we’re building a connected world of learners.
        </p>
      </section>

      {/* STORY */}
      <section id="our-story" className="space-y-6 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-600" /> Our Story</h2>
        <p>
          The world of learning has become fragmented. Students juggle multiple apps, professionals are racing to upskill,
          and lifelong learners often study in isolation. Traditional education moves too slow, while online tools feel disconnected.
        </p>
        <p>
          KAPment was born from a simple belief: <strong>learning should be frictionless, human, and lifelong.</strong>
          We’re building an ecosystem where everyone — students, professionals, freelancers, and mentors — can collaborate,
          teach, and evolve together in one connected space.
        </p>
        <p>
          Our mission is not just to teach; it’s to empower people to take control of their growth journeys.
          Because in the age of AI and constant change, learning never really ends.
        </p>
      </section>

      {/* GET STARTED */}
      <section id="get-started" className="space-y-6 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Rocket className="w-6 h-6 text-indigo-600" /> Get Started in Seconds</h2>
        <p>
          Getting started with KAPment is effortless. We’ve made sure anyone can begin in minutes — no matter what they do.
        </p>

        <div className="space-y-3 pl-3 border-l-4 border-indigo-500">
          <p><strong>1. Create Your Profile:</strong> Choose whether you’re a student, tutor, professional, or lifelong learner. Your profile shapes your journey inside KAPment.</p>
          <p><strong>2. Choose Interests:</strong> Select your domains — from AI to design, medicine to finance, writing to law. There’s no limit to what you can explore.</p>
          <p><strong>3. Explore the Ecosystem:</strong> Join communities, connect with mentors, post in the Feed, and use AI tools to boost your learning efficiency.</p>
          <p><strong>4. Grow with Every Step:</strong> Earn trust, find opportunities, showcase your progress, and help others grow — all inside the same platform.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="space-y-12 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Layers className="w-6 h-6 text-indigo-600" /> The 12 Features of KAPment</h2>
        <p>
          Each feature in KAPment exists to solve a real learning challenge — together they form a complete ecosystem for education, networking, and growth.
        </p>

        <div className="space-y-12">
          {[
            {
              id: "tutor-match",
              icon: Users,
              title: "Tutor Match",
              desc: "A trusted system that helps learners find verified tutors, coaches, or mentors instantly. Search by subject, skill, location, or price — powered by community ratings and AI filters."
            },
            {
              id: "kapment-feed",
              icon: MessageCircle,
              title: "KAPment Feed",
              desc: "A subreddit-style feed built for learning communities. Post questions, share notes, host polls, and discover discussions across thousands of topics — from coding to psychology."
            },
            {
              id: "ai-assistant",
              icon: Brain,
              title: "AI Study Assistant",
              desc: "Your personalized AI mentor that answers questions, generates quizzes, summarizes lessons, and builds tailored study plans — available 24/7 for learners and professionals."
            },
            {
              id: "study-tools",
              icon: BookOpen,
              title: "Smart Study Tools",
              desc: "All-in-one tools to organize notes, flashcards, references, and track progress — designed to simplify complex learning and retain information longer."
            },
            {
              id: "groups",
              icon: Users,
              title: "Groups & Communities",
              desc: "Join or create focused communities — study circles, industry guilds, or domain-based forums — for collaboration and peer learning."
            },
            {
              id: "opportunities",
              icon: Target,
              title: "Opportunities",
              desc: "A gateway to internships, freelance gigs, and industry challenges curated for your skill level. Grow your career while learning."
            },
            {
              id: "showcase",
              icon: Star,
              title: "Showcase Profile",
              desc: "Display your skills, achievements, and portfolio in one interactive profile. Let recruiters, collaborators, and mentors find you easily."
            },
            {
              id: "collab",
              icon: Zap,
              title: "Collaboration Hub",
              desc: "Find peers to work on live projects, case studies, or startups. Connect learners and professionals who share your goals."
            },
            {
              id: "events",
              icon: Globe,
              title: "Events & Webinars",
              desc: "Stay updated with live workshops, guest lectures, and webinars hosted by subject experts from around the world."
            },
            {
              id: "resources",
              icon: Layers,
              title: "Resource Library",
              desc: "A growing library of curated notes, research, templates, and study materials contributed by the KAPment community."
            },
            {
              id: "certs",
              icon: GraduationCap,
              title: "Micro-Certifications",
              desc: "Prove your skills with KAPment’s mini-certifications. Earn badges and credibility for completing projects or mastering skills."
            },
            {
              id: "global",
              icon: Globe,
              title: "Global Network",
              desc: "Connect with learners, mentors, and professionals across countries — collaborate beyond borders and learn globally."
            }
          ].map((f) => (
            <div key={f.id} id={f.id}>
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
                <f.icon className="w-6 h-6" /> {f.title}
              </h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="space-y-6 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Globe className="w-6 h-6 text-indigo-600" /> The KAPment Ecosystem</h2>
        <p>
          KAPment isn’t a single app — it’s an entire ecosystem designed to let people <strong>learn, connect, and grow</strong> seamlessly.  
          Every feature fits into one of three core pillars:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Learn:</strong> Access AI tools, personalized tutors, and curated study materials.</li>
          <li><strong>Connect:</strong> Join communities, share experiences, and network with professionals.</li>
          <li><strong>Grow:</strong> Earn credibility, build your portfolio, and access opportunities worldwide.</li>
        </ul>
      </section>

      {/* WHY NOW */}
      <section id="why-now" className="space-y-6 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Rocket className="w-6 h-6 text-indigo-600" /> Why Now?</h2>
        <p>
          The world is changing faster than ever. Traditional education struggles to keep pace with the speed of technology,
          and professionals can no longer rely on degrees alone. AI, automation, and remote work have made learning a constant cycle.
        </p>
        <p>
          KAPment was created to bridge this gap — a modern platform for modern learners.  
          It’s where knowledge meets community, and education meets opportunity.
        </p>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="space-y-6 mb-20">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Target className="w-6 h-6 text-indigo-600" /> Our Roadmap</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>2025:</strong> Launch core ecosystem — Tutor Match, Feed, AI Assistant, and Study Tools.</li>
          <li><strong>2026:</strong> Expand into micro-certifications, challenges, and AI mentorship.</li>
          <li><strong>2027:</strong> Build global partnerships and professional networks for verified growth.</li>
          <li><strong>Beyond:</strong> Create the world’s largest connected learning ecosystem, open to everyone.</li>
        </ul>
      </section>

      {/* ABOUT US */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Users className="w-6 h-6 text-indigo-600" /> About Us</h2>
        <p>
          We’re not just a company; we’re a community of people who believe education should be democratized.  
          We’ve been learners, mentors, and professionals — and we’ve all faced the same barriers:  
          expensive courses, outdated systems, and isolation.
        </p>
        <p>
          That’s why KAPment exists — built by learners, for learners.  
          Our goal is to create an ecosystem where anyone can share knowledge, find guidance, and grow — together.
        </p>
      </section>
    </main>
  )
}
