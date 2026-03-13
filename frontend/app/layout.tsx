import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.poker"),
  title: "onepercentbetter — Ship small. Learn fast.",
  description:
    "Chris S. Yoon's product studio and funding page: small apps, fast shipping, and one core value repeated daily.",
  openGraph: {
    title: "onepercentbetter — Ship small. Learn fast.",
    description:
      "Small apps, fast learning loops, and a funding page built around one core value: get one percent better.",
    url: "https://onepercentbetter.poker",
    siteName: "onepercentbetter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "onepercentbetter — Ship small. Learn fast.",
    description:
      "Small apps, fast learning loops, and a funding page built around one core value: get one percent better.",
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
