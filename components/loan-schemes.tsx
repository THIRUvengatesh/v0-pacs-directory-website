import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LoanSchemes() {
  const loans = [
    {
      name: "Short-Term Crop Loans",
      description: "Seasonal agricultural loans for cultivation expenses",
      features: ["Up to ₹3 lakh", "Interest subsidy", "3-12 months tenure"],
      category: "Agricultural",
    },
    {
      name: "Medium-Term Agricultural Loans",
      description: "Loans for farm development and equipment purchase",
      features: ["₹50,000 - ₹10 lakh", "Flexible repayment", "2-5 years tenure"],
      category: "Agricultural",
    },
    {
      name: "Long-Term Farm Development",
      description: "Infrastructure development and land improvement loans",
      features: ["Up to ₹25 lakh", "Subsidy eligible", "5-15 years tenure"],
      category: "Development",
    },
    {
      name: "Jewel/Gold Loan",
      description: "Secured loans against gold ornaments and jewelry",
      features: ["Quick processing", "Flexible tenure", "Competitive rates"],
      category: "Personal",
    },
    {
      name: "Self-Help Group (SHG) Loans",
      description: "Credit support for women SHGs and joint liability groups",
      features: ["Group lending", "Low interest", "Skill development"],
      category: "Group",
    },
    {
      name: "Kisan Credit Card (KCC)",
      description: "Revolving credit facility for agricultural needs",
      features: ["₹3 lakh limit", "2% interest subsidy", "Renewal benefits"],
      category: "Agricultural",
    },
    {
      name: "Farm Machinery Loan",
      description: "Purchase of tractors, harvesters, and farm equipment",
      features: ["Up to 85% finance", "Subsidy available", "7 years tenure"],
      category: "Equipment",
    },
    {
      name: "Micro-enterprise Loans",
      description: "Support for small businesses and rural enterprises",
      features: ["₹10,000 - ₹10 lakh", "Working capital", "Easy eligibility"],
      category: "Business",
    },
    {
      name: "Tractor Loan",
      description: "Specialized financing for tractor purchase",
      features: ["Up to ₹15 lakh", "Subsidy eligible", "7 years repayment"],
      category: "Equipment",
    },
    {
      name: "Dairy / Livestock Loan",
      description: "Purchase of cattle, goats, poultry, and dairy equipment",
      features: ["₹50,000 - ₹5 lakh", "Insurance support", "3-5 years"],
      category: "Livestock",
    },
    {
      name: "Rural Housing Loan",
      description: "Construction and renovation of rural houses",
      features: ["Up to ₹10 lakh", "PM Awas Yojana", "15 years tenure"],
      category: "Housing",
    },
    {
      name: "Consumption Loan",
      description: "Personal loans for household expenses and emergencies",
      features: ["₹10,000 - ₹1 lakh", "Quick disbursal", "Short tenure"],
      category: "Personal",
    },
    {
      name: "Emergency Loan",
      description: "Urgent financial assistance for unforeseen circumstances",
      features: ["Fast approval", "Flexible terms", "Member priority"],
      category: "Emergency",
    },
  ]

  const categoryColors: Record<string, string> = {
    Agricultural: "bg-primary/10 text-primary border-primary/20",
    Development: "bg-secondary/10 text-secondary border-secondary/20",
    Personal: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    Group: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    Equipment: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    Business: "bg-primary/10 text-primary border-primary/20",
    Livestock: "bg-secondary/10 text-secondary border-secondary/20",
    Housing: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    Emergency: "bg-destructive/10 text-destructive border-destructive/20",
  }

  return (
    <section id="loans" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Loan Schemes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Comprehensive lending programs designed to support agricultural, personal, and business needs of rural
            communities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className={categoryColors[loan.category]}>
                    {loan.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground">{loan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{loan.description}</p>
                <div className="space-y-2">
                  {loan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
