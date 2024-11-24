import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
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
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Order</Link>
          <Link to="/profile">
            <FaCircleUser className="user-profile-icon" />
          </Link>
        </ul>
      </nav>
    );
  }

  return <div>{content}</div>;
}

export default Navbar;
