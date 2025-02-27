"use client";

import React from "react";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

import FormFieldProps from "@/types/FormFieldProps";

const PhoneInputField: React.FC<FormFieldProps> = ({
  field,
  label,
  className = "",
}) => {
  return (
    <label className="label">
      {label}
      <PhoneInput
        {...field}
        country="RU"
        international={true}
        withCountryCallingCode={true}
        className={className}
        value={field.value}
        onChange={(value: string | undefined) => field.onChange(value || "")}
      />
    </label>
  );
};

export default PhoneInputField;
