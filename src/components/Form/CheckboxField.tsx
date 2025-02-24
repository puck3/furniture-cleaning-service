import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

const CheckboxField: React.FC<{
  field: ControllerRenderProps<FieldValues, string>;
  label: string;
  className?: string;
}> = ({ field, label, className = "" }) => {
  return (
    <label className="text-gray-700 flex items-center w-fit gap-2 select-none cursor-pointer">
      <input
        {...field}
        type="checkbox"
        className="peer absolute opacity-0 w-0 h-0"
        checked={field.value}
        onChange={(e) => field.onChange(e.target.checked)}
        tabIndex={0}
      />
      <span
        className={`relative flex items-center justify-center w-6 h-6 border rounded-md 
          ${field.value ? "bg-blue-500 border-blue-500" : "border-gray-300"} 
          ${className} peer-checked:bg-blue-500 peer-checked:border-blue-500
          peer-focus:ring-2 peer-focus:ring-blue-500 focus:outline-none`}
      >
        {field.value && (
          <svg
            className="w-4 h-4 text-white"
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
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default CheckboxField;
