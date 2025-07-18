"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen light-bg dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="light-glass dark:glass-dark-enhanced sticky top-0 z-50">
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
              <div className="text-gray-800 dark:text-white">
                <div className="text-orange-500 font-bold text-lg tracking-wide font-fragment-mono">UNDERBLOCK</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 font-ibm-plex-mono">WEB3 UNIVERSITY</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-fragment-mono">Since 2022</div>
              </div>
            </Link>

            <Link href="/">
              <Button
                variant="ghost"
                className="light-glass-button dark:glass-button-enhanced text-gray-800 dark:text-white hover-lift"
              >
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
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-white/80 text-lg font-space-grotesk">Last updated: January 2025</p>
          </div>

          <Card className="light-glass dark:glass-enhanced border-orange-200 dark:border-white/10 p-8 hover-lift">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-600 dark:text-white/90 font-space-grotesk">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    1. Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">
                    By accessing and using Underblock Web3 University's services, you accept and agree to be bound by
                    the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                    use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
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
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    3. Payment and Refunds
                  </h2>
                  <p className="leading-relaxed mb-4">
                    All courses are priced at $19 USD. We offer a 30-day money-back guarantee from the date of purchase.
                    To request a refund:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact us within 30 days of purchase</li>
                    <li>Provide your enrollment details and reason for refund</li>
                    <li>Refunds will be processed within 5-7 business days</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    4. Intellectual Property
                  </h2>
                  <p className="leading-relaxed">
                    All course materials, including but not limited to videos, text, graphics, logos, and software, are
                    the property of Underblock University and are protected by copyright laws. You may not reproduce,
                    distribute, or create derivative works without explicit written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    5. User Conduct
                  </h2>
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
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    6. Privacy and Data Protection
                  </h2>
                  <p className="leading-relaxed">
                    We respect your privacy and are committed to protecting your personal data. We collect only
                    necessary information for course delivery and communication. Your data will not be sold to third
                    parties. We use industry-standard security measures to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    7. Disclaimers
                  </h2>
                  <p className="leading-relaxed">
                    While we strive to provide accurate and up-to-date information, the rapidly evolving nature of Web3
                    and blockchain technology means that some content may become outdated. We do not guarantee specific
                    outcomes or career results from taking our courses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    8. Limitation of Liability
                  </h2>
                  <p className="leading-relaxed">
                    Underblock University shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    9. Changes to Terms
                  </h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of significant changes
                    via email or platform notifications. Continued use of our services after changes constitutes
                    acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                    10. Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us through our Telegram community at:
                    https://t.me/+sXfOS3Jv6zM1Yjc0
                  </p>
                </section>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Card className="light-glass dark:glass-enhanced p-8 border-orange-200 dark:border-white/10 hover-lift">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                Questions about our Terms?
              </h2>
              <p className="text-gray-600 dark:text-white/80 mb-6 font-space-grotesk">
                Our team is here to help clarify any questions you might have.
              </p>
              <Button
                onClick={() => window.open("https://t.me/+sXfOS3Jv6zM1Yjc0", "_blank")}
                className="light-glass-button dark:glass-button-enhanced text-gray-800 dark:text-white border-orange-500/50 hover:border-orange-500 hover-glow"
              >
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
