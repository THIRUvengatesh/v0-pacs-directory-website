import { Sprout, IndianRupee, Wheat, Warehouse, Tractor, Users2, Home, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreFunctions() {
  const functions = [
    {
      icon: IndianRupee,
      title: "Agricultural Crop Loans",
      description: "Short-term and medium-term loans for crop cultivation and farm activities",
      color: "text-primary",
    },
    {
      icon: Sprout,
      title: "Gold & Jewel Loans",
      description: "Collateral-based loans against gold ornaments and jewelry",
      color: "text-secondary",
    },
    {
      icon: Wheat,
      title: "Kisan Credit Card",
      description: "KCC services for flexible agricultural credit with government subsidy",
      color: "text-primary",
    },
    {
      icon: Warehouse,
      title: "Fertilizer Distribution",
      description: "Supply of DAP, Urea, Potash, NPK at government-approved rates",
      color: "text-secondary",
    },
    {
      icon: Tractor,
      title: "Seeds Distribution",
      description: "Quality seeds, pesticides, and agricultural inputs supply",
      color: "text-primary",
    },
    {
      icon: Users2,
      title: "PDS Operations",
      description: "Public Distribution System and ration shop management",
      color: "text-secondary",
    },
    {
      icon: Home,
      title: "Procurement Services",
      description: "Purchase of paddy, sugarcane, pulses, millets under MSP",
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "Warehouse Management",
      description: "Godown and storage facilities for agricultural produce",
      color: "text-secondary",
    },
    {
      icon: Tractor,
      title: "Machinery Rentals",
      description: "Tractor, rotavator, sprayer, motor pump, weeder rentals",
      color: "text-primary",
    },
    {
      icon: Users2,
      title: "Member Services",
      description: "Enrollment, passbook, share capital, dividend management",
      color: "text-secondary",
    },
    {
      icon: Home,
      title: "Rural Development",
      description: "Housing loans, solar schemes, rural welfare programs",
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "Society Management",
      description: "Administration, banking operations, financial services",
      color: "text-secondary",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">PACS Core Functions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Comprehensive agricultural, financial, and rural development services provided by Primary Agricultural
            Cooperative Societies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {functions.map((func, index) => {
            const Icon = func.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${func.color === "text-primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <Icon className={`w-6 h-6 ${func.color}`} />
                  </div>
                  <CardTitle className="text-base text-foreground">{func.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{func.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
