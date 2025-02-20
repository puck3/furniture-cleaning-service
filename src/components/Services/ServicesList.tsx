"use client";

import ServiceCard from "@/components/Services/ServiceCard";
import services from "@/data/services";

import "@/styles/Services.scss";

const ServicesList = () => {
  return (
    <section id="services">
      <h1>Наши услуги</h1>
      <div className="service-cards-wrap">
        {services.map((service) => (
          <ServiceCard key={"card " + service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
