import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

const TextInputField: React.FC<{
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  className?: string;
}> = ({ field, label, className = "" }) => {
  return (
    <label className="text-gray-700 block select-none">
      {label}
      <input
        {...field}
        type="text"
        className={className}
        value={field.value || ""}
        onChange={(value) => field.onChange(value || "")}
      />
    </label>
  );
};

export default TextInputField;
