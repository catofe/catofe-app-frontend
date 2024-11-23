import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Order() {
  const navigate = useNavigate();
  const [userId, setUserId] = useContext(UserContext);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>This is the Order Page</h1>
    </div>
  );
}

export default Order;
