import React, { useEffect, useState } from "react";
import "../styles/MenuItem.css";
import { FaCartPlus } from "react-icons/fa";

import Tag from "./Tag";
import PlaceholderIcon from "./PlaceholderIcon";
import menuAssetData from "../modules/menuData";

function MenuItem({ product, add }) {
  const [image, setImage] = useState("");

  if (!product.available) {
    return "";
  }

  useEffect(() => {
    setImage(menuAssetData[product.name]);
  }, []);

  const itemImage = () => {
    if (image == undefined) {
      return (
        <div
          className={`p-16 py-24 mb-4 flex flex-row justify-center items-center text-5xl bg-gray-300 rounded hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:drop-shadow-lg hover:border-slate-900 transition-all`}
        >
          <PlaceholderIcon category={product.category} />
        </div>
      );
    }
    return (
      <div
        className={`p-16 py-[7.5rem] mb-4 flex flex-row justify-center items-center text-5xl bg-cover rounded hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:drop-shadow-lg hover:border-slate-900 transition-all`}
        style={{ backgroundImage: `url(${menuAssetData[product.name]})` }}
      ></div>
    );
  };

  return (
    <div className="p-3 m-4 rounded-lg border bg-white border-slate-200 shadow-lg flex-1 hover:shadow-xl transition-shadow">
      {itemImage()}
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
