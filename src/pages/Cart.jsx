import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../App";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

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
        console.log(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  const handleIncrement = (index) => {
    const temp = [...items];
    temp[index].quantity++;
    setItems(temp);
    handleUpdate();
  };

  const handleDecrement = (index) => {
    const temp = [...items];
    temp[index].quantity = Math.max(0, temp[index].quantity - 1);

    if (temp[index].quantity <= 0) {
      handleRemove(index);
      return;
    }

    setItems(temp);
    handleUpdate();
  };

  const handleRemove = (index) => {
    const temp = [...items];
    console.log(temp[index]);

    axios
      .delete(
        `http://localhost:3000/api/cart/${userId}/remove_from_cart/${temp[index]._id}/detailed`,
      )
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  const handleCheckout = () => {
    axios
      .put(`http://localhost:3000/api/order/${userId}/generate_order/`)
      .then((res) => {
        setItems(res.data);
        navigate("/orders");
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://localhost:3000/api/cart/${userId}/update_cart/detailed`,
        items,
      )
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="mt-6 text-3xl font-bold tracking-wider flex flex-row gap-4 justify-center items-center">
        <FaShoppingCart />
        SHOPPING CART
      </h1>
      <div className="cart-container lg:mx-32 md:mx-8 mt-6 max-h-dvh">
        <div className="items-section">
          <div className="flex flex-row my-3 text-center font-semibold text-gray-500">
            <p className="basis-6/12">Product</p>
            <p className="basis-3/12">Quantity</p>
            <p className="lg:inline md:hidden basis-1/12">Price</p>
            <p className="md:basis-2/12 lg:basis-1/12">Total</p>
            <div className="basis-1/12"></div>
          </div>
          <div className="overflow-y-scroll max-h-full">
            {items.map((item, index) => (
              <CartItem
                item={item}
                index={index}
                increment={handleIncrement}
                decrement={handleDecrement}
                remove={handleRemove}
              />
            ))}
          </div>
        </div>
        <div className="checkout-container mt-8">
          <div className="checkout-section">
            <h2 className="checkout-header">
              <b>Summary</b>
            </h2>
            {items.map((item) => createCheckoutItem(item))}
            <hr />
            <div className="checkout-total">
              <p className="text">
                <b>Total</b>
              </p>
              <p className="total">
                ₱
                {items.reduce(
                  (total, item) => total + item.product.price * item.quantity,
                  0,
                )}
              </p>
            </div>
            <div className="checkout-footer">
              <button
                className="ml-auto p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-800 transition-colors"
                onClick={handleCheckout}
              >
                <b>CHECKOUT</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function createCheckoutItem(item) {
  return (
    <div className="checkout-item ">
      <p className="name">{item.product.name}</p>
      <p className="quantity">{item.quantity}x</p>
      <p className="price">₱{item.product.price}</p>
    </div>
  );
}

export default Cart;
