"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Как заказать химчистку мебели?",
    answer:
      "Вы можете оставить заявку на сайте, указав свои данные и желаемую услугу. Мы свяжемся с вами для уточнения деталей.",
  },
  {
    question: "Сколько времени занимает химчистка?",
    answer:
      "В среднем процесс занимает от 1 до 3 часов в зависимости от степени загрязнения и размера мебели.",
  },
  {
    question: "Какие средства вы используете?",
    answer:
      "Мы используем только сертифицированные и безопасные средства, которые не вызывают аллергии и подходят для детей и животных.",
  },
  {
    question: "Как скоро можно пользоваться мебелью после чистки?",
    answer:
      "Обычно мебель высыхает в течение 4-6 часов. Мы рекомендуем проветривать помещение для ускорения процесса.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            {item.question}
            <span className="text-gray-600 text-xl">
              {openIndexes.includes(index) ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndexes.includes(index)
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700 text-base py-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
