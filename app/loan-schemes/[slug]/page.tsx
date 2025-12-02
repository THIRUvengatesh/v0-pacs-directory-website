import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Info, IndianRupee, Calendar, FileText, Users } from "lucide-react"

const loanData: Record<
  string,
  {
    name: string
    description: string
    category: string
    eligibility: string[]
    documents: string[]
    loanAmount: string
    interestRate: string
    tenure: string
    features: string[]
    benefits: string[]
    process: string[]
  }
> = {
  "short-term-crop-loans": {
    name: "Short-Term Crop Loans",
    description:
      "Seasonal agricultural loans designed to cover cultivation expenses including seeds, fertilizers, labor, and irrigation costs. These loans help farmers manage their working capital needs during the crop cycle.",
    category: "Agricultural",
    eligibility: [
      "Active PACS member with valid membership",
      "Land ownership or lease documents",
      "Previous loan repayment history (if applicable)",
      "Cultivation plan and crop details",
      "No overdues in existing loans",
    ],
    documents: [
      "PACS membership card and passbook",
      "Land records (Patta, Chitta, Adangal)",
      "Aadhaar card and PAN card",
      "Bank account details",
      "Crop cultivation plan",
      "Previous loan closure certificates (if any)",
    ],
    loanAmount: "Up to ₹3,00,000 per acre (varies by crop and season)",
    interestRate: "4% to 7% per annum (after interest subsidy of 2-3%)",
    tenure: "3 to 12 months (based on crop duration)",
    features: [
      "Quick loan processing within 7-15 days",
      "Interest subsidy of 2-3% for prompt repayment",
      "Flexible repayment after harvest",
      "No collateral required for loans up to ₹1.6 lakh",
      "Crop insurance linkage available",
      "Scale of finance as per district guidelines",
      "Revolving credit facility option",
      "Emergency weather-related extensions",
    ],
    benefits: [
      "Timely credit availability during sowing season",
      "Reduced interest burden through subsidies",
      "No need to approach private moneylenders",
      "Insurance protection against crop failure",
      "Builds credit history for future loans",
      "Access to agricultural advisory services",
    ],
    process: [
      "Visit your nearest PACS office with required documents",
      "Fill loan application form with crop details",
      "Submit land records and membership documents",
      "Loan committee verification and field inspection",
      "Loan sanction and agreement signing",
      "Amount disbursed to bank account or cash",
      "Repayment after harvest or as per schedule",
    ],
  },
  "medium-term-agricultural-loans": {
    name: "Medium-Term Agricultural Loans",
    description:
      "Loans for farm development activities, purchase of agricultural equipment, minor irrigation projects, and land improvement. These loans support farmers in enhancing farm productivity and infrastructure.",
    category: "Agricultural",
    eligibility: [
      "Active PACS membership for at least 6 months",
      "Ownership of agricultural land",
      "Viable project proposal for farm development",
      "Repayment capacity assessment",
      "Clear land title and no legal disputes",
    ],
    documents: [
      "PACS membership proof and share capital",
      "Complete land records and survey numbers",
      "Project report with cost estimates",
      "Quotations for equipment/materials",
      "Income proof and bank statements",
      "Collateral documents (if loan above ₹5 lakh)",
      "Insurance documents for assets",
    ],
    loanAmount: "₹50,000 to ₹10,00,000 (based on project viability)",
    interestRate: "7% to 10% per annum",
    tenure: "2 to 5 years with flexible repayment options",
    features: [
      "Covers drip irrigation, farm pond, borewell",
      "Purchase of power tillers, pump sets, sprayers",
      "Subsidy linkage with government schemes",
      "Moratorium period of 6-12 months available",
      "Annual or seasonal repayment options",
      "Part prepayment allowed without penalty",
      "Technical guidance from agricultural officers",
      "Equipment insurance facilitation",
    ],
    benefits: [
      "Modernize farm with latest technology",
      "Increase crop yield and farm income",
      "Reduce dependency on monsoon with irrigation",
      "Qualify for government subsidy programs",
      "Improve overall farm infrastructure",
      "Long repayment period eases cash flow",
    ],
    process: [
      "Prepare detailed project proposal with estimates",
      "Submit application with technical feasibility",
      "PACS inspection and project evaluation",
      "Collateral valuation and documentation",
      "Loan sanction by board of directors",
      "Disbursement in installments as per work progress",
      "Quarterly/half-yearly repayment as agreed",
    ],
  },
  "long-term-farm-development": {
    name: "Long-Term Farm Development Loans",
    description:
      "Comprehensive financing for major farm infrastructure projects including land leveling, farm mechanization, permanent structures, plantation crops, and sustainable agricultural practices.",
    category: "Development",
    eligibility: [
      "Established PACS member with good track record",
      "Substantial land holding for project viability",
      "Detailed development plan with ROI projection",
      "Strong financial position and repayment capacity",
      "Willingness to provide adequate collateral",
    ],
    documents: [
      "Comprehensive project report with feasibility",
      "Complete land ownership documents",
      "Collateral valuation reports",
      "Income tax returns (if applicable)",
      "Bank statements for last 12 months",
      "Government scheme approval (if seeking subsidy)",
      "Environmental clearances (if required)",
      "Insurance proposals for assets",
    ],
    loanAmount: "₹5,00,000 to ₹25,00,000 (project-based)",
    interestRate: "8% to 11% per annum",
    tenure: "5 to 15 years with structured repayment",
    features: [
      "Financing for farm mechanization and automation",
      "Support for horticulture and plantation crops",
      "Construction of farm buildings and storage",
      "Installation of solar power systems",
      "Development of integrated farming systems",
      "Long moratorium period up to 2 years",
      "Flexible EMI or seasonal payment options",
      "Government subsidy coordination and assistance",
    ],
    benefits: [
      "Transform traditional farming to modern agriculture",
      "Significant increase in long-term farm productivity",
      "Diversification into high-value crops",
      "Sustainable income generation for 10-15 years",
      "Energy independence through solar installation",
      "Value addition through processing units",
    ],
    process: [
      "Consult with PACS for project planning",
      "Prepare detailed project report with technical support",
      "Submit comprehensive application with all documents",
      "Multiple site visits and technical evaluation",
      "Collateral assessment by approved valuers",
      "Loan approval by regional cooperative bank",
      "Stage-wise disbursement linked to project milestones",
      "Long-term repayment schedule creation",
    ],
  },
  "jewel-gold-loan": {
    name: "Jewel/Gold Loan",
    description:
      "Secured loans against gold ornaments and jewelry providing quick liquidity for agricultural, personal, or business needs. A simple, safe, and fast way to get credit without selling assets.",
    category: "Personal",
    eligibility: [
      "PACS membership (can be new member)",
      "Valid photo identification",
      "Ownership of gold ornaments (18-22 carat)",
      "No restrictions on loan purpose",
      "Age: 18-70 years",
    ],
    documents: [
      "PACS membership card or instant enrollment",
      "Aadhaar card and one additional ID proof",
      "PAN card (for loans above ₹50,000)",
      "Gold ornaments for pledging",
      "Address proof",
      "Passport-size photographs",
    ],
    loanAmount: "Up to 75% of gold value (₹5,000 to ₹10,00,000)",
    interestRate: "8% to 12% per annum (lowest in market)",
    tenure: "3 months to 12 months (renewable)",
    features: [
      "Instant loan approval within 30 minutes",
      "No income proof or guarantor required",
      "Transparent gold valuation with customer presence",
      "Safe custody of gold in bank-grade lockers",
      "Part payment and prepayment options",
      "Renewal facility on interest payment",
      "No hidden charges or processing fees",
      "Agricultural loans at concessional rates",
    ],
    benefits: [
      "Immediate cash during emergencies",
      "Retain gold ownership - get it back on repayment",
      "Lower interest rates than private lenders",
      "Flexible repayment options",
      "No need to sell precious family jewelry",
      "Transparent and safe process",
    ],
    process: [
      "Visit PACS office with gold ornaments and ID",
      "Gold purity tested with electronic tester",
      "Valuation based on current market rate",
      "Loan amount sanctioned (up to 75% of value)",
      "Pledge agreement and receipt issued",
      "Amount disbursed immediately in cash/account",
      "Repay with interest to release gold ornaments",
    ],
  },
  "self-help-group-shg-loans": {
    name: "Self-Help Group (SHG) Loans",
    description:
      "Credit support for women's Self-Help Groups and joint liability groups to promote micro-enterprises, livelihood activities, and financial inclusion in rural areas.",
    category: "Group",
    eligibility: [
      "Registered SHG with minimum 10-20 members",
      "Regular group meetings and savings for 6 months",
      "Proper bookkeeping and minutes maintenance",
      "Group linked with PACS or bank",
      "Good track record of internal lending",
    ],
    documents: [
      "SHG registration certificate",
      "Minutes book and attendance records",
      "Passbook showing regular savings",
      "Group resolution for loan application",
      "Member list with Aadhaar and photos",
      "Utilization certificate of previous loans",
      "Income generation activity proposal",
    ],
    loanAmount: "₹50,000 to ₹10,00,000 per group (4x to 10x savings)",
    interestRate: "6% to 9% per annum (subsidized rates)",
    tenure: "1 to 3 years with weekly/monthly repayment",
    features: [
      "Collateral-free loans based on group guarantee",
      "Loan limit increases with savings growth",
      "Support for micro-enterprises and livelihoods",
      "Training and capacity building programs",
      "Linkage with government schemes (NRLM, DAY-NULM)",
      "Insurance coverage for members",
      "Financial literacy and skill development",
      "Federation-level credit access",
    ],
    benefits: [
      "Women's economic empowerment and independence",
      "Access to formal credit without collateral",
      "Group support reduces default risk",
      "Regular savings habit development",
      "Skill training and business mentoring",
      "Social cohesion and community development",
    ],
    process: [
      "Form SHG with 10-20 women from same community",
      "Register with PACS and open savings account",
      "Conduct regular meetings and maintain records",
      "Build savings corpus for 6 months",
      "Submit loan application with activity proposal",
      "PACS evaluation of group performance",
      "Loan sanctioned to group bank account",
      "Weekly/monthly repayment by group members",
    ],
  },
  "kisan-credit-card-kcc": {
    name: "Kisan Credit Card (KCC)",
    description:
      "Revolving credit facility providing flexible working capital for agricultural operations, allowing farmers to withdraw funds as needed throughout the year without repeated applications.",
    category: "Agricultural",
    eligibility: [
      "Farmers - owner cultivators and tenant farmers",
      "Oral lessees and sharecroppers",
      "SHGs or joint liability groups of farmers",
      "Cultivating land with valid documents",
      "Good credit history preferred",
    ],
    documents: [
      "KCC application form duly filled",
      "Land ownership or lease documents",
      "Aadhaar card and PAN card",
      "Passport-size photographs",
      "Bank account details (preferably same branch)",
      "Crop cultivation details and season plan",
      "Previous loan documents (if any)",
    ],
    loanAmount: "Up to ₹3,00,000 (can be higher based on land holding)",
    interestRate: "4% per annum (with 3% interest subvention and 2% prompt repayment incentive)",
    tenure: "5 years validity with annual review and renewal",
    features: [
      "Revolving credit - withdraw as per requirement",
      "Single application for 5-year credit facility",
      "Interest charged only on utilized amount",
      "Covers crop cultivation, post-harvest expenses",
      "Allied activities like dairy, fisheries included",
      "ATM/debit card facility for easy access",
      "Insurance coverage for crop and personal accident",
      "Hassle-free renewal process",
    ],
    benefits: [
      "Flexibility to use credit as per cash flow needs",
      "Lowest interest rate (effective 4% only)",
      "No need for repeated loan applications",
      "Built-in insurance protection",
      "Convenient cash withdrawal through ATM",
      "Promotes timely agricultural operations",
    ],
    process: [
      "Apply at PACS with land and identity documents",
      "Credit limit fixed based on scale of finance",
      "KCC issued with passbook and ATM card",
      "Withdraw funds as needed from PACS or ATM",
      "Repay after harvest or as per crop cycle",
      "Annual renewal on interest payment",
      "Credit limit can be enhanced based on performance",
    ],
  },
  "farm-machinery-loan": {
    name: "Farm Machinery Loan",
    description:
      "Specialized financing for purchase of agricultural machinery including tractors, harvesters, threshers, rotavators, and other mechanized equipment to enhance farm productivity.",
    category: "Equipment",
    eligibility: [
      "Farmers with sufficient land holding (2+ acres)",
      "PACS members in good standing",
      "Repayment capacity from farm income",
      "Age: 21-65 years",
      "Willingness to provide equipment hypothecation",
    ],
    documents: [
      "Loan application with machinery details",
      "Land documents (Patta, Chitta)",
      "Quotation from authorized dealer",
      "PACS membership and share capital proof",
      "Income proof and bank statements",
      "Aadhaar, PAN, and address proof",
      "Guarantor documents (if required)",
      "Insurance proposal for machinery",
    ],
    loanAmount: "Up to 85% of machinery cost (balance 15% margin money)",
    interestRate: "9% to 12% per annum",
    tenure: "5 to 7 years with equated monthly installments",
    features: [
      "Finance for new tractors, harvesters, combines",
      "Coverage for attachments and implements",
      "Subsidy linkage under government schemes",
      "Comprehensive insurance arrangement",
      "Flexible down payment options",
      "Extended warranty can be financed",
      "Direct payment to dealer available",
      "Additional working capital facility",
    ],
    benefits: [
      "Mechanize farming operations efficiently",
      "Reduce labor dependency and costs",
      "Complete timely agricultural operations",
      "Additional income through custom hiring",
      "Qualify for government subsidy (up to 50%)",
      "Enhance farm productivity significantly",
    ],
    process: [
      "Select machinery and get quotation from dealer",
      "Apply to PACS with required documents",
      "Land and income verification by PACS",
      "Loan sanction subject to margin contribution",
      "Execute hypothecation and loan agreement",
      "Amount paid directly to dealer or farmer",
      "Machinery insured with PACS as beneficiary",
      "Monthly EMI repayment from farm income",
    ],
  },
  "micro-enterprise-loans": {
    name: "Micro-enterprise Loans",
    description:
      "Support for small businesses and rural enterprises including retail shops, food processing units, handicrafts, services, and other non-farm income generating activities.",
    category: "Business",
    eligibility: [
      "PACS member planning to start/expand business",
      "Viable business plan with market potential",
      "Age: 21-60 years",
      "Basic business experience or training",
      "Adequate space for business operation",
    ],
    documents: [
      "Business plan with project report",
      "PACS membership certificate",
      "Aadhaar, PAN, and address proof",
      "Business registration (if applicable)",
      "Quotations for equipment/inventory",
      "Property documents for business premises",
      "Income proof of household",
      "Guarantor details (if loan above ₹5 lakh)",
    ],
    loanAmount: "₹10,000 to ₹10,00,000 (based on project viability)",
    interestRate: "10% to 13% per annum",
    tenure: "1 to 5 years with monthly/quarterly repayment",
    features: [
      "Working capital and term loan facility",
      "Equipment purchase and shop setup",
      "Inventory and raw material funding",
      "Technology and machinery financing",
      "Marketing and expansion support",
      "Skill training and business mentoring",
      "Linkage with government enterprise schemes",
      "Group entrepreneurship support",
    ],
    benefits: [
      "Alternative income source beyond agriculture",
      "Employment generation for family members",
      "Utilize local resources and skills",
      "Economic independence and growth",
      "Community development through services",
      "Seasonal income stability",
    ],
    process: [
      "Develop business idea and prepare simple plan",
      "Attend PACS entrepreneur orientation program",
      "Submit application with project details",
      "PACS evaluation of business viability",
      "Provide necessary collateral or guarantee",
      "Loan sanctioned and disbursed in stages",
      "Start business operations with PACS support",
      "Repay from business income as scheduled",
    ],
  },
  "tractor-loan": {
    name: "Tractor Loan",
    description:
      "Dedicated financing scheme for purchase of new tractors (various HP models) with attractive interest rates and flexible repayment options, enabling farm mechanization.",
    category: "Equipment",
    eligibility: [
      "Farmers with minimum 3 acres agricultural land",
      "Active PACS membership",
      "Age between 21-60 years",
      "No existing tractor loan with other institutions",
      "Adequate income for EMI repayment",
    ],
    documents: [
      "Tractor loan application form",
      "Land records showing ownership (minimum 3 acres)",
      "Aadhaar card, PAN card, voter ID",
      "PACS membership proof and passbook",
      "Proforma invoice from authorized dealer",
      "Income certificates and bank statements",
      "Passport-size photographs",
      "Co-applicant/guarantor documents (if required)",
    ],
    loanAmount: "Up to ₹15,00,000 (85-90% of on-road price)",
    interestRate: "9.5% to 12% per annum",
    tenure: "7 years with monthly EMI or seasonal payment",
    features: [
      "Finance for all major tractor brands (Mahindra, John Deere, Sonalika, etc.)",
      "Coverage from 30 HP to 60 HP models",
      "Government subsidy coordination (up to 50%)",
      "Hypothecation of tractor to PACS",
      "Comprehensive insurance included in loan",
      "Direct dealer payment facility",
      "Implement and trailer financing available",
      "Pre-approved loan for existing members",
    ],
    benefits: [
      "Own tractor with minimum investment",
      "Timely farm operations without hiring",
      "Additional income through custom hiring",
      "Reduce cultivation costs long-term",
      "Qualify for 25-50% government subsidy",
      "Build asset ownership and credit history",
    ],
    process: [
      "Visit PACS and discuss tractor financing options",
      "Select tractor model and get dealer quotation",
      "Submit application with land and income documents",
      "Pay margin money (10-15% of tractor cost)",
      "Loan sanctioned after verification",
      "Purchase tractor with loan amount",
      "Register with hypothecation to PACS",
      "Repay monthly EMI from farm/hire income",
    ],
  },
  "dairy-livestock-loan": {
    name: "Dairy / Livestock Loan",
    description:
      "Financing for purchase of milch animals (cows, buffaloes), goats, poultry, and related infrastructure for dairy farming and livestock rearing activities.",
    category: "Livestock",
    eligibility: [
      "PACS members interested in dairy/livestock",
      "Basic animal husbandry knowledge or training",
      "Adequate space and facilities for animals",
      "Age: 21-60 years",
      "Veterinary support availability in area",
    ],
    documents: [
      "Livestock loan application with animal details",
      "PACS membership certificate",
      "Land/shed availability proof",
      "Quotation for animals from registered vendors",
      "Identity proof (Aadhaar, PAN)",
      "Income and bank account details",
      "Veterinary health certificate for animals",
      "Insurance proposal for livestock",
    ],
    loanAmount: "₹50,000 to ₹5,00,000 (varies by livestock type and quantity)",
    interestRate: "8% to 11% per annum",
    tenure: "3 to 5 years with flexible repayment",
    features: [
      "Finance for high-yielding milch cows/buffaloes",
      "Goat/sheep rearing units (10-50 animals)",
      "Poultry farming (layers and broilers)",
      "Cattle shed construction and equipment",
      "Feed storage and chaff cutter financing",
      "Livestock insurance coverage mandatory",
      "Veterinary care and vaccination support",
      "Milk collection center linkage assistance",
    ],
    benefits: [
      "Regular monthly income from milk sales",
      "Organic manure for own farming",
      "Nutrition security through milk and eggs",
      "Employment for family members",
      "Low-risk income diversification",
      "Government subsidy for women and SC/ST",
    ],
    process: [
      "Attend dairy farming orientation at PACS",
      "Select quality animals with veterinary advice",
      "Apply with animal purchase quotation",
      "Arrange cattle shed and basic facilities",
      "Loan sanctioned after field verification",
      "Purchase animals and get insurance",
      "Link with milk cooperative or dairy",
      "Repay loan from milk sale proceeds",
    ],
  },
  "rural-housing-loan": {
    name: "Rural Housing Loan",
    description:
      "Affordable housing finance for construction, renovation, or expansion of residential houses in rural areas with linkage to government housing schemes like PM Awas Yojana.",
    category: "Housing",
    eligibility: [
      "PACS member with minimum 1 year membership",
      "Ownership of residential plot/land",
      "Income proof showing repayment capacity",
      "Age: 21-60 years at loan commencement",
      "No existing housing loan",
      "Priority for EWS/LIG/BPL families",
    ],
    documents: [
      "Housing loan application form",
      "Plot ownership documents (sale deed, patta)",
      "Building plan approval from panchayat/municipality",
      "Cost estimate from approved contractor",
      "PACS membership and share capital proof",
      "Income certificate and bank statements",
      "Aadhaar, PAN, and address proof",
      "PM Awas Yojana application (if applicable)",
    ],
    loanAmount: "₹2,00,000 to ₹10,00,000 (based on income and scheme)",
    interestRate: "8.5% to 10.5% per annum",
    tenure: "10 to 15 years with equated monthly installments",
    features: [
      "New house construction financing",
      "Renovation and expansion of existing house",
      "Linkage with PM Awas Yojana (₹1.2 lakh subsidy)",
      "Toilet and sanitation facility inclusion",
      "Solar and rainwater harvesting integration",
      "Stage-wise disbursement linked to construction",
      "Flexible repayment during construction (interest only)",
      "Life insurance coverage for loan security",
    ],
    benefits: [
      "Own pucca house with modern amenities",
      "Government subsidy up to ₹1.2 lakh",
      "Long tenure reduces EMI burden",
      "Better living standards for family",
      "Asset creation and social security",
      "Tax benefits on interest payment",
    ],
    process: [
      "Check eligibility under PM Awas Yojana",
      "Get building plan approved by local authority",
      "Apply to PACS with estimates and documents",
      "Property valuation and legal verification",
      "Loan sanctioned with mortgage creation",
      "First disbursement for foundation work",
      "Stage-wise release as construction progresses",
      "Final disbursement on completion certificate",
    ],
  },
  "consumption-loan": {
    name: "Consumption Loan",
    description:
      "Personal loans for household expenses, medical emergencies, education, marriages, festivals, and other personal consumption needs of PACS members.",
    category: "Personal",
    eligibility: [
      "PACS member with minimum 6 months membership",
      "Regular savings track record in PACS",
      "Age: 21-65 years",
      "Income source for repayment",
      "No major overdues in existing loans",
    ],
    documents: [
      "Simple loan application form",
      "PACS membership proof and passbook",
      "Aadhaar card and one more ID proof",
      "Income proof (salary slip, pension order, etc.)",
      "Purpose declaration (medical, education, etc.)",
      "Guarantor with PACS membership (for loans above ₹50,000)",
      "Property documents (if collateral required)",
    ],
    loanAmount: "₹10,000 to ₹1,00,000 (up to ₹2 lakh for salaried)",
    interestRate: "11% to 14% per annum",
    tenure: "6 months to 3 years",
    features: [
      "Quick processing within 2-3 days",
      "Minimal documentation required",
      "Medical emergency priority processing",
      "Education loan for children's studies",
      "Marriage and festival advance",
      "Appliance and consumer durable purchase",
      "No end-use verification for small loans",
      "Salaried members get higher limits",
    ],
    benefits: [
      "Avoid private moneylenders and high interest",
      "Meet urgent household needs immediately",
      "Preserve savings and fixed deposits",
      "Build credit history with PACS",
      "Access to formal financial system",
      "Dignified borrowing from own cooperative",
    ],
    process: [
      "Visit PACS office with identity and income proof",
      "Fill simple application mentioning purpose",
      "Provide guarantor details (if required)",
      "Same-day or next-day approval for members",
      "Amount disbursed to bank account or cash",
      "Repay through monthly installments",
      "Loan closure certificate issued on full payment",
    ],
  },
  "emergency-loan": {
    name: "Emergency Loan",
    description:
      "Urgent financial assistance for PACS members facing unforeseen circumstances like natural calamities, accidents, hospitalization, crop failure, or sudden family emergencies.",
    category: "Emergency",
    eligibility: [
      "Active PACS member (even new members considered)",
      "Genuine emergency situation verified",
      "Age: 18-70 years",
      "Willingness to repay based on capacity",
      "Priority for distressed farmers and vulnerable groups",
    ],
    documents: [
      "Emergency loan application (simplified)",
      "PACS membership or instant enrollment",
      "Aadhaar card (sufficient as sole document)",
      "Emergency proof (medical bills, calamity certificate)",
      "Self-declaration of financial distress",
      "Village officer recommendation (helpful but not mandatory)",
    ],
    loanAmount: "₹5,000 to ₹50,000 (higher for severe cases)",
    interestRate: "8% to 12% per annum (concessional for calamities)",
    tenure: "3 to 12 months (extendable based on circumstances)",
    features: [
      "Same-day approval and disbursement",
      "Minimal documentation and verification",
      "No collateral or guarantor required",
      "Interest waiver consideration for calamities",
      "Flexible repayment based on recovery capacity",
      "Conversion to long-term loan if needed",
      "Member welfare priority over procedure",
      "Disaster relief coordination with government",
    ],
    benefits: [
      "Immediate cash during crisis situations",
      "Avoid distress sale of assets",
      "Cooperative support during difficult times",
      "Interest relief in genuine hardship",
      "Quick recovery from setbacks",
      "Social safety net through cooperative",
    ],
    process: [
      "Contact PACS immediately with emergency details",
      "Submit brief application with available documents",
      "Emergency committee evaluation (fast-track)",
      "Same-day or next-day sanction",
      "Immediate disbursement in cash/account",
      "Repay when situation normalizes",
      "Restructuring or relief considered if distress continues",
    ],
  },
}

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

export default function LoanSchemePage({ params }: { params: { slug: string } }) {
  const loan = loanData[params.slug]

  if (!loan) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link href="/#loans">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Loan Schemes
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className={`${categoryColors[loan.category]} mb-4`}>
              {loan.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">{loan.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{loan.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IndianRupee className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Loan Amount</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">{loan.loanAmount}</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Info className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Interest Rate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">{loan.interestRate}</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-chart-3/10">
                    <Calendar className="h-5 w-5 text-chart-3" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Loan Tenure</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">{loan.tenure}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Eligibility Criteria */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Eligibility Criteria</h2>
              </div>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    {loan.eligibility.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Required Documents */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Required Documents</h2>
              </div>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {loan.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{doc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {loan.features.map((feature, idx) => (
                  <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Benefits</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-3">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Application Process</h2>
              <div className="relative">
                {/* Vertical line for desktop */}
                <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-6">
                  {loan.process.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                        {idx + 1}
                      </div>
                      <Card className="flex-1 border-border">
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground leading-relaxed">{step}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Visit your nearest PACS office or contact us for more information about {loan.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#search">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Find Nearest PACS
                  </Button>
                </Link>
                <Link href="/#loans">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30"
                  >
                    View Other Schemes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
