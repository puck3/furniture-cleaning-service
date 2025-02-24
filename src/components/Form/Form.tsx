import Modal from "react-modal";
import { useEffect } from "react";

import FormBody from "./FormBody";
import FormProps from "@/types/FormProps";

import "@/styles/Form.scss";

const Form: React.FC<FormProps> = ({ isOpen, closeForm }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeForm}
      contentLabel="Форма заявки"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Оформление заявки</h2>
      <FormBody closeForm={closeForm} />
    </Modal>
  );
};

export default Form;
