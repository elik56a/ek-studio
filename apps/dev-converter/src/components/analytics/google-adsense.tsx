import Script from "next/script"

export function GoogleAdsense() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "ca-pub-4255869777678191"

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
