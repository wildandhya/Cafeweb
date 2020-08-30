import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";


const CafeRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/history' component={History} />
    </Router>
  );
};

export default CafeRouter