"use client";

import React from "react";

interface Actions {
  onClose: () => void;
}

const FormButtons: React.FC<Actions> = ({ onClose }) => {
  return (
    <div className="form-buttons-wrap">
      <button type="button" onClick={onClose} className="button-grey">
        Закрыть
      </button>
      <button type="submit" className="button">
        Отправить
      </button>
    </div>
  );
};

export default FormButtons;
