import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

import FieldsGroup from "@/types/FieldsGroup";
import FieldTemplate from "@/types/FieldTemplate";

const validateFields = (
  schema: Record<string, z.ZodTypeAny>,
  fields: FieldTemplate[]
) => {
  return fields.reduce((schema, field) => {
    if (field.type === "tel") {
      schema[field.name] = z
        .string()
        .trim()
        .refine(
          (value) => isValidPhoneNumber(value, "RU"),
          "Введите корректный номер телефона"
        );
    } else if (field.type === "checkbox") {
      schema[field.name] = z.boolean();
    } else if (field.type === "text" && field.required) {
      schema[field.name] = z
        .string()
        .trim()
        .min(1, `${field.label} - обязательное поле`);
    } else {
      schema[field.name] = z.string().trim().optional();
    }
    return schema;
  }, schema);
};

const getValidationSchema = (fieldsGroups: FieldsGroup[]) => {
  return z.object(
    fieldsGroups.reduce(
      (schema, fieldsGroup) => validateFields(schema, fieldsGroup.fields),
      {} as Record<string, z.ZodTypeAny>
    )
  );
};

export default getValidationSchema;
