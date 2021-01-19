import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Spinner
        variant='primary'
        animation='border'
        role='status'
        style={{ fontSize: "7rem", margin: "5rem auto" }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
