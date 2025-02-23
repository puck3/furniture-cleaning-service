import Modal from "react-modal";
import { useEffect } from "react";
import FormProps from "@/types/FormProps";
import FormBody from "./FormBody";

const Form: React.FC<FormProps> = ({ isOpen, closeForm }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeForm}
      contentLabel="Форма заявки"
      className="bg-white p-6 rounded-lg shadow-lg w-96 relative max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <h2>Оформление заявки</h2>
      <FormBody closeForm={closeForm} />
    </Modal>
  );
};

export default Form;
