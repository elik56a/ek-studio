import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Suspense } from "react"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { ClarityAnalytics } from "@/components/analytics/clarity"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { ThemeProvider } from "@/components/core/theme-provider"
import { ToastProvider } from "@/components/core/toast-provider"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ProgressBar } from "@/components/layout/progress-bar"
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from "@/components/seo/structured-data"
import { siteConfig } from "@/config/site"

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
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
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
  other: {
    "google-adsense-account": "ca-pub-4255869777678191",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
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
        {/* Critical preconnects for performance */}
        <link
          rel="preconnect"
          href="https://va.vercel-scripts.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Structured data - non-blocking */}
        <WebsiteStructuredData />
        <OrganizationStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ToastProvider>
            <ProgressBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </ToastProvider>
        </ThemeProvider>

        {/* Analytics - load after main content */}
        <Suspense fallback={null}>
          <ClarityAnalytics />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
