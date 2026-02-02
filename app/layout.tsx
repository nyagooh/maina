import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ann Maina | Product Designer",
  description: "Premium product design portfolio showcasing editorial, minimal, and confident design work.",
  metadataBase: new URL('https://ann-maina.vercel.app'),
  openGraph: {
    title: "Ann Maina | Product Designer",
    description: "Premium product design portfolio showcasing editorial, minimal, and confident design work.",
    url: 'https://ann-maina.vercel.app',
    siteName: "Ann Maina Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ann Maina | Product Designer",
    description: "Premium product design portfolio showcasing editorial, minimal, and confident design work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${figtree.variable} font-body antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
