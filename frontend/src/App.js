import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/shared/Navbar";
import Users from "./pages/Users";
import NewPlace from "./pages/NewPlace";
import UpdatePlace from "./pages/UpdatePlace";
import UserPlaces from "./pages/UserPlaces";
import Login from "./pages/Login";

import AuthRoute from "./utils/AuthRoute";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Users} />
        <PrivateRoute exact path='/:userId/places' component={UserPlaces} />
        <PrivateRoute exact path='/places/new' component={NewPlace} />
        <PrivateRoute exact path='/places/:placeId' component={UpdatePlace} />
        <AuthRoute exact path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
