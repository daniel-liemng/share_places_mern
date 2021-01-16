import React from "react";
import { Card, Container } from "react-bootstrap";

import UserItem from "./UserItem";

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <Card style={{ maxWidth: "30rem" }}>
        <Card.Body>No users found</Card.Body>
      </Card>
    );
  }
  return (
    <Container>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default UserList;
