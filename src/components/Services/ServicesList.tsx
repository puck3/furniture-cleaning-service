"use client";

import { useState } from "react";

import ServiceCard from "@/components/Services/ServiceCard";
import ServiceForm from "@/components/Form/ServiceForm";
import { services } from "@/data/services";

const submitForm = async (
  formData: Record<string, string>,
  serviceTitle: string
) => {
  console.log("Отправка данных:", formData);

  const formattedMessage = Object.entries(formData)
    .filter(([_, value]) => value && value.trim() !== "")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const message = `Услуга: ${serviceTitle}\n${formattedMessage}`;

  try {
    const response = await fetch("https://api.telegram.org/bot/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "111111111",
        text: message,
      }),
    });

    if (response.ok) {
      alert("Заявка успешно отправлена!");
    } else {
      throw new Error("Ошибка при отправке заявки.");
    }
  } catch (error) {
    alert("Ошибка при отправке заявки.");
    console.error(error);
  }
};

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
            await submitForm(formData, selectedService.title);
            closeForm();
          }}
        />
      )}
    </div>
  );
};

export default ServicesList;
