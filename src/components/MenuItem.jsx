import React from "react";
import "../styles/MenuItem.css";
import { FaCartPlus } from "react-icons/fa";

import Tag from "./Tag";
import PlaceholderIcon from "./PlaceholderIcon";

function MenuItem({ product, add }) {
  if (!product.available) {
    return "";
  }

  return (
    <div className="p-3 m-4 rounded-lg border bg-white border-slate-200 shadow-lg flex-1 hover:shadow-xl transition-shadow">
      <div className="menu-item-picture hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:shadow-lg hover:border-slate-900 transition-all">
        <PlaceholderIcon category={product.category} />
      </div>
      <h3 className="text-xl mb-2">
        <b>{product.name}</b>
      </h3>
      <div className="mb-4 flex flex-row gap-2">
        {product.category.split(" ").map((tag) => {
          return <Tag tag={tag} />;
        })}
      </div>
      <p className="h-16 mb-1 text-gray-500">{product.description}</p>

      <div className="flex flex-row justify-center items-center">
        <p className=" flex-1 text-lg">
          <b>₱ {product.price}.00</b>
        </p>
        <button
          className="p-2 px-4 rounded text-white bg-blue-500 flex flex-row justify-center items-center hover:bg-blue-600 active:bg-blue-800 transition-colors"
          onClick={() => add(product._id)}
        >
          <FaCartPlus className="mr-2 text-xl" />
          <b className="text-base">ADD TO CART</b>
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
