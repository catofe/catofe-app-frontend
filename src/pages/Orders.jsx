import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        setOrders(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  const handleRemove = (index) => {
    const order = orders[index];
    const order_id = order._id;

    axios
      .delete(
        `http://localhost:3000/api/order/${userId}/delete_order/${order_id}/populate`,
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  return (
    <div>
      {orders.map((order, index) => (
        <Order order={order} index={index} remove={handleRemove} />
      ))}
    </div>
  );
}

export default Orders;
