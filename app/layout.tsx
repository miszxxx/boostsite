import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hyper Boosts | #1 Discord Shop",
  description:
    "Hyper Boosts is a Discord shop that sells high-quality Discord boosts, tools, and more. We offer a wide range of services to help you grow your community. Vincz Boosts is not affiliated or endorsed by Discord in any way.",
  icons: {
    icon: "logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ed3f75",
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
