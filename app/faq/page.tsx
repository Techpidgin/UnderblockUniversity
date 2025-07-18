"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const faqs = [
  {
    question: "What makes Underblock University different from other Web3 education platforms?",
    answer:
      "We focus on hands-on, practical education with real-world projects. Our courses are taught by industry veterans who've built successful Web3 companies. Plus, we offer premium education with industry-standard pricing and exceptional value.",
  },
  {
    question: "What are the current course prices?",
    answer:
      "Our courses range from $49 to $199 depending on the complexity and duration. Technical Analysis ($79), Node Running ($129), Vibe Coding ($149), Web3 for Individuals ($59), Blockchain & AI Agents ($159), Technical Writing ($69), Faculty of Memetics ($49), and Web3 for Corporate Entities ($199).",
  },
  {
    question: "Do I need prior experience in blockchain or coding?",
    answer:
      "Not at all! Our courses are designed for all skill levels. We have beginner-friendly courses like 'Web3 for Individuals' and more advanced options like 'Blockchain & AI Agents'. Each course clearly indicates the recommended experience level.",
  },
  {
    question: "What do I get when I complete a course?",
    answer:
      "You'll receive a verified certificate of completion that you can showcase on LinkedIn and other professional platforms. You'll also gain access to our exclusive alumni network and job placement assistance.",
  },
  {
    question: "How long do I have access to course materials?",
    answer:
      "Once enrolled, you have lifetime access to all course materials, including any future updates. You can learn at your own pace and revisit content whenever needed.",
  },
  {
    question: "Are there any additional fees or hidden costs?",
    answer:
      "Absolutely not. The course fee covers everything - course materials, certificate, community access, and ongoing support. No hidden fees, no subscription charges.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with your course, we'll provide a full refund, no questions asked.",
  },
  {
    question: "Do you offer group discounts for companies?",
    answer:
      "Yes! We offer special pricing for corporate training programs. Contact us through our Telegram channel for enterprise pricing and custom training solutions.",
  },
  {
    question: "How do I access the courses after enrollment?",
    answer:
      "After completing the enrollment form, you'll receive an email with login credentials and access instructions within 24 hours. All courses are delivered through our modern learning management system.",
  },
  {
    question: "Is there ongoing support during the courses?",
    answer:
      "You'll have access to our community Discord, weekly office hours with instructors, and peer support groups. Our team is always available to help you succeed.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Header */}
      <header className="glass sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover-scale">
              <Image
                src="/images/logo.png"
                alt="Underblock Logo"
                width={40}
                height={40}
                className="rounded-lg hover-lift"
              />
              <div className="text-white">
                <div className="text-orange-500 font-bold text-lg tracking-wide font-fragment-mono">UNDERBLOCK</div>
                <div className="text-xs text-gray-400 font-ibm-plex-mono">WEB3 UNIVERSITY</div>
                <div className="text-xs text-gray-500 font-fragment-mono">Since 2022</div>
              </div>
            </Link>

            <Link href="/">
              <Button variant="ghost" className="glass-button text-white hover-lift">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4 font-space-grotesk">Frequently Asked Questions</h1>
            <p className="text-gray-400 text-lg font-space-grotesk">
              Everything you need to know about Underblock University
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass hover-lift">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white font-space-grotesk pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform hover-scale ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 font-space-grotesk leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="glass p-8 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Still have questions?</h2>
              <p className="text-gray-400 mb-6 font-space-grotesk">
                Join our community and get instant answers from our team and fellow students.
              </p>
              <Button
                onClick={() => window.open("https://t.me/+sXfOS3Jv6zM1Yjc0", "_blank")}
                className="btn-primary hover-lift hover-glow"
              >
                Join Telegram Community
              </Button>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/logo.png" alt="Underblock Logo" width={40} height={40} className="rounded" />
                <div className="text-white leading-none">
                  <div className="font-fragment-mono font-bold text-orange-500 text-xl">UNDERBLOCK</div>
                  <div className="text-[10px] font-ibm-plex-mono text-gray-400">WEB3 UNIVERSITY</div>
                  <div className="text-[10px] font-fragment-mono text-gray-500">Since 2022</div>
                </div>
              </div>
              <p className="text-gray-400 font-space-grotesk max-w-md">
                Master Web3 & Blockchain Technology with hands-on education from industry experts.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-white font-semibold mb-4 font-space-grotesk">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#courses"
                    className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-orange-500 font-space-grotesk">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 font-space-grotesk">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://x.com/UnderblockHQ"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/+sXfOS3Jv6zM1Yjc0"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23-.07-.36-.466-.269-.305-.236l-5.061 3.345c-1.47.828-1.442-.375-.548-.741 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500 font-space-grotesk">© 2025 Underblock Web3 University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
