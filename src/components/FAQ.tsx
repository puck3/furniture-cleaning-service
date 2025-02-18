"use client";

import { useState } from "react";
import { faq } from "@/data/faq";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold hover:text-fuchsia-600 transition-colors"
          >
            {item.question}
            <span className="text-gray-600 text-xl">
              {openIndexes.includes(index) ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndexes.includes(index) ? "opacity-100" : "max-h-0 opacity-0"
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
