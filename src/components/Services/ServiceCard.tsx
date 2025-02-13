"use client";

import Image from "next/image";

interface Service {
  title: string;
  cleaning_time: string;
  drying_time: string;
  price: string;
  image_src: string;
  formFields: string[];
}

const ServiceCard: React.FC<{
  service: Service;
  onOpenForm: (service: Service) => void;
}> = ({ service, onOpenForm }) => {
  return (
    <div className="flex flex-col h-full border p-5 rounded-lg shadow-md w-[100%]">
      <Image
        src={service.image_src}
        alt={service.title}
        width={400}
        height={300}
        className="w-full rounded-t-lg"
      />
      <h3 className="font-semibold text-center text-lg lg:text-xl">
        {service.title}
      </h3>
      <div className="flex-grow"></div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-2">
          <Image
            src="/icons/coin.svg"
            alt="coin"
            width={800}
            height={800}
            className="w-8 h-8"
          />
          <span className="text-sm text-gray-600 mt-1">Стоимость</span>
          <strong className="font-bold">{service.price}</strong>
        </div>

        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-2">
          <Image
            src="/icons/time.svg"
            alt="clock"
            width={800}
            height={800}
            className="w-8 h-8"
          />
          <span className="text-sm text-gray-600 mt-1">Время чистки</span>
          <strong className="font-bold">{service.cleaning_time}</strong>
        </div>
      </div>

      <button
        onClick={() => onOpenForm(service)}
        className="mt-auto w-full bg-fuchsia-600 text-white py-2 px-4 rounded hover:bg-fuchsia-800 transition-colors"
      >
        Оставить заявку
      </button>
    </div>
  );
};

export default ServiceCard;
