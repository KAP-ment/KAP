// app/privacy-policy/page.tsx
"use client"

import Link from "next/link"
import {
  Shield,
  Database,
  Users,
  Lock,
  FileCheck,
  BookOpen,
  RefreshCw,
  Mail,
} from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Privacy Policy",
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    content: (
      <>
        <p>
          <strong>Last updated:</strong> 4th October, 2025
        </p>
        <p className="mt-4">
          At <strong>KAPment</strong>, your privacy and trust are our top
          priorities. We are committed to protecting your personal information
          while providing you with a safe, engaging, and meaningful learning
          experience.
        </p>
        <p className="mt-4">
          This Privacy Policy explains what data we collect, how we use it, the
          safeguards we employ, and the rights you have as a member of the
          KAPment community. By using KAPment, you agree to the practices
          described here.
        </p>
      </>
    ),
  },
  {
    id: "data-collection",
    title: "1. Information We Collect",
    icon: <Database className="w-6 h-6 text-green-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Account Details:</strong> Name, email, password, optional
          profile photo.
        </li>
        <li>
          <strong>Learning Activity:</strong> KAP score, streaks, communities,
          workshops, notes, tutor matches.
        </li>
        <li>
          <strong>Device & Usage Data:</strong> IP address, device/browser type,
          OS, logs.
        </li>
        <li>
          <strong>Optional Contributions:</strong> Notes, files, resources you
          upload/share.
        </li>
        <li>
          <strong>Communication Data:</strong> Messages to support, feedback,
          reports.
        </li>
      </ul>
    ),
  },
  {
    id: "data-usage",
    title: "2. How We Use Your Data",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Personalize your learning with AI-powered recommendations.</li>
        <li>Match you with relevant tutors, peers, and communities.</li>
        <li>Analyze usage to improve features and fix issues.</li>
        <li>Detect fraud, prevent spam, and ensure fair use.</li>
        <li>Communicate updates, responses, and announcements.</li>
      </ul>
    ),
  },
  {
    id: "data-protection",
    title: "3. Data Protection & Security",
    icon: <Lock className="w-6 h-6 text-red-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>🔒 Encryption during transfer & at rest.</li>
        <li>👨‍💻 Restricted access for authorized staff only.</li>
        <li>🛡️ Regular security audits.</li>
        <li>🚫 No selling of personal data.</li>
      </ul>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Sharing Information",
    icon: <FileCheck className="w-6 h-6 text-orange-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Trusted Third Parties:</strong> Cloud, analytics, payments
          (secure & vetted).
        </li>
        <li>
          <strong>Legal Compliance:</strong> If required by law or legal
          request.
        </li>
        <li>
          <strong>Community Visibility:</strong> Content you post in public
          spaces is visible to others.
        </li>
      </ul>
    ),
  },
  {
    id: "user-rights",
    title: "5. Your Rights",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>✅ Access your data.</li>
        <li>✏️ Correct inaccuracies.</li>
        <li>🗑️ Delete your account/data.</li>
        <li>⏸ Restrict processing (opt-out of personalization).</li>
        <li>📂 Request portability.</li>
        <li>🔓 Withdraw consent at any time.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "6. Children’s Privacy",
    icon: <Users className="w-6 h-6 text-pink-600" />,
    content: (
      <p>
        KAPment is for learners of all ages, but if you are under 13 (or the
        minimum legal age in your country), you must use KAPment under parental
        guidance. We do not knowingly collect personal data from children
        without parental consent.
      </p>
    ),
  },
  {
    id: "updates",
    title: "7. Updates to This Policy",
    icon: <RefreshCw className="w-6 h-6 text-yellow-600" />,
    content: (
      <p>
        We may update this Privacy Policy to reflect new features, legal
        requirements, or improvements. Major changes will be announced via
        app/email/site notice.
      </p>
    ),
  },
  {
    id: "contact",
    title: "8. Contact Us",
    icon: <Mail className="w-6 h-6 text-teal-600" />,
    content: (
      <>
        <p>
          📩 <strong>Email:</strong> privacy@kapment.com
        </p>
        <p>
          🌍 <strong>Address:</strong> India
        </p>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        Privacy Policy – KAPment
      </h1>

      {/* Quick Nav */}
      <nav className="mb-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-medium">
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
            <div className="text-gray-700 leading-relaxed space-y-3">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
