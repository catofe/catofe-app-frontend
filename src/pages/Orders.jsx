import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoReceiptSharp } from "react-icons/io5";

import { UserContext } from "../App";
import Order from "../components/Order";

function Orders() {
  const [userId, setUserId] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:3000/api/order/${userId}/populate`)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.reverse());
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  return (
    <div className="lg:mx-64 md:mx-16">
      <h1 className="my-6 text-3xl font-bold tracking-wider flex flex-row gap-4 justify-center items-center">
        <IoReceiptSharp />
        YOUR ORDERS
      </h1>
      <div>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
