import { Search, Eye, Phone, MapPin } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Search Your PACS",
      description: "Enter your district, taluk, or village name to find nearby PACS locations",
    },
    {
      icon: Eye,
      number: "02",
      title: "View Services",
      description: "Browse available loan schemes, deposits, and agricultural services offered",
    },
    {
      icon: Phone,
      number: "03",
      title: "Check Details & Contact",
      description: "Get contact information, working hours, and service-specific details",
    },
    {
      icon: MapPin,
      number: "04",
      title: "Visit or Call",
      description: "Visit the PACS office or call for enrollment, loan applications, or inquiries",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Simple four-step process to find and connect with your local PACS
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connecting Line (hidden on mobile, shown on lg+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border z-0" />
                  )}

                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
