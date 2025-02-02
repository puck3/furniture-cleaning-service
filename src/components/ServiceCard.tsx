"use client";

import Image from "next/image";

interface Service {
  title: string;
  cleaning_time: string;
  drying_time: string;
  price: string;
  image_src: string;
  formLabels: string[];
}

const ServiceCard: React.FC<{
  service: Service;
  onOpenForm: (service: Service) => void;
}> = ({ service, onOpenForm }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md max-w-xs md:max-w-sm lg:max-w-md mx-auto">
      <Image
        src={service.image_src}
        alt={service.title}
        width={400}
        height={300}
        className="w-full rounded-t-lg mb-4"
        layout="intrinsic"
        priority
      />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <ul className="mb-4">
        <li>
          Стоимость: <strong className="font-bold">{service.price}</strong>
        </li>
        <li>
          Время чистки:{" "}
          <strong className="font-bold">{service.cleaning_time}</strong>
        </li>
        <li>
          Высыхание:{" "}
          <strong className="font-bold">{service.drying_time}</strong>
        </li>
      </ul>
      <button
        onClick={() => onOpenForm(service)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Оставить заявку
      </button>
    </div>
  );
};

export default ServiceCard;
