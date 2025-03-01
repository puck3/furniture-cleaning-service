import { PHONE_NUMBER, SITE_URL } from "@/data/contacts";
import { Metadata } from "next";

const METADATA: Metadata = {
  title: {
    default: "FreshWave — химчистка мебели в Пятигорске и КМВ",
    template: "%s | FreshWave КМВ",
  },

  description:
    "🚚 Выездная химчистка диванов, кресел и авто в Пятигорске, Кисловодске, Ессентуках. Гарантия качества ⭐ Экосредства 💧 Онлайн-запись. Работаем 24/7!",

  keywords: [
    "химчистка мебели КМВ",
    "химчистка мебели Пятигорск",
    "химчистка дивана Кисловодск",
    "чистка дивана Пятигорск",
    "химчистка авто Минеральные Воды",
    "химчистка ковров Ессентуки",
    "химчистка Железноводск",
  ],

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${SITE_URL}/`,
    siteName: "FreshWave",
    title: "Профессиональная химчистка мебели в Кавминводах",
    description: "Выездная химчистка любой сложности с гарантией результата",
    phoneNumbers: [PHONE_NUMBER],
  },
};

export default METADATA;
