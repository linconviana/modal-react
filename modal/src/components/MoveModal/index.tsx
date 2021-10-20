import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Draggable from "react-draggable";

const MoveModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <>
    <Draggable grid={[10, 10]} axis="both" bounds="parent">
      <Modal show={isModalOpen}>
        <Modal.Header className="bg-primary">
          <Modal.Title>Modal heading</Modal.Title>
          <Button className="btn-close close" onClick={closeModal}></Button>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success">Enviar</Button>
          <Button className="btn btn-danger" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Draggable>
    </>
  );
};

export default MoveModal;
