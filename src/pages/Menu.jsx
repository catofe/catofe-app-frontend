import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoRestaurant } from "react-icons/io5";
import { UserContext } from "../App";
import MenuItem from "../components/MenuItem";
function Menu() {
  const [userId, setUserId] = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [highestFrequency, setHighestFrequency] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/`)
      .then((res) => {
        setProducts(res.data);

        let max = 0;
        for (let index = 0; index < res.data.length; index++) {
          const product = res.data[index];
          if (product.frequency > max) {
            max = product.frequency;
          }
        }

        setHighestFrequency(max);

        console.log(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  const handleAdd = (id) => {
    console.log(id);
    const product_instance = {
      product: id,
      quantity: 1,
    };

    axios
      .put(
        `http://localhost:3000/api/cart/${userId}/add_to_cart`,
        product_instance,
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  return (
    <div className="lg:mx-32 md:mx-8">
      <h1 className="mt-6 mb-4 text-3xl drop-shadow-lg font-bold tracking-wider flex flex-row gap-4 justify-center items-center">
        <IoRestaurant />
        CATOFE'S MENU
      </h1>
      <div className="menu-container">
        {products.map((product) => (
          <MenuItem
            product={product}
            add={handleAdd}
            highestFrequency={highestFrequency}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
