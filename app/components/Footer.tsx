'use client'
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-t from-kapNavy to-kapBlack border-t border-[#ffffff]/4">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1">
            <img src="/images/logo.png" alt="KAPment" className="h-10" />
            <p className="mt-4 text-[#9aa0a6]">Empowering learners worldwide.</p>
          </div>

          <div>
            <h4 className="font-semibold">Features</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#9aa0a6]">
              <li><Link href="/notes">Notes</Link></li>
              <li><Link href="/workshops">Workshops</Link></li>
              <li><Link href="/communities">Communities</Link></li>
              <li><Link href="/ai">AI Assistant</Link></li>
              <li><Link href="/leaderboard">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#9aa0a6]">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-[#9aa0a6] mt-3">Stay updated on new features, guides, and success stories.</p>
            <form className="mt-4 flex gap-2">
              <input aria-label="Email address" placeholder="you@example.com" className="px-3 py-2 rounded-md bg-[#0b0b0d] border border-[#ffffff]/6 text-sm w-full" />
              <button type="button" className="px-4 py-2 rounded-md bg-white text-black font-semibold">Subscribe</button>
            </form>
          </div>

          <div>
            <h4 className="font-semibold">Social</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="https://www.instagram.com/kap.ment?igsh=MTZmOHRjeXBxemhxYQ==" className="p-2 rounded-md bg-white/3"><FaInstagram size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/3"><FaLinkedin size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/3"><FaXTwitter size={18} /></a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-md bg-white/3"><FaYoutube size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#ffffff]/6 pt-6 flex items-center justify-between text-sm text-[#9aa0a6]">
          <div>© {new Date().getFullYear()} KAPment — Powered by KAP</div>
        </div>
      </div>
    </footer>
  )
}
