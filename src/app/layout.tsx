import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FONT from "@/config/font";
import METADATA from "@/config/metadata";
import SCHEMA from "@/config/schema";
import VIEWPORT from "@/config/viewport";

import "@/styles/globals.scss";

const font = FONT;

export const metadata = METADATA;
export const viewport = VIEWPORT;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="FreshWave" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </head>
      <body className={font.className} id="root">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
