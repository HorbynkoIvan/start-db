import React from "react";
import { Navigate } from "react-router";

export const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>Now you can see all secrets!!!</h3>
      </div>
    );
  }
  return <Navigate to="/login/" />;
};
