import './globals.css'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Logo from './components/Logo'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'KAPment — Where Learners Belong',
  description: 'KAPment — connect, collaborate and grow. Landing page.',
  openGraph: {
    title: 'KAPment — Where Learners Belong',
    description: 'KAPment — connect, collaborate and grow.',
    images: ['/images/og-image.png']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Placeholder cookie check for redirect to /dashboard
  // Backend must set cookie 'userLoggedIn' = 'true' when user logs in.
  try {
    const cookieStore = cookies()
    const logged = cookieStore.get('userLoggedIn')?.value
    if (logged === 'true') {
      // server-side redirect — placeholder to integrate with auth backend
      redirect('/dashboard')
    }
  } catch (err) {
    // If cookie API not available (edge), ignore.
    // TODO: integrate server-side auth session checks here.
  }

  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* top-level header */}
        <header className="fixed inset-x-0 top-0 z-40">
          <Navbar />
        </header>

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
