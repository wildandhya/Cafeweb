/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CafeRouter from "./appRoute";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CafeRouter />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>,
  document.getElementById("root")
);
