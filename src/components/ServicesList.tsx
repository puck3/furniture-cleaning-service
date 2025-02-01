"use client";

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const ServicesList = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      id="services"
    >
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;
