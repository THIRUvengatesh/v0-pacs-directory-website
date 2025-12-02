import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  IndianRupee,
  Sprout,
  Wheat,
  Warehouse,
  Tractor,
  Users2,
  Home,
  Settings,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CoreFunctionsPage() {
  const functions = [
    {
      icon: IndianRupee,
      title: "Agricultural Crop Loans",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Comprehensive credit facilities for farmers covering all stages of agricultural production",
      details: [
        "Short-term crop loans for seasonal cultivation (3-12 months)",
        "Medium-term loans for farm equipment and development (1-5 years)",
        "Competitive interest rates with government subsidy schemes",
        "Flexible repayment schedules aligned with harvest cycles",
        "Coverage for all major crops including paddy, wheat, sugarcane, cotton, pulses",
        "Working capital for farm inputs, labor, and operational expenses",
        "Crop insurance linkage for risk mitigation",
        "Quick processing and minimal documentation for members",
      ],
      benefits: [
        "Interest subvention up to 3% for prompt repayment",
        "No collateral required for loans up to ₹1.6 lakh",
        "Doorstep service for loan disbursement",
        "Customized loan products based on crop type and duration",
      ],
    },
    {
      icon: Sprout,
      title: "Gold & Jewel Loans",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description:
        "Secure collateral-based loans against gold ornaments and jewelry for agricultural and personal needs",
      details: [
        "Instant loan approval with minimum documentation",
        "Loan amount up to 75% of gold market value",
        "Flexible tenure ranging from 3 months to 3 years",
        "Competitive interest rates lower than commercial banks",
        "Safe custody of gold ornaments in bank lockers",
        "Insurance coverage for pledged jewelry",
        "Easy renewal and part-payment options",
        "Quick release of ornaments after loan closure",
      ],
      benefits: [
        "No processing fees or hidden charges",
        "Transparent valuation process",
        "Grace period for interest payment",
        "Option to convert into term loan",
      ],
    },
    {
      icon: Wheat,
      title: "Kisan Credit Card (KCC)",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Flexible credit facility for farmers with revolving credit limit for all agricultural expenses",
      details: [
        "Single credit facility for all agricultural needs",
        "Credit limit based on land holding and crop pattern",
        "5-year validity with annual review",
        "ATM cum Debit card facility for cash withdrawal",
        "Insurance coverage up to ₹50,000 for accidental death",
        "Crop insurance and asset insurance built-in",
        "Interest subvention benefit from government",
        "Overdraft facility for emergency expenses",
      ],
      benefits: [
        "One-time documentation, recurring credit access",
        "Lower interest rate (7% with subsidy)",
        "Cashless payment at input dealers",
        "Life and accident insurance cover included",
      ],
    },
    {
      icon: Warehouse,
      title: "Fertilizer Distribution",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description:
        "Supply of all types of fertilizers at government-controlled prices ensuring quality and availability",
      details: [
        "DAP (Di-Ammonium Phosphate) for soil enrichment",
        "Urea for nitrogen supply to crops",
        "Potash (Muriate of Potash) for root development",
        "NPK (Nitrogen, Phosphorus, Potassium) complex fertilizers",
        "Organic fertilizers and bio-fertilizers",
        "Micro-nutrients and soil conditioners",
        "Timely availability during sowing and growing seasons",
        "Doorstep delivery service for bulk orders",
      ],
      benefits: [
        "Government-subsidized prices",
        "Quality assurance and genuine products",
        "Credit facility for fertilizer purchase",
        "Expert advice on fertilizer application",
      ],
    },
    {
      icon: Tractor,
      title: "Seeds Distribution",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Quality certified seeds, pesticides, and agricultural inputs for improved crop productivity",
      details: [
        "Certified and high-yielding variety (HYV) seeds",
        "Hybrid seeds for major crops",
        "Vegetable and horticulture seeds",
        "Pesticides and insecticides registration-approved",
        "Herbicides and fungicides for crop protection",
        "Plant growth promoters and bio-pesticides",
        "Seasonal availability of all seed varieties",
        "Technical guidance on seed selection and treatment",
      ],
      benefits: [
        "Genuine seeds with germination guarantee",
        "Competitive pricing with credit options",
        "Replacement policy for defective seeds",
        "Free agri-extension services",
      ],
    },
    {
      icon: Users2,
      title: "Public Distribution System (PDS)",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Operation and management of Fair Price Shops for distribution of essential commodities",
      details: [
        "Distribution of subsidized rice and wheat",
        "Kerosene supply for eligible households",
        "Sugar distribution under PDS quota",
        "Ration card management and verification",
        "Smart card and biometric authentication",
        "Monthly quota distribution as per government norms",
        "Grievance redressal for PDS-related issues",
        "Coordination with Civil Supplies Department",
      ],
      benefits: [
        "Ensures food security for rural families",
        "Transparent digital distribution system",
        "Regular supply without shortage",
        "Affordable prices for below poverty line families",
      ],
    },
    {
      icon: Home,
      title: "Procurement Services",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Purchase of agricultural produce from farmers at Minimum Support Price (MSP) ensuring fair returns",
      details: [
        "Paddy procurement during harvest seasons",
        "Sugarcane purchase at Fair and Remunerative Price (FRP)",
        "Pulses procurement under government schemes",
        "Millets and coarse grains purchase",
        "Cotton and oilseeds procurement",
        "Direct payment to farmers within 72 hours",
        "Quality testing and grading facilities",
        "Storage arrangement for procured produce",
      ],
      benefits: [
        "Guaranteed MSP as announced by government",
        "No middleman exploitation",
        "Immediate payment through bank transfer",
        "Quality bonus for superior produce",
      ],
    },
    {
      icon: Settings,
      title: "Warehouse & Godown Management",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Scientific storage facilities for agricultural produce with proper preservation techniques",
      details: [
        "Modern warehouses with capacity up to 5000 MT",
        "Climate-controlled storage for perishables",
        "Fumigation and pest control measures",
        "Weighing and handling equipment",
        "Security and fire protection systems",
        "Warehouse receipt system for stored goods",
        "Pledge finance against stored commodities",
        "Regular quality inspection and maintenance",
      ],
      benefits: [
        "Reduced post-harvest losses",
        "Competitive storage charges",
        "Insurance coverage for stored goods",
        "Facility to store and sell later at better prices",
      ],
    },
    {
      icon: Tractor,
      title: "Agricultural Machinery Rentals",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Affordable rental services for farm equipment and machinery reducing cultivation costs",
      details: [
        "Tractor rental for plowing and cultivation",
        "Rotavator for soil preparation and mixing",
        "Power tiller for small landholdings",
        "Combine harvester for paddy and wheat",
        "Reaper and binder machines",
        "Seed drill and planters",
        "Boom sprayer for pest control",
        "Laser land leveler for precision farming",
      ],
      benefits: [
        "Nominal rental charges for members",
        "Skilled operator provided with machinery",
        "Reduces investment burden on farmers",
        "Timely availability during peak seasons",
      ],
    },
    {
      icon: Users2,
      title: "Member Services",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Comprehensive membership management and welfare services for cooperative society members",
      details: [
        "New member enrollment and registration",
        "Share capital subscription and management",
        "Passbook issuance and updates",
        "Dividend distribution on share capital",
        "Bonus and patronage refund calculation",
        "Member education and training programs",
        "Annual general body meeting participation",
        "Voting rights and board election process",
      ],
      benefits: [
        "Democratic ownership and control",
        "Annual returns on share capital investment",
        "Access to all cooperative services",
        "Voice in society decision-making",
      ],
    },
    {
      icon: Home,
      title: "Rural Development Services",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Integrated rural development programs covering housing, energy, and livelihood initiatives",
      details: [
        "Rural housing loans under PMAY scheme",
        "Solar panel installation financing",
        "Biogas plant setup loans",
        "Skill development training programs",
        "Women self-help group (SHG) support",
        "Dairy and animal husbandry loans",
        "Rural entrepreneurship promotion",
        "Sanitation and drinking water projects",
      ],
      benefits: [
        "Subsidized interest rates for rural development",
        "Government scheme convergence benefits",
        "Technical support and training provided",
        "Improved quality of rural life",
      ],
    },
    {
      icon: Settings,
      title: "Society Management & Banking",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Professional administration, financial services, and banking operations management",
      details: [
        "Savings account opening and operations",
        "Fixed and recurring deposit schemes",
        "Cash deposit and withdrawal facilities",
        "Cheque book issuance and clearing",
        "NEFT/RTGS fund transfer services",
        "Digital payment integration (UPI, IMPS)",
        "Account statements and transaction records",
        "Audit and compliance management",
      ],
      benefits: [
        "Complete banking services at village level",
        "Higher interest rates on deposits",
        "Personalized service and local presence",
        "Transparency in all financial transactions",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb and Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-16 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
              PACS Core Functions Explained
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Comprehensive guide to all services, operations, and facilities provided by Primary Agricultural
              Cooperative Societies across Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Functions Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {functions.map((func, index) => {
              const Icon = func.icon
              return (
                <Card
                  key={index}
                  className="border-2 overflow-hidden"
                  id={func.title.toLowerCase().replace(/\s+/g, "-")}
                >
                  {/* Function Header */}
                  <div className={`${func.bgColor} border-b p-6 md:p-8`}>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 bg-background rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-8 h-8 ${func.color}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{func.title}</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{func.description}</p>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Details Column */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-primary" />
                          Services & Operations
                        </h3>
                        <ul className="space-y-3">
                          {func.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits Column */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-secondary" />
                          Key Benefits
                        </h3>
                        <div className="space-y-4">
                          {func.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-muted/50 rounded-lg p-4 border border-border">
                              <p className="text-sm text-foreground font-medium leading-relaxed">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Find Your Nearest PACS</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover all these services and more at your local Primary Agricultural Cooperative Society
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#search"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Search PACS Directory
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-border rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
