import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import PhoneInputField from "./PhoneInputField";
import CheckboxField from "./CheckboxField";
import TextInputField from "./TextInputField";
import React from "react";

const RenderFormField: React.FC<{
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox";
}> = ({ field, label, required, type }) => {
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
          // className={`w-[2rem] h-[2rem] border rounded-md ${
          //   errorMessage ? "border-red-500" : "border-gray-300"
          // }`}
        />
      )}

      {type === "tel" && (
        <PhoneInputField
          field={field}
          label={label + (required ? "*" : "")}
          className={`w-full border p-2 rounded-md ${
            errorMessage ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {type === "text" && (
        <TextInputField
          field={field}
          label={label + (required ? "*" : "")}
          className={`w-full border p-2 rounded-md ${
            errorMessage ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default RenderFormField;
