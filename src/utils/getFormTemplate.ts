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
    ],
  };

  const servicesFields: FieldsGroup[] = services.map((service) => {
    return {
      title: service.title,
      fields: [
        ...service.formFields.map((formField) => {
          return {
            name: service.title + " " + formField,
            label: formField,
            required: false,
            type: "text" as const,
          };
        }),
        {
          name: service.title + " удаление запахов",
          label: "Удаление запахов",
          required: false,
          type: "checkbox" as const,
        },
      ],
    };
  });

  return [personalFields, ...servicesFields];
};

export default getFormTemplate;
