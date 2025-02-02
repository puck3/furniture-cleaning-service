"use client";

import React, { useState } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  type?: "text" | "tel"; // Добавляем типы
  value: string;
  handleChange: (label: string, value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  type = "text",
  value,
  handleChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = () => {
    if (required && !value.trim()) {
      setError("Обязательное поле");
    } else if (type === "tel" && !/^\+?\d{10,15}$/.test(value)) {
      setError("Некорректный номер телефона");
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label className="block text-gray-700">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        {...(required ? { required: true } : {})}
        onChange={(e) => handleChange(label, e.target.value)}
        onBlur={handleBlur}
        className={`w-full border p-2 rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormField;
