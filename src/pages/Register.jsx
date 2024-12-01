import React, { useState, useContext } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
import "../styles/Login.css";

function Register() {
  const inputStyling = "p-2 mb-2 rounded border-2 border-slate-300";
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [userId, setUserId] = useContext(UserContext);
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const validateEmail = (e) => {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
  };

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
    setEmptyField(false);
    setInvalidEmail(false);
    setConfirmError(false);

    if (registrationInfo.email == "") {
      setEmptyField(true);
      return;
    }

    if (registrationInfo.password == "") {
      setEmptyField(true);
      return;
    }

    if (registrationInfo.confirm == "") {
      setEmptyField(true);
      return;
    }

    if (!validateEmail(registrationInfo.email)) {
      setInvalidEmail(true);
      return;
    }

    if (registrationInfo.password !== registrationInfo.confirm) {
      setConfirmError(true);
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
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  const showErrorMessage = () => {
    const errorStyling =
      "mt-4 p-2 w-full rounded flex flex-row gap-2 grow-0 basis-0 justify-center items-center bg-red-100 text-red-500 text-center text-wrap";
    if (invalidEmail) {
      return (
        <div className={`${errorStyling}`}>
          The email you entered is invalid
        </div>
      );
    }
    if (confirmError) {
      return (
        <div
          className={`${errorStyling} flex flex-col justify-center items-center`}
        >
          <p>Your password does not match</p>
          <p>with your confirmation</p>
        </div>
      );
    }
    if (emptyField) {
      return (
        <div className={`${errorStyling}`}>
          You have one or more empty fields
        </div>
      );
    }
    return "";
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="p-8 rounded-xl flex flex-col border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
        <h2>
          <b>Register</b>
        </h2>
        <p>Create your catofe account</p>

        {showErrorMessage()}

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
          placeholder="Enter your password here..."
          type="password"
          onChange={(e) => handlePasswordInput(e)}
        />

        <div className="login-label">
          <IoLockClosed />
          <label htmlFor="">Confirm Password</label>
        </div>
        <input
          className={`${inputStyling}`}
          placeholder="Confirm your password here..."
          type="password"
          onChange={(e) => handleConfirmInput(e)}
        />

        <button
          className="p-4 mt-8 rounded-lg bg-blue-500 text-white tracking-wide hover:bg-blue-600 active:bg-blue-800 transition-colors"
          type="submit"
          onClick={handleSubmitRegistrationInfo}
        >
          <b>Register</b>
        </button>

        <p className="login-register-link">
          Have have an account?
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-700 active:text-blue-950 transition-all"
          >
            <b> Login here</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
