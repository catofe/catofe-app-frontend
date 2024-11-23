import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [userId, setUserId] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);
  return Cart;
}

export default Cart;
