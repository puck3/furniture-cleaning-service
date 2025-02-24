"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import FieldTemplate from "@/types/FieldTemplate";
import RenderFormField from "./RenderFormField";

const FormField: React.FC<FieldTemplate> = ({
  name,
  label,
  required,
  type,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={type === "checkbox" ? false : ""}
      render={({ field }) => (
        <RenderFormField
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
