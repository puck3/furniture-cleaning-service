"use client";

import Modal from "react-modal";
import { useEffect } from "react";

import FormBody from "./FormBody";
import FormProps from "@/types/FormProps";

import "@/styles/Form.scss";

const Form: React.FC<FormProps> = ({ isOpen, closeForm }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeForm}
      contentLabel="Форма заявки"
      className="modal"
      overlayClassName="modal-overlay"
      preventScroll={true}
    >
      <h2>Оформление заявки</h2>
      <FormBody closeForm={closeForm} />
    </Modal>
  );
};

export default Form;
