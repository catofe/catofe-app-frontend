import React from "react";

import { MdEmojiFoodBeverage } from "react-icons/md";
import { PiBreadFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";

function PlaceholderIcon({ category }) {
  if (category === "food") {
    return <PiBreadFill className="hover:scale-125 transition-transform" />;
  }
  if (category === "beverage hot") {
    return (
      <MdEmojiFoodBeverage className="hover:scale-125 transition-transform" />
    );
  }
  if (category === "beverage cold") {
    return <RiDrinks2Fill className="hover:scale-125 transition-transform" />;
  }
  return (
    <MdEmojiFoodBeverage className="hover:scale-125 transition-transform" />
  );
}

export default PlaceholderIcon;
