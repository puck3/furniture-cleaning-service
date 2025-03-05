interface Field {
  label: string;
  type: "text" | "tel" | "checkbox" | "policy";
  extraPrice?: string;
}

interface Service {
  title: string;
  cleaningTime: string;
  price: string;
  imageSrc: string;
  formFields: Field[];
}

export default Service;
