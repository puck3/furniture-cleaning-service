"use client";

import FieldTemplate from "@/types/FieldTemplate";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import RenderFormField from "./RenderFormField";

const FormField: React.FC<FieldTemplate> = ({
  name,
  label,
  required = false,
  type = "text",
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
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
