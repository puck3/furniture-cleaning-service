import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

import "@/styles/globals.scss";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Wave: Химчистка мебели",
  description: "Услуги выездной химчистки диванов и мягкой мебели в КМВ",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="mt-[6rem] max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
