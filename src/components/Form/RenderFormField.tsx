import { useFormContext } from "react-hook-form";
import React from "react";

import PhoneInputField from "./PhoneInputField";
import CheckboxField from "./CheckboxField";
import TextInputField from "./TextInputField";
import RenderFormFieldProps from "@/types/RenderFormFieldProps";

const RenderFormField: React.FC<RenderFormFieldProps> = ({
  field,
  label,
  required,
  type,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[field.name]?.message as string | undefined;

  return (
    <div>
      {type === "checkbox" && (
        <CheckboxField
          field={field}
          label={label + (required ? "*" : "")}
          className="checkbox-field"
        />
      )}

      {type === "tel" && (
        <PhoneInputField
          field={field}
          label={label + (required ? "*" : "")}
          className={"input-field" + (errorMessage ? " error" : "")}
        />
      )}

      {type === "text" && (
        <TextInputField
          field={field}
          label={label + (required ? "*" : "")}
          className={"input-field" + (errorMessage ? " error" : "")}
        />
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RenderFormField;
