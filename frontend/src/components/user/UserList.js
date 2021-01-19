import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <Container>
      <Row className='mt-4'>
        {users.map((user) => (
          <Col xs={12} md={6} key={user._id}>
            <UserItem user={user} />
          </Col>
        ))}
      </Row>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </Container>
  );
};

export default UserList;
