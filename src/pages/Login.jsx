import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import "../styles/Login.css";

function Login() {
  const inputStyling = "p-2 mb-4 rounded border-2 border-slate-300";
  const [userId, setUserId] = useContext(UserContext);
  const [incorrect, setIncorrect] = useState(true);
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
        setIncorrect(true);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="p-8 rounded-xl flex flex-col border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
        <h2>
          <b>Login</b>
        </h2>
        <p>Login to your catofe account</p>
        {incorrect ? (
          <div className="mt-4 p-2 rounded flex flex-row gap-2 justify-center items-center bg-red-100 text-red-500 text-center">
            <ImCross className="text-sm" />
            <p>Your email or password is incorrect.</p>
          </div>
        ) : (
          ""
        )}

        <div className="login-label">
          <IoMail />
          <label htmlFor="">Email</label>
        </div>
        <input
          className={`${inputStyling}`}
          placeholder="Enter your email here..."
          type="email"
          onChange={(e) => handleEmailInput(e)}
        />

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Password</label>
        </div>
        <input
          className={`${inputStyling}`}
          placeholder="Enter yout password here..."
          type="password"
          onChange={(e) => handlePasswordInput(e)}
        />

        <button
          className="p-4 mt-8 rounded-lg bg-blue-500 text-white tracking-wide hover:bg-blue-600 active:bg-blue-800 transition-colors"
          type="submit"
          onClick={handleSubmitAuthInfo}
        >
          <b>Login</b>
        </button>

        <p className="login-register-link">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-700 active:text-blue-950 transition-all"
          >
            <b> Create one here</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
