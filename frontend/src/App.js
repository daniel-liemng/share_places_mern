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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Users} />
        <AuthRoute exact path='/:userId/places' component={UserPlaces} />
        <AuthRoute exact path='/places/new' component={NewPlace} />
        <AuthRoute exact path='/places/:placeId' component={UpdatePlace} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
