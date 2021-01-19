import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import UserList from "../components/user/UserList";
import Loading from "../components/shared/Loading";
import MessageCard from "../components/shared/MessageCard";
import { useAppContext } from "../context/AppContext";

const Users = () => {
  const { getUsers, loading, users, error } = useAppContext();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <Loading />;

  if (error) return <MessageCard message={error} />;

  if (users.length === 0)
    return (
      <Card style={{ maxWidth: "30rem" }}>
        <Card.Body>No users found</Card.Body>
      </Card>
    );

  return <UserList users={users} />;
};

export default Users;
