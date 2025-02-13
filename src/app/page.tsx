"use client";

import Contacts from "@/components/Contacts";
import ExamplesGallery from "@/components/ExamplesGallery";
import FAQ from "@/components/FAQ";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* <h1 className="my-[2rem] text-xl md:text-2xl lg:text-4xl font-bold text-center">
        Химчистка диванов и мягкой мебели
      </h1> */}

      <section id="services" className="my-[2rem] scroll-mt-[5rem]">
        <h2 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
          Наши услуги
        </h2>
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
