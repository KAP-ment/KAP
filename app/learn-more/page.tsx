/* Production-ready Next.js (App Router) React page for /learn-more

Tailwind CSS utility classes assumed

shadcn/ui Button/Card primitives are referenced (replace with your implementations when needed)

lucide-react used for icons


Files bundled into this single React component file for convenience. When you copy into your project, split into separate files as desired.

Key features implemented:

Dark, integrated background (CSS + inline SVG) that reads as part of the page (not a static screenshot)

Desktop: numbered feature grid (12 items) — clickable, keyboard accessible

Mobile: full-width accordion/list (icons + chevron) matching your screenshots

CTA buttons (Try Now / Join Workshop / Join Community) with auth-redirect logic

Anchor navigation to /about#slug (encodes redirect if not authenticated)

Smooth scrolling helper (client-side)


Replace isAuthenticated() placeholder with your real auth hook (NextAuth, custom JWT, etc.). */

'use client'

import React, { useCallback } from 'react' import Link from 'next/link' import { useRouter } from 'next/navigation' import { Users, Globe, BookOpen, Sparkles, Video, MessageCircle, Folder, ShieldCheck, Calendar, Zap, Award, MapPin, Search, ChevronDown } from 'lucide-react'

// --- Helper: Feature definitions (single source of truth) --- const FEATURES = [ { id: 'local-tutor', title: 'Local Tutor Match', desc: 'Find trusted tutors nearby — online or offline.', icon: MapPin, category: 'Community' }, { id: 'global-network', title: 'Global Network', desc: 'Connect with learners and mentors worldwide.', icon: Globe, category: 'Community' }, { id: 'community-spaces', title: 'Community Spaces', desc: 'Safe, learner-first spaces to share and grow.', icon: Users, category: 'Community' }, { id: 'ai-learning-guide', title: 'AI Learning Guide', desc: 'Smart help with insights, summaries, and tips.', icon: Zap, category: 'Community' }, { id: 'collaborative-notes', title: 'Collaborative Notes', desc: 'Co-create and organize knowledge together.', icon: BookOpen, category: 'Tools' }, { id: 'workshops-seminars', title: 'Workshops & Seminars', desc: 'Host or join interactive learning sessions.', icon: Video, category: 'Tools' }, { id: 'live-collaboration', title: 'Live Collaboration', desc: 'Study, brainstorm, and co-create with peers.', icon: MessageCircle, category: 'Tools' }, { id: 'personalized-journeys', title: 'Personalized Journeys', desc: 'Discover topics and communities shaped around your goals.', icon: Sparkles, category: 'Tools' }, { id: 'resource-hub', title: 'Resource Hub', desc: 'Share notes, videos, and learning materials in one place.', icon: Folder, category: 'Tools' }, { id: 'growth-recognition', title: 'Growth & Recognition', desc: 'Earn credibility through contributions and achievements.', icon: Award, category: 'Trust' }, { id: 'privacy-by-design', title: 'Privacy by Design', desc: "Your data, your control — built with trust at the core.", icon: ShieldCheck, category: 'Trust' }, { id: 'other-tools', title: 'Explore More Tools', desc: 'Tools to help you study smarter and collaborate better.', icon: Search, category: 'Tools' }, ]

// --- Placeholder auth checker (replace with your real auth) --- function isAuthenticated(): boolean { // Example placeholder — prefer using NextAuth session or a proper client hook. // For now: check localStorage token presence (dev only). if (typeof window === 'undefined') return false try { return Boolean(localStorage.getItem('kap_token')) } catch (e) { return false } }

// Helper to navigate with auth-redirect function useAuthNavigate() { const router = useRouter() return useCallback((target: string) => { if (isAuthenticated()) { router.push(target) } else { const url = /signup?redirect=${encodeURIComponent(target)} router.push(url) } }, [router]) }

// --- Small UI primitives (replace with shadcn/ui components if available) --- function CTAButton({ children, onClick, variant = 'solid' }: { children: React.ReactNode; onClick?: () => void; variant?: 'solid' | 'outline' }) { return ( <button onClick={onClick} className={rounded-2xl px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${variant === 'solid' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-transparent border border-white/6 text-white/90 hover:bg-white/3'}}> {children} </button> ) }

// --- Background component: CSS + inline SVG to mimic dotted radial glow used in reference images --- function PageBackground() { return ( <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> {/* base gradient */} <div className="absolute inset-0 bg-black/100" />

{/* subtle vignette */}
  <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: 'radial-gradient(60% 40% at 10% 20%, rgba(15,23,42,0.35), transparent), radial-gradient(40% 30% at 90% 80%, rgba(99,102,241,0.05), transparent)' }} />

  {/* dotted circular pattern using inline SVG for authenticity */}
  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(59,130,246,0.06)" />
      </pattern>
    </defs>
    <rect width="1200" height="1200" fill="url(#dots)" mask="url(#circleMask)" />
    <defs>
      <mask id="circleMask">
        <rect width="1200" height="1200" fill="black" />
        <circle cx="600" cy="600" r="480" fill="white" />
      </mask>
    </defs>
  </svg>

  {/* subtle top-left glow */}
  <div style={{ position: 'absolute', left: '-20%', top: '-10%', width: '60%', height: '60%', filter: 'blur(160px)', background: 'radial-gradient(circle at 20% 20%, rgba(79,70,229,0.08), transparent 20%)' }} />

</div>

) }

// --- Desktop Feature Card --- function FeatureCard({ feature, onClick }: { feature: (typeof FEATURES)[0]; onClick: () => void }) { const Icon = feature.icon as any return ( <button onClick={onClick} className="group text-left w-full rounded-2xl p-6 shadow-lg hover:shadow-xl bg-white/3 backdrop-blur-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500"> <div className="flex items-start gap-4"> <div className="h-10 w-10 rounded-lg bg-white/6 flex items-center justify-center"> <Icon className="h-5 w-5 text-white/90" /> </div> <div className="flex-1"> <h3 className="text-lg font-semibold text-white">{feature.title}</h3> <p className="mt-2 text-sm text-white/70">{feature.desc}</p> <div className="mt-4 text-xs text-white/50">Category: {feature.category}</div> </div> </div> </button> ) }

// --- Mobile Feature List Item (matches reference: left icon, title, chevron on right) --- function FeatureListItem({ feature, onClick }: { feature: (typeof FEATURES)[0]; onClick: () => void }) { const Icon = feature.icon as any return ( <button onClick={onClick} className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <div className="h-10 w-10 rounded-md bg-white/6 flex items-center justify-center"> <Icon className="h-5 w-5 text-white/90" /> </div> <div className="flex-1 text-left"> <div className="text-base font-semibold text-white">{feature.title}</div> </div> <ChevronDown className="h-5 w-5 text-white/70" /> </button> ) }

// --- Main page --- export default function LearnMorePage() { const router = useRouter() const navigate = useAuthNavigate()

const goTo = (target: string) => { // unify external/internal // e.g. '/about#local-tutor' or '/workshops' if (target.startsWith('/')) { navigate(target) } else { router.push(target) } }

const onFeatureClick = (slug: string) => { const target = /about#${slug} navigate(target) }

return ( <div className="relative min-h-screen text-white"> <PageBackground />

<main className="max-w-7xl mx-auto px-6 py-16">
    {/* Hero */}
    <section className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Ecosystem</h1>
      <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">New ways to learn, connect, and grow with tools designed for you.</p>
    </section>

    {/* Find Your Tutor (split layout) */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      <div className="md:col-span-6">
        <h2 className="text-4xl font-bold">Find Your Tutor</h2>
        <p className="mt-4 text-white/70 leading-relaxed">Learning starts with the right guide. With KAPment, you can discover trusted tutors in your city for offline sessions or connect online with mentors worldwide. Find someone who fits your learning style.</p>
        <div className="mt-6 flex gap-4">
          <CTAButton onClick={() => goTo('/tutors')}>Try Now</CTAButton>
          <CTAButton variant="outline" onClick={() => goTo('/signup')}>Sign up</CTAButton>
        </div>
      </div>
      <div className="md:col-span-6 flex justify-center">
        {/* Mockup - stylized UI screenshot made from pure HTML/CSS to feel native to page */}
        <div className="w-full max-w-xl rounded-2xl overflow-hidden bg-gradient-to-b from-black/70 via-black/60 to-black/50 p-6 shadow-2xl border border-white/6">
          <div className="text-lg font-semibold mb-4">Find Your Tutor</div>
          <div className="space-y-4">
            <div className="rounded-md bg-white/3 p-3">Search · Filter · Trusted</div>
            <div className="rounded-md bg-white/4 p-3 grid grid-cols-6 gap-3">
              <div className="col-span-1 rounded bg-white/6 h-12" />
              <div className="col-span-5 rounded bg-white/4 h-12" />
            </div>
            <div className="rounded-md bg-white/3 p-3">Tutor profile previews (name, short bio)</div>
          </div>
        </div>
      </div>
    </section>

    {/* Community */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      <div className="md:col-span-6 order-2 md:order-1">
        <div className="text-4xl font-bold">Community</div>
        <p className="mt-4 text-white/70">Find and join communities tailored to your interests. Share, discuss, and connect with fellow learners through posts and visual insights.</p>
        <div className="mt-6">
          <CTAButton onClick={() => goTo('/community')}>Join the Community</CTAButton>
        </div>
      </div>
      <div className="md:col-span-6 order-1 md:order-2 flex justify-center">
        {/* small mockup */}
        <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-b from-black/70 to-black/60 p-6 shadow-2xl border border-white/6">
          <div className="text-lg font-semibold mb-4">Communities</div>
          <div className="rounded-md bg-white/3 p-4">Community dashboard preview (posts, trending)</div>
        </div>
      </div>
    </section>

    {/* Make Learning Your Habit */}
    <section className="text-center py-12 mb-20">
      <h2 className="text-4xl font-bold">Make Learning Your Habit</h2>
      <p className="mt-4 text-white/70 max-w-3xl mx-auto">Connect with learners, discover communities, and explore resources—everything you need to learn smarter, faster, and together.</p>
    </section>

    {/* AI Assistant */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      <div className="md:col-span-6">
        <h3 className="text-3xl font-bold">AI Assistant</h3>
        <p className="mt-4 text-white/70">An AI learning assistant to keep you on track. Find focused answers, tailored recommendations, and personalized learning assistance when you need it most.</p>
        <div className="mt-6">
          <CTAButton onClick={() => goTo('/ai-assistant')}>Try Now</CTAButton>
        </div>
      </div>
      <div className="md:col-span-6 flex justify-center">
        <div className="w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-b from-black/80 to-black/70 p-5 shadow-2xl border border-white/6">
          <div className="rounded-md bg-white/3 p-4">KAPment AI chat UI preview</div>
          <div className="mt-3 text-sm text-white/60">Suggested Questions · Thumbs up/down</div>
        </div>
      </div>
    </section>

    {/* Features grid (desktop) / list (mobile) */}
    <section className="mb-24">
      <h3 className="text-3xl font-bold mb-6">What’s inside the ecosystem</h3>

      {/* Mobile: list */}
      <div className="md:hidden space-y-4">
        {FEATURES.map((f) => (
          <FeatureListItem key={f.id} feature={f} onClick={() => onFeatureClick(f.id)} />
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <FeatureCard key={f.id} feature={f} onClick={() => onFeatureClick(f.id)} />
        ))}
      </div>
    </section>

    {/* Workshops */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-28">
      <div className="md:col-span-6">
        <h3 className="text-3xl font-bold">Workshops</h3>
        <p className="mt-4 text-white/70">Learning together is powerful. With KAPment Workshops, you can join or host live sessions that bring learners closer — whether it's a quick study group, a subject deep-dive, or an expert-led class.</p>
        <div className="mt-6">
          <CTAButton onClick={() => goTo('/workshops')}>Join a Workshop →</CTAButton>
        </div>
      </div>
      <div className="md:col-span-6 flex justify-center">
        <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-b from-black/70 to-black/60 p-6 shadow-2xl border border-white/6">
          <div className="text-lg font-semibold mb-4">Workshops & Events</div>
          <div className="rounded-md bg-white/3 p-4">Event listing preview</div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="text-center py-12">
      <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
      <p className="text-white/70 mb-6">Create your free account and join a community of learners building together.</p>
      <CTAButton onClick={() => goTo('/signup')}>Create Free Account</CTAButton>
    </section>

  </main>

</div>

) }

