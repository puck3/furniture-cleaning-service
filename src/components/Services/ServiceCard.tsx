"use client";

import Image from "next/image";

import Service from "@/types/Service";
import CardContentIcon from "./CardContentIcon";
import CardButton from "./CardButton";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="service-card">
      <header className="card-header">
        <Image
          src={service.imageSrc}
          alt={service.title}
          width={300}
          height={300}
          className="card-image"
        />
        <h3>{service.title}</h3>
      </header>

      <div className="card-body">
        <div className="card-icons-wrap">
          <CardContentIcon
            src="/icons/coin.svg"
            title="Стоимость"
            text={service.price}
          />
          <CardContentIcon
            src="/icons/time.svg"
            title="Время чистки"
            text={service.cleaningTime}
          />
        </div>

        <CardButton service={service} />
      </div>
    </div>
  );
};

export default ServiceCard;
