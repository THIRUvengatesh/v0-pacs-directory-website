"use client"

import { Button } from "@/components/ui/button"

import { Shield, Database, RefreshCw, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChoose() {
  const reasons = [
    {
      icon: Shield,
      title: "Accurate Information",
      description: "Verified and up-to-date details of all PACS facilities and services",
    },
    {
      icon: Database,
      title: "Complete Coverage",
      description: "Comprehensive directory covering 4,400+ PACS across all 38 districts",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Continuously updated with latest schemes, services, and contact information",
    },
    {
      icon: Users,
      title: "Farmer-Friendly",
      description: "Simple interface designed for easy access by rural communities",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Why Choose Our Platform</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Your trusted source for authentic PACS information and agricultural cooperative services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Find Your PACS?</h3>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Start exploring loan schemes, deposit options, and agricultural services available at your nearest Primary
              Agricultural Cooperative Society
            </p>
            <Button
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90 font-semibold shadow-lg"
              onClick={() => {
                const element = document.getElementById("search")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Search PACS Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
