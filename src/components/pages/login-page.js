import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => (
  <div className="jumbotron">
    <p>Please, log in to see secret page!</p>
    <button className="btn btn-primary" onClick={onLogin}>
      Log in
    </button>
  </div>
);

export default LoginPage;
