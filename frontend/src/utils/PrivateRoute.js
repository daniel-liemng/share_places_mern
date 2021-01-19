import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
