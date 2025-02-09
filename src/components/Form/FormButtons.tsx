"use client";

import React from "react";

interface Actions {
  onClose: () => void;
  isDisabled?: boolean;
}

const FormButtons: React.FC<Actions> = ({ onClose, isDisabled = false }) => {
  return (
    <div className="flex justify-end space-x-2">
      <button
        type="button"
        onClick={onClose}
        className="bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md"
      >
        Закрыть
      </button>
      <button
        type="submit"
        disabled={isDisabled}
        className="px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-800 text-white"
      >
        Отправить
      </button>
    </div>
  );
};

export default FormButtons;
