import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Syne } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AURA Sanctuaries",
    template: "%s · AURA Sanctuaries",
  },
  description:
    "Private architectural sanctuaries and secluded residences for discerning travelers.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${syne.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-dvh bg-background text-on-surface font-body-md text-body-md selection:bg-primary selection:text-on-primary">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
