import React from "react";
import PlaceholderIcon from "./PlaceholderIcon";

function Placeholder({ category, className }) {
  return (
    <div
      className={`${className} flex flex-row justify-center items-center bg-gray-300`}
    >
      <PlaceholderIcon category={category} />
    </div>
  );
}

export default Placeholder;
