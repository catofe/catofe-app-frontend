import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CustomLink({ to, title }) {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == to) {
      setActive(true);
    }
    if (location.pathname != to) {
      setActive(false);
    }
  }, [location.pathname]);

  return (
    <Link
      className={`p-1 px-2 rounded ${active ? "bg-white text-black " : "bg-black text-white hover:bg-gray-700 active:bg-gray-500"} transition-all`}
      to={to}
    >
      {title}
    </Link>
  );
}

export default CustomLink;
