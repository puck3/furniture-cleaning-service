import { PHONE_NUMBER, SITE_URL, TG_CHANNEL, VK_PUBLIC } from "@/data/contacts";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "FreshWave",
  description:
    "Выездная химчистка мягкой мебели, автомобилей и ковровых покрытий в КМВ с гарантией результата",
  image: `${SITE_URL}/favicon.svg`,
  openingHours: "Mo-Su",
  telephone: PHONE_NUMBER,
  priceRange: "₽₽",
  areaServed: [
    "Пятигорск",
    "Кисловодск",
    "Ессентуки",
    "Железноводск",
    "Минеральные Воды",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ставропольский край",
    addressLocality: "Кавказские Минеральные Воды",
  },
  url: SITE_URL,
  sameAs: [SITE_URL, VK_PUBLIC, TG_CHANNEL],
};

export default SCHEMA;
