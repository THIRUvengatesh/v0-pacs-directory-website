import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutPacs } from "@/components/about-pacs"
import { CoreFunctions } from "@/components/core-functions"
import { LoanSchemes } from "@/components/loan-schemes"
import { DepositSchemes } from "@/components/deposit-schemes"
import { PacsServices } from "@/components/pacs-services"
import { SearchDirectory } from "@/components/search-directory"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChoose } from "@/components/why-choose"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutPacs />
      <CoreFunctions />
      <LoanSchemes />
      <DepositSchemes />
      <PacsServices />
      <SearchDirectory />
      <HowItWorks />
      <WhyChoose />
      <Footer />
    </main>
  )
}
