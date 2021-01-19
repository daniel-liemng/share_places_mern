import React from "react";

import { Media, Image } from "react-bootstrap";

const UserItem = ({ user }) => {
  const { _id, name, image, places } = user;

  return (
    <Media
      style={{
        margin: "2rem auto",
        backgroundColor: "#ffa69e",
        padding: "0.7rem",
      }}
    >
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
          {places && places.length}{" "}
          {places && places.length > 1 ? "places" : "place"}
        </p>
      </Media.Body>
    </Media>
  );
};

export default UserItem;
