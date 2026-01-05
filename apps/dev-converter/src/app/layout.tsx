import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/core/theme-provider"
import { ToastProvider } from "@/components/core/toast-provider"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "DevConverter - Free Online Developer Tools",
    template: "%s | DevConverter",
  },
  description:
    "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more. Fast, secure, client-side processing.",
  keywords: [
    "developer tools",
    "json formatter",
    "base64 encoder",
    "jwt decoder",
    "online tools",
    "free tools",
  ],
  authors: [{ name: "DevConverter" }],
  creator: "DevConverter",
  metadataBase: new URL("https://devconverter.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devconverter.dev",
    siteName: "DevConverter",
    title: "DevConverter - Free Online Developer Tools",
    description:
      "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevConverter - Free Online Developer Tools",
    description:
      "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ToastProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
