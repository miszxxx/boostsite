import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zyn Shop | Premium Discord Tools & Nitro Services",
  description:
    "Zyn Shop offers premium Discord tools, Nitro subscriptions, and enhancement services. Secure cryptocurrency payments only. Fast delivery, 24/7 support, and professional service.",
  keywords: "Discord tools, Discord Nitro, cryptocurrency payments, Bitcoin, Ethereum, Discord services, premium tools",
  icons: {
    icon: "logo.png",
  },
  openGraph: {
    title: "Zyn Shop | Premium Discord Tools & Nitro Services",
    description: "Premium Discord tools and Nitro services with secure cryptocurrency payments",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyn Shop | Premium Discord Tools & Nitro Services",
    description: "Premium Discord tools and Nitro services with secure cryptocurrency payments",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4adfb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>{children}</body>
    </html>
  );
}