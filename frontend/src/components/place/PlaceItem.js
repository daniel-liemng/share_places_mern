import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ConfirmDeleteModal from "../shared/ConfirmDeleteModal";
import { useAppContext } from "../../context/AppContext";

const PlaceItem = ({ place }) => {
  const { isAuthenticated, userId } = useAppContext();

  const { _id, title, description, image, address, location, creator } = place;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = () => setShowDeleteModal(true);

  return (
    <Card className='mb-4'>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Address:</strong> {address}
        </Card.Text>
      </Card.Body>
      {isAuthenticated && (
        <Card.Footer className='d-flex flex-column'>
          {creator === userId && <Button variant='primary'>View on Map</Button>}
          <div className='d-flex justify-content-around mt-2'>
            <LinkContainer to={`/places/${_id}`}>
              <Button variant='warning'>Edit</Button>
            </LinkContainer>
            <Button variant='danger' onClick={handleDeleteModalShow}>
              Delete
            </Button>
          </div>
        </Card.Footer>
      )}

      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
        <ConfirmDeleteModal
          handleClose={handleDeleteModalClose}
          placeId={_id}
        />
      </Modal>
    </Card>
  );
};

export default PlaceItem;
