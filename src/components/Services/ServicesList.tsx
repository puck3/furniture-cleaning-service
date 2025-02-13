"use client";

import { useState } from "react";

import ServiceCard from "@/components/Services/ServiceCard";
import ServiceForm from "@/components/Form/ServiceForm";
import services from "@/data/services";
import submitForm from "@/utils/submitForm";

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  const openForm = (service: (typeof services)[0]) =>
    setSelectedService(service);
  const closeForm = () => setSelectedService(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
          onOpenForm={openForm}
        />
      ))}

      {selectedService && (
        <ServiceForm
          serviceFields={selectedService.formFields}
          onClose={closeForm}
          onSubmit={async (formData) => {
            await submitForm(formData, selectedService.title);
            closeForm();
          }}
        />
      )}
    </div>
  );
};

export default ServicesList;
