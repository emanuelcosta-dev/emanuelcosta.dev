import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emanuel Costa",
  description: "Web Developer",
  metadataBase: new URL("https://emanuelcosta.dev"),
  openGraph: {
    title: "Emanuel Costa",
    description: "Web Developer",
    url: "https://emanuelcosta.dev",
    siteName: "Emanuel Costa",
    images: [
      {
        url: "https://www.emanuelcosta.dev/meta/meta-tags.png",
        width: 1200,
        height: 628,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Costa",
    description: "Web Developer",
    images: "https://www.emanuelcosta.dev/meta/meta-tags.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background dark:bg-background text-primary min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="flex-grow">
            <div className="mx-auto max-w-[700px] px-6 py-16 md:px-6 md:py-24">
              {children}
            </div>
          </main>
          <div className="w-full bg-background">
            <div className="mx-auto px-6">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
