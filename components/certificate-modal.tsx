"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Award, X } from "lucide-react"
import Image from "next/image"

export function CertificateModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="glass-button text-white border-white/30 hover:border-white/50 font-ibm-plex-mono text-sm bg-transparent"
        >
          <Award className="w-4 h-4 mr-2" />
          View Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute -top-12 right-0 z-50 glass-button text-white hover:bg-red-500/20"
            size="icon"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="glass rounded-2xl p-4">
            <Image
              src="/images/certificate.png"
              alt="Underblock University Certificate Sample"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
