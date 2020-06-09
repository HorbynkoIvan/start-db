import React from 'react';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  }
  return <h3 className='text-center'>You should log in</h3>;
};

export default SecretPage;
