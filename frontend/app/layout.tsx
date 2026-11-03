import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Chris Yoon — Senior SDET | Test Automation & Data Quality";
const DESCRIPTION =
  "Senior SDET and Data Quality engineer in Toronto with 10+ years across test automation, data quality, and production reliability. Most recently Data QA Architect at theScore, where I designed the QA regression framework guarding millions of daily transactions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.dev"),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/icon", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://onepercentbetter.dev",
    siteName: "Chris Yoon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chris Yoon — Senior SDET | Test Automation & Data Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
