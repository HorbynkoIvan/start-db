import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => (
  <div className="jumbotron">
    <p>Login to see SeretPage!</p>
    <button className="primary" onClick={onLogin}>
      Log in
    </button>
  </div>
);

export default LoginPage;
