import { Roboto } from "next/font/google";
import type { Metadata, Viewport } from "next";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "@/styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreshWave — химчистка мебели в КМВ",
  description:
    "Сервис FreshWave предоставляет услуги выездной химчистки мягкой мебели, ковров и ковровых покрытий, салонов автомобилей в КМВ",
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
      <body className={roboto.className} id="root">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
