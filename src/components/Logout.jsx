import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [userId, setUserId] = useState(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Logout;
