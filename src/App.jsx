import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

export const UserContext = createContext();

function App() {
  // const [userId, setUserId] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
