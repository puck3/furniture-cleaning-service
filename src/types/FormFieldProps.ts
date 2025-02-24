import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface FormFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  className?: string;
}

export default FormFieldProps;
