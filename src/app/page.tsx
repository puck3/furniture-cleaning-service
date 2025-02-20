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

      {/* TODO: move sections inside components */}
      <section id="services">
        <h1>Наши услуги</h1>
        <ServicesList />
      </section>
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
