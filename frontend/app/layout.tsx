import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.now"),
  title: "1% Better",
  description:
    "Quiet products, fast loops, and a public system for funding, hiring, and compounding better work.",
  icons: {
    icon: [
      { url: "/icon", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  openGraph: {
    title: "1% Better",
    description:
      "Quiet products, fast loops, and a public system for funding, hiring, and compounding better work.",
    url: "https://onepercentbetter.now",
    siteName: "1% Better",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "1% Better — Small apps. Fast loops.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1% Better",
    description:
      "Quiet products, fast loops, and a public system for funding, hiring, and compounding better work.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
