import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  let content;
  if (location.pathname == "/login" || location.pathname == "/register") {
    content = <div></div>;
  } else {
    content = (
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Catofe
        </a>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/profile">Profile</Link>
        </ul>
      </nav>
    );
  }

  return <div>{content}</div>;
}

export default Navbar;
