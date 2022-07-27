import React from "react";
import { Navigate } from "react-router-dom";

const auth = { authToken: true };

const Protected = ({ children }) => {
  if (!auth.authToken) {
    Navigate({ to: "/login" });
  } else {
    return <div>{children}</div>;
  }
};

export default Protected;
