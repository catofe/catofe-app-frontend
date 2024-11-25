import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

export const UserContext = createContext();

function App() {
  // const [userId, setUserId] = useState(null);
  const [userId, setUserId] = useState("673d43e49573d461ff5c97df");

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
