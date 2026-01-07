import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevConverter - Free Online Developer Tools",
    short_name: "DevConverter",
    description:
      "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more. Fast, secure, client-side processing.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
