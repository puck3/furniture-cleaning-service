import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface RenderFormFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox";
}

export default RenderFormFieldProps;
