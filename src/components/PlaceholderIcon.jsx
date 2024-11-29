import React from "react";

import { MdEmojiFoodBeverage } from "react-icons/md";
import { PiBreadFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";

function PlaceholderIcon({ category }) {
  if (category === "food") {
    return <PiBreadFill />;
  }
  if (category === "beverage hot") {
    return <MdEmojiFoodBeverage />;
  }
  if (category === "beverage cold") {
    return <RiDrinks2Fill />;
  }
  return <MdEmojiFoodBeverage />;
}

export default PlaceholderIcon;
