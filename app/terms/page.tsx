// app/terms/page.tsx
"use client"

import {
  User,
  CheckCircle,
  FileText,
  GraduationCap,
  Bot,
  Users,
  CreditCard,
  Shield,
  BookOpen,
  Ban,
  AlertTriangle,
  RefreshCcw,
  Scale,
  Mail,
} from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      id: "eligibility",
      title: "1. Eligibility and Accounts",
      icon: <User className="w-6 h-6 text-blue-600" />,
      content: (
        <>
          <p>
            KAPment is open to learners of all ages. However, if you are under 13 (or under the
            age of consent in your country), you must use the platform with the supervision of a
            parent or guardian.
          </p>
          <p className="mt-2">
            To access most features, you must create an account with accurate information and
            keep your login credentials secure. You are responsible for all activity under your
            account. If you suspect compromise, notify us immediately.
          </p>
        </>
      ),
    },
    {
      id: "acceptable-use",
      title: "2. Acceptable Use of KAPment",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      content: (
        <>
          <p>By using KAPment, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use KAPment for genuine learning, teaching, and collaboration.</li>
            <li>Treat all members respectfully.</li>
            <li>Avoid spamming, harassment, or harmful content.</li>
            <li>Respect intellectual property rights.</li>
            <li>Comply with local laws.</li>
          </ul>
          <p className="mt-2">You may not:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use KAPment for unlawful purposes.</li>
            <li>Attempt to hack, disrupt, or exploit vulnerabilities.</li>
            <li>Share hateful, offensive, or discriminatory content.</li>
            <li>Impersonate others or misrepresent identity.</li>
          </ul>
        </>
      ),
    },
    {
      id: "content",
      title: "3. Content and Ownership",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      content: (
        <>
          <p>
            Anything you create on KAPment — notes, resources, workshops, posts — remains your
            intellectual property. You own your content.
          </p>
          <p className="mt-2">
            By uploading, you grant KAPment a limited license to host, display, and share your
            content for the purpose of operating and improving the platform.
          </p>
          <p className="mt-2">
            Public communities are visible to everyone. Private contributions remain private
            unless you choose to share.
          </p>
        </>
      ),
    },
    {
      id: "tutors",
      title: "4. Tutors and Workshops",
      icon: <GraduationCap className="w-6 h-6 text-pink-600" />,
      content: (
        <>
          <p>
            Tutors on KAPment are independent, not employees. We provide a platform for
            connection but cannot guarantee outcomes of sessions.
          </p>
          <p className="mt-2">
            Workshops must comply with community guidelines and avoid harmful material.
          </p>
          <p className="mt-2">
            Tutors must remain professional and learners must engage respectfully.
          </p>
        </>
      ),
    },
    {
      id: "ai",
      title: "5. AI Assistance",
      icon: <Bot className="w-6 h-6 text-orange-600" />,
      content: (
        <p>
          KAPment provides AI-powered tools for summaries, recommendations, and guidance.
          While designed to be accurate, AI may not be perfect. Always verify important
          details independently.
        </p>
      ),
    },
    {
      id: "community",
      title: "6. Community Guidelines",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>No harassment, abuse, or discriminatory behavior.</li>
          <li>No harmful, violent, or illegal content.</li>
          <li>Respect cultural, linguistic, and personal differences.</li>
          <li>Keep discussions constructive and on-topic.</li>
        </ul>
      ),
    },
    {
      id: "payments",
      title: "7. Payments, Premium Features, and Rewards",
      icon: <CreditCard className="w-6 h-6 text-red-600" />,
      content: (
        <>
          <p>
            Most features are free, but some advanced tools or workshops may require payment.
            Payment terms are shown before purchase.
          </p>
          <p className="mt-2">
            Refunds are handled per our refund policy. KAP Score and leaderboards are
            motivational tools, not financial instruments, and cannot be traded.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      title: "8. Privacy and Data Use",
      icon: <Shield className="w-6 h-6 text-gray-600" />,
      content: (
        <p>
          By using KAPment, you agree to our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . Your data remains yours, is encrypted, and never sold. You control what you share
          in communities.
        </p>
      ),
    },
    {
      id: "intellectual",
      title: "9. Intellectual Property",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      content: (
        <>
          <p>
            KAPment’s platform, logo, and technology are its property. You may not copy or
            modify them without permission.
          </p>
          <p className="mt-2">
            You must have rights to any third-party content you share (like study material).
          </p>
        </>
      ),
    },
    {
      id: "suspension",
      title: "10. Suspension and Termination",
      icon: <Ban className="w-6 h-6 text-red-700" />,
      content: (
        <>
          <p>
            We may suspend or terminate accounts that violate these Terms, misuse the
            platform, or share harmful/illegal content.
          </p>
          <p className="mt-2">
            Suspension may lead to loss of access to your content. You can appeal by
            contacting support.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "11. Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>We cannot guarantee all content is accurate.</li>
          <li>We do not ensure specific academic or professional outcomes.</li>
          <li>We are not liable for damages from misuse, reliance on content, or external events.</li>
        </ul>
      ),
    },
    {
      id: "changes",
      title: "12. Changes to These Terms",
      icon: <RefreshCcw className="w-6 h-6 text-orange-600" />,
      content: (
        <p>
          We may update these Terms as KAPment evolves. Major updates will be notified via
          email, app, or announcements. The “Last Updated” date always reflects the latest
          version.
        </p>
      ),
    },
    {
      id: "law",
      title: "13. Governing Law",
      icon: <Scale className="w-6 h-6 text-green-700" />,
      content: (
        <p>
          These Terms are governed by the laws of [Insert Country/Region]. Disputes will be
          handled under the jurisdiction of [Insert Court/Region].
        </p>
      ),
    },
    {
      id: "contact",
      title: "14. Contact Us",
      icon: <Mail className="w-6 h-6 text-gray-600" />,
      content: (
        <p>
          For questions or concerns, contact us at{" "}
          <a href="mailto:support@kapment.com" className="text-blue-600 underline">
            support@kapment.com
          </a>{" "}
          or at our registered office. We aim to respond promptly.
        </p>
      ),
    },
  ]

  return (
    <div className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Terms of Service – KAPment</h1>
          <p className="text-gray-600">Last updated: [Insert Date]</p>
          <p className="max-w-2xl mx-auto text-gray-700">
            By creating an account or using KAPment, you agree to these Terms of Service.
            Please read carefully — they are our promise to protect the integrity of the
            platform and the community.
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
