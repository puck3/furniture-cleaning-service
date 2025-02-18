"use client";

import Service from "@/types/Service";
import CardContentIcon from "./CardContentIcon";
import CardHeader from "./CardHeader";
import CardButton from "./CardButton";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="flex flex-col h-full border p-5 rounded-lg shadow-md w-full">
      <CardHeader src={service.image_src} title={service.title} />

      <section className="flex flex-col mt-auto align-end">
        <div className="grid grid-cols-2 gap-4 my-4">
          <CardContentIcon
            src="/icons/coin.svg"
            title="Стоимость"
            text={service.price}
          />
          <CardContentIcon
            src="/icons/time.svg"
            title="Время чистки"
            text={service.cleaning_time}
          />
        </div>

        <CardButton service={service} />
      </section>
    </div>
  );
};

export default ServiceCard;
