import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import useCartStore from "@/store/CartStore";
import getFormTemplate from "@/utils/getFormTemplate";
import getValidationSchema from "@/utils/getValidationSchema";
import FormField from "./FormField";
import React from "react";
import FormButtons from "./FormButtons";

const FormBody: React.FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const cart = useCartStore((state) => state.cart);
  const formTemplate = getFormTemplate(cart);

  const validationSchema = getValidationSchema(formTemplate);
  const formMethods = useForm({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });

  return (
    <FormProvider {...formMethods}>
      <form>
        {formTemplate.map(({ title, fields }) => {
          return (
            <div key={"group " + title} className="space-y-4">
              <h3>{title}</h3>
              {fields.map(({ label, required, type }) => (
                <FormField
                  key={title + " " + label}
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
