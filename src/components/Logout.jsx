import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function Logout() {
  const [userId, setUserId] = useState(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    navigate("/login");
  };

  return (
    <div className="p-4 mt-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
      <p className="mb-2 font-semibold text-xl">Log Out</p>
      <hr className="mb-4" />
      <button
        className="p-1 pr-4 pl-2 rounded font-bold text-white bg-blue-500 flex flex-row justify-center items-center gap-2   hover:bg-blue-600 active:bg-blue-800 transition-colors"
        onClick={handleLogout}
      >
        <BiLogOut className="text-xl font-bold" />
        Log Out
      </button>
    </div>
  );
}

export default Logout;
