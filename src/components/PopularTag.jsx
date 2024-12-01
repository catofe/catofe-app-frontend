import React from "react";
import { FaCrown } from "react-icons/fa";

function PopularTag() {
  return (
    <div className="bg-yellow-100 px-2 rounded-xl flex flex-row justify-center items-center gap-1">
      <FaCrown />
      Popular
    </div>
  );
}

export default PopularTag;
