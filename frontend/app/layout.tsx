import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.poker"),
  title: "1% Better — Small apps. Fast loops.",
  description:
    "Chris S. Yoon's product studio: small apps, fast learning loops, and funding for the next season of building.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "1% Better — Small apps. Fast loops.",
    description:
      "A minimal product studio built around one core value: get one percent better, then do it again.",
    url: "https://onepercentbetter.poker",
    siteName: "1% Better",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1% Better — Small apps. Fast loops.",
    description:
      "A minimal product studio built around one core value: get one percent better, then do it again.",
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
