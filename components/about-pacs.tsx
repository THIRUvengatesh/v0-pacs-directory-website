import { Users, Award, Building2, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutPacs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">About PACS</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Primary Agricultural Cooperative Societies (PACS) are grassroots-level cooperative credit institutions that
            provide financial and agricultural support to farmers and rural communities across Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Members</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Farmers & rural residents enrolled as cooperative members
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">President</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Elected leader who oversees PACS operations and governance
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Secretary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Administrative head managing daily operations and compliance
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Board</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Elected committee making key decisions for the society
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-foreground">PACS Coverage in Tamil Nadu</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PACS serve as the primary institutional source of credit for agricultural operations, providing farmers
                with timely financial assistance for crop cultivation, farm development, and rural welfare.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Registered under Tamil Nadu Cooperative Societies Act</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Funded by NABARD and State Government</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Operating in all 38 districts of Tamil Nadu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Connected to District Central Cooperative Banks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Providing last-mile financial services to villages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
