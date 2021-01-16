import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const GuestRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default GuestRoute;
