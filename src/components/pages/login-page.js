import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Redirect to="/secret/" />;
  return (
    <div className="jumbotron">
      <h3 className="text-center">Please, log in to see secret page!</h3>
      <button className="btn btn-primary btn-lg btn-block" onClick={onLogin}>
        Log in
      </button>
    </div>
  );
};

export default LoginPage;
