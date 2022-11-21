import React from "react";
import "./spinner.scss";

function Spinner() {
  return (
    <div className="spinner">
      <div className="sphere">
        <span />
      </div>
      <div className="orbit orbit1" />
      <div className="orbit orbit2" />
      <div className="orbit orbit3" />
    </div>
  );
}

export default Spinner;
