"use client";

import { useState } from "react";
import ServiceCard from "@/components/Services/ServiceCard";
import ServiceForm from "@/components/Form/ServiceForm";
import { services } from "@/data/services";

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  const openForm = (service: (typeof services)[0]) =>
    setSelectedService(service);
  const closeForm = () => setSelectedService(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            console.log("Отправка данных:", formData);
            try {
              await fetch("/api/send-telegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });
              alert("Заявка успешно отправлена!");
            } catch (error) {
              alert("Ошибка при отправке заявки.");
            }
            closeForm();
          }}
        />
      )}
    </div>
  );
};

export default ServicesList;
