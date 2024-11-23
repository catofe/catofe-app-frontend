import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

import { UserContext } from "../App";
import "../styles/Login.css";

function Register() {
  const [userId, setUserId] = useContext(UserContext);

  const handleLogin = () => {
    setUserId(!userId);
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h2>
          <b>Register</b>
        </h2>
        <p>Create your catofe account</p>

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

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Confirm Password</label>
        </div>
        <input className="login-field" type="password" />

        <button className="login-button" type="submit" onClick={handleLogin}>
          <b>Register</b>
        </button>

        <p className="login-register-link">
          Have have an account?
          <Link to="/login">
            <b> Login here</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
