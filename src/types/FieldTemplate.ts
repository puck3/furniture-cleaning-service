interface FieldTemplate {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox";
  extraPrice?: string;
}

export default FieldTemplate;
