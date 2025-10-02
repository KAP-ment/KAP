'use client'
import { useState } from 'react'
import { Menu, Search, Download } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="backdrop-blur-sm bg-gradient-to-b from-kapNavy/90 to-transparent border-b border-[#ffffff]/5">
      <div className="container flex items-center justify-between h-16">
        <div>
          {/* Replace with logo.svg in /public/images/logo.svg */}
          <Link href="/">
            <span className="sr-only">KAPment home</span>
            <img src="/images/logo.png" alt="KAPment" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-md hover:bg-white/6 focus:outline-none focus:ring-2">
            <Search size={18} />
          </button>

          <button aria-label="Download app (Play Store)" className="px-3 py-1 rounded-md border border-[#ffffff]/6 kap-pill">
            <Download size={16} /> <span className="ml-2 hidden md:inline">Download</span>
          </button>

          <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 rounded-md hover:bg-white/6 focus:outline-none focus:ring-2">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Basic mobile menu (expandable) */}
      {open && (
        <div className="container py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/signup" className="kap-pill">Get Started</Link>
            <Link href="/learn-more" className="kap-pill">Learn More</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
