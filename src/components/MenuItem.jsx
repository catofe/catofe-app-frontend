import React from "react";
import "../styles/MenuItem.css";
import { MdEmojiFoodBeverage } from "react-icons/md";

function MenuItem({ product, add }) {
  if (!product.available) {
    return "";
  }

  return (
    <div className="menu-item-container">
      <div className="menu-item-picture">
        <MdEmojiFoodBeverage className="menu-item-icon" />
      </div>
      <h3 className="menu-item-name">
        <b>{product.name}</b>
      </h3>
      <p className="menu-item-price">₱{product.price}</p>
      <p className="menu-item-description">{product.description}</p>

      <button className="menu-item-button" onClick={() => add(product._id)}>
        <b>Add To Cart</b>
      </button>
    </div>
  );
}

export default MenuItem;
