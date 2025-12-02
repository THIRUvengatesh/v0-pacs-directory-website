"use client"

import { useState } from "react"
import { Search, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SearchDirectory() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <section id="search" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Search PACS Directory</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Find your nearest Primary Agricultural Cooperative Society by district, taluk, or village
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter district, taluk, or village name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>

          {/* Filter Options */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              All Services
            </Button>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              <MapPin className="w-4 h-4 mr-2" />
              Near Me
            </Button>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              Crop Loans
            </Button>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              KCC Available
            </Button>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              Fertilizer Supply
            </Button>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              Tractor Rental
            </Button>
          </div>
        </div>

        {/* Sample PACS Profile Cards */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-foreground">Sample PACS Profiles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">Active</Badge>
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Coimbatore Urban PACS</CardTitle>
                <p className="text-sm text-muted-foreground">Taluk: Coimbatore North | District: Coimbatore</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Crop Loans
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        KCC
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Gold Loan
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Fertilizers
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Contact:</p>
                    <p className="text-sm text-muted-foreground">Phone: 0422-2345678</p>
                    <p className="text-sm text-muted-foreground">Email: cbepacs@tn.gov.in</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Full Details
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">Active</Badge>
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Madurai Central PACS</CardTitle>
                <p className="text-sm text-muted-foreground">Taluk: Madurai East | District: Madurai</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        All Loans
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Tractor Rental
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PDS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Seeds
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Contact:</p>
                    <p className="text-sm text-muted-foreground">Phone: 0452-3456789</p>
                    <p className="text-sm text-muted-foreground">Email: mdurapacs@tn.gov.in</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Full Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
