import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ClarityAnalytics } from "@/components/analytics/clarity"
import { GoogleAdsense } from "@/components/analytics/google-adsense"
import { ThemeProvider } from "@/components/core/theme-provider"
import { ToastProvider } from "@/components/core/toast-provider"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { WebsiteStructuredData, OrganizationStructuredData } from "@/components/seo/structured-data"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
  adjustFontFallback: true,
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
    "web developer",
    "programming tools",
    "code formatter",
    "text converter",
  ],
  authors: [{ name: "DevConverter" }],
  creator: "DevConverter",
  publisher: "DevConverter",
  metadataBase: new URL("https://devconverter.dev"),
  alternates: {
    canonical: "https://devconverter.dev",
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/apple-icon",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devconverter.dev",
    siteName: "DevConverter",
    title: "DevConverter - Free Online Developer Tools",
    description:
      "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DevConverter - Free Online Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevConverter - Free Online Developer Tools",
    description:
      "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more.",
    images: ["/opengraph-image"],
    creator: "@devconverter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        {/* Preconnect to Vercel Analytics - saves 340ms on LCP */}
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ToastProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
        <GoogleAdsense />
        <ClarityAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
