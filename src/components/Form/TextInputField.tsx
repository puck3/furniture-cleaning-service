import React from "react";

import FormFieldProps from "@/types/FormFieldProps";

const TextInputField: React.FC<FormFieldProps> = ({
  field,
  label,
  className = "",
}) => {
  return (
    <label className="label">
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
