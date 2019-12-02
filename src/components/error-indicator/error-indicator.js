import React from 'react';
import './error-indicator.scss';
import deathStar from './death-star.png';

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={deathStar} alt="deathStar" />
      <span>Boom</span>
      <span>Something has terrible gone wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;
