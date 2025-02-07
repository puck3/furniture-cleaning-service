"use client";

import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main>
      {/* <h1
        className="pt-[4rem] scroll-mt-[4rem] text-2xl md:text-4xl font-bold text-center text-gray-900 my-8"
        id="top"
      >
        Профессиональная химчистка диванов и мягкой мебели
      </h1> */}

      <section id="services" className="my-8 pt-[4rem] scroll-mt-[4rem]">
        {/* <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
          Наши услуги
        </h2> */}
        <ServicesList />
      </section>

      <section id="gallery" className="pt-[2rem] scroll-mt-[4rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Примеры наших работ
        </h2>
        <ImageGallery />
      </section>

      <section id="questions" className="pt-[2rem] scroll-mt-[4rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Частые вопросы
        </h2>
        <FAQ />
      </section>

      <section id="contacts" className="pt-[2rem] scroll-mt-[4rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Связаться со специалистом
        </h2>
        <Contacts />
      </section>
    </main>
  );
}
