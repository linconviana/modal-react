import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Draggable from "react-draggable";
import MoveModal from "../MoveModal";

const ButtonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    debugger;
    setIsModalOpen(true);

    if (isModalOpen) {
      debugger;
    } else {
      debugger;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>Show Modal</Button>
      {isModalOpen && (
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
                    <div className="modal-body">Modal Body</div>
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
