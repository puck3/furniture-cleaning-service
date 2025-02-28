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
  title: {
    default: "FreshWave — профессиональная химчистка мебели в КМВ",
    template: "%s | FreshWave КМВ",
  },
  description:
    "🚚 Выездная химчистка диванов, кресел и автомобильных сидений в Пятигорске и Кавминводах. Гарантия качества ⭐ Эко-средства 💧 Онлайн-запись",
  keywords: [
    "химчистка мебели КМВ",
    "чистка дивана Пятигорск",
    "химчистка авто Минеральные Воды",
    "химчистка ковров Ессентуки",
    "химчистка Железноводск",
  ],
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://furniture-cleaning-service.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://furniture-cleaning-service.vercel.app/",
    siteName: "FreshWave",
    title: "Профессиональная химчистка мебели в Кавминводах",
    description: "Выездная химчистка любой сложности с гарантией результата",
  },
  // verification: {
  //   google: "GOOGLE_VERIFICATION_CODE",
  //   yandex: "YANDEX_VERIFICATION_CODE",
  // },
};

export const viewport: Viewport = {
  themeColor: "#c026d3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="FreshWave" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "FreshWave",
              "image": "/web-app-manifest-192x192.png",
              "priceRange": "₽",
              "telephone": "+7 (996) 630-90-98",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ставропольский край",
                "addressLocality": "Кавказские Минеральные Воды"
              }
            }
         `}
        </script>
      </head>
      <body className={roboto.className} id="root">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
