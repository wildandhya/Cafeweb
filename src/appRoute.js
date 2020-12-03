/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const History = React.lazy(() => import("./pages/History"));
const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));

const CafeRouter = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/history' component={History} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};
export default CafeRouter;
