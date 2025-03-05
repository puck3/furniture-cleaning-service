import Service from "@/types/Service";
import FieldsGroup from "@/types/FieldsGroup";

const getFormTemplate = (services: Service[]) => {
  const personalFields: FieldsGroup = {
    fields: [
      { name: "Имя", label: "Имя", required: true, type: "text" },
      {
        name: "Номер телефона",
        label: "Номер телефона",
        required: true,
        type: "tel",
      },
      { name: "Адрес", label: "Адрес", required: true, type: "text" },
      {
        name: "Комментарий к заявке",
        label: "Комментарий к заявке",
        required: false,
        type: "text",
      },
      {
        name: "Согласие на обработку персональных данных",
        label: "Согласие на обработку персональных данных",
        required: true,
        type: "policy",
      },
    ],
  };

  const servicesFields: FieldsGroup[] = services.map((service) => {
    return {
      title: service.title,
      fields: [
        ...service.formFields.map(({ label, type, extraPrice }) => {
          return {
            name: service.title + " " + label,
            label: label,
            required: false,
            type: type,
            extraPrice: extraPrice,
          };
        }),
        {
          name: service.title + " Удаление запахов",
          label: "Удаление запахов",
          required: false,
          type: "checkbox" as const,
          extraPrice: "от 500р",
        },
      ],
    };
  });

  return [personalFields, ...servicesFields];
};

export default getFormTemplate;
