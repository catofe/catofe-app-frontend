import React, { useEffect, useState } from "react";
import "../styles/MenuItem.css";
import { FaCartPlus, FaCheck } from "react-icons/fa";

import Tag from "./Tag";
import PopularTag from "./PopularTag";
import PlaceholderIcon from "./PlaceholderIcon";
import Placeholder from "./Placeholder";
import ProductPicture from "./ProductPicture";

import menuAssetData from "../modules/menuData";

function MenuItem({ product, add, highestFrequency }) {
  const [image, setImage] = useState("");
  const [isAdded, setisAdded] = useState(false);

  useEffect(() => {
    console.log(
      product.name,
      product.frequency,
      highestFrequency,
      product.frequency == highestFrequency,
    );
    if (!product.available) {
      return "";
    }

    console.log(product.category);

    setImage(menuAssetData[product.name]);
  }, []);

  const handleAdd = (id) => {
    if (isAdded) {
      return;
    }

    setisAdded(true);
    add(id);
  };

  const itemImage = () => {
    if (image == undefined) {
      return (
        <Placeholder
          category={product.category}
          className="p-16 py-24 mb-4 rounded text-5xl hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:drop-shadow-lg transition-all"
        />
      );
    }
    return (
      <ProductPicture
        src={menuAssetData[product.name]}
        className="p-16 py-[7.5rem] mb-4 text-5xl rounded drop-shadow-md hover:scale-115 hover:-translate-y-2 hover:rounded-lg hover:drop-shadow-lg hover:border-slate-900 transition-all"
      />
    );
  };

  return (
    <div className="p-3 m-4 rounded-lg border bg-white border-slate-200 shadow-lg flex-1 hover:shadow-xl transition-shadow">
      {itemImage()}
      <h3 className="text-xl mb-2">
        <b>{product.name}</b>
      </h3>
      <div className="mb-4 flex flex-row gap-2">
        {product.frequency == highestFrequency ? <PopularTag /> : ""}
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
          className={`p-2 px-4 rounded text-white  flex flex-row justify-center items-center ${isAdded ? "bg-green-500 hover:bg-green-600 active:bg-green-600" : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"} bg-blue-500 hover:bg-blue-600 active:bg-blue-800 transition-colors`}
          onClick={() => handleAdd(product._id)}
        >
          {isAdded ? (
            <FaCheck className="mr-2 text-xl" />
          ) : (
            <FaCartPlus className="mr-2 text-xl" />
          )}
          <b className="text-base">{isAdded ? "ADDED" : "ADD TO CART"}</b>
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
