import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import LoginRegister from "./Components/LoginRegister/LoginRegister";

export const UserContext = createContext();

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
