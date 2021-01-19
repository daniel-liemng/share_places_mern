import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Media, Image } from "react-bootstrap";

const UserItem = ({ user }) => {
  const { _id, name, image, places } = user;

  return (
    <LinkContainer
      to={`/${_id}/places`}
      style={{
        margin: "1rem auto",
        backgroundColor: "#a2d2ff",
        padding: "0.7rem",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Media>
        <Image
          width='150'
          height='150'
          className='mr-3'
          src={image}
          alt='Generic placeholder'
          roundedCircle
        />
        <Media.Body className='d-flex flex-column justify-content-center align-items-center align-self-center'>
          <h1>{name}</h1>
          <p>
            <strong>Place: </strong>
            {places && places.length === 0 ? "" : places.length}{" "}
            {places && places.length === 0
              ? "N/A"
              : places.length > 1
              ? "places"
              : "place"}
          </p>
        </Media.Body>
      </Media>
    </LinkContainer>
  );
};

export default UserItem;
