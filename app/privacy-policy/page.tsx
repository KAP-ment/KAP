import React from "react";
import Link from "next/link";
import {
  UserCheck,
  FileText,
  GraduationCap,
  Cpu,
  Shield,
  Gavel,
  CreditCard,
  Mail,
  RefreshCw,
  Users,
  AlertTriangle,
  Ban,
  Copy,
} from "lucide-react";

const sections = [
  { id: "overview", title: "Terms of Service", icon: FileText },
  { id: "acceptance", title: "1. Acceptance of Terms", icon: UserCheck },
  { id: "use", title: "2. Permitted Use", icon: Cpu },
  { id: "conduct", title: "3. User Conduct", icon: Users },
  { id: "payments", title: "4. Payments & Subscriptions", icon: CreditCard },
  { id: "intellectual", title: "5. Intellectual Property", icon: GraduationCap },
  { id: "disclaimer", title: "6. Disclaimers & Liability", icon: Shield },
  { id: "termination", title: "7. Termination Policy", icon: Ban },
  { id: "changes", title: "8. Modifications to Terms", icon: RefreshCw },
  { id: "legal", title: "9. Governing Law", icon: Gavel },
  { id: "contact", title: "10. Contact Us", icon: Mail },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last updated: 4th October, 2025
          </p>
        </header>

        {/* Quick navigation */}
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

        {/* Main Content */}
        <article className="prose prose-slate prose-lg max-w-none dark:prose-invert">
          <section id="overview">
            <h2>Terms of Service</h2>
            <p>
              Welcome to KAPment. By accessing or using our platform, you agree to these Terms of Service
              and all applicable laws and regulations. Please read them carefully, as they form a binding
              legal agreement between you and KAPment.
            </p>
          </section>

          <hr />

          <section id="acceptance">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By registering, accessing, or using KAPment, you confirm that you accept these Terms of Service.
              If you do not agree, you must not use the platform. Continued use indicates your ongoing acceptance.
            </p>
          </section>

          <hr />

          <section id="use">
            <h3>2. Permitted Use</h3>
            <p>
              You agree to use KAPment for lawful educational and community purposes only. You may not
              use our services to violate intellectual property, distribute harmful content, or interfere
              with the platform’s functionality.
            </p>
          </section>

          <hr />

          <section id="conduct">
            <h3>3. User Conduct</h3>
            <p>
              Users are expected to maintain respectful and appropriate behavior. Any form of harassment,
              spam, or misuse of community spaces will lead to account suspension or termination.
            </p>
          </section>

          <hr />

          <section id="payments">
            <h3>4. Payments & Subscriptions</h3>
            <p>
              Paid features, if any, are billed securely. You agree to provide accurate billing information
              and authorize us or our payment partners to process payments according to your plan.
            </p>
          </section>

          <hr />

          <section id="intellectual">
            <h3>5. Intellectual Property</h3>
            <p>
              All platform content, branding, and features are the intellectual property of KAPment. You
              retain ownership of your uploaded notes, resources, and materials but grant us a license to
              display and distribute them within the platform.
            </p>
          </section>

          <hr />

          <section id="disclaimer">
            <h3>6. Disclaimers & Liability</h3>
            <p>
              KAPment provides services “as-is” without warranties of any kind. We are not responsible
              for indirect or consequential damages resulting from your use of the platform.
            </p>
          </section>

          <hr />

          <section id="termination">
            <h3>7. Termination Policy</h3>
            <p>
              We reserve the right to suspend or terminate accounts violating these Terms or engaging in
              malicious activities. Upon termination, access to all features will be revoked.
            </p>
          </section>

          <hr />

          <section id="changes">
            <h3>8. Modifications to Terms</h3>
            <p>
              We may update these Terms periodically to reflect policy changes, new features, or legal
              compliance. The latest version will always be available on this page.
            </p>
          </section>

          <hr />

          <section id="legal">
            <h3>9. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be handled in the appropriate
              jurisdiction in accordance with applicable laws.
            </p>
          </section>

          <hr />

          <section id="contact">
            <h3>10. Contact Us</h3>
            <p>
              If you have questions or concerns regarding these Terms, contact us at{" "}
              <a href="mailto:legal@kapment.com" className="underline">
                legal@kapment.com
              </a>
              .
            </p>
          </section>
        </article>

        {/* Footer CTA */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-lg font-medium">
              Need clarification on our terms?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Contact our legal team at legal@kapment.com for any queries.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm"
            >
              Contact Legal Team
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
