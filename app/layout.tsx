import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport configuration (Next.js 15+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E31E24" },
    { media: "(prefers-color-scheme: dark)", color: "#E31E24" }
  ],
};

export const metadata: Metadata = {
  title: "Geostick HR Assistent",
  description: "Intelligente HR assistent voor Geostick medewerkers. Stel vragen over HR beleid, vakantiedagen, CAO, ziekteverlof en meer.",
  applicationName: "Geostick HR Assistent",
  authors: [{ name: "Geostick" }],
  generator: "Next.js",
  keywords: ["Geostick", "HR", "Assistent", "Vakantiedagen", "CAO", "Ziekteverlof", "Personeelsgids"],
  referrer: "origin-when-cross-origin",
  creator: "Geostick",
  publisher: "Geostick",
  robots: "index, follow",
  metadataBase: new URL("https://geostickqabot-hr-v1.vercel.app"),

  // Manifest
  manifest: "/manifest.json",

  // Apple iOS specific
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Geostick HR",
    startupImage: [
      {
        url: "/icons/apple-touch-icon.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      }
    ]
  },

  // Icons
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/icon-192x192.png"
      }
    ]
  },

  // Format detection (disable auto-detection for better control)
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://geostickqabot-hr-v1.vercel.app",
    siteName: "Geostick HR Assistent",
    title: "Geostick HR Assistent",
    description: "Intelligente HR assistent voor Geostick medewerkers. Stel vragen over HR beleid, vakantiedagen, CAO, ziekteverlof en meer.",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Geostick HR Assistent"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
