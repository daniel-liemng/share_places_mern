import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
