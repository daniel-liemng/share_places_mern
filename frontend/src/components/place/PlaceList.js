import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
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
      <Row className='mt-5'>
        {places.map((place) => (
          <Col xs={6} md={4} key={place._id}>
            <PlaceItem place={place} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlaceList;
