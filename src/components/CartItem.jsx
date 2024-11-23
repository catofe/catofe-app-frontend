import React from "react";

function CartItem({ item }) {
  console.log(item);
  return (
    <div className="cart-item">
      <p>{item.product.name}</p>
      <p>₱{item.product.price}</p>
      <p>{item.quantity}x</p>
    </div>
  );
}

export default CartItem;
