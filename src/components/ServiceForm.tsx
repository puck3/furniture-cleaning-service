"use client";

import { useState, useEffect } from "react";
import FormField from "./FormField";
import FormButtons from "./FormButtons";

interface ServiceFormProps {
  formLabels: string[];
  serviceTitle: string;
  onClose: () => void;
  onSubmit: (formData: Record<string, string>) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  formLabels,
  serviceTitle,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const requiredFields: {
    label: string;
    required: boolean;
    type: "text" | "tel";
  }[] = [
    { label: "Имя", required: true, type: "text" },
    { label: "Номер телефона", required: true, type: "tel" },
    { label: "Адрес", required: true, type: "text" },
  ];

  const allFields: {
    label: string;
    required: boolean;
    type: "text" | "tel";
  }[] = [
    ...requiredFields,
    ...formLabels.map((label) => ({
      label,
      required: false,
      type: "text" as const,
    })),
    { label: "Комментарий к заявке", required: false, type: "text" as const },
  ];

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  useEffect(() => {
    const allRequiredFilled = requiredFields.every((field) =>
      formData[field.label]?.trim()
    );

    const phoneValid = /^\+?\d{10,15}$/.test(formData["Номер телефона"] || ""); // Проверка номера

    setIsValid(allRequiredFilled && phoneValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit({ Услуга: serviceTitle, ...formData });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Оставить заявку</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {allFields.map(({ label, required, type }) => (
            <FormField
              key={label}
              label={label}
              required={required}
              type={type}
              value={formData[label] || ""}
              handleChange={handleChange}
            />
          ))}

          <FormButtons onClose={onClose} isDisabled={!isValid} />
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
