import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";

import { UserContext } from "../App";
import "../styles/Login.css";

function Login() {
  const [userId, setUserId] = useContext(UserContext);

  const handleLogin = () => {
    setUserId(!userId);
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h2>
          <b>Login</b>
        </h2>
        <p>Login to your catofe account</p>

        <div className="login-label">
          <IoMail />
          <label htmlFor="">Email</label>
        </div>
        <input className="login-field" type="email" />

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Password</label>
        </div>
        <input className="login-field" type="password" />

        <button className="login-button" type="submit" onClick={handleLogin}>
          <b>Login</b>
        </button>

        <p className="login-register-link">
          Don't have an account? <b>Create one here</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
