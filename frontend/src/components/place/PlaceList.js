import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <Card
        style={{ maxWidth: "30rem", margin: "2rem auto", padding: "1.5rem" }}
      >
        <Card.Body>No places found. Maybe create new one?</Card.Body>
        <LinkContainer to='/places/new'>
          <Button>Share Place</Button>
        </LinkContainer>
      </Card>
    );
  }
  return (
    <Container>
      {places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </Container>
  );
};

export default PlaceList;
