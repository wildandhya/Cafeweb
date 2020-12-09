import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkLogin = () => {
  return true;
};

export default function privateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return checkLogin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
                msg: "Please Login First",
              },
            }}
          />
        );
      }}
    />
  );
}
