import React from "react";
import Link from "next/link";
import {
  Shield,
  Database,
  Users,
  Lock,
  Share2,
  BookOpen,
  Baby,
  RefreshCw,
  Mail,
} from "lucide-react";

const sections = [
  { id: "overview", title: "Privacy Policy", icon: Shield },
  { id: "info-collect", title: "1. Information We Collect", icon: Database },
  { id: "how-use", title: "2. How We Use Your Data", icon: Users },
  { id: "security", title: "3. Data Protection & Security", icon: Lock },
  { id: "sharing", title: "4. Sharing Information", icon: Share2 },
  { id: "rights", title: "5. Your Rights", icon: BookOpen },
  { id: "children", title: "6. Children’s Privacy", icon: Baby },
  { id: "updates", title: "7. Updates to This Policy", icon: RefreshCw },
  { id: "contact", title: "8. Contact Us", icon: Mail },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last updated: 4th October, 2025
          </p>
        </header>

        {/* Table of contents / quick nav */}
        <nav className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:shadow-sm transition-shadow bg-white dark:bg-slate-900"
              >
                <s.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                <span className="text-sm font-medium">{s.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Content sections */}
        <article className="prose prose-slate prose-lg max-w-none dark:prose-invert">
          <section id="overview">
            <h2>Privacy Policy</h2>
            <p>
              At KAPment, your privacy and trust are our top priorities. We are
              committed to protecting your personal information while providing
              you with a safe, engaging, and meaningful learning experience.
            </p>
            <p>
              This Privacy Policy explains what data we collect, how we use it,
              the safeguards we employ, and the rights you have as a member of
              the KAPment community. By using KAPment, you agree to the
              practices described here. We encourage you to read it carefully so
              you fully understand how your data is handled and how you can stay
              in control.
            </p>
          </section>

          <hr />

          <section id="info-collect">
            <h3>1. Information We Collect</h3>
            <p>
              We only collect information that helps us make KAPment secure,
              personalized, and useful. This includes:
            </p>
            <ul>
              <li>
                <strong>Account Details</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Basic information you provide at signup, such as your name,
                  email address, and password. You may also choose to add a
                  profile photo or optional details to personalize your account.
                </div>
              </li>
              <li>
                <strong>Learning Activity</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Data on your KAP score, streaks, communities you join,
                  workshops you attend, notes you create, and tutor matches.
                </div>
              </li>
              <li>
                <strong>Device &amp; Usage Data</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Technical details like IP address, browser or device type, OS,
                  app version, and activity logs to optimize performance,
                  troubleshoot issues, and protect against misuse.
                </div>
              </li>
              <li>
                <strong>Optional Contributions</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Files, notes, and resources you choose to upload or share in
                  community spaces. These remain yours — you control visibility.
                </div>
              </li>
              <li>
                <strong>Communication Data</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Messages to support, feedback surveys, or reports you make
                  within the platform.
                </div>
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We do not collect unnecessary data, and we will never ask for
              sensitive details like financial records unless required for
              payments or compliance (handled securely).
            </p>
          </section>

          <hr />

          <section id="how-use">
            <h3>2. How We Use Your Data</h3>
            <p>
              Your data is used to provide a better, safer, and more engaging
              learning experience. Specifically, we use it to:
            </p>
            <ul>
              <li>
                Personalize your learning with AI-powered suggestions and
                content tailored to your interests.
              </li>
              <li>
                Help match you with relevant tutors, peers, workshops, and
                communities.
              </li>
              <li>
                Analyze usage trends to build new features, fix issues, and
                improve the experience.
              </li>
              <li>
                Detect fraud, prevent spam, and ensure security and fair use.
              </li>
              <li>
                Communicate important updates, feature announcements, and
                responses to your requests.
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We do not use your data for unrelated purposes without your
              explicit consent.
            </p>
          </section>

          <hr />

          <section id="security">
            <h3>3. Data Protection &amp; Security</h3>
            <p>
              We know security is non-negotiable. That’s why we employ multiple
              layers of protection:
            </p>
            <ul>
              <li>
                <strong>Encryption Everywhere:</strong> Sensitive data is
                encrypted in transit and at rest.
              </li>
              <li>
                <strong>Access Restrictions:</strong> Only authorized team
                members with a clear need-to-know can access personal data;
                access is logged.
              </li>
              <li>
                <strong>Regular Security Audits:</strong> We run audits and
                checks to identify vulnerabilities early.
              </li>
              <li>
                <strong>No Data Selling:</strong> We never sell personal
                information to advertisers or third parties.
              </li>
            </ul>
          </section>

          <hr />

          <section id="sharing">
            <h3>4. Sharing Information</h3>
            <p>
              Your privacy is our priority. We only share data under specific,
              limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Trusted Third Parties</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  We rely on vetted cloud storage, analytics, and payment
                  providers to operate KAPment; they must meet strict privacy and
                  security requirements.
                </div>
              </li>
              <li>
                <strong>Legal Compliance</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  If required by law, regulation, or a valid legal request, we
                  may disclose information.
                </div>
              </li>
              <li>
                <strong>Community Visibility</strong>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Content you post publicly in communities will be visible to
                  others. You control what you share.
                </div>
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We do not allow third parties to profile or target you for
              advertising using your data.
            </p>
          </section>

          <hr />

          <section id="rights">
            <h3>5. Your Rights</h3>
            <p>
              We believe learners should have control over their data. You have
              the right to:
            </p>
            <ul>
              <li>Access: Request a copy of personal data we hold about you.</li>
              <li>Correction: Update or correct inaccurate information.</li>
              <li>Deletion: Ask us to delete your account and personal data.</li>
              <li>
                Restriction: Limit processing, e.g., opt out of personalization.
              </li>
              <li>Portability: Request your data in a machine-readable format.</li>
              <li>
                Withdraw Consent: Disable optional features or stop specific
                processing.
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@kapment.com"
                className="underline"
              >
                privacy@kapment.com
              </a>
              .
            </p>
          </section>

          <hr />

          <section id="children">
            <h3>6. Children’s Privacy</h3>
            <p>
              KAPment is built for learners of all ages, but we are especially
              careful with younger users. If you are under 13 (or the minimum
              legal age in your country), you must use KAPment under parental
              guidance. We do not knowingly collect personal data from children
              without parental consent.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Parents and guardians are encouraged to supervise learning
              activities and ensure safe use of the platform.
            </p>
          </section>

          <hr />

          <section id="updates">
            <h3>7. Updates to This Policy</h3>
            <p>
              We may update this Privacy Policy to reflect new features, legal
              requirements, or improvements in our privacy practices.
              Significant changes will be communicated through the app, email,
              or a prominent site notice. The "Last updated" date at the top
              will reflect the most recent version.
            </p>
          </section>

          <hr />

          <section id="contact">
            <h3>8. Contact Us</h3>
            <p>
              If you have questions, concerns, or feedback about privacy, reach
              out:
            </p>
            <ul>
              <li>
                📩 Email:{" "}
                <a
                  href="mailto:privacy@kapment.com"
                  className="underline"
                >
                  privacy@kapment.com
                </a>
              </li>
              <li>🌍 Address: India</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              We respond to privacy-related inquiries in a timely manner. Your
              data is yours — we help safeguard it.
            </p>
          </section>
        </article>

        {/* Footer call-to-action */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-lg font-medium">
              Need help or want to request your data?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Contact our privacy team at privacy@kapment.com and we'll assist
              promptly.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm"
            >
              Contact Privacy Team
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
                  }
