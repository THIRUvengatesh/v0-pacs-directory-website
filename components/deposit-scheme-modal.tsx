"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FileText, Calculator, Shield } from "lucide-react"

interface DepositScheme {
  icon: any
  name: string
  interest: string
  tenure: string
  minAmount: string
  features: string[]
}

interface DepositSchemeModalProps {
  scheme: DepositScheme | null
  open: boolean
  onClose: () => void
}

const schemeDetails: Record<
  string,
  {
    description: string
    eligibility: string[]
    documents: string[]
    keyFeatures: string[]
    benefits: string[]
    withdrawalTerms: string[]
  }
> = {
  "Regular Fixed Deposit (FD)": {
    description:
      "A safe and secure investment option where members deposit a lump sum amount for a fixed period and earn guaranteed interest. Ideal for those seeking stable returns with capital protection.",
    eligibility: [
      "Individual PACS members",
      "Joint account holders",
      "Senior citizens with additional benefits",
      "Institutions and trusts",
      "Minors through guardians",
    ],
    documents: [
      "PACS membership card or number",
      "Identity proof (Aadhaar, PAN, Voter ID)",
      "Address proof (Aadhaar, utility bill, ration card)",
      "Recent passport-size photographs",
      "Nominee declaration form",
      "Application form duly filled",
    ],
    keyFeatures: [
      "Guaranteed fixed returns throughout tenure",
      "Interest rates ranging from 7.5% to 8.5% per annum",
      "Flexible tenure options from 1 to 10 years",
      "Minimum deposit starting from ₹1,000",
      "Quarterly, half-yearly, or annual interest payout options",
      "Premature withdrawal allowed with penalty",
      "Loan facility available against FD up to 90% of deposit value",
      "Auto-renewal option at maturity",
      "Nomination facility available",
      "Tax deduction benefits under Section 80C (up to ₹1.5 lakh)",
    ],
    benefits: [
      "Higher interest rates compared to commercial banks",
      "Capital protection with guaranteed returns",
      "Regular income through periodic interest payouts",
      "Emergency loan facility against deposit",
    ],
    withdrawalTerms: [
      "Premature withdrawal allowed after minimum lock-in period",
      "Penalty charges: 1-2% reduction in interest rate",
      "Notice period: 15-30 days for premature closure",
      "Full amount available at maturity without penalty",
    ],
  },
  "Recurring Deposit (RD)": {
    description:
      "A disciplined savings scheme where members deposit a fixed amount monthly and earn attractive interest. Perfect for building funds through regular small savings for future goals.",
    eligibility: [
      "All PACS members",
      "Salaried individuals seeking regular savings",
      "Business owners with monthly surplus",
      "Women self-help groups",
      "Agricultural workers with seasonal income",
    ],
    documents: [
      "PACS membership proof",
      "Identity and address proof (Aadhaar preferred)",
      "Passport-size photographs",
      "Bank account details for auto-debit (optional)",
      "Nomination form",
      "Monthly installment commitment declaration",
    ],
    keyFeatures: [
      "Monthly fixed installments starting from ₹100",
      "Interest rate: 7.0% to 8.0% per annum",
      "Tenure options: 1 to 5 years",
      "Compound interest calculation",
      "Missed installment can be paid with nominal penalty",
      "Loan against RD available after 6 months",
      "Maturity amount with accumulated interest",
      "Auto-debit facility from savings account",
      "Extension option after maturity",
      "Flexibility to open multiple RD accounts",
    ],
    benefits: [
      "Develops disciplined savings habit",
      "Affordable monthly contributions",
      "Higher returns than regular savings accounts",
      "Goal-based savings for education, marriage, etc.",
    ],
    withdrawalTerms: [
      "Premature closure allowed after 1 year",
      "Interest paid at savings account rate for early closure",
      "Full maturity amount at the end of tenure",
      "Loan facility available against deposit balance",
    ],
  },
  "Savings Account": {
    description:
      "A flexible deposit account for day-to-day banking needs with interest earnings. Members can deposit and withdraw funds as needed while earning interest on balance maintained.",
    eligibility: [
      "All PACS members - individual or joint",
      "Farmers requiring operational accounts",
      "Rural households for daily transactions",
      "Self-help groups for group savings",
      "Minor accounts with guardian",
    ],
    documents: [
      "PACS membership card",
      "Aadhaar card (mandatory for KYC)",
      "PAN card (for transactions above ₹50,000)",
      "Address proof document",
      "Recent photographs",
      "Initial deposit amount",
    ],
    keyFeatures: [
      "Minimum balance requirement: ₹500",
      "Interest rate: 4.0% to 5.0% per annum",
      "Unlimited deposits allowed",
      "Free passbook issuance and updates",
      "Withdrawal facility at PACS counter",
      "Cheque book facility (optional)",
      "Eligibility for loans and overdraft",
      "ATM/Debit card facility (where available)",
      "Monthly interest credit",
      "Door-step banking for senior citizens",
    ],
    benefits: [
      "Easy access to funds anytime",
      "Earn interest on idle balance",
      "Basis for availing PACS loans",
      "Safe alternative to keeping cash at home",
    ],
    withdrawalTerms: [
      "Unlimited withdrawals during working hours",
      "No penalty for withdrawals",
      "Minimum balance to be maintained",
      "Account closure anytime with full balance refund",
    ],
  },
  "Senior Citizen Deposit": {
    description:
      "A special deposit scheme designed exclusively for senior citizens aged 60+ years, offering higher interest rates and preferential benefits for retired farmers and elderly members.",
    eligibility: [
      "Individuals aged 60 years and above",
      "Retired farmers and agricultural workers",
      "Senior citizens who are PACS members",
      "Joint account with spouse (age criteria for one holder)",
      "Both individual and HUF accounts allowed",
    ],
    documents: [
      "Age proof (Birth certificate, Aadhaar, Pension document)",
      "PACS membership card",
      "Senior citizen identity card",
      "PAN card for tax purposes",
      "Address proof and photographs",
      "Nominee declaration with relationship proof",
    ],
    keyFeatures: [
      "Premium interest rate: 9.0% to 9.5% per annum",
      "Higher than regular FD by 0.5% - 1.0%",
      "Minimum deposit: ₹5,000 with no upper limit",
      "Tenure options: 3, 5, or 7 years",
      "Quarterly interest payout option",
      "Priority service at PACS counters",
      "Tax benefits under Section 80C and 80TTB",
      "Exemption on interest income up to ₹50,000",
      "Loan against deposit available",
      "Premature withdrawal after 1 year with reduced penalty",
    ],
    benefits: [
      "Highest interest rates among deposit schemes",
      "Regular quarterly income for daily expenses",
      "Tax savings and exemptions for seniors",
      "Financial security during retirement years",
    ],
    withdrawalTerms: [
      "Premature withdrawal after 1 year with 1% penalty",
      "Emergency withdrawal with special concessions",
      "Full amount at maturity with interest",
      "Extension option for additional years",
    ],
  },
  "Children Deposit Scheme": {
    description:
      "A long-term savings scheme for children's future education and welfare. Parents can invest on behalf of minors and build a corpus for higher education, marriage, or business ventures.",
    eligibility: [
      "Parents or guardians of children below 18 years",
      "Natural or legal guardians",
      "Both parents can open joint account",
      "Grandparents as guardians",
      "PACS member families",
    ],
    documents: [
      "Child's birth certificate",
      "Parent/Guardian's PACS membership card",
      "Aadhaar card of child and guardian",
      "Guardian's identity and address proof",
      "Recent photographs of child and guardian",
      "Relationship proof document",
      "School/education certificate (if applicable)",
    ],
    keyFeatures: [
      "Attractive interest rate: 8.5% to 9.0% per annum",
      "Long-term tenure: 5 to 15 years",
      "Minimum deposit: ₹1,000 with no maximum limit",
      "Flexible deposit options - lump sum or recurring",
      "Partial withdrawal allowed after 5 years for education",
      "Maturity bonus of 1-2% on long-term deposits",
      "Account automatically transferred to child at age 18",
      "Tax benefits under Section 80C",
      "Special scholarship schemes linked to deposit",
      "Education loan priority for account holders",
    ],
    benefits: [
      "Secures child's educational future",
      "High interest rates with maturity bonuses",
      "Develops savings culture in family",
      "Financial cushion for child's major life events",
    ],
    withdrawalTerms: [
      "Partial withdrawal for education expenses after 5 years",
      "Up to 50% can be withdrawn for higher education",
      "Full maturity amount available at tenure end",
      "Emergency withdrawal allowed with guardian consent",
    ],
  },
  "Daily/Weekly Savings": {
    description:
      "A micro-savings scheme with door-step collection facility, allowing members to save small amounts daily or weekly. Perfect for daily wage workers, small farmers, and vendors to build savings gradually.",
    eligibility: [
      "All PACS members including low-income groups",
      "Daily wage laborers and agricultural workers",
      "Small vendors and shopkeepers",
      "Women self-help group members",
      "Any member unable to deposit large lump sums",
    ],
    documents: [
      "PACS membership card or application",
      "Basic identity proof (Aadhaar preferred)",
      "Address proof document",
      "One passport-size photograph",
      "Savings commitment form",
      "Collector authorization form",
    ],
    keyFeatures: [
      "Micro deposit starting from ₹10 per day",
      "Door-step collection by PACS representative",
      "Interest rate: 6.0% to 7.0% per annum",
      "Flexible deposit schedule - daily or weekly",
      "Passbook issuance for tracking deposits",
      "No penalty for skipping deposits",
      "Accumulated amount credited monthly",
      "Withdrawal facility available after 3 months",
      "Can be converted to fixed deposit",
      "Insurance coverage on collected amounts",
    ],
    benefits: [
      "Convenient door-step banking service",
      "Saves small amounts without visiting PACS",
      "No large initial deposit required",
      "Builds substantial savings over time",
    ],
    withdrawalTerms: [
      "Withdrawal allowed after 3 months minimum",
      "Partial withdrawal permitted for emergencies",
      "Notice period of 7 days for large withdrawals",
      "Full balance available on account closure",
    ],
  },
}

export function DepositSchemeModal({ scheme, open, onClose }: DepositSchemeModalProps) {
  if (!scheme) return null

  const details = schemeDetails[scheme.name]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <scheme.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{scheme.name}</DialogTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {scheme.interest}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Tenure: {scheme.tenure}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Min: {scheme.minAmount}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{details.description}</p>
          </div>

          {/* Eligibility */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Eligibility Criteria</h3>
            </div>
            <ul className="space-y-2 pl-7">
              {details.eligibility.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Required */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-semibold">Documents Required</h3>
            </div>
            <ul className="space-y-2 pl-7">
              {details.documents.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Key Features & Benefits</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3 pl-7">
              {details.keyFeatures.map((item, index) => (
                <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Why Choose This Scheme</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {details.benefits.map((item, index) => (
                <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Withdrawal Terms */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Withdrawal Terms & Conditions</h3>
            <ul className="space-y-2 pl-7">
              {details.withdrawalTerms.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-secondary/10 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Ready to open this deposit scheme?</p>
            <p className="text-sm font-semibold text-foreground">
              Visit your nearest PACS branch or contact the helpline for more information
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
