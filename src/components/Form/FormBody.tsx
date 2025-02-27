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
import sendToTelegram from "@/utils/sendToTelegram";

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
    sendToTelegram(data, formTemplate);
    clearCart();
    closeForm();
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        {formTemplate.map(({ title, fields }) => {
          return (
            <div key={"group " + title} className="form-body-wrap">
              {title && <h3>{title}</h3>}
              {fields.map(({ name, label, required, type, extraPrice }) => (
                <FormField
                  key={name}
                  name={name}
                  label={extraPrice ? `${label} (${extraPrice})` : label}
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
