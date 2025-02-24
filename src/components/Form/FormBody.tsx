"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import FormField from "./FormField";
import FormButtons from "./FormButtons";
import useCartStore from "@/store/CartStore";
import getFormTemplate from "@/utils/getFormTemplate";
import getValidationSchema from "@/utils/getValidationSchema";
import formatFormData from "@/utils/formatFormData";
import FormattedFieldValues from "@/types/FormattedFieldValues";

const sendToTelegram = async (formData: FormattedFieldValues[]) => {
  console.log("Отправка данных в API:", JSON.stringify(formData, null, 2));

  try {
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    const result = await response.json();
    console.log("Ответ API:", result);
    alert("Заявка успешно оформлена!");
  } catch (error) {
    console.error("Error sending data", error);
    alert("При оформлении заявки произошла ошибка. Попробуйте снова.");
  }
};

const FormBody: React.FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const formTemplate = getFormTemplate(cart);

  const validationSchema = getValidationSchema(formTemplate);
  const formMethods = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formattedData = formatFormData(data, formTemplate);
    sendToTelegram(formattedData);
    clearCart();
    closeForm();
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        {formTemplate.map(({ title, fields }) => {
          return (
            <div key={"group " + title} className="form-body-wrap">
              {title && <h2>{title}</h2>}
              {fields.map(({ name, label, required, type }) => (
                <FormField
                  key={name}
                  name={name}
                  label={label}
                  required={required}
                  type={type}
                />
              ))}
            </div>
          );
        })}

        <FormButtons onClose={closeForm} />
      </form>
    </FormProvider>
  );
};

export default FormBody;
