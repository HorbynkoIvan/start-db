import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand logo" href="#">
        Star DB
      </a>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Starships
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
