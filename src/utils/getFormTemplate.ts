import Service from "@/types/Service";
import FieldsGroup from "@/types/FieldsGroup";

const getFormTemplate = (services: Service[]) => {
  const personalFields: FieldsGroup = {
    fields: [
      { label: "Имя", required: true, type: "text" },
      { label: "Номер телефона", required: true, type: "tel" },
      { label: "Адрес", required: true, type: "text" },
      { label: "Комментарий к заявке", required: false, type: "text" },
    ],
  };

  const servicesFields: FieldsGroup[] = services.map((service) => {
    return {
      title: service.title,
      fields: [
        ...service.formFields.map((formField) => {
          return {
            label: formField,
            required: false,
            type: "text" as const,
          };
        }),
        {
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
