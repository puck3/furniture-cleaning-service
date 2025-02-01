import ImageGallery from "@/components/ImageGallery";
import ServicesList from "@/components/ServicesList";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mt-8 mb-12">
        Химчистка мебели
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Наши услуги
        </h2>
        <ServicesList />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Примеры наших работ
        </h2>
        <ImageGallery />
      </section>
    </main>
  );
}
