import React from "react";
import "../styles/CartItem.css";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item, index, increment, decrement, remove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-picture">
        <MdEmojiFoodBeverage />
      </div>
      <div className="cart-item-details">
        <p className="name">
          <b>{item.product.name}</b>{" "}
        </p>
        <p>₱{item.product.price}</p>
        <p>{item.quantity}x</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => decrement(index)}>
          <FaMinus className="icons" />
        </button>
        <button onClick={() => increment(index)}>
          <FaPlus className="icons" />
        </button>
        <button onClick={() => remove(index)}>
          <FaTrash className="icons" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
