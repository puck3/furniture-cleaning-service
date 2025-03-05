"use client";

import React from "react";

import FormFieldProps from "@/types/FormFieldProps";

const PolicyField: React.FC<FormFieldProps> = ({ field, className = "" }) => {
  return (
    <div className="label">
      {"Согласие с "}
      <a
        href="/policy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Политика обработки персональных данных"
        className="policy-link"
      >
        политикой конфиденциальности
      </a>
      <label className="checkbox-label">
        <input
          {...field}
          type="checkbox"
          className="checkbox-input peer"
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
          tabIndex={0}
        />
        <span
          className={`${className} ${field.value ? "checked" : "unchecked"}`}
        >
          {field.value && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
        <span className="checkbox-label-text">Даю согласие*</span>
      </label>
    </div>
  );
};

export default PolicyField;
