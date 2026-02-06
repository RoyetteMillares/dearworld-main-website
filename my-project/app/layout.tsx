import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "5ZJiQp-n-lj21UcLVqXWqtIzLInqzqQRQATiB1Gd-AY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn(inter.className, "antialiased min-h-screen flex flex-col")}>
        <Shell>
          {children}
        </Shell>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dear World",
              "url": "https://dearworld.com",
              "logo": "https://dearworld.com/favicon.svg",
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
