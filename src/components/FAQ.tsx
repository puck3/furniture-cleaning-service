"use client";

import { useState } from "react";
import { faq } from "@/data/faq";

import "@/styles/FAQ.scss";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="questions">
      <h2>Частые вопросы</h2>
      <div className="faq-wrap">
        {faq.map((item, index) => (
          <div key={index} className="faq-row">
            <button onClick={() => toggleFAQ(index)} className="question">
              {item.question}
              <p>{openIndexes.includes(index) ? "−" : "+"}</p>
            </button>
            <div
              className={`answer ${
                openIndexes.includes(index) ? "" : "closed"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
