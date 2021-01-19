import React from "react";
import { Modal, Button } from "react-bootstrap";

import { useAppContext } from "../../context/AppContext";
import MessageCard from "./MessageCard";
import Loading from "./Loading";

const ConfirmDeleteModal = ({ handleClose, placeId }) => {
  const { loading, error, deletePlace } = useAppContext();

  const handleDeletePlace = () => {
    // Delete place here in Confirm Modal
    deletePlace(placeId);

    // Clode modal
    handleClose();
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <MessageCard message={error} />;
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
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

export default ConfirmDeleteModal;
