import { Metadata } from "next";
import * as React from "react";

import "@/styles/globals.css";

import { siteConfig } from "@/constant/config";
import { Providers } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Lines from "@/components/Lines";
import ToasterContext from "@/context/ToastContext";
import { SessionProvider, useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: "Mahfuz",
  },
  authors: [
    {
      name: "Mahfujul Huq",
      url: "https://mahfujulhuq.me",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession(); // Get the session using useSession

  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark:bg-black ">
        <SessionProvider session={session}>
          <Providers>
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
