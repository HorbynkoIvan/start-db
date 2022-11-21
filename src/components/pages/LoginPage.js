import React from "react";
import { Navigate } from "react-router-dom";

export const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Navigate to="/secret/" />;

  return (
    <div className="jumbotron">
      <h3 className="text-center">Please, log in to see secret page!</h3>
      <button className="btn btn-primary btn-lg btn-block" onClick={onLogin}>
        Log in
      </button>
    </div>
  );
};
