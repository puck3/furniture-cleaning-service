"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  cleaning_time: string;
  drying_time: string;
  price: string;
  image_src: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  cleaning_time,
  drying_time,
  price,
  image_src,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md max-w-xs md:max-w-sm lg:max-w-md mx-auto">
      <Image
        src={image_src}
        alt={title}
        width={400}
        height={300}
        className="w-full rounded-t-lg mb-4"
        layout="intrinsic"
        priority
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="mb-4">
        <li>
          Стоимость: <strong className="font-bold">{price}</strong>
        </li>
        <li>
          Время чистки: <strong className="font-bold">{cleaning_time}</strong>
        </li>
        <li>
          Высыхание: <strong className="font-bold">{drying_time}</strong>
        </li>
      </ul>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Оставить заявку
      </button>
    </div>
  );
};

export default ServiceCard;
