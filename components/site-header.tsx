"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EnrollmentForm } from "@/components/enrollment-form"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="glass sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Underblock Logo" width={40} height={40} className="rounded" />
            <div className="text-white leading-none">
              <div className="font-fragment-mono font-bold text-orange-400">UNDERBLOCK</div>
              <div className="text-[10px] font-ibm-plex-mono text-gray-300">WEB3 UNIVERSITY · Since 2022</div>
            </div>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-space-grotesk">
            <a href="#" className="text-orange-400">
              Home
            </a>
            <a href="#courses" className="text-gray-200 hover:text-orange-300">
              Courses
            </a>
            <a href="#about" className="text-gray-200 hover:text-orange-300">
              About
            </a>
            <a href="/timetable" className="text-gray-200 hover:text-orange-300">
              Timetable
            </a>
          </nav>

          {/* right controls */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://x.com/UnderblockHQ" target="_blank" aria-label="X / Twitter" rel="noreferrer">
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://t.me/+sXfOS3Jv6zM1Yjc0" target="_blank" aria-label="Telegram" rel="noreferrer">
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23-.07-.36-.466-.269-.305-.236l-5.061 3.345c-1.47.828-1.442-.375-.548-.741 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <EnrollmentForm />
          </div>

          {/* mobile burger */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* mobile nav */}
        {open && (
          <nav className="md:hidden mt-4 border-t border-white/20 pt-4 space-y-3 text-sm font-space-grotesk">
            <a href="#" className="block text-orange-400">
              Home
            </a>
            <a href="#courses" className="block text-gray-200 hover:text-orange-300">
              Courses
            </a>
            <a href="#about" className="block text-gray-200 hover:text-orange-300">
              About
            </a>
            <a href="/timetable" className="block text-gray-200 hover:text-orange-300">
              Timetable
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
