import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Clock, Calendar, Users, BookOpen, Zap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const timetableData = [
  {
    day: "Monday",
    sessions: [
      {
        time: "7:00 - 7:30 PM",
        course: "Web3 Fundamentals",
        type: "General",
        activeWeeks: "1-4",
        duration: "4 weeks",
        level: "Beginner",
        capacity: "All students",
        notes: "Foundation course covering blockchain basics, wallets, and Web3 ecosystem overview",
        topics: ["Blockchain basics", "Wallet setup", "Web3 ecosystem", "Security fundamentals"],
        color: "green",
        isGeneral: true,
      },
      {
        time: "7:30 - 8:00 PM",
        course: "DeFi Data Analytics",
        type: "Specialized",
        activeWeeks: "5-14",
        duration: "10 weeks",
        level: "Intermediate",
        capacity: "25 students",
        notes: "Master DeFi protocols analysis, yield farming strategies, and on-chain data interpretation",
        topics: ["Protocol analysis", "Yield optimization", "On-chain metrics", "Risk assessment"],
        color: "teal",
      },
      {
        time: "8:00 - 8:30 PM",
        course: "Blockchain Development",
        type: "Specialized",
        activeWeeks: "5-18",
        duration: "14 weeks",
        level: "Advanced",
        capacity: "20 students",
        notes: "Build decentralized applications with Solidity, smart contracts, and Web3 frameworks",
        topics: ["Smart contract development", "DApp architecture", "Web3 integration", "Security auditing"],
        color: "blue",
      },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      {
        time: "7:00 - 7:30 PM",
        course: "Crypto Economics & Markets",
        type: "General",
        activeWeeks: "1-4",
        duration: "4 weeks",
        level: "Beginner",
        capacity: "All students",
        notes: "Understanding cryptocurrency markets, tokenomics, and economic principles",
        topics: ["Market dynamics", "Tokenomics", "Trading basics", "Economic principles"],
        color: "green",
        isGeneral: true,
      },
      {
        time: "7:30 - 8:00 PM",
        course: "Technical Marketing",
        type: "Specialized",
        activeWeeks: "5-12",
        duration: "8 weeks",
        level: "Intermediate",
        capacity: "30 students",
        notes: "Marketing strategies for Web3 projects, community building, and growth hacking",
        topics: ["Growth strategies", "Community building", "Content marketing", "Web3 campaigns"],
        color: "purple",
      },
      {
        time: "8:00 - 8:30 PM",
        course: "Technical Writing",
        type: "Specialized",
        activeWeeks: "5-12",
        duration: "8 weeks",
        level: "Beginner",
        capacity: "35 students",
        notes: "Master the art of explaining complex Web3 concepts through clear, engaging content",
        topics: ["Documentation writing", "Whitepaper creation", "Content strategy", "Technical communication"],
        color: "orange",
      },
    ],
  },
  {
    day: "Friday",
    sessions: [
      {
        time: "7:00 - 7:30 PM",
        course: "Web3 Tools & Platforms",
        type: "General",
        activeWeeks: "1-4",
        duration: "4 weeks",
        level: "Beginner",
        capacity: "All students",
        notes: "Hands-on experience with essential Web3 tools, platforms, and development environments",
        topics: ["Development tools", "Testing platforms", "Deployment basics", "Version control"],
        color: "green",
        isGeneral: true,
      },
      {
        time: "7:30 - 8:00 PM",
        course: "Web3 for Individuals",
        type: "Specialized",
        activeWeeks: "5-10",
        duration: "6 weeks",
        level: "Beginner",
        capacity: "40 students",
        notes: "Personal Web3 journey - wallets, DeFi, NFTs, and digital identity management",
        topics: ["Wallet management", "DeFi participation", "NFT ecosystem", "Digital identity"],
        color: "green",
      },
      {
        time: "8:00 - 8:30 PM",
        course: "Web3 for Corporate Entities",
        type: "Specialized",
        activeWeeks: "5-14",
        duration: "10 weeks",
        level: "Intermediate",
        capacity: "30 students",
        notes: "Enterprise adoption of Web3 technologies, compliance, and business integration",
        topics: ["Enterprise blockchain", "Compliance frameworks", "Business integration", "Corporate strategy"],
        color: "slate",
      },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      {
        time: "7:00 - 7:30 PM",
        course: "Web3 Communication & Content",
        type: "General",
        activeWeeks: "1-4",
        duration: "4 weeks",
        level: "Beginner",
        capacity: "All students",
        notes: "Foundation in Web3 communication, content creation, and community engagement",
        topics: ["Content basics", "Community engagement", "Communication skills", "Web3 terminology"],
        color: "green",
        isGeneral: true,
      },
      {
        time: "7:30 - 8:00 PM",
        course: "Node Running",
        type: "Specialized",
        activeWeeks: "5-14",
        duration: "10 weeks",
        level: "Advanced",
        capacity: "15 students",
        notes: "Learn to set up, maintain, and optimize blockchain nodes for various networks",
        topics: ["Node setup & configuration", "Network maintenance", "Security best practices", "Monitoring & alerts"],
        color: "blue",
      },
      {
        time: "8:00 - 8:15 PM",
        course: "Vibe Coding",
        type: "Specialized",
        activeWeeks: "5-16",
        duration: "12 weeks",
        level: "Intermediate",
        capacity: "25 students",
        notes: "Creative coding for Web3 projects with focus on user experience and aesthetics",
        topics: ["Creative development", "UI/UX for Web3", "Animation systems", "Interactive design"],
        color: "indigo",
      },
      {
        time: "8:15 - 8:30 PM",
        course: "Faculty of Memetics",
        type: "Specialized",
        activeWeeks: "5-10",
        duration: "6 weeks",
        level: "Beginner",
        capacity: "50 students",
        notes: "Understanding and leveraging meme culture in Web3 marketing and community building",
        topics: ["Meme culture analysis", "Viral content creation", "Community psychology", "Brand memetics"],
        color: "pink",
      },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      {
        time: "7:00 - 8:30 PM",
        course: "Crypto Master Class",
        type: "Premium",
        activeWeeks: "1-20",
        duration: "20 weeks",
        level: "Advanced",
        capacity: "10 students",
        notes: "Comprehensive advanced program covering all aspects of cryptocurrency and blockchain mastery",
        topics: ["Advanced trading", "Portfolio management", "Institutional strategies", "Market analysis"],
        color: "gold",
        isSpecial: true,
      },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "text-green-400"
    case "Intermediate":
      return "text-yellow-400"
    case "Advanced":
      return "text-red-400"
    default:
      return "text-gray-400"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "General":
      return "text-blue-400 bg-blue-500/20"
    case "Specialized":
      return "text-purple-400 bg-purple-500/20"
    case "Premium":
      return "text-yellow-400 bg-yellow-500/20"
    default:
      return "text-gray-400 bg-gray-500/20"
  }
}

const getColorClasses = (color: string, isGeneral?: boolean) => {
  if (isGeneral) {
    return "border-l-blue-500 bg-blue-500/10"
  }

  const colorMap = {
    teal: "border-l-teal-500 bg-teal-500/10",
    blue: "border-l-blue-500 bg-blue-500/10",
    purple: "border-l-purple-500 bg-purple-500/10",
    green: "border-l-green-500 bg-green-500/10",
    indigo: "border-l-indigo-500 bg-indigo-500/10",
    orange: "border-l-orange-500 bg-orange-500/10",
    pink: "border-l-pink-500 bg-pink-500/10",
    slate: "border-l-slate-500 bg-slate-500/10",
    gold: "border-l-yellow-500 bg-yellow-500/10",
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.teal
}

export default function Timetable() {
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
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4 font-space-grotesk">Course Timetable</h1>
            <p className="text-gray-400 text-lg font-space-grotesk mb-8">
              Spring 2025 Schedule - All times are in WAT (West African Time)
            </p>

            {/* Program Structure Info */}
            <div className="mb-8 p-6 glass rounded-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Program Structure</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-semibold">General Courses</span>
                  <span className="text-gray-400">(Weeks 1-4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Specialized Courses</span>
                  <span className="text-gray-400">(Weeks 5+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Premium Course</span>
                  <span className="text-gray-400">(Full Program)</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="glass p-4 text-center">
                <BookOpen className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-space-grotesk">13</div>
                <div className="text-sm text-gray-400 font-space-grotesk">Total Courses</div>
              </Card>
              <Card className="glass p-4 text-center">
                <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-space-grotesk">5</div>
                <div className="text-sm text-gray-400 font-space-grotesk">Days/Week</div>
              </Card>
              <Card className="glass p-4 text-center">
                <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-space-grotesk">300+</div>
                <div className="text-sm text-gray-400 font-space-grotesk">Total Capacity</div>
              </Card>
              <Card className="glass p-4 text-center">
                <Zap className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-space-grotesk">7:00-8:30PM</div>
                <div className="text-sm text-gray-400 font-space-grotesk">Class Hours</div>
              </Card>
            </div>
          </div>

          {/* Timetable */}
          <div className="space-y-12">
            {timetableData.map((dayData, dayIndex) => (
              <div key={dayIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl font-bold text-white font-space-grotesk">{dayData.day}</h2>
                  <div className="flex-1 h-px bg-white/20"></div>
                </div>

                <div className="grid gap-6">
                  {dayData.sessions.map((session, sessionIndex) => (
                    <Card
                      key={sessionIndex}
                      className={`glass hover-lift border-l-4 ${getColorClasses(session.color, session.isGeneral)} ${
                        session.isSpecial ? "border-2 border-yellow-500/50" : ""
                      }`}
                    >
                      <div className="p-6">
                        {session.isSpecial && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                            PREMIUM COURSE
                          </div>
                        )}
                        <div className="grid lg:grid-cols-3 gap-6">
                          {/* Main Info */}
                          <div className="lg:col-span-2">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-orange-500" />
                                <span className="text-orange-500 font-ibm-plex-mono font-semibold">{session.time}</span>
                              </div>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}
                              >
                                {session.type}
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(session.level)} bg-white/10`}
                              >
                                {session.level}
                              </span>
                              <span className="text-gray-400 text-sm font-ibm-plex-mono">
                                Weeks {session.activeWeeks}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">{session.course}</h3>

                            <p className="text-gray-400 mb-4 font-space-grotesk leading-relaxed">{session.notes}</p>

                            <div className="mb-4">
                              <h4 className="text-white font-semibold mb-2 font-space-grotesk">Topics Covered:</h4>
                              <div className="flex flex-wrap gap-2">
                                {session.topics.map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 font-space-grotesk"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Session Details */}
                          <div className="space-y-4">
                            <Card className="glass p-4">
                              <h4 className="text-white font-semibold mb-3 font-space-grotesk">Session Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Type:</span>
                                  <span
                                    className={
                                      session.type === "General"
                                        ? "text-blue-400"
                                        : session.type === "Premium"
                                          ? "text-yellow-400"
                                          : "text-purple-400"
                                    }
                                  >
                                    {session.type}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Duration:</span>
                                  <span className="text-white">{session.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Capacity:</span>
                                  <span className="text-white">{session.capacity}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Level:</span>
                                  <span className={getLevelColor(session.level)}>{session.level}</span>
                                </div>
                              </div>
                            </Card>

                            <Button
                              asChild
                              className={`w-full ${session.isSpecial ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600" : session.isGeneral ? "bg-blue-600 hover:bg-blue-700 text-white" : "btn-primary"} hover-lift hover-glow`}
                            >
                              <a href="https://forms.gle/VX6SzUadoA1Bb6wn6" target="_blank" rel="noreferrer">
                                {session.isGeneral ? "Join General Course" : "Enroll in Course"}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Program Flow</h3>
              <ul className="space-y-3 text-gray-400 font-space-grotesk">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <strong className="text-blue-400">Weeks 1-4:</strong> General foundation courses for all students
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <strong className="text-purple-400">Weeks 5+:</strong> Choose your specialized track
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  All sessions are conducted via Google Meet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  Recordings available for 48 hours after each session
                </li>
              </ul>
            </Card>

            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Need Help?</h3>
              <p className="text-gray-400 mb-6 font-space-grotesk">
                Have questions about the program structure or need assistance with enrollment?
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full glass-button text-white hover-lift">
                  <a href="https://t.me/+sXfOS3Jv6zM1Yjc0" target="_blank" rel="noreferrer">
                    Join Telegram Support
                  </a>
                </Button>
                <Button asChild className="w-full btn-primary hover-lift hover-glow">
                  <a href="https://forms.gle/VX6SzUadoA1Bb6wn6" target="_blank" rel="noreferrer">
                    Enroll Now
                  </a>
                </Button>
              </div>
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
