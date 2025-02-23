"use client";

import FieldTemplate from "@/types/FieldTemplate";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

const FormField: React.FC<FieldTemplate> = ({
  label,
  required = false,
  type = "text",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className="block text-gray-700">
        {label}
        {required && "*"}
      </label>
      <Controller
        name={label}
        control={control}
        defaultValue=""
        render={({ field }) => {
          // Рендерим в зависимости от типа поля
          if (type === "tel") {
            return (
              <PhoneInput
                {...field}
                country="RU"
                international={true}
                withCountryCallingCode={true}
                className={`w-full border p-2 rounded-md ${
                  errors[label] ? "border-red-500" : "border-gray-300"
                }`}
                value={field.value || ""}
                onChange={(value: string | undefined) =>
                  field.onChange(value || "")
                }
              />
            );
          }

          if (type === "checkbox") {
            return (
              <input
                {...field}
                type="checkbox"
                className={`w-4 h-4 border p-2 rounded-md ${
                  errors[label] ? "border-red-500" : "border-gray-300"
                }`}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            );
          }

          // Для текстовых полей
          return (
            <input
              {...field}
              type={type}
              className={`w-full border p-2 rounded-md ${
                errors[label] ? "border-red-500" : "border-gray-300"
              }`}
              value={field.value || ""}
              onChange={(value) => field.onChange(value || "")}
            />
          );
        }}
      />
      {errors[label] && (
        <p className="text-red-500 text-sm">
          {errors[label]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormField;
