import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import MenuItem from "../components/MenuItem";
function Menu() {
  const [userId, setUserId] = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:3000/api/product/`)
      .then((res) => {
        setProducts(res.data);
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
    <div className="menu-container mt-4 lg:mx-32 md:mx-8">
      {products.map((product) => (
        <MenuItem product={product} add={handleAdd} />
      ))}
    </div>
  );
}

export default Menu;
