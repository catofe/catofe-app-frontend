import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoReceiptSharp, IoRestaurant } from "react-icons/io5";
import { FaReceipt, FaShoppingCart } from "react-icons/fa";

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

  const orderItems = () => {
    if (orders.length == 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row gap-4 justify-center drop-shadow-2xl items-center mt-16 text-gray-300 text-2xl font-semibold">
            <FaReceipt className="text-4xl" />
            You haven't made any Orders
          </div>
          <div className="flex flex-col mt-6 justify-center items-center">
            <button
              className="p-2 px-4 flex flex-row justify-center items-center gap-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 active:bg-gray-500 active:text-white hover:shadow-xl active:shadow-md transition-all"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
              <FaShoppingCart />
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    );
  };

  return (
    <div className="lg:mx-64 md:mx-16">
      <h1 className="my-6 text-3xl font-bold tracking-wider drop-shadow-lg flex flex-row gap-4 justify-center items-center">
        <IoReceiptSharp />
        ORDER HISTORY
      </h1>
      <div>{orderItems()}</div>
    </div>
  );
}

export default Orders;
