import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Testing Prisma",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter bg-[#0c1222] text-[#c5bcad] px-8 py-12 grid justify-items-center`}
      >
        {children}
      </body>
    </html>
  )
}
