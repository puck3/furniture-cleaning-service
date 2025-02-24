import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

const PhoneInputField: React.FC<{
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  className?: string;
}> = ({ field, label, className = "" }) => {
  return (
    <label className="text-gray-700 block select-none">
      {label}
      <PhoneInput
        {...field}
        country="RU"
        international={true}
        withCountryCallingCode={true}
        className={className}
        value={field.value || ""}
        onChange={(value: string | undefined) => field.onChange(value || "")}
      />
    </label>
  );
};

export default PhoneInputField;
