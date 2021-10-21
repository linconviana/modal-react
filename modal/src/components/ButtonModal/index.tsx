import { useState } from "react";
import { Button } from "react-bootstrap";
import Draggable from "react-draggable";
import FormModal from "../FormModal";
import FormViaCep from "../FormViaCep";

const ButtonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalCep, setIsModalCep] = useState(false);
  const openModalCep = () => {
    setIsModalCep(true);
  };


  return (
    <>
      <Button onClick={openModal}>Show Modal 1</Button>
      <br/>
      <br/>
      <Button onClick={openModalCep}>Show Modal 2</Button>
      {(isModalOpen ? isModalOpen : isModalCep) && (
        <>
          <div className="space">
            <Draggable grid={[10, 10]} axis="both" bounds="parent">
              <div className="mover">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="bg-primary modal-header">
                      <div className="modal-title h4">Modal heading</div>
                      <button
                        type="button"
                        className="btn-close close btn btn-primary"
                        onClick={closeModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      Modal Body
                      {isModalOpen &&
                      <FormModal />
                      }
                      {isModalCep &&
                      <FormViaCep />
                      }
                      </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-success btn btn-primary"
                      >
                        Enviar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn btn-primary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Draggable>
          </div>
        </>
      )}
    </>
  );
};

export default ButtonModal;
