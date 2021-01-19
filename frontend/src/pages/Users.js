import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import UserList from "../components/user/UserList";
import Loading from "../components/shared/Loading";
import { useAuthContext } from "../context/AuthContext";

// const userData = [
//   {
//     id: "u1",
//     name: "Max Smith",
//     image:
//       "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1",
//     places: 3,
//   },
//   {
//     id: "u2",
//     name: "Max Smith",
//     image:
//       "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1",
//     places: 3,
//   },
// ];

const Users = () => {
  const { getUsers, loading, users, error } = useAuthContext();

  useEffect(() => {
    getUsers();
  }, []);

  console.log("YSER", users);

  if (loading) return <Loading />;

  if (error) return <h2 className='text-danger text-center'>{error}</h2>;

  if (users.length === 0)
    return (
      <Card style={{ maxWidth: "30rem" }}>
        <Card.Body>No users found</Card.Body>
      </Card>
    );

  return <UserList users={users.users} />;
};

export default Users;
