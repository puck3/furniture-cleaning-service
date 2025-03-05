import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface FormFieldRenderProps {
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox" | "policy";
}

export default FormFieldRenderProps;
