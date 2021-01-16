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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/:userId/places' component={UserPlaces} />
        <Route exact path='/places/new' component={NewPlace} />
        <Route exact path='/places/:placeId' component={UpdatePlace} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
