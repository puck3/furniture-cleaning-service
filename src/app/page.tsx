"use client";

import ExamplesGallery from "@/components/ExamplesGallery";
import FAQ from "@/components/FAQ";
import ServiceInfo from "@/components/Info";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main className="text-gray-900">
      <ServiceInfo />

      {/* TODO: move sections inside components */}
      <section id="services" className="my-[2rem] scroll-mt-[5rem]">
        <h1 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
          Наши услуги
        </h1>
        <ServicesList />
      </section>

      <section id="gallery" className="my-[2rem] scroll-mt-[5rem]">
        <h2 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
          Примеры наших работ
        </h2>
        <ExamplesGallery />
      </section>

      <section id="questions" className="my-[2rem] scroll-mt-[5rem]">
        <h2 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
          Частые вопросы
        </h2>
        <FAQ />
      </section>
    </main>
  );
}
