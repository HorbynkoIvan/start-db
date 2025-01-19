import React from "react";
import "./header.scss";
import {NavLink } from "react-router";

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand logo" to="/">
        Star DB
      </NavLink>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/people/">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/planets/">
              Planets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/starships/">
              Starships
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login/">
              Log in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/secret/">
              Secret
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
