import React from 'react';
import { Link } from 'react-router-dom';

//use Link instead of "a" tag in JSX

// "/about" route is mentione in App.js
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/returns">
        HUL
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/returns">
              Returns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pickups">
              Pickups
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stocks">
              Stocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/claims">
              Claims
            </a>
          </li>
        </ul>
        {/* <span className="navbar-text">Navbar text with an inline element</span> */}
      </div>
    </nav>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'
};
export default Header;
