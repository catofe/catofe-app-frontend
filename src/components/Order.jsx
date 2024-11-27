import React from "react";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import "../styles/Order.css";

function Order({ order, index, remove }) {
  const instances = order.productInstances;
  const productElement = instances.map((instance) => {
    return (
      <div className="order-item">
        <div className="picture">
          <MdEmojiFoodBeverage />
        </div>
        <div className="details">
          <p>
            <b>{instance.product.name}</b>
          </p>
          <p>₱{instance.product.price}</p>
          <p>{instance.quantity}x</p>
        </div>
      </div>
    );
  });

  return (
    <div className="order">
      <div className="order-header">
        <p className="id">
          <b>Order ID:</b> {order._id}
        </p>
        <button className="delete" onClick={() => remove(index)}>
          <FaTrash />
        </button>
      </div>
      {productElement}
      <div className="total">
        <p>
          <b>Total Price: </b>₱{order.total}
        </p>
      </div>
    </div>
  );
}

export default Order;
