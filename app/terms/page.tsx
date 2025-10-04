// app/terms/page.tsx
"use client"

import Link from "next/link"
import {
  UserCheck,
  Handshake,
  FileText,
  GraduationCap,
  Cpu,
  Users,
  CreditCard,
  Shield,
  Copy,
  Ban,
  AlertTriangle,
  RefreshCw,
  Gavel,
  Mail,
} from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Terms of Service",
    icon: <FileText className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p><strong>Last updated: 4th October, 2025</strong></p>
        <p className="mt-4">
          Welcome to <strong>KAPment</strong> — a learner-first ecosystem designed to help you connect, collaborate, and grow. 
          By creating an account or using our services, you agree to these Terms of Service (“Terms”).
        </p>
        <p className="mt-4">
          These Terms form a legally binding agreement between you and KAPment, and they outline how you can use the platform, 
          what we expect from you, and what you can expect from us. Please read carefully. If you do not agree, you should not use KAPment.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "1. Eligibility and Accounts",
    icon: <UserCheck className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Who can use:</strong> Open to all learners, but under 13s must use with parental supervision.</li>
        <li><strong>Creating an account:</strong> Requires accurate info; keep email & password secure.</li>
        <li><strong>Responsibility:</strong> You are responsible for all activity under your account.</li>
      </ul>
    ),
  },
  {
    id: "acceptable-use",
    title: "2. Acceptable Use of KAPment",
    icon: <Handshake className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p>You agree to:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Use KAPment only for genuine learning, teaching, and collaboration.</li>
          <li>Treat members respectfully and fairly.</li>
          <li>Avoid spamming, harassment, or harmful content.</li>
          <li>Respect others’ intellectual property rights.</li>
          <li>Comply with applicable laws.</li>
        </ul>
        <p className="mt-4">You may not:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Engage in unlawful activities.</li>
          <li>Hack, disrupt, or exploit the platform.</li>
          <li>Post offensive, hateful, or discriminatory content.</li>
          <li>Impersonate others or misrepresent yourself.</li>
        </ul>
      </>
    ),
  },
  {
    id: "content",
    title: "3. Content and Ownership",
    icon: <Copy className="w-6 h-6 text-orange-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Your content:</strong> Anything you create remains your intellectual property.</li>
        <li><strong>License to KAPment:</strong> Limited license to host & display your content for operating services.</li>
        <li><strong>Visibility:</strong> Public communities are visible to others; private notes remain private unless shared.</li>
      </ul>
    ),
  },
  {
    id: "tutors",
    title: "4. Tutors and Workshops",
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Independent tutors:</strong> Tutors are not employees of KAPment.</li>
        <li><strong>Workshops:</strong> Must comply with guidelines, free of harmful/inappropriate material.</li>
        <li><strong>Accountability:</strong> Tutors must be professional; learners must engage responsibly.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "5. AI Assistance",
    icon: <Cpu className="w-6 h-6 text-red-500" />,
    content: (
      <p>
        KAPment uses AI-powered tools for summaries, recommendations, and guidance. AI is designed to be accurate, 
        but learners should verify important details independently.
      </p>
    ),
  },
  {
    id: "community",
    title: "6. Community Guidelines",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>No harassment, abuse, or discrimination.</li>
        <li>No harmful, violent, or illegal content.</li>
        <li>Respect cultural, linguistic, and personal differences.</li>
        <li>Keep discussions constructive and on-topic.</li>
      </ul>
    ),
  },
  {
    id: "payments",
    title: "7. Payments, Premium Features, and Rewards",
    icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Some features may require payment (clearly shown before purchase).</li>
        <li>Refunds follow our refund policy.</li>
        <li>KAP Score & leaderboards encourage consistency but are not financial instruments.</li>
      </ul>
    ),
  },
  {
    id: "privacy",
    title: "8. Privacy and Data Use",
    icon: <Shield className="w-6 h-6 text-teal-500" />,
    content: (
      <p>
        By using KAPment, you agree to our Privacy Policy. Your data remains yours, is encrypted, never sold to advertisers, 
        and you control what you share.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    icon: <Copy className="w-6 h-6 text-gray-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>KAPment’s name, logo, and platform tech are our property.</li>
        <li>You may not copy, distribute, or modify them without permission.</li>
        <li>If you share third-party content, you must have the rights to do so.</li>
      </ul>
    ),
  },
  {
    id: "suspension",
    title: "10. Suspension and Termination",
    icon: <Ban className="w-6 h-6 text-red-500" />,
    content: (
      <p>
        We may suspend or terminate accounts that violate these Terms, misuse the platform, or post harmful/fraudulent content. 
        Suspended users may lose access but can appeal decisions.
      </p>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>KAPment cannot guarantee accuracy of all user-generated content.</li>
        <li>No guarantee of specific academic or professional outcomes.</li>
        <li>We are not liable for issues caused by misuse, reliance on user content, or events beyond our control.</li>
      </ul>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    icon: <RefreshCw className="w-6 h-6 text-indigo-500" />,
    content: (
      <p>
        We may update these Terms as KAPment evolves. The “Last Updated” date will reflect changes, 
        and major updates will be announced via email, app, or site notice.
      </p>
    ),
  },
  {
    id: "law",
    title: "13. Governing Law",
    icon: <Gavel className="w-6 h-6 text-green-600" />,
    content: (
      <p>
        These Terms are governed by the laws of India. Disputes will be handled under Indian jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    icon: <Mail className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p>📩 Email: support@kapment.com</p>
        <p>🌍 Address: India</p>
        <p className="mt-4">
          At KAPment, learning begins with trust. These Terms are our promise to protect learners, 
          tutors, and communities while building a safe, collaborative space.
        </p>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>

      {/* Quick Navigation */}
      <nav className="mb-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50 transition"
              >
                {section.icon}
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">{section.content}</div>
          </section>
        ))}
      </div>
    </main>
  )
        }
