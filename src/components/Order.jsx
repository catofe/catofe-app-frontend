import React from "react";

import PlaceholderIcon from "./PlaceholderIcon";
import Placeholder from "./Placeholder";
import ProductPicture from "./ProductPicture";
import menuAssetData from "../modules/menuData";
import "../styles/Order.css";

function Order({ order }) {
  const instances = order.productInstances;
  const productElement = instances.map((instance) => {
    const productPicture = () => {
      if (menuAssetData[instance.product.name] == "undefined") {
        return (
          <Placeholder
            category={instance.product.category}
            className="rounded p-4 px-5 mr-4 text-3xl"
          />
        );
      }
      return (
        <ProductPicture
          src={menuAssetData[instance.product.name]}
          className="rounded p-4 px-9 drop-shadow-md mr-4 hover:scale-115 hover:drop-shadow-lg transition-all"
        />
      );
    };
    return (
      <div className="order-item">
        {productPicture()}
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
          <p>
            <b>Order ID:</b> {order._id}
          </p>
          <p>
            <p>
              <b>Created At:</b> {new Date(order.createdAt).toLocaleString()}{" "}
            </p>
          </p>
        </p>
      </div>
      <div className="mx-8 mt-2 mb-6">{productElement}</div>
      <div className="total">
        <p>
          <b>Total Price: </b>₱{order.total}
        </p>
      </div>
    </div>
  );
}

export default Order;
