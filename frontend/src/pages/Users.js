import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import UserList from "../components/user/UserList";
import Loading from "../components/shared/Loading";
import { useAppContext } from "../context/AppContext";

const Users = () => {
  const { getUsers, loading, users, error } = useAppContext();

  useEffect(() => {
    getUsers();
  }, []);

  console.log("YSER", users);

  if (loading) return <Loading />;

  if (error) return <h4 className='text-danger text-center'>{error}</h4>;

  if (users.length === 0)
    return (
      <Card style={{ maxWidth: "30rem" }}>
        <Card.Body>No users found</Card.Body>
      </Card>
    );

  return <UserList users={users} />;
};

export default Users;
