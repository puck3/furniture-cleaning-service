"use client";

import CartButton from "@/components/Cart/CartButton";
import ExamplesGallery from "@/components/ExamplesGallery";
import FAQ from "@/components/FAQ";
import ServiceInfo from "@/components/Info/Info";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main>
      <ServiceInfo />
      <ServicesList />
      <CartButton />

      <section id="gallery">
        <h1>Примеры наших работ</h1>
        <ExamplesGallery />
      </section>

      <section id="questions">
        <h1>Частые вопросы</h1>
        <FAQ />
      </section>
    </main>
  );
}
