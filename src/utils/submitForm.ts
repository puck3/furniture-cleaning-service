const submitForm = async (
  formData: Record<string, string>,
  serviceTitle: string
) => {
  console.log("Отправка данных:", formData);

  try {
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData, serviceTitle }),
    });

    if (response.ok) {
      alert("Заявка успешно отправлена!");
    } else {
      throw new Error("Ошибка при отправке заявки.");
    }
  } catch (error) {
    alert("Ошибка при отправке заявки.");
    console.error(error);
  }
};

export default submitForm;
