import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ fontSize: "4rem", marginTop: "4rem" }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loading;
