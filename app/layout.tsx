import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext"; // ✅ add this

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KAPment — Where Learners Belong",
  description: "KAPment — connect, collaborate and grow. Landing page.",
  openGraph: {
    title: "KAPment — Where Learners Belong",
    description: "KAPment — connect, collaborate and grow.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // ✅ keep your existing cookie logic
  try {
    const cookieStore = cookies();
    const logged = cookieStore.get("userLoggedIn")?.value;
    if (logged === "true") {
      redirect("/dashboard");
    }
  } catch (err) {
    // Edge-safe: ignore if cookies API unavailable
  }

  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider> {/* ✅ wrap entire app in AuthProvider */}
          <header className="fixed inset-x-0 top-0 z-40">
            <Navbar />
          </header>

          <main className="pt-24 min-h-screen">{children}</main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
