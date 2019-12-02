import React from 'react';
import './error-indicator.scss';
import deathStar from './death-star.png';
import deathStar2 from './death-star2.png';

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={deathStar2} alt="deathStar" />
      <span>Boom</span>
      <span>Something has terrible gone wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;
