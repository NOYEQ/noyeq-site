import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NOYEQ | Ecosystem of Digital Products, AI, and Software Craftsmanship",
    template: "%s | NOYEQ"
  },
  description: "NOYEQ is the parent company behind NQForge and a growing suite of digital products, AI automation tools, mobile applications, and enterprise SaaS solutions.",
  keywords: ["NOYEQ", "NQForge", "Software Studio", "Enterprise Systems", "AI Solutions", "Web Applications", "TypeScript", "Dotnet Core", "UX Design"],
  authors: [{ name: "NOYEQ Team" }],
  creator: "NOYEQ",
  metadataBase: new URL("https://noyeq.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noyeq.com",
    title: "NOYEQ | Building the Future through Software & AI",
    description: "Discover the NOYEQ digital product ecosystem and custom software engineering solutions.",
    siteName: "NOYEQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOYEQ | Building the Future through Software & AI",
    description: "Discover the NOYEQ digital product ecosystem and custom software engineering solutions.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col relative text-white bg-[#030303]">
        {/* Ambient background with grids and glows */}
        <AnimatedBackground />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col pt-24 sm:pt-28 pb-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
