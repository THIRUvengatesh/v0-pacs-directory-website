import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PACS Directory & Digital Information Portal | Tamil Nadu",
  description:
    "Find your nearest Primary Agricultural Cooperative Society (PACS), explore services, loan schemes, deposit schemes, and agricultural support across Tamil Nadu.",
  generator: "v0.app",
  keywords:
    "PACS, Primary Agricultural Cooperative Society, agricultural loans, crop loans, fertilizers, Tamil Nadu, rural development",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
