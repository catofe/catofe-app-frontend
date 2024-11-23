import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
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

// function Link({ href, children, ...props }) {
//   const path = window.location.pathname;
//   return (
//     <li className={path === href ? "active" : ""}>
//       <a href={href} {...props}>
//         {children}
//       </a>
//     </li>
//   );
// }
export default Navbar;
