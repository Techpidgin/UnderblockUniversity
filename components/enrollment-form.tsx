"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GraduationCap } from "lucide-react"

export function EnrollmentForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    motivation: "",
    newsletter: false,
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to Google Form
    window.open("https://forms.gle/VX6SzUadoA1Bb6wn6", "_blank")
    setIsOpen(false)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="glass-dark text-white placeholder:text-gray-400"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="glass-dark text-white placeholder:text-gray-400"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-dark text-white placeholder:text-gray-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass-dark text-white placeholder:text-gray-400"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="course" className="text-white">
                Select Course
              </Label>
              <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                <SelectTrigger className="glass-dark text-white border-white/20">
                  <SelectValue placeholder="Choose your course" />
                </SelectTrigger>
                <SelectContent className="glass-dark border-white/20">
                  <SelectItem value="defi-analytics">DeFi Analytics</SelectItem>
                  <SelectItem value="smart-contracts">Smart Contracts</SelectItem>
                  <SelectItem value="blockchain-dev">Blockchain Development</SelectItem>
                  <SelectItem value="web3-marketing">Web3 Marketing</SelectItem>
                  <SelectItem value="full-stack">Full Stack Web3 Program</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="experience" className="text-white">
                Experience Level
              </Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger className="glass-dark text-white border-white/20">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent className="glass-dark border-white/20">
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="motivation" className="text-white">
                Why do you want to join? (Optional)
              </Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                className="glass-dark text-white placeholder:text-gray-400 min-h-[100px]"
                placeholder="Tell us about your goals and motivation..."
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="glass-dark rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Enrollment Summary</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Course:</span> {formData.course}
                </p>
                <p>
                  <span className="font-medium">Experience:</span> {formData.experience}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                />
                <Label htmlFor="newsletter" className="text-white text-sm">
                  Subscribe to our newsletter for updates and exclusive content
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                  required
                />
                <Label htmlFor="terms" className="text-white text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="glass-button text-white border-orange-400/50 hover:border-orange-400 font-ibm-plex-mono">
          <GraduationCap className="w-4 h-4 mr-2" />
          Enroll Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md glass-dark border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white font-space-grotesk text-xl">Join Underblock University</DialogTitle>
          <div className="flex justify-center space-x-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-8 h-2 rounded-full ${i <= step ? "bg-orange-500" : "bg-gray-600"}`} />
            ))}
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="glass-button text-white border-white/30"
              >
                Previous
              </Button>
            )}
            <Button type="submit" className="ml-auto bg-orange-600 hover:bg-orange-700 text-white hover-lift">
              {step === 3 ? "Complete Enrollment" : "Next"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
