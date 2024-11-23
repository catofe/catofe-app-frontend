import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import CartItem from "../components/CartItem";

function Cart() {
  const [userId, setUserId] = useContext(UserContext);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:3000/api/cart/${userId}/detailed`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  return (
    <div>
      {items.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

export default Cart;
