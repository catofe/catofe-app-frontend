import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { UserContext } from "../App";

function Navbar() {
  const [userId, setUserId] = useContext(UserContext);

  let content;
  if (!userId) {
    content = <div></div>;
  }
  if (userId) {
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
