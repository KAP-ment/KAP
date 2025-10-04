
// app/privacy-policy/page.tsx
"use client"

import { Shield, Database, Lock, Share2, UserCheck, Users, RefreshCcw, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "data-collection",
      title: "1. Information We Collect",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      content: (
        <>
          <p>
            We only collect information that helps us make KAPment secure,
            personalized, and useful. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Account Details:</strong> Name, email, password, profile photo, and optional info.
            </li>
            <li>
              <strong>Learning Activity:</strong> KAP score, streaks, communities, workshops, notes, tutor matches.
            </li>
            <li>
              <strong>Device & Usage Data:</strong> IP address, browser type, OS, app version, logs.
            </li>
            <li>
              <strong>Optional Contributions:</strong> Files, notes, resources you upload or share.
            </li>
            <li>
              <strong>Communication Data:</strong> Support messages, feedback, reports.
            </li>
          </ul>
          <p className="mt-2">
            We do not collect unnecessary data, and we never request sensitive financial
            details unless required for payments or compliance.
          </p>
        </>
      ),
    },
    {
      id: "usage",
      title: "2. How We Use Your Data",
      icon: <UserCheck className="w-6 h-6 text-green-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Personalize learning with AI-driven recommendations.</li>
          <li>Match you with tutors, peers, workshops, and communities.</li>
          <li>Analyze usage to improve features and fix issues.</li>
          <li>Ensure security and fair use (fraud/spam prevention).</li>
          <li>Communicate updates, new features, and support responses.</li>
        </ul>
      ),
    },
    {
      id: "security",
      title: "3. Data Protection & Security",
      icon: <Lock className="w-6 h-6 text-red-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Encryption during transfer and at rest.</li>
          <li>Restricted access only to authorized team members.</li>
          <li>Regular security audits and monitoring.</li>
          <li>We never sell your personal information.</li>
        </ul>
      ),
    },
    {
      id: "sharing",
      title: "4. Sharing Information",
      icon: <Share2 className="w-6 h-6 text-purple-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Trusted third-party providers (storage, analytics, payments).</li>
          <li>Legal compliance when required by law.</li>
          <li>Community visibility for voluntarily shared content.</li>
          <li>No third-party advertising or profiling.</li>
        </ul>
      ),
    },
    {
      id: "rights",
      title: "5. Your Rights",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Access:</strong> Request your personal data copy.</li>
          <li><strong>Correction:</strong> Fix inaccurate information.</li>
          <li><strong>Deletion:</strong> Permanently delete your account.</li>
          <li><strong>Restriction:</strong> Limit processing (e.g. disable personalization).</li>
          <li><strong>Portability:</strong> Export data in a readable format.</li>
          <li><strong>Withdraw Consent:</strong> Opt-out of optional features.</li>
        </ul>
      ),
    },
    {
      id: "children",
      title: "6. Children’s Privacy",
      icon: <Users className="w-6 h-6 text-pink-600" />,
      content: (
        <>
          <p>
            KAPment is built for learners of all ages, but if you are under 13 (or the
            legal minimum age in your country), you must use KAPment under parental
            guidance.
          </p>
          <p className="mt-2">
            We do not knowingly collect personal data from children without parental consent.
          </p>
        </>
      ),
    },
    {
      id: "updates",
      title: "7. Updates to This Policy",
      icon: <RefreshCcw className="w-6 h-6 text-orange-600" />,
      content: (
        <p>
          We may update this Privacy Policy for new features, legal requirements, or
          improvements. Major updates will be communicated through the app, email,
          or our website. The “Last Updated” date always reflects the latest version.
        </p>
      ),
    },
    {
      id: "contact",
      title: "8. Contact Us",
      icon: <Mail className="w-6 h-6 text-gray-600" />,
      content: (
        <p>
          If you have any questions or concerns, reach us at{" "}
          <a href="mailto:privacy@kapment.com" className="text-blue-600 underline">
            privacy@kapment.com
          </a>{" "}
          or write to us at our India office. We respond promptly to all inquiries.
        </p>
      ),
    },
  ]

  return (
    <div className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Privacy Policy – KAPment</h1>
          <p className="text-gray-600">Last updated: 4th October, 2025</p>
          <p className="max-w-2xl mx-auto text-gray-700">
            Your privacy and trust are our top priorities. This Privacy Policy explains
            what data we collect, how we use it, the safeguards we employ, and the rights
            you have as a member of the KAPment community.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <div className="text-gray-700 space-y-2">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
