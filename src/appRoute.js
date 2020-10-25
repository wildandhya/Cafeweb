/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Login from "./pages/login";
import modal from "./components/addmodal";
// import PrivateRoute from "./components/privateRoute";

const CafeRouter = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/history' component={History} />
      <Route path='/login' component={Login} />
    </Router>
  );
};
export default CafeRouter;
