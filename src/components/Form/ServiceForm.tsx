"use client";

import FormBody from "./FormBody";

interface FieldTemplate {
  label: string;
  required: boolean;
  type: "text" | "tel";
}

interface ServiceFormProps {
  serviceFields: string[];
  onClose: () => void;
  onSubmit: (formData: Record<string, string>) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  serviceFields,
  onClose,
  onSubmit,
}) => {
  const personalFields: FieldTemplate[] = [
    { label: "Имя", required: true, type: "text" },
    { label: "Номер телефона", required: true, type: "tel" },
    { label: "Адрес", required: true, type: "text" },
  ];

  const fields: FieldTemplate[] = [
    ...personalFields,
    ...serviceFields.map((label) => ({
      label,
      required: false,
      type: "text" as const,
    })),
    { label: "Комментарий к заявке", required: false, type: "text" as const },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Оставить заявку</h2>
        <FormBody formTemplate={fields} onSubmit={onSubmit} onClose={onClose} />
      </div>
    </div>
  );
};

export default ServiceForm;
