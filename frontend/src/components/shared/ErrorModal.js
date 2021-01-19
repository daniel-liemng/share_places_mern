import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = ({ handleClose }) => {
  const handleDeletePlace = () => {
    console.log("deleting");
    handleClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Error Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to proceed and delete this place? Please note that it can't
        be undone then.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleDeletePlace}>
          Delete
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ErrorModal;
