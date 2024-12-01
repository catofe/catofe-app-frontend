import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

import CustomLink from "./CustomLink";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  let content;
  if (location.pathname == "/login" || location.pathname == "/register") {
    content = <div></div>;
  } else {
    content = (
      <nav className="p-2 pl-4 pr-3 flex flex-row justify-between items-center bg-black text-white">
        <Link
          className="p-1 px-2 rounded text-2xl font-bold hover:bg-gray-700 active:bg-gray-500 transition-all"
          to="/"
        >
          CATOFE
        </Link>
        <div className="flex flex-row gap-4 justify-center items-center">
          <CustomLink to="/" title="Home" />
          <CustomLink to="/menu" title="Menu" />
          <CustomLink to="/cart" title="Cart" />
          <CustomLink to="/orders" title="Orders" />
          <CustomLink
            to="/profile"
            title={<FaCircleUser className="text-3xl" />}
          />
        </div>
      </nav>
    );
  }

  return <div className="sticky top-0 z-50">{content}</div>;
}

export default Navbar;
