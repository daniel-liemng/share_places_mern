import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ConfirmDeleteModal from "../shared/ConfirmDeleteModal";

const PlaceItem = ({ place }) => {
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
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          <strong>Address:</strong> {address}
        </ListGroupItem>
      </ListGroup>
      <Card.Body className='d-flex justify-content-around'>
        <LinkContainer to={`/places/${id}`}>
          <Button variant='warning'>Edit</Button>
        </LinkContainer>
        <Button variant='danger' onClick={handleDeleteModalShow}>
          Delete
        </Button>
      </Card.Body>
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
        <ConfirmDeleteModal handleClose={handleDeleteModalClose} />
      </Modal>
    </Card>
  );
};

export default PlaceItem;
