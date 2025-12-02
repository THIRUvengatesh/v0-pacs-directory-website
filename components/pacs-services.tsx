import { CheckCircle2 } from "lucide-react"

export function PacsServices() {
  const services = [
    "Fertilizer supply at government-approved rates (DAP, Urea, Potash, NPK)",
    "Quality seeds and pesticide distribution for various crops",
    "Tractor and farm machinery rental services",
    "Paddy, sugarcane, pulses, and millets procurement under MSP",
    "Government welfare scheme delivery and implementation",
    "New member registration and enrollment services",
    "Cash counter and financial transaction facilities",
    "Account management and passbook updates",
    "Loan application, processing, and renewal services",
    "Agricultural advisory and extension support",
    "Godown and warehouse storage facilities",
    "Insurance facilitation for crops and livestock",
    "Input supply for horticulture and plantation crops",
    "Marketing assistance for agricultural produce",
    "Training programs for modern farming techniques",
    "Digital services and online account access",
    "Kisan Credit Card issuance and renewal",
    "Government subsidy claim processing",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Complete PACS Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Full spectrum of agricultural, financial, and administrative services available at your local PACS
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
