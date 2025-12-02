"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

export function Hero() {
  const scrollToSearch = () => {
    const element = document.getElementById("search")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary-foreground/10 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Tamil Nadu Cooperative Department
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            PACS Directory & Digital Information Portal
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Find your nearest PACS, explore services, schemes, loans, deposits, and agricultural support across Tamil
            Nadu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToSearch}
              className="bg-card text-card-foreground hover:bg-card/90 font-semibold shadow-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Search PACS
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToSearch}
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View All Districts
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">4,400+</div>
              <div className="text-sm text-primary-foreground/80">PACS in Tamil Nadu</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">38</div>
              <div className="text-sm text-primary-foreground/80">Districts Covered</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">2M+</div>
              <div className="text-sm text-primary-foreground/80">Members Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
