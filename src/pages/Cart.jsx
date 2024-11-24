import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="cart-container">
      <div className="items-section">
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
      <div className="checkout-container">
        <div className="checkout-section">
          <h2 className="checkout-header">
            <b>Checkout Info</b>
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
            <button className="checkout-button">
              <b>Checkout</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function createCheckoutItem(item) {
  return (
    <div className="checkout-item">
      <p className="name">{item.product.name}</p>
      <p className="quantity">{item.quantity}x</p>
      <p className="price">₱{item.product.price}</p>
    </div>
  );
}

export default Cart;
