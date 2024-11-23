import React, { useState, useContext } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import { UserContext } from "../App";
import "../styles/Login.css";

function Login() {
  const [userId, setUserId] = useContext(UserContext);
  const [action, setAction] = useState("");

  const handleLogin = () => {
    setUserId(!userId);
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <label htmlFor="">Email</label>
        <input type="email" />

        <label htmlFor="">Password</label>
        <input type="password" />

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
  // <div className={`wrapper${action}`}>
  //   <div className="form-box login">
  //     <form action="">
  //       <h1>Login</h1>
  //       <div className="input-box">
  //         <FaUser className="icon" />
  //         <input type="text" placeholder="Username" required />
  //       </div>

  //       <div className="input-box">
  //         <FaLock className="icon" />
  //         <input type="password" placeholder="Password" required />
  //       </div>

  //       <div className="remember-forgot">
  //         <label>
  //           <input type="checkbox" />
  //           Remember me{" "}
  //         </label>
  //         <a href="#">Forgot password?</a>
  //       </div>

  //       <button type="submit">Login</button>

  //       <div className="register-link">
  //         <p>
  //           Don't have an account?{" "}
  //           <a href="#" onClick={registerLink}>
  //             Register
  //           </a>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // </div>
}

export default Login;
