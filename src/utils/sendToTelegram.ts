import { FieldValues } from "react-hook-form";

import formatFormData from "./formatFormData";
import FieldsGroup from "@/types/FieldsGroup";

const sendToTelegram = async (
  data: FieldValues,
  formTemplate: FieldsGroup[]
) => {
  const formData = formatFormData(data, formTemplate);
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

export default sendToTelegram;
