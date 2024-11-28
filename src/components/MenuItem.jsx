import React from "react";
import "../styles/MenuItem.css";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaShoppingCart, FaGripfire } from "react-icons/fa";
import { PiBreadFill, PiSnowflakeBold } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";

function MenuItem({ product, add }) {
  if (!product.available) {
    return "";
  }

  const placeholderIcon = () => {
    if (product.category === "food") {
      return <PiBreadFill />;
    }
    if (product.category === "beverage hot") {
      return <MdEmojiFoodBeverage />;
    }
    if (product.category === "beverage cold") {
      return <RiDrinks2Fill />;
    }
    return <MdEmojiFoodBeverage />;
  };

  const tagElement = (tag) => {
    let color = "bg-slate-200";
    let icon = "";
    if (tag == "cold") {
      color = "bg-blue-100";
      icon = <PiSnowflakeBold />;
    }
    if (tag == "hot") {
      color = "bg-red-100";
      icon = <FaGripfire />;
    }

    return (
      <div
        className={`${color} px-2 rounded-xl flex flex-row justify-center items-center gap-1`}
      >
        {icon}
        {tag.charAt(0).toUpperCase() + tag.slice(1)}
      </div>
    );
  };

  return (
    <div className="p-3 m-4 rounded-lg border-2 bg-white border-slate-200 shadow-lg flex-1 hover:shadow-xl transition-shadow">
      <div className="menu-item-picture hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:shadow-lg hover:border-slate-900 transition-all">
        {placeholderIcon()}
      </div>
      <h3 className="text-xl mb-2">
        <b>{product.name}</b>
      </h3>
      <div className="mb-4 flex flex-row gap-2">
        {product.category.split(" ").map((tag) => {
          return tagElement(tag);
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
          <FaShoppingCart className="mr-2" />
          <b className="text-base">Add To Cart</b>
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
