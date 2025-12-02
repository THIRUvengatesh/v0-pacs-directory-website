"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight text-foreground">PACS Directory</h1>
              <p className="text-xs text-muted-foreground">Tamil Nadu</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("loans")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Loans
            </button>
            <button
              onClick={() => scrollToSection("deposits")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Deposits
            </button>
            <button
              onClick={() => scrollToSection("search")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Search
            </button>
            <Button
              onClick={() => scrollToSection("search")}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Find PACS
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("loans")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Loans
              </button>
              <button
                onClick={() => scrollToSection("deposits")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Deposits
              </button>
              <button
                onClick={() => scrollToSection("search")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Search
              </button>
              <Button
                onClick={() => scrollToSection("search")}
                size="sm"
                className="w-full bg-primary text-primary-foreground"
              >
                Find PACS
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
