import React from "react";
import { FaTrash } from "react-icons/fa";

import PlaceholderIcon from "./PlaceholderIcon";
import "../styles/Order.css";

function Order({ order }) {
  const instances = order.productInstances;
  const productElement = instances.map((instance) => {
    return (
      <div className="order-item">
        <div className="picture">
          <PlaceholderIcon category={instance.product.category} />
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
    <div className="p-4 m-4 mb-6 rounded-lg border shadow-lg bg-white hover:shadow-2xl transition-shadow">
      <div className="order-header">
        <p className="id">
          <b>Order ID:</b> {order._id}
        </p>
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
