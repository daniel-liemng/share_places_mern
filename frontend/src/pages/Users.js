import React from "react";

import UserList from "../components/user/UserList";

const userData = [
  {
    id: "u1",
    name: "Max Smith",
    image:
      "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1",
    places: 3,
  },
  {
    id: "u2",
    name: "Max Smith",
    image:
      "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1",
    places: 3,
  },
];

const Users = () => {
  return <UserList users={userData} />;
};

export default Users;
