interface FieldTemplate {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox" | "policy";
  extraPrice?: string;
}

export default FieldTemplate;
