import React from "react";
import "./row.scss";
import PropTypes from "prop-types";

const Row = ({ left, right }) => (
  <div className="row mb-2">
    <div className="col-md-6">{left}</div>
    <div className="col-md-6">{right}</div>
  </div>
);

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Row;
