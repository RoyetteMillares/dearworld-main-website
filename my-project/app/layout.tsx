import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dear World",
  description: "Storytelling that inspires and connects.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dear World",
              "url": "https://dearworld.com",
              "logo": "https://dearworld.com/icon.png",
              "sameAs": [
                "https://www.linkedin.com/company/dearworld",
                "https://www.instagram.com/dearworld",
                "https://www.facebook.com/dearworld"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Global"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
