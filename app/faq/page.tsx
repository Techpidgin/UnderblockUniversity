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
      "We focus on hands-on, practical education with real-world projects. Our courses are taught by industry veterans who've built successful Web3 companies. Plus, we offer premium education at an unbeatable price of just $19 per course.",
  },
  {
    question: "Why are all courses only $19? What's the catch?",
    answer:
      "There's no catch! We believe Web3 education should be accessible to everyone. Our flat-rate pricing model allows us to democratize access to premium blockchain education that would normally cost $50-$200 elsewhere.",
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
      "Absolutely not. The $19 fee covers everything - course materials, certificate, community access, and ongoing support. No hidden fees, no subscription charges.",
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
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 dark:text-white/80 text-lg font-space-grotesk">
              Everything you need to know about Underblock University
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="light-glass dark:glass-enhanced border-orange-200 dark:border-white/10 hover-lift"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 dark:hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-space-grotesk pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform hover-scale ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-white/80 font-space-grotesk leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="light-glass dark:glass-enhanced p-8 border-orange-200 dark:border-white/10 hover-lift">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-space-grotesk">
                Still have questions?
              </h2>
              <p className="text-gray-600 dark:text-white/80 mb-6 font-space-grotesk">
                Join our community and get instant answers from our team and fellow students.
              </p>
              <Button
                onClick={() => window.open("https://t.me/+sXfOS3Jv6zM1Yjc0", "_blank")}
                className="light-glass-button dark:glass-button-enhanced text-gray-800 dark:text-white border-orange-500/50 hover:border-orange-500 hover-glow"
              >
                Join Telegram Community
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
