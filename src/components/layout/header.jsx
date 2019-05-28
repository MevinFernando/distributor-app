import React from "react";
import { Link } from "react-router-dom";

//use Link instead of "a" tag in JSX

// "/about" route is mentione in App.js
function Header() {
  return (
    <header style={headerStyle}>
      <h1>Distributor Portal</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
      |{" "}
      <Link style={linkStyle} to="/returns">
        Returns
      </Link>
    </header>
  );
}
const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};
export default Header;
