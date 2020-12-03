/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import Home from "./pages/Home";
import Login from "./pages/login";
import History from "./pages/History";
import Register from "./pages/register";

const CafeRouter = () => {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/home' component={Home} />
      <Route path='/history' component={History} />
    </Router>
  );
};
export default CafeRouter;
