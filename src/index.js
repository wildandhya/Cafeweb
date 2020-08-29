/** @format */

import React from "react";
import ReactDOM from "react-dom";
import CafeRouter from "./appRouter";
import { Provider } from "react-redux";
import store from "./redux/store";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <CafeRouter />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>,
  document.getElementById("root")
);
