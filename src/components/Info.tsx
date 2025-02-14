const ServiceInfo = () => {
  return (
    <section id="main" className="my-[2rem] scroll-mt-[6rem]">
      <h1 className="my-[1rem] text-xl md:text-2xl lg:text-3xl font-bold">
        Профессиональная химчистка мебели
      </h1>
      <p className="text-center text-lg mb-6">
        Чистая мебель — залог здоровья и комфорта!
      </p>
      <p className="text-center text-lg mb-6">
        Удаляем пятна, запахи и аллергены с помощью профессионального
        оборудования и безопасной химии.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="/icons/karcher.png"
            alt="Профессиональное оборудование"
            className="w-16 h-16 mb-3"
          />
          <h3 className="text-xl font-semibold">
            Профессиональное оборудование
          </h3>
          <p className="text-sm text-gray-700">
            Используем технику Karcher Puzzi 10/1 для глубокой чистки.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/icons/eco-friendly.png"
            alt="Безопасная химия"
            className="w-16 h-16 mb-3"
          />
          <h3 className="text-xl font-semibold">Безопасная химия</h3>
          <p className="text-sm text-gray-700">
            Экологичные средства, безопасные для детей и животных.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/icons/fast-service.png"
            alt="Быстрый выезд"
            className="w-16 h-16 mb-3"
          />
          <h3 className="text-xl font-semibold">Выезд в день заказа</h3>
          <p className="text-sm text-gray-700">
            Работаем быстро и аккуратно, без разводов и запахов.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/icons/guarantee.png"
            alt="Гарантия качества"
            className="w-16 h-16 mb-3"
          />
          <h3 className="text-xl font-semibold">Гарантия чистоты</h3>
          <p className="text-sm text-gray-700">
            Удаляем пятна на 95%, очищаем от пыли и аллергенов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
