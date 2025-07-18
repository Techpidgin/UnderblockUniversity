"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Terms() {
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
            <h1 className="text-5xl font-bold text-white mb-4 font-space-grotesk">Terms of Service</h1>
            <p className="text-gray-400 text-lg font-space-grotesk">Last updated: January 2025</p>
          </div>

          <Card className="glass p-8 hover-lift">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-400 font-space-grotesk">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using Underblock Web3 University's services, you accept and agree to be bound by
                    the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                    use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                    2. Course Access and Enrollment
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Upon successful enrollment and payment, you will receive lifetime access to your purchased course
                    materials. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All video lectures and written materials</li>
                    <li>Course assignments and projects</li>
                    <li>Community access and peer interaction</li>
                    <li>Certificate of completion upon finishing the course</li>
                    <li>Future updates and improvements to the course content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">3. Payment and Refunds</h2>
                  <p className="leading-relaxed mb-4">
                    Course prices range from $49 to $199 depending on the program. We offer a 30-day money-back
                    guarantee from the date of purchase. To request a refund:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact us within 30 days of purchase</li>
                    <li>Provide your enrollment details and reason for refund</li>
                    <li>Refunds will be processed within 5-7 business days</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">4. Intellectual Property</h2>
                  <p className="leading-relaxed">
                    All course materials, including but not limited to videos, text, graphics, logos, and software, are
                    the property of Underblock University and are protected by copyright laws. You may not reproduce,
                    distribute, or create derivative works without explicit written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">5. User Conduct</h2>
                  <p className="leading-relaxed mb-4">You agree to use our services responsibly and not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Share your account credentials with others</li>
                    <li>Distribute course materials without permission</li>
                    <li>Engage in harassment or inappropriate behavior in community spaces</li>
                    <li>Use the platform for any illegal activities</li>
                    <li>Attempt to reverse engineer or hack our systems</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                    6. Privacy and Data Protection
                  </h2>
                  <p className="leading-relaxed">
                    We respect your privacy and are committed to protecting your personal data. We collect only
                    necessary information for course delivery and communication. Your data will not be sold to third
                    parties. We use industry-standard security measures to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">7. Disclaimers</h2>
                  <p className="leading-relaxed">
                    While we strive to provide accurate and up-to-date information, the rapidly evolving nature of Web3
                    and blockchain technology means that some content may become outdated. We do not guarantee specific
                    outcomes or career results from taking our courses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">8. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    Underblock University shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">9. Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of significant changes
                    via email or platform notifications. Continued use of our services after changes constitutes
                    acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">10. Contact Information</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us through our Telegram community at:
                    https://t.me/+sXfOS3Jv6zM1Yjc0
                  </p>
                </section>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Card className="glass p-8 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Questions about our Terms?</h2>
              <p className="text-gray-400 mb-6 font-space-grotesk">
                Our team is here to help clarify any questions you might have.
              </p>
              <Button
                onClick={() => window.open("https://t.me/+sXfOS3Jv6zM1Yjc0", "_blank")}
                className="btn-primary hover-lift hover-glow"
              >
                Contact Support
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
                  <a href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-orange-500 font-space-grotesk">
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
