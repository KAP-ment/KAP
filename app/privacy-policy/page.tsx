// app/privacy-policy/page.tsx
"use client"

import Link from "next/link"
import { Shield, Database, Users, Lock, FileCheck, BookOpen, RefreshCw, Mail } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Privacy Policy",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p><strong>Last updated: 4th October, 2025</strong></p>
        <p className="mt-4">
          At <strong>KAPment</strong>, your privacy and trust are our top priorities. We are committed to protecting your personal
          information while providing you with a safe, engaging, and meaningful learning experience.
        </p>
        <p className="mt-4">
          This Privacy Policy explains what data we collect, how we use it, the safeguards we employ, and the rights you have as a member 
          of the KAPment community. By using KAPment, you agree to the practices described here.
        </p>
      </>
    ),
  },
  {
    id: "data-collection",
    title: "1. Information We Collect",
    icon: <Database className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <p>We only collect information that helps us make KAPment secure, personalized, and useful:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Account Details:</strong> Name, email, password, optional profile photo.</li>
          <li><strong>Learning Activity:</strong> KAP score, streaks, workshops, communities, notes, tutor matches.</li>
          <li><strong>Device & Usage Data:</strong> IP address, device/browser type, OS, app version, activity logs.</li>
          <li><strong>Optional Contributions:</strong> Files, notes, and resources you upload/share.</li>
          <li><strong>Communication Data:</strong> Messages, feedback, reports.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          We do not collect unnecessary data, and we never ask for sensitive details like financial records unless required for payments or compliance.
        </p>
      </>
    ),
  },
  {
    id: "data-usage",
    title: "2. How We Use Your Data",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Personalize your learning with AI-powered recommendations.</li>
        <li>Help match you with tutors, peers, and communities.</li>
        <li>Analyze usage trends to improve features and fix issues.</li>
        <li>Ensure security, detect fraud, and prevent spam.</li>
        <li>Send important updates, feature announcements, or responses.</li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "3. Data Protection & Security",
    icon: <Lock className="w-6 h-6 text-red-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>🔒 Encryption of sensitive data (in transit & at rest).</li>
        <li>👨‍💻 Restricted access to authorized team members only.</li>
        <li>🛡️ Regular audits and system checks for vulnerabilities.</li>
        <li>🚫 We never sell your personal data.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "4. Sharing Information",
    icon: <FileCheck className="w-6 h-6 text-orange-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Trusted Services:</strong> Cloud storage, analytics, payments (all vetted).</li>
        <li><strong>Legal Compliance:</strong> If required by law or regulation.</li>
        <li><strong>Community Visibility:</strong> Content you post publicly will be visible to others.</li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "5. Your Rights",
    icon: <BookOpen className="w-6 h-6 text-purple-500" />,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>✅ Access your personal data.</li>
        <li>✏️ Correct inaccuracies in your profile.</li>
        <li>🗑️ Delete your data permanently.</li>
        <li>⏸ Restrict how your data is processed.</li>
        <li>📂 Request data portability.</li>
        <li>🔓 Withdraw consent anytime.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "6. Children’s Privacy",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    content: (
      <p>
        If you are under 13 years old (or below the legal age in your country), you must use KAPment under parental guidance. 
        We do not knowingly collect data from children without parental consent.
      </p>
    ),
  },
  {
    id: "updates",
    title: "7. Updates to This Policy",
    icon: <RefreshCw className="w-6 h-6 text-yellow-500" />,
    content: (
      <p>
        We may update this Privacy Policy when adding features, meeting legal requirements, or improving practices. Significant 
        changes will be announced via app, email, or site notice. The “Last Updated” date always shows the latest version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "8. Contact Us",
    icon: <Mail className="w-6 h-6 text-teal-500" />,
    content: (
      <>
        <p>📩 Email: privacy@kapment.com</p>
        <p>🌍 Address: India</p>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>

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
