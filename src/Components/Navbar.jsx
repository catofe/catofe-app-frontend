import React, { Children, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { UserContext } from "../App";

function Navbar() {
  const [userId, setUserId] = useContext(UserContext);

  let content;
  if (userId) {
    content = <div></div>;
  }
  if (!userId) {
    content = (
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Catofe
        </a>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Order">Order</Link>
          <Link to="/Profile">Profile</Link>
        </ul>
      </nav>
    );
  }

  return <div>{content}</div>;
}

export default Navbar;
