import React, { useState, useEffect } from "react";
import "../styles/CartItem.css";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Tag from "./Tag";
import PlaceholderIcon from "./PlaceholderIcon";
import Placeholder from "./Placeholder";
import ProductPicture from "./ProductPicture";
import menuAssetData from "../modules/menuData";

function CartItem({ item, index, increment, decrement, remove }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(menuAssetData[item.product.name]);
  }, []);

  const productPicture = () => {
    if (image == undefined) {
      return (
        <Placeholder
          category={item.product.category}
          className="p-6 mr-4 text-3xl rounded bg-gray-300 "
        />
      );
    }
    return (
      <ProductPicture
        src={image}
        className="p-10 mr-4 rounded drop-shadow-lg"
      />
    );
  };

  return (
    <div className="mb-4 mr-2 shadow-lg rounded-lg border border-gray-200 flex flex-row hover:shadow-xl transition-shadow bg-white">
      <div className="flex flex-row basis-6/12 p-3">
        {productPicture()}
        <div>
          <p className="text-lg mb-2">
            <b>{item.product.name}</b>
          </p>
          <div className="mb-4 flex flex-row gap-2 md:hidden lg:flex">
            {item.product.category.split(" ").map((tag) => {
              return <Tag tag={tag} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 basis-3/12 justify-center items-center">
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors"
          onClick={() => decrement(index)}
        >
          <FaMinus className="text-md" />
        </button>
        <p className="min-w-12 py-0.5 text-center rounded border-2 border-gray-300">
          {item.quantity}
        </p>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors"
          onClick={() => increment(index)}
        >
          <FaPlus className="text-md" />
        </button>
      </div>
      <div className="flex flex-row basis-1/12 justify-center items-center md:hidden lg:flex">
        <p>₱{item.product.price}</p>
      </div>
      <div className="flex flex-row md:basis-2/12 lg:basis-1/12 justify-center items-center">
        <p>₱{item.product.price * item.quantity}</p>
      </div>
      <button
        className="px-6 rounded-r-lg bg-red-200 text-red-900 hover:bg-red-400 hover:text-black active:bg-red-600 active:text-white flex flex-row justify-center items-center transition-colors basis-1/12"
        onClick={() => remove(index)}
      >
        <FaTrash className="text-lg" />
      </button>
    </div>
  );
}

export default CartItem;
