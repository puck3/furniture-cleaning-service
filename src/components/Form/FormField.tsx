"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import FieldTemplate from "@/types/FieldTemplate";
import FormFieldRender from "./FormFieldRender";

const FormField: React.FC<FieldTemplate> = ({
  name,
  label,
  required,
  type,
}) => {
  const { control } = useFormContext();

  const getDefaultValue = () => {
    if (type === "checkbox") return false;
    if (type === "tel") return "+7";
    return "";
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={getDefaultValue()}
      render={({ field }) => (
        <FormFieldRender
          field={field}
          label={label}
          required={required}
          type={type}
        />
      )}
    />
  );
};

export default FormField;
