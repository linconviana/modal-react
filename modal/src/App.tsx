import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";

function App() {
  //https://www.youtube.com/watch?v=GQ0PzxV2p9k
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>Show Modal</Button>

      <Modal className="modal-large" show={isModalOpen}>
        <Modal.Header onClick={closeModal} className="bg-primary">
          <Modal.Title>Modal heading</Modal.Title>
          <Button className="btn-close close"></Button>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success">Enviar</Button>
          <Button className="btn btn-danger" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
