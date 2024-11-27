import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import "../styles/Login.css";

function Register() {
  const [userId, setUserId] = useContext(UserContext);
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      email: e.target.value,
    });
  };

  const handlePasswordInput = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      password: e.target.value,
    });
  };

  const handleConfirmInput = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      confirm: e.target.value,
    });
  };

  const handleSubmitRegistrationInfo = () => {
    if (registrationInfo.password !== registrationInfo.confirm) {
      alert("Password does not match with Confirm Password");
      return;
    }

    if (registrationInfo.email == "") {
      alert("Please enter a valid email.");
      return;
    }

    if (registrationInfo.password == "") {
      alert("Please enter a password.");
      return;
    }

    if (registrationInfo.password == "") {
      alert("Please enter confirm your password.");
      return;
    }

    const user = {
      username: "User",
      email: registrationInfo.email,
      password: registrationInfo.password,
      contact_no: null,
      cart: [],
      orders: [],
    };

    axios
      .post(`http://localhost:3000/api/user/register/`, user)
      .then((res) => {
        console.log("Request to create new user was successful.");
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });

    axios
      .get(
        `http://localhost:3000/api/user/auth/${registrationInfo.email}/${registrationInfo.password}`,
      )
      .then((res) => {
        setUserId(res.data);
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
          <b>Register</b>
        </h2>
        <p>Create your catofe account</p>

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

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Confirm Password</label>
        </div>
        <input
          className="login-field"
          type="password"
          onChange={(e) => handleConfirmInput(e)}
        />

        <button
          className="login-button"
          type="submit"
          onClick={handleSubmitRegistrationInfo}
        >
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
