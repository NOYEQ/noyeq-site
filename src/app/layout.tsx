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
    default: "NOYEQ | Engineering Tomorrow. Building Beyond.",
    template: "%s | NOYEQ"
  },
  description: "NOYEQ is a technology company building custom software, AI-powered solutions, web and mobile applications, internal platforms, and future digital products.",
  keywords: ["NOYEQ", "Custom Software", "Web Applications", "Mobile Applications", "AI Solutions", "Digital Products", "Developer Tools", "Technology Ventures", "Next.js", "TypeScript", ".NET"],
  authors: [{ name: "NOYEQ Team" }],
  creator: "NOYEQ",
  metadataBase: new URL("https://noyeq.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noyeq.com",
    title: "NOYEQ | Engineering Tomorrow. Building Beyond.",
    description: "NOYEQ builds software for clients and creates products, platforms, and technology ventures for the future.",
    siteName: "NOYEQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOYEQ | Engineering Tomorrow. Building Beyond.",
    description: "NOYEQ builds software, creates products, and engineers future technology ventures.",
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
  themeColor: "#0b1020",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-background text-foreground">
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
