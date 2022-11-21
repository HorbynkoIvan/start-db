import React from "react";
import "./error-indicator.scss";
import deathStar from "./death-star.png";

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <div>
        <img src={deathStar} alt="deathStar" />
      </div>
      <div className="error-text_block">
        <h2>Boom</h2>
        <span>Something has terrible gone wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    </div>
  );
}

export default ErrorIndicator;
