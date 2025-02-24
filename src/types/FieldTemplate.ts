interface FieldTemplate {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "tel" | "checkbox";
}

export default FieldTemplate;
