import React from "react";
import { Card } from "react-bootstrap";

const MessageCard = ({ message }) => {
  return (
    <Card style={{ maxWidth: "30rem", margin: "2rem auto" }}>
      <Card.Body>
        <h5 className='text-danger'>{message}</h5>
      </Card.Body>
    </Card>
  );
};

export default MessageCard;
