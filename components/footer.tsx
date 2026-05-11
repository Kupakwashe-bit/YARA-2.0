"use client"

import Image from "next/image"

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@y.a.r.a_official",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yara_official",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/yara-robotics",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0F1E] border-t border-[#1a2744]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Y.A.R.A Logo"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-[#00D4AA]">
                Y.A.R.A
              </span>
            </div>
            <p className="text-[#8aa3b8] text-sm leading-relaxed">
              Young African Robotics Association
              <br />
              <span className="text-[#00D4AA]">Building Tomorrow, Today</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#8aa3b8] hover:text-[#00D4AA] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a2744] rounded-lg text-[#8aa3b8] hover:bg-[#00D4AA] hover:text-[#0A0F1E] transition-all duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                  <span className="text-sm font-medium hidden sm:inline">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div
          id="join"
          className="mt-12 pt-12 border-t border-[#1a2744] text-center"
        >
          <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-[#E8F4F1] mb-4">
            Ready to Join <span className="text-[#00D4AA]">Y.A.R.A</span>?
          </h3>
          <p className="text-[#8aa3b8] mb-6 max-w-xl mx-auto">
            Be part of Africa&apos;s robotics revolution. Join our community of
            innovators, engineers, and dreamers.
          </p>
          <a
            href="mailto:join@yara-robotics.org"
            className="inline-block px-8 py-4 bg-[#FF6B35] text-[#E8F4F1] font-semibold rounded-lg hover:scale-105 hover:bg-[#ff7d4d] transition-all duration-200 shadow-lg shadow-[#FF6B35]/20"
          >
            Apply Now
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1a2744] text-center">
          <p className="text-[#8aa3b8] text-sm">
            © {new Date().getFullYear()} Young African Robotics Association. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
