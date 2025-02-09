"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormButtons from "./FormButtons";
import FormField from "./FormField";
import { isValidPhoneNumber } from "react-phone-number-input";

interface FieldTemplate {
  label: string;
  required: boolean;
  type: "text" | "tel";
}

interface FormProps {
  formTemplate: FieldTemplate[];
  onSubmit: (data: Record<string, string>) => void;
  onClose: () => void;
}

const FormBody: React.FC<FormProps> = ({ formTemplate, onSubmit, onClose }) => {
  const formSchema = formTemplate.reduce((schema, field) => {
    if (field.type === "tel") {
      schema[field.label] = z
        .string()
        .refine(
          (value) => isValidPhoneNumber(value, "RU"),
          "Введите корректный номер телефона"
        );
    } else if (field.required) {
      schema[field.label] = z
        .string()
        .min(1, `${field.label} - обязательное поле`);
    } else {
      schema[field.label] = z.string().optional();
    }
    return schema;
  }, {} as Record<string, z.ZodTypeAny>);

  const validationSchema = z.object(formSchema);
  const formMethods = useForm({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-4">
        {formTemplate.map(({ label, required, type }) => (
          <FormField
            key={label}
            label={label}
            required={required}
            type={type}
          />
        ))}

        <FormButtons onClose={onClose} />
      </form>
    </FormProvider>
  );
};

export default FormBody;
