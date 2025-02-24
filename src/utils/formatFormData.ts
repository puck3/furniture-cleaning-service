import FieldsGroup from "@/types/FieldsGroup";
import FormattedFieldValues from "@/types/FormattedFieldValues";
import { FieldValues } from "react-hook-form";

const formatFormData = (
  formData: FieldValues,
  formTemplate: FieldsGroup[]
): FormattedFieldValues[] => {
  const formattedData: Record<string, Record<string, string>> = {};

  formTemplate.forEach((group) => {
    const title = group.title ?? "Общая информация";
    if (!formattedData[title]) {
      formattedData[title] = {};
    }

    group.fields.forEach((field) => {
      const { name, label } = field;
      const value = formData[name];

      if (
        value === undefined ||
        value === null ||
        value === false ||
        value === ""
      ) {
        return;
      }

      const formattedValue = value === true ? "Да" : value.trim();

      formattedData[title][label] = formattedValue;
    });
  });

  return Object.entries(formattedData).map(([title, data]) => ({
    title,
    data,
  }));
};

export default formatFormData;
