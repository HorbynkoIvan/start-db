import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand logo" to="/">
        Star DB
      </Link>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/people/">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets/">
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starships/">
              Starships
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
