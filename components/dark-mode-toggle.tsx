"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Default to dark mode if no preference is set
    const savedMode = localStorage.getItem("darkMode")
    const isDarkMode = savedMode === null ? true : savedMode === "true"
    setIsDark(isDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="glass-button text-white hover:text-orange-400 transition-colors hover-lift"
    >
      {isDark ? <Sun className="w-5 h-5 animate-bounce-subtle" /> : <Moon className="w-5 h-5 animate-bounce-subtle" />}
    </Button>
  )
}
