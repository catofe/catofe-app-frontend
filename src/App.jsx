import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import LoginRegister from "./components/LoginRegister/LoginRegister";

export const UserContext = createContext();

function App() {
  const [userId, setUserId] = useState(false);

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <button onClick={() => setUserId(!userId)}>Switch User State</button>
    </UserContext.Provider>
  );
}

export default App;
