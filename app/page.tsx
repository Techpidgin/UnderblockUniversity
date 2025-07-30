"use client"

import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Calendar,
  GraduationCap,
  TrendingUp,
  Code,
  Server,
  Zap,
  Users,
  PenTool,
  Smile,
  Building2,
  Database,
  Megaphone,
  Crown,
} from "lucide-react"
import { CertificateModal } from "@/components/certificate-modal"
import Image from "next/image"

export default function Component() {
  const courses = [
    {
      id: "defi-data-analytics",
      title: "DeFi Data Analytics",
      icon: Database,
      color: "teal",
      description: "Master DeFi protocols analysis, yield farming strategies, and on-chain data interpretation.",
      duration: "10 weeks",
      price: "$149",
      features: ["Protocol analysis", "Yield optimization", "On-chain metrics", "Risk assessment"],
    },
    {
      id: "blockchain-development",
      title: "Blockchain Development",
      icon: Code,
      color: "blue",
      description: "Build decentralized applications with Solidity, smart contracts, and Web3 frameworks.",
      duration: "14 weeks",
      price: "$199",
      features: ["Smart contract development", "DApp architecture", "Web3 integration", "Security auditing"],
    },
    {
      id: "web3-individuals",
      title: "Web3 for Individuals",
      icon: Users,
      color: "green",
      description: "Personal Web3 journey - wallets, DeFi, NFTs, and digital identity management.",
      duration: "6 weeks",
      price: "$59",
      features: ["Wallet management", "DeFi participation", "NFT ecosystem", "Digital identity"],
    },
    {
      id: "web3-corporate",
      title: "Web3 for Corporate Entities",
      icon: Building2,
      color: "slate",
      description: "Enterprise adoption of Web3 technologies, compliance, and business integration.",
      duration: "10 weeks",
      price: "$199",
      features: ["Enterprise blockchain", "Compliance frameworks", "Business integration", "Corporate strategy"],
    },
    {
      id: "technical-marketing",
      title: "Technical Marketing",
      icon: Megaphone,
      color: "purple",
      description: "Marketing strategies for Web3 projects, community building, and growth hacking.",
      duration: "8 weeks",
      price: "$129",
      features: ["Growth strategies", "Community building", "Content marketing", "Web3 campaigns"],
    },
    {
      id: "technical-writing",
      title: "Technical Writing",
      icon: PenTool,
      color: "orange",
      description: "Master the art of explaining complex Web3 concepts through clear, engaging content.",
      duration: "8 weeks",
      price: "$69",
      features: ["Documentation writing", "Whitepaper creation", "Content strategy", "Community communication"],
    },
    {
      id: "vibe-coding",
      title: "Vibe Coding",
      icon: Zap,
      color: "indigo",
      description: "Creative coding for Web3 projects with focus on user experience and aesthetics.",
      duration: "12 weeks",
      price: "$149",
      features: ["Creative development", "UI/UX for Web3", "Animation & interactions", "Design systems"],
    },
    {
      id: "node-running",
      title: "Node Running",
      icon: Server,
      color: "blue",
      description: "Learn to set up, maintain, and optimize blockchain nodes for various networks.",
      duration: "10 weeks",
      price: "$129",
      features: ["Node setup & configuration", "Network maintenance", "Security best practices", "Monitoring & alerts"],
    },
    {
      id: "faculty-memetics",
      title: "Faculty of Memetics",
      icon: Smile,
      color: "pink",
      description: "Understanding and leveraging meme culture in Web3 marketing and community building.",
      duration: "6 weeks",
      price: "$49",
      features: ["Meme culture analysis", "Viral content creation", "Community psychology", "Brand memetics"],
    },
    {
      id: "crypto-master-class",
      title: "Crypto Master Class",
      icon: Crown,
      color: "gold",
      description: "Comprehensive advanced program covering all aspects of cryptocurrency and blockchain mastery.",
      duration: "20 weeks",
      price: "$1200",
      features: ["Advanced trading", "Portfolio management", "Institutional strategies", "Market analysis"],
    },
  ]

  const partners = [
    {
      name: "Doge Africa",
      handle: "@dogeafrica_",
      logo: "/images/partners/doge-africa.png",
    },
    {
      name: "Own The Doge",
      handle: "@ownthedoge",
      logo: "/images/partners/own-the-doge.png",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <section className="space-y-10 max-w-xl">
          <h1 className="font-space-grotesk font-bold leading-tight text-5xl lg:text-6xl">
            <span className="text-white">Master </span>
            <span className="text-gradient">Web3 & Blockchain</span>
            <br />
            <span className="text-white">Technology</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Underblock University provides hands-on education in blockchain development, DeFi analytics, technical
            writing, and web3 marketing. Join thousands of students building the future of finance.
          </p>

          <div className="space-y-4">
            <a
              href="https://forms.gle/VX6SzUadoA1Bb6wn6"
              target="_blank"
              className="inline-block btn-outline-orange px-8 py-3 rounded-lg font-medium font-space-grotesk"
              rel="noreferrer"
            >
              Start Your Journey
            </a>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 rounded-lg px-4 py-2 glass-button">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-300 font-ibm-plex-mono">Enrollment ends on 18th of July</span>
              </div>
              <CertificateModal />
            </div>
          </div>
        </section>

        {/* Right Content - Course Grid Preview */}
        <aside className="justify-self-end">
          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {courses.slice(0, 4).map((course) => {
                const Icon = course.icon
                return (
                  <div key={course.id} className="course-card p-6 text-center cursor-pointer group">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-white transition-colors" />
                    <h3 className="text-white font-medium font-space-grotesk text-sm">{course.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>
      </main>

      {/* Features Section */}
      <section id="about" className="mt-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-space-grotesk">Why Choose Underblock?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-space-grotesk">
            We're not just another online course platform. We're building the next generation of Web3 professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Expert Instructors</h3>
            <p className="text-gray-400 font-space-grotesk">
              Learn from industry veterans who've built successful Web3 projects and companies.
            </p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Hands-on Projects</h3>
            <p className="text-gray-400 font-space-grotesk">
              Build real-world applications and deploy them to mainnet during your studies.
            </p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Affordable Excellence</h3>
            <p className="text-gray-400 font-space-grotesk">
              Premium education with industry-standard pricing and exceptional value.
            </p>
          </Card>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="mt-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-space-grotesk">Our Courses</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-space-grotesk">
            Comprehensive programs designed to take you from beginner to professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon
            const isSpecial = course.id === "crypto-master-class"
            return (
              <Card
                key={course.id}
                className={`glass p-8 hover-lift ${isSpecial ? "border-2 border-yellow-500/50" : ""}`}
              >
                {isSpecial && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    PREMIUM COURSE
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${isSpecial ? "bg-yellow-500/20" : "bg-orange-500/20"} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${isSpecial ? "text-yellow-500" : "text-orange-500"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-space-grotesk">{course.title}</h3>
                    <p className={`${isSpecial ? "text-yellow-500" : "text-orange-500"} font-ibm-plex-mono`}>
                      {course.duration}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`text-2xl font-bold ${isSpecial ? "text-yellow-500" : "text-orange-500"} font-space-grotesk`}
                  >
                    {course.price}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 font-space-grotesk">{course.description}</p>
                <ul className="text-gray-500 space-y-2 text-sm font-space-grotesk mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>

                <Button
                  onClick={() => window.open("https://forms.gle/VX6SzUadoA1Bb6wn6", "_blank")}
                  className={`w-full ${isSpecial ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600" : "btn-primary"} hover-lift hover-glow`}
                >
                  Enroll Now - {course.price}
                </Button>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-space-grotesk">Our Partners & Sponsors</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-space-grotesk">
            Trusted by leading Web3 communities and organizations
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="glass p-6 text-center hover-lift hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-white font-space-grotesk mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-400 font-ibm-plex-mono">{partner.handle}</p>
            </Card>
          ))}
        </div>
      </section>

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
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
                    About
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors font-space-grotesk">
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
