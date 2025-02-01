"use client";

import { useState } from "react";

interface FormField {
  label: string;
}

interface ServiceFormProps {
  formFields: FormField[];
  serviceTitle: string;
  onClose: () => void;
  onSubmit: (formData: Record<string, string>) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  formFields,
  serviceTitle,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ Услуга: serviceTitle, ...formData });
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
          <div key="name">
            <label className="block text-gray-700">Ваше имя</label>
            <input
              type="text"
              value={formData["name"] || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div key="phone">
            <label className="block text-gray-700">Ваш номер телефона</label>
            <input
              type="text"
              value={formData["phone"] || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div key="address">
            <label className="block text-gray-700">Ваш адрес</label>
            <input
              type="text"
              value={formData["address"] || ""}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          {formFields.map((field) => (
            <div key={field.label}>
              <label className="block text-gray-700">{field.label}</label>
              <input
                type="text"
                value={formData[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                className="w-full border p-2 rounded-md"
                required
              />
            </div>
          ))}
          <div key="comment">
            <label className="block text-gray-700">Комментарий к заявке</label>
            <input
              type="text"
              value={formData["comment"] || ""}
              onChange={(e) => handleChange("comment", e.target.value)}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              Закрыть
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
