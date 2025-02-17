import AdvantageCard from "./AdvantageCard";

const ServiceInfo = () => {
  return (
    <section id="main" className="my-[2rem] scroll-mt-[6rem] text-center">
      <h1 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
        Профессиональная химчистка мебели
      </h1>
      <p className="max-w-xl mx-auto space-y-4 text-lg text-gray-700 italic">
        Чистая мебель — залог здоровья и комфорта!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <AdvantageCard
          src="/icons/karcher.png"
          alt="Профессиональное оборудование"
          title="Профессиональное оборудование"
          text="Используем технику Karcher Puzzi 10/1 для глубокой чистки."
        />

        <AdvantageCard
          src="/icons/eco-friendly.png"
          alt="Безопасная химия"
          title="Безопасная химия"
          text="Экологичные средства, безопасные для детей и животных."
        />

        <AdvantageCard
          src="/icons/fast-service.png"
          alt="Быстрый выезд"
          title="Выезд в день заказа"
          text="Работаем быстро и аккуратно, без разводов и запахов."
        />

        <AdvantageCard
          src="/icons/guarantee.png"
          alt="Гарантия качества"
          title="Гарантия чистоты"
          text="Удаляем пятна на 95%, очищаем от пыли и аллергенов."
        />
      </div>
    </section>
  );
};

export default ServiceInfo;
