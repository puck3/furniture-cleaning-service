import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Химчистка мебели",
  description: "Услуги выездной химчистки диванов и мягкой мебели в КМВ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <Header className="min-h-[4rem] md:min-h-[5rem] flex items-center" />
        <main className="pt-[4rem] md:pt-[5rem] max-w-[60%] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
