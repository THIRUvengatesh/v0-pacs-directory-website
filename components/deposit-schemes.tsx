import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, TrendingUp, PiggyBank, Users, Baby, CalendarDays } from "lucide-react"

export function DepositSchemes() {
  const schemes = [
    {
      icon: Wallet,
      name: "Regular Fixed Deposit (FD)",
      interest: "7.5% - 8.5% p.a.",
      tenure: "1 to 10 years",
      minAmount: "₹1,000",
      features: ["Quarterly interest option", "Loan against FD", "Safe & secure"],
    },
    {
      icon: TrendingUp,
      name: "Recurring Deposit (RD)",
      interest: "7.0% - 8.0% p.a.",
      tenure: "1 to 5 years",
      minAmount: "₹100/month",
      features: ["Monthly deposit", "Discipline savings", "Maturity benefits"],
    },
    {
      icon: PiggyBank,
      name: "Savings Account",
      interest: "4.0% - 5.0% p.a.",
      tenure: "Ongoing",
      minAmount: "₹500",
      features: ["Passbook facility", "Withdrawal anytime", "Loan eligibility"],
    },
    {
      icon: Users,
      name: "Senior Citizen Deposit",
      interest: "9.0% - 9.5% p.a.",
      tenure: "3 to 7 years",
      minAmount: "₹5,000",
      features: ["Higher interest rate", "Tax benefits", "Quarterly payout"],
    },
    {
      icon: Baby,
      name: "Children Deposit Scheme",
      interest: "8.5% - 9.0% p.a.",
      tenure: "5 to 15 years",
      minAmount: "₹1,000",
      features: ["Education planning", "Maturity bonus", "Long-term savings"],
    },
    {
      icon: CalendarDays,
      name: "Daily/Weekly Savings",
      interest: "6.0% - 7.0% p.a.",
      tenure: "Flexible",
      minAmount: "₹10/day",
      features: ["Door-step collection", "Flexible deposits", "Easy withdrawal"],
    },
  ]

  return (
    <section id="deposits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
            Fixed Deposit & Savings Schemes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Secure and attractive deposit schemes with competitive interest rates for all age groups and financial goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schemes.map((scheme, index) => {
            const Icon = scheme.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{scheme.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Interest Rate</span>
                      <span className="text-sm font-semibold text-primary">{scheme.interest}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tenure</span>
                      <span className="text-sm font-semibold text-foreground">{scheme.tenure}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Min. Amount</span>
                      <span className="text-sm font-semibold text-foreground">{scheme.minAmount}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-border">
                    {scheme.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center text-foreground">
            Member Share Capital & Dividend Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Share Capital Investment</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mandatory membership share contribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ownership stake in the cooperative society</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Voting rights in society elections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Refundable upon membership exit</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Annual Dividend Distribution</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Profit-sharing based on society performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Typically 8% - 12% annual dividend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Declared after annual general body meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Additional bonus in profitable years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
