import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Tree Removal Oregon | Removal, Trimming & Stump Grinding",
    template: "%s | Tree Removal Oregon",
  },
  description:
    "Licensed, insured tree removal across Portland, Salem, Eugene & Bend. Certified arborists, 24/7 storm response, free estimates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
        <Script
          src="https://cdn.callrail.com/companies/535287687/2de34aa6026659b295f0/12/swap.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
