import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import "../styles/Login.css";

function Login() {
  const [userId, setUserId] = useContext(UserContext);
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setAuthInfo({
      ...authInfo,
      email: e.target.value,
    });
  };

  const handlePasswordInput = (e) => {
    setAuthInfo({
      ...authInfo,
      password: e.target.value,
    });
  };

  const handleSubmitAuthInfo = () => {
    axios
      .get(
        `http://localhost:3000/api/user/auth/${authInfo.email}/${authInfo.password}`,
      )
      .then((res) => {
        setUserId(res.data);
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
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
        <input
          className="login-field"
          type="email"
          onChange={(e) => handleEmailInput(e)}
        />

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Password</label>
        </div>
        <input
          className="login-field"
          type="password"
          onChange={(e) => handlePasswordInput(e)}
        />

        <button
          className="login-button"
          type="submit"
          onClick={handleSubmitAuthInfo}
        >
          <b>Login</b>
        </button>

        <p className="login-register-link">
          Don't have an account?
          <Link to="/register">
            <b> Create one here</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
