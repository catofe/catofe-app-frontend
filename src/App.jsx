import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export const UserContext = createContext();

function App() {
  const [userId, setUserId] = useState(false);

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
