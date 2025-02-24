"use client";

import React from "react";

interface Actions {
  onClose: () => void;
  isDisabled?: boolean;
}

const FormButtons: React.FC<Actions> = ({ onClose, isDisabled = false }) => {
  return (
    <div className="form-buttons-wrap">
      <button type="button" onClick={onClose} className="button-grey">
        Закрыть
      </button>
      <button type="submit" disabled={isDisabled} className="button">
        Отправить
      </button>
    </div>
  );
};

export default FormButtons;
