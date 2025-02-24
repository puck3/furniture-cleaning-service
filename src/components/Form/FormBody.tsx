"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormField from "./FormField";
import FormButtons from "./FormButtons";
import useCartStore from "@/store/CartStore";
import getFormTemplate from "@/utils/getFormTemplate";
import getValidationSchema from "@/utils/getValidationSchema";

const onSubmit = (data: Record<string, string>) => console.log(data);

const FormBody: React.FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const cart = useCartStore((state) => state.cart);
  const formTemplate = getFormTemplate(cart);

  const validationSchema = getValidationSchema(formTemplate);
  const formMethods = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
  });

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
