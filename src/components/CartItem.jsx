import React from "react";
import "../styles/CartItem.css";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaTrash, FaPlus, FaMinus, FaGripfire } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { PiBreadFill, PiSnowflakeBold } from "react-icons/pi";

function CartItem({ item, index, increment, decrement, remove }) {
  const placeholderIcon = () => {
    if (item.product.category === "food") {
      return <PiBreadFill />;
    }
    if (item.product.category === "beverage hot") {
      return <MdEmojiFoodBeverage />;
    }
    if (item.product.category === "beverage cold") {
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
        className={`${color} px-2 rounded-xl text-gray-600 flex flex-row justify-center items-center gap-1`}
      >
        {icon}
        {tag.charAt(0).toUpperCase() + tag.slice(1)}
      </div>
    );
  };

  return (
    <div className="mb-4 mr-2 shadow-lg rounded-lg border border-gray-200 flex flex-row hover:shadow-xl transition-shadow bg-white">
      <div className="flex flex-row basis-6/12 p-3">
        <div className="p-6 mr-4 text-3xl rounded bg-gray-300 flex flex-col justify-center items-center">
          {placeholderIcon()}
        </div>
        <div>
          <p className="text-lg mb-2">
            <b>{item.product.name}</b>
          </p>
          <div className="mb-4 flex flex-row gap-2 md:hidden lg:flex">
            {item.product.category.split(" ").map((tag) => {
              return tagElement(tag);
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
