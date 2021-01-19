import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ConfirmDeleteModal from "../shared/ConfirmDeleteModal";
import { useAppContext } from "../../context/AppContext";

const PlaceItem = ({ place }) => {
  const { isAuthenticated } = useAppContext();

  const { id, title, description, imgUrl, address, location } = place;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = () => setShowDeleteModal(true);

  return (
    <Card style={{ width: "40rem", margin: "1.5rem auto" }}>
      <Card.Img variant='top' src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Address:</strong> {address}
        </Card.Text>
      </Card.Body>
      {isAuthenticated && (
        <Card.Footer className='d-flex justify-content-around'>
          <LinkContainer to={`/places/${id}`}>
            <Button variant='warning'>Edit</Button>
          </LinkContainer>
          <Button variant='danger' onClick={handleDeleteModalShow}>
            Delete
          </Button>
        </Card.Footer>
      )}

      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
        <ConfirmDeleteModal handleClose={handleDeleteModalClose} />
      </Modal>
    </Card>
  );
};

export default PlaceItem;
